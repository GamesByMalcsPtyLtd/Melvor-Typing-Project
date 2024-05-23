declare class FishingAreaMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    areaBlock: HTMLDivElement;
    areaHeader: HTMLDivElement;
    areaName: HTMLSpanElement;
    areaEyecon: HTMLElement;
    fishChance: HTMLSpanElement;
    junkChance: HTMLSpanElement;
    specialChance: HTMLSpanElement;
    buttonContainer: HTMLDivElement;
    infoContainer: HTMLDivElement;
    fishButtons: FishingAreaMenuButtonElement[];
    fishName: HTMLSpanElement;
    fishImage: HTMLImageElement;
    fishInfoContainer: HTMLDivElement;
    fishInterval: HTMLSpanElement;
    masteryDisplay: MasteryDisplayElement;
    startButton: HTMLButtonElement;
    statusSpinner: HTMLDivElement;
    statusText: HTMLSpanElement;
    xpIcon: XpIconElement;
    abyssalXPIcon: AbyssalXpIconElement;
    strXPIcon: SkillXpIconElement;
    masteryIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    constructor();
    connectedCallback(): void;
    /** Sets the chances of the menu */
    setChances(chance: FishingAreaChances, area: FishingArea): void;
    /** Intializes the menu with the provided fishing data. Also performs localization */
    setAreaData(area: FishingArea): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, strengthXP: number, baseStrengthXP: number, fish: Fish): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP */
    updateAbyssalGrants(xp: number, baseXP: number): void;
    hideAreaPanel(): void;
    showAreaPanel(): void;
    /** Sets the current fish information */
    setSelectedFish(fish: Fish): void;
    /** Sets the area to an unselected state */
    setUnselected(): void;
    /** Updates the current information on the selected fish */
    updateSelectedFishRates(fish: Fish): void;
    updateButtons(area: FishingArea, fishing: Fishing): void;
    /** Turn the status spinner on and change the start button to stop */
    setActionActive(): void;
    /** Turns the status spinner off and change the start button to start */
    setActionInactive(): void;
}
declare class FishingAreaMenuButtonElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    fishImage: HTMLImageElement;
    fishName: HTMLSpanElement;
    level: HTMLSpanElement;
    abyssalLevel: HTMLSpanElement;
    xpText: HTMLSpanElement;
    fishRatesCont: HTMLDivElement;
    intervalText: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setFishUnlocked(fish: Fish, area: FishingArea): void;
    updateRates(fish: Fish, fishing: Fishing): void;
    setFishLocked(fish: Fish, fishing: Fishing): void;
}
declare class FishingContestMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    blockTitle: HTMLHeadingElement;
    btnStopContest: HTMLButtonElement;
    contestStatus: HTMLHeadingElement;
    requiredFish: HTMLSpanElement;
    bestFish: HTMLSpanElement;
    leaderboard: HTMLDivElement;
    remainingActions: HTMLSpanElement;
    difficultiesContainer: HTMLDivElement;
    chosenDifficulty: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setHeader(contest: FishingContest): void;
    setDifficulties(contest: FishingContest, difficulties: string[]): void;
    setDifficultyText(difficulty: string): void;
    updateBestFish(result: FishingContestResult): void;
    setActiveFish(activeFish: FishingContestFish): void;
    updateContestStatus(active: boolean): void;
    generateLeaderboard(contest: FishingContest, leaderboard: FishingContestLeaderboardEntry[]): void;
    updateLeaderboard(contest: FishingContest, leaderboard: FishingContestLeaderboardEntry[]): void;
    updateRemainingActions(remainingActions: number): void;
}
