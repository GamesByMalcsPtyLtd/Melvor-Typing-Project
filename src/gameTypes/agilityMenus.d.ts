/** Component for the built obstacles on the agility page */
declare class BuiltAgilityObstacleElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    blockContainer: HTMLDivElement;
    builtContent: HTMLDivElement;
    unbuiltContent: HTMLDivElement;
    inactiveText: HTMLHeadingElement;
    name: HTMLSpanElement;
    interval: HTMLSpanElement;
    xpContainer: HTMLSpanElement;
    xpAmount: HTMLSpanElement;
    axpContainer: HTMLSpanElement;
    axpAmount: HTMLSpanElement;
    itemCurrencyContainer: HTMLSpanElement;
    masteryDisplay: MasteryDisplayElement;
    bonusContainer: HTMLDivElement;
    selectObstacleButton: HTMLButtonElement;
    destroyObstacleButton: HTMLButtonElement;
    unbuiltText: HTMLHeadingElement;
    tierName: HTMLHeadingElement;
    constructor();
    connectedCallback(): void;
    /** Sets the obstacle as unbuilt */
    setUnbuilt(tier: number): void;
    /** Sets the name and mastery of the obstacle, and button callbacks */
    setBuiltObstacle(obstacle: AgilityObstacle): void;
    setTier(tier: number): void;
    /** Sets the unbuilt obstacle to being locked */
    setLevelLocked(slot: AgilityObstacleSlot, agility: Agility): void;
    /** Sets the unbuilt obstacle to beng unlocked */
    setUnlocked(): void;
    /** Updates the interval, xp, items and currencies of the built obstacle */
    updateRates(interval: number, xp: number, axp: number, items: AnyItemQuantity[], currencies: CurrencyQuantity[]): void;
    /** Updates the modifiers provided by the built obstacle */
    updatePassives(obstacle: AgilityObstacle, negMult: number): void;
    /** Turns the background highlight on or off */
    setHighlight(on: boolean): void;
    /** Turns the background highlight on or off */
    setSearchHighlight(on: boolean): void;
    /** Sets the obstacle to being active */
    setActive(): void;
    /** Sets the obstacle to being inactive */
    setInactive(): void;
}
declare class PassivePillarMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    blockContainer: HTMLDivElement;
    unbuiltContent: HTMLDivElement;
    createText: HTMLHeadingElement;
    builtContent: HTMLDivElement;
    activeText: HTMLHeadingElement;
    name: HTMLHeadingElement;
    passiveContainer: HTMLDivElement;
    pillarSelectButton: HTMLButtonElement;
    pillarDestroyButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setUnbuilt(slot: AgilityPillarSlot, slotID: number): void;
    setBuilt(pillar: AgilityPillar): void;
    /** Updates the modifiers provided by the pillar */
    updatePassives(pillar: AgilityPillar): void;
    setActive(): void;
    setInactive(): void;
    /** Turns the background highlight on or off */
    setSearchHighlight(on: boolean): void;
}
/** Component for the obstacle selection modal */
declare class AgilityObstacleSelectionElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    activeText: HTMLHeadingElement;
    name: HTMLSpanElement;
    interval: HTMLSpanElement;
    masteryLevel: HTMLSpanElement;
    masteryPercent: HTMLElement;
    buildCount: HTMLHeadingElement;
    gpReduction: HTMLSpanElement;
    scReduction: HTMLSpanElement;
    itemReduction: HTMLSpanElement;
    costContainer: HTMLDivElement;
    requirementContainer: HTMLDivElement;
    xpContainer: HTMLSpanElement;
    xpAmount: HTMLSpanElement;
    axpContainer: HTMLSpanElement;
    axpAmount: HTMLSpanElement;
    itemCurrencyContainer: HTMLSpanElement;
    passivesContainer: HTMLDivElement;
    obstacleOnlyElements: HTMLElement[];
    constructor();
    connectedCallback(): void;
    createInlineRequirement(textClass: string): InlineRequirementElement;
    /** Sets the content of the costs container */
    setCosts(items: AnyItemQuantity[], currencies: CurrencyQuantity[]): void;
    setPassives(obstacle: BaseAgilityObject, negMult?: number): void;
    setBuildStatus(built: boolean): void;
    setObstacle(obstacle: AgilityObstacle): void;
    setPillar(pillar: AgilityPillar): void;
    /** Turns the background highlight on or off */
    setSearchHighlight(on: boolean): void;
}
declare class InlineRequirementElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    image: HTMLImageElement;
    text: HTMLSpanElement;
    imageTooltip?: TippyTooltip;
    tooltipDisabled: boolean;
    tooltipContent: string;
    constructor();
    setContent(media: string, text: string, tooltipText: string): void;
    disableTooltip(): void;
    enableTooltip(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare class MultiProgressBarElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    barContainer: HTMLDivElement;
    progressDivs: {
        container: HTMLDivElement;
        bar: HTMLDivElement;
    }[];
    animatedSegment: number;
    filledSegments: number;
    segmentPattern: string[];
    constructor();
    connectedCallback(): void;
    getPatternClass(segmentNumber: number): string;
    stopSegmentAnimation(segmentNumber: number): void;
    startSegmentAnimation(segmentNumber: number, timer: Timer): void;
    setMaxSegments(count: number): void;
    setSegmentPattern(classPattern: string[]): void;
    animateFromTimer(segment: number, timer: Timer): void;
    stopAnimation(): void;
}
declare class AgilityBreakdownElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    interval: HTMLSpanElement;
    xpContainer: HTMLSpanElement;
    xpAmount: HTMLSpanElement;
    axpContainer: HTMLSpanElement;
    axpAmount: HTMLSpanElement;
    currencyContainer: HTMLSpanElement;
    itemsContainer: HTMLSpanElement;
    viewPassivesButton: HTMLButtonElement;
    searchBar: HTMLInputElement;
    clearSearchBar: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    init(agility: Agility): void;
    updateRates(interval: number, xp: number, axp: number, items: AnyItemQuantity[], currencies: CurrencyQuantity[]): void;
    cachedSearchResults: AgilitySearch[];
    /** Updates the obstacles based on a fuzzy search query */
    queryObstacles(query: string): void;
    /** Callback for when the current search changes */
    onSearchChange(searchOnEmpty?: boolean): void;
}
