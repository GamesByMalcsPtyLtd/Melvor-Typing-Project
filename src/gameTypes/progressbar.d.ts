declare class ProgressBarElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    outerBar: HTMLDivElement;
    innerBar: HTMLDivElement;
    currentStyle: ProgressBarStyle;
    isStriped: boolean;
    isReversed: boolean;
    constructor();
    connectedCallback(): void;
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
    static stripeClasses: string[];
}
declare type ProgressBarStyle = 'bg-danger' | 'bg-info' | 'bg-warning' | 'bg-slowed' | 'bg-success' | 'bg-primary' | 'bg-woodcutting' | 'bg-secondary' | 'bg-mining' | 'bg-archaeology' | 'bg-harvesting';
