declare class CombatLoot {
    private maxLoot;
    private container;
    private name;
    private dropElements;
    drops: LootDrop[];
    private renderRequired;
    lostLoot: Map<ItemID, number>;
    constructor(maxLoot: number);
    add(itemID: number, quantity: number, stack?: boolean): void;
    removeAll(): void;
    private makeDropRoom;
    private createDrop;
    lootAll(): void;
    private lootItem;
    private createTooltip;
    render(): void;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
}
declare type LootElements = {
    container: HTMLDivElement;
    image: HTMLImageElement;
    qty: HTMLDivElement;
    tooltip: TippyTooltip;
};
declare type LootDrop = {
    item: GenericItem;
    qty: number;
};
