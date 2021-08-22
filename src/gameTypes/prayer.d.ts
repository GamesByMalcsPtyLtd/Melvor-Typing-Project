declare type Prayer = {
    name: string;
    description: string;
    prayerLevel: number;
    media: string;
    pointsPerPlayer: number;
    pointsPerEnemy: number;
    pointsPerRegen: number;
    modifiers: Partial<StandardModifierObject<number>>;
};
declare const PRAYER: Prayer[];
declare class PrayerMenu {
    private menuContainer;
    private activeContainer;
    private menu;
    private activeMenu;
    constructor();
    createMenu(): void;
    createActiveMenu(): void;
    updateForLevel(level: number, player: Player): void;
    private setEnabled;
    private setDisabled;
    setActive(active: Set<number>, player: Player): void;
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
