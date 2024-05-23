interface PrayerData extends IDData, IStatObjectData {
    level: number;
    name: string;
    media: string;
    pointsPerPlayer: number;
    pointsPerEnemy: number;
    pointsPerRegen: number;
    /** Optional. Flags this prayer as Unholy, augmenting it from default mechanics. Defaults to false. */
    isUnholy?: boolean;
    /** Optional. Flags this prayer as using Soul Points instead of Prayer Points. Defaults to false. */
    useSoulPoints?: boolean;
    /** Optional. The Prayer Abyssal Level required to unlock. */
    abyssalLevel?: number;
    /** Optional. Flags this prayer as Abyssal. Defaults to false. */
    isAbyssal?: boolean;
    /** Optional. The IDs of the DamageTypes this prayer is allowed to be used with. */
    allowedDamageTypeIDs?: string[];
}
declare class ActivePrayer extends NamespacedObject {
    level: number;
    _abyssalLevel?: number;
    get abyssalLevel(): number;
    get media(): string;
    pointsPerPlayer: number;
    pointsPerEnemy: number;
    pointsPerRegen: number;
    stats: StatObject;
    _media: string;
    _name: string;
    get name(): string;
    /** Flags this prayer as Unholy. */
    isUnholy: boolean;
    /** Flags this prayer as Abyssal. */
    isAbyssal: boolean;
    /** Flags this prayer to use Soul Points instead of Prayer Points. */
    useSoulPoints: boolean;
    allowedDamageTypes: Set<DamageType>;
    constructor(namespace: DataNamespace, data: PrayerData, game: Game);
    canUseWithDamageType(damageType: DamageType): boolean;
}
interface PrayerMenuElement extends CombatMenuElement {
    newDiv: HTMLDivElement;
}
declare class LockedPrayerTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    level: HTMLSpanElement;
    abyssalLevel: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setPrayer(prayer: ActivePrayer): void;
}
declare class PrayerTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    prayerName: HTMLSpanElement;
    unholyScaling: HTMLElement;
    stats: HTMLElement;
    xpInfo: HTMLElement;
    playerPoints: HTMLElement;
    enemyPoints: HTMLElement;
    regenPoints: HTMLElement;
    constructor();
    connectedCallback(): void;
    setPrayer(prayer: ActivePrayer): void;
}
declare class PrayerButtonElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    prayerImage: HTMLImageElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setUnlocked(prayer: ActivePrayer, player: Player): void;
    setLocked(prayer: ActivePrayer): void;
    highlight(): void;
    unhighlight(): void;
}
declare class PrayerBookMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    bookButtons: HTMLDivElement;
    standardButton: HTMLButtonElement;
    unholyButton: HTMLButtonElement;
    abyssalButton: HTMLButtonElement;
    standardContainer: HTMLDivElement;
    standardAnchor: HTMLSpanElement;
    unholyContainer: HTMLDivElement;
    unholyAnchor: HTMLSpanElement;
    abyssalContainer: HTMLDivElement;
    abyssalAnchor: HTMLSpanElement;
    buttonTooltips: TippyTooltip[];
    prayerButtons: Map<ActivePrayer, PrayerButtonElement>;
    activeButtons: PrayerButtonElement[];
    visibleContainer: HTMLDivElement;
    highlightedButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    init(game: Game): void;
    updateForLevel(player: Player, level: number, abyssalLevel: number): void;
    setActiveButtons(active: Set<ActivePrayer>): void;
    addButtonTooltip(button: HTMLButtonElement, text: string): void;
    createPrayerButton(prayer: ActivePrayer, anchor: HTMLElement): void;
    selectContainer(container: HTMLDivElement): void;
    highlightButton(button: HTMLButtonElement): void;
}
declare type CombatMenuElement = {
    tooltip: TippyTooltip;
    image: HTMLImageElement;
    button: HTMLAnchorElement;
};
