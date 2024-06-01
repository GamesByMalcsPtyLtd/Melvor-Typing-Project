declare class SummoningMarkDiscoveryElement extends HTMLElement implements CustomElement {
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
    setMark(mark: SummoningRecipe, summoning: Summoning): void;
    /** Updates the current state based on the mark discovery count + level */
    updateState(mark: SummoningRecipe, summoning: Summoning): void;
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
declare class SummoningSynergySearchElement extends HTMLElement implements CustomElement {
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
declare class SynergySearchMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    showAllButton: HTMLButtonElement;
    showUnlockedButton: HTMLButtonElement;
    filterDropdownButton: HTMLButtonElement;
    filterOptionsContainer: HTMLDivElement;
    filterOptions: Map<SummoningRecipe, SynergySearchOptionElements>;
    searchBar: HTMLInputElement;
    searchElements: Map<SummoningSynergy, SummoningSynergySearchElement>;
    visibleSynergies: Set<SummoningSynergySearchElement>;
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
declare class SummoningMarkMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    discoveryContainer: HTMLDivElement;
    categoryImage: HTMLImageElement;
    categoryName: HTMLSpanElement;
    discoveryElements: SummoningMarkDiscoveryElement[];
    discoveryElemMap: Map<SummoningRecipe, SummoningMarkDiscoveryElement>;
    activeCategory?: SummoningCategory;
    constructor();
    connectedCallback(): void;
    showMarksInCategory(category: SummoningCategory, summoning: Summoning): void;
    updateMarkState(mark: SummoningRecipe, summoning: Summoning): void;
    updateDiscoveryCount(mark: SummoningRecipe): void;
}
