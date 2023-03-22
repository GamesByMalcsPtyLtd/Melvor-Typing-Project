interface PrayerData extends IDData {
    level: number;
    name: string;
    media: string;
    pointsPerPlayer: number;
    pointsPerEnemy: number;
    pointsPerRegen: number;
    modifiers: PlayerModifierData;
    enemyModifiers?: CombatModifierData;
}
declare class ActivePrayer extends NamespacedObject {
    level: number;
    get media(): string;
    pointsPerPlayer: number;
    pointsPerEnemy: number;
    pointsPerRegen: number;
    modifiers: PlayerModifierObject;
    enemyModifiers?: CombatModifierData;
    _media: string;
    _name: string;
    get name(): string;
    constructor(namespace: DataNamespace, data: PrayerData, game: Game);
}
interface PrayerMenuElement extends CombatMenuElement {
    newDiv: HTMLDivElement;
}
declare class PrayerMenu {
    menuContainer: HTMLDivElement;
    activeContainer: HTMLDivElement;
    menus: Map<ActivePrayer, PrayerMenuElement>;
    activeMenu: CombatMenuElement[];
    constructor();
    createMenu(): void;
    createActiveMenu(): void;
    updateForLevel(level: number, player: Player): void;
    setEnabled(button: HTMLAnchorElement): void;
    setDisabled(button: HTMLAnchorElement): void;
    setActive(active: Set<ActivePrayer>, player: Player): void;
    setMenuCallbacks(player: Player): void;
    createActivePrayer(): HTMLAnchorElement;
    createMenuPrayer(prayer: ActivePrayer): HTMLDivElement;
    createTooltip(parent: HTMLElement, tooltipHTML: string): TippyTooltip;
    getLockedTooltipHTML(prayer: ActivePrayer): string;
    getUnlockedTooltipHTML(prayer: ActivePrayer): string;
}
declare type CombatMenuElement = {
    tooltip: TippyTooltip;
    image: HTMLImageElement;
    button: HTMLAnchorElement;
};
