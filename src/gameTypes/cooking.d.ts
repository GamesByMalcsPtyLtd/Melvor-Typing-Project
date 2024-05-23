interface CookingRecipeData extends SingleProductArtisanSkillRecipeData {
    perfectCookID: string;
    baseInterval: number;
    subcategoryID?: string;
    noMastery?: boolean;
    discoveredItems?: string[];
}
interface CookingRecipeModificationData extends SingleProductArtisanSkillRecipeModificationData {
    perfectCookID?: string;
    baseInterval?: number;
    subcategoryID?: string;
}
declare class CookingRecipe extends SingleProductArtisanSkillRecipe<CookingCategory> {
    perfectItem: AnyItem;
    baseInterval: number;
    subcategory?: SkillSubcategory;
    hasMastery: boolean;
    discoveredItems: AnyItem[];
    constructor(namespace: DataNamespace, data: CookingRecipeData, game: Game, cooking: Cooking);
    applyDataModification(data: CookingRecipeModificationData, game: Game): void;
}
interface CookingCategoryData extends SkillCategoryData {
    modifierName: string;
    modifierNameLang?: string;
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
    get upgradeName(): string;
    get upgradeOwned(): boolean;
    get highestUpgrade(): ShopPurchase | undefined;
    _modifierName: string;
    _modifierNameLang?: string;
    shopUpgrades: ShopPurchase[];
    upgradeRequired: boolean;
    constructor(namespace: DataNamespace, data: CookingCategoryData, game: Game, skill: Cooking);
    applyDataModification(modData: CookingCategoryModificationData, game: Game): void;
}
interface CookingSkillData extends MasterySkillData {
    categories?: CookingCategoryData[];
    subcategories?: SkillSubcategoryData[];
    recipes?: CookingRecipeData[];
}
interface CookingModificationData extends MasterySkillModificationData {
    categories?: CookingCategoryModificationData[];
    recipes?: CookingRecipeModificationData[];
}
declare type CookingEvents = {
    action: CookingActionEvent;
} & SkillWithMasteryEvents;
declare class Cooking extends CraftingSkill<CookingRecipe, CookingSkillData, CookingEvents, CookingModificationData> {
    readonly _media = Assets.Cooking;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    computeTotalMasteryActions(): void;
    isMasteryActionUnlocked(action: CookingRecipe): boolean;
    renderQueue: CookingRenderQueue;
    categories: NamespaceRegistry<CookingCategory>;
    subcategories: NamespaceRegistry<SkillSubcategory>;
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
    modifyData(data: CookingModificationData): void;
    postDataRegistration(): void;
    getIngredientCookedVersion(item: AnyItem): AnyItem | undefined;
    activeTick(): void;
    getStockpileSnapshot(): Map<CookingCategory, AnyItemQuantity>;
    getActionForFood(foodItem: FoodItem): CookingRecipe | undefined;
    getRecipeMasteryModifiedInterval(recipe: CookingRecipe): number;
    /** Gets the interval for performing a normal cook with a recipe */
    getRecipeCookingInterval(recipe: CookingRecipe): number;
    /** Gets the interval for performing a passive cook with a recipe */
    getRecipePassiveCookingInterval(recipe: CookingRecipe): number;
    getRecipeSuccessChance(recipe: CookingRecipe): number;
    getRecipeSuccessChanceSources(recipe: CookingRecipe): HTMLSpanElement[];
    getRecipePerfectChance(recipe: CookingRecipe): number;
    getRecipePerfectChanceSources(recipe: CookingRecipe): HTMLSpanElement[];
    getRecipeCosts(recipe: CookingRecipe): Costs;
    getCurrentRecipeCosts(): Costs;
    getRandomFlatAdditionalPrimaryProductQuantity(item: Item, action: NamedObject, query: ModifierQuery): number;
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
    onRecipeSelectionOpenClick(category: CookingCategory, realm: Realm): void;
    /** Callback function for when the collect from stockpile button is pressed */
    onCollectStockpileClick(category: CookingCategory): void;
    renderModifierChange(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    getErrorLog(): string;
    initMenus(): void;
    onLoad(): void;
    onPageChange(): void;
    onAncientRelicUnlock(): void;
    queueBankQuantityRender(item: AnyItem): void;
    render(): void;
    renderSelectedRecipes(): void;
    renderRecipeRates(): void;
    renderRecipeQuantities(): void;
    renderProgressBars(): void;
    renderStockpile(): void;
    renderUpgrades(): void;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldFormat(savegame: NewSaveGame, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineCooking | OfflineSkill, idMap: NumericIDMap): void;
    getObtainableItems(): Set<AnyItem>;
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
