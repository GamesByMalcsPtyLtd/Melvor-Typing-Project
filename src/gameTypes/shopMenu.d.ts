declare class ShopCostsAndUnlock {
    private category;
    protected id: number;
    protected costContainer: HTMLElement;
    protected data: ShopCategoryData;
    private unlockElements;
    private costElements;
    protected get buyQty(): number;
    constructor(category: ShopCategory, id: number, costContainer: HTMLElement);
    updateUnlockElements(): void;
    updateCostElements(): void;
    setToBuyLimit(): void;
    /** Important: When dereferencing this object, make sure to call this method first else memory leaks will ensue*/
    destroy(): void;
    private createUnlockElements;
    private createCostElements;
    private setElementMet;
    private setUnlockElementMet;
    private updateCostElement;
    private getCostQty;
    private isSkillRequirementMet;
    private isDungeonRequirementMet;
    private isSlayerTaskRequirementMet;
    private isCompletionRequirementMet;
    private isGPCostMet;
    private isSlayerCoinCostMet;
    private isItemCostMet;
    private isRaidCoinCostMet;
    private createCustomUnlock;
    private createSkillUnlock;
    private createDungeonUnlock;
    private getTextClass;
    private getSlayerTaskUnlockText;
    private createSlayerTaskUnlock;
    private createCompletionUnlock;
    private createUnlockElement;
    private createImage;
    private createCostElement;
}
declare class ShopConfirmModalItem extends ShopCostsAndUnlock {
    private buyChargeQty?;
    parent: HTMLElement;
    constructor(category: ShopCategory, id: number);
    updateForQuantityChange(): void;
}
declare class ShopItem extends ShopCostsAndUnlock {
    private parent;
    private image;
    private gloveDescription?;
    private name;
    private buyChargeQty?;
    private description;
    private mediaBody;
    protected container: HTMLDivElement;
    constructor(category: ShopCategory, id: number, parent: HTMLElement);
    destroy(): void;
    updateGloveDescription(): void;
    updateForQuantityChange(): void;
}
declare class QuickBuyItem extends ShopItem {
    private quantityMenu;
    constructor(category: ShopCategory, id: number, parent: HTMLElement);
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
    private items;
    private icon;
    private itemsContainer;
    private hideBlock;
    private isOpen;
    private data;
    private qtyMenu?;
    get category(): ShopCategory;
    constructor(parent: HTMLElement, _category: ShopCategory);
    updateItemSelection(): void;
    updateItemsForQuantity(): void;
    updateItemsForUnlock(): void;
    updateGloveItems(): void;
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
    private container;
    tabs: Record<ShopCategory, ShopMenuTab>;
    private shownTabs;
    private quickbuyMenu;
    private confirmBuyItem?;
    private quickbuyContainer;
    constructor(containerID?: string, quickBuyID?: string);
    private createShopTab;
    updateTabsForQuantity(): void;
    updateTabsForUnlock(): void;
    showTab(category: ShopCategory): void;
    showAllTabsButRaid(): void;
    hideAllTabs(): void;
    showSingleTab(category: ShopCategory): void;
    changeQuickBuyItem(category: ShopCategory, id: number): void;
    updateQuickBuy(): void;
    showConfirmBuyPrompt(category: ShopCategory, id: number): void;
}
declare type ShopMenuTab = {
    menu: ShopTabMenu;
    container: HTMLDivElement;
};
