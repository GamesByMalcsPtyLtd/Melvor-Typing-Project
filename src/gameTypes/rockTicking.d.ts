declare class MiningRenderQueue extends GatheringSkillRenderQueue<MiningRock> {
    rockHP: Set<MiningRock>;
    rockStatus: Set<MiningRock>;
    rockRates: boolean;
    rockUnlock: boolean;
    respawnProgress: Set<MiningRock>;
}
declare const enum GemVeinSize {
    None = 0,
    Small = 1,
    Medium = 2,
    Large = 3
}
declare const rockMenus: Map<MiningRock, MiningRockMenu>;
declare function loadMiningOres(): void;
declare function localizeMining(): void;
declare type MiningRockType = 'Ore' | 'Essence' | 'Gem';
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
    type: MiningRockType;
    gemVeinWeight?: number;
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
    shopItemPurchased?: ShopPurchase;
    fixedMaxHP?: number;
    type: MiningRockType;
    gemVeinWeight?: number;
    superiorGemChance?: number;
    _name: string;
    _media: string;
    currentHP: number;
    maxHP: number;
    isRespawning: boolean;
    constructor(namespace: DataNamespace, data: MiningRockData, game: Game);
}
interface MiningSkillData extends MasterySkillData {
    rockData?: MiningRockData[];
    coalItemID?: string;
    runestoneItemID?: string;
}
declare class Mining extends GatheringSkill<MiningRock, MiningSkillData> implements PassiveAction {
    readonly _media = "assets/media/skills/mining/mining.svg";
    getTotalUnlockedMasteryActions(): number;
    renderQueue: MiningRenderQueue;
    readonly baseInterval = 3000;
    readonly baseRockHP = 5;
    readonly passiveRegenInterval = 10000;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): MiningRock;
    get masteryModifiedInterval(): number;
    activeProgressRock?: MiningRock;
    tier3PoolWasActive: boolean;
    selectedRock?: MiningRock;
    rockRespawnTimers: Map<MiningRock, Timer>;
    passiveRegenTimer: Timer;
    coalItem?: AnyItem;
    runestoneItem?: AnyItem;
    gemVeins: {
        weight: number;
        rock: MiningRock;
    }[];
    totalGemVeinWeight: number;
    get activeRock(): MiningRock;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: MiningSkillData): void;
    postDataRegistration(): void;
    getFlatIntervalModifier(action: MiningRock): number;
    getUncappedDoublingChance(action: MiningRock): number;
    getMasteryXPModifier(action: MiningRock): number;
    canMineOre(ore: MiningRock): boolean;
    passiveTick(): void;
    getErrorLog(): string;
    onPageChange(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    render(): void;
    renderRockRates(): void;
    renderRockHP(): void;
    renderRockStatus(): void;
    renderProgressBar(): void;
    stopActiveProgressBar(): void;
    renderRespawnProgress(): void;
    renderRockUnlock(): void;
    get rockHPPreserveChance(): number;
    get chanceToDoubleGems(): number;
    getRockGemChance(ore: MiningRock): number;
    getRockSuperiorGemChance(ore: MiningRock): number;
    /** Callback function for when an ore is clicked */
    onRockClick(rock: MiningRock): void;
    onStop(): void;
    onLoad(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    preAction(): void;
    get actionRewards(): Rewards;
    addRandomGemReward(rewards: Rewards): void;
    addRandomSuperiorGemReward(rewards: Rewards): void;
    postAction(): void;
    startActionTimer(): void;
    regenRockHP(): void;
    getRockMaxHP(rock: MiningRock): number;
    updateRockMaxHP(rock: MiningRock): void;
    updateAllRockMaxHPs(): void;
    startRespawningRock(rock: MiningRock): void;
    respawnRock(rock: MiningRock): void;
    /** Initializes the HP of rocks that were newly added. */
    initializeRocks(): void;
    addMeteoriteVein(): void;
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
    testTranslations(): void;
}
