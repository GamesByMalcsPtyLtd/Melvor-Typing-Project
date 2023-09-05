declare const MAX_QUICK_EQUIP_ITEMS = 3;
declare class Equipment implements EncodableObject, Serializable {
    game: Game;
    slots: EquipmentObject<EquipSlot>;
    slotArray: EquipSlot[];
    /** Maps item to slot types */
    slotMap: Map<EquipmentItem, SlotTypes>;
    /** Slots that provide stats and use charges */
    itemChargeUsers: Set<EquipSlot>;
    /** Class to manage the equiped items of players */
    constructor(game: Game);
    /** Determines if the equipped Weapon is 2-Handed */
    get isWeapon2H(): boolean;
    /** Returns the items that will be removed on equipping */
    getItemsAddedOnEquip(item: EquipmentItem, slot: SlotTypes | 'Default'): {
        item: EquipmentItem;
        quantity: number;
    }[];
    /** Returns the items that will be removed on unequipping */
    getItemsAddedOnUnequip(slot: SlotTypes): AnyItemQuantity;
    /** Gets the actually equipped slots to unequip when equipping an item */
    getSlotsToUnequip(itemToEquip: EquipmentItem, slot: SlotTypes): SlotTypes[];
    /** Gets the root slot of an occupied slot */
    getRootSlot(slotType: SlotTypes): SlotTypes;
    /** Performs the equipment process, removing equipped items */
    equipItem(itemToEquip: EquipmentItem, slot: SlotTypes, quantity: number): void;
    /** Performs the unequipment process, removing the item */
    unequipItem(slot: SlotTypes): void;
    forceAddAllToBank(): void;
    /** Determines if an itemID is equipped */
    checkForItem(item: EquipmentItem): boolean;
    checkForItemID(itemID: string): boolean;
    checkForItemIDs(itemIDs: (EquipmentItem | SynergyGroup)[]): boolean;
    getSlotOfItem(item: EquipmentItem): SlotTypes | 'None';
    getQuantityOfItem(item: EquipmentItem): number;
    addQuantityToSlot(slot: SlotTypes, quantity: number): void;
    /** Removes quantity from a slot. Returns true if slot is now empty and stats need updating */
    removeQuantityFromSlot(slot: SlotTypes, quantity: number): boolean;
    /** Adds the stats of the equipped items to an equipment stats object */
    addEquipmentStats(stats: EquipmentStats): void;
    /** Gets a snapshot of the equipment slots with quantities */
    getSnapshot(): Map<SlotTypes, AnyItemQuantity>;
    /** Renders the equipment */
    render(player: Player): void;
    renderQuantity(): void;
    updateTooltips(synergyDescription: string): void;
    getSynergyTooltipContent(synergyDescription: string): string;
    static getEquipStatDescription(type: EquipStatKey, value: number): string;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number, addOnFail?: boolean): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap, addOnFail?: boolean): void;
    convertFromOldFormat(oldData: OldEquipmentSet, idMap: NumericIDMap): void;
    /** Removes all equipment */
    unequipAll(): void;
}
/** Class for storing all data for a players equipment set */
declare class EquipmentSet implements EncodableObject {
    game: Game;
    equipment: Equipment;
    spellSelection: SpellSelection;
    prayerSelection: Set<ActivePrayer>;
    constructor(game: Game);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number, addOnFail?: boolean): void;
}
declare class EquipmentSetMenu {
    buttonClasses: string[];
    container: HTMLElement;
    buttons: EquipSetButton[];
    highlightedButton: number;
    constructor(containerID: string, buttonClasses: string[]);
    render(sets: EquipmentSet[], selected: number, player: Player): void;
    renderSets(sets: EquipmentSet[], player: Player): void;
    renderSelected(selected: number): void;
    setCallbacks(player: Player): void;
    getTooltipRow(media: string, name: string): string;
    getTooltipContent(set: EquipmentSet): string;
    addButton(text: string): EquipSetButton;
    createTooltip(parent: HTMLElement): TippyTooltip;
}
declare type EquipSetButton = {
    button: HTMLButtonElement;
    tooltip: TippyTooltip;
};
declare const equipmentSlotData: EquipmentObject<SlotData>;
interface EquipmentObject<T> {
    Helmet: T;
    Platebody: T;
    Platelegs: T;
    Boots: T;
    Weapon: T;
    Shield: T;
    Amulet: T;
    Ring: T;
    Gloves: T;
    Quiver: T;
    Cape: T;
    Passive: T;
    Summon1: T;
    Summon2: T;
    Consumable: T;
    Gem: T;
}
declare function getEquipmentImageElements(slotID: number): HTMLImageElement[];
declare function getEquipmentQtyElements(slot: SlotTypes): HTMLSpanElement[];
declare type SlotData = {
    id: number;
    allowQuantity: boolean;
    emptyMedia: string;
    emptyName: string;
    imageElements: HTMLImageElement[];
    qtyElements: HTMLSpanElement[];
    tooltips: EquipmentTooltipElement[];
    quickEquipTooltip: TippyTooltip[];
    /** If items equipped in this slot provide equipment stats */
    providesStats: boolean;
};
declare class EquipSlot {
    type: SlotTypes;
    emptyItem: EquipmentItem;
    /** Item that is in the slot. If Undefined no item is equipped. */
    item: EquipmentItem;
    /** If the item simply occopies the slot and does not contribute to stats */
    occupiedBy: SlotTypes | 'None';
    /** Quantity of the item equipped */
    quantity: number;
    /** Other slots occupied by this item */
    occupies: SlotTypes[];
    /** Stores the items which can be quick equipped to this slot */
    quickEquipItems: EquipmentItem[];
    get isEmpty(): boolean;
    get providesStats(): boolean;
    constructor(type: SlotTypes, emptyItem: EquipmentItem);
    isItem(item: EquipmentItem | SynergyGroup): boolean;
    setOccupied(item: EquipmentItem, slot: SlotTypes): void;
    setEquipped(item: EquipmentItem, quantity: number, occupies: SlotTypes[]): void;
    setEmpty(): void;
    /** Ensures the quickEquipItems array is the appropriate length */
    trimQuickEquipItems(): void;
}
declare class CombatQuickEquipMenu {
    player: Player;
    game: Game;
    constructor(player: Player, game: Game);
    /** Migrates the old quick equip data to the appropriate equipment sets */
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap, player: Player): void;
    getTooltipContent(slotID: number): HTMLElement;
    /** Sets quick equip slot to use item that is currently equipped */
    setItem(slotID: number, pos: number): void;
    /** Updates the image of the quick equip image with the one you set */
    setImage(pos: number, item: AnyItem): void;
}
declare class EquipmentTooltipElement extends HTMLElement {
    _content: DocumentFragment;
    itemName: HTMLSpanElement;
    itemDescription: HTMLElement;
    statContainer: HTMLElement;
    unset: boolean;
    lastItem?: EquipmentItem;
    constructor();
    connectedCallback(): void;
    setFromSlot(slot: EquipSlot): void;
    setItem(item: EquipmentItem, showStats: boolean): void;
    setEmpty(): void;
}
