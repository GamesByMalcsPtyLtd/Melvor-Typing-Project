declare class FarmingCategoryButtonElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    categoryImage: HTMLImageElement;
    categoryName: HTMLDivElement;
    categoryDescription: HTMLDivElement;
    harvestReadyNotice: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCategory(category: FarmingCategory, farming: Farming): void;
    updateNotice(show: boolean): void;
}
declare class FarmingCategoryOptionsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    harvestAllButton: HTMLButtonElement;
    plantAllButton: HTMLButtonElement;
    compostAllButtons: HTMLButtonElement[];
    plantAllSelectedButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setCategory(category: FarmingCategory, game: Game): void;
}
declare class FarmingPlotElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    categoryName: HTMLHeadingElement;
    selectSeedDropdownButton: HTMLButtonElement;
    selectSeedDropdownImage: HTMLImageElement;
    selectSeedDropdownOptions: HTMLDivElement;
    plantSeedButton: HTMLButtonElement;
    seedImage: HTMLImageElement;
    growthStatus: HTMLElement;
    destroyButton: HTMLButtonElement;
    harvestButton: HTMLButtonElement;
    compostButtonContainer: HTMLUListElement;
    growthChance: HTMLHeadingElement;
    seedQuantities: Map<FarmingRecipe, HTMLSpanElement>;
    compostButtons: HTMLButtonElement[];
    compostTooltips?: TippyTooltip[];
    xpIcon: XpIconElement;
    abyssalXPIcon: AbyssalXpIconElement;
    masteryIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    compostStatus: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    destroyTooltips(): void;
    setPlot(plot: FarmingPlot, game: Game): void;
    updateGrowthChance(plot: FarmingPlot, farming: Farming): void;
    /** Updates the compost level + growth chance */
    updateCompost(plot: FarmingPlot): void;
    updateGrowthTime(plot: FarmingPlot, farming: Farming): void;
    /** Updates the display of the plot */
    updatePlotState(plot: FarmingPlot): void;
    updateSelectedSeed(plot: FarmingPlot): void;
    updateSeedQuantities(farming: Farming): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, seed?: FarmingRecipe): void;
    /** Updates the Abyssal XP */
    updateAbyssalGrants(xp: number, baseXP: number): void;
}
declare class LockedFarmingPlotElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    farmingLevelRequired: HTMLSpanElement;
    farmingAbyssalLevelRequiredContainer: HTMLParagraphElement;
    farmingAbyssalLevelRequired: HTMLSpanElement;
    unlockButton: HTMLButtonElement;
    itemIcons: ItemQuantityIconElement[];
    currencyIcons: CurrencyQuantityIconElement[];
    iconContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setPlot(plot: FarmingPlot, farming: Farming, game: Game): void;
    updateQuantities(game: Game): void;
    updateRequirements(plot: FarmingPlot, farming: Farming): void;
    updateUnlockButton(plot: FarmingPlot, farming: Farming): void;
}
declare class FarmingSeedSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    seedNotice: HTMLElement;
    seedButtonContainer: HTMLDivElement;
    recipeOwnedQuantity: HTMLSpanElement;
    recipeProductQuantity: HTMLSpanElement;
    recipeMastery: MasteryDisplayElement;
    recipeCategory: HTMLSpanElement;
    recipeLevel: HTMLSpanElement;
    recipeAbyssalLevel: HTMLSpanElement;
    recipeLevelCont: HTMLDivElement;
    recipeAbyssalLevelCont: HTMLDivElement;
    recipeQuantity: HTMLSpanElement;
    recipeInterval: HTMLSpanElement;
    plantButton: HTMLButtonElement;
    xpIcon: XpIconElement;
    abyssalXPIcon: AbyssalXpIconElement;
    masteryIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    realmSelect: RealmTabSelectElement;
    constructor();
    connectedCallback(): void;
    updateRealmUnlock(realm: Realm): void;
    createRealmOptions(category: FarmingCategory, game: Game, plot?: FarmingPlot): void;
    setSeedSelection(category: FarmingCategory, game: Game, realm: Realm, plot?: FarmingPlot): void;
    setSelectedRecipe(recipe: FarmingRecipe, game: Game, plot?: FarmingPlot): void;
    setUnselectedRecipe(): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, seed?: FarmingRecipe): void;
    updateAbyssalGrants(xp: number, baseXP: number): void;
}
