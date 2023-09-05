# Changelog
## v1.13.0
  - Updated types to match game version V1.2 (?7650)
  - Updated package.json to reflect changes to libraries shipped with the game
## v1.12.0
  - Updated types to match game version V1.1.2 (?5867)
## v1.11.2
  - Improved the type definitions for Class method and property patching
## v1.11.1
  - Update types to match game version V1.1.1 (?5064)
  - Added missing type definition file for GameDataPackage
  - Type definitions have been generated without private/protected fields, to make method patching easier
## v1.11.0
  - Update to V1.1.0
  - Removed the old source getting and documentation code as this is no longer required to use the type defs
  - Updated the official type definitions
  - Changed Read Me to reflect the changes to this project
## v1.10.2
  - Update to Alpha v0.22.1 (?1183)
## v1.10.1
 - Update to support cachebuster version v1181
 - Minor fixes to some type defs
## v1.10.0
 - Update to support v0.22, cachebuster version v1180
 - Updated Official typedefs
 - Changed src/customTypes/gameTypes.ts to gameTypes/gameTypes.d.ts
 - If you are updating this project, I recommend removing everything from the `src/game` folder and running `npm run init` before building the typedefs
 - Update script now outputs logs to logs/*.txt
## v1.9.3
 - Update to cachebuster version v1120
## v1.9.2
 - Update to cachebuster version v1115
## v1.9.1
- Update to cachebuster version v1113
- Updated shop.js JSDOC
## v1.9.0
- Updated to support v0.21, cachebuster version v1106
- Added Official Typedefs from game sources to src/gameTypes
- Removed files that are covered by official typdefs (If you are updating this project, I recommend removing everything from the `src/game` folder and running `npm run init` before building)
- Changed update script to output logs to a file instead of console
## v1.8.4
- Updated to cachebuster version v960
## v1.8.3
- Updated to cachebuster version v943
## v1.8.2
- Updated to cachebuster version v933
## v1.8.1
- Updated to cachebuster version v908
## v1.8.0
- Updated to cachebuster version v906
## v1.7.0
- Updated to cachebuster version v832
- Added type def for gamemode data
- Added type def for random modifier for chaos mode
- Added types to new chaos mode functions
## v1.6.2
- Updated to cachebuster version v831
## v1.6.1
- Updated to cachebuster version v826
## v1.6.0
- Updated to cachebuster version v825
- Removed some old properties from special attack interfaces
- Added description to now implemented lifesteal modifier
- Changed source documentation code to skip existing JSdoc comments in the source code
- Changed source documentation code to support changing existing JSdoc comments to something else
- Documented serializeSave.js
## v1.5.4
- Fixed a bug where tsc wasn't working
## v1.5.3
- Updated to cachebuster version v819
## v1.5.2
- Updated to cachebuster version v818
## v1.5.1
- Updated to cachebuster version v817
## v1.5.0
- Updated to cachebuster version v813
- Improved SaveGame type, and added some notes on variables that could be reduced in size or eliminated
- Deprecated unused functions and variables
## v1.4.1
- Updated to cachebuster version v809
## v1.4.0
- Fixed fetching the index.html of the splash page and not the game
- Annotated some new combat variables
- Type annotated someCoolFunctions.js (formerly pushNotifications.js)
- Updated to cachebuster version v807
- Added descriptions to the bleed properties of Player special attacks
## v1.3.0
- Updated to cachebuster version v791
- Added descriptions to PlayerCombatData and EnemyCombatData properties
- Added @types/simplebar to dependencies. You will either need to run `npm install` or `npm install @types/simplebar --save` for this change to take place.
- Typed some untyped functions
- Added typdef and described properties of global data objects combatAreas, slayerAreas, DUNGEONS, SLAYER, combatPassive, masteryMedia, masteryUnlocks,masteryCheckpointBonuses, MILESTONES, SKILLS
- Added typedef for enemy modifiers and extended combatData.enemy by them
- Added EnemyModifierObject for modifiers that apply to monsters
- Finished item property descriptions
- Added descriptions marking functions as callbacks if it appears unused but is actually used in HTML
- Deprecated a number of unused functions and global variables
- Updated modifier descriptions to reflect bug fixes
## v1.2.2
- Updated to cachebuster verison v790
## v1.2.1
- Updated to cachebuster version v789
## v1.2.0
- Seperated ModifierObject into StandardModifierObject and SkillModifierObject
- Started adding descriptions to item properties
- Improved typing of Object.entries of Modifier objects
- Typed new functions in agility.js
- Updated to cachebuster version v788
## v1.1.1
- Updated to cachebuster version v784
## v1.1.0
- Improved/Updated modifier descriptions
- Added version update script
- Added Typescript as a dev-dependency. You will either need to run `npm install` or `npm i typescript --save-dev` for this change to take place. If `tsc` wasn't working to generate a typedef file it hopefully should now.
- Added Changelog
## v1.0.0
Project published.
