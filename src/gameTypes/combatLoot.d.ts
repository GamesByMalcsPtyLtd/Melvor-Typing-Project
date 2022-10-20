declare class CombatLoot implements Serializable, EncodableObject {
    private maxLoot;
    private game;
    drops: AnyItemQuantity[];
    private renderRequired;
    lostLoot: Map<AnyItem, number>;
    constructor(maxLoot: number, game: Game);
    initializeMenus(): void;
    add(item: AnyItem, quantity: number, stack?: boolean): void;
    removeAll(): void;
    private makeDropRoom;
    lootAll(): void;
    destroyAllLoot(): void;
    actuallyDestroyAllLootNow(): void;
    getSnapshot(): Map<AnyItem, number>;
    lootItem(id: number): void;
    render(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
}
declare type LootElements = {
    container: HTMLDivElement;
    image: HTMLImageElement;
    qty: HTMLDivElement;
    tooltip: TippyTooltip;
};
declare class CombatLootMenuElement extends HTMLElement {
    private _content;
    private lootQuantity;
    private lootAllButton;
    private lootContainer;
    private lootingAmuletText;
    private dropElements;
    constructor();
    connectedCallback(): void;
    /** Set callbacks and translations */
    initialize(loot: CombatLoot): void;
    renderDrops(drops: AnyItemQuantity[], maxDrops: number, loot: CombatLoot): void;
    private createDropElement;
    private createTooltip;
}
