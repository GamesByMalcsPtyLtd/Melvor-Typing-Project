interface BaseAgilityObjectData extends IDData {
    name: string;
    itemCosts: IDQuantity[];
    gpCost: number;
    scCost: number;
    modifiers: PlayerModifierData;
}
declare abstract class BaseAgilityObject extends MasteryAction {
    itemCosts: AnyItemQuantity[];
    gpCost: number;
    scCost: number;
    modifiers: PlayerModifierObject;
    protected _name: string;
    constructor(namespace: DataNamespace, data: BaseAgilityObjectData, game: Game);
}
interface AgilityObstacleData extends BaseAgilityObjectData {
    media: string;
    category: ObstacleCategories;
    baseInterval: number;
    skillRequirements: SkillLevelRequirementData[];
    baseExperience: number;
    gpReward: number;
    scReward: number;
    itemRewards: IDQuantity[];
}
declare class AgilityObstacle extends BaseAgilityObject {
    get name(): string;
    get media(): string;
    get level(): number;
    private _media;
    category: ObstacleCategories;
    baseInterval: number;
    skillRequirements: SkillLevelRequirement[];
    baseExperience: number;
    gpReward: number;
    scReward: number;
    itemRewards: AnyItemQuantity[];
    constructor(namespace: DataNamespace, data: AgilityObstacleData, game: Game);
}
declare class DummyObstacle extends AgilityObstacle {
    get name(): string;
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class AgilityPillar extends BaseAgilityObject {
    get name(): string;
    get media(): string;
}
declare class DummyPillar extends AgilityPillar {
    get name(): string;
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface AgilitySkillData extends MasterySkillData {
    pillars?: BaseAgilityObjectData[];
    elitePillars?: BaseAgilityObjectData[];
    obstacles?: AgilityObstacleData[];
}
declare class Agility extends GatheringSkill<AgilityObstacle, AgilitySkillData> implements StatProvider {
    protected readonly _media = "assets/media/skills/agility/agility.svg";
    protected getTotalUnlockedMasteryActions(): number;
    readonly obstacleUnlockLevels: number[];
    private readonly maxBlueprints;
    blueprints: AgilityBlueprints;
    renderQueue: AgilityRenderQueue;
    protected get actionInterval(): number;
    protected get actionLevel(): number;
    protected get masteryAction(): AgilityObstacle;
    protected get activeObstacleCount(): number;
    /** The maximum number of obstacles the player can build */
    maxObstacles: number;
    /** Gets the number of obstacles the player has unlocked */
    private get numObstaclesUnlocked();
    private get passivePillarUnlocked();
    private get elitePassivePillarUnlocked();
    /** Map of obstacle tier to which has been built. Unset indicates it has not been built */
    private builtObstacles;
    /** Map of obstacles to the number of times they have been built */
    private obstacleBuildCount;
    /** Index of builtObstacles that is currently active */
    currentlyActiveObstacle: number;
    /** The passive pillar that is currently built */
    private builtPassivePillar;
    /** The elite passive pillar that is currently built */
    private builtElitePassivePillar;
    /** Gets the currently active obstacle */
    private get activeObstacle();
    modifiers: MappedModifiers;
    pillars: NamespaceRegistry<AgilityPillar>;
    elitePillars: NamespaceRegistry<AgilityPillar>;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: AgilitySkillData): void;
    postDataRegistration(): void;
    isObstacleBuilt(obstacle: AgilityObstacle): boolean;
    isPillarBuilt(pillar: AgilityPillar): boolean;
    isElitePillarBuilt(pillar: AgilityPillar): boolean;
    getObstacleBuildCount(obstacle: AgilityObstacle): number;
    getObstacleBuildCosts(obstacle: AgilityObstacle): Costs;
    addSingleObstacleBuildCost(obstacle: AgilityObstacle, costs: Costs): void;
    getPillarBuildCosts(pillar: AgilityPillar): Costs;
    addSinglePillarBuildCost(pillar: AgilityPillar, costs: Costs): void;
    /** Returns the total number of obstacles that have ever been built */
    getTotalObstacleBuiltCount(): number;
    /** Gets the interval required to complete an obstacle */
    getObstacleInterval(obstacle: AgilityObstacle): number;
    protected getPercentageIntervalModifier(action: AgilityObstacle): number;
    getXPModifier(masteryAction?: AgilityObstacle): number;
    protected getGPModifier(obstacle: AgilityObstacle): number;
    getMasteryXPModifier(action: AgilityObstacle): number;
    /** Gets the gp granted by an obstacle's completion */
    getObstacleGP(obstacle: AgilityObstacle): number;
    /** Gets the modifiers provided by an obstacle */
    getObstacleModifiers(obstacle: AgilityObstacle): MappedModifiers;
    getPillarModifiers(pillar: AgilityPillar): MappedModifiers;
    getObstacleCostModifier(obstacle: AgilityObstacle): number;
    getObstacleItemCostModifier(obstacle: AgilityObstacle): number;
    obstacleHasNegativeModifiers(obstacle: AgilityObstacle): boolean;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    start(): boolean;
    protected onStop(): void;
    protected postAction(): void;
    protected get masteryModifiedInterval(): number;
    protected onMasteryLevelUp(action: AgilityObstacle, oldLevel: number, newLevel: number): void;
    private get newBlueprint();
    private getBlueprintName;
    private setBlueprintName;
    private loadBlueprints;
    private updateBlueprintNames;
    private setupBlueprints;
    nameBlueprintSwal(index: number): void;
    saveBlueprint(index: number, name: string): void;
    loadBlueprint(index: number): void;
    getBlueprintCostToBuild(blueprint: AgilityBlueprintData): Costs;
    private displayBlueprintObstacleNames;
    private displayBlueprintCostToBuild;
    private getAllBlueprintModifiers;
    displayBlueprintSwal(blueprint: AgilityBlueprintData): void;
    private replaceCourseWithBlueprint;
    onLoad(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    protected onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    render(): void;
    private renderCourseRates;
    private renderBuiltObstacles;
    private renderCourseModifiers;
    private renderObstacleHighlights;
    private renderProgressBar;
    private renderStartStopButtons;
    /** Callback function for when the Start Agility button is clicked */
    startAgilityOnClick(): void;
    /** Callback function for when the Stop Agility button is clicked */
    stopAgilityOnClick(): void;
    /** Creates new obstacle selection menus in the modal up to the count specified */
    private createSelectionMenus;
    /** Callbck function for when the "View Obstacle Selection" button is clicked */
    viewObstacleSelectionOnClick(category: number): void;
    /** Callback function for when the "Destroy Obstacle" button is clicked */
    destroyObstacleOnClick(category: number): void;
    /** Recomputes the passive modifiers provided by agility */
    private computeProvidedStats;
    /** Rendering/state updates when the obstacles change */
    private onObstacleChange;
    /** Destroys the obstacle in the given category if it exists */
    private destroyObstacle;
    /** Builds an obstacle in the given category */
    private buildObstacle;
    /** Builds the specified pillar and consumes its costs */
    private buildPillar;
    /** Destroys the currently built pillar */
    private destroyPillar;
    /** Callback function for when the "View Passive Pillar Selection" button is clicked */
    viewPillarSelectionOnClick(): void;
    /** Callback function for when the "Destroy Passive Pillar" button is clicked */
    destroyPillarOnClick(): void;
    /** Builds the specified elite pillar and consumes its costs */
    private buildElitePillar;
    /** Destroys the currently elite built pillar */
    private destroyElitePillar;
    /** Callback function for when the "View Elite Passive Pillar Selection" button is clicked */
    viewElitePillarSelectionOnClick(): void;
    /** Callback function for when the "Destroy Elite Passive Pillar" button is clicked */
    destroyElitePillarOnClick(): void;
    /** Callback function for when an obstacle is built  */
    buildObstacleOnClick(obstacle: AgilityObstacle): void;
    /** Callback function for when a passive pillar is built */
    buildPillarOnClick(pillar: AgilityPillar): void;
    /** Callback function for when an elite passive pillar is built */
    buildElitePillarOnClick(pillar: AgilityPillar): void;
    viewAllPassivesOnClick(): void;
    protected resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    private getDummyObstacle;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Converts the old agility variables to class state */
    convertFromOldFormat(savegame: NewSaveGame, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill): void;
    getObstacleLevel(category: number): number;
    testTranslations(): void;
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
