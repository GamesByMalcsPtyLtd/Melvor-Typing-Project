declare class CookingMenu extends ContainedComponent {
    category: CookingCategory;
    container: HTMLDivElement;
    contentRow: HTMLDivElement;
    upgradeImage: HTMLImageElement;
    upgradeName: HTMLHeadElement;
    selectRecipeButton: HTMLButtonElement;
    selectedRecipeCont: HTMLDivElement;
    productQty: number;
    productImage: HTMLImageElement;
    productName: HTMLHeadElement;
    productHealing: HTMLSpanElement;
    productHP: HTMLSpanElement;
    productCount: HTMLElement;
    productTooltip: TippyTooltip;
    requires: RequiresBox;
    grants: GrantsBox;
    haves: HavesBox;
    mastery: MasteryDisplay;
    bonuses: CookingBonusBox;
    activeCookButton: HTMLButtonElement;
    activeCookInterval: HTMLElement;
    passiveCookButton: HTMLButtonElement;
    passiveCookInterval: HTMLElement;
    progressBar: ProgressBar;
    stockPileButton: HTMLButtonElement;
    stockPileIcon: CookingStockpileIcon;
    constructor(category: CookingCategory, parentID: string);
    activeCookCallback(): void;
    passiveCookCallback(): void;
    stockPileCallback(): void;
    localize(): void;
    setStockPile(item: AnyItemQuantity | undefined): void;
    updateUpgrade(): void;
    setRecipeSelectButtonDisabled(disable: boolean): void;
    setSelected(): void;
    getOwnedTooltipContent(normalQty: number, percectQty: number): string;
    setSelectedRecipe(recipe: CookingRecipe | undefined, cooking: Cooking): void;
    setRecipeRates(recipe: CookingRecipe, cooking: Cooking): void;
    setBonusValues(preservation: number, doubling: number, perfectCook: number, success: number): void;
    updateQuantities(recipe: CookingRecipe): void;
    setProgressPassive(): void;
    renderActiveProgress(timer: Timer): void;
    stopProgressBar(): void;
}
declare class CookingRecipeSelection extends HTMLElement {
    _content: DocumentFragment;
    productImage: HTMLImageElement;
    masteryLevel: HTMLSpanElement;
    masteryPercent: HTMLElement;
    productName: HTMLSpanElement;
    selectButton: HTMLButtonElement;
    iconContainer: HTMLDivElement;
    cookingXP: HTMLSpanElement;
    healingAmount: HTMLSpanElement;
    intervalIcon: IntervalIcon;
    quantityIcons: ItemQtyIcon[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setRecipe(recipe: CookingRecipe, cooking: Cooking): void;
    /** Updates the interval, XP, hitpoints */
    updateRates(recipe: CookingRecipe): void;
    /** Updates the mastery level and percent */
    updateMastery(recipe: CookingRecipe, cooking: Cooking): void;
    /** Updates the quanties of the recipe costs */
    updateQuantities(recipe: CookingRecipe): void;
}
declare class LockedCookingRecipe extends HTMLElement {
    _content: DocumentFragment;
    lockedText: HTMLHeadingElement;
    constructor();
    connectedCallback(): void;
    setRecipe(recipe: CookingRecipe): void;
}
