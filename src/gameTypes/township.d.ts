/** Data for constructing a TownshipBiome object */
interface TownshipBiomeData extends IDData {
    /** The display name of the biome */
    name: string;
    /** URI of the biomes image */
    media: string;
    /** The Tier of Biome. Determines Population and level requirements to build in it. Integer between [1-8]. */
    tier: number;
    /** The Abyssal Tier of Biome. Determines Fortification and abyssal level requirements to build in it. Integer between [0-7]. */
    abyssalTier?: number;
    requirements?: AnyRequirementData[];
}
declare const enum TownshipConvertQtyType {
    Number = 0,
    Percent = 1,
    AllButOne = 2
}
declare const enum TownshipConvertType {
    ToTownship = 0,
    FromTownship = 1
}
declare class TownshipBiome extends NamespacedObject implements SoftDataDependant<TownshipBiomeData> {
    get name(): string;
    get media(): string;
    get englishName(): string;
    _name: string;
    _media: string;
    tier: number;
    abyssalTier: number;
    /** The number of buildings that have been built in the biome */
    buildingsBuilt: Map<TownshipBuilding, number>;
    /** The efficiency of buildings that have been built in the biome */
    buildingEfficiency: Map<TownshipBuilding, number>;
    /** Cache of buildings that are available in this biome. Used to only render buildings for the selected biome */
    availableBuildings: TownshipBuilding[];
    requirements: AnyRequirement[];
    constructor(namespace: DataNamespace, data: TownshipBiomeData, game: Game);
    registerSoftDependencies(data: TownshipBiomeData, game: Game): void;
    /** Returns the number of a particular building that has been built in the biome */
    getBuildingCount(building: TownshipBuilding): number;
    getCurrentBuildingInUpgradeChain(building: TownshipBuilding): TownshipBuilding;
    removeBuildings(building: TownshipBuilding, count: number): void;
    addBuildings(building: TownshipBuilding, count: number): void;
    getBuildingEfficiency(building: TownshipBuilding): number;
    reduceBuildingEfficiency(building: TownshipBuilding, amount: number, game: Game): void;
    setBuildingEfficiency(building: TownshipBuilding, amount: number): boolean;
}
declare class DummyTownshipBiome extends TownshipBiome {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface TownshipBuildingProvidesData {
    /** The ID of the TownshipBiome where these stats are provided */
    biomeID: string;
    /** Base Population provided by the building */
    population: number;
    /** Base Happiness provided by the building */
    happiness: number;
    /** Base Education provided by the building */
    education: number;
    /** Resource storage cap provided by the building */
    storage: number;
    /** Resource production provided by the building */
    resources: IDQuantity[];
    /** Base worship provided by the building */
    worship?: number;
    /** ItA Only: Base Fortification provided by the building */
    fortification?: number;
    /** ItA Only: Soul storage cap provided by the building */
    soulStorage?: number;
}
interface TownshipBuildingCostData {
    /** The ID of the biome costs apply to */
    biomeID: string;
    /** The resource costs to apply */
    cost: IDQuantity[];
}
declare class TownshipBuildingProvides {
    population: number;
    happiness: number;
    education: number;
    storage: number;
    resources: Map<TownshipResource, number>;
    worship: number;
    fortification: number;
    soulStorage: number;
    constructor(data: TownshipBuildingProvidesData, game: Game);
    resourceCount(resource: TownshipResource): number;
}
/** Data for constructing a TownshipBuilding object */
interface TownshipBuildingData extends IDData, IStatObjectData {
    /** The display name of the building */
    name: string;
    /** URI of the buildings image */
    media: string;
    /** The tier of the building. Determines Township Level and population requirements. Integer between [1,7] */
    tier: number;
    /** The ID of the TownshipBuilding this upgrades from */
    upgradesFrom?: string;
    /** The township resource costs to build the building per biome */
    cost: TownshipBuildingCostData[];
    /** The stats that this building provides to the town per biome */
    provides: TownshipBuildingProvidesData[];
    /** The IDs of TownshipBiomes that this building can be built in */
    biomes: string[];
    /** The maximum number of times this building can be upgraded. Integer between [1, Infinity) */
    maxUpgrades: number;
    /** Optional. Whether the building efficiency automatically decays over time. Default is true */
    canDegrade: boolean;
    /** The Abyssal Tier of the building. Determines Township Abyssal Level and Fortification requirements. Integer between [0,7] */
    abyssalTier?: number;
    requirements?: AnyRequirementData[];
}
declare class TownshipBuilding extends NamespacedObject implements SoftDataDependant<TownshipBuildingData> {
    get name(): string;
    get media(): string;
    get englishName(): string;
    _name: string;
    _media: string;
    tier: number;
    upgradesFrom?: TownshipBuilding;
    upgradesTo?: TownshipBuilding;
    costs: Map<TownshipBiome, ResourceQuantity[]>;
    provides: Map<TownshipBiome, TownshipBuildingProvides>;
    biomes: TownshipBiome[];
    stats: StatObject;
    maxUpgrades: number;
    canDegrade: boolean;
    upgradeChain: TownshipBuilding[];
    abyssalTier: number;
    requirements: AnyRequirement[];
    get providesStats(): boolean;
    /** Multipliers for the stats provided by this building */
    providedStatMultiplier: {
        pos: number;
        neg: number;
    };
    constructor(namespace: DataNamespace, data: TownshipBuildingData, game: Game);
    registerSoftDependencies(data: TownshipBuildingData, game: Game): void;
    get totalUpgrades(): number;
    get upgradePosition(): number;
    calculateUpgradeData(): void;
}
declare class DummyTownshipBuilding extends TownshipBuilding {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface TownshipWorshipSeasonMultiplierData {
    /** The ID of the TownshipSeason the multiplier applies to */
    seasonID: string;
    /** The value to multiply the positive modifiers of the worship by */
    multiplier: number;
}
/** Data for constructing a TownshipWorship object */
interface TownshipWorshipData extends IDData {
    /** Display name of the worship */
    name: string;
    description: string;
    /** URI of the worships image */
    media: string;
    /** Modifiers that are always provided by this worship */
    modifiers: ModifierValuesRecordData;
    /** If this worship should be hidden from the player */
    isHidden: boolean;
    /** Modifiers that are provided as each worship checkpoint is reached. Must have 5 elements */
    checkpoints: ModifierValuesRecordData[];
    /** Requirements the player must meet before being able to use this worship */
    unlockRequirements: AnyRequirementData[];
    /** The display name of the statue building when this worship is selected */
    statueName: string;
    /** The URI of the statue buildings image when this worship is selected */
    statueMedia: string;
    /** Defines seasons where the positive modifiers of this worship are multiplied by a value */
    seasonMultiplier: TownshipWorshipSeasonMultiplierData[];
}
declare class TownshipWorship extends NamespacedObject implements SoftDataDependant<TownshipWorshipData> {
    get name(): string;
    get description(): string;
    get media(): string;
    get statueName(): string;
    get statueMedia(): string;
    get englishName(): string;
    _name: string;
    _description: string;
    _media: string;
    modifiers: ModifierValue[];
    isHidden: boolean;
    checkpoints: ModifierValue[][];
    unlockRequirements: AnyRequirement[];
    _statueName: string;
    _statueMedia: string;
    seasonMultiplier: Map<TownshipSeason, number>;
    constructor(namespace: DataNamespace, data: TownshipWorshipData, game: Game);
    registerSoftDependencies(data: TownshipWorshipData, game: Game): void;
}
declare class DummyTownshipWorship extends TownshipWorship {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface TownshipItemConversionData {
    /** Defines conversions from Items to TownshipResources */
    toTownship: TownshipResourceItemConversionData[];
    /** Defines conversions from TownshipResources to Items */
    fromTownship: TownshipResourceItemConversionData[];
}
interface TownshipResourceItemConversionData {
    /** The ID of the TownshipResource that can be converted */
    resourceID: string;
    /** Item conversions that are possible with the resource */
    items: TownshipSingleItemConversionData[];
}
/** Data for constructing a TownshipItemConversion object */
interface TownshipSingleItemConversionData {
    /** The ID of the Item that can be converted */
    itemID: string;
    /** Requirements the player must meet before unlocking this conversion */
    unlockRequirements: AnyRequirementData[];
    /** Set a custom base cost for item conversion */
    baseCost?: number;
}
declare class TownshipItemConversion {
    get item(): AnyItem;
    _item: AnyItem | undefined;
    unlockRequirements: AnyRequirement[];
    baseCost: number;
    constructor(data: TownshipSingleItemConversionData, game: Game);
}
/** Data for constructing a TownshipSeason object */
interface TownshipSeasonData extends IDData, IStatObjectData {
    /** The display name of the season */
    name: string;
    /** The URI of the seasons image */
    media: string;
    /** Determines the order in which this season occurs. TODO: Deprecate this and implement a seperate skill data property defining the order */
    order: number;
    /** The number of Township Ticks (1 hour) that the season lasts */
    seasonLength: number;
    /** If the player should be unable to change their current worship while the season is active */
    disableWorshipChange: boolean;
}
/** Data for modifying a TownshipSeason object */
interface TownshipSeasonModificationData extends IDData {
    modifiers?: ModifierValuesModificationData;
    combatEffects?: CombatEffectApplicatorModificationData;
    enemyModifiers?: ModifierValuesModificationData;
}
declare class TownshipSeason extends NamespacedObject {
    get name(): string;
    get media(): string;
    get englishName(): string;
    _name: string;
    _media: string;
    order: number;
    seasonLength: number;
    stats: StatObject;
    disableWorshipChange: boolean;
    constructor(namespace: DataNamespace, data: TownshipSeasonData, game: Game);
    applyDataModification(modData: TownshipSeasonModificationData, game: Game): void;
}
declare class DummyTownshipSeason extends TownshipSeason {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare type TownshipResourceType = 'Currency' | 'Raw';
declare enum TownshipResourceTypeID {
    Currency = 0,
    Raw = 1
}
declare type TownshipStorageType = 'Normal' | 'Soul';
declare enum TownshipStorageTypeID {
    Normal = 0,
    Soul = 1
}
/** Data for constructing a TownshipResource object */
interface TownshipResourceData extends IDData {
    /** Display name of the resource */
    name: string;
    /** URI of the resources image */
    media: string;
    /** The type of the resource. Currency for GP. Raw otherwise. */
    type: TownshipResourceType;
    /** The amount of this resource the player starts with */
    startingAmount: number;
    /** What storage to use in Township */
    storageType?: TownshipStorageType;
}
interface TownshipItemConversion {
    toTownship: TownshipResourceItemConversion;
    fromTownship: TownshipResourceItemConversion;
}
declare type TownshipResourceItemConversion = Map<TownshipResource, TownshipSingleItemConversion[]>;
interface TownshipSingleItemConversion {
    item: AnyItem;
    unlockRequirements: AnyRequirement[];
}
declare class TownshipResource extends NamespacedObject {
    get name(): string;
    get media(): string;
    get englishName(): string;
    type: TownshipResourceTypeID;
    startingAmount: number;
    _name: string;
    _media: string;
    /** Amount of resource owned */
    get amount(): number;
    /** Amount of resource owned */
    set amount(amount: number);
    /** Resource cap (% of max storage) */
    get cap(): number;
    /** Resource cap (% of max storage) */
    set cap(cap: number);
    _amount: number;
    _cap: number;
    /** Current generation rate of resource */
    generation: number;
    /** What storage this resource uses */
    storageType: TownshipStorageType;
    constructor(namespace: DataNamespace, data: TownshipResourceData, game: Game);
}
declare class DummyTownshipResource extends TownshipResource {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface ResourceQuantity {
    resource: TownshipResource;
    quantity: number;
}
interface TownshipSkillData extends BaseSkillData {
    resources?: TownshipResourceData[];
    biomes?: TownshipBiomeData[];
    buildings?: TownshipBuildingData[];
    worships?: TownshipWorshipData[];
    buildingDisplayOrder?: InsertOrder[];
    resourceDisplayOrder?: InsertOrder[];
    taskCategories?: TownshipTaskCategoryData[];
    tasks?: TownshipTaskData[];
    casualTasks?: TownshipCasualTaskData[];
    seasons?: TownshipSeasonData[];
    itemConversions?: TownshipItemConversionData;
}
interface TownshipModificationData extends BaseSkillModificationData {
    seasons?: TownshipSeasonModificationData[];
}
declare class TownshipRenderQueue extends SkillRenderQueue {
    /** Renders population, workers, storage, happiness, education, health and worship. Impacted by modifiers. */
    townStats: boolean;
    /** Renders the amount of each resource owned */
    resourceAmounts: boolean;
    /** Renders the rate of each resource gain. Impacted by modifiers. */
    resourceRates: boolean;
    /** Renders the costs of all buildings. */
    buildingCosts: boolean;
    /** Renders the current age of the town */
    townAge: boolean;
    /** Renders the provision and resource output of buildings */
    buildingProvides: boolean;
    /** Renders the biome progress */
    biomeProgress: boolean;
    /** Renders the biome requirements */
    biomeRequirements: boolean;
    /** Renders the building efficiency in biomes */
    buildingEfficiency: boolean;
    /** Renders the current buildingprovides in biomes */
    buildingCurrentProvides: boolean;
    /** Renders the current total building resource generation in biomes */
    buildingResourceGeneration: boolean;
    /** Renders the build available icon in the biome select buttons */
    buildAvailable: boolean;
    /** Renders the time till the next passive tick */
    updateTimer: boolean;
    /** Renders the season name and media */
    updateSeason: boolean;
    /** Renders the building names */
    buildingNames: boolean;
    /** Updates the task ready icon */
    taskReadyIcon: boolean;
    /** Updates Town Summary for current biome */
    townSummary: boolean;
    /** Updates building modifier text */
    buildingModifiers: boolean;
    /** Updates next Abyssal Wave size */
    abyssalWaveSize: boolean;
    /** Updates next Fight Abyssal Wave button */
    fightAbyssalWave: boolean;
}
declare class TownshipBuildingCountChangedEvent extends GameEvent {
    building: TownshipBuilding;
    biome: TownshipBiome;
    constructor(building: TownshipBuilding, biome: TownshipBiome);
}
declare type TownshipEvents = {
    buildingCountChanged: TownshipBuildingCountChangedEvent;
} & SkillEvents;
declare class Township extends Skill<TownshipSkillData, TownshipEvents, TownshipModificationData> implements PassiveAction {
    readonly _media: string;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    /** Tick length in seconds */
    TICK_LENGTH: number;
    readonly PASSIVE_TICK_LENGTH = 3600;
    readonly LEGACY_TICK_LENGTH = 300;
    readonly BASE_TAX_RATE = 0;
    readonly BASE_STORAGE = 50000;
    readonly BASE_SOUL_STORAGE = 0;
    readonly WORSHIP_CHECKPOINTS: number[];
    readonly MAX_WORSHIP: number;
    readonly DECREASED_BUILDING_COST_CAP = -80;
    readonly GP_PER_CITIZEN = 15;
    readonly WORSHIP_CHANGE_COST = 50000000;
    readonly RARE_SEASON_CHANCE = 20;
    readonly ABYSSAL_WAVE_REWARD_DIVIDER = 1;
    readonly BASE_MAX_HEALTH = 100;
    /** The cooldown time between fighting abyssal waves in [ms] */
    readonly ABYSSAL_WAVE_COOLDOWN = 2000;
    readonly populationForTier: NumberDictionary<BuildingRequirement>;
    readonly abyssalTierRequirements: NumberDictionary<BuildingAbyssalRequirement>;
    renderQueue: TownshipRenderQueue;
    totalTicks: number;
    /** Current Town page biome the user is viewing. If undefined, user is viewing all biomes. */
    currentTownBiome?: TownshipBiome;
    convertQty: number;
    convertQtyPercent: number;
    convertQtyType: TownshipConvertQtyType;
    convertType: TownshipConvertType;
    convertValues: {
        numbers: number[];
        percentages: number[];
    };
    itemConversions: {
        toTownship: Map<TownshipResource, TownshipItemConversion[]>;
        fromTownship: Map<TownshipResource, TownshipItemConversion[]>;
    };
    townData: TownshipData;
    /** Number of legacy ticks the player has left to spend */
    legacyTicks: number;
    upgradeQty: number;
    tasks: TownshipTasks;
    casualTasks: TownshipCasualTasks;
    biomes: NamespaceRegistry<TownshipBiome>;
    buildings: NamespaceRegistry<TownshipBuilding>;
    worships: NamespaceRegistry<TownshipWorship>;
    seasons: NamespaceRegistry<TownshipSeason>;
    resources: NamespaceRegistry<TownshipResource>;
    buildingDisplayOrder: NamespacedArray<TownshipBuilding>;
    resourceDisplayOrder: NamespacedArray<TownshipResource>;
    noWorship: TownshipWorship;
    worshipInSelection: TownshipWorship | undefined;
    townshipConverted: boolean;
    tickTimer: Timer;
    /** Timer for the cooldown when fighting abyssal waves */
    abyssalWaveTimer: Timer;
    defaultSeason?: TownshipSeason;
    readonly REDUCE_EFFICIENCY_CHANGE = 0.25;
    readonly MINIMUM_HEALTH = 20;
    displayReworkNotification: boolean;
    gpRefunded: number;
    get abyssalGatewayBuilt(): boolean;
    get canFightAbyssalWaves(): boolean;
    /** Returns if an abyssal wave is currently being fought */
    get isFightingAbyssalWave(): boolean;
    get timeToNextUpdate(): number;
    get timeToNextSeason(): number;
    get timeToNextAbyssalWave(): number;
    get abyssalWaveSize(): number;
    get soulsReward(): number;
    get canWinAbyssalWave(): boolean;
    get oneDayInTicks(): number;
    get chanceForPet(): number;
    get statueName(): string;
    get statueMedia(): string;
    /** The base rate of xp gained per tick, before modifiers */
    get baseXPRate(): number;
    get currentPopulation(): number;
    get currentFortification(): number;
    get currentEducation(): number;
    get currentHappiness(): number;
    get nightfallSeasonEnabled(): boolean;
    get solarEclipseSeasonEnabled(): boolean;
    get lemonSeasonEnabled(): boolean;
    get eternalDarknessSeasonEnabled(): boolean;
    getModifiedArmourWeaponryValueForAbyssalWave(): number;
    getTotalArmourWeaponry(): number;
    /** Callback function for the Repair All in this Biome button */
    repairAllBuildingsInCurrentBiome(): void;
    /** Callback function for the Repair All button for specific storage types only */
    repairAllBuildingsFromStorageType(storageType: TownshipStorageType): void;
    /** Callback function for the Repair All button */
    repairAllBuildings(): void;
    onRepairAllBuildings(): void;
    getBuildingEfficiencyInBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    reduceAllBuildingEfficiency(amount: number): void;
    reduceAllAbyssalBuildingEfficiency(amount: number): void;
    getBiomeProgress(biome: TownshipBiome): number;
    getBasePopulationProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    getBaseEducationProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    getBaseHappinessProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    getBaseWorshipProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    getBaseStorageProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    getBaseFortificationProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    getBaseSoulStorageProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    getPopulationProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome): number;
    getEducationProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome): number;
    getHappinessProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome): number;
    getWorshipProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome): number;
    getStorageProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome): number;
    getFortificationProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome): number;
    getSoulStorageProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome): number;
    getProvidesForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): TownshipBuildingProvides | undefined;
    get currentWorshipName(): string;
    get worshipPercent(): number;
    /** Returns the current tier of worship that is active. -1 Indicates none are active */
    get worshipTier(): number;
    get taxRate(): number;
    get canAffordWorshipChange(): boolean;
    get isStorageFull(): boolean;
    get isSoulStorageFull(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    onAnyLevelUp(): void;
    registerData(namespace: DataNamespace, data: TownshipSkillData): void;
    modifyData(data: TownshipModificationData): void;
    getResourceQuantityFromData(resourceData: IDQuantity[]): ResourceQuantity[];
    postDataRegistration(): void;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    getBuildingCountRemainingForLevelUp(building: TownshipBuilding, biome: TownshipBiome): number;
    isBuildingAvailable(building: TownshipBuilding, biome: TownshipBiome): boolean;
    hasBuildingBeenUpgraded(building: TownshipBuilding, biome: TownshipBiome | undefined): boolean;
    isBuildingUpgradedButNotBuiltd(building: TownshipBuilding, biome: TownshipBiome | undefined): boolean;
    isBuildingMaxed(building: TownshipBuilding, biome: TownshipBiome | undefined): boolean;
    getIncreaseHealthCost(resource: TownshipResource): number;
    get maxHealth(): number;
    /**
     * Callback function for when an increase health button is clicked
     * @param resource The resource to spend to increase health
     * @param amount The amount of the resource to use
     */
    increaseHealth(resource: TownshipResource, amount: number): void;
    convertOldTownshipToNew(): void;
    getErrorLog(): string;
    encodeResource(writer: SaveWriter, resource: TownshipResource): void;
    encodeBiome(writer: SaveWriter, biome: TownshipBiome): void;
    encode(writer: SaveWriter): SaveWriter;
    decodeResource(reader: SaveWriter, version: number): void;
    decodeBiome(reader: SaveWriter, version: number): void;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeTownData(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeTownDataResources(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Queues renders when resources change */
    onResourceAmountChange(): void;
    /** Queues renders when buildings change */
    onBuildingChange(): void;
    renderTownStats(): void;
    renderResourceAmounts(): void;
    renderResourceRates(): void;
    renderBuildingCosts(): void;
    renderBuildingNames(): void;
    renderTaskReadyIcon(): void;
    renderTownAge(): void;
    renderBuildingProvides(): void;
    renderBiomeProgress(): void;
    renderBiomeRequirements(): void;
    renderBuildingEfficiency(): void;
    renderBuildingCurrentProvides(): void;
    renderBuildingResourceGeneration(): void;
    renderBuildAvailable(): void;
    renderUpdateTime(): void;
    renderUpdateSeason(): void;
    render(): void;
    renderNextAbyssalWaveSize(): void;
    renderFightAbyssalWave(): void;
    renderBuildingModifiers(): void;
    renderTownSummary(): void;
    initTownCreation(): void;
    updateConvertType(type: TownshipConvertType): void;
    /** Callback method */
    confirmTownCreation(): void;
    getResourceItemConversionsToTownship(resource: TownshipResource): TownshipItemConversion[];
    getResourceItemConversionsFromTownship(resource: TownshipResource): TownshipItemConversion[];
    selectWorship(worship: TownshipWorship): void;
    confirmWorship(): void;
    /** Callback function for the View Season Modifiers button */
    viewSeasonModifiers(): void;
    preLoad(): void;
    removeDummyTownshipData(): void;
    postStatLoad(): void;
    postLoad(): void;
    onLoad(): void;
    queueCurrencyQuantityRender(currency: Currency): void;
    /** @deprecated This method will be removed in the next major update. Use renderModifierChange instead */
    onModifierChange(): void;
    onPageChange(): void;
    onAncientRelicUnlock(): void;
    renderModifierChange(): void;
    passiveTick(): void;
    /** Starts the tick timer at the passive tick interval */
    startTickTimer(): void;
    /** Method called each time the tick timer completes */
    onTickTimer(): void;
    /** Method used to tick the timer manually based on defined amount. For Clicker gamemode. */
    tickTimerOnClick(): void;
    spendAllLegacyTicks(): void;
    spendLegacyTicks(ticksToSpend: number): void;
    tick(): boolean;
    applyPreTickTownUpdates(): void;
    tickSeason(): void;
    /** Callback function for when the player clicks the "Fight Wave Now" button */
    processAbyssalWaveOnClick(): void;
    /** Method called when the abyssal wave timer fires */
    onAbyssalWaveTimer(): void;
    getAbyssalXPOnWin(): number;
    getAbyssalXPOnLoss(fortificationValue: number): number;
    processAbyssalWave(): void;
    onAbyssalWaveProcessed(): void;
    removeArmourWeaponryAmount(amount: number): void;
    rollForPets(interval: number): void;
    /** Adds the starting buildings to the town if they are missing */
    addStartingBuildings(): void;
    setTownBiome(biome: TownshipBiome | undefined, jumpTo?: boolean): void;
    updateForBiomeSelectChange(biome: TownshipBiome | undefined): void;
    /** Recomputes all stats in the town that only depend on building count */
    computeBuildingTownStats(): void;
    /** Recomputes all the stats of the town */
    computeTownStats(): void;
    /** Recomputes worship, then provided modifiers if worship changes, then town stats */
    computeWorshipAndStats(): void;
    /** Recomputes the worship of the town provided by buildings an augmented by resource penalties. Returns if the worship tier has changed. */
    computeWorship(): boolean;
    computeTownHappiness(): void;
    computeTownHealthPercent(): void;
    computeTownEducation(): void;
    computeTownPopulation(): void;
    /** Recomputes the base total storage provided by all buildings */
    computeBuildingStorage(): void;
    /** Returns the modified storage of the town */
    getMaxStorage(): number;
    /** Returns the total storage used by all resources, excepting GP. */
    getUsedStorage(): number;
    /** Recomputes the base total soul storage provided by all buildings */
    computeSoulStorage(): void;
    /** Returns the modified soul storage of the town */
    getMaxSoulStorage(): number;
    /** Returns the total storage used by all resources, excepting GP. */
    getUsedSoulStorage(): number;
    computeFortification(): void;
    modifyBuildingResourceCost(quantity: number): number;
    getBuildingCostsForBiome(building: TownshipBuilding, biome: TownshipBiome | undefined): ResourceQuantity[];
    canAffordBuilding(building: TownshipBuilding, biome: TownshipBiome | undefined, qty?: number): boolean;
    getMaxAffordableBuildingQty(building: TownshipBuilding, biome: TownshipBiome): number;
    canAffordRepair(building: TownshipBuilding, biome: TownshipBiome | undefined): boolean;
    getSingleResourceRepairCostForBuilding(building: TownshipBuilding, biome: TownshipBiome | undefined, resourceQuantity: number): number;
    getRepairCostModifier(building: TownshipBuilding, biome: TownshipBiome | undefined): number;
    subtractBuildingCosts(building: TownshipBuilding, qty?: number): void;
    subtractRepairCosts(building: TownshipBuilding, qty: number | undefined, biome: TownshipBiome | undefined): void;
    subtractRepairAllCosts(costs: Map<TownshipResource, number>): void;
    canAffordRepairAllCosts(costs: Map<TownshipResource, number>): boolean;
    getTotalRepairCosts(): Map<TownshipResource, number>;
    getTotalRepairCostForStorage(storageType: TownshipStorageType): Map<TownshipResource, number>;
    getTotalRepairCostInBiome(biome: TownshipBiome): Map<TownshipResource, number>;
    getRepairCostInBiomeForBuilding(biome: TownshipBiome, building: TownshipBuilding, costs: Map<TownshipResource, number>): Map<TownshipResource, number>;
    checkTierPopulationReqs(tier: number): boolean;
    checkTierLevelReqs(tier: number): boolean;
    checkTierReqs(tier: number): boolean;
    checkAbyssalTierFortificationReqs(tier: number): boolean;
    checkAbyssalTierLevelReqs(tier: number): boolean;
    checkAbyssalTierReqs(tier: number): boolean;
    isBiomeUnlocked(biome: TownshipBiome): boolean;
    canBuildTierOfBuilding(building: TownshipBuilding, notify?: boolean): boolean;
    buildBuilding(building: TownshipBuilding): void;
    repairBuilding(building: TownshipBuilding, render?: boolean): void;
    onBuildingRepair(building: TownshipBuilding, biome: TownshipBiome): void;
    /** Removes a specified count from the town map. Returns the true amount of buildings removed */
    removeBuildingFromBiome(biome: TownshipBiome, building: TownshipBuilding, count?: number): number;
    /** Adds a specified count from the town map. Returns the true amount of buildings removed */
    addBuildingToBiome(biome: TownshipBiome, building: TownshipBuilding, count?: number): number;
    confirmChangeOfWorship(): void;
    destroyAllWorshipBuildings(): void;
    addProvidedStats(): void;
    /** Sets the multipliers for a given buildings provided stats */
    setBuildingProvidedStatsMultiplier(building: TownshipBuilding): void;
    updateBuildingProvidedStats(building: TownshipBuilding): void;
    updateAllBuildingProvidedStatsMultiplier(): void;
    updateForBuildingChange(): void;
    getGPGainRate(): number;
    getAPGainFromAbyssalWave(): number;
    getASCGainFromAbyssalWave(): number;
    computeTownResourceGain(): void;
    getBuildingProductionModifier(biome: TownshipBiome, building: TownshipBuilding): number;
    getSingleResourceGainAmountInBiome(resource: TownshipResource, building: TownshipBuilding, biome: TownshipBiome, applyEfficiency: boolean): number;
    getResourceGainModifier(resource: TownshipResource): number;
    countNumberOfBuildings(building: TownshipBuilding): number;
    getMaxRawCreationAmount(resource: TownshipResource): number;
    getMaxSoulsToAddAmount(amount: number): number;
    addResources(): void;
    getMaxResourceAmount(resource: TownshipResource): number;
    setResourceCap(resource: TownshipResource, cap: number): void;
    processYeet(resource: TownshipResource, amount: number): void;
    /** Callback Method */
    updateConvertQty(value: number): void;
    updateConvertToQty(value: number, conversion: TownshipItemConversion): void;
    updateConvertFromQty(value: number, resource: TownshipResource, conversion: TownshipItemConversion): void;
    getConvertToTownshipRatio(conversion: TownshipItemConversion): number;
    getConvertFromTownshipRatio(conversion: TownshipItemConversion): number;
    getBaseConvertToTownshipRatio(conversion: TownshipItemConversion): number;
    getBaseConvertFromTownshipRatio(conversion: TownshipItemConversion): number;
    processConversionToTownship(conversion: TownshipItemConversion, resource: TownshipResource): void;
    processConversionFromTownship(conversion: TownshipItemConversion, resource: TownshipResource): void;
    getMaxPossibleConvertToTownshipValue(conversion: TownshipItemConversion): number;
    getMaxPossibleConvertFromTownshipValue(resource: TownshipResource, convertRatio: number): number;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    buildingRequiresRepair(building: TownshipBuilding, biome: TownshipBiome | undefined): boolean;
}
declare const enum TownshipPage {
    Town = 0,
    Trader = 1,
    Tasks = 2,
    ManageStorage = 3
}
declare class TownshipUI {
    township: Township;
    currentPage: TownshipPage;
    defaultElements: {
        btn: {
            town: HTMLLinkElement;
            trader: HTMLLinkElement;
            manageStorage: HTMLLinkElement;
            tasks: HTMLLinkElement;
            processAbyssalWave: HTMLButtonElement;
        };
        div: {
            town: HTMLDivElement;
            trader: HTMLDivElement;
            manageStorage: HTMLDivElement;
            ticks: HTMLDivElement;
            mainInfo: HTMLDivElement;
            resources: HTMLDivElement;
            container: HTMLDivElement;
            worship: HTMLDivElement;
            currentWorshipModal: HTMLDivElement;
            worshipModal: HTMLDivElement;
            worshipModifiers: HTMLDivElement;
            worshipModifiersModal: HTMLDivElement;
            generateTown: HTMLDivElement;
            tasks: TownshipTasksMenuElement;
            timeToNextUpdate: HTMLSpanElement;
            timeToNextSeason: HTMLSpanElement;
            currentSeasonImg: HTMLImageElement;
            currenSeasonName: HTMLSpanElement;
            passiveTicks: HTMLDivElement;
            controlTicks: HTMLDivElement;
            categoryMenu: HTMLDivElement;
            worshipChangeCost: HTMLSpanElement;
            cannotChangeWorship: HTMLDivElement;
            increaseHealth: HTMLDivElement;
            nextAbyssalWaveSize: HTMLSpanElement;
            abyssalWave: HTMLElement;
            buildAbyssalGateway: HTMLDivElement;
            abyssalWaveSize: HTMLDivElement;
            abyssalXPOnWin: HTMLSpanElement;
            abyssalXPValues: HTMLLIElement;
        };
        town: {
            population: HTMLSpanElement;
            happiness: HTMLSpanElement;
            education: HTMLSpanElement;
            health: HTMLSpanElement;
            worship: HTMLDivElement;
            breakdown: {
                worship: HTMLSpanElement;
                worshipProgress: HTMLDivElement;
                storage: HTMLDivElement;
                population: HTMLDivElement;
                happiness: HTMLDivElement;
                education: HTMLDivElement;
                health: HTMLDivElement;
                fortification: HTMLDivElement;
                soulStorage: HTMLDivElement;
                soulStorageDiv: HTMLLIElement;
                fortificationDiv: HTMLLIElement;
            };
            fortification: HTMLSpanElement;
            soulStorage: HTMLSpanElement;
        };
        trader: {
            trader: HTMLDivElement;
            noTradingPost: HTMLDivElement;
        };
        notifications: {
            global: {
                noStorage: HTMLDivElement;
                noSoulStorage: HTMLDivElement;
            };
        };
        icon: {
            taskReady: HTMLSpanElement;
        };
    };
    tasks: TownshipTasksMenuElement;
    resourceDisplays: Map<TownshipResource, TownshipResourceDisplayElement>;
    townBiomeSelectButtons: Map<TownshipBiome | undefined, TownshipTownBiomeSelectElement>;
    buildingsInTown: Map<TownshipBuilding, BuildingInTownElement>;
    conversionElements: Map<TownshipResource, {
        convertTo: TownshipConversionElement[];
        convertFrom: TownshipConversionElement[];
    }>;
    worshipSelects: Map<TownshipWorship, TownshipWorshipSelectButtonElement>;
    worshipSelectsModal: Map<TownshipWorship, TownshipWorshipSelectButtonElement>;
    capResourceElements: Map<TownshipResource, TownshipCapResourceElement>;
    increaseHealthBtns: Map<TownshipResource, {
        button: HTMLButtonElement;
        cost: HTMLSpanElement;
    }[]>;
    constructor(game: Game, township: Township);
    loadTownshipUI(): void;
    updateTownStats(): void;
    /** Determines the quantities that health may be increased by using herbs/potions */
    static increaseHealthOptions: number[];
    updateAbyssalWaveUI(): void;
    showSpinnerOnFightAbyssalWaveButton(): void;
    hideSpinnerOnFightAbyssalWaveButton(): void;
    disableFightAbyssalWaveButton(): void;
    enableFightAbyssalWaveButton(): void;
    createIncreaseHealthBtns(): void;
    updateIncreaseHealthBtns(): void;
    updateWorshipChangeCost(): void;
    updateTimeToNextUpdate(): void;
    updateNextAbyssalWaveSize(): void;
    updateSeason(): void;
    updateLegacyTimeLeft(): void;
    getPageButton(page: TownshipPage): HTMLLinkElement;
    createBtnEvents(): void;
    readonly tickOptions: number[];
    updateLegacyTickButtons(): void;
    createTickBtns(): void;
    showTownCreationDivs(): void;
    hideTownCreationDivs(): void;
    hideMainContainerDivs(): void;
    showMainContainerDivs(): void;
    updatePageHighlight(oldPage: TownshipPage, newPage: TownshipPage): void;
    showPage(pageID: TownshipPage): void;
    updateTraderStatus(): void;
    addDropdownDivider(): string;
    generateTownBiomeSummarySelection(): void;
    updateUpgradeDropdowns(): void;
    /** Callback Method */
    setUpgradeQty(qty: number): void;
    getBuildingCostHTML(building: TownshipBuilding, buildQty: number): string;
    getBuildingRepairCostHTML(building: TownshipBuilding): string;
    updateRepairAllCostHTML(): void;
    getRepairAllCostHTML(costs: Map<TownshipResource, number>): string;
    getBuildingProvidesHTML(building: TownshipBuilding, useEfficiency: boolean): string;
    getBuildingResourceOutputHTML(building: TownshipBuilding): string;
    updateBuilding(building: TownshipBuilding): void;
    performBuildingUpgradedUIChanges(building: TownshipBuilding): void;
    setupTownTooltips(): void;
    displayWorshipTooltip(): string;
    displayXPInfo(): string;
    updatePopulation(): void;
    updateFortification(): void;
    updateHappiness(): void;
    updateEducation(): void;
    updateHealth(): void;
    updateWorship(): void;
    /** Callback function for when the Change Worship button is clicked */
    showChangeWorshipSelection(): void;
    updateWorshipChangeStatus(): void;
    updateWorshipCountSpan(): void;
    getCurrentWorshipSpan(): string;
    getCurrentWorshipProgressSpan(): string;
    updateTimeAlive(): void;
    createResourceBreakdownTable(): void;
    updateStorageBreakdown(): void;
    updateStorageBreakdownColour(): void;
    updateSoulStorageBreakdown(): void;
    updateSoulStorageBreakdownColour(): void;
    getStorageBreakdown(): string;
    getSoulStorageBreakdown(): string;
    updateResourceAmounts(): void;
    updateResourceTickBreakdown(): void;
    unhighlightTownBiomeBtn(biome: TownshipBiome | undefined): void;
    highlightTownBiomeBtn(biome: TownshipBiome | undefined): void;
    shouldShowBuildingInTown(building: TownshipBuilding): boolean;
    updateTownSummary(): void;
    updateTownSummaryForBuilding(building: TownshipBuilding): void;
    updateAllBiomeProgress(): void;
    updateBiomeProgress(biome: TownshipBiome): void;
    updateAllBiomeRequirements(): void;
    updateBiomeRequirements(biome: TownshipBiome): void;
    updateAllBuildingUpgradeCosts(): void;
    updateBuildingUpgradeCosts(building: TownshipBuilding): void;
    updateBuildingRepairCosts(building: TownshipBuilding): void;
    updateAllBuildingUpgradeProvides(): void;
    updateBuildingUpgradeProvides(building: TownshipBuilding): void;
    updateAllBuildingUpgradeProgress(): void;
    updateBuildingUpgradeProgress(building: TownshipBuilding): void;
    updateAllBuildingUpgradeProgressText(): void;
    updateBuildingUpgradeProgressText(building: TownshipBuilding): void;
    updateAllBuildingEfficiency(): void;
    updateBuildingEfficiency(building: TownshipBuilding): void;
    updateAllBuildingCurrentProvides(): void;
    updateBuildingCurrentProvides(building: TownshipBuilding): void;
    updateAllBuildingCurrentResourceGeneration(): void;
    updateBuildingCurrentResourceGeneration(building: TownshipBuilding): void;
    updateTownBuildingProvides(): void;
    displayTownSummary(): void;
    updateAllBuildingNames(): void;
    updateAllBuildingTotalStatsElements(): void;
    updateBuildingTotalStatsElement(building: TownshipBuilding): void;
    updateBuildingTotalOutput(building: TownshipBuilding): void;
    createWorshipSelection(): void;
    updateCurrentWorship(): void;
    isWorshipUnlocked(worship: TownshipWorship): boolean;
    updateWorshipSelection(): void;
    buildCapResourceElements(): void;
    buildYeetItemElement(): void;
    buildConvertItemElements(): void;
    updateConvertVisibility(): void;
    updateConvertQtyElements(): void;
    showTaskReadyIcon(): void;
    hideTaskReadyIcon(): void;
    updateResourceCapElement(resource: TownshipResource): void;
    /** Callback function for when the Confirm Worship Change button is clicked */
    showChangeWorshipSwal(): void;
    townViewTab: number;
    setTownViewTab(tab: number): void;
    hideTownViewTab(tab: number): void;
    showTownViewTab(tab: number): void;
    showAllTownViewTabs(): void;
    hideAllTownViewTabs(): void;
    /** Callback function for the Toggle Info Button */
    toggleTownInfo(): void;
    /** Callback function for the Toggle Resources Button */
    toggleTownResources(): void;
    updateAllBuildAvailable(): void;
    viewSeasonModifiers(township: Township): void;
    getSeasonModifierHTML(season: TownshipSeason): string;
    updateReworkNotification(): void;
    /** Callback function for the Dismiss button on the rework notification */
    dismissReworkNotification(): void;
    static readonly upgradeBuildingOptions: readonly number[];
    static readonly yeetResourceOptions: readonly number[];
    static readonly resourceCapOptions: readonly number[];
}
interface BuildingRequirement {
    population: number;
    level: number;
}
interface BuildingAbyssalRequirement {
    fortification: number;
    abyssalLevel: number;
}
declare class TownshipData implements EncodableObject {
    township: Township;
    game: Game;
    happiness: number;
    education: number;
    /** Current health percentage in the town */
    healthPercent: number;
    /** Base storage provided by all buildings */
    buildingStorage: number;
    worshipCount: number;
    /** @deprecated Save State Property. Stores the total number of biome sections the user has purchased. Currently used to refund GP costs */
    sectionsPurchased: number;
    /** Save State Property */
    worship: TownshipWorship;
    /** Save State Property. Stores if the town has been created for the first time. */
    townCreated: boolean;
    /** Stores population. Saving not required */
    population: number;
    /** Save State Property. Stores the ticks remaining until next season. */
    seasonTicksRemaining: number;
    /** Save State Property. Stores the current season of your town. */
    season?: TownshipSeason;
    /** Save State Property. Stores the previous season of your town. This is to handle Worship seasons and keep order. */
    previousSeason?: TownshipSeason;
    /** Save State Property. Stores health value of town. */
    health: number;
    /** ItA Only: Stores to current fortification of the Town */
    fortification: number;
    /** ItA Only: Save State Property. Stores to current amount of Souls collected */
    souls: number;
    /** ItA Only: Base soul storage provided by all buildings */
    soulStorage: number;
    /** Save State Property. Stores the ticks remaining until next wave of abyssal monsters. */
    abyssalWaveTicksRemaining: number;
    constructor(township: Township, game: Game);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    decodeSeason(reader: SaveWriter, version: number): TownshipSeason | undefined;
}
declare const townshipIcons: {
    population: Assets;
    happiness: Assets;
    education: Assets;
    health: Assets;
    storage: Assets;
    worship: Assets;
    fortification: Assets;
    soulStorage: Assets;
};
