declare type Resize = 48 | 40 | 32 | 24;
/** Base class for UI Components that put their content into a container */
declare abstract class ContainedComponent {
    abstract container: HTMLElement;
    show(): void;
    hide(): void;
    invisible(): void;
    visible(): void;
}
declare abstract class InfoIcon extends ContainedComponent {
    container: HTMLDivElement;
    image: HTMLImageElement;
    text: HTMLElement;
    tooltip: TippyTooltip;
    parent: HTMLElement;
    constructor(parent: HTMLElement, pillClass: string, size: Resize);
    setImage(media: string): void;
    setText(text: string): void;
    setTooltip(content: string): void;
    destroy(): void;
    hide(): void;
    show(): void;
    static readonly media: {
        skillXP: string;
        strXP: string;
        masteryXP: string;
        poolXP: string;
        preserveChance: string;
        doublingChance: string;
        interval: string;
        gp: string;
        slayerCoins: string;
        shopIcon: string;
        perfectCook: string;
        successfulCook: string;
        intervalAlt: string;
    };
    abstract localize(): void;
}
declare class XPIcon extends InfoIcon {
    xp: number;
    baseXP: number;
    constructor(parent: HTMLElement, xp: number, baseXP: number, size?: Resize);
    setXP(xp: number, baseXP: number): void;
    localize(): void;
    getTooltipContent(xp: number, baseXP: number): string;
    getTextClass(value: number): string;
    getTextClassSymbol(value: number): string;
}
declare class STRXPIcon extends InfoIcon {
    xp: number;
    baseXP: number;
    constructor(parent: HTMLElement, xp: number, baseXP: number, size?: Resize);
    setXP(xp: number, baseXP: number): void;
    localize(): void;
    getTooltipContent(xp: number, baseXP: number): string;
    getTextClass(value: number): string;
    getTextClassSymbol(value: number): string;
}
declare class IntervalIcon extends InfoIcon {
    constructor(parent: HTMLElement, interval: number, size?: Resize, altMedia?: boolean);
    setMedia(altMedia: boolean): void;
    localize(): void;
    /** Sets the interval [ms] formatted in seconds. */
    setInterval(interval: number): void;
}
declare class DoublingIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number, size?: Resize);
    localize(): void;
    getTooltipContent(): string;
    setChance(chance: number): void;
}
declare class PreservationIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number, size?: Resize);
    localize(): void;
    getTooltipContent(): string;
    setChance(chance: number): void;
}
declare class PerfectCookIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number, size?: Resize);
    localize(): void;
    getTooltipContent(): string;
    setChance(chance: number): void;
}
declare class CookingSuccessIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number, size?: Resize);
    localize(): void;
    getTooltipContent(): string;
    setChance(chance: number): void;
}
declare class MasteryXPIcon extends InfoIcon {
    xp: number;
    baseXP: number;
    constructor(parent: HTMLElement, xp: number, baseXP: number, size?: Resize);
    localize(): void;
    setXP(xp: number, baseXP: number): void;
    getTooltipContent(xp: number, baseXP: number): string;
    getTextClass(value: number): string;
    getTextClassSymbol(value: number): string;
}
declare class MasteryPoolIcon extends InfoIcon {
    xp: number;
    constructor(parent: HTMLElement, xp: number, size?: Resize);
    localize(): void;
    setXP(xp: number): void;
    getTooltipContent(): string;
}
declare class StealthIcon extends InfoIcon {
    npc?: ThievingNPC;
    constructor(parent: HTMLElement, size?: Resize);
    setNPC(npc: ThievingNPC): void;
    localize(): void;
    getTooltipContent(): string;
}
/** Info Icon for items that have a chance to drop */
declare class ItemChanceIcon extends InfoIcon {
    item?: AnyItem;
    constructor(parent: HTMLElement, size?: Resize);
    setItem(item: AnyItem): void;
    localize(): void;
    getTooltipContent(): string;
    /** Sets the chance with 2 digits of precision */
    setChance(chance: number): void;
}
/** Info Icon for meteorites that have a chance to be located in astrology */
declare class MeteoriteChanceIcon extends InfoIcon {
    constructor(parent: HTMLElement, size?: Resize);
    localize(): void;
    getTooltipContent(): string;
    /** Sets the chance with 2 digits of precision */
    setChance(chance: number): void;
}
declare abstract class QtyIcon extends InfoIcon {
    qty: number;
    abstract getCurrentQty(): number;
    abstract getName(): string;
    constructor(parent: HTMLElement, qty: number, size?: Resize);
    localize(): void;
    updateQuantity(): void;
    getTooltipContent(): string;
}
declare class ItemQtyIcon extends QtyIcon {
    allowQuickBuy: boolean;
    autoBuyIcon: HTMLImageElement;
    item?: AnyItem;
    constructor(parent: HTMLElement, quickBuy?: boolean, qty?: number, size?: Resize);
    setItem(item: AnyItem, qty: number, altMedia?: boolean): void;
    getCurrentQty(): number;
    getName(): string;
}
declare class CookingStockpileIcon extends ItemQtyIcon {
    constructor(parent: HTMLElement, category: CookingCategory, size?: Resize);
    unsetItem(): void;
    setItem(item: AnyItem, qty: number): void;
}
declare class GPQtyIcon extends QtyIcon {
    constructor(parent: HTMLElement, qty: number, size?: Resize);
    getCurrentQty(): number;
    getName(): string;
}
declare class SCQtyIcon extends QtyIcon {
    constructor(parent: HTMLElement, qty: number, size?: Resize);
    getCurrentQty(): number;
    getName(): string;
}
declare abstract class QtyCurrentIcon extends InfoIcon {
    abstract getCurrentQty(): number;
    abstract getName(): string;
    currentQuantity: number;
    requiredQuantity: number;
    constructor(parent: HTMLElement, requiredQty: number, size?: Resize);
    localize(): void;
    init(): void;
    updateQuantity(): void;
    onMouseover(): void;
    onMouseleave(): void;
    getTooltipContent(): string;
}
declare class ItemCurrentIcon extends QtyCurrentIcon {
    item: AnyItem;
    constructor(parent: HTMLElement, item: AnyItem, requiredQty: number, quickBuy?: boolean, size?: Resize, altMedia?: boolean);
    getCurrentQty(): number;
    getName(): string;
}
declare class GPCurrentIcon extends QtyCurrentIcon {
    constructor(parent: HTMLElement, requiredQty: number, size?: Resize);
    getCurrentQty(): number;
    getName(): string;
}
declare class SCCurrentIcon extends QtyCurrentIcon {
    constructor(parent: HTMLElement, requiredQty: number, size?: Resize);
    getCurrentQty(): number;
    getName(): string;
}
declare class TownshipResourceIcon extends InfoIcon {
    resource: TownshipResource;
    qty: number;
    constructor(parent: HTMLElement, resource: TownshipResource, qty: number, size?: Resize);
    setQty(qty: number): void;
    localize(): void;
    getTooltipContent(): string;
    getSymbol(): string;
}
