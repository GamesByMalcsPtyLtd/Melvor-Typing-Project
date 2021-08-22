declare class Equipment {
    slots: EquipmentObject<EquipSlot>;
    slotArray: EquipSlot[];
    private menuIcons;
    private synergyIcons;
    private synergyTooltips;
    /** Class to manage the equiped items of players */
    constructor();
    /** Returns the items that will be removed on equipping */
    getItemsAddedOnEquip(item: EquipmentItem, slot: SlotTypes | "Default"): ItemQuantity2[];
    /** Returns the items that will be removed on unequipping */
    getItemsAddedOnUnequip(slot: SlotTypes): ItemQuantity2;
    /** Gets the actually equipped slots to unequip when equipping an item */
    private getSlotsToUnequip;
    /** Gets the root slot of an occupied slot */
    private getRootSlot;
    /** Performs the equipment process, removing equipped items */
    equipItem(itemToEquip: EquipmentItem, slot: SlotTypes, quantity: number): void;
    /** Performs the unequipment process, removing the item */
    unequipItem(slot: SlotTypes): void;
    /** Determines if an itemID is equipped */
    checkForItemID(itemID: number): boolean;
    getSlotOfItemID(itemID: number): SlotTypes | "None";
    getQuantityOfItemID(itemID: number): number;
    addQuantityToSlot(slot: SlotTypes, quantity: number): void;
    /** Removes quantity from a slot. Returns true if slot is now empty and stats need updating */
    removeQuantityFromSlot(slot: SlotTypes, quantity: number): boolean;
    /** Adds the stats of the equipped items to an equipment stats object */
    addEquipmentStats(stats: EquipmentStats): void;
    /** Renders the equipment */
    render(player: Player): void;
    renderQuantity(): void;
    private updateTooltips;
    private getSynergyTooltipContent;
    private getEquipStatDescription;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    convertFromOldFormat(oldData: OldEquipmentSet): void;
    /** Removes all equipment */
    unequipAll(): void;
}
declare type EquipmentItem = EquipmentWithSpecial | EquipmentWithoutSpecial;
declare type WeaponItem = WeaponWithSpecial | WeaponWithoutSpecial;
interface BaseEquipmentItem extends BaseItem {
    /** Valids slots the equipment can go in. First element is the default slot to use. */
    validSlots: SlotTypes[];
    /** Additional equipment slots that are also taken up */
    occupiesSlots: SlotTypes[];
    /** Requirements for equipping the item */
    equipRequirements: Requirement[];
    /** Equipment stats provided by item */
    equipmentStats: EquipStatPair[];
    gloveID?: number;
    attackType?: AttackType;
    modifiers?: ModifierData;
    enemyModifiers?: CombatModifierData;
    summoningID?: number;
    providesRuneQty?: number;
    providesRune?: number[];
    ammoType?: AmmoType;
    ammoTypeRequired?: AmmoType;
}
interface WeaponWithSpecial extends EquipmentWithSpecial {
    attackType: AttackType;
}
interface WeaponWithoutSpecial extends EquipmentWithoutSpecial {
    attackType: AttackType;
}
interface EquipmentWithSpecial extends BaseEquipmentItem {
    hasSpecialAttack: true;
    specialAttacks: Attack[];
}
interface EquipmentWithoutSpecial extends BaseEquipmentItem {
    hasSpecialAttack: false;
}
declare class EquipmentSetMenu {
    private buttonClasses;
    private container;
    private buttons;
    private highlightedButton;
    constructor(containerID: string, buttonClasses: string[]);
    render(sets: Equipment[], selected: number, player: Player): void;
    private renderSets;
    private renderSelected;
    private setCallbacks;
    private getTooltipContent;
    private addButton;
    private createTooltip;
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
    tooltips: TippyTooltip[];
    unlocked: boolean;
    /** If items equipped in this slot provide equipment stats */
    providesStats: boolean;
};
/** An invalid item for the use of defaults */
declare const emptyItem: EquipmentItem;
declare class EquipSlot {
    type: SlotTypes;
    /** Item that is in the slot */
    item: EquipmentItem;
    /** If the item simply occopies the slot and does not contribute to stats */
    occupiedBy: SlotTypes | "None";
    /** Quantity of the item equipped */
    quantity: number;
    /** Other slots occupied by this item */
    occupies: SlotTypes[];
    get isEmpty(): boolean;
    get providesStats(): boolean;
    constructor(type: SlotTypes);
    setOccupied(item: EquipmentItem, slot: SlotTypes): void;
    setEquipped(item: EquipmentItem, quantity: number, occupies: SlotTypes[]): void;
    setEmpty(): void;
}
