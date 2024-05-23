declare class HarvestingRenderQueue extends GatheringSkillRenderQueue<HarvestingVein> {
    veinIntensity: Set<HarvestingVein>;
    veinStatus: Set<HarvestingVein>;
    veinItemDrops: Set<HarvestingVein>;
    veinRates: boolean;
    veinUnlock: boolean;
    veinVisibility: boolean;
}
interface HarvestingProductData {
    itemID: string;
    minIntensityPercent: number;
    weight: number;
}
interface HarvestingProduct {
    item: AnyItem;
    minIntensityPercent: number;
    weight: number;
}
declare const veinMenus: Map<HarvestingVein, HarvestingVeinElement>;
declare function loadHarvestingVeins(): void;
declare function localizeHarvesting(): void;
interface HarvestingVeinData extends BasicSkillRecipeData {
    name: string;
    media: string;
    baseQuantity: number;
    shopItemPurchased?: string;
    products: HarvestingProductData[];
    uniqueProduct: IDQuantity;
}
declare class HarvestingVein extends BasicSkillRecipe {
    get media(): string;
    get name(): string;
    baseQuantity: number;
    shopItemPurchased?: ShopPurchase;
    _name: string;
    _media: string;
    currentIntensity: number;
    maxIntensity: number;
    get intensityPercent(): number;
    products: HarvestingProduct[];
    totalProductWeight: number;
    uniqueProduct: AnyItemQuantity;
    constructor(namespace: DataNamespace, data: HarvestingVeinData, game: Game);
}
declare const enum ImpDevilResult {
    DO_NOTHING = 0,
    GAIN_NOTHING = 1,
    TRIPLE_ITEMS = 2,
    ABYSSAL_PIECES = 3
}
interface HarvestingSkillData extends MasterySkillData {
    veinData?: HarvestingVeinData[];
}
interface HarvestingModificationData extends MasterySkillModificationData {
}
declare type HarvestingEvents = {
    action: HarvestingActionEvent;
} & SkillWithMasteryEvents;
declare class Harvesting extends GatheringSkill<HarvestingVein, HarvestingSkillData, HarvestingEvents, HarvestingModificationData> implements PassiveAction {
    readonly _media = "assets/media/skills/harvesting/harvesting.png";
    isMasteryActionUnlocked(action: HarvestingVein): boolean;
    hasRealmSelection: boolean;
    renderQueue: HarvestingRenderQueue;
    readonly baseInterval = 3000;
    readonly baseVeinIntensity = 28800;
    readonly passiveRegenInterval = 20000;
    readonly uniqueProductChance = 0.1;
    readonly hpCheckpoints: number[];
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): HarvestingVein;
    get masteryModifiedInterval(): number;
    get maxLevelCap(): number;
    activeProgressVein?: HarvestingVein;
    selectedVein?: HarvestingVein;
    veinDecayTimer: Timer;
    get activeVein(): HarvestingVein;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: HarvestingSkillData): void;
    modifyData(data: HarvestingModificationData): void;
    postDataRegistration(): void;
    canHarvestVein(vein: HarvestingVein): boolean;
    passiveTick(): void;
    getErrorLog(): string;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    onRealmChange(): void;
    render(): void;
    renderVeinRates(): void;
    renderVeinIntensity(): void;
    renderVeinStatus(): void;
    renderVeinItemDrops(): void;
    renderProgressBar(): void;
    stopActiveProgressBar(): void;
    renderVeinVisibility(): void;
    renderVeinUnlock(): void;
    /** Callback function for when an ore is clicked */
    onVeinClick(vein: HarvestingVein): void;
    onStop(): void;
    onLoad(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    reduceVeinIntensity(): void;
    getVeinMaxIntensity(vein: HarvestingVein): number;
    updateVeinMaxIntensity(vein: HarvestingVein): void;
    updateAllVeinMaxIntensity(): void;
    /** Initializes the HP of rocks that were newly added. */
    initializeVeins(): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    getVeinBaseRewardQuantity(vein: HarvestingVein): number;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    static IMP_DEVIL_TABLE: WeightedResult<ImpDevilResult>[];
}
