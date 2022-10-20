declare class ShopCostsAndUnlock {
    protected purchase: ShopPurchase;
    protected game: Game;
    protected costContainer: HTMLElement;
    private requirementElements;
    private costElements;
    protected get buyQty(): number;
    constructor(purchase: ShopPurchase, game: Game, costContainer: HTMLElement);
    updatePurchaseRequirements(): void;
    /** Updates the gp, slayercoin, raidcoin and item costs */
    updateCostElements(): void;
    setToBuyLimit(): void;
    /** Important: When dereferencing this object, make sure to call this method first else memory leaks will ensue*/
    destroy(): void;
    private createPurchaseRequirements;
    private createCostElements;
    private setElementMet;
    private setUnlockElementMet;
    private updateCostElement;
    private getCostQty;
    private isGPCostMet;
    private isSlayerCoinCostMet;
    private isItemCostMet;
    private isRaidCoinCostMet;
    private getTextClass;
    private getSlayerTaskUnlockText;
    private createUnlockElement;
    private createImage;
    private createCostElement;
}
declare class ShopConfirmModalItem extends ShopCostsAndUnlock {
    private buyChargeQty?;
    parent: HTMLElement;
    constructor(purchase: ShopPurchase, game: Game);
    updateForQuantityChange(): void;
}
declare class ShopItem extends ShopCostsAndUnlock {
    private parent;
    private image;
    private itemChargeDescription?;
    private name;
    private buyChargeQty?;
    private description;
    private currentDescription;
    private mediaBody;
    protected container: HTMLDivElement;
    constructor(purchase: ShopPurchase, game: Game, parent: HTMLElement);
    destroy(): void;
    updateItemChargeDescription(): void;
    updateCurrentDescription(): void;
    /** Updates for a change in buyQty */
    updateForBuyQtyChange(): void;
}
declare class QuickBuyItem extends ShopItem {
    private quantityMenu;
    constructor(purchase: ShopPurchase, game: Game, parent: HTMLElement);
}
interface MouseEvent {
    fromBuyQuantityDropdown?: boolean;
}
declare class ShopBuyQuantityMenu {
    private parent;
    private container;
    private button;
    private input;
    constructor(parent: HTMLElement, buyOptions?: number[]);
    destroy(): void;
    private createBuyOption;
    private onCustomChange;
    private static menuCount;
}
declare type ShopUnlockElement = {
    parent: HTMLDivElement;
    cost: HTMLElement;
};
declare type ShopCostElement = {
    image: HTMLImageElement;
    cost: HTMLSpanElement;
    tooltip: TippyTooltip;
};
declare type GloveDescription = {
    container: HTMLDivElement;
    owned: HTMLElement;
    ownedCharges: HTMLElement;
};
declare type ShopTabItem = {
    item: ShopItem;
    container: HTMLDivElement;
};
declare class ShopTabMenu {
    private parent;
    private _category;
    private game;
    private items;
    private icon;
    private itemsContainer;
    private hideBlock;
    private isOpen;
    private purchases;
    private qtyMenu?;
    get category(): ShopCategory;
    constructor(parent: HTMLElement, _category: ShopCategory, game: Game);
    /** Updates the purchases that are currently available */
    updateItemSelection(): void;
    /** Updates each purchases costs */
    updatePurchaseCosts(): void;
    /** Updates each purchase for a change in buyQty */
    updateForBuyQtyChange(): void;
    /** Updates each purchase for a change in requirements */
    updatePurchaseRequirements(): void;
    /** Updates each purchase for a change in item charges */
    updateForItemChargeChange(): void;
    /** Updates a specific item in the categories current description */
    updateCurrentItemDescription(purchase: ShopPurchase): void;
    /** Returns 0 if item should not be shown, 1 if item should be shown normally, 2 if item should be shown at buy limit */
    private shouldShowItem;
    private createHeader;
    private toggle;
}
declare const enum ShowShopItem {
    DontShow = 0,
    Show = 1,
    ShowAtBuyLimit = 2
}
declare class ShopMenu {
    private game;
    private container;
    private categorySelects;
    tabs: Map<ShopCategory, ShopMenuTab>;
    private shownTabs;
    private quickbuyMenu;
    private confirmBuyItem?;
    private quickbuyContainer;
    private quickBuyButton;
    constructor(game: Game, containerID?: string, quickBuyID?: string);
    /** Creates a new tab for the given category */
    private createShopTab;
    updateItemPostPurchase(purchase: ShopPurchase): void;
    /** Updates the visible tabs for a change in cost quantity */
    updateForCostChange(): void;
    /** Updates the visible tabs for a change in requirements */
    updateForRequirementChange(): void;
    /** Updates the visible tabs for a change in item charges */
    updateForItemChargeChange(): void;
    /** Updates the visible tabs for a change in buy quantity */
    updateForBuyQtyChange(): void;
    /** Updates a tabs content, then sets it to visible */
    private showTab;
    /** Hides a tabs content */
    private hideTab;
    private showCategoryButton;
    private hideCategoryButton;
    showAllTabsButRaid(): void;
    showAllRaidTabs(): void;
    hideAllTabs(): void;
    showSingleTab(category: ShopCategory): void;
    changeQuickBuyItem(purchase: ShopPurchase): void;
    updateQuickBuy(): void;
    showConfirmBuyPrompt(purchase: ShopPurchase): void;
}
declare type ShopMenuTab = {
    menu: ShopTabMenu;
    container: HTMLDivElement;
};
