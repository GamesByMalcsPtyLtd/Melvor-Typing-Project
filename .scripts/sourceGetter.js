/*  Melvor Typing Project v1.9.2: Fetches and Documents Melvor Idle

    Copyright (C) <2021>  <Coolrox95>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
// @ts-check
const https = require('https');
const fs = require('fs');
const prettier = require('prettier');
const gameURL = "https://www.melvoridle.com/";
const htmlQuery = "?l=1";
const sourceRegexp = /^<script type="(text|application)\/javascript" src="(?<path>assets\/js\/(game\/)?(?<name>\w*.js))\?(?<fileVersion>\d+)"><\/script>/;
const jsdocStart = /^\s*\/\*{2}/;
const jsdocEnd = /\*\/\s*$/;
/**
 * Reads the https web url and returns a promise that resolves as a string
 * @param {string} webURL 
 * @param {string} desiredType 
 * @returns {Promise<string>}
 */
function getURLasString(webURL, desiredType) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    const request = https.get(webURL, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      let error;
      /** Checks for succesful status */
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      } else if (!contentType.startsWith(desiredType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected ${desiredType} but received ${contentType}`);
      }
      if (error) {
        reject(error.message);
        res.resume();
        return;
      }
      // Event for data chunk recieved
      res.on('data', (chunk) => {
        chunks.push(chunk);
      });
      // Event for end of request
      res.on('end', () => {
        console.log(`Fetched text from: ${webURL}`)
        resolve(Buffer.concat(chunks).toString('utf8'));
      })
    })
  })
}

/**
 * @typedef {Object} GameSource
 * @prop {string} name name of file including extension
 * @prop {string} path full path to file
 * @prop {number} version version of file
 */

/**
 * @typedef {Object} JavascriptCode
 * @prop {string} desc Description of code
 * @prop {string} text Body of code
 */

/**
 * 
 * @param {string} outDir 
 */
async function getAllSources(outDir) {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const indexHtml = await getURLasString(gameURL + htmlQuery, 'text/html');
  fs.writeFileSync(outDir + 'index.html', indexHtml);
  console.log(`Wrote file ${outDir + 'index.html'}`);
  const sources = getSourcePathsFromIndex(indexHtml);
  return Promise.all(sources.map(async source => {
    const code = await fetchGameSourceText(source);
    writeJavascriptToFile(outDir, source.name, code);
    return true;
  }));
}

/**
 * Parses index HTML and get game source files from it
 * @param {string} indexhtml 
 */
function getSourcePathsFromIndex(indexhtml) {
  const lines = indexhtml.split(/\r?\n/);
  /** @type {GameSource[]} */
  const sources = [];
  lines.forEach((line) => {
    let matches = line.match(sourceRegexp);
    if (matches !== null) {
      sources.push({
        name: matches.groups.name,
        path: matches.groups.path,
        version: parseInt(matches.groups.fileVersion)
      });
    }
  });
  return sources;
}

/**
 * Fetches an individual game source
 * @param {GameSource} source 
 */
async function fetchGameSourceText(source) {
  const text = await getURLasString(`${gameURL}${source.path}?${Date.now()}`, 'application/javascript');
  return {
    text: text,
    desc: `// ${source.name} v${source.version}`
  };
}

/**
 * 
 * @param {string} filePath 
 * @param {string} fileName 
 * @param {JavascriptCode} code 
 */
function writeJavascriptToFile(filePath, fileName, code) {
  fs.writeFileSync(filePath + fileName, `${code.desc}\n${prettifyCode(code.text)}`)
  console.log(`Wrote file ${filePath + fileName}`)
}

/**
 * 
 * @param {string} code 
 */
function prettifyCode(code) {
  return prettier.format(code, {
    semi: true,
    singleQuote: true,
    parser: 'babel',
  });
}

/** 
 * @typedef {Object} ApplyGuide
 * @prop {string} file
 * @prop {{lineNumber: number; lines: string[]}[]} insert
 * @prop {{lineNumber: number; text: string}[]} replace
 * @prop {number} version
 */

