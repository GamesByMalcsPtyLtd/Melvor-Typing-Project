declare abstract class Currency implements EncodableObject {
    protected game: Game;
    get media(): string;
    get amount(): number;
    protected _amount: number;
    private renderRequired;
    /** Base URL to the currencies icon */
    protected abstract readonly _media: string;
    /** If notifications should be fired */
    protected abstract readonly shouldNotify: boolean;
    constructor(game: Game);
    /** Queues a notification on recieving/losing currency */
    private queueNotification;
    protected abstract renderAmount(): void;
    onLoad(): void;
    private onAmountChange;
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
    protected readonly _media = Assets.GPIcon;
    protected get shouldNotify(): boolean;
    add(amount: number): void;
    protected renderAmount(): void;
}
declare class SlayerCoins extends Currency {
    protected readonly _media = Assets.SlayerCoinIcon;
    protected get shouldNotify(): boolean;
    add(amount: number): void;
    protected renderAmount(): void;
}
declare class RaidCoins extends Currency {
    protected readonly _media = Assets.RaidCoinIcon;
    protected readonly shouldNotify = true;
    protected renderAmount(): void;
}
