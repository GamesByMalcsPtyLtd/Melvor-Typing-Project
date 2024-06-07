interface BaseAgilityObjectData extends RealmedObjectData {
    name: string;
    itemCosts: IDQuantity[];
    currencyCosts?: IDQuantity[];
    /** @deprecated Use currencyCosts instead */
    gpCost?: number;
    /** @deprecated Use currencyCosts instead */
    scCost?: number;
    modifiers: ModifierValuesRecordData;
    /** Optional. Effect Applicators merged with the player when this obstacle/pillar is active */
    combatEffects?: TriggeredCombatEffectApplicatorData[];
    /** Optional. Modifiers provided to the enemy when this obstacle/pillar is active */
    enemyModifiers?: ModifierValuesRecordData;
}
interface BaseAgilityObjectModificationData extends IDData {
    itemCosts?: ItemQuantitiesModificationData;
    currencyCosts?: CurrencyQuantitiesModificationData;
    modifiers?: ModifierValuesModificationData;
    combatEffects?: CombatEffectApplicatorModificationData;
    enemyModifiers?: ModifierValuesModificationData;
}
declare abstract class BaseAgilityObject extends MasteryAction implements SoftDataDependant<BaseAgilityObjectData> {
    itemCosts: AnyItemQuantity[];
    currencyCosts: CurrencyQuantity[];
    modifiers: ModifierValue[];
    combatEffects?: CombatEffectApplicator[];
    enemyModifiers?: ModifierValue[];
    /** The agility course this obstacle belongs to */
    course: AgilityCourse;
    _name: string;
    /** If this object has a negative modifier or effect applicatoe */
    get hasNegativeModifiers(): boolean;
    constructor(namespace: DataNamespace, data: BaseAgilityObjectData, game: Game);
    registerSoftDependencies(data: BaseAgilityObjectData, game: Game): void;
    applyDataModification(data: BaseAgilityObjectModificationData, game: Game): void;
}
declare type AgilityObstacleSkillRequirementData = SkillLevelRequirementData | AbyssalLevelRequirementData;
interface AgilityObstacleData extends BaseAgilityObjectData {
    media: string;
    category: ObstacleCategories;
    baseInterval: number;
    skillRequirements: AgilityObstacleSkillRequirementData[];
    baseExperience: number;
    /** @deprecated - Use currencyRewards instead */
    gpReward?: number;
    /** @deprecated - Use currencyRewards instead */
    scReward?: number;
    /** Optional. Defines currencies that should be awarded upon obstacle completion */
    currencyRewards?: IDQuantity[];
    itemRewards: IDQuantity[];
    baseAbyssalExperience?: number;
}
interface AgilityObstacleModificationData extends BaseAgilityObjectModificationData {
    category?: ObstacleCategories;
    baseInterval?: number;
    skillRequirements?: {
        add?: AgilityObstacleSkillRequirementData[];
        remove?: string[];
    };
    baseExperience?: number;
    currencyRewards?: CurrencyQuantitiesModificationData;
    itemRewards?: ItemQuantitiesModificationData;
    baseAbyssalExperience?: number;
}
declare class AgilityObstacle extends BaseAgilityObject {
    get name(): string;
    get media(): string;
    level: number;
    abyssalLevel: number;
    _media: string;
    category: ObstacleCategories;
    baseInterval: number;
    skillRequirements: (SkillLevelRequirement | AbyssalLevelRequirement)[];
    baseExperience: number;
    currencyRewards: CurrencyQuantity[];
    itemRewards: AnyItemQuantity[];
    baseAbyssalExperience: number;
    /** If this obstacle has been built in its course */
    get isBuilt(): boolean;
    get slot(): AgilityObstacleSlot;
    constructor(namespace: DataNamespace, data: AgilityObstacleData, game: Game);
    registerSoftDependencies(data: AgilityObstacleData, game: Game): void;
    applyDataModification(data: AgilityObstacleModificationData, game: Game): void;
    getSkillRequirements(reqData: (SkillLevelRequirementData | AbyssalLevelRequirementData)[], game: Game): (SkillLevelRequirement | AbyssalLevelRequirement)[];
}
declare class DummyObstacle extends AgilityObstacle {
    get name(): string;
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface AgilityPillarData extends BaseAgilityObjectData {
    /** The index of the slot this pillar can be built in */
    slot: number;
}
interface AgilityPillarModificationData extends BaseAgilityObjectModificationData {
    slot?: number;
}
declare class AgilityPillar extends BaseAgilityObject {
    category: number;
    get name(): string;
    get media(): string;
    /** If this pillar has been built in its course */
    get isBuilt(): boolean;
    get slot(): AgilityPillarSlot;
    constructor(namespace: DataNamespace, data: AgilityPillarData, game: Game);
    applyDataModification(data: AgilityPillarModificationData, game: Game): void;
    static getPillarType(slot: AgilityPillarSlot): string;
}
declare class DummyPillar extends AgilityPillar {
    get name(): string;
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface AgilityObstacleSlot {
    /** The agility level required for the obstacle/pillar in this tier */
    level: number;
    /** Optional. The Abyssal Agility Level required for the obstacle/pillar in this tier */
    abyssalLevel?: number;
}
interface AgilityPillarSlot extends AgilityObstacleSlot {
    /** Display name of the type of pillar */
    name: string;
    /** ID of language string to use for the name property */
    nameLang?: string;
    /** The number of obstacles that must be sequentially built for this pillar to be active */
    obstacleCount: number;
}
interface AgilityCourseData {
    /** Determines which realm the course belongs to */
    realm: string;
    /** Determines the slots for obstacles in the course */
    obstacleSlots: AgilityObstacleSlot[];
    pillarSlots: AgilityPillarSlot[];
}
interface AgilityBlueprintData {
    name: string;
    obstacles: Map<number, AgilityObstacle>;
    pillars: Map<number, AgilityPillar>;
}
declare class AgilityCourse {
    obstacleSlots: AgilityObstacleSlot[];
    pillarSlots: AgilityPillarSlot[];
    /** Map of obstacle tier to the obstacle currently built in the slot */
    builtObstacles: Map<number, AgilityObstacle>;
    /** Map of pillar tier to the pillar currently built in the slot */
    builtPillars: Map<number, AgilityPillar>;
    /** Stores blueprints for this course */
    blueprints: Map<number, AgilityBlueprintData>;
    /** The maximum number of obstacles that the player can build */
    maxObstacles: number;
    /** The current number of obstacles the player has unlocked in this course */
    numObstaclesUnlocked: number;
    /** Returns the number of sequentially built obstacles in the course */
    get activeObstacleCount(): number;
    constructor(data: AgilityCourseData, game: Game);
    postDataRegistration(agility: Agility): void;
    /** Recomputes the number of obstacles the player has unlocked in this course */
    computeNumUnlockedObstacles(agility: Agility): void;
    /** Returns the skill level required to build an obstacle in the given category */
    getObstacleLevel(category: number): number;
    /** Returns the abyssal skill level required to build an obstacle in the given category */
    getObstacleAbyssalLevel(category: number): number;
}
interface AgilitySkillData extends MasterySkillData {
    courses?: AgilityCourseData[];
    obstacles?: AgilityObstacleData[];
    pillars?: AgilityPillarData[];
}
interface AgilityModificationData extends MasterySkillModificationData {
    obstacles?: AgilityObstacleModificationData[];
    pillars?: AgilityPillarModificationData[];
}
declare type AgilityEvents = {
    action: AgilityActionEvent;
} & SkillWithMasteryEvents;
declare class Agility extends GatheringSkill<AgilityObstacle, AgilitySkillData, AgilityEvents, AgilityModificationData> {
    readonly _media = Assets.Agility;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: AgilityObstacle): boolean;
    /** Determines the maximum number of blueprints allowed per course */
    readonly maxBlueprints = 5;
    renderQueue: AgilityRenderQueue;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): AgilityObstacle;
    /** Map of obstacles to the number of times they have been built */
    obstacleBuildCount: Map<AgilityObstacle, number>;
    /** Index of builtObstacles that is currently active */
    currentlyActiveObstacle: number;
    /** Gets the currently active course based on the selected realm */
    get activeCourse(): AgilityCourse;
    /** Gets the currently active obstacle */
    get activeObstacle(): AgilityObstacle;
    pillars: NamespaceRegistry<AgilityPillar>;
    /** Agility Courses that exist. Only one can exist per realm. */
    courses: Map<Realm, AgilityCourse>;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: AgilitySkillData): void;
    modifyData(data: AgilityModificationData): void;
    postDataRegistration(): void;
    /** Determines if the level requirements have been met for an agility obstacle/pillar slot */
    isSlotUnlocked(slot: AgilityObstacleSlot): boolean;
    /** Gets the total number of times the player has built an obstacle */
    getObstacleBuildCount(obstacle: AgilityObstacle): number;
    getObstacleBuildCosts(obstacle: AgilityObstacle): Costs;
    addSingleObstacleBuildCost(obstacle: AgilityObstacle, costs: Costs): void;
    getPillarBuildCosts(pillar: AgilityPillar): Costs;
    addSinglePillarBuildCost(pillar: AgilityPillar, costs: Costs): void;
    /** Returns the total number of obstacles that have ever been built */
    getTotalObstacleBuiltCount(): number;
    /** Gets the interval required to complete an obstacle */
    getObstacleInterval(obstacle: AgilityObstacle): number;
    getXPModifier(masteryAction?: AgilityObstacle): number;
    getCurrencyModifier(currency: Currency, obstacle: AgilityObstacle): number;
    getMasteryXPModifier(action: AgilityObstacle): number;
    _buildMasteryXPSources(action?: NamedObject): ModifierSourceBuilder;
    /** Gets the negative multiplier for an obstacles negative modifiers/effect applicators */
    getObstacleNegMult(obstacle: AgilityObstacle, checkSelfModifiers?: boolean): number;
    getObstacleCostModifier(obstacle: AgilityObstacle, currency?: Currency): number;
    getObstacleItemCostModifier(obstacle: AgilityObstacle): number;
    preAction(): void;
    get actionRewards(): Rewards;
    start(): boolean;
    onStop(): void;
    postAction(): void;
    get masteryModifiedInterval(): number;
    onMasteryLevelUp(action: AgilityObstacle, oldLevel: number, newLevel: number): void;
    /** Constructs a new AgilityBlueprintData object */
    createNewBlueprint(): AgilityBlueprintData;
    loadBlueprints(): void;
    updateBlueprintNames(): void;
    setupBlueprints(): void;
    nameBlueprintSwal(index: number): void;
    saveBlueprint(index: number, name: string): void;
    loadBlueprint(index: number): void;
    getBlueprintCostToBuild(blueprint: AgilityBlueprintData): Costs;
    displayBlueprintObstacleNames(blueprint: AgilityBlueprintData): HTMLDivElement;
    displayBlueprintCostToBuild(costs: Costs): HTMLDivElement;
    getAllBlueprintPassives(blueprint: AgilityBlueprintData): {
        modifiers: ModifierTable;
        combatEffects: CombatEffectApplicator[];
        enemyModifiers: ModifierTable;
    };
    displayBlueprintSwal(blueprint: AgilityBlueprintData): void;
    replaceCourseWithBlueprint(blueprint: AgilityBlueprintData): void;
    /** Recomputes the number of obstacles the player has unlocked for each course */
    computeNumUnlockedObstacles(): void;
    onLoad(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    onAncientRelicUnlock(): void;
    onRealmChange(): void;
    getErrorLog(): string;
    render(): void;
    renderCourseRates(): void;
    /** Contructs sufficient menus to display all obstacles and pillars in a course */
    constructObstacleMenus(course: AgilityCourse): void;
    renderBuiltObstacles(): void;
    renderCourseModifiers(): void;
    renderObstacleHighlights(): void;
    renderProgressBar(): void;
    renderStartStopButtons(): void;
    /** Callback function for when the Start Agility button is clicked */
    startAgilityOnClick(): void;
    /** Callback function for when the Stop Agility button is clicked */
    stopAgilityOnClick(): void;
    /** Creates new obstacle selection menus in the modal up to the count specified */
    createSelectionMenus(count: number): void;
    /** Callbck function for when the "View Obstacle Selection" button is clicked */
    viewObstacleSelectionOnClick(category: number): void;
    /** Callback function for when the "Destroy Obstacle" button is clicked */
    destroyObstacleOnClick(category: number): void;
    /** Iterates through each active obstacle and pillar in all courses */
    forEachActiveObstacle(obstacleCallback: (obstacle: AgilityObstacle) => void, pillarCallback: (pillar: AgilityPillar) => void): void;
    addProvidedStats(): void;
    /** Rendering/state updates when the obstacles change */
    onObstacleChange(): void;
    /** Destroys the obstacle in the given category if it exists */
    destroyObstacle(category: number): void;
    /** Builds an obstacle in the given category */
    buildObstacle(obstacle: AgilityObstacle): void;
    /** Builds the specified pillar and consumes its costs */
    buildPillar(pillar: AgilityPillar): void;
    /** Destroys the currently built pillar in the given slot */
    destroyPillar(category: number): void;
    /** Callback function for when the "View Passive Pillar Selection" button is clicked */
    viewPillarSelectionOnClick(category: number): void;
    /** Callback function for when the "Destroy Passive Pillar" button is clicked */
    destroyPillarOnClick(slot: AgilityPillarSlot, category: number): void;
    /** Callback function for when an obstacle is built  */
    buildObstacleOnClick(obstacle: AgilityObstacle): void;
    /** Callback function for when a passive pillar is built */
    buildPillarOnClick(pillar: AgilityPillar): void;
    viewAllPassivesOnClick(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    getDummyObstacle(id: string): DummyObstacle | undefined;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Converts the old agility variables to class state */
    convertFromOldFormat(savegame: NewSaveGame, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    static searchArray: AgilitySearch[];
    static updateSearchArray(): void;
}
declare class AgilityRenderQueue extends GatheringSkillRenderQueue<AgilityObstacle> {
    /** Updates the intervals, GP and XP for each obstacle */
    obstacleRates: boolean;
    /** Updates the obstacles that are currently built (or not built) and the passive pillar */
    builtObstacles: boolean;
    /** Updates the modifiers that each obstacle provides */
    obstacleModifiers: boolean;
    /** Updates the highlighting on an obstacle */
    obstacleHighlights: Set<number>;
    /** Sets the start/stop button disabled/enabled */
    startButtons: boolean;
}
declare type AgilitySearch = {
    modifiers: string;
    category: number;
    course: AgilityCourse;
    obstacle: AgilityObstacle | undefined;
    pillar: AgilityPillar | undefined;
};