/**
 * @typedef {Object} CommentGuide
 * @prop {string[]} commentLines
 * @prop {string} nextLine
 * @prop {number} prevOccurences
 * @prop {number} length
 */

/**
 * @typedef {Object} ModificationGuide
 * @prop {CommentGuide[]} comments Comments to be inserted when found
 * @prop {string[]} headerLines Tripleslash directives to be inserted at the top before comment insertion
 */

/**
 * 
 * @param {string} filePath 
 * @param {string} fileName 
 * @returns {ModificationGuide}
 */
function generateModGuide(filePath, fileName) {
  const typeCast = /^\s*(\w+) = \/\*\* @type {\w+} \*\/ \(\1\);/;
  const ignoreError = /^\s*\/\/ @ts-ignore$/;
  const tripleSlash = /\/\/\/ \<reference path = \"\w*\.js\"\/\>/;
  /** @type {CommentGuide[]} */
  const comments = [];
  const headerLines = [];
  const filetext = fs.readFileSync(filePath + fileName, 'utf8');
  const fileLines = filetext.split(/\r?\n/);
  let commentStartLine = -1;
  let commentEndLine = -1;
  let lastCommentEndLine = 0;
  let commentStarted = false;
  fileLines.forEach((line, lineNumber) => {
    if (tripleSlash.test(line)) headerLines.push(line);
    const singleLine = typeCast.test(line) || ignoreError.test(line);
    if (jsdocStart.test(line) || singleLine) {
      commentStartLine = lineNumber;
      commentStarted = true;
    }
    if ((jsdocEnd.test(line) || singleLine) && commentStarted) {
      commentEndLine = lineNumber;
      const nextLine = fileLines[commentEndLine + 1];
      //Find all previous occurences of nextLine between the last comment and this one
      let prevOccurences = 0;
      for (let i = lastCommentEndLine + 2; i < commentStartLine; i++) {
        if (fileLines[i] === nextLine) prevOccurences++;
      }
      comments.push({
        commentLines: fileLines.slice(commentStartLine, commentEndLine + 1),
        nextLine: fileLines[commentEndLine + 1],
        prevOccurences: prevOccurences,
        length: commentEndLine - commentStartLine + 1
      });
      lastCommentEndLine = commentEndLine;
      commentStarted = false;
    }
  });
  return {
    comments: comments,
    headerLines: headerLines,
  };
}

/**
 * 
 * @param {string} firstLine 
 * @returns 
 */
function getVersion(firstLine) {
  return parseInt(firstLine.match(/v(?<version>\d+)$/).groups.version);
}

/**
 * @param {ModificationGuide} modGuide The application guide for the target file
 * @param {string} targetPath The path to the target file to apply jsdoc to
 * @param {string} targetFile The name of the target file to apply jsdoc to
 * @param {string} outPath The path to output the modified file to
 * @param {string} outName The name to output the modified file to
 * @param {FileLogger} transferLog
 * @returns {ApplyGuide} 
 */
