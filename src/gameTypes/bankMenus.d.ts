/// <reference types="sortablejs" />
declare class BankItemIcon extends HTMLElement {
    private _content;
    private link;
    private image;
    private quantity;
    private item?;
    private tooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setItem(bank: Bank, bankItem: BankItem): void;
    updateQuantity(bankItem: BankItem, enableAccessibility: boolean): void;
    setBorder(useDefaultBorder: boolean, isLocked: boolean): void;
    setGlow(isGlowing: boolean): void;
    addSelectionBorder(selectionMode: BankSelectionMode): void;
    removeSelectionBorder(selectionMode: BankSelectionMode): void;
}
interface BankTabElements {
    /** Parent Element for the tab */
    tab: HTMLLIElement;
    /** HTML Link element for the tab */
    tabLink: HTMLAnchorElement;
    /** Image element for the tab */
    tabImage: HTMLImageElement;
    /** Parent element that contains the itemContainer */
    pane: HTMLDivElement;
    /** HTML Element that contains bank-item-icons */
    itemContainer: HTMLDivElement;
    /** Sortable instance fo the itemContainer */
    containerSortable: Sortable;
}
declare class BankTabMenu extends HTMLElement {
    private _content;
    private tabContainer;
    private spaceFractionLabel;
    private spaceFraction;
    private bankValueLabel;
    private tabValueLabel;
    private sellAllButton;
    private sellAllText;
    private unlockAllButton;
    private unlockAllText;
    private lockAllButton;
    private lockAllText;
    private paneContainer;
    private tabs;
    /** All item icons that are currently present in the bank */
    itemIcons: Map<AnyItem, BankItemIcon>;
    private isSorting;
    private tabValueTooltip?;
    private bankValueTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getFromTabID;
    /** Initializes the element with a bank object */
    initialize(bank: Bank): void;
    loadAllItems(bank: Bank): void;
    addItemToEndofTab(bank: Bank, bankItem: BankItem): void;
    removeItemFromTab(item: AnyItem): void;
    sortTabByOrder(tabID: number, order: string[]): void;
    /** Test function for validating DOM order matches game bank order */
    validateItemOrder(): void;
    /** Adds a selection border to the bank-item-icon corresponding to it*/
    setItemSelected(item: AnyItem, selectMode: BankSelectionMode): void;
    /** Removes a selection border from the bank-item-icon corresponding to it */
    setItemUnselected(item: AnyItem, selectMode: BankSelectionMode): void;
    setItemsUnselected(items: Set<BankItem>, selectMode: BankSelectionMode): void;
    moveIconsToNewTab(itemsToMove: BankItem[], newTabID: number): void;
    updateItemLockBorder(bankItem: BankItem, useDefaultBorder: boolean): void;
    updateItemGlow(bankItem: BankItem): void;
    /** Updates the bank search based on a search result */
    updateForSearchResult(foundItems: Set<AnyItem>, foundTabs: Set<number>): void;
    /** Makes all bank items visible */
    showAllItems(): void;
    /** Sets the specified tabs image to the media string provided */
    setTabImage(tabID: number, media: string): void;
    private getValueTemplate;
    private selectTab;
    updateBankValue(bank: Bank): void;
    updateBankSpace(bank: Bank): void;
}
/** Dropdown menu for selecting a tab in the bank */
declare class BankTabDropdownMenu extends HTMLElement {
    private _content;
    private tabImages;
    private openButton;
    private optionsContainer;
    constructor();
    connectedCallback(): void;
    /**
     * Initializes the menu, creating new options
     * @param bank The bank object linked to this menu
     * @param optionSelectCallback The callback function when a tab option is selected
     */
    initialize(bank: Bank, optionSelectCallback: (tabID: number) => void): void;
    private updateTabImages;
}
declare class BankOptionsMenu extends HTMLElement {
    private _content;
    private sortButton;
    private moveModeButton;
    private sellModeButton;
    private searchBar;
    private clearSearchButton;
    constructor();
    connectedCallback(): void;
    initialize(bank: Bank): void;
    setSearchNone(): void;
    setSearchNormal(): void;
}
declare class BankMoveModeMenu extends HTMLElement {
    private _content;
    private tabSelection;
    private confirmMoveButton;
    private selectionCount;
    private tabSelectedToMove;
    constructor();
    connectedCallback(): void;
    initialize(bank: Bank): void;
    updateSelectionCount(bank: Bank): void;
}
declare class BankSellModeMenu extends HTMLElement {
    private _content;
    private confirmSellButton;
    private selectionCount;
    private selectionValue;
    constructor();
    connectedCallback(): void;
    initialize(bank: Bank): void;
    updateSelectionValues(bank: Bank): void;
}
declare const enum BankRangeSliderMode {
    Custom = 0,
    AllButOne = 1,
    All = 2
}
/** Wrapper class for ion-range-slider for the purposes of bank quantity sliders */
declare class BankRangeSlider {
    private inputElement;
    get quantity(): number;
    private _sliderValue;
    private sliderInstance;
    private sliderMode;
    private sliderMin;
    private sliderMax;
    private customOnChange;
    constructor(inputElement: HTMLInputElement);
    private onSliderChange;
    private checkSliderMode;
    /** Sets the slider to behave in special modes */
    setSliderMode(mode: BankRangeSliderMode): void;
    /** Sets the slider range based on the quantity of the bank item provided */
    setSliderRange(bankItem: BankItem): void;
    /** Sets the slider position to the specified value */
    setSliderPosition(value: number): void;
    /** Sets custom callback function to execute when slider changes values */
    setOnChange(onChange: (newValue: number, modeReset: boolean) => void): void;
}
declare type BankSelectedItemAttribute = 'col-size';
/** Component for displaying bank item information and interaction options */
declare class BankSelectedItemMenu extends HTMLElement {
    private _content;
    private noneSelectedMessage;
    private selectedItemContainer;
    private itemImage;
    private itemLockButton;
    private itemLockIcon;
    private quantityBadge;
    private handednessBadge;
    private itemName;
    private itemDescription;
    private itemHealing;
    private viewStatsButton;
    private specialAttackContainer;
    private specialAttackList;
    private upgradeContainer;
    private upgradeText;
    private upgradeButton;
    private upgradeDropdownButton;
    private upgradeOptionsContainer;
    private readContainer;
    private readButton;
    private friendContainer;
    private findFriendButton;
    private equipItemContainer;
    private equipSlotImage;
    private equipSlotName;
    private equipSetButtonContainer;
    private equipReplacementContainer;
    private equipQuantitySliderContainer;
    private equipQuantitySlider;
    private equipSlotButtonContainer;
    private equipFoodContainer;
    private foodQuantitySlider;
    private equipFoodButton;
    private openItemContainer;
    private viewChestContentsButton;
    private openItemQuantitySlider;
    private openItemButton;
    private buryItemContainer;
    private buryItemPrayerPoints;
    private buryItemQuantitySlider;
    private buryItemButton;
    private buryItemTotalPoints;
    private claimTokenContainer;
    private claimTokenQuantitySlider;
    private claimTokenButton;
    private useEightContainer;
    private useEightButton;
    private singleItemSalePrice;
    private sellItemQuantitySlider;
    private customSellQuantity;
    private sellAllButOneButton;
    private sellAllButton;
    private sellItemButton;
    private totalItemSalePrice;
    private sizeElements;
    private equipToSetButtons;
    private handednessTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setUnselected(): void;
    setItem(bankItem: BankItem, bank: Bank): void;
    private createEquipToSetButtons;
    private updateEquipToSetHighlight;
    private createReplaceItemHTML;
    private createEquipItemButtons;
    updateItemQuantity(bankItem: BankItem): void;
    /** Performs the necessary updates to the equip item display when player equipment changes */
    updateEquipReplacement(item: EquipmentItem, player: Player): void;
    setItemLocked(isLocked: boolean): void;
    private getColClasses;
    attributeChangedCallback(name: BankSelectedItemAttribute, oldValue: string | null, newValue: string | null): void;
    static get observedAttributes(): BankSelectedItemAttribute[];
    /** Classes for specifying the menus column sizes */
    private static colSizeClasses;
}
/** Component for displaying bank item stats */
declare class BankItemStatsMenu extends HTMLElement {
    private _content;
    private selectedItemContainer;
    private itemImage;
    private itemLockButton;
    private itemLockIcon;
    private quantityBadge;
    private itemName;
    private itemDescription;
    private itemHealing;
    private viewStatsButton;
    private statsContainer;
    constructor();
    connectedCallback(): void;
    setUnselected(): void;
    setItem(bankItem: BankItem, game: Game): void;
    updateItemQuantity(bankItem: BankItem): void;
    setItemLocked(isLocked: boolean): void;
}
declare class BankMinibarToggle extends HTMLElement {
    private _content;
    private skillToggle;
    private skillLabel;
    private skillImage;
    constructor();
    connectedCallback(): void;
    setSkill(skill: AnySkill): void;
    setItem(item: EquipmentItem, skill: AnySkill, game: Game): void;
}
/** Component for displaying bank item settings */
declare class BankItemSettingsMenu extends HTMLElement {
    private _content;
    private selectedItemContainer;
    private selectTabIconDropdown;
    private minibarSettingsContainer;
    private minibarSettingsToggles;
    private unlockAllButton;
    private lockAllButton;
    private minibarToggles;
    constructor();
    connectedCallback(): void;
    initialize(game: Game): void;
    setItem(bankItem: BankItem, game: Game): void;
    setUnselected(): void;
}
/** Component to manage the three selected item menus in a tab-pane fashion */
declare class BankSideBarMenu extends HTMLElement {
    private _content;
    private itemImage;
    private selectedMenu;
    private statsMenu;
    private settingsMenu;
    private sidebarCloseButton;
    private paneContainer;
    constructor();
    connectedCallback(): void;
    toggleSidebarMode(isSidebar: boolean): void;
    updateItemQuantity(bankItem: BankItem): void;
    updateEquipItem(item: EquipmentItem, game: Game): void;
    setItemLocked(isLocked: boolean): void;
    setItem(bankItem: BankItem, game: Game): void;
    setUnselected(): void;
    initialize(game: Game): void;
}
declare function openBankSidebar(): void;
declare function closeBankSidebar(): void;
