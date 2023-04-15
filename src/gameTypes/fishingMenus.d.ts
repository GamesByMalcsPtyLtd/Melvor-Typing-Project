declare class FishingAreaMenu extends HTMLElement {
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
    fishButtons: FishingAreaMenuButton[];
    fishName: HTMLSpanElement;
    fishImage: HTMLImageElement;
    fishInfoContainer: HTMLDivElement;
    fishInterval: HTMLSpanElement;
    masteryDisplay: MasteryDisplay;
    startButton: HTMLButtonElement;
    statusSpinner: HTMLDivElement;
    statusText: HTMLSpanElement;
    xpIcon: XPIcon;
    strXPIcon: STRXPIcon;
    masteryIcon: MasteryXPIcon;
    masteryPoolIcon: MasteryPoolIcon;
    constructor();
    connectedCallback(): void;
    /** Sets the chances of the menu */
    setChances(chance: FishingAreaChances, area: FishingArea): void;
    /** Intializes the menu with the provided fishing data. Also performs localization */
    setAreaData(area: FishingArea): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, strengthXP: number, baseStrengthXP: number): void;
    hideAreaPanel(): void;
    showAreaPanel(): void;
    /** Sets the current fish information */
    setSelectedFish(fish: Fish): void;
    /** Sets the area to an unselected state */
    setUnselected(): void;
    /** Updates the current information on the selected fish */
    updateSelectedFishRates(fish: Fish): void;
    updateButtons(area: FishingArea): void;
    /** Turn the status spinner on and change the start button to stop */
    setActionActive(): void;
    /** Turns the status spinner off and change the start button to start */
    setActionInactive(): void;
}
declare class FishingAreaMenuButton extends HTMLElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    fishImage: HTMLImageElement;
    fishName: HTMLElement;
    constructor();
    connectedCallback(): void;
    setFishUnlocked(fish: Fish, area: FishingArea): void;
    setFishLocked(fish: Fish): void;
}
