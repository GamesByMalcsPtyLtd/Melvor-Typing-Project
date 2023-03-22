declare class EffectRenderer {
    container: HTMLElement;
    renderedEffects: Map<RenderData, RenderedEffect>;
    removalQueue: Set<RenderData>;
    constructor(container: HTMLElement);
    /** Renders an effect */
    removeEffects(): void;
    /** Clears the removal queue */
    flushRemovalQueue(): void;
    createEffect(icon: string, turns: string, tooltipContent: string): RenderedEffect;
    createTooltip(element: HTMLDivElement, content: string): TippyTooltip;
    addEffect(data: RenderData, turnText: string, tooltipContent: string, media: string): void;
    addDOT(activeDOT: ActiveDOT): void;
    addModifier(activeEffect: ActiveModifierEffect, effect: ModifierEffect, attack: SpecialAttack, turnNoun: Noun): void;
    addSleep(activeSleep: ActiveSleep): void;
    addStun(activeStun: ActiveStun): void;
    addStunImmunity(stunImmunity: ActiveStunImmunity): void;
    formatTurnsLeft(turns: number): string;
    formatStacks(stacks: number, max?: number): string;
    addCurse(activeCurse: ActiveCurse): void;
    addReflexive(activeReflexive: ActiveReflexiveEffect, effect: ReflexiveEffect, attack: SpecialAttack): void;
    addStacking(activeStacking: ActiveStackingEffect, effect: StackingEffect): void;
    addCombo(activeCombo: ActiveComboEffect, effect: ComboEffect): void;
    /** Queues the removal of an effect */
    queueRemoval(data: RenderData): void;
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
};
declare const dotMedia: {
    Burn: string;
    Bleed: string;
    Poison: string;
    Regen: string;
    DeadlyPoison: string;
};
declare type RenderedEffect = {
    tooltip: TippyTooltip;
    container: HTMLDivElement;
    icon: HTMLImageElement;
    number: HTMLDivElement;
};
declare type RenderData = ActiveCurse | ActiveDOT | ActiveModifierEffect | ActiveSleep | ActiveStackingEffect | ActiveComboEffect;
