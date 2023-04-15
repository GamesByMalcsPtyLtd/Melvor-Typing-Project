declare class ShopCostsAndUnlock {
    purchase: ShopPurchase;
    game: Game;
    costContainer: HTMLElement;
    requirementElements: ShopUnlockElement[];
    costElements: ShopCostElement[];
    buyLimit?: HTMLSpanElement;
    get buyQty(): number;
    constructor(purchase: ShopPurchase, game: Game, costContainer: HTMLElement);
    updatePurchaseRequirements(): void;
    /** Updates the gp, slayercoin, raidcoin and item costs */
    updateCostElements(): void;
    setToBuyLimit(): void;
    /** Important: When dereferencing this object, make sure to call this method first else memory leaks will ensue*/
    destroy(): void;
    createPurchaseRequirements(): void;
    createCostElements(): void;
    setElementMet(element: HTMLElement, met: boolean): void;
    setUnlockElementMet(element: ShopUnlockElement, met: boolean): void;
    updateCostElement(element: ShopCostElement, met: boolean, amount: number): void;
    getCostQty(amount: ShopCostAmount): number;
    isGPCostMet(amount: number): boolean;
    isSlayerCoinCostMet(amount: number): boolean;
    isItemCostMet(item: AnyItem, baseQty: number): boolean;
    isRaidCoinCostMet(amount: number): boolean;
    getTextClass(met: boolean): "text-success" | "text-danger";
    getSlayerTaskUnlockText(requirement: SlayerTaskRequirement): string;
    createUnlockElement(costNodes: (string | Node)[], met: boolean): ShopUnlockElement;
    createImage(media: string): HTMLImageElement;
    createCostElement(media: string, qty: number, met: boolean, tooltipText: string): ShopCostElement;
}
declare class ShopConfirmModalItem extends ShopCostsAndUnlock {
    buyChargeQty?: HTMLDivElement;
    parent: HTMLElement;
    constructor(purchase: ShopPurchase, game: Game);
    updateForQuantityChange(): void;
}
declare class ShopItem extends ShopCostsAndUnlock {
    parent: HTMLElement;
    image: HTMLImageElement;
    itemChargeDescription?: GloveDescription;
    name: HTMLDivElement;
    buyChargeQty?: HTMLDivElement;
    description: HTMLDivElement;
    currentDescription: HTMLDivElement;
    mediaBody: HTMLDivElement;
    container: HTMLDivElement;
    constructor(purchase: ShopPurchase, game: Game, parent: HTMLElement);
    destroy(): void;
    updateItemChargeDescription(): void;
    updateCurrentDescription(): void;
    /** Updates for a change in buyQty */
    updateForBuyQtyChange(): void;
}
declare class QuickBuyItem extends ShopItem {
    quantityMenu: ShopBuyQuantityMenu;
    constructor(purchase: ShopPurchase, game: Game, parent: HTMLElement);
}
interface MouseEvent {
    fromBuyQuantityDropdown?: boolean;
}
declare class ShopBuyQuantityMenu {
    parent: HTMLElement;
    container: HTMLDivElement;
    button: HTMLButtonElement;
    input: HTMLInputElement;
    constructor(parent: HTMLElement, buyOptions?: number[]);
    destroy(): void;
    createBuyOption(value: number): HTMLAnchorElement;
    onCustomChange(): void;
    static menuCount: number;
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
    parent: HTMLElement;
    _category: ShopCategory;
    game: Game;
    items: Map<ShopPurchase, ShopTabItem>;
    icon: HTMLElement;
    itemsContainer: HTMLDivElement;
    hideBlock: HTMLDivElement;
    isOpen: boolean;
    purchases: ShopPurchase[];
    qtyMenu?: ShopBuyQuantityMenu;
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
    shouldShowItem(purchase: ShopPurchase): ShowShopItem;
    createHeader(): HTMLElement;
    toggle(): void;
}
declare const enum ShowShopItem {
    DontShow = 0,
    Show = 1,
    ShowAtBuyLimit = 2
}
declare class ShopMenu {
    game: Game;
    container: HTMLElement;
    categorySelects: Map<ShopCategory, HTMLLIElement>;
    tabs: Map<ShopCategory, ShopMenuTab>;
    shownTabs: Set<ShopMenuTab>;
    quickbuyMenu: QuickBuyItem;
    confirmBuyItem?: ShopConfirmModalItem;
    quickbuyContainer: HTMLElement;
    quickBuyButton: HTMLElement;
    constructor(game: Game, containerID?: string, quickBuyID?: string);
    /** Creates a new tab for the given category */
    createShopTab(category: ShopCategory): {
        menu: ShopTabMenu;
        container: HTMLDivElement;
    };
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
    showTab(category: ShopCategory): void;
    /** Hides a tabs content */
    hideTab(category: ShopCategory): void;
    showCategoryButton(category: ShopCategory): void;
    hideCategoryButton(category: ShopCategory): void;
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
