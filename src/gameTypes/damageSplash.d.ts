declare class SplashManager {
    container: HTMLElement;
    queue: DamageSplash[];
    splashDelay: number;
    maxSplashes: number;
    constructor(container: HTMLElement);
    add(splash: DamageSplash): void;
    render(): void;
    renderSplash(splash: DamageSplash): void;
    static splashClasses: Record<SplashType, string>;
}
declare type DamageSplash = {
    /** Controls the colour of the splash */
    source: SplashType;
    /** Amount to display */
    amount: number;
    /** Optionally display instead of amount */
    text?: string;
    xOffset: number;
};
declare type SplashType = DOTType | 'Attack' | 'Crit' | 'Heal';
