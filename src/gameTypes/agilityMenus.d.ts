/** Component for the built obstacles on the agility page */
declare class BuiltAgilityObstacle extends HTMLElement {
    _content: DocumentFragment;
    blockContainer: HTMLDivElement;
    builtContent: HTMLDivElement;
    unbuiltContent: HTMLDivElement;
    inactiveText: HTMLHeadingElement;
    name: HTMLSpanElement;
    interval: HTMLSpanElement;
    xpGrants: HTMLSpanElement;
    gpGrants: HTMLSpanElement;
    masteryDisplay: MasteryDisplay;
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
    setLevelLocked(level: number): void;
    /** Sets the unbuilt obstacle to beng unlocked */
    setUnlocked(): void;
    /** Updates the interval, xp and gp of the built obstacle */
    updateRates(interval: number, xp: number, gp: number): void;
    /** Updates the modifiers provided by the built obstacle */
    updatePassives(passives: MappedModifiers): void;
    /** Turns the background highlight on or off */
    setHighlight(on: boolean): void;
    /** Sets the obstacle to being active */
    setActive(): void;
    /** Sets the obstacle to being inactive */
    setInactive(): void;
}
declare class PassivePillarMenu extends HTMLElement {
    _content: DocumentFragment;
    blockContainer: HTMLDivElement;
    unbuiltContent: HTMLDivElement;
    builtContent: HTMLDivElement;
    activeText: HTMLHeadingElement;
    name: HTMLHeadingElement;
    passiveContainer: HTMLDivElement;
    pillarSelectButton: HTMLButtonElement;
    pillarDestroyButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setUnbuilt(): void;
    setBuilt(pillar: AgilityPillar): void;
    /** Updates the modifiers provided by the pillar */
    updatePassives(passives: MappedModifiers): void;
    setActive(): void;
    setInactive(): void;
}
declare class ElitePassivePillarMenu extends HTMLElement {
    _content: DocumentFragment;
    blockContainer: HTMLDivElement;
    unbuiltContent: HTMLDivElement;
    builtContent: HTMLDivElement;
    activeText: HTMLHeadingElement;
    name: HTMLHeadingElement;
    passiveContainer: HTMLDivElement;
    pillarSelectButton: HTMLButtonElement;
    pillarDestroyButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setUnbuilt(): void;
    setBuilt(pillar: AgilityPillar): void;
    /** Updates the modifiers provided by the pillar */
    updatePassives(passives: MappedModifiers): void;
    setActive(): void;
    setInactive(): void;
}
/** Component for the obstacle selection modal */
declare class AgilityObstacleSelection extends HTMLElement {
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
    xpGrants: HTMLSpanElement;
    gpGrants: HTMLSpanElement;
    passivesContainer: HTMLDivElement;
    obstacleOnlyElements: HTMLElement[];
    constructor();
    connectedCallback(): void;
    createInlineRequirement(textClass: string): InlineRequirement;
    /** Sets the content of the costs container */
    setCosts(items: AnyItemQuantity[], gpReq: number, scReq: number): void;
    setPassives(passives: MappedModifiers): void;
    setBuildStatus(built: boolean): void;
    setObstacle(obstacle: AgilityObstacle): void;
    setPillar(pillar: AgilityPillar): void;
    setElitePillar(pillar: AgilityPillar): void;
}
declare class InlineRequirement extends HTMLElement {
    _content: DocumentFragment;
    image: HTMLImageElement;
    text: HTMLSpanElement;
    imageTooltip?: TippyTooltip;
    constructor();
    setContent(media: string, text: string, tooltipText: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare class MultiProgressBar extends HTMLElement {
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
