/** Management class for potion consumption and charges */
declare class PotionManager implements StatProvider, EncodableObject {
    game: Game;
    activePotions: Map<Action, ActivePotion>;
    /** Actions for which potions should not be automatically re-used */
    autoReuseActions: Set<Action>;
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
    computeProvidedStats(updatePlayer?: boolean): void;
    render(): void;
    onLoad(): void;
    updatePotionHeader(potion: ActivePotion | undefined): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
}
interface ActivePotion {
    item: PotionItem;
    charges: number;
}
declare class PotionSelectMenuItem extends HTMLElement {
    _content: DocumentFragment;
    potionImage: HTMLImageElement;
    potionQuantity: HTMLHeadingElement;
    potionName: HTMLSpanElement;
    useButton: HTMLButtonElement;
    potionDescription: HTMLHeadingElement;
    potionCharges: HTMLHeadingElement;
    constructor();
    connectedCallback(): void;
    setPotion(potion: PotionItem, game: Game): void;
}
declare class PotionSelectMenu extends HTMLElement {
    _content: DocumentFragment;
    potionContainer: HTMLDivElement;
    autoReuseCheckBox: HTMLInputElement;
    menuItems: PotionSelectMenuItem[];
    constructor();
    connectedCallback(): void;
    showPotionSelection(potions: PotionItem[], action: Action, game: Game): void;
}
