declare class SkillProgressDisplay {
    game: Game;
    elems: Map<AnySkill, SkillProgressElems>;
    constructor(game: Game);
    updateXP(skill: AnySkill): void;
    updateLevel(skill: AnySkill): void;
    updateAbyssalXP(skill: AnySkill): void;
    updateAbyssalLevel(skill: AnySkill): void;
    getSkillElements(skill: AnySkill): SkillProgressElems;
    createTooltip(element: HTMLElement, content: string): TippyTooltip;
    createTooltipHTML(skill: AnySkill): string;
    createAyssalTooltipHTML(skill: AnySkill): string;
}
declare type SkillProgressElems = {
    level: HTMLElement[];
    percent: HTMLElement[];
    xp: HTMLElement[];
    progress: HTMLElement[];
    tooltip: TippyTooltip[];
    abyssalLevel: HTMLElement[];
    abyssalPercent: HTMLElement[];
    abyssalXp: HTMLElement[];
    abyssalProgress: HTMLElement[];
    abyssalTooltip: TippyTooltip[];
};
declare class SkillSidebarAsideElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    loadingSpinner: HTMLSpanElement;
    lockIcon: HTMLElement;
    level: HTMLSpanElement;
    abyssalLevel: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setLocked(): void;
    setUnlocked(visibility: SkillSidebarLevelVisibility): void;
    setStandardVisibility(shouldShow: boolean): void;
    setAbyssalVisibility(shouldShow: boolean): void;
    updateLevel(level: number, levelCap: number): void;
    updateAbyssalLevel(level: number, levelCap: number): void;
}
declare class SkillNav {
    game: Game;
    navs: Map<AnySkill, SkillSidebarItem[]>;
    active: Set<AnySkill>;
    glowing: Set<AnySkill>;
    constructor(game: Game);
    /** Updates the level of a skill */
    updateSkillLevel(skill: AnySkill): void;
    /** Updates the abyssal level of a skill */
    updateAbyssalSkillLevel(skill: AnySkill): void;
    /** Updates the lock icon of a skill */
    updateSkillLock(skill: AnySkill): void;
    updateDisplayedLevels(): void;
    updateLevelVisibility(skill: AnySkill): void;
    updateAbyssalLevelVisibility(skill: AnySkill): void;
    /** Sets a skill as active and highlights it green */
    setActive(skill: AnySkill): void;
    /** Sets a skill as inactive and removes its green highlights */
    setInactive(skill: AnySkill): void;
    setGlowing(skill: AnySkill, shouldGlow: boolean): void;
    /** Removes grene highlights from all skills */
    setAllInactive(): void;
    getNavs(skill: AnySkill): SkillSidebarItem[];
    shouldShowStandardLevels(skill: AnySkill): boolean;
    shouldShowAbyssalLevels(skill: AnySkill): boolean;
    getLevelVisibility(skill: AnySkill): SkillSidebarLevelVisibility;
}
declare type SkillSidebarLevelVisibility = {
    standard: boolean;
    abyssal: boolean;
};
declare type SkillSidebarItem = {
    item: SidebarItemWrapper;
    name: HTMLElement;
    aside: SkillSidebarAsideElement;
};
declare class SkillHeaderElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    skillLevelContainers: HTMLElement[];
    abyssalLevelContainers: HTMLElement[];
    skillProgressBar: HTMLDivElement;
    abyssalProgressBar: HTMLDivElement;
    upperContainer: HTMLDivElement;
    skillLevel: HTMLSpanElement;
    skillXp: HTMLSpanElement;
    combatLevelXpLimit: HTMLSpanElement;
    abyssalLevel: HTMLSpanElement;
    abyssalXp: HTMLSpanElement;
    upgradeChainContainer: HTMLDivElement;
    itemChargeContainer: HTMLDivElement;
    lowerContainer: HTMLDivElement;
    levelCapButton: LevelCapPurchaseButtonElement;
    abyssalLevelCapButton: LevelCapPurchaseButtonElement;
    skillTreeButton: SkillTreeButtonElement;
    constructor();
    connectedCallback(): void;
    setSkill(skill: AnySkill): void;
    static initializeForSkill(skill: AnySkill): void;
    updateXP(game: Game, skill: AnySkill): void;
    updateLevel(game: Game, skill: AnySkill): void;
    updateAbyssalXP(game: Game, skill: AnySkill): void;
    updateAbyssalLevel(game: Game, skill: AnySkill): void;
    toggleCombatLevelCap(show: boolean): void;
    updateLevelVisibility(skill: AnySkill): void;
    updateAbyssalLevelVisibility(skill: AnySkill): void;
    appendUpper(...nodes: Node[]): void;
    appendLower(...nodes: Node[]): void;
}
declare class CombatSkillProgressTableRow {
    row: HTMLTableRowElement;
    skillImage: HTMLImageElement;
    skillLevelContainers: HTMLElement[];
    abyssalLevelContainers: HTMLElement[];
    skillLevel: HTMLElement;
    abyssalLevel: HTMLElement;
    skillLevelProgress: HTMLElement;
    abyssalLevelProgress: HTMLElement;
    skillXp: HTMLElement;
    abyssalXp: HTMLElement;
    levelCapContainer: HTMLTableCellElement;
    levelCapButton: LevelCapPurchaseButtonElement;
    abyssalLevelCapButton: LevelCapPurchaseButtonElement;
    skillProgressBarContainer: HTMLDivElement;
    skillProgressBar: HTMLDivElement;
    abyssalProgressBarContainer: HTMLDivElement;
    abyssalProgressBar: HTMLDivElement;
    skillXPTooltip?: TippyTooltip;
    abyssalXPTooltip?: TippyTooltip;
    constructor(body: HTMLTableSectionElement);
    setSkill(skill: AnySkill): void;
    updateXP(game: Game, skill: AnySkill): void;
    updateLevel(game: Game, skill: AnySkill): void;
    updateAbyssalXP(game: Game, skill: AnySkill): void;
    updateAbyssalLevel(game: Game, skill: AnySkill): void;
    showLevelCapPurchase(): void;
    hideLevelCapPurchase(): void;
    updateLevelVisibility(skill: AnySkill): void;
    updateAbyssalLevelVisibility(skill: AnySkill): void;
    destroy(): void;
    createXPTooltip(element: HTMLElement): TippyTooltip;
}
declare class CombatSkillProgressTableElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    tableBody: HTMLTableSectionElement;
    levelCapHeader: HTMLTableCellElement;
    tableRows: Map<AnySkill, CombatSkillProgressTableRow>;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(game: Game): void;
    updateLevelCapButtons(game: Game): void;
    updateXP(game: Game, skill: AnySkill): void;
    updateLevel(game: Game, skill: AnySkill): void;
    updateAbyssalXP(game: Game, skill: AnySkill): void;
    updateAbyssalLevel(game: Game, skill: AnySkill): void;
    updateLevelVisibility(skill: AnySkill): void;
    updateAbyssalLevelVisibility(skill: AnySkill): void;
}
