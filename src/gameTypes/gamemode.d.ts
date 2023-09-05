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
