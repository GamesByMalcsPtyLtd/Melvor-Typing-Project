declare type Resize = 48 | 40 | 32 | 24;
/** Base class for UI Components that put their content into a container */
declare abstract class ContainedComponent {
    protected abstract container: HTMLElement;
    show(): void;
    hide(): void;
    invisible(): void;
    visible(): void;
}
declare abstract class InfoIcon extends ContainedComponent {
    protected container: HTMLDivElement;
    protected image: HTMLImageElement;
    private text;
    protected tooltip: TippyTooltip;
    private parent;
    constructor(parent: HTMLElement, pillClass: string, size: Resize);
    protected setImage(media: string): void;
    protected setText(text: string): void;
    protected setTooltip(content: string): void;
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
    private xp;
    constructor(parent: HTMLElement, xp: number, size?: Resize);
    setXP(xp: number): void;
    localize(): void;
    private getTooltipContent;
}
declare class STRXPIcon extends InfoIcon {
    private xp;
    constructor(parent: HTMLElement, xp: number, size?: Resize);
    setXP(xp: number): void;
    localize(): void;
    private getTooltipContent;
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
    private getTooltipContent;
    setChance(chance: number): void;
}
declare class PreservationIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number, size?: Resize);
    localize(): void;
    private getTooltipContent;
    setChance(chance: number): void;
}
declare class PerfectCookIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number, size?: Resize);
    localize(): void;
    private getTooltipContent;
    setChance(chance: number): void;
}
declare class CookingSuccessIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number, size?: Resize);
    localize(): void;
    private getTooltipContent;
    setChance(chance: number): void;
}
declare class MasteryXPIcon extends InfoIcon {
    private xp;
    constructor(parent: HTMLElement, xp: number, size?: Resize);
    localize(): void;
    setXP(xp: number): void;
    private getTooltipContent;
}
declare class MasteryPoolIcon extends InfoIcon {
    private xp;
    constructor(parent: HTMLElement, xp: number, size?: Resize);
    localize(): void;
    setXP(xp: number): void;
    private getTooltipContent;
}
declare class StealthIcon extends InfoIcon {
    private npc?;
    constructor(parent: HTMLElement, size?: Resize);
    setNPC(npc: ThievingNPC): void;
    localize(): void;
    private getTooltipContent;
}
/** Info Icon for items that have a chance to drop */
declare class ItemChanceIcon extends InfoIcon {
    private item?;
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
    protected qty: number;
    protected abstract getCurrentQty(): number;
    protected abstract getName(): string;
    constructor(parent: HTMLElement, qty: number, size?: Resize);
    localize(): void;
    updateQuantity(): void;
    private getTooltipContent;
}
declare class ItemQtyIcon extends QtyIcon {
    private allowQuickBuy;
    private autoBuyIcon;
    private item?;
    constructor(parent: HTMLElement, quickBuy?: boolean, qty?: number, size?: Resize);
    setItem(item: AnyItem, qty: number, altMedia?: boolean): void;
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class CookingStockpileIcon extends ItemQtyIcon {
    constructor(parent: HTMLElement, category: CookingCategory, size?: Resize);
    unsetItem(): void;
    setItem(item: AnyItem, qty: number): void;
}
declare class GPQtyIcon extends QtyIcon {
    constructor(parent: HTMLElement, qty: number, size?: Resize);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class SCQtyIcon extends QtyIcon {
    constructor(parent: HTMLElement, qty: number, size?: Resize);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare abstract class QtyCurrentIcon extends InfoIcon {
    protected abstract getCurrentQty(): number;
    protected abstract getName(): string;
    private currentQuantity;
    private requiredQuantity;
    constructor(parent: HTMLElement, requiredQty: number, size?: Resize);
    localize(): void;
    protected init(): void;
    updateQuantity(): void;
    private onMouseover;
    private onMouseleave;
    private getTooltipContent;
}
declare class ItemCurrentIcon extends QtyCurrentIcon {
    private item;
    constructor(parent: HTMLElement, item: AnyItem, requiredQty: number, quickBuy?: boolean, size?: Resize, altMedia?: boolean);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class GPCurrentIcon extends QtyCurrentIcon {
    constructor(parent: HTMLElement, requiredQty: number, size?: Resize);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class SCCurrentIcon extends QtyCurrentIcon {
    constructor(parent: HTMLElement, requiredQty: number, size?: Resize);
    protected getCurrentQty(): number;
    protected getName(): string;
}
