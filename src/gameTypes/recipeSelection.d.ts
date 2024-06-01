interface HasLevels {
    level: number;
    abyssalLevel: number;
}
interface HasItem extends HasLevels {
    product: AnyItem;
}
declare class RecipeSelectionTabElement<T extends HasLevels, OptionElement extends RecipeOptionElement<T> = RecipeOptionElement<T>> extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    recipeContainer: HTMLDivElement;
    recipes: T[];
    optionTagName: keyof HTMLElementTagNameMap;
    options: OptionElement[];
    constructor();
    connectedCallback(): void;
    setRecipes(recipes: T[], skill: AnySkill): void;
    updateRecipes(skill: AnySkill): void;
    localize(skill: AnySkill): void;
    addOption(): void;
}
declare class RecipeOptionElement<T extends HasLevels> extends HTMLElement implements CustomElement {
    get $template(): string;
    _content: DocumentFragment;
    unlocked: HTMLAnchorElement;
    recipeImage: HTMLImageElement;
    recipeName: HTMLSpanElement;
    lockedContainer: HTMLDivElement;
    locked: HTMLSpanElement;
    recipeCost: HTMLSpanElement;
    multipleRecipes: HTMLDivElement;
    isUnlocked: boolean;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setRecipe(recipe: T, skill: AnySkill): void;
    baseSetLocked(): void;
    setLocked(recipe: T, skill: AnySkill): void;
    setUnlocked(recipe: T): void;
    updateForLevel(recipe: T, skill: AnySkill): void;
    updateTooltip(recipe: T, skill: AnySkill): void;
    updateRecipe(recipe: T, skill: AnySkill): void;
    updateRecipeCosts(recipe: T, skill: AnySkill): void;
    getRequiresTooltip(items: AnyItemQuantity[], currencies: CurrencyQuantity[]): string;
    localize(recipe: T, skill: AnySkill): void;
    isRecipeUnlocked(recipe: T, skill: AnySkill): boolean;
    /** Gets the ingredients used to make this recipe */
    getRecipeIngredients(recipe: T, skill: AnySkill): Costs;
}
declare class ItemRecipeOptionElement<T extends HasItem> extends RecipeOptionElement<T> {
    setUnlocked(recipe: T): void;
}
declare class SmithingRecipeOptionElement extends ItemRecipeOptionElement<SmithingRecipe> {
    setUnlocked(recipe: SmithingRecipe): void;
    getRecipeIngredients(recipe: SmithingRecipe): Costs;
}
declare class FletchingRecipeOptionElement extends ItemRecipeOptionElement<FletchingRecipe> {
    setUnlocked(recipe: FletchingRecipe): void;
    getRecipeIngredients(recipe: FletchingRecipe): Costs;
}
declare class CraftingRecipeOptionElement extends ItemRecipeOptionElement<CraftingRecipe> {
    setUnlocked(recipe: CraftingRecipe): void;
    getRecipeIngredients(recipe: CraftingRecipe): Costs;
}
declare class RunecraftingRecipeOptionElement extends ItemRecipeOptionElement<RunecraftingRecipe> {
    setUnlocked(recipe: RunecraftingRecipe): void;
    getRecipeIngredients(recipe: RunecraftingRecipe): Costs;
}
declare class HerbloreRecipeOptionElement extends RecipeOptionElement<HerbloreRecipe> {
    updateForLevel(recipe: HerbloreRecipe, skill: AnySkill): void;
    setUnlocked(recipe: HerbloreRecipe): void;
    getRecipeIngredients(recipe: HerbloreRecipe): Costs;
}
declare class AltMagicSpellOptionElement extends RecipeOptionElement<AltMagicSpell> {
    setUnlocked(recipe: AltMagicSpell): void;
    updateTooltip(recipe: AltMagicSpell, skill: AnySkill): void;
    getSpellTooltip(spell: AltMagicSpell): string;
}
declare class SummoningRecipeOptionElement extends ItemRecipeOptionElement<SummoningRecipe> {
    get $template(): string;
    recipeTier: HTMLSpanElement;
    constructor();
    setUnlocked(recipe: SummoningRecipe): void;
    setLocked(recipe: SummoningRecipe, skill: AnySkill): void;
    isRecipeUnlocked(recipe: SummoningRecipe, skill: Summoning): boolean;
    getRecipeIngredients(recipe: SummoningRecipe): Costs;
}
declare class SummoningSelectionTabElement extends RecipeSelectionTabElement<SummoningRecipe, SummoningRecipeOptionElement> {
    shardMessage: HTMLHeadingElement;
    constructor();
    connectedCallback(): void;
    localize(skill: AnySkill): void;
}
interface CategoryLike {
    name: string;
    media: string;
}
declare class CategoryMenuOptionElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    image: HTMLImageElement;
    name: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setOption<T extends CategoryLike>(option: T, callbackFn: () => boolean | void): void;
    highlight(): void;
    unhighlight(): void;
}
declare class CategoryMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    expandButton: HTMLButtonElement;
    expandText: HTMLSpanElement;
    expandDiv: HTMLDivElement;
    optionsContainer: HTMLUListElement;
    options: Map<CategoryLike, CategoryMenuOptionElement>;
    constructor();
    connectedCallback(): void;
    addOptions<T extends CategoryLike>(options: T[], expandText: string, callbackFn: (category: T) => void): void;
    highlightOption(option: CategoryLike): void;
    unhighlightOption(option: CategoryLike): void;
    onExpandButtonClick(): void;
    collapseOptions(): void;
}
declare class RealmedCategoryMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    expandButton: HTMLButtonElement;
    expandText: HTMLSpanElement;
    expandDiv: HTMLDivElement;
    mainContainer: HTMLUListElement;
    realmOptions: Map<Realm, RealmSelectOptionElement>;
    categoryOptions: Map<SkillCategory, CategoryMenuOptionElement>;
    constructor();
    connectedCallback(): void;
    addOptions<T extends SkillCategory>(categories: T[], expandText: string, callbackFn: (category: T) => void): void;
    updateRealmUnlock(realm: Realm): void;
    highlightOption(option: SkillCategory): void;
    unhighlightOption(option: SkillCategory): void;
    onExpandButtonClick(): void;
    collapseOptions(): void;
}