function applyModGuide(modGuide, targetPath, targetFile, outPath, outName, transferLog) {
  const targetText = fs.readFileSync(targetPath + targetFile, 'utf8');
  const targetLines = targetText.split(/\r?\n/);
  const commentRegex = /\s*\/\/.*$/;
  const classNameRegex = /(?<className>(exp|masteryExp|bankUpgradeCost|newBankUpgradeCost|newNewBankUpgradeCost)\(\))/;
  /**
   * @type {ApplyGuide}
   */
  const applyGuide = {
    file: targetFile,
    insert: [],
    replace: [],
    version: -1,
  };
  if (targetFile === 'index.html') {
    fs.writeFileSync(outPath + outName, targetText);
    transferLog.log(`Applied Modifications and wrote to ${outPath}${outName}`);
    return applyGuide;
  }
  targetLines.forEach((line, index) => {
    if (index === 0) applyGuide.version = getVersion(line);
    const replaceMatches = line.match(classNameRegex);
    if (replaceMatches !== null) {
      const oldClassName = replaceMatches.groups.className;
      const newClassName = `${oldClassName.charAt(0).toUpperCase()}${oldClassName.slice(1)}`;
      targetLines[index] = line.replace(oldClassName, newClassName);
      applyGuide.replace.push({
        lineNumber: index,
        text: targetLines[index]
      });
    }
  })
  const outLines = [];
  if (modGuide.headerLines.length > 0) {
    outLines.push(...modGuide.headerLines);
    applyGuide.insert.push({
      lineNumber: 0,
      lines: modGuide.headerLines
    })
  }
  let lastDocPos = 0;
  // Need to modify this to replace JSdocs that share the same target
  const existingModGuide = generateModGuide(targetPath, targetFile);
  modGuide.comments.forEach(jsdoc => {
    if (!checkForExistingComment(existingModGuide, jsdoc)) {
      const replaceComment = findSamePlaceComment(existingModGuide, jsdoc);
      let nextLinesFound = -1;
      let commentPositionFound = false;
      for (let i = lastDocPos + 1; i < targetLines.length; i++) {
        if (targetLines[i].replace(commentRegex, '') === jsdoc.nextLine.replace(commentRegex, '')) nextLinesFound++;
        if (nextLinesFound === jsdoc.prevOccurences) {
          if (replaceComment !== undefined) {
            outLines.push(...targetLines.slice(lastDocPos, i - replaceComment.length));
            outLines.push(...jsdoc.commentLines);
            replaceComment.commentLines.forEach((line,j)=>{
              applyGuide.replace.push({
                lineNumber: i - replaceComment.length + j,
                text: jsdoc.commentLines[j]
              })
            })
            applyGuide.insert.push({
              lineNumber: i,
              lines: jsdoc.commentLines.slice(replaceComment.length)
            })
            lastDocPos = i;
            commentPositionFound = true;
          } else {
            outLines.push(...targetLines.slice(lastDocPos, i));
            outLines.push(...jsdoc.commentLines);
            applyGuide.insert.push({
              lineNumber: i,
              lines: jsdoc.commentLines
            })
            lastDocPos = i;
            commentPositionFound = true;
          }
          break;
        }
      }
      if (!commentPositionFound) transferLog.warn(`Could not find line: ${jsdoc.nextLine}\n in: ${targetFile}\n with comment:\n ${jsdoc.commentLines.join('\n')}`)
    }
  });
  outLines.push(...targetLines.slice(lastDocPos));
  fs.writeFileSync(outPath + outName, outLines.join('\n'));
  transferLog.log(`Applied Modifications and wrote to ${outPath}${outName}`);
  return applyGuide;
}

/**
 * 
 * @param {ModificationGuide} existingModGuide 
 * @param {CommentGuide} jsdoccomment 
 */
function checkForExistingComment(existingModGuide, jsdoccomment) {
  return existingModGuide.comments.some((comment) => {
    return JSON.stringify(comment) === JSON.stringify(jsdoccomment);
  })
}

/**
 * 
 * @param {ModificationGuide} existingModGuide 
 * @param {CommentGuide} jsdoc 
 * @returns {CommentGuide|undefined}
 */
function findSamePlaceComment(existingModGuide, jsdoc) {
  return existingModGuide.comments.find((comment) => { return comment.nextLine === jsdoc.nextLine });
}

