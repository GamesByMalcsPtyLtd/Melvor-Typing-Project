declare class MiningRockMenu extends HTMLElement {
    _content: DocumentFragment;
    statusText: LangString;
    button: HTMLAnchorElement;
    nameText: HTMLSpanElement;
    typeText: HTMLElement;
    xpIcon: XPIcon;
    masteryIcon: MasteryXPIcon;
    masteryPoolIcon: MasteryPoolIcon;
    intervalIcon: IntervalIcon;
    rockImage: HTMLImageElement;
    hpProgressText: HTMLElement;
    hpProgress: ProgressBar;
    miningProgress: ProgressBar;
    mastery: MasteryDisplay;
    requirementText: HTMLDivElement;
    gemVeinText: HTMLDivElement;
    meteoriteText: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setRock(rock: MiningRock): void;
    updateHP(rock: MiningRock): void;
    setStatus(statusID: string): void;
    setRequirement(reqText: string): void;
    hideRequirement(): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, interval: number): void;
}
