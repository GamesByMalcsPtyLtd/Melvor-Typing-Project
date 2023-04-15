interface NotificationData {
    media: string;
    quantity: number;
    text: string;
    isImportant: boolean;
    isError: boolean;
}
declare type AnyNotification = GenericNotification | AddItemNotification | RemoveItemNotification | SummoningMarkNotification | ErrorNotification | SuccessNotification | InfoNotification;
declare type NotificationType = 'AddItem' | 'RemoveItem' | 'AddGP' | 'RemoveGP' | 'AddSlayerCoins' | 'RemoveSlayerCoins' | 'SummoningMark' | 'Error' | 'Success' | 'Info';
declare const enum NotificationHorizontalPositions {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2
}
declare class GenericNotification {
    _type: NotificationType;
    constructor(type: NotificationType);
    get type(): NotificationType;
}
declare class AddItemNotification extends GenericNotification {
    _item: AnyItem;
    constructor(item: AnyItem);
    get item(): AnyItem;
}
declare class RemoveItemNotification extends GenericNotification {
    _item: AnyItem;
    constructor(item: AnyItem);
    get item(): AnyItem;
}
declare class SummoningMarkNotification extends GenericNotification {
    _mark: SummoningRecipe;
    constructor(mark: SummoningRecipe);
    get mark(): SummoningRecipe;
}
declare class ErrorNotification extends GenericNotification {
    _customID: string;
    constructor(customID: string);
    get customID(): string;
}
declare class SuccessNotification extends GenericNotification {
    _customID: string;
    constructor(customID: string);
    get customID(): string;
}
declare class InfoNotification extends GenericNotification {
    _customID: string;
    constructor(customID: string);
    get customID(): string;
}
declare class NotificationsManager {
    readonly OFFSET = 5;
    activeNotifications: Map<AnyNotification, NotificationData>;
    activeNotificationElements: Map<AnyNotification, NotificationElement>;
    timeoutIds: Map<AnyNotification, number>;
    addItemNotificationClasses: Map<AnyItem, AddItemNotification>;
    removeItemNotificationClasses: Map<AnyItem, RemoveItemNotification>;
    summoningMarkNotificationClasses: Map<SummoningRecipe, SummoningMarkNotification>;
    errorNotificationClasses: Map<string, ErrorNotification>;
    successNotificationClasses: Map<string, SuccessNotification>;
    infoNotificationClasses: Map<string, InfoNotification>;
    genericNotificationClasses: Map<string, GenericNotification>;
    constructor();
    get genericNotificationData(): NotificationData;
    get timeoutDelay(): number;
    createItemNotification(item: AnyItem, quantity: number): void;
    newAddItemNotification(item: AnyItem): AddItemNotification | undefined;
    newRemoveItemNotification(item: AnyItem): RemoveItemNotification | undefined;
    createGPNotification(quantity: number): void;
    createSlayerCoinsNotification(quantity: number): void;
    createSummoningMarkNotification(mark: SummoningRecipe): void;
    createErrorNotification(customID: string, msg: string): void;
    createSuccessNotification(customID: string, msg: string, media: string, quantity?: number): void;
    createInfoNotification(customID: string, msg: string, media: string, quantity?: number): void;
    newAddGenericNotification(type: NotificationType): GenericNotification | undefined;
    newRemoveGenericNotification(type: NotificationType): GenericNotification | undefined;
    newSummoningMarkNotification(mark: SummoningRecipe): SummoningMarkNotification | undefined;
    newAddErrorNotification(customID: string): ErrorNotification | undefined;
    newAddSuccessNotification(customID: string): SuccessNotification | undefined;
    newAddInfoNotification(customID: string): InfoNotification | undefined;
    addNotification(key: AnyNotification, notification: NotificationData): void;
    /** Sort notifications so important and errors always display first */
    sortNotifications(): Map<AnyNotification, NotificationData>;
    removeNotification(key: AnyNotification): void;
    editNotification(key: AnyNotification, notification: NotificationData): void;
    displayNotification(key: AnyNotification, notification: NotificationData): void;
    removeNotificationElement(key: AnyNotification): void;
    updateNotificationElement(key: AnyNotification, notification: NotificationData, qtyChange: number): void;
    createNotificationContainer(key: AnyNotification, notification: NotificationData): NotificationElement;
    getBorderColour(type: NotificationType, notification: NotificationData): "#1b9f12" | "#e56767" | "#5cace5" | "yellow" | "green" | "#30c78d";
    updateAllNotificationPositions(): void;
    updateAllNotificationText(): void;
    updateAllNotificationImportance(): void;
    setInBankText(key: AnyNotification): void;
    setNotificationText(key: AnyNotification, notification: NotificationData): void;
    pulseNotificationContainer(key: AnyNotification): void;
    adjustAllNotificationPositions(): void;
    clearTimeout(key: AnyNotification): void;
    resetTimeout(key: AnyNotification): void;
}
declare class NotificationElement extends HTMLElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    media: HTMLImageElement;
    quantity: HTMLSpanElement;
    divQuantity: HTMLDivElement;
    text: HTMLSpanElement;
    inBank: HTMLSpanElement;
    splashContainer: HTMLDivElement;
    iconImportant: HTMLDivElement;
    splashManager?: SplashManager;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    initSplashManager(): void;
    setNotification(notification: NotificationData, game: Game): void;
    setImportance(key: AnyNotification, notification: NotificationData, game: Game): void;
    setText(text: string): void;
    setInBankText(text: string): void;
    setQuantity(notification: NotificationData): void;
    setBorder(colour: string): void;
    setBottomPos(pos: number): void;
    setHorizontalPos(posType: NotificationHorizontalPositions): void;
    addPulse(): void;
    removePulse(): void;
}