class FileLogger {
  constructor(name) {
    const timeStamp = new Date();
    const fileName = `${name}-${timeStamp.getFullYear()}-${timeStamp.getMonth()}-${timeStamp.getDay()}_${timeStamp.getHours()}.${timeStamp.getMinutes()}.${timeStamp.getSeconds()}.${timeStamp.getMilliseconds()}.txt`;
    fs.writeFileSync(fileName,'',{
      encoding: 'utf8'
    });
    /** @type {fs.WriteStream} */
    this.logFile = fs.createWriteStream(fileName);
  }
  /**
   * 
   * @param {'Log'|'Warn'|'Error'} type 
   * @param {string} message 
   */
  writeToLog(type, message) {
    const timeStamp = new Date();
    let typeText;
    switch (type) {
      case 'Log':
        typeText = '[Info]'
        break;
      case 'Warn':
        typeText = '[Warning]'
        break;
      case 'Error':
        typeText = '[Error]'
        break;
      default:
        throw new Error('Unknown message type.')
    }
    this.logFile.write(`${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}.${timeStamp.getMilliseconds()} ${typeText} ${message}\n`,'utf8')
  }
  /**
   * 
   * @param {string} message 
   */
  log(message) {
    this.writeToLog('Log',message)
  }
  /**
   * 
   * @param {string} message 
   */
  warn(message) {
    this.writeToLog('Warn',message)
  }
  /**
   * 
   * @param {string} message 
   */
  error(message) {
    this.writeToLog('Error',message)
  }
  closeFile() {
    this.logFile.close();
  }
}

/**
 * Transfers JSDoc comments from files in fromPath to the files in targetPath, and writes the modified files to outPath
 * @param {string} fromPath Folder to get JSDoc from
 * @param {string} targetPath Folder to apply JSDoc to
 * @param {string} outPath Folder to save new files to
 */
function transferJSDoc(fromPath, targetPath, outPath) {
  const fromFiles = fs.readdirSync(fromPath);
  const toFiles = fs.readdirSync(targetPath);
  if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });
  const applyGuides = [];
  const transferLog = new FileLogger('transferLog');
  fromFiles.forEach((fromName) => {
    if (toFiles.includes(fromName)) {
      const jsdocs = generateModGuide(fromPath, fromName);
      applyGuides.push(applyModGuide(jsdocs, targetPath, fromName, outPath, fromName, transferLog));
    } else {
      transferLog.warn(`Could not find file: ${fromName} in target directory.`)
    }
  });
  fs.writeFileSync('./out/applyGuide.json', JSON.stringify(applyGuides));
  transferLog.log(`Wrote application guide to ./out/applyGuide.json`);
  transferLog.closeFile();
}
/**
 * @param {string} applyGuidePath The path to the json apply file
 * @param {string} targetPath The target folder to apply to
 * @param {string} outPath 
 */
function applyGuideToSources(applyGuidePath, targetPath, outPath) {
  /** @type {ApplyGuide[]} */
  const applyGuides = JSON.parse(fs.readFileSync(applyGuidePath, 'utf8'));
  const targetDir = fs.readdirSync(targetPath);
  if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });
  applyGuides.forEach((guide) => {
    if (targetDir.includes(guide.file)) {
      const targetFile = fs.readFileSync(targetPath + guide.file, 'utf8');
      const targetLines = targetFile.split(/\r?\n/);
      if (guide.file === 'index.html') {
        fs.writeFileSync(outPath + guide.file, targetFile);
        return;
      }
      const targetVersion = getVersion(targetLines[0]);
      if (targetVersion === guide.version) {
        guide.replace.forEach((replacement) => {
          targetLines[replacement.lineNumber] = replacement.text;
        });
        const outLines = [];
        let curPos = 0;
        guide.insert.forEach(insertion => {
          outLines.push(...targetLines.slice(curPos, insertion.lineNumber), ...insertion.lines);
          curPos = insertion.lineNumber;
        });
        outLines.push(...targetLines.slice(curPos));
        fs.writeFileSync(outPath + guide.file, outLines.join('\n'));
      } else {
        console.warn(`Cannot apply guide to ${guide.file}, target has version v${targetVersion}, but guide has version v${guide.version}`);
      }
    } else {
      console.warn(`Could not find file ${guide.file} in ${targetPath}`)
    }
  })
  console.log('Applied Guide to Source Files')
}

module.exports.getAllSources = getAllSources;
module.exports.applyGuideToSources = applyGuideToSources;
module.exports.transferJSDoc = transferJSDoc;