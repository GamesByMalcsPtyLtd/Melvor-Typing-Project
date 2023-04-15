declare abstract class Currency implements EncodableObject {
    game: Game;
    get media(): string;
    get amount(): number;
    _amount: number;
    renderRequired: boolean;
    /** Base URL to the currencies icon */
    abstract readonly _media: string;
    /** If notifications should be fired */
    abstract readonly shouldNotify: boolean;
    abstract type: string;
    constructor(game: Game);
    /** Queues a notification on recieving/losing currency */
    queueNotification(amount: number): void;
    abstract renderAmount(): void;
    onLoad(): void;
    onAmountChange(): void;
    render(): void;
    /** Adds amount to the currency */
    add(amount: number): void;
    /** Removes amount from the currency */
    remove(amount: number): void;
    /** Sets the amount to the given value */
    set(amount: number): void;
    /** Checks if amountToSpend can be afforded from the currency */
    canAfford(amountToSpend: number): boolean;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
declare class GP extends Currency {
    readonly _media = Assets.GPIcon;
    type: string;
    get shouldNotify(): boolean;
    add(amount: number): void;
    renderAmount(): void;
}
declare class SlayerCoins extends Currency {
    readonly _media = Assets.SlayerCoinIcon;
    type: string;
    get shouldNotify(): boolean;
    add(amount: number): void;
    renderAmount(): void;
}
declare class RaidCoins extends Currency {
    readonly _media = Assets.RaidCoinIcon;
    type: string;
    readonly shouldNotify = true;
    renderAmount(): void;
}
