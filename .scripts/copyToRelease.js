/*  Melvor Typing Project v1.3.0: Fetches and Documents Melvor Idle

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
const packList = require('npm-packlist');
const path = require('path');
const fs = require('fs');
const packageDir = './'
const copyDir = '../MTP/'
packList({path: packageDir}).then(files=>{
  files.forEach((filePath)=>{
    const fromPath = packageDir+filePath;
    const toPath = copyDir+filePath;
    const toDir = path.dirname(toPath);
    if (!fs.existsSync(toDir)) fs.mkdirSync(toDir,{recursive: true});
    fs.copyFileSync(fromPath,toPath);
    console.log(`Copied ${fromPath} to ${toPath}`);
  });
});