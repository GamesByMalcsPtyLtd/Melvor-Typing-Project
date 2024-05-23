declare class EquippedFood implements EncodableObject, Serializable {
    maxSlots: number;
    game: Game;
    slots: FoodData[];
    selectedSlot: number;
    get currentSlot(): FoodData;
    constructor(maxSlots: number, game: Game);
    addSlot(): void;
    equip(item: FoodItem, quantity: number): boolean;
    unequipSelected(): void;
    consume(quantity?: number): void;
    setSlot(slotID: number): void;
    checkSlotid(slotID: number): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number, addOnFail?: boolean): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap, addOnFail?: boolean): void;
    convertFromOldSaveFormat(oldData: OldItemQuantity2[], idMap: NumericIDMap): void;
}
declare type FoodData = {
    item: FoodItem;
    quantity: number;
};
declare class FoodSelectOptionElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    quantity: HTMLSpanElement;
    image: HTMLImageElement;
    hitpoints: HTMLSpanElement;
    modifiers: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setFood(food: FoodData, player: Player): void;
}
declare class FoodSelectMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    eatButton: HTMLButtonElement;
    selected: FoodSelectOptionElement;
    optionsContainer: HTMLDivElement;
    dropDivider: HTMLDivElement;
    unequipButton: HTMLAnchorElement;
    dropOptions: FoodSelectOptionElement[];
    constructor();
    connectedCallback(): void;
    addDropdownOption(): void;
    removeDropOption(): void;
    showHoldToEat(): void;
    hideHoldToEat(): void;
    renderSelection(foods: FoodData[], player: Player): void;
    render(player: Player): void;
    setCallbacks(player: Player): void;
}
