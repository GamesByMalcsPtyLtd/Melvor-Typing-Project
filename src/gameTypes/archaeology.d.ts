/// <reference types="sweetalert2" />
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
    getMaxMaps(): number;
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
interface ArchaeologyModificationData extends MasterySkillModificationData {
}
interface ArchaeologyMuseumRewardData extends IDData, IStatObjectData {
    /** The number of items that must be donated to the museum to receive the reward */
    museumCount: number;
    /** Optional. The IDs of pets that are unlocked when reaching this reward */
    pets?: string[];
    /**
     *  @deprecated use currencies prop instead
     *  Optional. GP to give to the player when reaching this reward */
    gp?: number;
    /**
     * @deprecated use currencies prop instead
     * Optional. Slayer Coins to give to the player when reaching this reward */
    sc?: number;
    /** Optional. Currencies to give to the player when reaching this reward */
    currencies?: IDQuantity[];
    /** Optional. Items to give to the player when reaching this reward */
    items?: IDQuantity[];
}
declare class ArchaeologyMuseumReward extends NamespacedObject {
    /** Save State property. Determines if this reward has been awarded to the player. */
    awarded: boolean;
    /** The number of items that must be donated to the museum to receive the reward */
    museumCount: number;
    stats: StatObject;
    /** Pets unlocked when this reward is unlocked */
    pets?: Pet[];
    currencies?: CurrencyQuantity[];
    items?: AnyItemQuantity[];
    constructor(namepsace: DataNamespace, data: ArchaeologyMuseumRewardData, game: Game);
}
declare class ArchaeologyItemDonatedEvent extends GameEvent {
    oldCount: number;
    newCount: number;
    constructor(oldCount: number, newCount: number);
}
declare type ArchaeologyEvents = {
    action: ArchaeologyActionEvent;
} & SkillWithMasteryEvents;
interface ArtefactTypeLocation {
    size: ArtefactType;
    digSite: ArchaeologyDigSite;
}
declare class Archaeology extends GatheringSkill<ArchaeologyDigSite, ArchaeologySkillData, ArchaeologyEvents, ArchaeologyModificationData> {
    readonly _media = Assets.Archaeology;
    museum: ArchaeologyMuseum;
    get maxLevelCap(): 99 | 120;
    isMasteryActionUnlocked(action: ArchaeologyDigSite): boolean;
    readonly baseInterval = 4000;
    lastRarityLocated: ArtefactWeightRange;
    tools: NamespaceRegistry<ArchaeologyTool>;
    currentDigSite?: ArchaeologyDigSite;
    renderQueue: ArchaeologyRenderQueue;
    lastActiveDigSiteProgressBar?: ArchaeologyDigSite;
    artefactTypeTools: Map<ArtefactType, ArchaeologyTool>;
    artefactLocationCache: Map<AnyItem, ArtefactTypeLocation>;
    /** Chance for bone drops when finding no artefacts (%) */
    chanceForBones: number;
    hiddenDigSites: Set<ArchaeologyDigSite>;
    get masteryAction(): ArchaeologyDigSite;
    get actionLevel(): number;
    get defaultTool(): ArchaeologyTool;
    getBaseSkillXPForDigSite(digSite: ArchaeologyDigSite): number;
    getArtefactSkillXPForDigSite(digSite: ArchaeologyDigSite): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: ArchaeologySkillData): void;
    modifyData(data: ArchaeologyModificationData): void;
    postDataRegistration(): void;
    onAnyLevelUp(): void;
    render(): void;
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
    onPageChange(): void;
    /** Queues renders when the museum becomes visible */
    onMuseumVisible(): void;
    queueBankQuantityRender(item: AnyItem): void;
    onModifierChange(): void;
    onAncientRelicUnlock(): void;
    museumRewardSource: ModifierSource;
    addProvidedStats(): void;
    canExcavate(digSite: ArchaeologyDigSite | undefined): boolean;
    /** Flag used to determine if provided stats should update when stopped. Prevents duplicate stat recalculation */
    updateModifiersOnStop: boolean;
    /** Callback function for when the Excavate button is clicked */
    startDigging(digSite: ArchaeologyDigSite): void;
    start(): boolean;
    onStop(): void;
    /** Returns the interval an npc in ms */
    getDigSiteInterval(digSite: ArchaeologyDigSite): number;
    applyPrimaryProductMultipliers(item: Item, quantity: number, action: NamedObject, query: ModifierQuery): number;
    get actionRewards(): Rewards;
    getXPModifier(masteryAction?: ArchaeologyDigSite): number;
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
    onActiveMapChange(digSite: ArchaeologyDigSite): void;
    toggleTool(digSite: ArchaeologyDigSite, tool: ArchaeologyTool): void;
    setToolAsActive(digSite: ArchaeologyDigSite, tool: ArchaeologyTool): void;
    setToolAsInactive(digSite: ArchaeologyDigSite, tool: ArchaeologyTool): void;
    setAllDigSites(): void;
    showArtefactsForDigSite(digSite: ArchaeologyDigSite): void;
    cacheArtefactTypeAndLocation(item: AnyItem, digSite: ArchaeologyDigSite, type: ArtefactType): void;
    getArtefactTypeAndLocation(item: AnyItem): ArtefactTypeLocation;
    getArtefactTypeAndLocationFromCache(item: AnyItem): ArtefactTypeLocation;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
}
declare const enum ArchaeologyPage {
    DigSites = 0,
    Museum = 1
}
declare class ArchaeologyUI {
    archaeology: Archaeology;
    /** If the museum is currently visible */
    get isMuseumVisible(): boolean;
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
        museum: ArchaeologyMuseumElement;
    };
    constructor(archaeology: Archaeology);
    loadArchaeologyUI(): void;
    getPageButton(page: ArchaeologyPage): HTMLLinkElement;
    updatePageHighlight(oldPage: ArchaeologyPage, newPage: ArchaeologyPage): void;
    showPage(pageID: ArchaeologyPage): void;
}
declare class ArchaeologyMuseumRenderQueue {
    /** Updates the progress towards rewards */
    donationProgress: boolean;
    /** Updates the information for generic donations */
    genericDonationInfo: boolean;
    /** Updates the amount of museum tokens in the bank */
    museumTokenCount: boolean;
    /** Updates all artefacts */
    allArtefacts: boolean;
    /** Updates Museum artefacts completion */
    artefacts: Set<AnyItem>;
}
declare type ArchaeologyMuseumEvents = {
    itemDonated: ArchaeologyItemDonatedEvent;
};
declare class ArchaeologyMuseum extends GameEventEmitter<ArchaeologyMuseumEvents> implements EncodableObject {
    game: Game;
    archaeology: Archaeology;
    get tokenItem(): AnyItem;
    _tokenItem: AnyItem;
    genericArtefacts: AnyItem[];
    rewards: NamespaceRegistry<ArchaeologyMuseumReward>;
    /** The rewards for donating items to the museum, sorted by lowest to highest number of items required */
    sortedRewards: ArchaeologyMuseumReward[];
    /** Save state property. The artefact items which have been donated to the museum */
    donatedItems: Set<AnyItem>;
    readonly renderQueue: ArchaeologyMuseumRenderQueue;
    /** Gets the total number of different items that have been donated to the museum */
    get donationCount(): number;
    constructor(game: Game, archaeology: Archaeology);
    registerRewards(namespace: DataNamespace, data: ArchaeologyMuseumRewardData[]): void;
    postDataRegistration(): void;
    onLoad(): void;
    render(): void;
    renderDonationProgress(): void;
    renderGenericDonation(): void;
    renderMuseumTokeCount(): void;
    renderAllArtefacts(): void;
    renderArtefacts(): void;
    /** Removes non-artefact items from the donatedItems set */
    cleanupDonatedMuseumArtefacts(): void;
    /** Checks if the given item has been donated to the museum */
    isItemDonated(item: AnyItem): boolean;
    /** Gets the number of artefacts that must be donated until the next reward is unlocked */
    getItemsUntilNextReward(): number;
    /** Callback function for when an individual item is selected to be donated */
    donateItem(item: AnyItem): void;
    /** Awards any unawarded rewards to the player */
    giveUnawardedRewards(): void;
    /**
     * Awards a museum reward to the player. Does not recompute provided stats.
     * @param bonus The bonus to give
     */
    giveReward(reward: ArchaeologyMuseumReward): void;
    /**
     * Queues a modal for unlocking a new museum bonus
     * @param bonus The bonus unlocked
     */
    queueRewardModal(reward: ArchaeologyMuseumReward): void;
    createItemCurrencyNodes(costs: ItemCurrencyLike): HTMLSpanElement[];
    /**
     * Iterates over each generic artefact in the bank that will be donated
     * @param callbackfn
     */
    forEachGenericArtefactInBank(callbackfn: (item: AnyItem, donateQuantity: number) => void): void;
    /**
     * Gets information about the "Donate Generic Artefacts" action
     * @returns The number of Museum Tokens gained, The total currency value of all donated items, and the total count of items donated
     */
    getDonateGenericInfo(): {
        tokenGain: number;
        currencyValue: SparseNumericMap<Currency>;
        itemCount: number;
    };
    /** Callback function for when the "Donate Generic Artefacts" button is pressed */
    onDonateGenericClick(): Promise<void>;
    fireConfirmDonateGenericModal(): Promise<import("sweetalert2").SweetAlertResult<any> | undefined>;
    /** Executes the donation of all generic artefacts in the bank */
    donateAllGenericArtefacts(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
