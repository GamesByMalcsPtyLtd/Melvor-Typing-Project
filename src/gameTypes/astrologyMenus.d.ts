/** Component for individual constellations */
declare class ConstellationMenu extends HTMLElement {
    private _content;
    private image;
    private name;
    private skillIcons;
    private skillIcon0;
    private xpIcon;
    private masteryIcon;
    private masteryPoolIcon;
    private intervalIcon;
    progressBar: ProgressBar;
    private studyButton;
    private exploreButton;
    private masteryDisplay;
    private stardustBreakdown;
    private stardustIcons;
    private viewModifierContainer;
    constructor();
    connectedCallback(): void;
    /** Sets the display to a given constellation */
    setConstellation(constellation: AstrologyRecipe): void;
    /** Updates the XP, Mastery XP, Mastery Pool XP and interval icons */
    updateGrants(xp: number, masteryXP: number, masteryPoolXP: number, interval: number): void;
    /** Updates the stardust quantities */
    updateQuantities(): void;
    /** Sets the constellation to the explored state */
    setExplored(): void;
    /** Sets the constellation to the un-explored state */
    setUnexplored(): void;
}
/** Component for displaying standard/unique modifiers, with a reroll button
 *  For usage in the AstrologyExplorationPanel component
 */
declare class AstrologyModifierDisplay extends HTMLElement {
    private _content;
    private starImage;
    private modifierContainer;
    private modifierText;
    private upgradeButton;
    private starDustImage;
    private starDustQuantity;
    private modifierProgress;
    private modifierStatus;
    constructor();
    connectedCallback(): void;
    /** Sets the display to a standard modifier */
    setStandard(): void;
    /** Sets the display to a unique modifier */
    setUnique(): void;
    /** Sets the modifier text to mastery locked */
    setMasteryLocked(level: number): void;
    /** Sets the modifier text to the given description (and green) */
    setModifier(modifier: ModifierArray, precision: number): void;
    setModifierStatus(buyCount: number, data: AstrologyModifier): void;
    setModifierStatusLocked(data: AstrologyModifier): void;
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
declare class AstrologyExplorationPanel extends HTMLElement {
    private _content;
    private standardModifierContainer;
    private uniqueModifierContainer;
    private standardModifiers;
    private uniqueModifiers;
    constructor();
    connectedCallback(): void;
    setMaxStandardMods(amount: number): void;
    setMaxUniqueMods(amount: number): void;
    /** Sets upgrade costs for all buttons in constellation */
    setUpgradeCosts(constellation: AstrologyRecipe): void;
    /** Sets upgrade cost for specific standard star in constellation */
    setStandardUpgradeCost(constellation: AstrologyRecipe, modID: number): void;
    /** Sets upgrade cost for specific standard star in constellation */
    setUniqueUpgradeCost(constellation: AstrologyRecipe, modID: number): void;
    /** Sets the callbacks of all buttons to the given constellation */
    setConstellation(constellation: AstrologyRecipe): void;
    setStandardModifier(id: number, modifier: ModifierArray, precision: number): void;
    setStandardModifierStatus(id: number, buyCount: number, data: AstrologyModifier): void;
    setStandardLocked(id: number, masteryLevel: number): void;
    setStandardLockedStatus(id: number, data: AstrologyModifier): void;
    setUniqueModifier(id: number, modifier: ModifierArray, precision: number): void;
    setUniqueModifierStatus(id: number, buyCount: number, data: AstrologyModifier): void;
    setUniqueLocked(id: number, masteryLevel: number): void;
    setUniqueLockedStatus(id: number, data: AstrologyModifier): void;
}
/** Component for showing active modifiers, stardust rate and doubling in Astrology */
declare class AstrologyInformationPanel extends HTMLElement {
    private _content;
    private viewAllModifiersButton;
    private stardustChance;
    private goldenstardustChance;
    private doublingChance;
    private meteoriteChance;
    constructor();
    /** Initializes the menu and sets the stardust icons */
    initialize(game: Game): void;
    connectedCallback(): void;
    setModifierCallback(astrology: Astrology): void;
    updateChances(stardust: number, goldenStardust: number, doubling: number, meteorite: number): void;
}
