interface CartographySkillData extends BaseSkillData {
    worldMaps?: WorldMapData[];
    mapPortals?: WorldMapPortalData[];
    travelEvents?: RandomTravelEventData[];
    refinementSlotCosts?: FixedCostsData[];
    refinementModifiers?: ModifierArrayData[];
    paperRecipes?: PaperMakingRecipeData[];
}
declare class CartographyOfflineSnapshot {
    /** Stores a snapshot of the total number of hexes surveyed in each WorldMap */
    hexesSurveyed: Map<WorldMap, number>;
    /** Stores a snapshot of the total number of hexes mastered in each WorldMap */
    hexesMastered: Map<WorldMap, number>;
    /** Stores a snapshot of the maps in the digsite currently being upgraded */
    upgradeMapDigSite?: Map<DigSiteMap, {
        oldTier: DigSiteMapTier;
        oldUpgradeActions: number;
    }>;
    constructor(cartography: Cartography);
}
declare class CartographyRenderQueue extends SkillRenderQueue {
    /** Triggers the game to recompute the path to the currently selected hex */
    hexPath: boolean;
    /** Hexes that need their background to be updated */
    hexBackground: Set<Hex>;
    /** Holes in the map that need their background to be updated */
    mapHoles: Set<WorldMapHole>;
    /** Hexes that need their xp progress to be updated */
    hexProgress: Set<Hex>;
    /** Updates all hexes that are in vision range of the player */
    visionRange: boolean;
    hexOverview: boolean;
    hexOverviewSurvey: boolean;
    /** Updates item and currency quantities in the hex overview */
    hexOverviewQuantities: boolean;
    /** Updates the queue markers on the map */
    surveyQueue: boolean;
    /** Updates the position of the player marker on the World Map */
    playerMarker: boolean;
    /** Updates the markers for points of interests on the World Map */
    poiMarkers: Set<PointOfInterest>;
    /** Updates the mastery markers for hexes on the World Map */
    masteryMarkers: Set<Hex>;
    /** Updates the hex mastery button in the skill header */
    masteryButton: boolean;
    /** Updates the survey indicator on the hex currently being surveyed */
    surveyMarker: boolean;
    /** Updates the XP and interval for surveying */
    surveyRates: boolean;
    /** Updates the progress bar for paper making */
    paperMakingProgress: boolean;
    /** Renders updates for the selected paper recipe */
    selectedPaperRecipe: boolean;
    /** Renders quantities for making paper */
    paperMakingQuantities: boolean;
    /** Renders modifier rates for making paper */
    paperMakingRates: boolean;
    /** Updates the progress bar for upgrading a map */
    mapUpgradeProgress: boolean;
    /** Renders quantities for upgrading/creating maps */
    mapUpgradeQuantities: boolean;
    /** Renders modifier rates for upgrading maps */
    mapUpgradeRates: boolean;
    /** Renders the number of upgrade actions of the dig site map */
    mapUpgradeActions: boolean;
    /** Renders the refinements of the dig site map */
    mapRefinements: boolean;
    /** Updates the quantites of map refinement costs */
    mapRefinementQuantities: boolean;
    /** Updates the map creation and refinement menus for the currently selected dig site */
    selectedUpgradeDigSite: boolean;
    /** Updates the map creation and refinement menus for the currently selected map */
    selectedUpgradeMap: boolean;
    /** Updates the create map button spinner and info text */
    createMapSpinner: boolean;
    /** Updates the dig sites that are visible in the DigSiteSelectMenu */
    digSiteSelect: boolean;
    /** Updates the options on the currently open POI discovery modal */
    poiDiscoveryOptions: boolean;
    /** Updates the POI discovery button in the top overlay */
    poiDiscoveryBtn: boolean;
    constructor();
}
declare const enum CartographyActionMode {
    None = 0,
    QueueSurvey = 1,
    AutoSurvey = 2,
    PaperMaking = 3,
    MapUpgrading = 4
}
declare const enum DiscoveryModalState {
    Closed = 0,
    GoTo = 1,
    POI = 2
}
interface PaperMakingRecipeData extends SingleProductRecipeData {
    baseQuantity: number;
    costs: FixedCostsData;
}
declare class PaperMakingRecipe extends SingleProductRecipe {
    baseQuantity: number;
    costs: FixedCosts;
    constructor(namespace: DataNamespace, data: PaperMakingRecipeData, game: Game);
}
declare type CartographyEvents = {
    survey: CartographySurveyEvent;
    madePaper: CartographyPaperMakingEvent;
    upgradeMap: CartographyMapUpgradeEvent;
    mapRefinement: CartographyMapRefinementEvent;
};
declare class Cartography extends Skill<CartographySkillData> implements ActiveAction, StatProvider, IGameEventEmitter<CartographyEvents> {
    _events: import("mitt").Emitter<CartographyEvents>;
    on: {
        <Key extends keyof CartographyEvents>(type: Key, handler: import("mitt").Handler<CartographyEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<CartographyEvents>): void;
    };
    off: {
        <Key extends keyof CartographyEvents>(type: Key, handler?: import("mitt").Handler<CartographyEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<CartographyEvents>): void;
    };
    readonly _media = "assets/media/skills/cartography/cartography.svg";
    renderQueue: CartographyRenderQueue;
    worldMaps: NamespaceRegistry<WorldMap>;
    travelEventRegistry: NamespaceRegistry<RandomTravelEvent>;
    refinementSlotCosts: FixedCosts[];
    /** Stores the recipes used to make paper */
    paperRecipes: NamespaceRegistry<PaperMakingRecipe>;
    /** Modifiers that are available for each refinement slot of dig site maps */
    refinementModifiers: ModifierArray[];
    /** Convenience array of all registered travel events */
    allTravelEvents: RandomTravelEvent[];
    /** Total weight of all registered travel events */
    totalTravelEventWeight: number;
    readonly BASE_TRAVEL_EVENT_CHANCE: number;
    get levelCap(): number;
    isActive: boolean;
    /** True if the skill is active and in a surveying mode */
    get isSurveying(): boolean;
    get activeSkills(): this[];
    /** World Map that is currently active */
    activeMap?: WorldMap;
    get actionMode(): CartographyActionMode;
    /** Current mode of surveying that is active */
    _actionMode: CartographyActionMode;
    /** Queue of hexes in the currently active map to survey */
    surveyQueue: LinkQueue<Hex>;
    isHexFirstInQueue(hex: Hex): boolean;
    isHexInQueue(hex: Hex): boolean;
    /** Returns true if the hex is currently being autosurveyed */
    isAutoSurveyingHex(hex: Hex): boolean;
    /** Hex that is currently being automatically surveyed */
    autoSurveyHex?: Hex;
    /** Returns the hex that is currently being surveyed */
    get currentlySurveyedHex(): Hex | undefined;
    /** Shared timer used for cartography actions */
    actionTimer: Timer;
    /** Base interval that surveying takes in [ms] */
    readonly BASE_SURVEY_INTERVAL = 5000;
    /** Base interval that making paper takes in [ms] */
    readonly BASE_PAPER_MAKING_INTERVAL = 5000;
    /** Base interval that upgrading maps takes in [ms] */
    readonly BASE_MAP_UPGRADE_INTERVAL = 5000;
    /** Base amount of survey XP earned on a hex per survey action */
    static readonly BASE_SURVEY_XP = 1;
    /** Determines the survey XP required per survey level */
    static readonly SURVEY_XP_PER_LEVEL: readonly number[];
    /** The maximum max survey level a hex can have */
    static get MAX_SURVEY_LEVEL(): number;
    /** The interval that a survey action takes in [ms] */
    get surveyInterval(): number;
    /** Checks if player has Carthulu pet */
    get hasCarthuluPet(): boolean;
    /** Travel event that occured the last time the player moved */
    lastTravelEvent?: RandomTravelEvent;
    /** Recipe the player has selected to make paper with */
    selectedPaperRecipe?: PaperMakingRecipe;
    /** Current digsite that the player has selected to upgrade a map in */
    selectedMapUpgradeDigsite?: ArchaeologyDigSite;
    offlineSnapshot?: CartographyOfflineSnapshot;
    /** Returns the current map that is being upgraded. Returns undefined if none is selected */
    get currentUpgradeMap(): DigSiteMap | undefined;
    /** Returns the interval of the action currently being performed in [ms] */
    get currentActionInteral(): number;
    /** Returns the maximum number of maps a dig site can have */
    getMaxDigSiteMaps(digSite: ArchaeologyDigSite): number;
    /** Currently active potion for this skill */
    get activePotion(): PotionItem | undefined;
    activeDiscoveryModifiers: Set<POIDiscoveryModifiers>;
    modifiers: MappedModifiers;
    enemyModifiers: TargetModifiers;
    conditionalModifiers: ConditionalModifier[];
    /** If the map creation modal is open and should recieve rendering updates */
    modalOpen: boolean;
    /** If the poi discovery modal is open */
    discoveryModalState: DiscoveryModalState;
    /** The number of POI discovery modals that have been queued */
    poiModalsQueued: number;
    /** If the go to discovery modal has been queued or is visible */
    goToModalQueued: boolean;
    hiddenPOIRenderHandler: VoidFunction;
    hiddenPOIDiscoveryHandler?: VoidFunction;
    constructor(namespace: DataNamespace, game: Game);
    registerKeyBinds(): void;
    registerData(namespace: DataNamespace, data: CartographySkillData): void;
    postDataRegistration(): void;
    getErrorLog(): string;
    render(): void;
    renderHexPath(): void;
    renderVisionRange(): void;
    renderHexBackgrounds(): void;
    renderMapHoles(): void;
    renderHexProgress(): void;
    renderHexOverview(): void;
    renderHexOverviewQueue(): void;
    renderHexOverviewQuantities(): void;
    renderSurveyQueue(): void;
    renderSurveyMarker(): void;
    renderSurveyRates(): void;
    renderMasteryMarkers(): void;
    renderPlayerMarker(): void;
    renderPOIMarkers(): void;
    renderPaperMakingProgress(): void;
    renderSelectedPaperRecipe(): void;
    renderPaperMakingQuantities(): void;
    renderPaperMakingRates(): void;
    renderMapUpgradeProgress(): void;
    renderMapUpgradeQuantities(): void;
    renderMapUpgradeRates(): void;
    renderMapUpgradeActions(): void;
    renderMapRefinements(): void;
    renderMapRefinementQuantities(): void;
    renderSelectedUpgradeDigSite(): void;
    renderSelectedUpgradeMap(): void;
    renderCreateMapSpinner(): void;
    renderDigSiteSelect(): void;
    renderMasteryButton(): void;
    renderPOIDiscoveryOptions(): void;
    renderPOIDiscoveryBtn(): void;
    /** Queues up hidden pois that are set to show a marker for rendering when requirements change */
    queueHiddenPoiRenders(): void;
    updateHiddenPOIDiscoveryHandler(): void;
    getPercentageIntervalModifier(action: PaperMakingRecipe | ArchaeologyDigSite | undefined): number;
    /** Returns the multiplier for all hex travel costs to apply */
    get travelCostMultiplier(): number;
    /** Last travel cost multiplier computed since modifiers changed */
    _lastTravelCostMultiplier: number;
    /** Gets the costs to travel to a hex */
    getTravelCosts(path: Hex[]): Costs;
    getFastTravelUnlockCosts(fastTravel: POIFastTravel): Costs;
    /** Checks if the hidden requirements for a POI are met */
    isHiddenPOIMet(hidden: POIHidden): boolean;
    /** Callback function for when a hex is tapped */
    onHexTap(hex: Hex): void;
    /** Callback function for deselecting the currently selected hex. */
    deselectHexOnClick(hex: Hex): void;
    /** Callback function for when the travel button is clicked */
    travelOnClick(): void;
    /** Attempts to move the player along the given path */
    movePlayer(path: Hex[], ignoreCosts: boolean): void;
    /** Callback function for when the auto survey button is clicked */
    autoSurveyOnClick(hex: Hex): void;
    /** Callback function for when the survey/queue button is clicked */
    surveyOnClick(hex: Hex): void;
    /** Checks that all hexes in the queue have a surveyed or queue neighbour, and removes them from the queue if not */
    validateSurveyQueue(): void;
    /** Callback function for unlocking fast travel on a poi */
    unlockFastTravelOnClick(poi: PointOfInterest): void;
    /** Callback function for when the Go To ${worldMap} button is clicked*/
    goToWorldMapOnClick(poi: PortalPOI): Promise<void>;
    /** Callback function for returning to the player's current location on the map */
    goToPlayerOnClick(): void;
    /** Callback function for when a map filter setting is changed */
    mapFilterOnChange(filter: MapFilterType, newValue: boolean): void;
    /** Callback function for when a fast travel group visibility is toggled */
    fastTravelGroupOnChange(group: FastTravelGroup, newValue: boolean): void;
    /** Method for when the disableHexGridOutsideVision setting is changed */
    onHexGridSettingChange(): void;
    /** Starts the survey timer at the player's current survey interval */
    startSurveyTimer(): void;
    /** Starts automatically surveying hexes */
    startAutoSurvey(hex: Hex): boolean;
    /** Starts surveying a hex */
    startSurveyQueue(): boolean;
    /** Method for when the actionTimer is completed */
    action(): void;
    /** Rolls for rewards common for skill actions */
    addCommonRewards(rewards: Rewards, actionLevel: number): void;
    /** Computes the base Skill XP gained per survey action of a hex */
    getSkillXPForHexSurveyAction(hex: Hex): number;
    /** Finds the next hex to autosurvey, starting from hex. Returns undefined if no suitable hex is found. */
    getNextAutoSurveyHex(hex: Hex, nextHexes?: Hex[]): Hex | undefined;
    /** Finds the next ${count} hexes to autosurvey, startng from hex. Returns less than count if not enough suitable hexes are found */
    getNextAutoSurveyHexes(hex: Hex, count: number): Hex[];
    /** Processes the auto survey */
    surveyAuto(): void;
    /** Processes the next hex in the survey queue */
    surveyActionQueue(): void;
    /** Performs the survey operation on a single hex */
    surveyHex(hex: Hex): void;
    /** Processes stat, path and poi changes triggers by fully surveying a hex */
    onHexFullSurvey(hex: Hex): void;
    /** Called when a hex becomes mastered. Awards map mastery bonuses that are unlocked */
    onHexMastery(hex: Hex): void;
    /** Called when all hexes on a map become fully surveyed */
    onMapFullSurvey(map: WorldMap): void;
    checkForHexPetUnlock(map: WorldMap): void;
    /** Queues a congratulatory modal for fully surveying a map, and tells the player they unlocked hex mastery */
    queueMapSurveyModal(map: WorldMap): void;
    /** Called when all hexes on a map become mastered */
    onMapFullMastery(map: WorldMap): void;
    /** Queues a congratulatory modal for mastering a map. */
    queueMapMasteryModal(map: WorldMap): void;
    /**
     * Awards a mastery bonus from a map to the player. Does not recompute provided stats.
     * @param map The map that the bonus belongs to
     * @param bonus The bonus to give
     */
    awardMasteryBonus(map: WorldMap, bonus: WorldMapMasteryBonus): void;
    /**
     * Queues a modal for unlocking a new mastery bonus for a map
     * @param map The Map the bonus belongs to
     * @param bonus The bonus unlocked
     */
    queueMasteryBonusModal(map: WorldMap, bonus: WorldMapMasteryBonus): void;
    /** Triggers the discovery process for a Point of Interest, adding modifiers and rewards */
    discoverPOI(poi: PointOfInterest): void;
    /** Processes a watch tower, surveying all the tiles around it */
    processWatchTower(poi: Watchtower): void;
    /** When the survey range changes, due to either modifiers or the player moving handle stopping the action/ adjusting queue */
    onSurveyRangeChange(): void;
    /** Queues up a notification that the player has no ingredients to make paper */
    paperIngredientNotify(): void;
    /** Callback function for selecting a paper recipe */
    selectPaperRecipeOnClick(recipe: PaperMakingRecipe): void;
    /** Callback function for the make/stop paper button */
    makePaperOnClick(): void;
    /** Starts making paper with the interval for the given recipe */
    startMakingPaper(recipe: PaperMakingRecipe): boolean;
    /** Gets the costs for making paper with a given recipe */
    getPaperMakingCosts(recipe: PaperMakingRecipe): Costs;
    /** Gets the interval in [ms] for making paper with a given recipe */
    getPaperMakingInterval(recipe: PaperMakingRecipe): number;
    /** Starts the action timer for making paper with a given recipe */
    startPaperMakingTimer(recipe: PaperMakingRecipe): void;
    /** Performs the action for creating paper */
    paperMakingAction(): void;
    /** Queues up a notification that the player has no ingredients to upgrade maps */
    mapIngredientNotify(): void;
    /** Callback function for when the create map button is clicked */
    createMapOnClick(): void;
    /** Callback function for when a dig site is selected in the map creation menu */
    selectDigSiteOnClick(digSite: ArchaeologyDigSite): void;
    /** Callback function for selecting a digsite map */
    selectDigSiteMapOnClick(mapIndex: number): void;
    /** Callback function for starting/stoping upgrading a map */
    startMapUpgradeOnClick(): void;
    /** Starts upgrading a map with the interval for the given dig site */
    startUpgradingMap(digSite: ArchaeologyDigSite): boolean;
    /** Gets the interval to upgrade a map for a given dig site */
    getMapUpgradeInterval(digSite: ArchaeologyDigSite): number;
    /** Starts the action time for upgrading a map */
    startMapUpgradeTimer(digSite: ArchaeologyDigSite): void;
    /** Gets the costs to perform an upgrade action for a map */
    getMapUpgradeCosts(map: DigSiteMap): Costs;
    getMapUpgradeBaseXP(map: DigSiteMap): number;
    /** Performs the action for upgrading a map */
    mapUpgradeAction(): void;
    /** Gets the costs to create a map for a dig site */
    getMapCreationCosts(digSite: ArchaeologyDigSite): Costs;
    /**
     * Create a new blank Map for specified dig site. Maximum of 3 maps per dig site.
     * @param digSite The Dig Site to create the map for.
     */
    createNewMapForDigSite(digSite: ArchaeologyDigSite): void;
    /** Uses a charge/action on the currently selected map for a dig site */
    useDigSiteMapCharges(digSite: ArchaeologyDigSite, charges?: number): void;
    /** Destroys the dig site map at the specified index */
    destroyDigSiteMap(digSite: ArchaeologyDigSite, index: number): void;
    /** Callback function when selecting a refinement to add to a map */
    selectRefinementOnClick(map: DigSiteMap, selectIndex: number): void;
    /** Gets the cost for adding the next refinement slot to a dig site map. */
    getNextRefinementSlotCost(map: DigSiteMap): Costs;
    surveyWholeMap(): void;
    unsurveyWholeMap(): void;
    /** Selected a random travel event based on the path the player travels. Returns true if provided stats should be recomputed */
    rollForTravelEvent(path: Hex[]): void;
    /** Gets a random travel event that the player meets the requirements to do */
    selectTravelEvent(): RandomTravelEvent;
    /** Processes a travel event, removing items, providing modifiers etc. */
    processTravelEvent(event: RandomTravelEvent): void;
    createItemCurrencyNodes(costs: ItemCurrencyLike): HTMLSpanElement[];
    /** Queues up a modal to display when a random event fires */
    queueTravelEventModal(event: RandomTravelEvent): void;
    /** Queues up a modal to display when a point of interest is discovered */
    queuePOIDiscoveryModal(poi: PointOfInterest): void;
    /** Fires a go to discovery modal that allows the player to quickly travel and discover a POI */
    queueGoToDiscoveryModal(fromSurvey: boolean): void;
    createTravelCosts(modalBody: HTMLDivElement): void;
    /** Updates the options on the currently open POI discovery modal */
    updateDiscoveryModal(): void;
    /** Callback function for when the confirm button of the POI discovery modal is clicked */
    onPOIDiscoveryConfirm(): boolean | undefined;
    /** Fires an individual point of interest discovery modal for a poi that has already been seen before */
    firePOIDiscoveryModal(poi: PointOfInterest): void;
    getPoiDiscoveryNode(poi: PointOfInterest): {
        modalBody: HTMLDivElement;
        title: string;
    };
    /** Fires off a modal that shows the hex mastery bonuses for a map */
    fireMapMasteryModal(): void;
    stop(): boolean;
    activeTick(): void;
    /** Called on save file load */
    onLoad(): void;
    onModalOpen(): void;
    onPageChange(): void;
    onPageVisible(): Promise<void>;
    onPageLeave(): void;
    queueModalModifierChange(): void;
    queueModalQuantityChange(): void;
    renderModifierChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    queueCurrencyQuantityRender(currency: Currency): void;
    onModifierChangeWhileActive(): void;
    createOfflineSnapshot(): void;
    getOfflineMessages(): string[];
    /** Called when the player changes equipments */
    onEquipmentChange(): void;
    addPoiModifiers(poi: PointOfInterest): void;
    computeProvidedStats(updatePlayer?: boolean): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    resetActionState(): void;
    /** Utility function for exporting the survey levels for each cartography level */
    exportActiveMapLevels(): void;
    getObtainableItems(): Set<AnyItem>;
}
interface RandomTravelEventData extends IDData {
    /** Weight of event occuring relative to other events */
    weight: number;
    /** English description to display to the player of event */
    description: string;
    /** Optional rewards to give to the player if the event is rolled */
    rewards?: FixedCostsData;
    /** Items that the player must have in the bank for the event to trigger. Items are consumed when the event triggers. */
    itemsRequired?: IDQuantity[];
    /** Temporary modifiers given to the player when the event triggers. Modifiers are removed when the player moves to a new hex. */
    tempBonuses?: PlayerModifierData;
}
declare class RandomTravelEvent extends NamespacedObject {
    /** Localized description of the event */
    get description(): string;
    /** Weight of the event occuring relative to other events */
    weight: number;
    /** Unlocalized description of the event */
    _description: string;
    /** Rewards to give to the player when the event triggers */
    rewards?: FixedCosts;
    /** Items required for the event to trigger, that are consumed when it triggers */
    itemsRequired?: AnyItemQuantity[];
    /** Tempoary modifiers given to the player until they travel to a new hex */
    tempBonuses?: PlayerModifierObject;
    constructor(namespace: DataNamespace, data: RandomTravelEventData, game: Game);
}
/** Stores the Artefact values for a map */
declare type ArtefactValues = ArtefactObject<number>;
interface DigSiteMapTier {
    /** Index of tier in data array */
    readonly index: number;
    /** Localized display name of the map tier */
    name: string;
    /** Total actions required to reach this tier */
    upgradeActions: number;
    /** Number of refinement slots a map of this tier gains */
    refinementSlots: number;
}
/** Stores the data for a map created for a digsite */
declare class DigSiteMap implements EncodableObject {
    digSite: ArchaeologyDigSite;
    game: Game;
    cartography: Cartography;
    /** Number of actions the player has performed to upgrade this map */
    _upgradeActions: number;
    /** Number of archaeology actions, or player attacks in a slayer area remaining */
    charges: number;
    /** Artefact values for the map. Determines chances to get items from archaeology */
    artefactValues: ArtefactValues;
    /** Refinements (modifiers) that the map has */
    refinements: ModifierArray;
    /** Current tier that the map has reached */
    tier: DigSiteMapTier;
    /** If this map has reached the maximum tier */
    get atMaxTier(): boolean;
    /** Gets the current number of actions the map has upgraded to */
    get upgradeActions(): number;
    /** Gets the total number of actions required to upgrade the map to the next tier */
    get nextTierActions(): number;
    /** The Archaeology level of the map */
    get level(): number;
    constructor(digSite: ArchaeologyDigSite, game: Game, cartography: Cartography);
    /** Adds an upgrade action to the map. Returns true if the map has reached the next tier. */
    addUpgradeAction(): boolean;
    /** Performs an upgrade on this map. Adds new charges, and improves artefact values */
    upgradeTier(newTier: DigSiteMapTier): void;
    upgradeArtefactValue(oldValue: number): number;
    /** Rolls a random amount of charges to give on a tier upgrade */
    getUpgradeCharges(): number;
    /** Modifies the initial values of the artefact values for a map */
    modifyInitialArtefactValue(value: number): number;
    /** Rolls a random amount of Artefact value to give on a tier upgrade */
    getUpgradeArtefactValue(): number;
    /** Recomputes the tier of this map */
    computeTier(): void;
    getChanceForArtefact(type: ArtefactType): number;
    consumeCharges(actions?: number): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Creates a new map with average statistics for the given tier. Does not include modifiers */
    static createAverageMap(digSite: ArchaeologyDigSite, game: Game, cartography: Cartography, tier: DigSiteMapTier): DigSiteMap;
    /** Data for each of the tiers of map */
    static tiers: DigSiteMapTier[];
    /** Configures the number of charges given when a maps tier is upgraded */
    static CHARGES_PER_TIER: {
        min: number;
        max: number;
    };
    /** Configures the decrease in artefact value when a maps tier is upgraded */
    static ARTEFACT_VALUE_PER_TIER: {
        min: number;
        max: number;
    };
    static BASE_ARTEFACT_VALUES: ArtefactValues;
    /** Number of refinements that are selected from when adding a new one */
    static REFINEMENT_SELECTION_COUNT: number;
}
declare function generatePaperMakingRecipes(namespace: Namespaces): void;
