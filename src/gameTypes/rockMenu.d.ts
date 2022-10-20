declare class MiningRockMenu extends HTMLElement {
    private _content;
    private statusText;
    private button;
    private nameText;
    private typeText;
    private xpIcon;
    private masteryIcon;
    private masteryPoolIcon;
    private intervalIcon;
    private rockImage;
    hpProgressText: HTMLElement;
    hpProgress: ProgressBar;
    miningProgress: ProgressBar;
    private mastery;
    private requirementText;
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
    updateGrants(xp: number, masteryXP: number, masteryPoolXP: number, interval: number): void;
}
