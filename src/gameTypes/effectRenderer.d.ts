declare class EffectRenderer {
    private container;
    private renderedEffects;
    private removalQueue;
    constructor(container: HTMLElement);
    /** Renders an effect */
    removeEffects(): void;
    /** Clears the removal queue */
    private flushRemovalQueue;
    private createEffect;
    private createTooltip;
    private addEffect;
    addDOT(activeDOT: ActiveDOT): void;
    addModifier(activeEffect: ActiveModifierEffect, effect: ModifierEffect, attack: Attack, turnNoun: Noun): void;
    addSleep(activeSleep: ActiveSleep): void;
    addStun(activeStun: ActiveStun): void;
    addCurse(activeCurse: ActiveCurse): void;
    addReflexive(activeReflexive: ActiveReflexiveEffect, effect: ReflexiveEffect, attack: Attack): void;
    addStacking(activeStacking: ActiveStackingEffect, effect: StackingEffect): void;
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
};
declare const dotMedia: {
    Burn: string;
    Bleed: string;
    Poison: string;
    Regen: string;
};
declare type RenderedEffect = {
    tooltip: TippyTooltip;
    container: HTMLDivElement;
    icon: HTMLImageElement;
    number: HTMLDivElement;
};
declare type RenderData = ActiveCurse | ActiveDOT | ActiveModifierEffect | ActiveSleep | ActiveStackingEffect;
