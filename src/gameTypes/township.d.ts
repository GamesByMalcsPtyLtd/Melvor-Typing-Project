interface TownshipBiomeData extends IDData {
    name: string;
    description: string;
    media: string;
    resourceUsage?: {
        resourceID: string;
        amount: number;
        usageMessage: string;
        penaltyMessage: string;
        noResourceMessage: string;
    };
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
    get description(): string;
    get media(): string;
    _name: string;
    _description: string;
    _media: string;
    /** The total number of the biome in the map */
    totalInMap: number;
    /** The total number of the biome available to build in. Can be reconstructed on save load. */
    availableInMap: number;
    /** The number of the biome in the map that has been purchased */
    amountPurchased: number;
    /** The number of buildings that have been built in the biome */
    buildingsBuilt: Map<TownshipBuilding, number>;
    provides: {
        population: boolean;
        storage: boolean;
        happiness: boolean;
        education: boolean;
        deadStorage: boolean;
        worship: boolean;
    };
    /** Resources available within this Biome provided from buildings */
    containsResources: Set<TownshipResource>;
    resourceUsage?: {
        resource: TownshipResource;
        amount: number;
        _usageMessage: string;
        _penaltyMessage: string;
        _noResourceMessage: string;
    };
    get usageMessage(): string;
    get penaltyMessage(): string;
    get noResourceMessage(): string;
    constructor(namespace: DataNamespace, data: TownshipBiomeData, game: Game);
    registerSoftDependencies(data: TownshipBiomeData, game: Game): void;
    /** Returns the number of a particular building that has been built in the biome */
    getBuildingCount(building: TownshipBuilding): number;
    removeBuildings(building: TownshipBuilding, count: number): void;
    addBuildings(building: TownshipBuilding, count: number): void;
    addResource(resource: TownshipResource): void;
}
declare class DummyTownshipBiome extends TownshipBiome {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface TownshipBuildingProvidesData {
    population: number;
    happiness: number;
    education: number;
    storage: number;
    workers: IDQuantity[];
    resources: IDQuantity[];
    deadStorage?: number;
    worship?: number;
}
declare class TownshipBuildingProvides {
    population: number;
    happiness: number;
    education: number;
    storage: number;
    workers: Map<TownshipJob, number>;
    resources: Map<TownshipResource, number>;
    deadStorage?: number;
    worship?: number;
    constructor(data: TownshipBuildingProvidesData, game: Game);
    resourceCount(resource: TownshipResource): number;
    workerCount(job: TownshipJob): number;
}
interface TownshipBuildingData extends IDData {
    name: string;
    description: string;
    media: string;
    tier: number;
    type: BuildingType;
    upgradesFrom?: string;
    cost: IDQuantity[];
    provides: TownshipBuildingProvidesData;
    biomes: string[];
    biomeModifiers: {
        biomeID: string;
        value: number;
    }[];
    modifiers?: PlayerModifierData;
}
declare class TownshipBuilding extends NamespacedObject {
    get name(): string;
    get description(): string;
    get media(): string;
    _name: string;
    _description: string;
    _media: string;
    tier: number;
    type: BuildingTypeID;
    upgradesFrom?: TownshipBuilding;
    upgradesTo?: TownshipBuilding;
    costs: ResourceQuantity[];
    provides: TownshipBuildingProvides;
    biomes: TownshipBiome[];
    biomeModifiers: Map<TownshipBiome, number>;
    modifiers?: PlayerModifierObject;
    /** Modifiers that are currently provided by the given building */
    providedModifiers?: MappedModifiers;
    constructor(namespace: DataNamespace, data: TownshipBuildingData, game: Game);
    getBiomeModifier(biome: TownshipBiome): number;
    isAnUpgradeOf(building: TownshipBuilding): boolean;
}
declare class DummyTownshipBuilding extends TownshipBuilding {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface TownshipWorshipData extends IDData {
    name: string;
    description: string;
    media: string;
    modifiers: PlayerModifierData;
    isHidden: boolean;
    checkpoints: PlayerModifierData[];
    unlockRequirements: AnyRequirementData[];
    statueName: string;
    statueMedia: string;
}
declare class TownshipWorship extends NamespacedObject {
    get name(): string;
    get description(): string;
    get media(): string;
    get statueName(): string;
    get statueMedia(): string;
    _name: string;
    _description: string;
    _media: string;
    modifiers: PlayerModifierObject;
    isHidden: boolean;
    checkpoints: PlayerModifierObject[];
    unlockRequirements: AnyRequirement[];
    _statueName: string;
    _statueMedia: string;
    constructor(namespace: DataNamespace, data: TownshipWorshipData, game: Game);
}
declare class DummyTownshipWorship extends TownshipWorship {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface TownshipMapData extends IDData {
    name: string;
    biomes: {
        biomeID: string;
        count: number;
    }[];
}
declare class TownshipMap extends NamespacedObject {
    get name(): string;
    biomeCounts: Map<TownshipBiome, number>;
    _name: string;
    getBiomeCount(biome: TownshipBiome): number;
    constructor(namespace: DataNamespace, data: TownshipMapData, game: Game);
}
interface TownshipJobData extends IDData {
    name: string;
    produces?: string;
}
declare class TownshipJob extends NamespacedObject {
    get name(): string;
    produces?: TownshipResource;
    _name: string;
    /** The number of citizens assigned to this job */
    assigned: number;
    /** The maximum number of citizens that may be assigned to this job */
    maxAvailable: number;
    constructor(namespace: DataNamespace, data: TownshipJobData, game: Game);
}
interface TownshipResourceData extends IDData {
    name: string;
    media: string;
    type: TownshipResourceType;
    description: string;
    requires: IDQuantity[];
    startingAmount: number;
    requiredForPopGrowth?: boolean;
    statPenalties: TownshipStatPenaltyData[];
    buildingPenalties: TownshipBuildingPenaltyData[];
    healthBonus?: TownshipHealthBonus;
    /** If present, citizens under maxAge will not die if all other resources are owned */
    preventCitizenDeath?: {
        resources: string[];
        maxAge: number;
    };
}
interface TownshipHealthBonus {
    positiveIncreasing: number;
    positiveDecreasing: number;
    negativeIncreasing: number;
    negativeDecreasing: number;
}
interface TownshipStatPenaltyData {
    penalty: 'deathRate' | 'flatHappiness' | 'happinessModifier';
    value: number;
    biome?: string;
    maxAgeWorkers?: boolean;
    scaleWithMaxAgeWorkers?: boolean;
}
interface TownshipStatPenalty {
    resource: TownshipResource;
    penalty: 'deathRate' | 'flatHappiness' | 'happinessModifier';
    value: number;
    biome?: TownshipBiome;
    maxAgeWorkers?: boolean;
    scaleWithMaxAgeWorkers?: boolean;
}
interface TownshipBuildingPenaltyData {
    provides: 'happiness' | 'education' | 'resources' | 'worship';
    value: number;
    biome: string;
}
interface TownshipBuildingPenalty {
    resource: TownshipResource;
    provides: 'happiness' | 'education' | 'resources' | 'worship';
    value: number;
    biome: TownshipBiome;
}
declare class TownshipResource extends NamespacedObject {
    get name(): string;
    get media(): string;
    type: TownshipResourceTypeID;
    get description(): string;
    requires: Map<TownshipResource, number>;
    biomeUsage: Map<TownshipBiome, number>;
    startingAmount: number;
    requiredForPopGrowth: boolean;
    itemConversions: AnyItem[];
    producingJob?: TownshipJob;
    /** Penalities applied to global township stats/modifiers when none of the resource is owned */
    statPenalties: TownshipStatPenalty[];
    /** Penalities applied to buildings when none of the resource is owned */
    buildingPenalties: TownshipBuildingPenalty[];
    /** Penalty applied to health depending on if resource is owned and if it is increasing */
    healthBonus?: TownshipHealthBonus;
    preventCitizenDeath?: {
        resources: TownshipResource[];
        maxAge: number;
    };
    _name: string;
    _media: string;
    _description: string;
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
    /** Base generation rate of resource */
    baseGeneration: number;
    /** Current generation rate of resource */
    generation: number;
    constructor(namespace: DataNamespace, data: TownshipResourceData, game: Game);
    requiredCount(resource: TownshipResource): number;
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
    jobs?: TownshipJobData[];
    biomes?: TownshipBiomeData[];
    buildings?: TownshipBuildingData[];
    worships?: TownshipWorshipData[];
    maps?: TownshipMapData[];
    buildingDisplayOrder?: InsertOrder[];
    resourceDisplayOrder?: InsertOrder[];
    tasks?: TownshipTaskData[];
}
declare class TownshipRenderQueue extends SkillRenderQueue {
    /** Renders population, workers, storage, happiness, education, health and worship. Impacted by modifiers. */
    townStats: boolean;
    /** Renders the amount of each resource owned */
    resourceAmounts: boolean;
    /** Renders the rate of each resource gain. Impacted by modifiers. */
    resourceRates: boolean;
    /** Renders the assigned workers to each job. */
    workerCounts: boolean;
    /** Renders the costs of all buildings. */
    buildingCosts: boolean;
    /** Renders the level and population requirements of buildings */
    extraBuildingRequirements: boolean;
    /** Renders the number of ticks available to spend */
    ticksAvailable: boolean;
    /** Renders the current age of the town */
    townAge: boolean;
    /** Renders the current citizen breakdown of the town */
    citizens: boolean;
    /** Renders the provision and resource output of buildings */
    buildingProvides: boolean;
    /** Renders the stock availability of the Trader */
    traderStock: boolean;
}
declare class Township extends Skill<TownshipSkillData> implements StatProvider, Action {
    readonly _media: string;
    /** Tick length in seconds */
    readonly TICK_LENGTH = 300;
    readonly MAX_TOWN_SIZE: number;
    readonly SECTION_SIZE = 32;
    readonly INITIAL_CITIZEN_COUNT = 2;
    readonly MIN_WORKER_AGE = 8;
    readonly MAX_WORKER_AGE = 70;
    readonly AGE_OF_DEATH = 55;
    readonly MIN_MIGRATION_AGE = 16;
    readonly MAX_MIGRATION_AGE = 50;
    readonly BASE_TAX_RATE = 0;
    readonly EDUCATION_PER_CITIZEN = 3;
    readonly HAPPINESS_PER_CITIZEN = 2;
    readonly CITIZEN_FOOD_USAGE = 1;
    readonly POPULATION_REQUIRED_FOR_BIRTH = 10;
    readonly BASE_STORAGE = 19000;
    readonly WORSHIP_CHECKPOINTS: number[];
    readonly MAX_WORSHIP: number;
    readonly DECREASED_BUILDING_COST_CAP = -80;
    readonly DECREASED_FOOD_USAGE_CAP = -80;
    readonly populationForTier: NumberDictionary<BuildingRequirement>;
    renderQueue: TownshipRenderQueue;
    modifiers: MappedModifiers;
    totalTicks: number;
    citizens: Citizen[];
    populationLimit: number;
    modifiersFromBuildings: MappedModifiers;
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
    townData: TownshipData;
    buildQty: number;
    availableGameTicksToSpend: number;
    lastTickAddedDate: number;
    nextSectionQty: number;
    destroyQty: number;
    upgradeQty: number;
    tasks: TownshipTasks;
    jobsAreAvailable: boolean;
    tickInterval: number;
    tickIntervalActive: boolean;
    mapSelectIndex: number;
    mapSelection: TownshipMap;
    biomes: NamespaceRegistry<TownshipBiome>;
    buildings: NamespaceRegistry<TownshipBuilding>;
    worships: NamespaceRegistry<TownshipWorship>;
    maps: NamespaceRegistry<TownshipMap>;
    resources: NamespaceRegistry<TownshipResource>;
    jobs: NamespaceRegistry<TownshipJob>;
    availableMaps: TownshipMap[];
    buildingDisplayOrder: NamespacedArray<TownshipBuilding>;
    resourceDisplayOrder: NamespacedArray<TownshipResource>;
    noWorship: TownshipWorship;
    unemployedJob: TownshipJob;
    worshipInSelection: TownshipWorship | undefined;
    buildingPenalties: {
        happiness: TownshipBuildingPenalty[];
        education: TownshipBuildingPenalty[];
        resources: TownshipBuildingPenalty[];
        worship: TownshipBuildingPenalty[];
    };
    statPenalties: {
        happinessModifier: TownshipStatPenalty[];
        deathRate: TownshipStatPenalty[];
        flatHappiness: TownshipStatPenalty[];
    };
    healthBonusResources: TownshipResource[];
    /** Resources that are required for population growth */
    popGrowthResources: TownshipResource[];
    /** Resoureces that can prevent pop death under a certain age */
    deathPreventingResources: TownshipResource[];
    updateUnemployedCount: boolean;
    _unemployedCount: number;
    changeMapWarningShown: boolean;
    changeWorshipWarningShown: boolean;
    readonly MAX_TRADER_STOCK_INCREASE = 100000000;
    get traderStockIncrease(): number;
    get decayTickAmount(): number;
    get foodJob(): TownshipJob | undefined;
    get unemployedCount(): number;
    get citizenSources(): string[];
    get oneDayInTicks(): number;
    get traderTimePeriod(): number;
    get isTraderAvailable(): boolean;
    get traderLeavesIn(): number;
    get traderArrivesIn(): number;
    get minWidthForListItem(): string;
    get chanceForPet(): number;
    get statueName(): string;
    get statueMedia(): string;
    /** The base rate of xp gained per tick, before modifiers */
    get baseXPRate(): number;
    get currentPopulation(): number;
    get currentWorshipName(): string;
    get worshipPercent(): number;
    /** Returns the current tier of worship that is active. -1 Indicates none are active */
    get worshipTier(): number;
    get deadStoragePercent(): number;
    get totalDead(): number;
    get availableDeadStorage(): number;
    get happinessPercent(): number;
    get maxHappiness(): number;
    get isCitizenAtMaxWorkerAge(): boolean;
    get citizensAtMaxWorkerAge(): number;
    get educationPercent(): number;
    get maxEducation(): number;
    get taxRate(): number;
    get populationGainRate(): number;
    get populationGainChance(): number;
    get deadDecayAmount(): number;
    get potionUsage(): number;
    get foodUsage(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: TownshipSkillData): void;
    getResourceQuantityFromData(resourceData: IDQuantity[]): ResourceQuantity[];
    postDataRegistration(): void;
    buildResourceItemConversions(): void;
    getErrorLog(): string;
    increaseTraderStockAvailable(): void;
    grantOfflineTicks(): void;
    toggleTickInterval(): void;
    encodeResource(writer: SaveWriter, resource: TownshipResource): void;
    encodeBiome(writer: SaveWriter, biome: TownshipBiome): void;
    encode(writer: SaveWriter): SaveWriter;
    decodeResource(reader: SaveWriter, version: number): void;
    decodeBiome(reader: SaveWriter, version: number): void;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeCitizens(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeTownData(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeTownDataResources(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeTownDataWorkers(reader: DataReader, version: number, idMap: NumericIDMap): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    /** Queues renders when resources change */
    onResourceAmountChange(): void;
    renderTownStats(): void;
    renderResourceAmounts(): void;
    renderResourceRates(): void;
    renderWorkerCounts(): void;
    renderBuildingCosts(): void;
    renderBuildingRequirements(): void;
    renderTicksAvailable(): void;
    renderTownAge(): void;
    renderCitizens(): void;
    renderBuildingProvides(): void;
    renderTraderStockRemaining(): void;
    render(): void;
    initTownCreation(): void;
    updateConvertType(type: TownshipConvertType): void;
    updateGeneratedTownBreakdown(): void;
    /** Callback method */
    confirmTownCreation(): void;
    regenerateTown(showConfirmation?: boolean): void;
    selectWorship(worship: TownshipWorship): void;
    confirmWorship(): void;
    preLoad(): void;
    postStatLoad(): void;
    postLoad(): void;
    onLoad(): void;
    /** @deprecated This method will be removed in the next major update. Use renderModifierChange instead */
    onModifierChange(): void;
    onPageChange(): void;
    renderModifierChange(): void;
    tick(): boolean;
    rollForPets(interval: number): void;
    catchupTicks(tickAmount: number, confirmed?: boolean): void;
    fireCatchupConfirmation(tickAmount: number): void;
    selectNewMapConfirmation(): void;
    deleteConfirmationSwal(): void;
    deleteTownshipDataFromLocalStorage(): void;
    resetTownshipLevel(): void;
    setBiomeCountsForMap(): void;
    generateStartingSection(grasslands: TownshipBiome): void;
    /** Creates the initial town buildings in the grasslands biome */
    generateEmptyTown(grasslands: TownshipBiome): void;
    /** Handles the spawning and creation of initial Township citizens */
    spawnInitialCitizens(): void;
    addNewCitizen(citizenSource: CitizenSource): void;
    setBuildBiome(biome: TownshipBiome | undefined, jumpTo?: boolean): void;
    setTownBiome(biome: TownshipBiome | undefined, jumpTo?: boolean): void;
    updateForBiomeSelectChange(biome: TownshipBiome | undefined): void;
    setPriorityJob(job: TownshipJob): void;
    setNextSectionQty(qty: number): void;
    setBuildQty(qty: number): void;
    updateBuildingsForQuantityChange(): void;
    getNextSectionCost(qty: number): number;
    getAvailableWorkers(): {
        total: number;
        unemployed: number;
    };
    /** Recomputes all stats in the town that only depend on building count */
    computeBuildingTownStats(): void;
    /** Recomputes all the stats of the town */
    computeTownStats(): void;
    /** Recomputes worship, then provided modifiers if worship changes, then town stats */
    computeWorshipAndStats(): void;
    popOver55: number;
    recalculatePopOver55(): void;
    retroactiveCitizenAgeFix(): void;
    setCitizenAge(citizen: Citizen, age: number): void;
    getCitizenAge(citizen: Citizen): number;
    /** Recomputes the worship of the town provided by buildings an augmented by resource penalties. Returns if the worship tier has changed. */
    computeWorship(): boolean;
    getDeadStoragePerBuilding(building: TownshipBuilding): number;
    getTotalDeadStorageForBuilding(building: TownshipBuilding): number;
    computeTownDeadStorage(): void;
    computeTownHappiness(): void;
    applyBuildingHappinessPenalty(happiness: number): number;
    shouldApplyStatPenalty(penalty: TownshipStatPenalty): boolean;
    getTownHappinessNegativeModifiers(): number;
    getFlatTownHappinessNegatives(): number;
    computeTownHealthPercent(): void;
    getHealthConditionPercent(bonus: TownshipHealthBonus | undefined, positive: boolean, increasing: boolean): number;
    computeTownEducation(): void;
    computePopulationLimit(): void;
    /** Recomputes the base total storage provided by all buildings */
    computeBuildingStorage(): void;
    /** Returns the modified storage of the town */
    getMaxStorage(): number;
    /** Returns the total storage used by all resources, excepting GP. */
    getUsedStorage(): number;
    getTotalBuildingsInBiome(biome: TownshipBiome): number;
    modifyBuildingResourceCost(quantity: number): number;
    canAffordBuilding(building: TownshipBuilding, qty?: number): boolean;
    subtractBuildingCosts(building: TownshipBuilding, qty?: number): void;
    canBuildTierOfBuilding(building: TownshipBuilding, notify?: boolean): boolean;
    canBuildInBiome(biome: TownshipBiome): boolean;
    buildBuilding(building: TownshipBuilding): void;
    getAvailableBuildingSpaceInBiome(biome: TownshipBiome): number;
    /** Removes a specified count from the town map. Returns the true amount of buildings removed */
    removeBuildingFromBiome(biome: TownshipBiome, building: TownshipBuilding, count?: number): number;
    /** Adds a specified count from the town map. Returns the true amount of buildings removed */
    addBuildingToBiome(biome: TownshipBiome, building: TownshipBuilding, count?: number): number;
    destroyHalfCitizens(): void;
    confirmChangeOfWorship(): void;
    destroyAllWorshipBuildings(): void;
    destroyAllBuildings(): void;
    destroyBuilding(building: TownshipBuilding, render?: boolean): void;
    removeBuilding(building: TownshipBuilding, count?: number): boolean;
    removeOverflowingWorkers(building: TownshipBuilding): void;
    /** Recomputes the modifiers provided by buildings. Does not recalculate provided stats or player stats. */
    computeModifiersFromBuildings(): void;
    /** Recomputes the modifiers provided by township */
    computeProvidedStats(updatePlayer?: boolean): void;
    /** Sets the modifier for a given building, does not update player stats */
    setModifiers(building: TownshipBuilding): void;
    updateBuildingModifierData(building: TownshipBuilding): void;
    updateAllBuildingModifierData(): void;
    updateForBuildingChange(): void;
    buyNewSectionOfLand(): void;
    addSectionOfLand(biome: TownshipBiome, qty: number): void;
    getGPGainRate(): number;
    getBuildingsWithResource(resource: TownshipResource): {
        building: TownshipBuilding;
        biome: TownshipBiome;
        count: number;
        amount: number;
        baseAmount: number;
    }[];
    computeTownResourceGain(): void;
    getBiomeResourceProductionModifier(biome: TownshipBiome): number;
    getBuildingResourceProductionModifier(building: TownshipBuilding): number;
    getSingleResourceGainAmountInBiome(resource: TownshipResource, building: TownshipBuilding, biome: TownshipBiome): number;
    getResourceGainModifier(resource: TownshipResource): number;
    getTrueResourceUsage(resource: TownshipResource): number;
    getResourceUsage(resource: TownshipResource): number;
    getResourceBiomeUsage(resource: TownshipResource): number;
    getSingleResourceUsageInBiome(resource: TownshipResource, biome: TownshipBiome): number;
    getAllBuildingWorkerCount(): number;
    computeMaxWorkerCounts(): void;
    computeMaxWorkerCount(job: TownshipJob): void;
    countNumberOfBuildings(building: TownshipBuilding): number;
    addWorker(citizen: Citizen, job: TownshipJob): void;
    removeWorker(citizen: Citizen): void;
    assignCitizenToJob(citizen: Citizen, job: TownshipJob): void;
    removeCitizenFromJob(citizen: Citizen): void;
    removeRandomCitizenFromJob(job: TownshipJob): void;
    addPopulation(): void;
    /** This is used to determine the true amount inclusive of resources gained during the tick. */
    getTrueMaxProductCreationAmount(resource: TownshipResource, withoutModifiers?: boolean): number;
    /** This is used to determine the amount during a tick process, as resources have already been awarded at this point. */
    getMaxProductCreationAmount(resource: TownshipResource, withoutModifiers?: boolean): number;
    getMaxRawCreationAmount(resource: TownshipResource): number;
    getNetResourceRate(resource: TownshipResource): number;
    addResources(): void;
    getMaxResourceAmount(resource: TownshipResource): number;
    applyRandomJobToCitizen(citizen: Citizen): void;
    findAvailableJobForCitzen(): TownshipJob;
    updateDeadStorage(): void;
    updateCitizens(): void;
    assignWorkersOnLoad(): void;
    updateCitizenInfo(citizen: Citizen): void;
    checkCitizenRetirement(citizen: Citizen): void;
    checkPopulationOverflow(): void;
    getChanceToDestroyCitizen(citizen: Citizen): number;
    shouldWeKillThisCitizen(citizen: Citizen): boolean;
    destroyCitizen(citizen: Citizen, index: number): void;
    setResourceCap(resource: TownshipResource, cap: number): void;
    processYeet(resource: TownshipResource, amount: number): void;
    /** Callback Method */
    updateConvertQty(value: number): void;
    updateConvertToQty(value: number, resource: TownshipResource, item: AnyItem): void;
    updateConvertFromQty(value: number, resource: TownshipResource, item: AnyItem): void;
    getConvertToTownshipRatio(resource: TownshipResource, item: AnyItem): number;
    getConvertFromTownshipRatio(resource: TownshipResource, item: AnyItem): number;
    getBaseConvertToTownshipRatio(resource: TownshipResource, item: AnyItem): number;
    getBaseConvertFromTownshipRatio(resource: TownshipResource, item: AnyItem): number;
    processConversionToTownship(item: AnyItem, resource: TownshipResource): void;
    processConversionFromTownship(item: AnyItem, resource: TownshipResource): void;
    getMaxPossibleConvertToTownshipValue(): number;
    getMaxPossibleConvertFromTownshipValue(resource: TownshipResource, convertRatio: number): number;
    testTranslations(): void;
}
declare const enum TownshipPage {
    Town = 0,
    Citizens = 1,
    Settings = 2,
    Convert = 3,
    Build = 4,
    Tasks = 5,
    Yeet = 6
}
declare class TownshipUI {
    township: Township;
    currentPage: TownshipPage;
    defaultElements: {
        btn: {
            town: HTMLLinkElement;
            build: HTMLLinkElement;
            convertResources: HTMLLinkElement;
            yeetResources: HTMLLinkElement;
            settings: HTMLLinkElement;
            tasks: HTMLLinkElement;
            citizens: HTMLLinkElement;
        };
        div: {
            town: HTMLDivElement;
            build: HTMLDivElement;
            convertResources: HTMLDivElement;
            yeetResources: HTMLDivElement;
            citizens: HTMLDivElement;
            settings: HTMLDivElement;
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
            townBreakdown: HTMLDivElement;
            tasks: HTMLDivElement;
        };
        town: {
            population: HTMLSpanElement;
            happiness: HTMLSpanElement;
            education: HTMLSpanElement;
            health: HTMLDivElement;
            worship: HTMLDivElement;
            deadStorage: HTMLDivElement;
            breakdown: {
                map: HTMLDivElement;
                worship: HTMLSpanElement;
                worshipProgress: HTMLDivElement;
                boimesPurchased: HTMLDivElement;
                storage: HTMLDivElement;
                population: HTMLDivElement;
                availableWorkers: HTMLDivElement;
                deadStorage: HTMLDivElement;
                over55: HTMLDivElement;
                over70: HTMLDivElement;
            };
        };
        trader: {
            trader: HTMLDivElement;
            traderAvailable: HTMLDivElement;
            traderNotAvailable: HTMLDivElement;
            arrivesIn: HTMLSpanElement;
            leavesIn: HTMLSpanElement;
            noTradingPost: HTMLDivElement;
        };
        notifications: {
            build: {
                alert: HTMLDivElement;
                usage: HTMLParagraphElement;
                message: HTMLParagraphElement;
            };
            town: {
                alert: HTMLDivElement;
                usage: HTMLParagraphElement;
                message: HTMLParagraphElement;
                noResourceAlerts: HTMLDivElement;
                noFood: HTMLDivElement;
            };
            global: {
                noFood: HTMLDivElement;
                losingFood: HTMLDivElement;
                noPriority: HTMLDivElement;
                noStorage: HTMLDivElement;
            };
        };
        icon: {
            taskReady: HTMLSpanElement;
        };
    };
    resourceDisplays: Map<TownshipResource, TownshipResourceDisplayElement>;
    townBiomeSelectButtons: Map<TownshipBiome | undefined, TownshipTownBiomeSelectElement>;
    buildingsInTown: Map<TownshipBuilding, BuildingInTownElement>;
    buildBiomeSelectOptions: Map<TownshipBiome, HTMLElement>;
    buildBiomeSelectButtons: Map<TownshipBiome, TownshipBuildBiomeSelectElement>;
    buildBuildings: Map<TownshipBuilding, TownshipBuildBuildingElement>;
    conversionElements: Map<TownshipResource, {
        convertTo: TownshipConversionElement[];
    }>;
    worshipSelects: Map<TownshipWorship, TownshipWorshipSelectButtonElement>;
    worshipSelectsModal: Map<TownshipWorship, TownshipWorshipSelectButtonElement>;
    biomeNoResourceAlerts: Map<TownshipBiome, HTMLDivElement>;
    capResourceElements: Map<TownshipResource, TownshipCapResourceElement>;
    filterIconElements: Map<string, TownshipBuildBiomeFilterIconElement>;
    constructor(township: Township);
    loadTownshipUI(): void;
    updateTownStats(): void;
    updateTownNotifications(): void;
    updateTicksAvailable(): void;
    getPageButton(page: TownshipPage): HTMLLinkElement;
    createBtnEvents(): void;
    createTickBtns(): void;
    showTownCreationDivs(): void;
    hideTownCreationDivs(): void;
    hideMainContainerDivs(): void;
    showMainContainerDivs(): void;
    updatePageHighlight(oldPage: TownshipPage, newPage: TownshipPage): void;
    showPage(pageID: TownshipPage): void;
    updateTraderStatus(): void;
    traderLockedSwal(): void;
    updateTaskUI(category: TownshipTaskCategory): void;
    generateTownBiomeData(): void;
    generateFilterIcons(): void;
    highlightFilterIcon(filter: string): void;
    filterBuildBoimes(filter: string | TownshipResource): void;
    highlightBuildBuildingsWithFilter(filter: string | TownshipResource): void;
    generateBiomeSelectionDropdown(): void;
    generateBiomeNoResourceAlerts(): void;
    sortList: BuildingSortList;
    /** Callback Method */
    toggleSortList(category: keyof BuildingSortList, index: number): void;
    setSortListToDefault(): void;
    updateSortCheckbox(category: keyof BuildingSortList, index: number): void;
    addDropdownDivider(): string;
    generateTownBiomeSummarySelection(): void;
    updateNextSectionCost(): void;
    updateDestroyDropdowns(): void;
    updateUpgradeDropdowns(): void;
    /** Callback Method */
    setUpgradeQty(qty: number): void;
    /** Callback Method */
    setDestroyQty(qty: number): void;
    shouldShowBuilding(building: TownshipBuilding): boolean;
    updateBuildBuildingProvides(): void;
    updateBuildingsForBiomeSelection(): void;
    updateBuildBiomeSelectionNotifications(): void;
    updateTownBiomeSelectionNotifications(): void;
    getBuildingCostHTML(building: TownshipBuilding, buildQty: number): string;
    getBuildingResourceUsage(building: TownshipBuilding): string;
    updateBuildingCounts(): void;
    updateBuilding(building: TownshipBuilding): void;
    setupTownTooltips(): void;
    displayWorshipTooltip(): string;
    displayXPInfo(): string;
    displayDeathInfo(): string;
    updatePopulation(): void;
    updateHappiness(): void;
    updateEducation(): void;
    updateHealth(): void;
    updateWorship(): void;
    updateDeathStorage(): void;
    showChangeWorshipSelection(): void;
    updateWorshipCountSpan(): void;
    getCurrentWorshipSpan(): string;
    getCurrentWorshipProgressSpan(): string;
    updateTimeAlive(): void;
    updateBiomeBreakdown(biome: TownshipBiome | undefined): void;
    createResourceBreakdownTable(): void;
    updateStorageBreakdown(): void;
    updateStorageBreakdownColour(): void;
    getStorageBreakdown(): string;
    updateDeathStorageBreakdown(): void;
    updateDeadStorageBreakdownColour(): void;
    getDeadStorageBreakdown(): string;
    updateResourceAmounts(): void;
    updateResourceTickBreakdown(): void;
    unhighlightBuildBiomeBtn(biome: TownshipBiome | undefined): void;
    highlightBuildBiomeBtn(biome: TownshipBiome | undefined): void;
    unhighlightTownBiomeBtn(biome: TownshipBiome | undefined): void;
    highlightTownBiomeBtn(biome: TownshipBiome | undefined): void;
    unhighlightPriorityWorkerBtn(job: TownshipJob): void;
    highlightPriorityWorkerBtn(job: TownshipJob): void;
    updateWorkerCounts(): void;
    updateWorkersAvailable(): void;
    getWorkersAvailableSpan(): string;
    displayAllCitizens(): void;
    getCitizenDetailsElement(age: number, count: number): string;
    shouldShowBuildingInTown(building: TownshipBuilding): boolean;
    updateTownSummary(): void;
    updateAllBuildingUpgradeCosts(): void;
    updateBuildingUpgradeCosts(building: TownshipBuilding): void;
    updateTownBuildingProvides(): void;
    displayTownSummary(): void;
    generateBuildBuildings(): void;
    updateBuildQtyButtons(oldQty: number, newQty: number): void;
    updateForBuildQtyChange(): void;
    updateAllBuildingRequirements(): void;
    updateAllBuildingCosts(): void;
    updateBuildingTotalModifierElement(building: TownshipBuilding): void;
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
    updateConvertTypeBtn(): void;
    showTaskReadyIcon(): void;
    hideTaskReadyIcon(): void;
    updateResourceCapElement(resource: TownshipResource): void;
    showChangeWorshipSwal(): void;
    updateTotalBiomesPurchased(): void;
    highlightBiomesWithResource(resource: TownshipResource): void;
    unhighlightBiomesWithResource(): void;
    highlightBiomesWithBuilding(building: TownshipBuilding): void;
    unhighlightBiomesWithBuilding(): void;
    highlightBiomesWithBuildingBuilt(building: TownshipBuilding): void;
    unhighlightBiomesWithBuildingBuilt(): void;
    highlightBiomesWith(provides: 'population' | 'storage' | 'happiness' | 'education' | 'deadStorage' | 'worship'): void;
    unhighlightBiomes(): void;
    townViewTab: number;
    setTownViewTab(tab: number): void;
    hideTownViewTab(tab: number): void;
    showTownViewTab(tab: number): void;
    showAllTownViewTabs(): void;
    hideAllTownViewTabs(): void;
    updateTraderStockAvailable(): void;
    toggleTownInfo(): void;
    toggleTownResources(): void;
    static readonly destroyBuildingOptions: readonly number[];
    static readonly upgradeBuildingOptions: readonly number[];
    static readonly yeetResourceOptions: readonly number[];
    static readonly resourceCapOptions: readonly number[];
}
interface BuildingRequirement {
    population: number;
    level: number;
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
    deadStorage: number;
    worshipCount: number;
    /** Save State Property. Stores number of dead citizens. */
    dead: number;
    /** Save State Property. */
    priorityJob?: TownshipJob;
    /** Save State Property. Biome which the user has selected to build in */
    currentBuildBiome?: TownshipBiome;
    /** Save State Property. Stores the total number of biome sections the user has purchased. Does not reset on town restart. */
    sectionsPurchased: number;
    /** Save State Property. Stores the total number of biomes unlocked for their specific map. Resets on town restart */
    biomesUnlocked: number;
    /** Save State Property */
    worship: TownshipWorship;
    /** Save State Property. Stores if the town has been created for the first time. */
    townCreated: boolean;
    /** Save State Property. Stores stock remaining for the Trader. */
    traderStock: number;
    constructor(township: Township, game: Game);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
declare const townshipIcons: {
    population: string;
    happiness: string;
    education: string;
    health: string;
    storage: string;
    dead: string;
    worship: string;
    workers: string;
    showAll: string;
};
