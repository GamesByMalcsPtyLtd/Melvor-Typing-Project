/*  Melvor Typing Project v1.5.4: Fetches and Documents Melvor Idle

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
const fs = require('fs');
const versionRegex = /\d+\.\d+\.\d+/m;
const newVersion = '1.5.4';
const fileDirs = [
  './.scripts/',
  './src/customTypes/'
]
/**
 * 
 * @param {string} fullPath 
 */
function updateFileVersion(fullPath) {
  const newFileText = fs.readFileSync(fullPath,'utf8').replace(versionRegex,newVersion);
  fs.writeFileSync(fullPath,newFileText);
  console.log(`Updated version of ${fullPath} to ${newVersion}`);
}
if (versionRegex.test(newVersion)) {
  fileDirs.forEach((directory)=>{
    fs.readdirSync(directory).forEach((fileName)=>{
      const fullPath = directory + fileName;
      updateFileVersion(fullPath);
    })
  });
  updateFileVersion('./package.json')
} else {
  console.warn('New version is not valid');
}