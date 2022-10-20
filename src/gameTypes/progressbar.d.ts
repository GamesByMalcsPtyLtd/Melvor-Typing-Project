declare class ProgressBar {
    private barElem;
    private currentStyle;
    private isStriped;
    isReversed: boolean;
    private static stripeClasses;
    constructor(barElem: HTMLElement, currentStyle?: ProgressBarStyle);
    animateProgressFromTimer(timer: Timer): void;
    /** Animates the progress bar from start to end over the alloted interval */
    animateProgress(elapsedTime: number, totalTime: number): void;
    animateStriped(): void;
    stopAnimation(): void;
    /** Sets the style class of the progress bar element */
    setStyle(newStyle: ProgressBarStyle): void;
    private setAnimation;
    /** Sets the progress bar to a fixed position. Will stop existing progress animations. */
    setFixedPosition(percent: number): void;
}
declare type ProgressBarStyle = 'bg-danger' | 'bg-info' | 'bg-warning' | 'bg-slowed' | 'bg-success' | 'bg-primary' | 'bg-woodcutting' | 'bg-secondary' | 'bg-mining';
