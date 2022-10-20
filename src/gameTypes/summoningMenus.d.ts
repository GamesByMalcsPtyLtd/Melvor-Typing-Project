declare class SummoningMarkDiscovery extends HTMLElement {
    private _content;
    private status;
    private name;
    private image;
    private levelRequirement;
    private discoveredContent;
    private progressBar;
    private skillImageContainer;
    private discoveryTotal;
    private quickCreateButton;
    constructor();
    connectedCallback(): void;
    /** Sets the mark to the state of being too high level */
    setLocked(mark: SummoningRecipe): void;
    /** Sets the mark to the state of being unlocked via level, but undiscovered */
    setUndiscovered(mark: SummoningRecipe): void;
    /** Sets the mark to the state of being discovered */
    setDiscovered(mark: SummoningRecipe): void;
    private getSkillIcon;
    /** Templates and sets the name field for the mark */
    private setName;
    /** Sets the skill images to the specified skills */
    private setSkillImages;
    /** Updates the discovery progress bar and the current discovery count */
    updateDiscoveryCount(mark: SummoningRecipe): void;
}
interface SynergySearchMarkElements {
    container: HTMLDivElement;
    image: HTMLImageElement;
    quantity: HTMLElement;
    skillImage: HTMLImageElement;
}
declare class SummoningSynergySearch extends HTMLElement {
    private _content;
    private flexContainer;
    private markElements0;
    private markElements1;
    private synergyIcon;
    private synergyDescription;
    synergy?: SummoningSynergy;
    constructor();
    connectedCallback(): void;
    /** Sets the synergy, setting the skill images, lock status and quantities */
    setSynergy(synergy: SummoningSynergy): void;
    /** Updates the locked/unlocked status */
    updateLockStatus(): void;
    /** Sets the synergy as locked */
    setLocked(): void;
    /** Sets the description for locked synergies */
    setLockedDescriptions(): void;
    /** Sets the synergy as unlocked */
    setUnlocked(): void;
    /** Updates the displayed quantity of summons */
    updateQuantities(): void;
    private updateMarkQuantity;
}
interface SynergySearchOptionElements {
    link: HTMLAnchorElement;
    image: HTMLImageElement;
    name: HTMLSpanElement;
}
/** Menu for searching for summoning synergies */
declare class SynergySearchMenu extends HTMLElement {
    private _content;
    private showAllButton;
    private showUnlockedButton;
    private filterDropdownButton;
    private filterOptionsContainer;
    private filterOptions;
    private searchBar;
    private searchElements;
    private visibleSynergies;
    constructor();
    connectedCallback(): void;
    /** Initializes the display of each synergy */
    initialize(): void;
    /** Shows all synergies */
    showAllSynergies(): void;
    showSynergiesWithMark(mark: SummoningRecipe): void;
    /** Shows only the synergies the player has unlocked */
    private showUnlockedSynergies;
    /** Updates the dropdown menu options based on unlocked marks */
    updateFilterOptions(): void;
    /** Updates the unlock state of visible synergies */
    updateVisibleElementUnlocks(): void;
    /** Updates the quantities of visible synergies */
    updateVisibleElementQuantities(): void;
    /** Updates the visible synergies based on a fuzzy search query */
    private querySynergies;
    /** Callback for when the current search changes */
    private onSearchChange;
}
