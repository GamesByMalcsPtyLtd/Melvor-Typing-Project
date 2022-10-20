interface CookingRecipeData extends SingleProductArtisanSkillRecipeData {
    perfectCookID: string;
    baseInterval: number;
    noMastery?: boolean;
    discoveredItems?: string[];
}
declare class CookingRecipe extends SingleProductArtisanSkillRecipe<CookingCategory> {
    perfectItem: AnyItem;
    baseInterval: number;
    hasMastery: boolean;
    discoveredItems: AnyItem[];
    constructor(namespace: DataNamespace, data: CookingRecipeData, game: Game, cooking: Cooking);
}
interface CookingCategoryData extends SkillCategoryData {
    shopUpgradeIDs: string[];
    upgradeRequired: boolean;
}
interface CookingCategoryModificationData extends IDData {
    shopUpgradeIDs: string[];
}
declare class CookingCategory extends SkillCategory {
    private game;
    protected skill: Cooking;
    get media(): string;
    get name(): string;
    get upgradeOwned(): boolean;
    private get highestUpgrade();
    private shopUpgrades;
    upgradeRequired: boolean;
    constructor(namespace: DataNamespace, data: CookingCategoryData, game: Game, skill: Cooking);
    applyDataModification(modData: CookingCategoryModificationData, game: Game): void;
}
interface CookingSkillData extends MasterySkillData {
    categories?: CookingCategoryData[];
    recipes?: CookingRecipeData[];
}
declare class Cooking extends CraftingSkill<CookingRecipe, CookingSkillData> {
    protected readonly _media = "assets/media/skills/cooking/cooking.svg";
    protected computeTotalMasteryActions(): void;
    protected getTotalUnlockedMasteryActions(): number;
    renderQueue: CookingRenderQueue;
    categories: NamespaceRegistry<CookingCategory>;
    protected get actionInterval(): number;
    protected get actionLevel(): number;
    protected get masteryAction(): CookingRecipe;
    protected get masteryModifiedInterval(): number;
    get activeRecipe(): CookingRecipe;
    protected get noCostsMessage(): string;
    private get noPassiveCostsMessage();
    /** Recipes that are selected at each cooking station */
    private selectedRecipes;
    /** Passive cooking timers */
    private passiveCookTimers;
    /** Stockpiled items from passive Cooking */
    private stockpileItems;
    /** Category that is actively being cooked */
    private activeCookingCategory?;
    private canStopPassiveCooking;
    /** Map of products/perfect items to recipes. Utilized for food healing mastery bonuses. */
    productRecipeMap: Map<AnyItem, CookingRecipe>;
    ingredientRecipeMap: Map<AnyItem, CookingRecipe>;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: CookingSkillData): void;
    postDataRegistration(): void;
    getIngredientCookedVersion(item: AnyItem): AnyItem | undefined;
    activeTick(): void;
    getStockpileSnapshot(): Map<CookingCategory, AnyItemQuantity>;
    getMasteryHealingBonus(foodItem: FoodItem): number;
    getRecipeMasteryModifiedInterval(recipe: CookingRecipe): number;
    getMasteryXPModifier(action: CookingRecipe): number;
    /** Gets the interval for performing a normal cook with a recipe */
    getRecipeCookingInterval(recipe: CookingRecipe): number;
    /** Gets the interval for performing a passive cook with a recipe */
    getRecipePassiveCookingInterval(recipe: CookingRecipe): number;
    private getRecipeSuccessChance;
    private getRecipePerfectChance;
    private getRecipeCosts;
    protected getCurrentRecipeCosts(): Costs;
    protected getPreservationChance(action: CookingRecipe, chance: number): number;
    protected getUncappedDoublingChance(action: CookingRecipe): number;
    protected recordCostConsumptionStats(costs: Costs): void;
    protected recordCostPreservationStats(costs: Costs): void;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    protected addMasteryXPReward(): void;
    /** Starts passive cooking in the selected category */
    private startPassiveCooking;
    /** Stops passive cooking in the selected category. Returns true if passive cooking was successfully stopped. */
    private stopPassiveCooking;
    /** Adds an item to the stockpile for the given category */
    private addItemToStockpile;
    /** Performs passive cooking for a given category */
    private passiveCookingAction;
    protected onStop(): void;
    /** Callback function for when the active cook button is pressed */
    onActiveCookButtonClick(category: CookingCategory): void;
    /** Callback function for when the passive cook button is pressed */
    onPassiveCookButtonClick(category: CookingCategory): void;
    /** Callback function for when the recipe select button is pressed */
    onRecipeSelectionClick(recipe: CookingRecipe): void;
    /** Callback function for when the recipe selection open button is pressed */
    onRecipeSelectionOpenClick(category: CookingCategory): void;
    /** Callback function for when the collect from stockpile button is pressed */
    onCollectStockpileClick(category: CookingCategory): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    protected onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    onLoad(): void;
    onPageChange(): void;
    render(): void;
    private renderSelectedRecipes;
    private renderRecipeRates;
    private renderRecipeQuantities;
    private renderProgressBars;
    private renderStockpile;
    private renderUpgrades;
    protected resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldFormat(savegame: NewSaveGame, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineCooking | OfflineSkill, idMap: NumericIDMap): void;
    static readonly baseSuccessChance = 70;
}
declare class CookingRenderQueue extends GatheringSkillRenderQueue<CookingRecipe> {
    /** Renders the recipes selected in the given categories */
    selectedRecipes: Set<CookingCategory>;
    /** Updates the rates of all selected recipes, including HP gain */
    recipeRates: boolean;
    /** Updates the quantity icons of all selected recipes */
    quantities: boolean;
    /** Updates ths stockpile for the given categories */
    stockpile: Set<CookingCategory>;
    /** Updates the purchased upgrades for each category */
    upgrades: boolean;
}
