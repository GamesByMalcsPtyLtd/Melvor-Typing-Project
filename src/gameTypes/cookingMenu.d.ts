declare class CookingMenu extends ContainedComponent {
    private category;
    protected container: HTMLDivElement;
    private contentRow;
    private upgradeImage;
    private upgradeName;
    private selectRecipeButton;
    private selectedRecipeCont;
    private productQty;
    private productImage;
    private productName;
    private productHealing;
    private productHP;
    private productCount;
    private productTooltip;
    private requires;
    private grants;
    private haves;
    private mastery;
    private bonuses;
    private activeCookButton;
    private activeCookInterval;
    private passiveCookButton;
    private passiveCookInterval;
    private progressBar;
    private stockPileButton;
    private stockPileIcon;
    constructor(category: CookingCategory, parentID: string);
    private activeCookCallback;
    private passiveCookCallback;
    private stockPileCallback;
    localize(): void;
    setStockPile(item: AnyItemQuantity | undefined): void;
    updateUpgrade(): void;
    setRecipeSelectButtonDisabled(disable: boolean): void;
    setSelected(): void;
    private getOwnedTooltipContent;
    setSelectedRecipe(recipe: CookingRecipe | undefined, cooking: Cooking): void;
    setRecipeRates(recipe: CookingRecipe, cooking: Cooking): void;
    setBonusValues(preservation: number, doubling: number, perfectCook: number, success: number): void;
    updateQuantities(recipe: CookingRecipe): void;
    setProgressPassive(): void;
    renderActiveProgress(timer: Timer): void;
    stopProgressBar(): void;
}
declare class CookingRecipeSelection extends HTMLElement {
    private _content;
    private productImage;
    private masteryLevel;
    private masteryPercent;
    private productName;
    private selectButton;
    private iconContainer;
    private cookingXP;
    private healingAmount;
    private intervalIcon;
    private quantityIcons;
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
    private _content;
    private lockedText;
    constructor();
    connectedCallback(): void;
    setRecipe(recipe: CookingRecipe): void;
}
