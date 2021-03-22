# Changelog
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
