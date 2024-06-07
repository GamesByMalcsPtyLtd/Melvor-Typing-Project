/** Component for individual constellations */
declare class ConstellationMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    image: HTMLImageElement;
    name: HTMLHeadingElement;
    skillIcons: HTMLDivElement;
    skillIcon0: HTMLImageElement;
    xpIcon: XpIconElement;
    abyssalXPIcon: AbyssalXpIconElement;
    masteryIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    intervalIcon: IntervalIconElement;
    rewardsContainer: HTMLDivElement;
    progressBar: ProgressBarElement;
    studyButton: HTMLButtonElement;
    exploreButton: HTMLButtonElement;
    masteryDisplay: MasteryDisplayElement;
    stardustBreakdown: HTMLDivElement;
    stardustIcons: ItemCurrentIconElement[];
    constructor();
    connectedCallback(): void;
    initIcons(game: Game): void;
    /** Sets the display to a given constellation */
    setConstellation(constellation: AstrologyRecipe): void;
    setRewardIcons(constellation: AstrologyRecipe): void;
    createRewardItemIcon(item: AnyItem): void;
    createRewardGenericIcon(media: string, name: string): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, masteryPoolXP: number, interval: number, constellation: AstrologyRecipe): void;
    /** Updates the Abyssal XP */
    updateAbyssalGrants(xp: number, baseXP: number): void;
    /** Updates the stardust quantities */
    updateQuantities(game: Game): void;
    /** Sets the constellation to the explored state */
    setExplored(): void;
    /** Sets the constellation to the un-explored state */
    setUnexplored(): void;
}
/** Component for displaying a locked constellation */
declare class LockedConstellationMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    level: HTMLSpanElement;
    abyssalLevel: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setConstellation(constellation: AstrologyRecipe, astrology: Astrology): void;
}
/** Component for displaying standard/unique modifiers, with a reroll button
 *  For usage in the AstrologyExplorationPanel component
 */
declare class AstrologyModifierDisplayElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    starImage: HTMLImageElement;
    modifierContainer: HTMLDivElement;
    modifierText: HTMLHeadingElement;
    upgradeButton: HTMLButtonElement;
    starDustImage: HTMLImageElement;
    starDustQuantity: HTMLSpanElement;
    modifierProgress: HTMLUListElement;
    modifierStatus: {
        locked: HTMLLIElement;
        active: HTMLLIElement;
        inactive: HTMLLIElement;
    };
    constructor();
    connectedCallback(): void;
    /** Sets the display to a standard modifier */
    setStandard(): void;
    /** Sets the display to a unique modifier */
    setUnique(): void;
    /** Sets the display to a abyssal modifier */
    setAbyssal(): void;
    /** Sets the modifier text to mastery locked */
    setMasteryLocked(level: number): void;
    /** Sets the modifier text to mastery locked */
    setLocked(reqs: AnyRequirement[]): void;
    /** Sets the modifier text to the given description (and green) */
    setModifier(astroMod: AstrologyModifier, mult: number): void;
    setModifierStatus(buyCount: number, data: AstrologyModifier): void;
    setModifierStatusLocked(data: AstrologyModifier): void;
    updateCost(astrology: Astrology, constellation: AstrologyRecipe, astroMod: AstrologyModifier): void;
    /** Sets the quantity of stardust required to reroll */
    setDustQuantity(quantity: number): void;
    /** Sets the onclick callback function of the reroll button */
    setUpgradeCallback(callback: VoidFunction): void;
    /** Hides the upgrade button when max level is reached */
    hideUpgradeButton(): void;
    /** Shows the upgrade button when max level is reached */
    showUpgradeButton(): void;
}
/** Component for showing an explored constellation in Astrology */
declare class AstrologyExplorationPanelElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    standardModifierContainer: HTMLDivElement;
    uniqueModifierContainer: HTMLDivElement;
    abyssalModifierContainer: HTMLDivElement;
    standardModifiers: AstrologyModifierDisplayElement[];
    uniqueModifiers: AstrologyModifierDisplayElement[];
    abyssalModifiers: AstrologyModifierDisplayElement[];
    constructor();
    connectedCallback(): void;
    setMaxStandardMods(amount: number): void;
    setMaxUniqueMods(amount: number): void;
    setMaxAbyssalMods(amount: number): void;
    /** Sets upgrade costs for all buttons in constellation */
    setUpgradeCosts(astrology: Astrology, constellation: AstrologyRecipe): void;
    /** Sets upgrade cost for specific standard star in constellation */
    setStandardUpgradeCost(astrology: Astrology, constellation: AstrologyRecipe, modID: number): void;
    /** Sets upgrade cost for specific unique star in constellation */
    setUniqueUpgradeCost(astrology: Astrology, constellation: AstrologyRecipe, modID: number): void;
    /** Sets upgrade cost for specific abyssal star in constellation */
    setAbyssalUpgradeCost(astrology: Astrology, constellation: AstrologyRecipe, modID: number): void;
    /** Sets the callbacks of all buttons to the given constellation */
    setConstellation(constellation: AstrologyRecipe): void;
    setStandardModifier(id: number, astroMod: AstrologyModifier, mult: number): void;
    setStandardModifierStatus(id: number, buyCount: number, data: AstrologyModifier): void;
    setStandardLocked(id: number, reqs: AnyRequirement[]): void;
    setStandardLockedStatus(id: number, data: AstrologyModifier): void;
    setStandardHidden(id: number): void;
    setStandardShow(id: number): void;
    setUniqueModifier(id: number, astroMod: AstrologyModifier, mult: number): void;
    setUniqueModifierStatus(id: number, buyCount: number, data: AstrologyModifier): void;
    setUniqueLocked(id: number, reqs: AnyRequirement[]): void;
    setUniqueLockedStatus(id: number, data: AstrologyModifier): void;
    setUniqueHidden(id: number): void;
    setUniqueShow(id: number): void;
    setAbyssalModifier(id: number, astroMod: AstrologyModifier, mult: number): void;
    setAbyssalModifierStatus(id: number, buyCount: number, data: AstrologyModifier): void;
    setAbyssalLocked(id: number, reqs: AnyRequirement[]): void;
    setAbyssalLockedStatus(id: number, data: AstrologyModifier): void;
    setAbyssalHidden(id: number): void;
    setAbyssalShow(id: number): void;
}
/** Component for showing active modifiers, stardust rate and doubling in Astrology */
declare class AstrologyInformationPanelElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    viewAllModifiersButton: HTMLButtonElement;
    itemChances: ItemChanceIconElement[];
    doublingChance: DoublingIconElement;
    meteoriteChance: MeteoriteChanceIconElement;
    starfallChance: StarfallChanceIconElement;
    constructor();
    /** Initializes the menu and sets the stardust icons */
    initialize(game: Game): void;
    connectedCallback(): void;
    setModifierCallback(astrology: Astrology): void;
    updateChances(itemChances: number[], doubling: number, doublingSources: HTMLSpanElement[], meteorite: number, starfall: number): void;
}
