declare type PotionEvents = {
    potionUsed: PotionUsedEvent;
    chargeUsed: PotionChargeUsedEvent;
    /** Fired whenever the potion for an action changes */
    potionChanged: PotionChangedEvent;
};
/** Management class for potion consumption and charges */
declare class PotionManager extends GameEventEmitter<PotionEvents> implements EncodableObject {
    game: Game;
    activePotions: Map<Action, ActivePotion>;
    /** Actions for which potions should not be automatically re-used */
    autoReuseActions: Set<Action>;
    renderRequired: boolean;
    providedStats: StatProvider;
    constructor(game: Game);
    isPotionActiveForAction(action: Action): boolean;
    getActivePotionForAction(action: Action): PotionItem | undefined;
    isPotionActive(potion: PotionItem): boolean;
    autoReusePotionsForAction(action: Action): boolean;
    getPotionCharges(item: PotionItem): number;
    usePotion(item: PotionItem, loadPotions?: boolean): void;
    /** Creates an ActivePotion object, and assigns its event matchers */
    createActivePotion(item: PotionItem, charges: number): ActivePotion;
    removePotion(action: Action, loadPotions?: boolean): void;
    consumeChargeForAction(e: GameEvent, action: Action): void;
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
    unassigners: VoidFunction[];
}
declare class PotionSelectMenuItemElement extends HTMLElement implements CustomElement {
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
declare class PotionSelectMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    potionContainer: HTMLDivElement;
    autoReuseCheckBox: HTMLInputElement;
    menuItems: PotionSelectMenuItemElement[];
    constructor();
    connectedCallback(): void;
    showPotionSelection(potions: PotionItem[], action: Action, game: Game): void;
}
