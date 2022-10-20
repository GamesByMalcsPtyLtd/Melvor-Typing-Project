declare class EquippedFood implements EncodableObject, Serializable {
    private maxSlots;
    private game;
    slots: FoodData[];
    private selectedSlot;
    get currentSlot(): FoodData;
    constructor(maxSlots: number, game: Game);
    private addSlot;
    equip(item: FoodItem, quantity: number): boolean;
    unequipSelected(): void;
    consume(quantity?: number): void;
    setSlot(slotID: number): void;
    private checkSlotid;
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
    private container;
    private selected;
    private dropContainer;
    private dropOptions;
    private dropDivider;
    private unequipButton;
    constructor(containerID: string);
    private addDropdownOption;
    showHoldToEat(): void;
    hideHoldToEat(): void;
    private removeDropOption;
    private renderOption;
    private renderSelected;
    private renderSelection;
    render(player: Player): void;
    setCallbacks(player: Player): void;
}
declare type FoodDropOption = {
    button: HTMLAnchorElement | HTMLButtonElement;
    quantity: HTMLSpanElement;
    image: HTMLImageElement;
    healing: HTMLSpanElement;
};
