declare class DigSiteMapSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    mapContainer: HTMLDivElement;
    mapElements: {
        img: HTMLImageElement;
        tooltip: TippyTooltip;
    }[];
    constructor();
    connectedCallback(): void;
    setDigSite(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    generateMapSelect(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    updateMapSelection(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    removeOutline(img: HTMLImageElement): void;
    addOutline(img: HTMLImageElement): void;
    getTooltipContent(digSite: ArchaeologyDigSite, mapIndex: number): string;
    getLockedMapSlotTooltipContent(): string;
}
declare class ArchaeologyDigSiteContainerElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    name: HTMLSpanElement;
    level: HTMLSpanElement;
    image: HTMLImageElement;
    mapSelect: DigSiteMapSelectElement;
    mapImage: HTMLImageElement;
    mapInfoContainer: HTMLDivElement;
    noMapSelected: HTMLDivElement;
    mapTier: HTMLSpanElement;
    mapActions: HTMLDivElement;
    mapArtefactValue: HTMLDivElement;
    toolContainer: HTMLDivElement;
    toolInfoContainer: HTMLDivElement;
    chanceToFind: HTMLDivElement;
    artefactChances: Map<ArchaeologyTool, HTMLDivElement>;
    excavateBtn: HTMLButtonElement;
    showArtefactsBtn: HTMLButtonElement;
    masteryDisplay: MasteryDisplayElement;
    blankMapImage: HTMLImageElement;
    selectedMapBorder: string[];
    toolElements: Map<ArchaeologyTool, HTMLImageElement>;
    toolTooltips: Map<ArchaeologyTool, TippyTooltip>;
    toolImage: HTMLImageElement;
    progressBar: ProgressBarElement;
    unlockContainer: HTMLDivElement;
    unlockRequirements: HTMLDivElement;
    xpIcon: XpIconElement;
    masteryIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    intervalIcon: IntervalIconElement;
    doublingIcon: DoublingIconElement;
    hasDigSiteRequirement: HTMLElement;
    itemReqTooltip?: TippyTooltip;
    areaContainer: HTMLDivElement;
    eyeToggle: HTMLElement;
    constructor();
    connectedCallback(): void;
    setDigSite(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    setUnlockRequirements(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    setUnlocked(): void;
    setLocked(): void;
    setToolSelection(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    getTooltipContent(tool: ArchaeologyTool): string;
    deselectTool(tool: ArchaeologyTool): void;
    selectTool(tool: ArchaeologyTool): void;
    setActiveMap(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    updateMapCharges(map: DigSiteMap): void;
    addOutlineSelectedTool(tool: ArchaeologyTool): void;
    removeOutlineSelectedTool(tool: ArchaeologyTool): void;
    showNoMapSelected(): void;
    setActiveTools(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    updateArtefactChances(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    setDefaultTool(): void;
    removeActiveMap(): void;
    getProgressBar(): ProgressBarElement;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, interval: number, doubling: number, doublingSources: HTMLSpanElement[], digSite: ArchaeologyDigSite): void;
    disableExcavateButton(): void;
    enableExcavateButton(): void;
    hideArea(): void;
    showArea(): void;
}
declare class ArtefactDropListElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    artefactsTiny: HTMLDivElement;
    artefactsSmall: HTMLDivElement;
    artefactsMedium: HTMLDivElement;
    artefactsLarge: HTMLDivElement;
    hasItemRequirement: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setList(digSite: ArchaeologyDigSite): void;
    getItemDrop(item: AnyItem, quantity: number, weight: number): string;
    getWeightBadge(weight: number): string;
    formatSpecialDrop(item: AnyItem, qty?: number): string;
}
declare class ArchaeologyMuseumItemElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    itemImage: HTMLImageElement;
    inBank: HTMLDivElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updateItem(item: AnyItem, game: Game): void;
    showInBank(): void;
    hideInBank(): void;
    getItemTooltipHTML(item: AnyItem, game: Game): string;
}
declare enum WeightBadgeClass {
    COMMON = "font-size-xs badge badge-success ml-2",
    UNCOMMON = "font-size-xs badge badge-warning ml-2",
    RARE = "font-size-xs badge badge-danger ml-2",
    VERYRARE = "font-size-xs badge badge-primary ml-2",
    LEGENDARY = "font-size-xs badge badge-secondary ml-2"
}
