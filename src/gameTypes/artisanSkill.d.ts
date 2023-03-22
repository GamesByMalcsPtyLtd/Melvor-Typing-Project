/** Base class for artisan skills, contains similar code to simplify rendering */
declare abstract class ArtisanSkill<RecipeClass extends ArtisanSkillRecipe, DataType extends MasterySkillData, ProductType extends Item> extends CraftingSkill<RecipeClass, DataType> {
    /** Associated menu for the skill */
    abstract menu: ArtisanMenu<ProductType>;
    abstract selectionTabs: Map<SkillCategory, RecipeSelectionTab<RecipeClass>>;
    abstract renderQueue: ArtisanSkillRenderQueue<RecipeClass>;
    abstract readonly baseInterval: number;
    /** Gets the base XP for the current action */
    get actionXP(): number;
    /** Gets the primary item ID produced for the current action */
    abstract readonly actionItem: ProductType;
    /** Gets the primary item quantity produced for the current action */
    abstract readonly actionItemQuantity: number;
    /** Currently selected recipe */
    abstract readonly activeRecipe: RecipeClass;
    /** ID of currently selected recipe */
    selectedRecipe?: RecipeClass;
    /** Doubling chance for currently selected recipe */
    get actionDoublingChance(): number;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): RecipeClass;
    /** Callback function for when the create button is pressed */
    createButtonOnClick(): void;
    /** Callback function for when a recipe is selected */
    selectRecipeOnClick(recipe: RecipeClass): void;
    onLoad(): void;
    queueBankQuantityRender(item: AnyItem): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    render(): void;
    /** Gets the costs for a recipe for this skill */
    getRecipeCosts(recipe: RecipeClass): Costs;
    getCurrentRecipeCosts(): Costs;
    /** Modifies the cost of a specific item for a recipe */
    modifyItemCost(item: AnyItem, quantity: number, recipe: RecipeClass): number;
    /** Modifies the cost of gp for a recipe */
    modifyGPCost(recipe: RecipeClass): number;
    /** Modifies the cost of slayer coins for a recipe */
    modifySCCost(recipe: RecipeClass): number;
    /** Render the quantities of items, gp, and slayer coins */
    renderQuantities(): void;
    /** Renders the selected recipe */
    renderSelectedRecipe(): void;
    /** Renders the xp, preservation/doubling chance and interval */
    renderRecipeInfo(): void;
    renderProgressBar(): void;
    renderSelectionTabs(): void;
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
    gpCost: number;
    scCost: number;
}
declare abstract class ArtisanSkillRecipe extends BasicSkillRecipe {
    itemCosts: AnyItemQuantity[];
    gpCost: number;
    scCost: number;
    constructor(namespace: DataNamespace, data: ArtisanSkillRecipeData, game: Game);
}
interface CategorizedArtisanRecipeData extends ArtisanSkillRecipeData {
    categoryID: string;
}
declare abstract class CategorizedArtisanRecipe<CategoryType extends SkillCategory> extends ArtisanSkillRecipe {
    category: CategoryType;
    constructor(namespace: DataNamespace, data: CategorizedArtisanRecipeData, game: Game, skill: Skill<any> & SkillCategoryObject<CategoryType>);
}
interface SingleProductArtisanSkillRecipeData extends CategorizedArtisanRecipeData {
    productID: string;
    baseQuantity: number;
}
declare class SingleProductArtisanSkillRecipe<CategoryType extends SkillCategory> extends CategorizedArtisanRecipe<CategoryType> {
    get name(): string;
    get media(): string;
    product: AnyItem;
    baseQuantity: number;
    constructor(namespace: DataNamespace, data: SingleProductArtisanSkillRecipeData, game: Game, skill: Skill<any> & SkillCategoryObject<CategoryType>);
}
