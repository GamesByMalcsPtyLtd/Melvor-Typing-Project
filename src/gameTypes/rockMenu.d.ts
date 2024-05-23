declare class MiningRockElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    statusText: LangStringElement;
    nameText: HTMLSpanElement;
    typeText: HTMLElement;
    xpIcon: XpIconElement;
    abyssalXPIcon: AbyssalXpIconElement;
    masteryIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    intervalIcon: IntervalIconElement;
    rockImage: HTMLImageElement;
    hpProgressText: HTMLElement;
    hpProgress: ProgressBarElement;
    miningProgress: ProgressBarElement;
    mastery: MasteryDisplayElement;
    requirementText: HTMLDivElement;
    gemVeinText: HTMLDivElement;
    meteoriteText: HTMLDivElement;
    fragmentText: HTMLDivElement;
    lockedContainer: HTMLDivElement;
    unlockedContainer: HTMLAnchorElement;
    nextLevel: HTMLSpanElement;
    nextAbyssalLevel: HTMLSpanElement;
    requiredPickaxe: HTMLDivElement;
    _rock?: MiningRock;
    constructor();
    setLockedContainer(rock: MiningRock): void;
    setLocked(): void;
    setUnlocked(): void;
    connectedCallback(): void;
    setRock(rock: MiningRock): void;
    updateHP(rock: MiningRock): void;
    setStatus(statusID: string): void;
    setRequirement(reqText: string): void;
    hideRequirement(): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, interval: number, rock: MiningRock): void;
    /** Updates the Abyssal XP */
    updateAbyssalGrants(xp: number, baseXP: number): void;
}
