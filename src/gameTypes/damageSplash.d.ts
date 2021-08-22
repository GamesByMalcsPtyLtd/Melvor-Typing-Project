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
    source: SplashType;
    text: string;
};
declare type SplashType = DOTType | "Attack" | "Crit" | "Heal";
