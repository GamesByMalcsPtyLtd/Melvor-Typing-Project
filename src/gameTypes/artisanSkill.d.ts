/** Base class for artisan skills, contains similar code to simplify rendering */
declare abstract class ArtisanSkill<RecipeClass extends ArtisanSkillRecipe, DataType extends MasterySkillData, ProductType extends Item, Events extends SkillWithMasteryEvents = SkillWithMasteryEvents, ModificationDataType extends MasterySkillModificationData = MasterySkillModificationData> extends CraftingSkill<RecipeClass, DataType, Events, ModificationDataType> {
    /** Associated menu for the skill */
    abstract menu: ArtisanMenuElement;
    abstract selectionTabs: Map<SkillCategory, RecipeSelectionTabElement<RecipeClass, RecipeOptionElement<RecipeClass>>>;
    abstract categoryMenu: RealmedCategoryMenuElement;
    abstract renderQueue: ArtisanSkillRenderQueue<RecipeClass>;
    abstract readonly baseInterval: number;
    /** Gets the base XP for the current action */
    get actionXP(): number;
    /** Gets the base Abyssal XP for the current action */
    get actionAbyssalXP(): number;
    /** Gets the primary item produced for the current action */
    abstract readonly actionItem: ProductType;
    /** Gets the primary item quantity produced for the current action */
    abstract readonly unmodifiedActionQuantity: number;
    /** Currently selected recipe */
    abstract readonly activeRecipe: RecipeClass;
    /** ID of currently selected recipe */
    selectedRecipe?: RecipeClass;
    get actionInterval(): number;
    get actionLevel(): number;
    get actionAbyssalLevel(): number;
    get masteryAction(): RecipeClass;
    /** Callback function for when the create button is pressed */
    createButtonOnClick(): void;
    /** Callback function for when a recipe is selected */
    selectRecipeOnClick(recipe: RecipeClass): void;
    onLoad(): void;
    onAncientRelicUnlock(): void;
    queueBankQuantityRender(item: AnyItem): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    getErrorLog(): string;
    render(): void;
    renderRealmVisibility(): void;
    /** Gets the costs for a recipe for this skill */
    getRecipeCosts(recipe: RecipeClass): Costs;
    getCurrentRecipeCosts(): Costs;
    /** Render the quantities of items, gp, and slayer coins */
    renderQuantities(): void;
    /** Renders the selected recipe */
    renderSelectedRecipe(): void;
    /** Renders the xp, preservation/doubling chance and interval */
    renderRecipeInfo(): void;
    renderProgressBar(): void;
    renderSelectionTabs(): void;
    getBestMasteryRealm(): Realm;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
}
declare class ArtisanSkillRenderQueue<ActionType extends ArtisanSkillRecipe> extends GatheringSkillRenderQueue<ActionType> {
    /** Updates the required quantities, and the current quantities of the recipe */
    quantities: boolean;
    /** Updates the types of xp granted per action, the preservation/doubling chance and the interval */
    recipeInfo: boolean;
    /** Updates the artisan menu to select a recipe */
    selectedRecipe: boolean;
    /** Updates the recipe selection tabs */
    selectionTabs: boolean;
}
interface ArtisanSkillRecipeData extends BasicSkillRecipeData {
    itemCosts: IDQuantity[];
    currencyCosts?: IDQuantity[];
    /** @deprecated Use currencyCosts instead */
    gpCost?: number;
    /** @deprecated Use currencyCosts instead */
    scCost?: number;
}
interface ArtisanSkillRecipeModificationData extends BasicSkillRecipeModificationData {
    itemCosts?: ItemQuantitiesModificationData;
    currencyCosts?: CurrencyQuantitiesModificationData;
}
declare abstract class ArtisanSkillRecipe extends BasicSkillRecipe {
    itemCosts: AnyItemQuantity[];
    currencyCosts: CurrencyQuantity[];
    constructor(namespace: DataNamespace, data: ArtisanSkillRecipeData, game: Game);
    applyDataModification(data: ArtisanSkillRecipeModificationData, game: Game): void;
}
interface CategorizedArtisanRecipeData extends ArtisanSkillRecipeData {
    categoryID: string;
}
interface CategorizedArtisanRecipeModificationData extends ArtisanSkillRecipeModificationData {
    categoryID?: string;
}
declare abstract class CategorizedArtisanRecipe<CategoryType extends SkillCategory> extends ArtisanSkillRecipe {
    skill: AnySkill & SkillCategoryObject<CategoryType>;
    category: CategoryType;
    constructor(namespace: DataNamespace, data: CategorizedArtisanRecipeData, game: Game, skill: AnySkill & SkillCategoryObject<CategoryType>);
    applyDataModification(data: CategorizedArtisanRecipeModificationData, game: Game): void;
}
interface SingleProductArtisanSkillRecipeData extends CategorizedArtisanRecipeData {
    productID: string;
    baseQuantity: number;
}
interface SingleProductArtisanSkillRecipeModificationData extends CategorizedArtisanRecipeModificationData {
    productID?: string;
    baseQuantity?: number;
}
declare class SingleProductArtisanSkillRecipe<CategoryType extends SkillCategory> extends CategorizedArtisanRecipe<CategoryType> {
    get name(): string;
    get media(): string;
    product: AnyItem;
    baseQuantity: number;
    constructor(namespace: DataNamespace, data: SingleProductArtisanSkillRecipeData, game: Game, skill: Skill<any> & SkillCategoryObject<CategoryType>);
    applyDataModification(data: SingleProductArtisanSkillRecipeModificationData, game: Game): void;
}
