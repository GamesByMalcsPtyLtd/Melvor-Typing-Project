declare class EffectRenderer {
    iconContainer: HTMLElement;
    progressBarContainer: HTMLElement;
    progressIconContainer: HTMLElement;
    icons: Map<ActiveCombatEffect, CombatEffectIcon>;
    progressBarPool: CombatEffectProgressBar[];
    progressBars: Map<ActiveCombatEffect, CombatEffectProgressBar>;
    removalQueue: Set<ActiveCombatEffect>;
    constructor(iconContainer: HTMLElement, progressBarContainer: HTMLElement, progressIconContainer: HTMLElement);
    /** Renders an effect */
    removeEffects(): void;
    /** Clears the removal queue */
    flushRemovalQueue(): void;
    /** Adds a new icon for an active effect */
    createEffect(icon: string, turns: string, tooltipContent: HTMLElement): CombatEffectIcon;
    /** Creates a tooltip instance for an icon */
    createTooltip(element: HTMLElement, content: HTMLElement): TippyTooltip;
    /** If the activeEffect is already rendered, updates its turnText and tooltip, else adds a new icon */
    addEffectIcon(activeEffect: ActiveCombatEffect, turnText: string, tooltipContent: HTMLElement, media: string): void;
    /** Gets a progress bar for use. Attempts to remove one from the pool first before creating a new one */
    getProgressBar(): CombatEffectProgressBar;
    addEffectProgressBar(activeEffect: ActiveCombatEffect, progressBar: CombatEffectProgressBarModel): void;
    /** Adds/Updates the rendering of an active combat effect */
    add(activeEffect: ActiveCombatEffect): void;
    getTooltipContent(activeEffect: ActiveCombatEffect): HTMLDivElement;
    /** Queues the removal of an effect */
    queueRemoval(activeEffect: ActiveCombatEffect): void;
    queueRemoveAll(): void;
}
declare const effectMedia: {
    offenseUp: string;
    defenseUp: string;
    offenseDown: string;
    defenseDown: string;
    frozen: string;
    stun: string;
    sleep: string;
    slowed: string;
    markOfDeath: string;
    afflicted: string;
    speedup: string;
    frostBurn: string;
    decay: string;
    madness: string;
    torment: string;
    despair: string;
    stunImmunity: string;
    shocked: string;
    crystallize: string;
    crystalSanction: string;
};
declare const dotMedia: {
    Burn: string;
    Bleed: string;
    Poison: string;
    Regen: string;
    DeadlyPoison: string;
    BarrierBleed: string;
    BarrierBurn: string;
};
declare type CombatEffectIcon = {
    tooltip: TippyTooltip;
    container: HTMLDivElement;
    icon: HTMLImageElement;
    number: HTMLDivElement;
};
interface CombatEffectProgressBar {
    tooltip: TippyTooltip;
    barContainer: HTMLDivElement;
    bar: HTMLDivElement;
    iconSpan: HTMLSpanElement;
    image: HTMLImageElement;
    current: HTMLSpanElement;
    max: HTMLSpanElement;
}
