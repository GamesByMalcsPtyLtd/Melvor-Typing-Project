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
    hasTutorial: boolean;
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
    /** If players start in the tutorial in this gamemode */
    hasTutorial: boolean;
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
