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
declare class FoodMenu {
    container: HTMLElement;
    selected: FoodDropOption;
    dropContainer: HTMLDivElement;
    dropOptions: FoodDropOption[];
    dropDivider: HTMLDivElement;
    unequipButton: HTMLAnchorElement;
    constructor(containerID: string);
    addDropdownOption(): void;
    showHoldToEat(): void;
    hideHoldToEat(): void;
    removeDropOption(): void;
    renderOption(food: FoodData, option: FoodDropOption, player: Player): void;
    renderSelected(food: FoodData, player: Player): void;
    renderSelection(foods: FoodData[], player: Player): void;
    render(player: Player): void;
    setCallbacks(player: Player): void;
}
declare type FoodDropOption = {
    button: HTMLAnchorElement | HTMLButtonElement;
    quantity: HTMLSpanElement;
    image: HTMLImageElement;
    healing: HTMLSpanElement;
};
