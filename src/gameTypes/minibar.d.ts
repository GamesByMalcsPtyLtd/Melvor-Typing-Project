declare type QuickEquipIcon = {
    button: HTMLButtonElement;
    tooltip: TippyTooltip;
    equippedTick: HTMLImageElement;
};
declare class Minibar implements EncodableObject {
    private game;
    private get minibarElement();
    private get quickEquipContainer();
    private masteryUnlocks;
    private milestones;
    private summoning;
    private quickEquip;
    private pets;
    private upgrades;
    private customItems;
    private activeSkill?;
    private renderQueue;
    private quickEquipIcons;
    minibar: MinibarItem[];
    constructor(game: Game);
    /** Appends the minibar items to the DOM */
    initialize(): void;
    render(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldformat(save: NewSaveGame, idMap: NumericIDMap): void;
    private getCustomItemsForSkill;
    setCustomItemsToDefault(skill: AnySkill): EquipmentItem[];
    /** Adds an item to a skills custom items */
    addItemOnDiscovery(item: EquipmentItem): void;
    /** Toggles a custom quick-equip item for the given skill. Returns true if the item was added. */
    toggleCustomItem(skill: AnySkill, item: EquipmentItem): boolean;
    /** Returns if the skill has the given item in the minibar selection */
    isCustomItemSet(skill: AnySkill, item: EquipmentItem): boolean;
    setSkill(skill?: AnySkill): void;
    updateEquippedTicks(): void;
    private destroyQuickEquipIcons;
    private createQuickEquipIcons;
    private createQuickEquipIcon;
    private createPetItem;
    private createUpgradeItem;
    private createMinibarItem;
    private applyOptionsToElement;
    private createElementTooltip;
    private removeItem;
    private changeItemOrder;
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
