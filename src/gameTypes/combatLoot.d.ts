declare class CombatLoot implements Serializable, EncodableObject {
    maxLoot: number;
    game: Game;
    drops: AnyItemQuantity[];
    renderRequired: boolean;
    lostLoot: Map<AnyItem, number>;
    constructor(maxLoot: number, game: Game);
    initializeMenus(): void;
    add(item: AnyItem, quantity: number, stack?: boolean): void;
    removeAll(): void;
    makeDropRoom(): void;
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
    _content: DocumentFragment;
    lootQuantity: HTMLHeadingElement;
    lootAllButton: HTMLButtonElement;
    lootContainer: HTMLDivElement;
    lootingAmuletText: HTMLElement;
    dropElements: LootElements[];
    constructor();
    connectedCallback(): void;
    /** Set callbacks and translations */
    initialize(loot: CombatLoot): void;
    renderDrops(drops: AnyItemQuantity[], maxDrops: number, loot: CombatLoot): void;
    createDropElement(): void;
    createTooltip(parent: HTMLDivElement): TippyTooltip;
}
