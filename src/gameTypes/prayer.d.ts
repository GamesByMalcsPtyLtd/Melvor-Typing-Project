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
    private _media;
    private _name;
    get name(): string;
    constructor(namespace: DataNamespace, data: PrayerData, game: Game);
}
interface PrayerMenuElement extends CombatMenuElement {
    newDiv: HTMLDivElement;
}
declare class PrayerMenu {
    private menuContainer;
    private activeContainer;
    private menus;
    private activeMenu;
    constructor();
    createMenu(): void;
    createActiveMenu(): void;
    updateForLevel(level: number, player: Player): void;
    private setEnabled;
    private setDisabled;
    setActive(active: Set<ActivePrayer>, player: Player): void;
    setMenuCallbacks(player: Player): void;
    private createActivePrayer;
    private createMenuPrayer;
    private createTooltip;
    private getLockedTooltipHTML;
    private getUnlockedTooltipHTML;
}
declare type CombatMenuElement = {
    tooltip: TippyTooltip;
    image: HTMLImageElement;
    button: HTMLAnchorElement;
};
