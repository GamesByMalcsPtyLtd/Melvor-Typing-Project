/** Component for the built obstacles on the agility page */
declare class BuiltAgilityObstacle extends HTMLElement {
    private _content;
    private blockContainer;
    private builtContent;
    private unbuiltContent;
    private inactiveText;
    private name;
    private interval;
    private xpGrants;
    private gpGrants;
    private masteryDisplay;
    private bonusContainer;
    private selectObstacleButton;
    private destroyObstacleButton;
    private unbuiltText;
    private tierName;
    constructor();
    connectedCallback(): void;
    /** Sets the obstacle as unbuilt */
    setUnbuilt(tier: number): void;
    /** Sets the name and mastery of the obstacle, and button callbacks */
    setBuiltObstacle(obstacle: AgilityObstacle): void;
    private setTier;
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
    private _content;
    private blockContainer;
    private unbuiltContent;
    private builtContent;
    private activeText;
    private name;
    private passiveContainer;
    private pillarSelectButton;
    private pillarDestroyButton;
    constructor();
    connectedCallback(): void;
    setUnbuilt(): void;
    setBuilt(pillar: AgilityPillar): void;
    /** Updates the modifiers provided by the pillar */
    private updatePassives;
    setActive(): void;
    setInactive(): void;
}
declare class ElitePassivePillarMenu extends HTMLElement {
    private _content;
    private blockContainer;
    private unbuiltContent;
    private builtContent;
    private activeText;
    private name;
    private passiveContainer;
    private pillarSelectButton;
    private pillarDestroyButton;
    constructor();
    connectedCallback(): void;
    setUnbuilt(): void;
    setBuilt(pillar: AgilityPillar): void;
    /** Updates the modifiers provided by the pillar */
    private updatePassives;
    setActive(): void;
    setInactive(): void;
}
/** Component for the obstacle selection modal */
declare class AgilityObstacleSelection extends HTMLElement {
    private _content;
    private link;
    private activeText;
    private name;
    private interval;
    private masteryLevel;
    private masteryPercent;
    private buildCount;
    private gpReduction;
    private scReduction;
    private itemReduction;
    private costContainer;
    private requirementContainer;
    private xpGrants;
    private gpGrants;
    private passivesContainer;
    private obstacleOnlyElements;
    constructor();
    connectedCallback(): void;
    createInlineRequirement(textClass: string): InlineRequirement;
    /** Sets the content of the costs container */
    private setCosts;
    private setPassives;
    private setBuildStatus;
    setObstacle(obstacle: AgilityObstacle): void;
    setPillar(pillar: AgilityPillar): void;
    setElitePillar(pillar: AgilityPillar): void;
}
declare class InlineRequirement extends HTMLElement {
    private _content;
    private image;
    private text;
    private imageTooltip?;
    constructor();
    setContent(media: string, text: string, tooltipText: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare class MultiProgressBar extends HTMLElement {
    private _content;
    private barContainer;
    private progressDivs;
    private animatedSegment;
    private filledSegments;
    private segmentPattern;
    constructor();
    connectedCallback(): void;
    private getPatternClass;
    private stopSegmentAnimation;
    private startSegmentAnimation;
    setMaxSegments(count: number): void;
    setSegmentPattern(classPattern: string[]): void;
    animateFromTimer(segment: number, timer: Timer): void;
    stopAnimation(): void;
}
