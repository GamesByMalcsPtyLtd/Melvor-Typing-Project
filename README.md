# Melvor Typing Project
## Disclaimer
1. The software license provided for this program only includes the distributed files.
2. Do not use this project to distribute the source files of Melvor Idle.
## Installation
1. If you do not have it installed yet, install [Node.js](https://nodejs.org/en/)
2. Install the project's dependencies with `npm install`
3. Initialize the project with `npm run init`. This will automatically download the game's source files to ./rawSources/, modify them and save the modified files to ./src/game/

## Building the Type Definition File
1. Simply run `tsc` to generate ./out/melvorTypes.d.ts
2. If you are using Vscode, this project includes a `build` task which can be run with `CTRL+SHIFT+B` that will automatically put type-errors in the Problems panel.

## Game Type Definitions
This project also includes official type definitions generated from the game's sources (with permission).
These files can be found in `src/gameTypes`
## Building the Distributable Version
1. Run `npm run buildRelease`. This will copy the minimal files required to build this project to the folder ../MTP/

## Updating the source files
1. Run the command `npm run update`. 

Note: This command will overwrite the files in ./rawSources/ and ./src/game/
### This command will:
1. Automatically download the latest source files to ./rawSources/
2. Modify the sources with the existing documentation in ./src/game/
3. Generate a ./out/applyGuide.json, which can be used to generate the documented sources via `npm run init`