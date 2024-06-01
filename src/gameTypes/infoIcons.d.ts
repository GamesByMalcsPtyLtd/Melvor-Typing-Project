declare abstract class InfoIconElement extends HTMLElement implements CustomElement {
    abstract _content: DocumentFragment;
    abstract container: HTMLDivElement;
    abstract tooltipElem: HTMLElement;
    tooltip?: TippyTooltip;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setInvalidBorder(): void;
    removeInvalidBorder(): void;
    toggleInvalidBorder(isValid: boolean): void;
}
declare class XpIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    xp: HTMLSpanElement;
    baseXp: HTMLElement;
    modifiersXp: HTMLElement;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setXP(xp: number, baseXP: number): void;
    setAbyssalXP(xp: number, baseXP: number): void;
    setSkillXP(skill: AnySkill, xp: number, baseXP: number): void;
    setMasteryXP(xp: number, baseXP: number): void;
    setModifiersText(xp: number, baseXP: number): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class XpIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: XpIconTooltipElement;
    xp: HTMLElement;
    constructor();
    setXP(xp: number, baseXP: number): void;
    setSources(modifierSources: HTMLSpanElement[]): void;
}
declare class AbyssalXpIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: XpIconTooltipElement;
    xp: HTMLElement;
    constructor();
    setXP(xp: number, baseXP: number): void;
    setSources(modifierSources: HTMLSpanElement[]): void;
}
declare class SkillXpIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: XpIconTooltipElement;
    skillImage: HTMLImageElement;
    xp: HTMLElement;
    constructor();
    setXP(skill: AnySkill, xp: number, baseXP: number): void;
    setSources(modifierSources: HTMLSpanElement[]): void;
}
declare class IntervalIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class IntervalIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: IntervalIconTooltipElement;
    image: HTMLImageElement;
    interval: HTMLElement;
    constructor();
    /** Toggles the alternative media for this icon */
    setMedia(altMedia: boolean): void;
    setInterval(interval: number, modifierSources: HTMLSpanElement[]): void;
    setCustomInterval(interval: string): void;
}
declare class DoublingIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    cap: HTMLHeadingElement;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCap(cap: number): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class DoublingIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: DoublingIconTooltipElement;
    chance: HTMLElement;
    constructor();
    setChance(chance: number, sourceSpans: HTMLSpanElement[]): void;
}
declare class PreservationIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    cap: HTMLHeadingElement;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCap(cap: number): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class PreservationIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: PreservationIconTooltipElement;
    chance: HTMLElement;
    constructor();
    setChance(chance: number, sourceSpans: HTMLSpanElement[]): void;
}
declare class PerfectCookIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    cap: HTMLHeadingElement;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCap(cap: number): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class PerfectCookIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: PerfectCookIconTooltipElement;
    chance: HTMLElement;
    constructor();
    setChance(chance: number, sourceSpans: HTMLSpanElement[]): void;
}
declare class CookingSuccessIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    cap: HTMLHeadingElement;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCap(cap: number): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class CookingSuccessIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: CookingSuccessIconTooltipElement;
    chance: HTMLElement;
    constructor();
    setChance(chance: number, sourceSpans: HTMLSpanElement[]): void;
}
declare class AdditionalPrimaryQuantityIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class AdditionalPrimaryQuantityIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: AdditionalPrimaryQuantityIconTooltipElement;
    quantity: HTMLElement;
    constructor();
    setQuantity(qty: number, sourceSpans: HTMLSpanElement[]): void;
}
declare class CostReductionIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    cap: HTMLHeadingElement;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCap(cap: number): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class CostReductionIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: CostReductionIconTooltipElement;
    percent: HTMLElement;
    constructor();
    setChance(chance: number, sourceSpans: HTMLSpanElement[]): void;
}
declare class MasteryXpIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: XpIconTooltipElement;
    xp: HTMLElement;
    constructor();
    setXP(xp: number, baseXP: number): void;
    setSources(modifierSources: HTMLSpanElement[]): void;
}
declare class MasteryPoolIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    xp: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setXP(xp: number): void;
}
declare class MasteryPoolIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: MasteryPoolIconTooltipElement;
    xp: HTMLElement;
    realmIconMelvor: HTMLImageElement;
    realmIconAbyssal: HTMLImageElement;
    realmIconUnknown: HTMLImageElement;
    constructor();
    setXP(xp: number): void;
    setRealm(realm: Realm): void;
    hideRealms(): void;
}
declare class StealthIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    stealthVsPerception: HTMLHeadingElement;
    successRate: HTMLSpanElement;
    increasedDoubling: HTMLSpanElement;
    npcUniqueChance: HTMLSpanElement;
    sourceContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setNPC(npc: ThievingNPC, thieving: Thieving): void;
    updateSources(sourceSpans: HTMLSpanElement[]): void;
}
declare class StealthIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: StealthIconTooltipElement;
    stealth: HTMLElement;
    constructor();
    setNPC(npc: ThievingNPC, thieving: Thieving): void;
    setSources(modifierSources: HTMLSpanElement[]): void;
}
declare class ItemChanceIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: HTMLDivElement;
    itemImage: HTMLImageElement;
    chance: HTMLElement;
    constructor();
    setItem(item: Item): void;
    setChance(chance: number): void;
}
declare class MeteoriteChanceIconTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    constructor();
    connectedCallback(): void;
}
declare class MeteoriteChanceIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: MeteoriteChanceIconTooltipElement;
    chance: HTMLElement;
    constructor();
    setChance(chance: number): void;
}
declare class StarfallChanceIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: HTMLDivElement;
    chance: HTMLElement;
    constructor();
    setChance(chance: number): void;
}
declare class ItemQuantityIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: HTMLDivElement;
    itemImage: HTMLImageElement;
    quantity: HTMLElement;
    autoBuyIcon: HTMLImageElement;
    itemQuantity?: AnyItemQuantity;
    constructor();
    setItem(item: AnyItem, quantity: number, allowQuickBuy?: boolean, altMedia?: boolean): void;
    updateBorder(game: Game): void;
}
declare class CookingStockpileIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: HTMLDivElement;
    itemImage: HTMLImageElement;
    quantity: HTMLElement;
    constructor();
    unsetItem(): void;
    setItem(item: AnyItem, quantity: number): void;
    setOnClick(callback: VoidFunction): void;
}
declare class CurrencyQuantityIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: HTMLDivElement;
    currencyImage: HTMLImageElement;
    quantity: HTMLElement;
    currencyQuantity?: CurrencyQuantity;
    constructor();
    setCurrency(currency: Currency, quantity: number): void;
    updateBorder(): void;
}
declare class ItemCurrentIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: HTMLDivElement;
    itemImage: HTMLImageElement;
    quantity: HTMLElement;
    autoBuyIcon: HTMLImageElement;
    item?: Item;
    requiredQuantity: number;
    currentQuantity: number;
    constructor();
    connectedCallback(): void;
    setItem(item: Item, requiredQuantity: number, game: Game, allowQuickBuy?: boolean, altMedia?: boolean): void;
    updateQuantity(bank: Bank): void;
    onMouseOver(): void;
    onMouseLeave(): void;
    highlight(): void;
    unHighlight(): void;
}
declare class CurrencyCurrentIconElement extends InfoIconElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    tooltipElem: HTMLDivElement;
    currencyImage: HTMLImageElement;
    quantity: HTMLElement;
    currency?: Currency;
    requiredQuantity: number;
    currentQuantity: number;
    constructor();
    connectedCallback(): void;
    setCurrency(currency: Currency, requiredQuantity: number): void;
    updateQuantity(): void;
    onMouseOver(): void;
    onMouseLeave(): void;
}
