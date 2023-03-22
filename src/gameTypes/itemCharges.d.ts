declare class ItemCharges implements EncodableObject {
    game: Game;
    charges: Map<EquipmentItem, number>;
    renderQueue: ItemChargeRenderQueue;
    constructor(game: Game);
    render(): void;
    getSnapShot(): Map<EquipmentItem, number>;
    /** Returns true if the item has any charges */
    itemHasCharge(item: EquipmentItem): boolean;
    /** Returns the number of charges an item has */
    getCharges(item: EquipmentItem): number;
    /** Adds the amount of charges to the item */
    addCharges(item: EquipmentItem, amount: number): void;
    /** Removes the amount of charges from the item */
    removeCharges(item: EquipmentItem, amount: number): void;
    /** Removes all charges from an item */
    removeAllCharges(item: EquipmentItem): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldFormat(oldGloveData: OldGloveChargeTracker[], idMap: NumericIDMap): void;
}
interface ItemChargeRenderQueue {
    items: Set<EquipmentItem>;
}
