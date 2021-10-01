declare class MasteryDisplay {
    private parent;
    private container;
    private level;
    private xp;
    private progressBar;
    private iconTooltip;
    constructor(parent: HTMLElement, barHeight: string);
    destroy(): void;
    setMastery(skill: SkillID): void;
    localize(): void;
}
declare class DropDown {
    private parent;
    private container;
    private button;
    private optionsContainer;
    constructor(parent: HTMLElement, id: string, buttonClasses: string[], optionsClasses: string[], scroll?: boolean, maxOptionsHeight?: number);
    setButtonText(text: string): void;
    setButtonCallback(callback: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
    addOption(optionContent: Node[], callback: VoidFunction): void;
    clearOptions(): void;
}
interface IconBox<T extends InfoIcon> {
    text: HTMLHeadingElement;
    iconContainer: HTMLDivElement;
    icons: T[];
    dash: HTMLSpanElement;
}
declare class ArtisanMenu {
    private parent;
    private container;
    private nameRow;
    private productBlock;
    private productImage;
    private productQuantity;
    private createBlock;
    private createText;
    private productName;
    protected productDescription: HTMLElement;
    private selectedText;
    private viewStatsText;
    private buffsContainer;
    private productPreservation;
    private productDoubling;
    private masteryCol;
    private mastery;
    private ingredientsCol;
    private dropDownCont;
    private recipeDropdown;
    private recipeDropdownItems;
    private requires;
    private haves;
    private productsCol;
    private produces;
    private productIcon;
    private grants;
    private xpIcon;
    private masteryXPIcon;
    private masteryPoolIcon;
    private creationCol;
    private createButton;
    private interval;
    private progressBar;
    private progressTimestamp;
    private progressInterval;
    private skillID;
    protected productID: ItemID;
    protected noneSelected: boolean;
    constructor(containerID: string, skillID: SkillID);
    private createIconBox;
    localize(): void;
    setSelected(): void;
    setIngredients(ingredients: ItemQuantity[]): void;
    setProduct(itemID: ItemID, qty: number): void;
    updateQuantities(): void;
    updateGrants(xp: number, masteryXP: number, poolXP: number): void;
    updateChances(preserveChance: number, doublingChance: number): void;
    updateInterval(interval: number): void;
    setCreateCallback(callback: VoidFunction): void;
    startProgressBar(interval: number): void;
    stopProgressBar(): void;
    updateProgressBar(): void;
    hideRecipeDropdown(): void;
    showRecipeDropdown(): void;
    setRecipeDropdown(altRecipeIngredients: ItemQuantity[][], selectCallback: (recipeID: number) => VoidFunction): void;
}
declare class HerbloreArtisanMenu extends ArtisanMenu {
    private tierImages;
    private tierTooltips;
    private tierContainer;
    private tierText;
    constructor();
    private setProductTier;
    private setPotionDescription;
    setSelected(): void;
    setProduct(itemID: ItemID, qty: number): void;
    localize(): void;
}
declare const enum NonItemIDs {
    XP = -1,
    MASTERY_XP = -2,
    MASTERY_POOL_XP = -3,
    GP = -4,
    SLAYER_COINS = -5,
    INTERVAL = -6,
    HEALING = -7
}
