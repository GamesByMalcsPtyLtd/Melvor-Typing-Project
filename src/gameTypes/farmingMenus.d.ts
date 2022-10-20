declare class FarmingCategoryButtonElement extends HTMLElement {
    private _content;
    private link;
    private categoryImage;
    private categoryName;
    private categoryDescription;
    private harvestReadyNotice;
    constructor();
    connectedCallback(): void;
    setCategory(category: FarmingCategory, farming: Farming): void;
    updateNotice(show: boolean): void;
}
declare class FarmingCategoryOptionsElement extends HTMLElement {
    private _content;
    private harvestAllButton;
    private plantAllButton;
    private compostAllButtons;
    private plantAllSelectedButton;
    constructor();
    connectedCallback(): void;
    setCategory(category: FarmingCategory, game: Game): void;
}
declare class FarmingPlotElement extends HTMLElement {
    private _content;
    private categoryName;
    private selectSeedDropdownButton;
    private selectSeedDropdownImage;
    private selectSeedDropdownOptions;
    private plantSeedButton;
    private seedImage;
    private growthStatus;
    private compostProgress;
    private destroyButton;
    private harvestButton;
    private compostButtonContainer;
    private growthChance;
    private seedQuantities;
    private compostButtons;
    private compostTooltips?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private destroyTooltips;
    setPlot(plot: FarmingPlot, game: Game): void;
    /** Updates the compost level + growth chance */
    updateCompost(plot: FarmingPlot, farming: Farming): void;
    updateGrowthTime(plot: FarmingPlot, farming: Farming): void;
    /** Updates the display of the plot */
    updatePlotState(plot: FarmingPlot): void;
    updateSelectedSeed(plot: FarmingPlot): void;
    private updateSeedQuantities;
}
declare class LockedFarmingPlotElement extends HTMLElement {
    private _content;
    private farmingLevelRequired;
    private gpCost;
    private unlockButton;
    constructor();
    connectedCallback(): void;
    setPlot(plot: FarmingPlot, farming: Farming): void;
}
declare class FarmingSeedSelectElement extends HTMLElement {
    private _content;
    private seedNotice;
    private seedButtonContainer;
    private recipeOwnedQuantity;
    private recipeProductQuantity;
    private recipeMastery;
    private recipeCategory;
    private recipeLevel;
    private recipeQuantity;
    private recipeInterval;
    private plantButton;
    constructor();
    connectedCallback(): void;
    setSeedSelection(category: FarmingCategory, game: Game, plot?: FarmingPlot): void;
    setSelectedRecipe(recipe: FarmingRecipe, game: Game, plot?: FarmingPlot): void;
    setUnselectedRecipe(): void;
}
