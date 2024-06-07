declare class CookingMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    upgradeImage: HTMLImageElement;
    upgradeName: HTMLHeadingElement;
    selectRecipeButton: HTMLButtonElement;
    selectedRecipeContainer: HTMLDivElement;
    productImage: HTMLImageElement;
    productCount: HTMLElement;
    productName: HTMLHeadingElement;
    productHealing: HTMLSpanElement;
    requires: RequiresBoxElement;
    grants: GrantsBoxElement;
    mastery: MasteryDisplayElement;
    haves: HavesBoxElement;
    bonuses: CookingBonusBoxElement;
    activeCookButton: HTMLButtonElement;
    activeCookInterval: HTMLElement;
    passiveCookButton: HTMLButtonElement;
    passiveCookInterval: HTMLElement;
    stockPileIcon: CookingStockpileIconElement;
    stockPileButton: HTMLButtonElement;
    productQty: number;
    productTooltip?: TippyTooltip;
    progressBar: ProgressBarElement;
    intervalTooltipEl: IntervalIconTooltipElement;
    intervalTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    init(category: CookingCategory, game: Game): void;
    setStockPile(item: AnyItemQuantity | undefined): void;
    updateUpgrade(category: CookingCategory): void;
    setSelected(recipe: CookingRecipe): void;
    getOwnedTooltipContent(normalQty: number, percectQty: number): string;
    setSelectedRecipe(recipe: CookingRecipe | undefined, cooking: Cooking, game: Game): void;
    setRecipeRates(recipe: CookingRecipe, cooking: Cooking): void;
    setBonusValues(values: CookingBonusValues, costReduction: number, costReductionSources: HTMLSpanElement[], additionalPrimaryQuantity: number, additionalPrimaryQuantitySources: HTMLSpanElement[]): void;
    updateQuantities(recipe: CookingRecipe, game: Game): void;
    setProgressPassive(): void;
    renderActiveProgress(timer: Timer): void;
    stopProgressBar(): void;
}
declare class CookingRecipeSelectionElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    productImage: HTMLImageElement;
    masteryLevel: HTMLSpanElement;
    masteryPercent: HTMLElement;
    productName: HTMLSpanElement;
    selectButton: HTMLButtonElement;
    iconContainer: HTMLDivElement;
    cookingXP: HTMLSpanElement;
    healingAmount: HTMLSpanElement;
    intervalIcon: IntervalIconElement;
    foodModifiersCont: HTMLDivElement;
    foodModifiers: HTMLDivElement;
    perfectFoodModifiersCont: HTMLDivElement;
    perfectFoodModifiers: HTMLDivElement;
    quantityIcons: ItemQuantityIconElement[];
    constructor();
    connectedCallback(): void;
    setRecipe(recipe: CookingRecipe, cooking: Cooking, game: Game): void;
    /** Updates the interval, XP, hitpoints */
    updateRates(recipe: CookingRecipe): void;
    /** Updates the modifiers provided by the food */
    updateModifiers(recipe: CookingRecipe): void;
    /** Updates the mastery level and percent */
    updateMastery(recipe: CookingRecipe, cooking: Cooking): void;
    /** Updates the quanties of the recipe costs */
    updateQuantities(game: Game): void;
}
declare class LockedCookingRecipeElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    lockedText: HTMLHeadingElement;
    constructor();
    connectedCallback(): void;
    setRecipe(recipe: CookingRecipe): void;
}
