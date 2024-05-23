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
    playerModifiers?: ModifierValuesRecordData;
    enemyModifiers?: ModifierValuesRecordData;
    /** Optional. Effect Applicators merged with the player in this Gamemode */
    playerCombatEffects?: TriggeredCombatEffectApplicatorData[];
    /** Optional. Effect Applicators merged with the enemy in this Gamemode */
    enemyCombatEffects?: TriggeredCombatEffectApplicatorData[];
    /** Optional. The IDs of modifiers that should be disabled in this Gamemode */
    disabledModifiers?: string[];
    hasTutorial: boolean;
    /** Optional. If present, all skills will have an initial level cap equal to this value, except for the skills in initialLevelCaps */
    defaultInitialLevelCap?: number;
    /** Optional. If present, skills will start with these level caps in this Gamemode */
    initialLevelCaps?: SkillIDValue[];
    /** Optional. If present, all skills will have an initial abyssal level cap equal to this value, except for the skills in initialAbyssalLevelCaps */
    defaultInitialAbyssalLevelCap?: number;
    /** Optional. If present, skills will start with these Abyssal level caps in this Gamemode */
    initialAbyssalLevelCaps?: SkillIDValue[];
    /** Optional. Defines level cap increases that will automatically be given in this Gamemode when their requirements are met */
    levelCapIncreases?: string[];
    /** Optional. If present, the level cap of skills can be increased by purchasing them */
    levelCapCost?: LevelCapIncreaseCostData;
    /** Optional. If present, the abyssal level cap of skills can be increased by purchasing them */
    abyssalLevelCapCost?: LevelCapIncreaseCostData;
    allowXPOverLevelCap?: boolean;
    disablePreservation?: boolean;
    disableItemDoubling?: boolean;
    hasActiveGameplay?: boolean;
    allowAncientRelicDrops?: boolean;
    enemyPassives?: string[];
    enemySpecialAttacks?: string[];
    requireLocalStorageKey?: string;
    enableInstantActions?: boolean;
    enabledLangs?: SupportedLanguage[];
    /** Optional. Determines if default skill unlock requirements will be used. Defaults to false. */
    useDefaultSkillUnlockRequirements?: boolean;
    /** Optional. Custom skill unlock requirements for this gamemode. */
    skillUnlockRequirements?: {
        skillID: string;
        requirements: AnyRequirementData[];
    }[];
    /** Optional. ID of a SkillLevelCapIncrease that will convert the old pre 99 roll save data */
    pre99RollConversion?: string;
    /** Optional. ID of a SkillLevelCapIncrease that will convert the old post 99 roll save data */
    post99RollConversion?: string;
    /** @deprecated Used for detecting unconverted modded gamemodes */
    allowDungeonLevelCapIncrease?: boolean;
}
interface GamemodeModificationData extends IDData {
    /** Adds or removes level cap increases from this gamemode */
    levelCapIncreases: {
        add?: string[];
        remove?: string[];
    };
    levelCapCost?: LevelCapIncreaseCostData;
    abyssalLevelCapCost?: LevelCapIncreaseCostData;
    /** Optional. ID of a SkillLevelCapIncrease that will convert the old pre 99 roll save data */
    pre99RollConversion?: string;
    /** Optional. ID of a SkillLevelCapIncrease that will convert the old post 99 roll save data */
    post99RollConversion?: string;
    /** Adds or removes starting skills from this gamemode */
    startingSkills?: {
        add?: string[];
        remove?: string[];
    };
}
interface SkillIDValue {
    skillID: string;
    value: number;
}
interface SkillValue {
    skill: AnySkill;
    value: number;
}
declare class Gamemode extends NamespacedObject implements SoftDataDependant<GamemodeData> {
    get name(): string;
    get description(): string;
    get rules(): string[];
    get media(): string;
    get combatTriangleType(): CombatTriangleType;
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
    playerModifiers?: ModifierValue[];
    /** Modifiers that apply to the enemy from the gamemode */
    enemyModifiers?: ModifierValue[];
    /** Effect applicators merged with the player from the gamemode */
    playerCombatEffects?: CombatEffectApplicator[];
    /** Effect applicators merged with the enemy from the gamemode */
    enemyCombatEffects?: CombatEffectApplicator[];
    /** Modifiers that are disabled in the gamemode */
    disabledModifiers: Modifier[];
    /** If players start in the tutorial in this gamemode */
    hasTutorial: boolean;
    /** Optional. Sets the initial level cap of skills in this gamemode */
    defaultInitialLevelCap?: number;
    /** Optional. Sets the initial level caps of these skills in this gamemode */
    initialLevelCaps?: SkillValue[];
    /** Optional. Sets the initial level cap of abyssal skill levels in this gamemode */
    defaultInitialAbyssalLevelCap?: number;
    /** Optional. Sets the initial abyssal level caps of these skills in this gamemode */
    initialAbyssalLevelCaps?: SkillValue[];
    /** Skill cap increases that can be unlocked in this gamemode */
    levelCapIncreases: SkillLevelCapIncrease[];
    levelCapCost?: LevelCapIncreaseCost;
    abyssalLevelCapCost?: LevelCapIncreaseCost;
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
    /** Determines what passives are always applied to every enemy */
    enemyPassives: CombatPassive[];
    /** Determines what special attacks are always applied to every enemy */
    enemySpecialAttacks: AttackSelection[];
    /** Determines if skills with unlock requirements are allowed to be automatically unlocked in this gamemode */
    useDefaultSkillUnlockRequirements: boolean;
    /** Overrides to the default unlock requirments for skills in this gamemode */
    skillUnlockRequirements: Map<AnySkill, AnyRequirement[]>;
    /** Determines if the Gamemode should be hidden until the local storage key is defined (any value) */
    requireLocalStorageKey?: string;
    /** Determines if the gamemode should enable instant actions on a click */
    enableInstantActions: boolean;
    /** If set, gamemode will only display if using these languages */
    enabledLangs: SupportedLanguage[];
    pre99RollConversion?: SkillLevelCapIncrease;
    post99RollConversion?: SkillLevelCapIncrease;
    hasOldLevelCaps: boolean;
    _media: string;
    _name: string;
    _description?: string;
    _rules: string[];
    _combatTriangle: CombatTriangleType;
    constructor(namespace: DataNamespace, data: GamemodeData, game: Game);
    registerSoftDependencies(data: GamemodeData, game: Game): void;
    applyDataModification(data: GamemodeModificationData, game: Game): void;
    get isUsingRequiredLang(): boolean;
}
declare class DummyGamemode extends Gamemode {
    get name(): string;
    get media(): string;
    constructor(dummyData: DummyData, game: Game);
}
interface SkillCapIncreaseData {
    /** ID of the skill to increase the level cap of */
    skillID: string;
    /** The increase in level cap to give */
    increase: number;
    /** The maximum level cap that can be reached with this increase */
    maximum: number;
}
declare class SkillCapIncrease {
    /** The skill to increase the level cap of */
    skill: AnySkill;
    /** The increase in level cap to give */
    increase: number;
    /** The maximum level that can be reached with this increase */
    maximum: number;
    constructor(data: SkillCapIncreaseData, game: Game);
}
interface SkillLevelCapIncreaseData extends IDData {
    /** Determines the type of level cap that is increased */
    levelType: 'Standard' | 'Abyssal';
    /** Determines requirements that when met, will cause the level cap increase to be applied. */
    requirementSets: SkillLevelCapRequirementSetData[];
    /** Skills that gain a fixed increase in level cap */
    fixedIncreases?: SkillCapIncreaseData[];
    /** Skills that can be randomly selected to gain an increase in level cap */
    randomIncreases?: SkillCapIncreaseData[];
    /** The number of random increases given */
    randomCount?: number;
    /** Skills that will have their cap set to a given value */
    setIncreases?: SkillIDValue[];
}
interface SkillLevelCapIncreaseModificationData extends IDData {
    requirementSets?: {
        add?: SkillLevelCapRequirementSetData[];
        remove?: number[];
    };
    fixedIncreases?: {
        add?: SkillCapIncreaseData[];
        remove?: string[];
    };
    randomIncreases?: {
        add?: SkillCapIncreaseData[];
        remove?: string[];
    };
    setIncreases?: {
        add?: SkillIDValue[];
        remove?: string[];
    };
}
interface SkillLevelCapRequirementSetData {
    id: number;
    requirements: AnyRequirementData[];
}
interface SkillLevelCapRequirementSet {
    id: number;
    /** The requirements that must be met for this set to trigger */
    requirements: AnyRequirement[];
    /** Save state data. If this set has been given */
    given: boolean;
    /** Unlisteners for requirement events */
    unlisteners: VoidFunction[];
}
declare class SkillLevelCapIncrease extends NamespacedObject implements SoftDataDependant<SkillLevelCapIncreaseData>, EncodableObject {
    game: Game;
    levelType: 'Standard' | 'Abyssal';
    requirementSets: Map<number, SkillLevelCapRequirementSet>;
    fixedIncreases: SkillCapIncrease[];
    randomIncreases: SkillCapIncrease[];
    randomCount: number;
    /** The number of random increases that can be selected from */
    randomSelectionCount: number;
    setIncreases: SkillValue[];
    /** Save State property. Stores the number of random increases that have not been given yet */
    randomIncreasesLeft: number;
    /** Save State property. Stores the random increases that are currently being selected */
    randomSelection: Set<SkillCapIncrease>;
    constructor(namespace: DataNamespace, data: SkillLevelCapIncreaseData, game: Game);
    registerSoftDependencies(data: SkillLevelCapIncreaseData, game: Game): void;
    applyDataModification(data: SkillLevelCapIncreaseModificationData, game: Game): void;
    /** Rolls for a new random selection of level cap increases */
    rollRandomSelection(): void;
    /** Sets the random selection from an array of skills. Used for save conversion */
    setSelectionFromSkills(skills: AnySkill[]): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    static dumpData(reader: SaveWriter, version: number): void;
}
declare class SkillCapIncreaseButtonElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    selectButton: HTMLButtonElement;
    skillImage: HTMLImageElement;
    currentCap: HTMLSpanElement;
    newCap: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setCapIncrease(capIncrease: SkillLevelCapIncrease, increase: SkillCapIncrease, game: Game): void;
}
declare class SkillCapIncreaseModalElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    buttonContainer: HTMLDivElement;
    buttons: SkillCapIncreaseButtonElement[];
    /** If this modal is currently in use */
    isActive: boolean;
    /** If this modal is currently being shown to the player */
    isVisible: boolean;
    constructor();
    connectedCallback(): void;
    setSelection(capIncrease: SkillLevelCapIncrease, game: Game): void;
}
interface LevelCapIncreaseCostData {
    /** The number of levels the cap will be increased by */
    increase: number;
    /** The base cost to increase the level cap */
    baseCost: FixedCostsData;
    /** Cost of each level increase scales by scalingFactor^purchaseCount */
    scalingFactor: number;
    /** The maximum scaling factor that can be applied to the costs */
    maxCostScaling: number;
    /** Optional. If present, all of these skills must have a level above the new level cap to purchase an increase */
    skillLevelGates?: string[];
}
declare class LevelCapIncreaseCost {
    increase: number;
    baseCost: FixedCosts;
    scalingFactor: number;
    maxCostScaling: number;
    skillLevelGates: AnySkill[];
    constructor(data: LevelCapIncreaseCostData, game: Game);
    /** Returns if the level cap of a skill can be increased via purchase */
    canIncreaseLevelCap(skill: AnySkill): boolean;
    /** Returns if the abyssal level cap of a skill can be increased via purchase */
    canIncreaseAbyssalLevelCap(skill: AnySkill): boolean;
    /** Adds the costs to purchase the next cap increase */
    getCosts(game: Game, currentCount: number, purchaseCount: number): Costs;
    getMaxLevelIncreases(skill: AnySkill): number;
    getMaxAbyssalLevelIncreases(skill: AnySkill): number;
    getMaxIncreases(lowestLevel: number, currentCap: number, maxCap: number): number;
}
declare class LevelCapPurchaseButtonElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    increaseButton: HTMLButtonElement;
    text: HTMLSpanElement;
    capChange: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    initialize(skill: AnySkill): void;
    setSkill(skill: AnySkill, levelType: string | null): void;
    setCapChange(currentCap: number, newCap: number): void;
    setAvailable(): void;
    setUnavailable(): void;
    static initializeForSkill(skill: AnySkill): void;
}
declare class LevelCapPurchaseModalElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    levelGateInfo: HTMLSpanElement;
    levelGates: HTMLDivElement;
    purchaseOneButton: HTMLButtonElement;
    purchaseOneIncrease: HTMLSpanElement;
    purchaseOneCost: QuantityIconsElement;
    purchaseMaxButton: HTMLButtonElement;
    purchaseMaxIncrease: HTMLSpanElement;
    purchaseMaxCost: QuantityIconsElement;
    constructor();
    connectedCallback(): void;
    setStandardLevels(skill: AnySkill, capCost: LevelCapIncreaseCost, game: Game): void;
    setAbyssalLevels(skill: AnySkill, capCost: LevelCapIncreaseCost, game: Game): void;
}
