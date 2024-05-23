declare class HarvestingVeinProductElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    productImage: HTMLImageElement;
    productName: HTMLDivElement;
    requiredIntensity: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setProduct(product: HarvestingProduct): void;
    updateProduct(vein: HarvestingVein, product: HarvestingProduct): void;
}
declare class HarvestingVeinElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    statusText: LangStringElement;
    button: HTMLAnchorElement;
    nameText: HTMLSpanElement;
    abyssalXPIcon: AbyssalXpIconElement;
    masteryIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    intervalIcon: IntervalIconElement;
    veinImage: HTMLImageElement;
    hpProgressText: HTMLElement;
    baseQuantityText: HTMLElement;
    chanceText: HTMLElement;
    hpProgress: ProgressBarElement;
    harvestingProgress: ProgressBarElement;
    veinProductsList: HTMLUListElement;
    veinProducts: Map<HarvestingProduct, HarvestingVeinProductElement>;
    mastery: MasteryDisplayElement;
    requirementText: HTMLDivElement;
    lockedContainer: HTMLDivElement;
    unlockedContainer: HTMLDivElement;
    nextLevel: HTMLSpanElement;
    nextAbyssalLevel: HTMLSpanElement;
    constructor();
    setLockedContainer(vein: HarvestingVein): void;
    setLocked(): void;
    setUnlocked(): void;
    connectedCallback(): void;
    setVein(vein: HarvestingVein): void;
    setProducts(vein: HarvestingVein): void;
    updateProducts(vein: HarvestingVein): void;
    updateIntensity(vein: HarvestingVein): void;
    updateQuantity(vein: HarvestingVein, harvesting: Harvesting): void;
    updateChanceForItem(vein: HarvestingVein): void;
    setStatus(statusID: string): void;
    setRequirement(reqText: string): void;
    hideRequirement(): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, interval: number, vein: HarvestingVein): void;
    /** Updates the Abyssal XP */
    updateAbyssalGrants(xp: number, baseXP: number): void;
}
