declare class ProgressBar {
    barElem: HTMLElement;
    currentStyle: ProgressBarStyle;
    isStriped: boolean;
    isReversed: boolean;
    static stripeClasses: string[];
    constructor(barElem: HTMLElement, currentStyle?: ProgressBarStyle);
    animateProgressFromTimer(timer: Timer): void;
    /** Animates the progress bar from start to end over the alloted interval */
    animateProgress(elapsedTime: number, totalTime: number): void;
    animateStriped(): void;
    stopAnimation(): void;
    /** Sets the style class of the progress bar element */
    setStyle(newStyle: ProgressBarStyle): void;
    setAnimation(animation: string): void;
    /** Sets the progress bar to a fixed position. Will stop existing progress animations. */
    setFixedPosition(percent: number): void;
}
declare type ProgressBarStyle = 'bg-danger' | 'bg-info' | 'bg-warning' | 'bg-slowed' | 'bg-success' | 'bg-primary' | 'bg-woodcutting' | 'bg-secondary' | 'bg-mining';
