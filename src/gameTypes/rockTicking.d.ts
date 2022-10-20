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
    private _name;
    private _media;
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
    protected readonly _media = "assets/media/skills/mining/mining.svg";
    protected getTotalUnlockedMasteryActions(): number;
    renderQueue: MiningRenderQueue;
    private readonly baseInterval;
    private readonly baseRockHP;
    private readonly passiveRegenInterval;
    protected get actionInterval(): number;
    protected get actionLevel(): number;
    protected get masteryAction(): MiningRock;
    protected get masteryModifiedInterval(): number;
    private activeProgressRock?;
    private tier3PoolWasActive;
    private selectedRock?;
    private rockRespawnTimers;
    private passiveRegenTimer;
    private coalItem?;
    private runestoneItem?;
    private gemVeins;
    private totalGemVeinWeight;
    get activeRock(): MiningRock;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: MiningSkillData): void;
    postDataRegistration(): void;
    protected getFlatIntervalModifier(action: MiningRock): number;
    protected getUncappedDoublingChance(action: MiningRock): number;
    getMasteryXPModifier(action: MiningRock): number;
    private canMineOre;
    passiveTick(): void;
    getErrorLog(): string;
    onPageChange(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    protected onLevelUp(oldLevel: number, newLevel: number): void;
    render(): void;
    renderRockRates(): void;
    private renderRockHP;
    private renderRockStatus;
    private renderProgressBar;
    private stopActiveProgressBar;
    private renderRespawnProgress;
    renderRockUnlock(): void;
    get rockHPPreserveChance(): number;
    get chanceToDoubleGems(): number;
    getRockGemChance(ore: MiningRock): number;
    getRockSuperiorGemChance(ore: MiningRock): number;
    /** Callback function for when an ore is clicked */
    onRockClick(rock: MiningRock): void;
    protected onStop(): void;
    onLoad(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    private addRandomGemReward;
    private addRandomSuperiorGemReward;
    protected postAction(): void;
    protected startActionTimer(): void;
    private regenRockHP;
    private getRockMaxHP;
    private updateRockMaxHP;
    updateAllRockMaxHPs(): void;
    private startRespawningRock;
    private respawnRock;
    /** Initializes the HP of rocks that were newly added. */
    initializeRocks(): void;
    addMeteoriteVein(): void;
    /** Post action function to roll for a random Gem Vein and update Mining as required. */
    private rollForRandomGemVein;
    /** Rolls HP value for size of Gem Vein and returns respective data to use for processing. */
    private rollRandomHPForGemVein;
    /** Decides which Gem vein was found */
    private getRandomGemVein;
    /** Returns size of Gem vein found as a string */
    private getGemVeinSize;
    testTranslations(): void;
}
