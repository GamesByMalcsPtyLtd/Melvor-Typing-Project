declare class SplashManager {
    private container;
    private queue;
    private splashDelay;
    private maxSplashes;
    constructor(container: HTMLElement);
    add(splash: DamageSplash): void;
    render(): void;
    private renderSplash;
    private static splashClasses;
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
