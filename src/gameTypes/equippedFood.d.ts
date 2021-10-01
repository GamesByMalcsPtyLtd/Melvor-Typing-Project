declare class EquippedFood {
    private maxSlots;
    slots: FoodData[];
    private selectedSlot;
    get currentSlot(): FoodData;
    constructor(maxSlots: number);
    private addSlot;
    equip(item: FoodItem, quantity: number): boolean;
    unequipSelected(): void;
    consume(quantity?: number): void;
    setSlot(slotID: number): void;
    private checkSlotid;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    convertFromOldSaveFormat(oldData: ItemQuantity2[]): void;
}
declare type FoodData = {
    item: FoodItem;
    quantity: number;
};
interface FoodItem extends BaseItem {
    canEat: true;
    healsFor: number;
    masteryID?: [SkillID, number];
    cookingID?: number;
}
declare function isFood(item: GenericItem): item is FoodItem;
declare const emptyFood: FoodItem;
declare class FoodMenu {
    private container;
    private selected;
    private dropContainer;
    private dropOptions;
    private dropDivider;
    private unequipButton;
    constructor(containerID: string);
    private addDropdownOption;
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
