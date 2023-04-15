declare const enum BankSelectionMode {
    None = 0,
    MoveItems = 1,
    SellItems = 2
}
interface ItemUpgradeData {
    itemCosts: IDQuantity[];
    gpCost: number;
    scCost: number;
    rootItemIDs: string[];
    upgradedItemID: string;
    isDowngrade: boolean;
}
declare class ItemUpgrade {
    upgradedItem: AnyItem;
    itemCosts: AnyItemQuantity[];
    rootItems: AnyItem[];
    gpCost: number;
    scCost: number;
    isDowngrade: boolean;
    constructor(data: ItemUpgradeData, game: Game);
}
declare class BankRenderQueue {
    /** The items in the bank that currently need updating */
    items: Set<AnyItem>;
    /** Tabs that need their icon image to be updated */
    tabIcons: Set<number>;
    /** If the bank search must update due to items being added/removed from the bank */
    bankSearch: boolean;
    /** If the banks total value and tab value requires an update */
    bankValue: boolean;
    /** If the space used in the bank requires an update */
    space: boolean;
}
/** Class for the bank */
declare class Bank implements EncodableObject {
    game: Game;
    maxTabs: number;
    baseSlots: number;
    renderQueue: BankRenderQueue;
    /** Save State Property. The Set of items that are currently locked in the bank */
    lockedItems: Set<AnyItem>;
    /** Quantity of items that were attempted to be added to the bank but did not fit. Used for offline progress */
    lostItems: Map<AnyItem, number>;
    /** Flags if new items have been added to the bank between renders */
    newItemsAdded: boolean;
    /** Map of the items stored in the bank, related to the item they store */
    items: Map<AnyItem, BankItem>;
    /** Save State Property. Array of banktabs containing an array of BankItems. Stores the position of items in the bank. */
    itemsByTab: BankItem[][];
    /** Save State Property. Stores which tab an item should default to in the bank. */
    defaultItemTabs: Map<AnyItem, number>;
    /** Save State Property. Stores the user customized order in which to sort the bank */
    customSortOrder: AnyItem[];
    /** Save State Property. Set of items which have been newly added to the bank and require a glow */
    glowingItems: Set<AnyItem>;
    /** Save State Property. Map of tabId to items to use for bank tab icon */
    tabIcons: Map<number, AnyItem>;
    /** The current item selection mode. Controls how items interact when clicked on. */
    itemSelectionMode: BankSelectionMode;
    /** The current set of bank items that are selected in a group */
    selectedItems: Set<BankItem>;
    /** The current item that is selected and viewed in the bank */
    selectedBankItem: BankItem | undefined;
    /** Map of root items for upgrades to an upgrade */
    itemUpgrades: Map<AnyItem, ItemUpgrade[]>;
    /** Tab that is currently selected */
    selectedBankTab: number;
    /** Stores the next items that should come from a chest in the even that the bank fills up while opening an item */
    nextOpenedItems: Map<OpenableItem, AnyItemQuantity>;
    /** Stores the array used for searching the bank */
    searchArray: BankSearch[];
    defaultSortOrder: NamespacedArray<AnyItem>;
    currentSearchQuery: string;
    /** If Eight is on cooldown */
    eightDelay: boolean;
    /** Dummy items that are force added to the bank post save load */
    postLoadItems: Map<DummyItem, number>;
    get slotsSelected(): number;
    get itemCountSelected(): number;
    get selectedItemValue(): number;
    /** Returns an array of all items present in the bank that are currently unlocked */
    get unlockedItemArray(): AnyItem[];
    constructor(game: Game, maxTabs?: number, baseSlots?: number);
    registerSortOrder(order: InsertOrder[]): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Converts old global save variables to object properties */
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
    addDummyItemOnLoad(itemID: string, quantity: number): void;
    /** Method called on save file load */
    onLoad(): void;
    /** Sets rendering updates when modifiers change */
    renderModifierChange(): void;
    /** @deprecated Will be removed in the next major update. Use renderModifierChange instead */
    onModifierChange(): void;
    /** Sets rendering updates when equipment changes */
    onEquipmentChange(): void;
    isItemInPosition(item: AnyItem, tab: number, tabPosition: number): boolean;
    registerItemUpgrades(data: ItemUpgradeData[]): void;
    isItemSelected(item: AnyItem): boolean;
    /** Checks if an item is in the bank */
    hasItem(item: AnyItem): boolean;
    /** Checks if an item is in the bank, and is unlocked */
    hasUnlockedItem(item: AnyItem): boolean;
    getTabMedia(tabID: number): string;
    /** Renders the bank as per the updates required */
    render(): void;
    updateSpaceElement(element: Element): void;
    /** Sets rendering queues for updating the quantities on other pages */
    queueQuantityUpdates(item: AnyItem): void;
    getItemDefaultTab(item: AnyItem): number;
    /** Returns the sale price of an item inclusive of modifiers */
    getItemSalePrice(item: AnyItem, quantity?: number): number;
    getTabValue(tabID: number): number;
    getBankValue(): number;
    getSnapShot(): Map<AnyItem, number>;
    getHistory(): AnyItemQuantity[];
    /** Adds the given quantity to all items currently in the bank */
    addQuantityToExistingItems(quantity: number): void;
    /** Removes all items from the bank */
    empty(): void;
    moveItemInTab(tabID: number, oldTabPosition: number, newTabPosition: number): void;
    moveItemToNewTab(oldTabID: number, newTabID: number, oldTabPosition: number): void;
    checkForClueChasers(): void;
    /** Returns the maximum number of slots in the bank */
    get maximumSlots(): number;
    /** Returns the number of slots that are occupied */
    get occupiedSlots(): number;
    /**
     * @description Attempts to add the item with the given ID to the bank. Throws an error if the item is not registered.
     * @param itemID The id of the item to add.
     * @param quantity The quantity of the item to add
     * @param logLost If the item should be logged as lost if it does not fit
     * @param found If the item should contribute to item statistics
     * @param ignoreSpace If the item should ignore conventional bank space limits
     * @param notify Whether to show a notification when the item is added
     * @param itemSource The source of the item, where it came from
     * @returns True if the item was successfully added to the bank
     */
    addItemByID(itemID: string, quantity: number, logLost: boolean, found: boolean, ignoreSpace?: boolean, notify?: boolean, itemSource?: string): void;
    /**
     * @description Adds the given quantity of the item to the bank
     * @param item The item to add
     * @param quantity The quantity of the item to add. Must be positive.
     * @param logLost If the item should be logged as lost if it does not fit
     * @param found If the item should contribute to item statistics
     * @param ignoreSpace If the item should ignore conventional bank space limits
     * @param notify Whether to show a notification when the item is added
     * @param itemSource The source of the item, where it came from
     * @returns True if the item was successfully added to the bank
     */
    addItem(item: AnyItem, quantity: number, logLost: boolean, found: boolean, ignoreSpace?: boolean, notify?: boolean, itemSource?: string): boolean;
    /**
     * Removes the given quantity of the item from the bank
     * @param item The item to remove
     * @param quantity The quantity of the item to remove
     * @param removeItemCharges If the item is removed from the bank entirely, whether to erase any ItemCharges the item has
     */
    removeItemQuantity(item: AnyItem, quantity: number, removeItemCharges: boolean): void;
    /**
     * Attempts to remove the item with the given ID from the bank. Throws an error if the item is not registered.
     * @param itemID The id of the item to remove
     * @param quantity The quantity of the item to remove
     * @param removeItemCharges If the item is removed from the bank entirely, whether to erase any ItemCharges the item has
     */
    removeItemQuantityByID(itemID: string, quantity: number, removeItemCharges: boolean): void;
    /** Gets the quantity of an item from the bank */
    getQty(item: AnyItem): number;
    filterItems(predicate: (bankItem: BankItem) => boolean): AnyItem[];
    /** Checks for item costs */
    checkForItems(costs: AnyItemQuantity[]): boolean;
    /** Consumes item costs */
    consumeItems(costs: AnyItemQuantity[]): void;
    /** Checks if the items will fit in the bank */
    willItemsFit(items: AnyItemQuantity[]): boolean;
    /** Callback function for when the "Toggle Sell Mode" button is clicked */
    moveItemModeOnClick(): void;
    /** Callback function for when the "Move items to new Tab" button is clicked */
    sellItemModeOnClick(): void;
    selectItemOnClick(item: AnyItem): void;
    /** Callback function for when an item is doubleclicked in the bank */
    onItemDoubleClick(item: AnyItem): void;
    /** Toggles if an item should be locked in the bank */
    toggleItemLock(bankItem: BankItem): void;
    /**
     * Reassigns the bank item positions for the specified tab.
     * @param tabID The ID of the tab to reassign positions for
     * @param startingPosition The initial position in the tab item array to start from
     */
    reassignBankItemPositions(tabID: number, startingPosition: number): void;
    /** Toggles the bankItem from being in the selectedItems set, and updates the UI appropriately */
    toggleItemSelected(bankItem: BankItem): void;
    deselectBankItem(): void;
    toggleItemForSelection(bankItem: BankItem): void;
    toggleItemForMoving(bankItem: BankItem): void;
    toggleItemForSelling(bankItem: BankItem): void;
    setItemSelectionMode(selectionMode: BankSelectionMode): void;
    /** Disables the current item selection mode if any */
    disableItemSelectionMode(): void;
    moveSelectedItemsToTab(newTabID: number): void;
    /** Callback function for selling all selected items */
    sellAllSelectedItems(): void;
    /** Processes the sale of all selected items */
    processSellSelectedItems(): void;
    /** Callback function for selling all the items in the selected bank tab */
    sellUnlockedItemsOnClick(): void;
    processSelectedTabSale(): void;
    /** Callback function for setting all items in the selected tab to match the locked input */
    setLockOfSelectedTab(locked: boolean): void;
    /** Callback function for when the (un)lock all button is clicked. Fires a confirmation modal first. */
    setLockOfAllItemsOnClick(locked: boolean): void;
    /** Callback function for setting all items in the bank to match the locked input */
    setLockOfAllItems(locked: boolean): void;
    fireBulkItemSaleConfirmation(totalGP: number, count: number, onConfirm: VoidFunction): void;
    /** Callback function for when the sort button is clicked */
    sortButtonOnClick(): void;
    storeCustomSortOrder(): void;
    /** Final method for selling an item */
    processItemSale(item: AnyItem, quantity: number): void;
    /** Callback function for when the sell button is clicked */
    sellItemOnClick(item: AnyItem, quantity: number): void;
    /** Callback function for when the bury item button is clicked */
    buryItemOnClick(item: BoneItem, quantity: number): void;
    /** Callback function for when the open item button is clicked */
    openItemOnClick(item: OpenableItem, quantity: number): void;
    /** Processes the actual opening of an item */
    processItemOpen(item: OpenableItem, quantity: number): void;
    /** Callback function for when the read item button is clicked */
    readItemOnClick(item: ReadableItem): void;
    /** Callback function for when the claim token button is clicked */
    claimItemOnClick(item: TokenItem, quantity: number): void;
    getMaxUpgradeQuantity(upgrade: ItemUpgrade): number;
    checkUpgradePotionRequirement(upgrade: ItemUpgrade): boolean;
    /** Displays the item upgrade modal and sets it to display the upgrade */
    fireItemUpgradeModal(upgrade: ItemUpgrade, rootItem: AnyItem): void;
    /** Callback function for when the upgrade item button is clicked */
    upgradeItemOnClick(upgrade: ItemUpgrade, upgradeQuantity: number): void;
    /** Callback function for when the use eight button is clicked */
    useEightOnClick(eight: Item): void;
    /** Callback function for when the find a friend button is clicked */
    findAFriendOnClick(cracker: Item): void;
    /** Updates the search array */
    updateSearchArray(): void;
    /** Callback function for when the bank search query changes */
    onBankSearchChange(query: string): void;
    /** Callback function for selecting a tab icon option */
    setSelectedItemAsTabIcon(tabID: number): void;
    /** Callback function for changing the default sort setting */
    changeDefaultSort(sortSetting: BankSortOrderSetting): void;
    /** Callback function for changing the border setting */
    updateItemBorders(): void;
    /** Test function. Validates the tab and tabPosition properties of all bank items */
    validateItemOrders(): void;
}
/** Class for an individual bank item */
declare class BankItem {
    /** The bank this item belongs to */
    bank: Bank;
    /** The item stored in the bank */
    item: AnyItem;
    /** The quantity of the item */
    quantity: number;
    /** The tab the item belongs to */
    tab: number;
    /** The current position of the item in it's tab */
    tabPosition: number;
    /** Returns the sale value of a single item */
    get itemSellValue(): number;
    /** Returns the total stack value of the item */
    get stackValue(): number;
    /** Returns if the item is currently locked */
    get locked(): boolean;
    /** Returns if the item should have a green glovw in the bank */
    get isGlowing(): boolean;
    constructor(
    /** The bank this item belongs to */
    bank: Bank, 
    /** The item stored in the bank */
    item: AnyItem, 
    /** The quantity of the item */
    quantity: number, 
    /** The tab the item belongs to */
    tab: number, 
    /** The current position of the item in it's tab */
    tabPosition: number);
}
/** Special variant of the bank with stripped down rendering for golbin raid */
declare class GolbinRaidBank extends Bank {
    render(): void;
}
