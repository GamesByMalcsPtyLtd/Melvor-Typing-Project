interface ArtefactObject<T> {
    tiny: T;
    small: T;
    medium: T;
    large: T;
}
declare type DigSiteArtefactData = ArtefactObject<DropTableData[]>;
interface ArtefactIDQuantity extends IDQuantity {
    rarity: number;
}
interface AnyItemQuantityArtefact extends AnyItemQuantity {
    rarity: number;
}
interface ArchaeologyToolData extends IDData {
    name: string;
    description: string;
    media: string;
    artefactType: ArtefactType;
    upgradeChainID: string;
}
declare enum ArtefactType {
    TINY = "tiny",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
declare enum ArtefactWeightRange {
    NOTHING = 696969,
    COMMON = 1500,
    UNCOMMON = 500,
    RARE = 18,
    VERYRARE = 4,
    LEGENDARY = 1
}
declare class ArchaeologyTool extends NamespacedObject {
    game: Game;
    get name(): string;
    get description(): string;
    get media(): string;
    get level(): number;
    _name: string;
    _description: string;
    _media: string;
    artefactType: ArtefactType;
    upgradeChain: ShopUpgradeChain;
    constructor(namespace: DataNamespace, data: ArchaeologyToolData, game: Game);
}
interface ArchaeologyDigSiteData extends BasicSkillRecipeData {
    name: string;
    description: string;
    media: string;
    artefacts: DigSiteArtefactData;
    mapCreationCost: FixedCostsData;
    mapUpgradeCost: FixedCostsData[];
    containsDigSiteRequirement: boolean;
}
declare class ArchaeologyDigSite extends BasicSkillRecipe implements EncodableObject {
    game: Game;
    archaeology: Archaeology;
    get name(): string;
    get media(): string;
    artefacts: ArtefactObject<DropTable>;
    /** Cost to create a new map in cartography */
    mapCreationCost: FixedCosts;
    /** Cost to perform a single map upgrade action in cartography, per tier */
    mapUpgradeCost: FixedCosts[];
    _name: string;
    _description: string;
    _media: string;
    containsDigSiteRequirement: boolean;
    poi?: DigSitePOI;
    /** If this dig site has a combat area associated with it */
    hasCombatArea: boolean;
    /** Returns true if the poi associated with this dig site has been discovered */
    get isDiscovered(): boolean;
    /** Returns true if the poi associated with this dig site is hidden */
    get isHidden(): boolean;
    /** Returns the Cartography level required for the POI associated with this dig site */
    get poiCartographyLevel(): number;
    maps: DigSiteMap[];
    /** Index of map that is currently selected. -1 if none. */
    selectedMapIndex: number;
    /** Currently selected DigSiteMap. Undefined if none is selected. */
    get selectedMap(): DigSiteMap | undefined;
    selectedTools: ArchaeologyTool[];
    /** Index of map that is currently selected for upgrading. -1 if none. */
    selectedUpgradeIndex: number;
    /** Currently selected DigSiteMap for upgrading. Undefined if none is selected */
    get selectedUpgradeMap(): DigSiteMap | undefined;
    constructor(namespace: DataNamespace, data: ArchaeologyDigSiteData, game: Game, archaeology: Archaeology);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    getActiveDropTable(type: ArtefactType): DropTable;
}
declare class DummyArchaeologyDigSite extends ArchaeologyDigSite {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class ArchaeologyRenderQueue extends GatheringSkillRenderQueue<ArchaeologyDigSite> {
    /** Update selected Digsite */
    digSites: Set<ArchaeologyDigSite>;
    /** Update selected Digsite Map Charges */
    selectedMapCharges: Set<ArchaeologyDigSite>;
    /** Update selected Digsite Map details */
    selectedMap: Set<ArchaeologyDigSite>;
    /** Update Digsite Map selection */
    mapSelection: Set<ArchaeologyDigSite>;
    /** Updates the visibility of dig sites */
    digSiteVisibility: boolean;
    /** Updates Museum artefacts completion */
    museumArtefacts: Set<AnyItem>;
    /** Updates Museum artefacts completion */
    toolSelection: Set<ArchaeologyTool>;
    /** Updates Grants Rates for Dig Sites */
    digSiteRates: boolean;
}
interface ArchaeologySkillData extends MasterySkillData {
    /** Defines new ArchaeologyDigSites for the skill */
    digSites: ArchaeologyDigSiteData[];
    /** Defines new Archaeology Tools for the skill */
    tools: ArchaeologyToolData[];
    museumRewards: ArchaeologyMuseumRewardData[];
}
interface ArchaeologyMuseumRewardData extends IDData {
    /** The number of items that must be donated to the museum to receive the reward */
    museumCount: number;
    /** Optional. Permanent modifiers granted to the player when reaching this reward */
    modifiers?: PlayerModifierData;
    /** Optional. The IDs of pets that are unlocked when reaching this reward */
    pets?: string[];
    /** Optional. GP to give to the player when reaching this reward */
    gp?: number;
    /** Optional. Slayer Coins to give to the player when reaching this reward */
    sc?: number;
    /** Optional. Items to give to the player when reaching this reward */
    items?: IDQuantity[];
}
declare class ArchaeologyMuseumReward extends NamespacedObject {
    /** Save State property. Determines if this reward has been awarded to the player. */
    awarded: boolean;
    /** The number of items that must be donated to the museum to receive the reward */
    museumCount: number;
    /** Modifiers given to the player when this reward is active */
    modifiers?: PlayerModifierObject;
    /** Pets unlocked when this reward is unlocked */
    pets?: Pet[];
    gp?: number;
    sc?: number;
    items?: AnyItemQuantity[];
    constructor(namepsace: DataNamespace, data: ArchaeologyMuseumRewardData, game: Game);
}
declare type ArchaeologyEvents = {
    action: ArchaeologyActionEvent;
};
interface ArtefactTypeLocation {
    size: ArtefactType;
    digSite: ArchaeologyDigSite;
}
declare class Archaeology extends GatheringSkill<ArchaeologyDigSite, ArchaeologySkillData> implements StatProvider, IGameEventEmitter<ArchaeologyEvents> {
    _events: import("mitt").Emitter<ArchaeologyEvents>;
    on: {
        <Key extends "action">(type: Key, handler: import("mitt").Handler<ArchaeologyEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<ArchaeologyEvents>): void;
    };
    off: {
        <Key extends "action">(type: Key, handler?: import("mitt").Handler<ArchaeologyEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<ArchaeologyEvents>): void;
    };
    readonly _media = "assets/media/skills/archaeology/archaeology.svg";
    museum: ArchaeologyMuseum;
    get levelCap(): 99 | 120;
    getTotalUnlockedMasteryActions(): number;
    readonly baseInterval = 5000;
    getMaxDigSiteMaps(digSite: ArchaeologyDigSite): number;
    lastRarityLocated: ArtefactWeightRange;
    tools: NamespaceRegistry<ArchaeologyTool>;
    currentDigSite?: ArchaeologyDigSite;
    renderQueue: ArchaeologyRenderQueue;
    lastActiveDigSiteProgressBar?: ArchaeologyDigSite;
    digSiteContainer: Map<ArchaeologyDigSite, ArchaeologyDigSiteContainerElement>;
    artefactTypeTools: Map<ArtefactType, ArchaeologyTool>;
    museumRewards: NamespaceRegistry<ArchaeologyMuseumReward>;
    artefactLocationCache: Map<AnyItem, ArtefactTypeLocation>;
    /** Chance for bone drops when finding no artefacts (%) */
    chanceForBones: number;
    /** Array of mastery bonuses this map gives. Sorted in order of lowest number of mastered hexes to highest number. */
    sortedMuseumRewards: ArchaeologyMuseumReward[];
    /** Total number of museum rewards that have been unlocked */
    unlockedMuseumRewards: number;
    itemsDonatedToMuseum: Set<AnyItem>;
    hiddenDigSites: Set<ArchaeologyDigSite>;
    get masteryAction(): ArchaeologyDigSite;
    get actionLevel(): number;
    get defaultTool(): ArchaeologyTool;
    getBaseSkillXPForDigSite(digSite: ArchaeologyDigSite): number;
    getArtefactSkillXPForDigSite(digSite: ArchaeologyDigSite): number;
    modifiers: MappedModifiers;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: ArchaeologySkillData): void;
    postDataRegistration(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    render(): void;
    renderMuseumArtefacts(): void;
    renderProgressBar(): void;
    renderMapCharges(): void;
    renderSelectedMap(): void;
    renderDigSiteVisibility(): void;
    renderDigSites(): void;
    renderMapSelection(): void;
    renderDigSiteRates(): void;
    toggleDigSiteVisibility(digSite: ArchaeologyDigSite): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    resetActionState(): void;
    onLoad(): void;
    postLoad(): void;
    onModifierChange(): void;
    onAncientRelicUnlock(): void;
    computeProvidedStats(updatePlayer?: boolean): void;
    canExcavate(digSite: ArchaeologyDigSite | undefined): boolean;
    /** Flag used to determine if provided stats should update when stopped. Prevents duplicate stat recalculation */
    updateModifiersOnStop: boolean;
    /** Callback function for when the Excavate button is clicked */
    startDigging(digSite: ArchaeologyDigSite): void;
    start(): boolean;
    onStop(): void;
    /** Returns the interval an npc in ms */
    getDigSiteInterval(digSite: ArchaeologyDigSite): number;
    get actionRewards(): Rewards;
    getXPModifier(masteryAction?: ArchaeologyDigSite): number;
    getDoublingChance(action: ArchaeologyDigSite): number;
    getMasteryXPModifier(action: ArchaeologyDigSite): number;
    getArtefactValue(type: ArtefactType, digsite: ArchaeologyDigSite, map: DigSiteMap): number;
    get actionInterval(): number;
    get masteryModifiedInterval(): number;
    action(): void;
    preAction(): void;
    postAction(): void;
    getArtifactType(digSite: ArchaeologyDigSite): ArtefactType;
    getChanceToPreserveMapCharge(digSite: ArchaeologyDigSite): number;
    consumeMapCharge(): void;
    onEquipmentChange(): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    deselectMap(digSite: ArchaeologyDigSite): void;
    /** Callback function for when a dig site map is selected */
    setMapAsActive(digSite: ArchaeologyDigSite, index: number): void;
    toggleTool(digSite: ArchaeologyDigSite, tool: ArchaeologyTool): void;
    setToolAsActive(digSite: ArchaeologyDigSite, tool: ArchaeologyTool): void;
    setToolAsInactive(digSite: ArchaeologyDigSite, tool: ArchaeologyTool): void;
    setAllDigSites(): void;
    showArtefactsForDigSite(digSite: ArchaeologyDigSite): void;
    updateItem(item: AnyItem): void;
    itemAlreadyDonatedToMuseum(item: AnyItem): boolean;
    itemsUntilNextMuseumReward(): number;
    donateItemToMuseum(item: AnyItem): void;
    /**
     * Awards a museum reward to the player. Does not recompute provided stats.
     * @param bonus The bonus to give
     */
    awardMuseumReward(reward: ArchaeologyMuseumReward): void;
    /**
     * Queues a modal for unlocking a new museum bonus
     * @param bonus The bonus unlocked
     */
    queueMuseumRewardModal(reward: ArchaeologyMuseumReward): void;
    createItemCurrencyNodes(costs: ItemCurrencyLike): HTMLSpanElement[];
    cacheArtefactTypeAndLocation(item: AnyItem, digSite: ArchaeologyDigSite, type: ArtefactType): void;
    getArtefactTypeAndLocation(item: AnyItem): ArtefactTypeLocation;
    getArtefactTypeAndLocationFromCache(item: AnyItem): ArtefactTypeLocation;
    cleanupDonatedMuseumArtefacts(): void;
    getObtainableItems(): Set<AnyItem>;
}
declare const enum ArchaeologyPage {
    DigSites = 0,
    Museum = 1
}
declare class ArchaeologyUI {
    archaeology: Archaeology;
    currentPage: ArchaeologyPage;
    defaultElements: {
        containers: {
            digSites: HTMLDivElement;
            museum: HTMLDivElement;
        };
        menu: {
            digSites: HTMLLinkElement;
            museum: HTMLLinkElement;
        };
        museum: {
            artefactsDonated: HTMLLIElement;
            nextReward: HTMLLIElement;
            content: HTMLDivElement;
        };
    };
    constructor(archaeology: Archaeology);
    loadArchaeologyUI(): void;
    getPageButton(page: ArchaeologyPage): HTMLLinkElement;
    updatePageHighlight(oldPage: ArchaeologyPage, newPage: ArchaeologyPage): void;
    showPage(pageID: ArchaeologyPage): void;
    createMenuEvents(): void;
    loadMuseum(): void;
}
declare class ArchaeologyMuseum {
    artefacts: Map<AnyItem, ArchaeologyMuseumItemElement>;
    constructor();
    loadMuseumArtefacts(archaeology: Archaeology, game: Game): void;
    createMuseumItem(item: AnyItem, el: HTMLDivElement): void;
    updateMuseumProgress(): void;
    updateMuseumItem(item: AnyItem, game: Game): void;
}
