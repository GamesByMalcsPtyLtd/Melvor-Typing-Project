declare class FishingAreaMenu extends HTMLElement {
    private _content;
    private areaBlock;
    private areaHeader;
    private areaName;
    private areaEyecon;
    private fishChance;
    private junkChance;
    private specialChance;
    private buttonContainer;
    private infoContainer;
    private fishButtons;
    private fishName;
    private fishImage;
    private fishInfoContainer;
    private fishInterval;
    private masteryDisplay;
    private startButton;
    private statusSpinner;
    private statusText;
    private xpIcon;
    private strXPIcon;
    private masteryIcon;
    private masteryPoolIcon;
    constructor();
    connectedCallback(): void;
    /** Sets the chances of the menu */
    setChances(chance: FishingAreaChances, area: FishingArea): void;
    /** Intializes the menu with the provided fishing data. Also performs localization */
    setAreaData(area: FishingArea): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP */
    updateGrants(xp: number, masteryXP: number, masteryPoolXP: number, strengthXP: number): void;
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
    private _content;
    private link;
    private fishImage;
    private fishName;
    constructor();
    connectedCallback(): void;
    setFishUnlocked(fish: Fish, area: FishingArea): void;
    setFishLocked(fish: Fish): void;
}
