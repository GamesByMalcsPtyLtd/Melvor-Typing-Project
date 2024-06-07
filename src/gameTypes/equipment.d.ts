interface EquipmentGridPosition {
    /** The column in the grid. Must be between [0, 4] */
    col: number;
    /** The row in the grid. Must be an integer. 0 is where the Helmet slot is placed. */
    row: number;
}
interface EquipmentSlotData extends IDData {
    /** If this slot allows a quantity of an item to be equipped to it */
    allowQuantity: boolean;
    /** The icon to display when the slot is empty */
    emptyMedia: string;
    /** The name to show when the slot is empty */
    emptyName: string;
    /** If items equipped in this slot provide equipment stats */
    providesEquipStats: boolean;
    /** Determines the position of this slot in the equipment grid */
    gridPosition: EquipmentGridPosition;
    /** Optional. Alternative positions to place this slot in if the initial grid position is already used. */
    alternativePositions?: EquipmentGridPosition[];
    /** Optional. Requirements the player must meet to use this slot. Ignored in Golbin Raid. */
    requirements?: AnyRequirementData[];
}
interface EquipmentSlotModificationData extends IDData {
    /** If this slot allows a quantity of an item to be equipped to it */
    allowQuantity?: boolean;
    /** If items equipped in this slot provide equipment stats */
    providesEquipStats?: boolean;
    /** Determines the position of this slot in the equipment grid */
    gridPosition?: EquipmentGridPosition;
    /** Optional. Requirements the player must meet to use this slot. Ignored in Golbin Raid. */
    requirements?: {
        add?: AnyRequirementData[];
        remove?: string[];
    };
}
declare class EquipmentSlot extends NamespacedObject implements SoftDataDependant<EquipmentSlotData> {
    allowQuantity: boolean;
    providesEquipStats: boolean;
    get emptyMedia(): string;
    get emptyName(): string;
    gridPosition: EquipmentGridPosition;
    requirements: AnyRequirement[];
    _emptyMedia: string;
    _emptyName: string;
    constructor(namespace: DataNamespace, data: EquipmentSlotData, game: Game);
    registerSoftDependencies(data: EquipmentSlotData, game: Game): void;
    applyDataModification(modData: EquipmentSlotModificationData, game: Game): void;
    /** Map of grid rows -> grid columns -> slots */
    static gridPositions: Map<number, Set<number>>;
    static gridColRange: number[];
    static gridRowRange: number[];
    static checkGridColValid(col: number): void;
    static isGridPositionFree(position: EquipmentGridPosition): boolean;
    static getValidGridPosition(data: EquipmentSlotData): EquipmentGridPosition;
    static setGridPosition(position: EquipmentGridPosition): void;
    static freeGridPosition(position: EquipmentGridPosition): void;
    static readonly SUMMONING_SYNERGY_POSITION: Readonly<EquipmentGridPosition>;
    static init(): void;
    static getGridSize(): {
        cols: {
            min: number;
            max: number;
        };
        rows: {
            min: number;
            max: number;
        };
    };
}
declare const MAX_QUICK_EQUIP_ITEMS = 3;
declare class Equipment implements EncodableObject, Serializable {
    game: Game;
    equippedItems: Record<string, EquippedItem>;
    equippedArray: EquippedItem[];
    /** Maps EquipmentItems to EquipmentSlots */
    itemSlotMap: Map<EquipmentItem, EquipmentSlot>;
    /** Slots that provide stats and use charges */
    itemChargeUsers: Set<EquippedItem>;
    /** Class to manage the equipped items of players */
    constructor(game: Game);
    /** Determines if the equipped Weapon is 2-Handed */
    get isWeapon2H(): boolean;
    get equipMenuMedia(): string;
    /** Returns the items that will be removed on equipping */
    getItemsAddedOnEquip(item: EquipmentItem, slot?: EquipmentSlot): {
        item: EquipmentItem;
        quantity: number;
    }[];
    /** Returns the items that will be removed on unequipping */
    getItemsAddedOnUnequip(slot: EquipmentSlot): AnyItemQuantity;
    /** Gets the actually equipped slots to unequip when equipping an item */
    getSlotsToUnequip(itemToEquip: EquipmentItem, slot: EquipmentSlot): EquipmentSlot[];
    /** Gets the root slot of an occupied slot */
    getRootSlot(slot: EquipmentSlot): EquipmentSlot;
    /** Performs the equipment process, removing equipped items */
    equipItem(itemToEquip: EquipmentItem, slot: EquipmentSlot, quantity: number): void;
    /** Performs the unequipment process, removing the item */
    unequipItem(slot: EquipmentSlot): void;
    /** Sets the given slots quick equip item in the position to the currently equipped item */
    setQuickEquip(slot: EquipmentSlot, pos: number): void;
    setQuickEquipItems(slot: EquipmentSlot, items: EquipmentItem[]): void;
    forceAddAllToBank(): void;
    /** Determines if an itemID is equipped */
    checkForItem(item: EquipmentItem): boolean;
    checkForItemID(itemID: string): boolean;
    checkForItemIDs(itemIDs: (EquipmentItem | SynergyGroup)[]): boolean;
    getSlotOfItem(item: EquipmentItem): EquipmentSlot | undefined;
    getQuantityOfItem(item: EquipmentItem): number;
    getEquippedInSlot(slot: EquipmentSlot): EquippedItem;
    getItemInSlot(slotID: string): EquipmentItem;
    getQuantityInSlot(slotID: string): number;
    isSlotEmpty(slotID: string): boolean;
    getQuickEquipItem(slot: EquipmentSlot, pos: number): EquipmentItem;
    isQuickEquipEmpty(slot: EquipmentSlot, pos: number): boolean;
    isQuickEquipValid(slot: EquipmentSlot, pos: number): boolean;
    addQuantityToSlot(slot: EquipmentSlot, quantity: number): void;
    /** Removes quantity from a slot. Returns true if slot is now empty and stats need updating */
    removeQuantityFromSlot(slotID: string, quantity: number): boolean;
    /** Adds the stats of the equipped items to an equipment stats object */
    addEquipmentStats(stats: EquipmentStats): void;
    /** Gets a snapshot of the equipment slots with quantities */
    getSnapshot(): Map<EquipmentSlot, AnyItemQuantity>;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number, addOnFail?: boolean): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap, addOnFail?: boolean): void;
    convertFromOldFormat(oldData: OldEquipmentSet, idMap: NumericIDMap): void;
    /** Removes all equipment */
    unequipAll(): void;
    static getEquipStatDescription(stat: AnyEquipStat): string;
    static getSummoningMaxHitStatDescription(damageType: DamageType, value: number): string;
    static getEquipResistStatDescription(damageType: DamageType, value: number): string;
    /** Maps the old IDs for equipment slots to the new ones */
    static slotIDMap: Record<number, EquipmentSlotIDs>;
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
declare class EquippedItem {
    slot: EquipmentSlot;
    emptyItem: EquipmentItem;
    /** Gets the media to display in the slot */
    get media(): string;
    /** Item that is in the slot. */
    item: EquipmentItem;
    /** If the item simply occopies the slot and does not contribute to stats */
    occupiedBy?: EquipmentSlot;
    /** Quantity of the item equipped */
    quantity: number;
    /** Other slots occupied by this item */
    occupies: EquipmentSlot[];
    /** Stores the items which can be quick equipped to this slot */
    quickEquipItems: EquipmentItem[];
    get isEmpty(): boolean;
    get providesStats(): boolean;
    constructor(slot: EquipmentSlot, emptyItem: EquipmentItem);
    isItem(item: EquipmentItem | SynergyGroup): boolean;
    setOccupied(item: EquipmentItem, slot: EquipmentSlot): void;
    setEquipped(item: EquipmentItem, quantity: number, occupies: EquipmentSlot[]): void;
    setEmpty(): void;
    isQuickEquipEmpty(pos: number): boolean;
    setQuickEquip(pos: number): void;
    /** Ensures the quickEquipItems array is the appropriate length */
    trimQuickEquipItems(): void;
}
declare class EquipmentGridIconElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    image: HTMLImageElement;
    quantity: HTMLSpanElement;
    tooltipElem: EquipmentTooltipElement;
    tooltip?: TippyTooltip;
    quickEquip: QuickEquipTooltipElement;
    quickEquipTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSlot(slot: EquipmentSlot, game: Game): void;
    setEquipped(player: Player, equipped: EquippedItem): void;
}
declare class EquipmentGridElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    summoningSynergyContainer: HTMLDivElement;
    summoningSynergyIcon: HTMLImageElement;
    summoningSynergyTooltip?: TippyTooltip;
    icons: Map<EquipmentSlot, EquipmentGridIconElement>;
    constructor();
    connectedCallback(): void;
    initialize(game: Game): void;
    setEquipment(player: Player): void;
    getSynergyTooltipContent(synergyDescription: string): string;
}
declare class EquipmentTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    itemName: HTMLSpanElement;
    itemDescription: HTMLElement;
    itemSpec: HTMLElement;
    statContainer: HTMLElement;
    unset: boolean;
    lastItem?: EquipmentItem;
    itemDamageType: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setFromSlot(equipped: EquippedItem): void;
    setItem(item: EquipmentItem, showStats: boolean): void;
    setEmpty(): void;
}
declare class QuickEquipTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    buttonContainer: HTMLUListElement;
    unequipButton: HTMLButtonElement;
    buttons: {
        equip: HTMLButtonElement;
        image: HTMLImageElement;
        set: HTMLButtonElement;
    }[];
    constructor();
    connectedCallback(): void;
    init(numButtons: number): void;
    setEquipped(player: Player, equipped: EquippedItem): void;
}
