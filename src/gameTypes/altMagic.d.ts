declare type AltMagicConsumption = 'AnyItem' | 'JunkItem' | 'BarIngredientsWithCoal' | 'BarIngredientsWithoutCoal' | 'None' | 'AnySuperiorGem' | 'AnyNormalFood';
declare type AltMagicProduction = 'GP' | 'Bar' | 'RandomGem' | 'RandomSuperiorGem' | 'PerfectFood' | 'RandomShards' | 'MagicXP';
/** Determines which items are consumed by an alt. magic spell */
declare enum AltMagicConsumptionID {
    AnyItem = -1,
    JunkItem = -2,
    BarIngredientsWithCoal = -3,
    BarIngredientsWithoutCoal = -4,
    None = -5,
    AnySuperiorGem = -6,
    AnyNormalFood = -7
}
declare enum AltMagicProductionID {
    GP = -1,
    Bar = -2,
    RandomGem = -3,
    RandomSuperiorGem = -4,
    PerfectFood = -5,
    RandomShards = -6,
    MagicXP = -7
}
interface AltMagicSpecialCostData {
    type: AltMagicConsumption;
    /** Optional. If present, only items that sell for this currency can be consumed */
    currency?: string;
    quantity: number;
}
interface AltMagicSpecialCost {
    type: AltMagicConsumptionID;
    currency?: Currency;
    quantity: number;
}
interface AltMagicSpellData extends BaseSpellData, RealmedObjectData {
    description: string;
    baseExperience: number;
    fixedItemCosts?: IDQuantity[];
    specialCost: AltMagicSpecialCostData;
    produces: AltMagicProduction | string;
    productionRatio: number;
    baseAbyssalExperience?: number;
}
interface AltMagicSpellModificationData extends BaseSpellModificationData {
    baseExperience?: number;
    fixedItemCosts?: ItemQuantitiesModificationData;
    specialCost?: Partial<AltMagicSpecialCostData>;
    produces?: AltMagicProduction | string;
    productionRatio?: number;
    baseAbyssalExperience?: number;
}
declare class AltMagicSpell extends BaseSpell {
    realm: Realm;
    get name(): string;
    get description(): string;
    baseExperience: number;
    /** Item costs which are consumed per cast */
    fixedItemCosts: AnyItemQuantity[];
    /** Special costs that the spell may have */
    specialCost: AltMagicSpecialCost;
    produces: AltMagicProductionID | AnyItem;
    productionRatio: number;
    baseAbyssalExperience: number;
    _description: string;
    constructor(namespace: DataNamespace, data: AltMagicSpellData, game: Game);
    applyDataModification(data: AltMagicSpellModificationData, game: Game): void;
    getSpecialCost(data: AltMagicSpecialCostData, game: Game): AltMagicSpecialCost;
    getProduces(produces: AltMagicProduction | string): AltMagicProductionID | AnyItem;
}
interface MagicSkillData extends MasterySkillData {
    spellCategories?: SkillSubcategoryData[];
    altSpells?: AltMagicSpellData[];
    randomShards?: DropTableData[];
}
interface MagicModificationData extends MasterySkillModificationData {
    altSpells?: AltMagicSpellModificationData[];
}
declare type MagicEvents = {
    action: AltMagicActionEvent;
    runesUsed: RuneConsumptionEvent;
} & SkillWithMasteryEvents;
declare class AltMagic extends CraftingSkill<AltMagicSpell, MagicSkillData, MagicEvents, MagicModificationData> {
    get hasMastery(): boolean;
    get isCombat(): boolean;
    readonly _media = Assets.Magic;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    computeTotalMasteryActions(): void;
    updateTotalUnlockedMasteryActions(): void;
    isMasteryActionUnlocked(action: MasteryAction): boolean;
    renderQueue: AltMagicRenderQueue;
    smithingBarRecipes: SmithingRecipe[];
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): AltMagicSpell;
    get masteryModifiedInterval(): number;
    get noCostsMessage(): string;
    get noRunesMessage(): string;
    /** Base interval of casting a spell in ms */
    readonly baseInterval = 2000;
    /** Currently selected spell. Undefined if none is selected */
    selectedSpell?: AltMagicSpell;
    get activeSpell(): AltMagicSpell;
    /** Currently selected smithing recipe for superheat. Undefined if none is selected */
    selectedSmithingRecipe?: SmithingRecipe;
    /** Currently selected itemID to convert. Undefined if none is selected */
    selectedConversionItem?: AnyItem;
    get runePreservationChance(): number;
    get selectedSpellMedia(): string;
    spellCategories: NamespaceRegistry<SkillSubcategory>;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: MagicSkillData): void;
    modifyData(data: MagicModificationData): void;
    postDataRegistration(): void;
    /** Callback for when the cast button is clicked */
    castButtonOnClick(): void;
    /** Callback for when a spell is clicked */
    selectSpellOnClick(spell: AltMagicSpell): void;
    /** Gets the items in the bank that can be selected to be consumed by a spell */
    getSpellItemSelection(spell: AltMagicSpell): AnyItem[];
    /** Callback for when the select item menu is clicked */
    openSelectItemOnClick(): void;
    /** Callback for when an item is clicked */
    selectItemOnClick(item: AnyItem): void;
    /** Callback for when a superheat recipe is clicked */
    selectBarOnClick(recipe: SmithingRecipe): void;
    /** Gets the material costs to cast superheat.
     * @param useCoal Will ignore Coal_Ore costs of the recipe if true
     */
    getSuperheatBarCosts(recipe: SmithingRecipe, useCoal: boolean, costQty: number): Costs;
    /** Gets the rune costs required to cast the currently selected spell */
    getCurrentRecipeRuneCosts(): Costs;
    getCurrentRecipeCosts(): Costs;
    getCurrentRecipeBaseProducts(): ItemCurrencyObject;
    getPreservationChance(action?: NamedObject): number;
    getPreservationSources(action?: NamedObject): HTMLSpanElement[];
    getXPModifier(masteryAction?: AltMagicSpell): number;
    recordCostConsumptionStats(costs: Costs): void;
    /** Left as void as it is not possible to preserve items in alt. magic */
    recordCostPreservationStats(costs: Costs): void;
    /** Returns the modified GP to add when casting alchemy spells */
    getAlchemyGP(item: AnyItem, conversionRatio: number): number;
    get selectSpellTotalBaseXP(): number;
    get selectSpellTotalBaseAbyssalXP(): number;
    /** Performs the main action for Alt. Magic, stopping if required resources or runes are not met */
    action(): void;
    get selectedSpellDoublingChance(): number;
    randomShardTable: DropTable;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    onLoad(): void;
    /** Rendering update when the use combination runes setting is changed */
    onComboRunesChange(): void;
    onPageChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    onAnyLevelUp(): void;
    onAncientRelicUnlock(): void;
    getErrorLog(): string;
    onModifierChange(): void;
    onEquipmentChange(): void;
    render(): void;
    renderProgressBar(): void;
    renderSelectedSpellImage(): void;
    renderSelectedSpellInfo(): void;
    renderQuantities(): void;
    renderSelectionTab(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    setFromOldOffline(offline: OfflineMagic, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
}
declare class AltMagicRenderQueue extends GatheringSkillRenderQueue<AltMagicSpell> {
    /** Updates the required and produced item quantities */
    quantities: boolean;
    /** Updates the currently selected spell */
    selectedSpellImage: boolean;
    /** Updates the unlocks and tooltips in the spell selection tab */
    selectionTab: boolean;
    /** Updates, the item costs/products for the spell */
    selectedSpellInfo: boolean;
}
