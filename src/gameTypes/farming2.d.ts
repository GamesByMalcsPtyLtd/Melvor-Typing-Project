interface FarmingRecipeData extends SingleProductRecipeData {
    baseInterval: number;
    categoryID: string;
    seedCost: IDQuantity;
    grownMedia?: string;
    grownName?: string;
    grownNameLang?: LangStringData;
}
declare class FarmingRecipe extends SingleProductRecipe {
    get name(): string;
    get media(): string;
    baseInterval: number;
    category: FarmingCategory;
    seedCost: AnyItemQuantity;
    _grownName?: string;
    _grownMedia?: string;
    _grownNameLang?: LangStringData;
    constructor(namespace: DataNamespace, data: FarmingRecipeData, skill: Farming, game: Game);
}
interface FarmingCategoryData extends SkillCategoryData {
    returnSeeds: boolean;
    scaleXPWithQuantity: boolean;
    harvestMultiplier: number;
    masteryXPDivider: number;
    giveXPOnPlant: boolean;
    description: string;
    seedNotice: string;
    singularName: string;
}
declare class FarmingCategory extends SkillCategory {
    returnSeeds: boolean;
    scaleXPWithQuantity: boolean;
    harvestMultiplier: number;
    masteryXPDivider: number;
    giveXPOnPlant: boolean;
    _singularName: string;
    _description: string;
    _seedNotice: string;
    get singularName(): string;
    get description(): string;
    get seedNotice(): string;
    constructor(namespace: DataNamespace, data: FarmingCategoryData, skill: Farming);
}
interface FarmingPlotData extends IDData {
    categoryID: string;
    level: number;
    gpCost: number;
}
declare const enum FarmingPlotState {
    Locked = 0,
    Empty = 1,
    Growing = 2,
    Grown = 3,
    Dead = 4
}
declare class FarmingPlot extends NamespacedObject implements EncodableObject {
    farming: Farming;
    category: FarmingCategory;
    level: number;
    gpCost: number;
    /** Current state of the crop growing in the plot */
    state: FarmingPlotState;
    /** Currently planted recipe */
    plantedRecipe?: FarmingRecipe;
    /** Current item applied as compost */
    compostItem?: CompostItem;
    /** Current compost level. Ranges from 0-100 */
    compostLevel: number;
    /** Recipe currently selected to plant */
    selectedRecipe?: FarmingRecipe;
    /** Growth time of plot in seconds */
    growthTime: number;
    constructor(namespace: DataNamespace, data: FarmingPlotData, farming: Farming);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
declare class DummyFarmingPlot extends FarmingPlot {
    constructor(namespace: DataNamespace, id: string, game: Game);
    decode(reader: SaveWriter, version: number): void;
}
declare class FarmingRenderQueue extends MasterySkillRenderQueue<FarmingRecipe> {
    growthTime: Set<FarmingGrowthTimer>;
    growthState: Set<FarmingPlot>;
    compost: Set<FarmingPlot>;
    growthChance: Set<FarmingPlot>;
    selectedSeed: Set<FarmingPlot>;
    growthIndicators: boolean;
    compostQuantity: boolean;
}
interface FarmingSkillData extends MasterySkillData {
    categories?: FarmingCategoryData[];
    recipes?: FarmingRecipeData[];
    plots?: FarmingPlotData[];
}
declare class FarmingGrowthTimer extends Timer {
    plots: FarmingPlot[];
    farming: Farming;
    constructor(plots: FarmingPlot[], farming: Farming);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
declare class Farming extends SkillWithMastery<FarmingRecipe, FarmingSkillData> implements PassiveAction, SkillCategoryObject<FarmingCategory> {
    readonly _media = "assets/media/skills/farming/farming.svg";
    get isPotionActive(): boolean;
    get activePotion(): PotionItem | undefined;
    categories: NamespaceRegistry<FarmingCategory>;
    /** Save State Property */
    plots: NamespaceRegistry<FarmingPlot>;
    /** Map of herb seeds to herb items */
    herbSeedToProductMap: Map<AnyItem, AnyItem>;
    /** Map of category to recipes in that category, sorted by level requirement */
    categoryRecipeMap: Map<FarmingCategory, FarmingRecipe[]>;
    categoryPlotMap: Map<FarmingCategory, FarmingPlot[]>;
    /** Save State Property */
    growthTimers: Set<FarmingGrowthTimer>;
    /** Maps farming plots to growth timers */
    growthTimerMap: Map<FarmingPlot, FarmingGrowthTimer>;
    renderQueue: FarmingRenderQueue;
    get composts(): NamespaceRegistry<CompostItem>;
    get isAnyPlotGrown(): boolean;
    getTotalUnlockedMasteryActions(): number;
    constructor(namespace: DataNamespace, game: Game);
    onLoad(): void;
    onPageChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    getErrorLog(): string;
    registerData(namespace: DataNamespace, data: FarmingSkillData): void;
    postDataRegistration(): void;
    growPlots(timer: FarmingGrowthTimer): void;
    removeGrowthTimer(timer: FarmingGrowthTimer): void;
    getHerbFromSeed(seedItem: AnyItem): AnyItem | undefined;
    getRecipesForCategory(category: FarmingCategory): FarmingRecipe[];
    getPlotsForCategory(category: FarmingCategory): FarmingPlot[];
    getOwnedRecipeSeeds(recipe: FarmingRecipe): number;
    getRecipeSeedCost(recipe: FarmingRecipe): number;
    getPercentageIntervalModifier(action: FarmingRecipe): number;
    getRecipeInterval(recipe: FarmingRecipe): number;
    /** Returns the chance for a plot to grow */
    getPlotGrowthChance(plot: FarmingPlot): number;
    getPlotGrowthTime(plot: FarmingPlot): number;
    getHarvestAllCost(category: FarmingCategory): number;
    getCompostAllCost(category: FarmingCategory): number;
    getPlantAllCost(category: FarmingCategory): number;
    harvestPlot(plot: FarmingPlot): boolean;
    clearDeadPlot(plot: FarmingPlot): void;
    resetPlot(plot: FarmingPlot): void;
    plantPlot(plot: FarmingPlot, recipe: FarmingRecipe, isSelected?: boolean): number;
    plantAllPlots(category: FarmingCategory, forceRecipe?: FarmingRecipe): void;
    onMasteryLevelUp(action: FarmingRecipe, oldLevel: number, newLevel: number): void;
    onMasteryPoolBonusChange(oldBonusLevel: number, newBonusLevel: number): void;
    passiveTick(): void;
    setUnlock(isUnlocked: boolean): void;
    render(): void;
    renderGrowthStatus(): void;
    renderGrowthState(): void;
    renderGrowthChance(): void;
    renderCompost(): void;
    renderSelectedSeed(): void;
    renderGrowthIndicators(): void;
    renderCompostQuantity(): void;
    getMasteryXPModifier(action: FarmingRecipe): number;
    getUncappedDoublingChance(action?: FarmingRecipe): number;
    /** Shows all plots that are part of the category */
    showPlotsInCategory(category: FarmingCategory): void;
    /** Callback function for the Harvest All button */
    harvestAllOnClick(category: FarmingCategory): void;
    /** Callback function for adding compost to a plot */
    compostPlot(plot: FarmingPlot, compost: CompostItem, amount: number): boolean;
    notifyNoCompost(compost: CompostItem): void;
    notifyCantAffordCompostAll(compost: CompostItem): void;
    recordCompostStat(compost: CompostItem, amount: number): void;
    /** Callback function for the Compost All button */
    compostAllOnClick(category: FarmingCategory, compost: CompostItem): void;
    /** Callback function for the Plant All button */
    plantAllOnClick(category: FarmingCategory): void;
    /** Callback function for the Plant All Selected button */
    plantAllSelectedOnClick(category: FarmingCategory): void;
    /** Callback function for changing recipe associated with the Plant All Selected for a plot */
    setPlantAllSelected(plot: FarmingPlot, recipe: FarmingRecipe): void;
    /** Callback function for destroying an individual plot */
    destroyPlotOnClick(plot: FarmingPlot): void;
    destroyPlot(plot: FarmingPlot): void;
    /** Callback function for the Plant a Seed button on a plot */
    plantPlotOnClick(plot: FarmingPlot): void;
    /** Callback function for the Harvest button on a plot */
    harvestPlotOnClick(plot: FarmingPlot): void;
    /** Callback function for the Unlock button on a plot */
    unlockPlotOnClick(plot: FarmingPlot): void;
    /** Callback function for the Plant button in the Plant a seed modal */
    plantRecipe(recipe: FarmingRecipe, plot: FarmingPlot): void;
    /** Callback function for the Plant button in the Plant a seed modal */
    plantAllRecipe(recipe: FarmingRecipe): void;
    createGrowthTimer(plots: FarmingPlot[], interval: number): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    encode(writer: SaveWriter): SaveWriter;
    decodePlot(reader: SaveWriter, version: number): void;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
    testTranslations(): void;
}
