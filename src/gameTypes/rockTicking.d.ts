declare class MiningRenderQueue extends GatheringSkillRenderQueue<MiningRock> {
    rockHP: Set<MiningRock>;
    rockStatus: Set<MiningRock>;
    rockRates: boolean;
    rockUnlock: boolean;
    respawnProgress: Set<MiningRock>;
    rockVisibility: boolean;
}
declare const enum GemVeinSize {
    None = 0,
    Small = 1,
    Medium = 2,
    Large = 3
}
declare const rockMenus: Map<MiningRock, MiningRockElement>;
declare function loadMiningOres(): void;
interface MiningCategoryData extends IDData {
    name: string;
    badgeClass: string;
    givesGemVeins?: boolean;
    givesAbyssalGemVeins?: boolean;
}
declare class MiningCategory extends NamespacedObject implements NamedObject {
    get name(): string;
    badgeClass: string;
    givesGemVeins: boolean;
    givesAbyssalGemVeins: boolean;
    _name: string;
    constructor(namespace: DataNamespace, data: MiningCategoryData);
}
interface MiningRockData extends SingleProductRecipeData {
    name: string;
    media: string;
    baseRespawnInterval: number;
    baseQuantity: number;
    totalMasteryRequired?: number;
    hasPassiveRegen: boolean;
    giveGems: boolean;
    superiorGemChance?: number;
    shopItemPurchased?: string;
    fixedMaxHP?: number;
    /** @deprecated Use category instead */
    type?: string;
    category?: string;
    gemVeinWeight?: number;
    abyssalGemVeinWeight?: number;
    abyssalGemChance?: number;
}
interface MiningRockModificationData extends SingleProductRecipeModificationData {
    baseRespawnInterval?: number;
    baseQuantity?: number;
    totalMasteryRequired?: number;
    hasPassiveRegen?: boolean;
    giveGems?: boolean;
    superiorGemChance?: number;
    shopItemPurchased?: string;
    fixedMaxHP?: number;
    category?: string;
    gemVeinWeight?: number;
    abyssalGemVeinWeight?: number;
    abyssalGemChance?: number;
}
declare class MiningRock extends SingleProductRecipe {
    get media(): string;
    get name(): string;
    baseRespawnInterval: number;
    baseQuantity: number;
    totalMasteryRequired: number;
    hasPassiveRegen: boolean;
    giveGems: boolean;
    get giveSuperiorGems(): boolean;
    get giveAbyssalGems(): boolean;
    shopItemPurchased?: ShopPurchase;
    fixedMaxHP?: number;
    category: MiningCategory;
    gemVeinWeight?: number;
    superiorGemChance?: number;
    abyssalGemVeinWeight?: number;
    abyssalGemChance?: number;
    _name: string;
    _media: string;
    currentHP: number;
    maxHP: number;
    isRespawning: boolean;
    constructor(namespace: DataNamespace, data: MiningRockData, game: Game);
    applyDataModification(data: MiningRockModificationData, game: Game): void;
}
interface MiningSkillData extends MasterySkillData {
    categories?: MiningCategoryData[];
    rockData?: MiningRockData[];
    coalItemID?: string;
    runestoneItemID?: string;
}
interface MiningModificationData extends MasterySkillModificationData {
    rockData?: MiningRockModificationData[];
}
declare type MiningEvents = {
    action: MiningActionEvent;
} & SkillWithMasteryEvents;
declare class Mining extends GatheringSkill<MiningRock, MiningSkillData, MiningEvents, MiningModificationData> implements PassiveAction {
    readonly _media = Assets.Mining;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    hasRealmSelection: boolean;
    isMasteryActionUnlocked(action: MiningRock): boolean;
    renderQueue: MiningRenderQueue;
    readonly baseInterval = 3000;
    readonly baseRockHP = 5;
    readonly passiveRegenInterval = 10000;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): MiningRock;
    get masteryModifiedInterval(): number;
    activeProgressRock?: MiningRock;
    selectedRock?: MiningRock;
    rockRespawnTimers: Map<MiningRock, Timer>;
    passiveRegenTimer: Timer;
    categories: NamespaceRegistry<MiningCategory>;
    coalItem?: AnyItem;
    runestoneItem?: AnyItem;
    gemVeins: {
        weight: number;
        rock: MiningRock;
    }[];
    totalGemVeinWeight: number;
    abyssalGemVeins: {
        weight: number;
        rock: MiningRock;
    }[];
    totalAbyssalGemVeinWeight: number;
    get activeRock(): MiningRock;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: MiningSkillData): void;
    modifyData(data: MiningModificationData): void;
    postDataRegistration(): void;
    canMineOre(ore: MiningRock): boolean;
    passiveTick(): void;
    getErrorLog(): string;
    onPageChange(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    onRealmChange(): void;
    render(): void;
    renderRockRates(): void;
    renderRockHP(): void;
    renderRockStatus(): void;
    renderProgressBar(): void;
    stopActiveProgressBar(): void;
    renderRespawnProgress(): void;
    renderRockUnlock(): void;
    renderRockVisibility(): void;
    get chanceToDoubleGems(): number;
    getRockGemChance(ore: MiningRock): number;
    getRockSuperiorGemChance(ore: MiningRock): number;
    getRockAbyssalGemChance(ore: MiningRock): number;
    /** Callback function for when an ore is clicked */
    onRockClick(rock: MiningRock): void;
    onStop(): void;
    onLoad(): void;
    onAncientRelicUnlock(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    preAction(): void;
    get actionRewards(): Rewards;
    addRandomGemReward(rewards: Rewards): void;
    addRandomSuperiorGemReward(rewards: Rewards): void;
    addRandomAbyssalGemReward(rewards: Rewards): void;
    postAction(): void;
    startActionTimer(): void;
    regenRockHP(): void;
    /** Gets the modifier to a rocks max HP that applies to all rocks */
    getGlobalRockHPModifier(): number;
    getRockMaxHP(rock: MiningRock): number;
    updateRockMaxHP(rock: MiningRock): void;
    _previousRockHPModifier?: number;
    /** Checks if the global rock HP modifier has changed, and recomputes all rock hps if so */
    updateAllRockMaxHPs(): void;
    startRespawningRock(rock: MiningRock): void;
    respawnRock(rock: MiningRock): void;
    /** Initializes the HP of rocks that were newly added. */
    initializeRocks(): void;
    addMeteoriteVein(): void;
    addAbyciteVein(starfallSize: number): void;
    addMysticiteVein(starfallSize: number): void;
    addEchociteVein(starfallSize: number): void;
    /** Post action function to roll for a random Gem Vein and update Mining as required. */
    rollForRandomGemVein(rock: MiningRock): void;
    /** Rolls HP value for size of Gem Vein and returns respective data to use for processing. */
    rollRandomHPForGemVein(): {
        size: GemVeinSize;
        hpToAdd: number;
    };
    /** Decides which Gem vein was found */
    getRandomGemVein(): MiningRock;
    /** Returns size of Gem vein found as a string */
    getGemVeinSize(number: number): string;
    /** Post action function to roll for a random Abyssal Gem Vein and update Mining as required. */
    rollForRandomAbyssalGemVein(rock: MiningRock): void;
    /** Rolls HP value for size of Gem Vein and returns respective data to use for processing. */
    rollRandomHPForAbyssalGemVein(): {
        size: GemVeinSize;
        hpToAdd: number;
    };
    /** Decides which Abyssal Gem vein was found */
    getRandomAbyssalGemVein(): MiningRock;
    /** Returns size of Abyssal Gem vein found as a string */
    getAbyssalGemVeinSize(number: number): string;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
}
