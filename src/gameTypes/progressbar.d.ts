declare class ProgressBar {
    private barElem;
    private currentStyle;
    private isStriped;
    private static stripeClasses;
    constructor(barElem: HTMLElement);
    animateProgressFromTimer(timer: Timer): void;
    /** Animates the progress bar from start to end over the alloted interval */
    animateProgress(elapsedTime: number, totalTime: number): void;
    animateStriped(): void;
    stopAnimation(): void;
    /** Sets the style class of the progress bar element */
    setStyle(newStyle: ProgressBarStyle): void;
    private setAnimation;
}
declare type ProgressBarStyle = 'bg-danger' | 'bg-info' | 'bg-warning' | 'bg-slowed';
