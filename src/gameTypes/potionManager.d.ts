/** Management class for potion consumption and charges */
declare class PotionManager implements StatProvider, EncodableObject {
    private game;
    private activePotions;
    /** Actions for which potions should not be automatically re-used */
    private autoReuseActions;
    renderRequired: boolean;
    modifiers: MappedModifiers;
    constructor(game: Game);
    isPotionActiveForAction(action: Action): boolean;
    getActivePotionForAction(action: Action): PotionItem | undefined;
    isPotionActive(potion: PotionItem): boolean;
    autoReusePotionsForAction(action: Action): boolean;
    getPotionCharges(item: PotionItem): number;
    usePotion(item: PotionItem, loadPotions?: boolean): void;
    removePotion(action: Action, loadPotions?: boolean): void;
    consumeCharges(event: GameEvent): void;
    toggleAutoReusePotion(action: Action): void;
    /** Callback function for opening the potion selection menu */
    openPotionSelectOnClick(action: Action): void;
    /** Recomputes the stats provided by potions */
    private computeProvidedStats;
    render(): void;
    onLoad(): void;
    private updatePotionHeader;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
}
interface ActivePotion {
    item: PotionItem;
    charges: number;
}
declare class PotionSelectMenuItem extends HTMLElement {
    private _content;
    private potionImage;
    private potionQuantity;
    private potionName;
    private useButton;
    private potionDescription;
    private potionCharges;
    constructor();
    connectedCallback(): void;
    setPotion(potion: PotionItem, game: Game): void;
}
declare class PotionSelectMenu extends HTMLElement {
    private _content;
    private potionContainer;
    private autoReuseCheckBox;
    private menuItems;
    constructor();
    connectedCallback(): void;
    showPotionSelection(potions: PotionItem[], action: Action, game: Game): void;
}
