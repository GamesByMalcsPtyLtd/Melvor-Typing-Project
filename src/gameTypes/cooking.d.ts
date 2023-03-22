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
    game: Game;
    skill: Cooking;
    get media(): string;
    get name(): string;
    get upgradeOwned(): boolean;
    get highestUpgrade(): ShopPurchase | undefined;
    shopUpgrades: ShopPurchase[];
    upgradeRequired: boolean;
    constructor(namespace: DataNamespace, data: CookingCategoryData, game: Game, skill: Cooking);
    applyDataModification(modData: CookingCategoryModificationData, game: Game): void;
}
interface CookingSkillData extends MasterySkillData {
    categories?: CookingCategoryData[];
    recipes?: CookingRecipeData[];
}
declare class Cooking extends CraftingSkill<CookingRecipe, CookingSkillData> {
    readonly _media = "assets/media/skills/cooking/cooking.svg";
    computeTotalMasteryActions(): void;
    getTotalUnlockedMasteryActions(): number;
    renderQueue: CookingRenderQueue;
    categories: NamespaceRegistry<CookingCategory>;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): CookingRecipe;
    get masteryModifiedInterval(): number;
    get activeRecipe(): CookingRecipe;
    get noCostsMessage(): string;
    get noPassiveCostsMessage(): string;
    /** Recipes that are selected at each cooking station */
    selectedRecipes: Map<CookingCategory, CookingRecipe>;
    /** Passive cooking timers */
    passiveCookTimers: Map<CookingCategory, Timer>;
    /** Stockpiled items from passive Cooking */
    stockpileItems: Map<CookingCategory, AnyItemQuantity>;
    /** Category that is actively being cooked */
    activeCookingCategory?: CookingCategory;
    canStopPassiveCooking(category: CookingCategory): boolean;
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
    getRecipeSuccessChance(recipe: CookingRecipe): number;
    getRecipePerfectChance(recipe: CookingRecipe): number;
    getRecipeCosts(recipe: CookingRecipe): Costs;
    getCurrentRecipeCosts(): Costs;
    getPreservationChance(action: CookingRecipe, chance: number): number;
    getUncappedDoublingChance(action: CookingRecipe): number;
    recordCostConsumptionStats(costs: Costs): void;
    recordCostPreservationStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    addMasteryXPReward(): void;
    /** Starts passive cooking in the selected category */
    startPassiveCooking(category: CookingCategory): void;
    /** Stops passive cooking in the selected category. Returns true if passive cooking was successfully stopped. */
    stopPassiveCooking(category: CookingCategory): boolean;
    /** Adds an item to the stockpile for the given category */
    addItemToStockpile(category: CookingCategory, item: AnyItem, quantity: number): void;
    /** Performs passive cooking for a given category */
    passiveCookingAction(category: CookingCategory): void;
    onStop(): void;
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
    renderModifierChange(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    onLoad(): void;
    onPageChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    render(): void;
    renderSelectedRecipes(): void;
    renderRecipeRates(): void;
    renderRecipeQuantities(): void;
    renderProgressBars(): void;
    renderStockpile(): void;
    renderUpgrades(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldFormat(savegame: NewSaveGame, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
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
