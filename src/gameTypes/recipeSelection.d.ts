interface HasLevel {
    level: number;
}
declare abstract class RecipeSelectionTab<Recipe extends HasLevel> extends ContainedComponent {
    skill: AnySkill;
    recipes: Recipe[];
    recipeCollapse: string;
    parent: HTMLElement;
    container: HTMLDivElement;
    recipeRow: HTMLElement;
    recipeContainers: HTMLLIElement[];
    recipeTooltips: TippyTooltip[];
    recipeUnlocked: boolean[];
    constructor(parentID: string, skill: AnySkill, recipes: Recipe[], containerID: string, recipeCollapse?: string);
    updateRecipesForLevel(): void;
    updateRecipeTooltips(): void;
    localize(): void;
    abstract getRecipeMedia(recipe: Recipe): string;
    abstract getRecipeName(recipe: Recipe): string;
    abstract getRecipeCallback(recipe: Recipe): VoidFunction;
    abstract getRecipeIngredients(recipe: Recipe): Costs;
    isRecipeUnlocked(recipe: Recipe): boolean;
    addRecipeContainer(): void;
    setRecipeUnlocked(id: number): void;
    setRecipeLocked(id: number): void;
    getRequiresTooltip(items: AnyItemQuantity[], gp: number, sc: number): string;
}
interface HasItem extends HasLevel {
    product: AnyItem;
}
declare abstract class ItemRecipeSelectionTab<Recipe extends HasItem> extends RecipeSelectionTab<Recipe> {
    getRecipeMedia(recipe: HasItem): string;
    getRecipeName(recipe: HasItem): string;
}
declare class SmithingSelectionTab extends ItemRecipeSelectionTab<SmithingRecipe> {
    constructor(category: SkillCategory);
    getRecipeCallback(recipe: SmithingRecipe): () => void;
    getRecipeIngredients(recipe: SmithingRecipe): Costs;
}
declare class FletchingSelectionTab extends ItemRecipeSelectionTab<FletchingRecipe> {
    constructor(category: SkillCategory);
    getRecipeCallback(recipe: FletchingRecipe): () => void;
    getRecipeIngredients(recipe: FletchingRecipe): Costs;
}
declare class CraftingSelectionTab extends ItemRecipeSelectionTab<CraftingRecipe> {
    constructor(category: SkillCategory);
    getRecipeCallback(recipe: CraftingRecipe): () => void;
    getRecipeIngredients(recipe: CraftingRecipe): Costs;
}
declare class RunecraftingSelectionTab extends ItemRecipeSelectionTab<RunecraftingRecipe> {
    constructor(category: SkillCategory);
    getRecipeCallback(recipe: RunecraftingRecipe): () => void;
    getRecipeIngredients(recipe: RunecraftingRecipe): Costs;
}
declare class HerbloreSelectionTab extends RecipeSelectionTab<HerbloreRecipe> {
    constructor(category: SkillCategory);
    updateRecipesForLevel(): void;
    getRecipeMedia(recipe: HerbloreRecipe): string;
    getRecipeName(recipe: HerbloreRecipe): string;
    getRecipeCallback(recipe: HerbloreRecipe): () => void;
    getRecipeIngredients(recipe: HerbloreRecipe): Costs;
}
declare class AltMagicSelectionTab extends RecipeSelectionTab<AltMagicSpell> {
    constructor();
    getRecipeMedia(recipe: AltMagicSpell): string;
    getRecipeName(recipe: AltMagicSpell): string;
    getRecipeCallback(recipe: AltMagicSpell): () => void;
    updateRecipeTooltips(): void;
    getRecipeIngredients(recipe: AltMagicSpell): Costs;
    getSpellTooltip(altSpell: AltMagicSpell): string;
}
declare class SummoningSelectionTab extends ItemRecipeSelectionTab<SummoningRecipe> {
    shardMessage: HTMLHeadingElement;
    constructor(category: SkillCategory);
    localize(): void;
    isRecipeUnlocked(recipe: SummoningRecipe): boolean;
    setRecipeUnlocked(id: number): void;
    setRecipeLocked(id: number): void;
    getRecipeCallback(recipe: SummoningRecipe): () => void;
    getRecipeIngredients(recipe: SummoningRecipe): Costs;
}
interface CategoryLike {
    name: string;
    media: string;
}
declare class CategoryMenu<CategoryType extends CategoryLike> extends ContainedComponent {
    navID: string;
    categoryData: CategoryType[];
    expandTextID: string;
    container: HTMLDivElement;
    expandText: HTMLSpanElement;
    optionNames: HTMLSpanElement[];
    optionsContainer: HTMLUListElement;
    constructor(parentID: string, navID: string, categoryData: CategoryType[], expandTextID: string, changeCategoryFunc: (category: CategoryType) => void);
    addCategory(category: CategoryType, callback: (id: CategoryType) => void): void;
    localize(): void;
}
