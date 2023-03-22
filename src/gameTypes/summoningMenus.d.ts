declare class SummoningMarkDiscovery extends HTMLElement {
    _content: DocumentFragment;
    status: HTMLElement;
    name: HTMLSpanElement;
    image: HTMLImageElement;
    levelRequirement: HTMLHeadingElement;
    discoveredContent: HTMLDivElement;
    progressBar: HTMLDivElement;
    skillImageContainer: HTMLHeadingElement;
    discoveryTotal: HTMLHeadingElement;
    quickCreateButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    /** Sets the mark to the state of being too high level */
    setLocked(mark: SummoningRecipe): void;
    /** Sets the mark to the state of being unlocked via level, but undiscovered */
    setUndiscovered(mark: SummoningRecipe): void;
    /** Sets the mark to the state of being discovered */
    setDiscovered(mark: SummoningRecipe): void;
    getSkillIcon(skill: AnySkill): HTMLImageElement;
    /** Templates and sets the name field for the mark */
    setName(name: string): void;
    /** Sets the skill images to the specified skills */
    setSkillImages(skills: AnySkill[]): void;
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
    _content: DocumentFragment;
    flexContainer: HTMLDivElement;
    markElements0: SynergySearchMarkElements;
    markElements1: SynergySearchMarkElements;
    synergyIcon: HTMLImageElement;
    synergyDescription: HTMLDivElement;
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
    updateMarkQuantity(markElements: SynergySearchMarkElements, mark: SummoningRecipe): void;
}
interface SynergySearchOptionElements {
    link: HTMLAnchorElement;
    image: HTMLImageElement;
    name: HTMLSpanElement;
}
/** Menu for searching for summoning synergies */
declare class SynergySearchMenu extends HTMLElement {
    _content: DocumentFragment;
    showAllButton: HTMLButtonElement;
    showUnlockedButton: HTMLButtonElement;
    filterDropdownButton: HTMLButtonElement;
    filterOptionsContainer: HTMLDivElement;
    filterOptions: Map<SummoningRecipe, SynergySearchOptionElements>;
    searchBar: HTMLInputElement;
    searchElements: Map<SummoningSynergy, SummoningSynergySearch>;
    visibleSynergies: Set<SummoningSynergySearch>;
    constructor();
    connectedCallback(): void;
    /** Initializes the display of each synergy */
    initialize(): void;
    /** Shows all synergies */
    showAllSynergies(): void;
    showSynergiesWithMark(mark: SummoningRecipe): void;
    /** Shows only the synergies the player has unlocked */
    showUnlockedSynergies(): void;
    /** Updates the dropdown menu options based on unlocked marks */
    updateFilterOptions(): void;
    /** Updates the unlock state of visible synergies */
    updateVisibleElementUnlocks(): void;
    /** Updates the quantities of visible synergies */
    updateVisibleElementQuantities(): void;
    /** Updates the visible synergies based on a fuzzy search query */
    querySynergies(query: string): void;
    /** Callback for when the current search changes */
    onSearchChange(): void;
}
