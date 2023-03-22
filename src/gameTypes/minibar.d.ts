declare type QuickEquipIcon = {
    button: HTMLButtonElement;
    tooltip: TippyTooltip;
    equippedTick: HTMLImageElement;
};
declare class Minibar implements EncodableObject {
    game: Game;
    get minibarElement(): HTMLDivElement;
    get quickEquipContainer(): HTMLElement;
    masteryUnlocks: MinibarItem;
    milestones: MinibarItem;
    summoning: MinibarItem;
    quickEquip: MinibarItem;
    pets: MinibarItem[];
    upgrades: MinibarItem[];
    customItems: Map<AnySkill, EquipmentItem[]>;
    activeSkill?: AnySkill;
    renderQueue: {
        quickEquipIcons: boolean;
    };
    quickEquipIcons: Map<EquipmentItem, QuickEquipIcon>;
    minibar: MinibarItem[];
    constructor(game: Game);
    /** Appends the minibar items to the DOM */
    initialize(): void;
    render(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldformat(save: NewSaveGame, idMap: NumericIDMap): void;
    getCustomItemsForSkill(skill: AnySkill): EquipmentItem[];
    setCustomItemsToDefault(skill: AnySkill): EquipmentItem[];
    /** Adds an item to a skills custom items */
    addItemOnDiscovery(item: EquipmentItem): void;
    /** Toggles a custom quick-equip item for the given skill. Returns true if the item was added. */
    toggleCustomItem(skill: AnySkill, item: EquipmentItem): boolean;
    /** Returns if the skill has the given item in the minibar selection */
    isCustomItemSet(skill: AnySkill, item: EquipmentItem): boolean;
    setSkill(skill?: AnySkill): void;
    updateEquippedTicks(): void;
    destroyQuickEquipIcons(): void;
    createQuickEquipIcons(skill: AnySkill): void;
    createQuickEquipIcon(item: EquipmentItem, skill: AnySkill): void;
    createPetItem(pet: Pet): MinibarItem;
    createUpgradeItem(upgrade: ShopPurchase): MinibarItem;
    createMinibarItem(elementID: string, media: string, tooltipContent: string, options: MinibarOption): MinibarItem;
    applyOptionsToElement(element: HTMLButtonElement, options: MinibarOption): void;
    createElementTooltip(element: HTMLButtonElement, tooltipContent: string): TippyTooltip;
    removeItem(item: MinibarItem): void;
    changeItemOrder(newIndex: number, oldIndex: number): void;
}
interface MinibarItem {
    element: HTMLButtonElement;
    tooltip?: TippyTooltip;
}
interface MinibarOption {
    hideOnCreate?: boolean;
    onClick?: () => void;
}
declare function toggleSkillMinibar(): void;
declare function displayQuickItemEquip(): void;
