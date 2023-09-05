declare class DigSiteMapSelectElement extends HTMLElement {
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
declare class ArchaeologyDigSiteContainerElement extends HTMLElement {
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
    toolName: HTMLSpanElement;
    chanceToFind: HTMLDivElement;
    progressBarElement: HTMLDivElement;
    excavateBtn: HTMLButtonElement;
    showArtefactsBtn: HTMLButtonElement;
    masteryDisplay: MasteryDisplay;
    blankMapImage: HTMLImageElement;
    selectedMapBorder: string[];
    toolElements: Map<ArchaeologyTool, HTMLImageElement>;
    toolTooltips: Map<ArchaeologyTool, TippyTooltip>;
    toolImage: HTMLImageElement;
    progressBar: ProgressBar;
    unlockContainer: HTMLDivElement;
    unlockRequirements: HTMLDivElement;
    xpIcon: XPIcon;
    masteryIcon: MasteryXPIcon;
    masteryPoolIcon: MasteryPoolIcon;
    intervalIcon: IntervalIcon;
    doublingIcon: DoublingIcon;
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
    setChanceToFindArtefacts(digSite: ArchaeologyDigSite, archaeology: Archaeology): void;
    setDefaultTool(): void;
    removeActiveMap(): void;
    getProgressBar(): ProgressBar;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, interval: number, doubling: number): void;
    disableExcavateButton(): void;
    enableExcavateButton(): void;
    hideArea(): void;
    showArea(): void;
}
declare class ArtefactDropList extends HTMLElement {
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
declare class ArchaeologyMuseumItemElement extends HTMLElement {
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
declare const enum MapImage {
    BLANK = "assets/media/skills/archaeology/map_blank.png",
    COLOUR = "assets/media/skills/archaeology/map_colour.svg",
    LOCKED = "assets/media/skills/archaeology/map_locked.png"
}
declare enum WeightBadgeClass {
    COMMON = "font-size-xs badge badge-success ml-2",
    UNCOMMON = "font-size-xs badge badge-warning ml-2",
    RARE = "font-size-xs badge badge-danger ml-2",
    VERYRARE = "font-size-xs badge badge-primary ml-2",
    LEGENDARY = "font-size-xs badge badge-secondary ml-2"
}
