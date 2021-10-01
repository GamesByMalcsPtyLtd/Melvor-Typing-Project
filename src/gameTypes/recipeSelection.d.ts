interface HasLevel {
    level: number;
}
declare abstract class RecipeSelectionTab<Recipe extends HasLevel> {
    protected skill: SkillID;
    protected recipes: Recipe[];
    private recipeCollapse;
    private parent;
    protected container: HTMLDivElement;
    protected recipeRow: HTMLElement;
    protected recipeContainers: HTMLLIElement[];
    protected recipeTooltips: TippyTooltip[];
    protected recipeUnlocked: boolean[];
    constructor(parentID: string, skill: SkillID, recipes: Recipe[], containerID: string, recipeCollapse?: string);
    show(): void;
    hide(): void;
    updateRecipesForLevel(): void;
    updateRecipeTooltips(): void;
    localize(): void;
    protected abstract getRecipeMedia(recipe: Recipe): string;
    protected abstract getRecipeName(recipe: Recipe): string;
    protected abstract getRecipeCallback(recipe: Recipe): VoidFunction;
    protected abstract getRecipeIngredients(recipe: Recipe): ItemQuantity[];
    protected isRecipeUnlocked(recipe: Recipe): boolean;
    private addRecipeContainer;
    protected setRecipeUnlocked(id: number): void;
    protected setRecipeLocked(id: number): void;
    protected getRequiresTooltip(quantities: ItemQuantity[]): string;
}
interface HasItem extends HasLevel {
    itemID: ItemID;
}
declare abstract class ItemRecipeSelectionTab<Recipe extends HasItem> extends RecipeSelectionTab<Recipe> {
    protected getRecipeMedia(recipe: HasItem): string;
    protected getRecipeName(recipe: HasItem): string;
}
declare class SmithingSelectionTab extends ItemRecipeSelectionTab<SmithingItem> {
    constructor(category: number);
    protected getRecipeCallback(recipe: SmithingItem): () => void;
    protected getRecipeIngredients(recipe: SmithingItem): ItemQuantity[];
}
declare class FletchingSelectionTab extends ItemRecipeSelectionTab<FletchingItem> {
    constructor(category: number);
    protected getRecipeCallback(recipe: FletchingItem): () => void;
    protected getRecipeIngredients(recipe: FletchingItem): ItemQuantity[];
}
declare class CraftingSelectionTab extends ItemRecipeSelectionTab<CraftingItem> {
    constructor(category: number);
    protected getRecipeCallback(recipe: CraftingItem): () => void;
    protected getRecipeIngredients(recipe: CraftingItem): ItemQuantity[];
}
declare class RunecraftingSelectionTab extends ItemRecipeSelectionTab<RunecraftingItem> {
    constructor(category: number);
    protected getRecipeCallback(recipe: RunecraftingItem): () => void;
    protected getRecipeIngredients(recipe: RunecraftingItem): ItemQuantity[];
}
declare class HerbloreSelectionTab extends RecipeSelectionTab<HerbloreItem> {
    constructor(category: number);
    updateRecipesForLevel(): void;
    protected getRecipeMedia(recipe: HerbloreItem): string;
    protected getRecipeName(recipe: HerbloreItem): string;
    protected getRecipeCallback(recipe: HerbloreItem): () => void;
    protected getRecipeIngredients(recipe: HerbloreItem): ItemQuantity[];
}
declare class AltMagicSelectionTab extends RecipeSelectionTab<Altmagic> {
    constructor(category: number);
    protected getRecipeMedia(recipe: Altmagic): string;
    protected getRecipeName(recipe: Altmagic): string;
    protected getRecipeCallback(recipe: Altmagic): () => void;
    protected getRecipeIngredients(recipe: Altmagic): {
        id: AltMagics;
        qty: number;
    }[];
    protected getRequiresTooltip(quantities: ItemQuantity[]): string;
}
declare class SummoningSelectionTab extends ItemRecipeSelectionTab<SummoningItem> {
    private shardMessage;
    constructor();
    localize(): void;
    protected isRecipeUnlocked(recipe: SummoningItem): boolean;
    protected setRecipeUnlocked(id: number): void;
    protected setRecipeLocked(id: number): void;
    protected getRecipeCallback(recipe: SummoningItem): () => void;
    protected getRecipeIngredients(recipe: SummoningItem): ItemQuantity[];
}
