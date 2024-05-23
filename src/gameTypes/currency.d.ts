declare type CurrencyEvents = {
    amountChanged: GameEvent;
};
declare const enum CurrencyStats {
    TotalEarned = 0,
    TotalSpent = 1,
    EarnedFromCombat = 2,
    SpentInShop = 3
}
declare const enum SkillCurrencyStats {
    Earned = 0,
    Spent = 1,
    Preserved = 2,
    SpentTravelling = 3,
    SpentMapUpgrading = 4,
    PreservedMapUpgrading = 5,
    /** Item value burned in firemaking */
    Burnt = 6
}
declare abstract class Currency extends NamespacedObject implements EncodableObject, IGameEventEmitter<CurrencyEvents> {
    game: Game;
    _events: import("mitt").Emitter<CurrencyEvents>;
    on: {
        <Key extends "amountChanged">(type: Key, handler: import("mitt").Handler<CurrencyEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<CurrencyEvents>): void;
    };
    off: {
        <Key extends "amountChanged">(type: Key, handler?: import("mitt").Handler<CurrencyEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<CurrencyEvents>): void;
    };
    get media(): string;
    get amount(): number;
    stats: CurrencyStatTracker;
    _amount: number;
    renderRequired: boolean;
    /** Base URL to the currencies icon */
    abstract readonly _media: string;
    /** Returns the localized name of the currency */
    abstract readonly name: string;
    /** Returns a template containing a `curIcon` and `count` fields */
    abstract readonly gainTemplate: string;
    /** Returns a template containing a `curIcon` and `count` fields. e.g. You spent ${curIcon} ${count} <Currency Name> */
    abstract readonly usedTemplate: string;
    /** If notifications should be fired */
    abstract readonly shouldNotify: boolean;
    /** Determines the relative value of this currency for use in cartography path finding. Based on rough GP value of currency */
    abstract readonly travelCostWeight: number;
    abstract type: string;
    readonly modQuery: ModifierQuery;
    constructor(namespace: DataNamespace, localID: string, game: Game);
    /** Queues a notification on recieving/losing currency */
    queueNotification(amount: number): void;
    /** Renders the current amount of currency owned. */
    renderAmount(): void;
    renderQuantities(): void;
    renderTooltips(): void;
    getTooltipContent(): string;
    onLoad(): void;
    onAmountChange(): void;
    queueRender(): void;
    render(): void;
    /** Adds amount to the currency */
    add(amount: number): void;
    /** Removes amount from the currency */
    remove(amount: number): void;
    /** Sets the amount to the given value */
    set(amount: number): void;
    /** Checks if amountToSpend can be afforded from the currency */
    canAfford(amountToSpend: number): boolean;
    abstract formatAmount(qtyText: string): string;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Dumps any data encoded for a currecny from a SaveWriter */
    static dumpData(reader: SaveWriter, version: number): void;
}
declare type CurrencyQuantity = {
    currency: Currency;
    quantity: number;
};
interface CurrencyQuantitiesModificationData {
    add?: IDQuantity[];
    remove?: string[];
}
declare class GP extends Currency {
    readonly _media = Assets.GPIcon;
    get name(): string;
    get gainTemplate(): string;
    get usedTemplate(): string;
    readonly travelCostWeight = 1;
    type: string;
    get shouldNotify(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    formatAmount(qtyText: string): string;
}
declare class SlayerCoins extends Currency {
    readonly _media = Assets.SlayerCoinIcon;
    get name(): string;
    get gainTemplate(): string;
    get usedTemplate(): string;
    readonly travelCostWeight = 50;
    type: string;
    get shouldNotify(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    getTooltipContent(): string;
    formatAmount(qtyText: string): string;
}
declare class RaidCoins extends Currency {
    readonly _media = Assets.RaidCoinIcon;
    get name(): string;
    get gainTemplate(): string;
    get usedTemplate(): string;
    readonly travelCostWeight = 1;
    type: string;
    readonly shouldNotify = true;
    constructor(namespace: DataNamespace, game: Game);
    formatAmount(qtyText: string): string;
}
declare class AbyssalPieces extends Currency {
    readonly _media = Assets.APIcon;
    get name(): string;
    get gainTemplate(): string;
    get usedTemplate(): string;
    readonly travelCostWeight = 1;
    type: string;
    get shouldNotify(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    formatAmount(qtyText: string): string;
}
declare class AbyssalSlayerCoins extends Currency {
    readonly _media = Assets.ASCIcon;
    get name(): string;
    get gainTemplate(): string;
    get usedTemplate(): string;
    readonly travelCostWeight = 1;
    type: string;
    get shouldNotify(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    formatAmount(qtyText: string): string;
}
