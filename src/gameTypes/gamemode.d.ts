interface GamemodeData extends IDData {
    name: string;
    media: string;
    description?: string;
    rules: string[];
    textClass: string;
    btnClass: string;
    isPermaDeath: boolean;
    isEvent: boolean;
    startDate?: number;
    endDate: number;
    combatTriangle: CombatTriangleType;
    hitpointMultiplier: number;
    overrideMaxHitpoints?: number;
    hasRegen: boolean;
    capNonCombatSkillLevels: boolean;
    startingPage: string;
    startingItems: IDQuantity[];
    allowSkillUnlock: boolean;
    startingSkills?: string[];
    skillUnlockCost: number[];
    playerModifiers: PlayerModifierData;
    enemyModifiers: CombatModifierData;
    disabledModifiers?: ModifierKeys[];
    hasTutorial: boolean;
    overrideLevelCap?: number;
    allowDungeonLevelCapIncrease?: boolean;
    allowXPOverLevelCap?: boolean;
    disablePreservation?: boolean;
    disableItemDoubling?: boolean;
    hasActiveGameplay?: boolean;
    allowAncientRelicDrops?: boolean;
    skillCapIncreasesPre99?: number;
    skillCapIncreasesPost99?: number;
    autoLevelSkillsPre99?: SkillIDValue[];
    autoLevelSkillsPost99?: SkillIDValue[];
    skillCapRollsPre99?: SkillIDValue[];
    skillCapRollsPost99?: SkillIDValue[];
    enemyPassives?: string[];
    enemySpecialAttacks?: string[];
    requireLocalStorageKey?: string;
}
interface SkillIDValue {
    skillID: string;
    value: number;
}
interface SkillValue {
    skill: AnySkill;
    value: number;
}
declare type CombatTriangleType = 'Standard' | 'Hardcore' | 'InvertedHardcore';
declare const enum CombatTriangles {
    Standard = 0,
    Hardcore = 1,
    InvertedHardcore = 2
}
declare const COMBAT_TRIANGLE_IDS: Record<CombatTriangleType, CombatTriangles>;
declare class Gamemode extends NamespacedObject {
    get name(): string;
    get description(): string;
    get rules(): string[];
    get media(): string;
    get combatTriangle(): TriangleData;
    textClass: string;
    btnClass: string;
    isPermaDeath: boolean;
    isEvent: boolean;
    startDate?: number;
    endDate: number;
    hitpointMultiplier: number;
    overrideMaxHitpoints?: number;
    hasRegen: boolean;
    capNonCombatSkillLevels: boolean;
    /** The page the game should start on when completing the tutorial */
    startingPage: Page;
    /** Items the player should start with in this gamemode */
    startingItems: AnyItemQuantity[];
    /** If the gamemode allows skills to be unlocked for a gp cost */
    allowSkillUnlock: boolean;
    /** If present, determines the skills the player starts with */
    startingSkills?: Set<AnySkill>;
    /** If the gamemode requiresSkillUnlock, sets the cost of unlocking skills */
    skillUnlockCost: number[];
    /** Modifiers that apply to the player from the gamemode */
    playerModifiers: PlayerModifierObject;
    /** Modifiers that apply to the enemy from the gamemode */
    enemyModifiers: CombatModifierData;
    /** Modifiers that are disabled in the gamemode */
    disabledModifiers: ModifierKeys[];
    /** If players start in the tutorial in this gamemode */
    hasTutorial: boolean;
    /** Override the initial level cap of the gamemode regardless of entitlement */
    overrideLevelCap?: number;
    /** Determines if the player can increase skill level caps via dungeon completions */
    allowDungeonLevelCapIncrease: boolean;
    /** Determine if player can gain XP above level cap */
    allowXPOverLevelCap: boolean;
    /** If all forms of preservation (Items, Runes, Ammo, Prayer Points, Summoning Tablets, Food, Potion Charges, Dig Site Map Actions) should be disabled */
    disablePreservation: boolean;
    /** If item doubling for skills should be disabled */
    disableItemDoubling: boolean;
    /** If the active gameplay warning should be shown for this gamemode on the character select screen. */
    hasActiveGameplay: boolean;
    /** If ancient relics can be dropped from skills in this gamemode. Only available with the Atlas of Discovery Expansion. */
    allowAncientRelicDrops: boolean;
    /** The number of skill cap increases obtained per dungeon completion before Level 99 if allowDungeonLevelCapIncrease = true */
    skillCapIncreasesPre99: number;
    /** The number of skill cape increases obtained per dungeon completion after Level 99 if allowDungeonLevelCapIncrease = true */
    skillCapIncreasesPost99: number;
    /** Skills that auto level per dungeon completion before Level 99 if allowDungeonLevelCapIncrease = true */
    autoLevelSkillsPre99: SkillValue[];
    /** Skills that auto level per dungeon completion after Level 99 if allowDungeonLevelCapIncrease = true */
    autoLevelSkillsPost99: SkillValue[];
    /** Skills that are part of the cap increase pool before Level 99 obtained per dungeon completion if allowDungeonLevelCapIncrease = true */
    skillCapRollsPre99: SkillValue[];
    /** Skills that are part of the cap increase pool after Level 99 obtained per dungeon completion if allowDungeonLevelCapIncrease = true */
    skillCapRollsPost99: SkillValue[];
    /** Determines what passives are always applied to every enemy */
    enemyPassives: CombatPassive[];
    /** Determines what special attacks are always applied to every enemy */
    enemySpecialAttacks: AttackSelection[];
    /** Determines if the Gamemode should be hidden until the local storage key is defined (any value) */
    requireLocalStorageKey?: string;
    _media: string;
    _name: string;
    _description?: string;
    _rules: string[];
    _combatTriangle: CombatTriangles;
    constructor(namespace: DataNamespace, data: GamemodeData, game: Game);
}
declare class DummyGamemode extends Gamemode {
    get name(): string;
    get media(): string;
    constructor(dummyData: DummyData, game: Game);
}
