declare abstract class InfoIcon {
    protected container: HTMLDivElement;
    protected image: HTMLImageElement;
    private text;
    private tooltip;
    private parent;
    constructor(parent: HTMLElement, media: string, pillClass: string);
    protected setImage(media: string): void;
    protected setText(text: string): void;
    protected setTooltip(content: string): void;
    show(): void;
    hide(): void;
    destroy(): void;
    static readonly media: {
        skillXP: string;
        masteryXP: string;
        poolXP: string;
        preserveChance: string;
        doublingChance: string;
        interval: string;
        gp: string;
        slayerCoins: string;
        shopIcon: string;
    };
    abstract localize(): void;
}
declare class XPIcon extends InfoIcon {
    private xp;
    constructor(parent: HTMLElement, xp: number);
    setXP(xp: number): void;
    localize(): void;
    private getTooltipContent;
}
declare class IntervalIcon extends InfoIcon {
    constructor(parent: HTMLElement, interval: number);
    localize(): void;
    setInterval(interval: number): void;
}
declare class DoublingIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number);
    localize(): void;
    private getTooltipContent;
    setChance(chance: number): void;
}
declare class PreservationIcon extends InfoIcon {
    constructor(parent: HTMLElement, chance: number);
    localize(): void;
    private getTooltipContent;
    setChance(chance: number): void;
}
declare class MasteryXPIcon extends InfoIcon {
    private xp;
    constructor(parent: HTMLElement, xp: number);
    localize(): void;
    setXP(xp: number): void;
    private getTooltipContent;
}
declare class MasteryPoolIcon extends InfoIcon {
    private xp;
    constructor(parent: HTMLElement, xp: number);
    localize(): void;
    setXP(xp: number): void;
    private getTooltipContent;
}
declare class StealthIcon extends InfoIcon {
    private npc;
    constructor(parent: HTMLElement);
    setNPC(npc: ThievingNPC): void;
    localize(): void;
    private getTooltipContent;
}
declare abstract class QtyIcon extends InfoIcon {
    protected qty: number;
    protected abstract getCurrentQty(): number;
    protected abstract getName(): string;
    constructor(parent: HTMLElement, media: string, qty: number);
    localize(): void;
    updateQuantity(): void;
    private getTooltipContent;
}
declare class ItemQtyIcon extends QtyIcon {
    private itemID;
    private allowQuickBuy;
    private autoBuyIcon;
    constructor(parent: HTMLElement, itemID: ItemID, qty: number, quickBuy?: boolean);
    setItem(itemID: ItemID, qty: number): void;
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class GPQtyIcon extends QtyIcon {
    constructor(parent: HTMLElement, qty: number);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class SCQtyIcon extends QtyIcon {
    constructor(parent: HTMLElement, qty: number);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare abstract class QtyCurrentIcon extends InfoIcon {
    protected abstract getCurrentQty(): number;
    protected abstract getName(): string;
    private currentQuantity;
    private requiredQuantity;
    constructor(parent: HTMLElement, media: string, requiredQty: number);
    localize(): void;
    protected init(): void;
    updateQuantity(): void;
    private onMouseover;
    private onMouseleave;
    private getTooltipContent;
}
declare class ItemCurrentIcon extends QtyCurrentIcon {
    private itemID;
    constructor(parent: HTMLElement, itemID: ItemID, requiredQty: number, quickBuy?: boolean);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class GPCurrentIcon extends QtyCurrentIcon {
    constructor(parent: HTMLElement, requiredQty: number);
    protected getCurrentQty(): number;
    protected getName(): string;
}
declare class SCCurrentIcon extends QtyCurrentIcon {
    constructor(parent: HTMLElement, requiredQty: number);
    protected getCurrentQty(): number;
    protected getName(): string;
}
