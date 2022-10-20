interface HasLevel {
    level: number;
}
declare abstract class RecipeSelectionTab<Recipe extends HasLevel> extends ContainedComponent {
    protected skill: AnySkill;
    protected recipes: Recipe[];
    private recipeCollapse;
    private parent;
    container: HTMLDivElement;
    protected recipeRow: HTMLElement;
    protected recipeContainers: HTMLLIElement[];
    protected recipeTooltips: TippyTooltip[];
    protected recipeUnlocked: boolean[];
    constructor(parentID: string, skill: AnySkill, recipes: Recipe[], containerID: string, recipeCollapse?: string);
    updateRecipesForLevel(): void;
    updateRecipeTooltips(): void;
    localize(): void;
    protected abstract getRecipeMedia(recipe: Recipe): string;
    protected abstract getRecipeName(recipe: Recipe): string;
    protected abstract getRecipeCallback(recipe: Recipe): VoidFunction;
    protected abstract getRecipeIngredients(recipe: Recipe): Costs;
    protected isRecipeUnlocked(recipe: Recipe): boolean;
    private addRecipeContainer;
    protected setRecipeUnlocked(id: number): void;
    protected setRecipeLocked(id: number): void;
    protected getRequiresTooltip(items: AnyItemQuantity[], gp: number, sc: number): string;
}
interface HasItem extends HasLevel {
    product: AnyItem;
}
declare abstract class ItemRecipeSelectionTab<Recipe extends HasItem> extends RecipeSelectionTab<Recipe> {
    protected getRecipeMedia(recipe: HasItem): string;
    protected getRecipeName(recipe: HasItem): string;
}
declare class SmithingSelectionTab extends ItemRecipeSelectionTab<SmithingRecipe> {
    constructor(category: SkillCategory);
    protected getRecipeCallback(recipe: SmithingRecipe): () => void;
    protected getRecipeIngredients(recipe: SmithingRecipe): Costs;
}
declare class FletchingSelectionTab extends ItemRecipeSelectionTab<FletchingRecipe> {
    constructor(category: SkillCategory);
    protected getRecipeCallback(recipe: FletchingRecipe): () => void;
    protected getRecipeIngredients(recipe: FletchingRecipe): Costs;
}
declare class CraftingSelectionTab extends ItemRecipeSelectionTab<CraftingRecipe> {
    constructor(category: SkillCategory);
    protected getRecipeCallback(recipe: CraftingRecipe): () => void;
    protected getRecipeIngredients(recipe: CraftingRecipe): Costs;
}
declare class RunecraftingSelectionTab extends ItemRecipeSelectionTab<RunecraftingRecipe> {
    constructor(category: SkillCategory);
    protected getRecipeCallback(recipe: RunecraftingRecipe): () => void;
    protected getRecipeIngredients(recipe: RunecraftingRecipe): Costs;
}
declare class HerbloreSelectionTab extends RecipeSelectionTab<HerbloreRecipe> {
    constructor(category: SkillCategory);
    updateRecipesForLevel(): void;
    protected getRecipeMedia(recipe: HerbloreRecipe): string;
    protected getRecipeName(recipe: HerbloreRecipe): string;
    protected getRecipeCallback(recipe: HerbloreRecipe): () => void;
    protected getRecipeIngredients(recipe: HerbloreRecipe): Costs;
}
declare class AltMagicSelectionTab extends RecipeSelectionTab<AltMagicSpell> {
    constructor();
    protected getRecipeMedia(recipe: AltMagicSpell): string;
    protected getRecipeName(recipe: AltMagicSpell): string;
    protected getRecipeCallback(recipe: AltMagicSpell): () => void;
    updateRecipeTooltips(): void;
    protected getRecipeIngredients(recipe: AltMagicSpell): Costs;
    protected getSpellTooltip(altSpell: AltMagicSpell): string;
}
declare class SummoningSelectionTab extends ItemRecipeSelectionTab<SummoningRecipe> {
    private shardMessage;
    constructor(category: SkillCategory);
    localize(): void;
    protected isRecipeUnlocked(recipe: SummoningRecipe): boolean;
    protected setRecipeUnlocked(id: number): void;
    protected setRecipeLocked(id: number): void;
    protected getRecipeCallback(recipe: SummoningRecipe): () => void;
    protected getRecipeIngredients(recipe: SummoningRecipe): Costs;
}
interface CategoryLike {
    name: string;
    media: string;
}
declare class CategoryMenu<CategoryType extends CategoryLike> extends ContainedComponent {
    private navID;
    private categoryData;
    private expandTextID;
    protected container: HTMLDivElement;
    private expandText;
    private optionNames;
    private optionsContainer;
    constructor(parentID: string, navID: string, categoryData: CategoryType[], expandTextID: string, changeCategoryFunc: (category: CategoryType) => void);
    private addCategory;
    localize(): void;
}
