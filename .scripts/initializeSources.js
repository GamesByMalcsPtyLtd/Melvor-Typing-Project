/*  Melvor Typing Project v1.10.0: Fetches and Documents Melvor Idle

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

const { getAllSources, applyGuideToSources } = require("./sourceGetter");
// Gets the source files and modifies them
console.log('Initializing Sources')
getAllSources('./rawSources/').then((result) => {
  applyGuideToSources('./out/applyGuide.json', './rawSources/', './src/game/');
}
)