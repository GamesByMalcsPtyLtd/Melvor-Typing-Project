/// <reference types="sortablejs" />
declare const DRAG_DELAY_MS = 201;
declare class BankItemIconElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    image: HTMLImageElement;
    quantity: HTMLElement;
    hasUpgrade: HTMLImageElement;
    hasDowngrade: HTMLImageElement;
    hasDamageType: HTMLImageElement;
    item?: AnyItem;
    tooltip?: TippyTooltip;
    dragTimer: number;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setItem(bank: Bank, bankItem: BankItem): void;
    updateQuantity(bankItem: BankItem, enableAccessibility: boolean): void;
    setBorder(useDefaultBorder: boolean, isLocked: boolean): void;
    setGlow(isGlowing: boolean): void;
    addSelectionBorder(selectionMode: BankSelectionMode): void;
    removeSelectionBorder(selectionMode: BankSelectionMode): void;
    onTouchStart(): void;
    onTouchEnd(): void;
    onTouchMove(e: TouchEvent): void;
    clearDragTimer(): void;
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
declare class BankTabMenuElement extends HTMLElement implements CustomElement {
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
    itemIcons: Map<AnyItem, BankItemIconElement>;
    isSorting: boolean;
    tabValueTooltips: TippyTooltip[];
    bankValueTooltips: TippyTooltip[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    destroyTabTooltips(): void;
    destroyBankTooltips(): void;
    getFromTabID(from: HTMLElement): number;
    /** Initializes the element with a bank object */
    initialize(bank: Bank): void;
    /** Loads the tab menus, after the save has loaded */
    loadTabs(bank: Bank): void;
    loadAllItems(bank: Bank): void;
    updateTabCount(bank: Bank): void;
    addItemToEndofTab(bank: Bank, bankItem: BankItem): void;
    removeItemFromTab(item: AnyItem): void;
    sortTabByOrder(tabID: number, order: string[]): void;
    toggleScrollableTabs(enableScrolling: boolean): void;
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
    searchResultTabs?: Set<number>;
    /** Updates the bank search based on a search result */
    updateForSearchResult(foundItems: Set<AnyItem>, foundTabs: Set<number>, hideTabs: boolean): void;
    updateTabsForSearch(foundTabs: Set<number>, hideTabs: boolean): void;
    /** Makes all bank items visible */
    showAllItems(): void;
    /** Sets the specified tabs image to the media string provided */
    setTabImage(tabID: number, media: string): void;
    selectTab(tabID: number, bank: Bank): void;
    updateBankValue(bank: Bank): void;
    updateBankSpace(bank: Bank): void;
    setTabValue(value: SparseNumericMap<Currency>): void;
    setBankValue(value: SparseNumericMap<Currency>): void;
    setValueLabel(label: HTMLElement, value: SparseNumericMap<Currency>): TippyTooltip[];
}
/** Dropdown menu for selecting a tab in the bank */
declare class BankTabDropdownMenuElement extends HTMLElement implements CustomElement {
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
    updateTabCount(bank: Bank, optionSelectCallback: (tabID: number) => void): void;
    updateTabImages(bank: Bank): void;
}
declare class BankOptionsMenuElement extends HTMLElement implements CustomElement {
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
declare class BankMoveModeMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    tabSelection: BankTabDropdownMenuElement;
    confirmMoveButton: HTMLButtonElement;
    selectionCount: HTMLSpanElement;
    tabSelectedToMove: number;
    constructor();
    connectedCallback(): void;
    initialize(bank: Bank): void;
    updateSelectionCount(bank: Bank): void;
}
declare class BankSellModeMenuElement extends HTMLElement implements CustomElement {
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
declare class BankSelectedItemMenuElement extends HTMLElement implements CustomElement {
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
    itemWikiLink: HTMLButtonElement;
    specialAttackContainer: HTMLDivElement;
    specialAttackList: HTMLDivElement;
    upgradeContainer: HTMLDivElement;
    upgradeText: HTMLSpanElement;
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
    viewChestContentsButton: HTMLAnchorElement;
    openItemQuantitySlider: BankRangeSlider;
    openItemButton: HTMLButtonElement;
    buryItemContainer: HTMLDivElement;
    buryItemHeader: HTMLHeadingElement;
    buryItemPrayerPoints: HTMLHeadingElement;
    buryItemQuantitySlider: BankRangeSlider;
    buryItemButton: HTMLButtonElement;
    buryItemTotalPoints: HTMLHeadingElement;
    claimTokenContainer: HTMLDivElement;
    claimTokenQuantitySlider: BankRangeSlider;
    claimTokenButton: HTMLButtonElement;
    useEightContainer: HTMLDivElement;
    useEightButton: HTMLButtonElement;
    singleItemSalePrice: HTMLSpanElement;
    sellItemQuantitySlider: BankRangeSlider;
    customSellQuantity: HTMLInputElement;
    sellAllButOneButton: HTMLButtonElement;
    sellAllButton: HTMLButtonElement;
    sellItemButton: HTMLButtonElement;
    totalSalePriceImage: HTMLImageElement;
    totalItemSalePrice: HTMLSpanElement;
    upgradeIcon: HTMLImageElement;
    downgradeIcon: HTMLImageElement;
    sizeElements: HTMLElement[];
    equipToSetButtons: HTMLButtonElement[];
    itemConsumable: HTMLHeadingElement;
    handednessTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setUnselected(): void;
    setItem(bankItem: BankItem, bank: Bank): void;
    createEquipToSetButtons(player: Player, item: EquipmentItem): void;
    updateEquipToSetHighlight(setID: number): void;
    createReplaceItemHTML(slot: EquipmentSlot, item: EquipmentItem, player: Player): string;
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
declare class BankItemStatsMenuElement extends HTMLElement implements CustomElement {
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
    itemConsumable: HTMLHeadingElement;
    constructor();
    connectedCallback(): void;
    setUnselected(): void;
    setItem(bankItem: BankItem, game: Game): void;
    updateItemQuantity(bankItem: BankItem): void;
    setItemLocked(isLocked: boolean): void;
}
declare class BankMinibarToggleElement extends HTMLElement implements CustomElement {
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
declare class BankItemSettingsMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    selectedItemContainer: HTMLDivElement;
    selectTabIconDropdown: BankTabDropdownMenuElement;
    minibarSettingsContainer: HTMLDivElement;
    minibarSettingsToggles: HTMLDivElement;
    unlockAllButton: HTMLButtonElement;
    lockAllButton: HTMLButtonElement;
    minibarToggles: Map<AnySkill, BankMinibarToggleElement>;
    constructor();
    connectedCallback(): void;
    initialize(game: Game): void;
    setItem(bankItem: BankItem, game: Game): void;
    setUnselected(): void;
}
/** Component to manage the three selected item menus in a tab-pane fashion */
declare class BankSidebarMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    itemImage: HTMLImageElement;
    selectedMenu: BankSelectedItemMenuElement;
    statsMenu: BankItemStatsMenuElement;
    settingsMenu: BankItemSettingsMenuElement;
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
declare class SummoningMaxHitElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    damageTypeMedia: HTMLImageElement;
    damageTypeName: HTMLSpanElement;
    maxHit: HTMLSpanElement;
    maxHitDiff: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setDamageType(damageType: DamageType): void;
    setValue(value: number): void;
    hideDiff(): void;
    setDiff(diff: number): void;
}
declare class ItemUpgradeMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    itemName: HTMLHeadingElement;
    itemImage: HTMLImageElement;
    itemDescription: HTMLSpanElement;
    specialAttackContainer: HTMLDivElement;
    specialAttackList: HTMLDivElement;
    equipRequirements: HTMLDivElement;
    noStatsMessage: HTMLDivElement;
    equipmentStatsContainer: HTMLDivElement;
    attackSpeedContainer: HTMLDivElement;
    summoningMaxHitContainer: HTMLDivElement;
    equipStats: Record<EquipStatKey, HTMLSpanElement>;
    equipStatDiffs: Record<EquipStatKey, HTMLSpanElement>;
    upgradeMasteryRequirement: HTMLSpanElement;
    upgradeMasteryLevel: HTMLSpanElement;
    currencyCosts: HTMLSpanElement;
    currencyTooltips: TippyTooltip[];
    itemCosts: HTMLSpanElement;
    itemTooltips: TippyTooltip[];
    upgradeButtons: {
        button: HTMLButtonElement;
        quantity: number;
    }[];
    resistancesContainer: HTMLDivElement;
    resistances: Map<DamageType, CharacterResistanceElement>;
    summoningMaxHits: Map<DamageType, SummoningMaxHitElement>;
    itemConsumable: HTMLHeadElement;
    constructor();
    connectedCallback(): void;
    initResistances(game: Game): void;
    setUpgrade(upgrade: ItemUpgrade, rootItem: AnyItem, bank: Bank, game: Game): void;
    /** Sets the equipment stats of the upgraded item, and a comparison of them to the root item */
    setEquipmentStats(upgradedItem: AnyItem, rootItem: AnyItem): void;
    /** Sets special attacks the upgraded item has */
    setSpecialAttacks(item: AnyItem): void;
    /** Sets requirements to equip the upgraded item */
    setEquipRequirements(item: AnyItem): void;
    /** Sets the mastery requirement when upgrading potions */
    setUpgradeMasteryRequirement(upgrade: ItemUpgrade, bank: Bank): void;
    setUpgradeCosts(upgrade: ItemUpgrade, bank: Bank, game: Game): void;
    setUpgradeButtons(upgrade: ItemUpgrade, bank: Bank): void;
}
declare function openBankSidebar(): void;
declare function closeBankSidebar(): void;
