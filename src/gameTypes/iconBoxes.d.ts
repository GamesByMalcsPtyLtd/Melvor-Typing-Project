declare class QuantityIconsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    emptyText: HTMLSpanElement;
    items: ItemQuantityIconElement[];
    currencies: CurrencyQuantityIconElement[];
    constructor();
    connectedCallback(): void;
    /** Removes all icons from the DOM, and clears them from memory */
    removeIcons(): void;
    setSelected(): void;
    setFree(): void;
    setUnselected(): void;
    addSingleItemIcon(): ItemQuantityIconElement;
    /**
     * Creates and appends Item quantity icons for an array of item quantites
     * @param items The array of item quantities
     * @param allowQuickBuyIf the item icons should allow quick buying from the shop
     * @param altMedia If the alternative media of items should be used
     */
    addItemIcons(items: AnyItemQuantity[], allowQuickBuy: boolean, altMedia?: boolean): void;
    /**
     * Creates and appends Currency quantity icons for an array of currency quantities
     * @param currencies The array of currency quantities
     */
    addCurrencyIcons(currencies: CurrencyQuantity[]): void;
    /**
     * Creates and appends Item or Currency quantity icons for a Costs object
     * @param costs The costs to display
     * @param allowQuickBuy If the Item icons should allow quick buying from the shop
     */
    setIconsForCosts(costs: Costs, allowQuickBuy?: boolean): void;
    setIconsForFixedCosts(costs: FixedCosts, allowQuickBuy?: boolean): void;
    /**
     * Creates and appends Item and Currency icons for an artisan skill recipe
     * @param recipe The recipe to create icons for
     * @param altMedia
     */
    setIconsForRecipe(recipe: ArtisanSkillRecipe, altMedia?: boolean): void;
    setIcons(items: AnyItemQuantity[], currencies: CurrencyQuantity[], altMedia?: boolean): void;
    /**
     * Updates the borders of the Item and Currency icons based on if they can be afforded
     * @param game The game object to use for the bank
     */
    updateQuantities(game: Game): void;
}
/** Helper class for managing current item and currency icons */
declare class CurrentQuantityIconsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    emptyText: HTMLSpanElement;
    items: ItemCurrentIconElement[];
    currencies: CurrencyCurrentIconElement[];
    constructor();
    connectedCallback(): void;
    /** Removes all icons from the DOM, and clears them from memory */
    removeIcons(): void;
    setSelected(): void;
    setUnselected(): void;
    addItemIcons(items: AnyItemQuantity[], game: Game, allowQuickBuy: boolean, altMedia?: boolean): void;
    addCurrencyIcons(currencies: CurrencyQuantity[]): void;
    /**
     * Creates and appends Item or Currency quantity icons for a Costs object
     * @param costs The costs to display
     * @param allowQuickBuy If the Item icons should allow quick buying from the shop
     */
    setIconsForCosts(costs: Costs, game: Game, allowQuickBuy?: boolean): void;
    setIconsForFixedCosts(costs: FixedCosts, game: Game, allowQuickBuy?: boolean): void;
    /**
     * Creates and appends Item and Currency icons for an artisan skill recipe
     * @param recipe The recipe to create icons for
     * @param game
     * @param altMedia
     */
    setIconsForRecipe(recipe: ArtisanSkillRecipe, game: Game, altMedia?: boolean): void;
    setIcons(items: AnyItemQuantity[], currencies: CurrencyQuantity[], game: Game, altMedia?: boolean): void;
    /**
     * Updates the borders of the Item and Currency icons based on if they can be afforded
     * @param game The game object to use for the bank
     */
    updateQuantities(game: Game): void;
}
declare class RequiresBoxElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    icons: QuantityIconsElement;
    constructor();
    connectedCallback(): void;
    destroyIcons(): void;
    setSelected(): void;
    setUnselected(): void;
    setItems(items: AnyItemQuantity[], currencies: CurrencyQuantity[], altMedia?: boolean): void;
    setItemsFromRecipe(recipe: ArtisanSkillRecipe, altMedia?: boolean): void;
    setItemsFromCosts(costs: Costs, altMedia?: boolean): void;
}
declare class HavesBoxElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    icons: CurrentQuantityIconsElement;
    constructor();
    connectedCallback(): void;
    destroyIcons(): void;
    setSelected(): void;
    setUnselected(): void;
    updateQuantities(game: Game): void;
    setItems(items: AnyItemQuantity[], currencies: CurrencyQuantity[], game: Game, altMedia?: boolean): void;
    setItemsFromRecipe(recipe: ArtisanSkillRecipe, game: Game, altMedia?: boolean): void;
    setItemsFromCosts(costs: Costs, game: Game, altMedia?: boolean): void;
}
declare class ProducesBoxElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    icons: QuantityIconsElement;
    constructor();
    connectedCallback(): void;
    destroyIcons(): void;
    setSelected(): void;
    setUnselected(): void;
    setItems(items: AnyItemQuantity[], currencies: CurrencyQuantity[]): void;
    addSingleProductIcon(): ItemQuantityIconElement;
}
declare class GrantsBoxElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    iconContainer: HTMLDivElement;
    xpIcon: XpIconElement;
    abyssalXpIcon: AbyssalXpIconElement;
    masteryXpIcon: MasteryXpIconElement;
    masteryPoolIcon: MasteryPoolIconElement;
    dash: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setUnselected(): void;
    setSelected(): void;
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, poolXP: number, realm: Realm): void;
    updateAbyssalGrants(xp: number, baseXP: number): void;
    hideMastery(): void;
    setSources(skill: AnySkill, action?: NamedObject): void;
}
interface CookingBonusValues {
    preserve: {
        value: number;
        sources: HTMLSpanElement[];
    };
    double: {
        value: number;
        sources: HTMLSpanElement[];
    };
    perfect: {
        value: number;
        sources: HTMLSpanElement[];
    };
    success: {
        value: number;
        sources: HTMLSpanElement[];
    };
}
declare class CookingBonusBoxElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    iconContainer: HTMLDivElement;
    dash: HTMLSpanElement;
    preserve: PreservationIconElement;
    double: DoublingIconElement;
    perfect: PerfectCookIconElement;
    success: CookingSuccessIconElement;
    costReduction: CostReductionIconElement;
    additionalPrimaryQuantity: AdditionalPrimaryQuantityIconElement;
    constructor();
    connectedCallback(): void;
    setUnselected(): void;
    setSelected(recipe: CookingRecipe): void;
    setChances(chances: CookingBonusValues): void;
    setCostReduction(costReduction: number, costReductionSources: HTMLSpanElement[]): void;
    setAdditionalPrimaryQuantity(additionalPrimaryQuantity: number, additionalPrimaryQuantitySources: HTMLSpanElement[]): void;
}
