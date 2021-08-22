declare type Requirement = LevelRequirements | DungeonRequirements | CompletionRequirement | SlayerItemRequirement;
declare type LevelRequirements = {
    type: 'Level';
    levels: SkillReq[];
};
declare type SkillReq = {
    skill: SkillID;
    level: number;
};
declare type DungeonReq = {
    dungeonID: number;
    count: number;
};
declare type DungeonRequirements = {
    type: 'Dungeon';
    dungeons: DungeonReq[];
};
declare type CompletionRequirement = {
    type: 'Completion';
    percent: number;
};
declare type SlayerItemRequirement = {
    type: 'SlayerItem';
    itemID: number;
};
/** Checks an array of rqeuirements, and optionally displays an error message to the player for the first failed requirement */
declare function checkRequirements(reqs: Requirement[], notifyOnFailure?: boolean, failureMessage?: string): boolean;
/** Checks a single requirement and optionally displays an error message to the player */
declare function checkRequirement(requirement: Requirement, notifyOnFailure?: boolean, failureMessage?: string): boolean;
/** Checks a single skill requirement and optionally displays an error message to the player */
declare function checkSkillRequirement(skillReq: SkillReq, notifyOnFailure?: boolean, failureMessage?: string): boolean;
/** Checks a single dungeon completion requirement and optionally displays an error message to the player */
declare function checkDungeonRequirement(dungeonReq: DungeonReq, notifyOnFailure?: boolean, failureMessage?: string): boolean;
declare const maxLevelRequirement: LevelRequirements;
