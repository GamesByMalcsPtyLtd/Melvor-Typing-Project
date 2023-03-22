/// <reference types="sortablejs" />
declare class BankItemIcon extends HTMLElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    image: HTMLImageElement;
    quantity: HTMLElement;
    item?: AnyItem;
    tooltip?: TippyTooltip;
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
    _content: DocumentFragment;
    tabContainer: HTMLUListElement;
    spaceFractionLabel: HTMLSpanElement;
    spaceFraction: HTMLSpanElement;
    bankValueLabel: HTMLSpanElement;
    tabValueLabel: HTMLSpanElement;
    sellAllButton: HTMLAnchorElement;
    sellAllText: HTMLSpanElement;
    unlockAllButton: HTMLAnchorElement;
    unlockAllText: HTMLSpanElement;
    lockAllButton: HTMLAnchorElement;
    lockAllText: HTMLSpanElement;
    paneContainer: HTMLDivElement;
    tabs: BankTabElements[];
    /** All item icons that are currently present in the bank */
    itemIcons: Map<AnyItem, BankItemIcon>;
    isSorting: boolean;
    tabValueTooltip?: TippyTooltip;
    bankValueTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    getFromTabID(from: HTMLElement): number;
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
    getValueTemplate(value: number): StringDictionary<string>;
    selectTab(tabID: number, bank: Bank): void;
    updateBankValue(bank: Bank): void;
    updateBankSpace(bank: Bank): void;
}
/** Dropdown menu for selecting a tab in the bank */
declare class BankTabDropdownMenu extends HTMLElement {
    _content: DocumentFragment;
    tabImages: HTMLImageElement[];
    openButton: HTMLButtonElement;
    optionsContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    /**
     * Initializes the menu, creating new options
     * @param bank The bank object linked to this menu
     * @param optionSelectCallback The callback function when a tab option is selected
     */
    initialize(bank: Bank, optionSelectCallback: (tabID: number) => void): void;
    updateTabImages(bank: Bank): void;
}
declare class BankOptionsMenu extends HTMLElement {
    _content: DocumentFragment;
    sortButton: HTMLButtonElement;
    moveModeButton: HTMLButtonElement;
    sellModeButton: HTMLButtonElement;
    searchBar: HTMLInputElement;
    clearSearchButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    initialize(bank: Bank): void;
    setSearchNone(): void;
    setSearchNormal(): void;
}
declare class BankMoveModeMenu extends HTMLElement {
    _content: DocumentFragment;
    tabSelection: BankTabDropdownMenu;
    confirmMoveButton: HTMLButtonElement;
    selectionCount: HTMLSpanElement;
    tabSelectedToMove: number;
    constructor();
    connectedCallback(): void;
    initialize(bank: Bank): void;
    updateSelectionCount(bank: Bank): void;
}
declare class BankSellModeMenu extends HTMLElement {
    _content: DocumentFragment;
    confirmSellButton: HTMLButtonElement;
    selectionCount: HTMLSpanElement;
    selectionValue: HTMLSpanElement;
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
    inputElement: HTMLInputElement;
    get quantity(): number;
    _sliderValue: number;
    sliderInstance: JQuery<HTMLElement>;
    sliderMode: BankRangeSliderMode;
    sliderMin: number;
    sliderMax: number;
    customOnChange: (newValue: number, modeReset: boolean) => void;
    constructor(inputElement: HTMLInputElement);
    onSliderChange(newValue: number): void;
    checkSliderMode(newValue: number): boolean;
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
    _content: DocumentFragment;
    noneSelectedMessage: HTMLDivElement;
    selectedItemContainer: HTMLDivElement;
    itemImage: HTMLImageElement;
    itemLockButton: HTMLButtonElement;
    itemLockIcon: HTMLElement;
    quantityBadge: HTMLElement;
    handednessBadge: HTMLElement;
    itemName: HTMLSpanElement;
    itemDescription: HTMLElement;
    itemHealing: HTMLHeadingElement;
    viewStatsButton: HTMLHeadingElement;
    specialAttackContainer: HTMLDivElement;
    specialAttackList: HTMLDivElement;
    upgradeContainer: HTMLDivElement;
    upgradeText: HTMLHeadingElement;
    upgradeButton: HTMLButtonElement;
    upgradeDropdownButton: HTMLButtonElement;
    upgradeOptionsContainer: HTMLDivElement;
    readContainer: HTMLDivElement;
    readButton: HTMLButtonElement;
    friendContainer: HTMLDivElement;
    findFriendButton: HTMLButtonElement;
    equipItemContainer: HTMLDivElement;
    equipSlotImage: HTMLImageElement;
    equipSlotName: HTMLSpanElement;
    equipSetButtonContainer: HTMLDivElement;
    equipReplacementContainer: HTMLElement;
    equipQuantitySliderContainer: HTMLDivElement;
    equipQuantitySlider: BankRangeSlider;
    equipSlotButtonContainer: HTMLElement;
    equipFoodContainer: HTMLDivElement;
    foodQuantitySlider: BankRangeSlider;
    equipFoodButton: HTMLButtonElement;
    openItemContainer: HTMLDivElement;
    viewChestContentsButton: HTMLHeadingElement;
    openItemQuantitySlider: BankRangeSlider;
    openItemButton: HTMLButtonElement;
    buryItemContainer: HTMLDivElement;
    buryItemPrayerPoints: HTMLHeadingElement;
    buryItemQuantitySlider: BankRangeSlider;
    buryItemButton: HTMLButtonElement;
    buryItemTotalPoints: HTMLHeadingElement;
    claimTokenContainer: HTMLDivElement;
    claimTokenQuantitySlider: BankRangeSlider;
    claimTokenButton: HTMLButtonElement;
    useEightContainer: HTMLDivElement;
    useEightButton: HTMLButtonElement;
    singleItemSalePrice: HTMLHeadingElement;
    sellItemQuantitySlider: BankRangeSlider;
    customSellQuantity: HTMLInputElement;
    sellAllButOneButton: HTMLButtonElement;
    sellAllButton: HTMLButtonElement;
    sellItemButton: HTMLButtonElement;
    totalItemSalePrice: HTMLSpanElement;
    sizeElements: HTMLElement[];
    equipToSetButtons: HTMLButtonElement[];
    handednessTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setUnselected(): void;
    setItem(bankItem: BankItem, bank: Bank): void;
    createEquipToSetButtons(player: Player, item: EquipmentItem): void;
    updateEquipToSetHighlight(setID: number): void;
    createReplaceItemHTML(item: EquipmentItem, player: Player): string;
    createEquipItemButtons(item: EquipmentItem, player: Player): void;
    updateItemQuantity(bankItem: BankItem): void;
    /** Performs the necessary updates to the equip item display when player equipment changes */
    updateEquipReplacement(item: EquipmentItem, player: Player): void;
    setItemLocked(isLocked: boolean): void;
    getColClasses(attributeValue: string | null): string[][];
    attributeChangedCallback(name: BankSelectedItemAttribute, oldValue: string | null, newValue: string | null): void;
    static get observedAttributes(): BankSelectedItemAttribute[];
    /** Classes for specifying the menus column sizes */
    static colSizeClasses: StringDictionary<string[][]>;
}
/** Component for displaying bank item stats */
declare class BankItemStatsMenu extends HTMLElement {
    _content: DocumentFragment;
    selectedItemContainer: HTMLDivElement;
    itemImage: HTMLImageElement;
    itemLockButton: HTMLButtonElement;
    itemLockIcon: HTMLElement;
    quantityBadge: HTMLElement;
    itemName: HTMLHeadingElement;
    itemDescription: HTMLHeadingElement;
    itemHealing: HTMLHeadingElement;
    viewStatsButton: HTMLHeadingElement;
    statsContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setUnselected(): void;
    setItem(bankItem: BankItem, game: Game): void;
    updateItemQuantity(bankItem: BankItem): void;
    setItemLocked(isLocked: boolean): void;
}
declare class BankMinibarToggle extends HTMLElement {
    _content: DocumentFragment;
    skillToggle: HTMLInputElement;
    skillLabel: HTMLLabelElement;
    skillImage: HTMLImageElement;
    constructor();
    connectedCallback(): void;
    setSkill(skill: AnySkill): void;
    setItem(item: EquipmentItem, skill: AnySkill, game: Game): void;
}
/** Component for displaying bank item settings */
declare class BankItemSettingsMenu extends HTMLElement {
    _content: DocumentFragment;
    selectedItemContainer: HTMLDivElement;
    selectTabIconDropdown: BankTabDropdownMenu;
    minibarSettingsContainer: HTMLDivElement;
    minibarSettingsToggles: HTMLDivElement;
    unlockAllButton: HTMLButtonElement;
    lockAllButton: HTMLButtonElement;
    minibarToggles: Map<AnySkill, BankMinibarToggle>;
    constructor();
    connectedCallback(): void;
    initialize(game: Game): void;
    setItem(bankItem: BankItem, game: Game): void;
    setUnselected(): void;
}
/** Component to manage the three selected item menus in a tab-pane fashion */
declare class BankSideBarMenu extends HTMLElement {
    _content: DocumentFragment;
    itemImage: HTMLImageElement;
    selectedMenu: BankSelectedItemMenu;
    statsMenu: BankItemStatsMenu;
    settingsMenu: BankItemSettingsMenu;
    sidebarCloseButton: HTMLButtonElement;
    paneContainer: HTMLDivElement;
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
