declare enum SpellTiers {
    Strike = 0,
    Bolt = 1,
    Blast = 2,
    Wave = 3,
    Surge = 4,
    Other = 5
}
declare enum ArchaicSpellTypeID {
    Poison = 0,
    Infernal = 1,
    Lightning = 2,
    Other = 3
}
declare class RuneMenu {
    container: HTMLElement;
    runes: Map<AnyItem, RuneMenuElement>;
    highlighted: Set<AnyItem>;
    constructor();
    init(): void;
    createMenuElement(item: AnyItem): RuneMenuElement;
    createTooltip(image: HTMLImageElement, item: AnyItem): TippyTooltip;
    updateCounts(): void;
    updateHighlights(spellSelection: SpellSelection, useAltRunes: boolean): void;
    addBordersForSpell(spell: BaseSpell, useAltRunes: boolean): void;
    removeBorder(item: AnyItem): void;
    addBorder(item: AnyItem): void;
}
interface RuneMenuElement {
    tooltip: TippyTooltip;
    count: HTMLElement;
    border: HTMLElement;
}
declare abstract class SpellMenu<T extends CombatSpell> {
    abstract menuContainer: HTMLDivElement;
    spellElements: Map<T, CombatMenuElement>;
    abstract book: T[];
    abstract bookData: BookData;
    abstract selectButton: HTMLAnchorElement;
    selection?: T;
    updateForUnlock(level: number, player: Player, ignoreReqs: boolean): void;
    setMenuCallbacks(player: Player): void;
    abstract getMenuCallback(id: T, player: Player): VoidFunction;
    setSelection(spell: T | undefined): void;
    createMenu(): void;
    createSpell(spell: T): HTMLDivElement;
    createTooltip(element: HTMLElement, tooltipHTML: string): TippyTooltip;
    getLockedTooltipHTML(spell: T, player: Player, magicLevel: number, ignoreReqs: boolean): string;
    getRuneHTML(spell: T): string;
    getRuneCostHTML(costs: AnyItemQuantity[]): string;
    abstract getTooltipHTML(spell: T): string;
    getUnlockHTML(spell: T, player: Player, magicLevel: number, ignoreReqs: boolean): string;
    itemRequirement(spell: T, player: Player): boolean;
    checkUnlocked(spell: T, level: number, player: Player, ignoreReqs: boolean): boolean;
}
declare class StandardSpellMenu extends SpellMenu<StandardSpell> {
    menuContainer: HTMLDivElement;
    selectButton: HTMLAnchorElement;
    book: StandardSpell[];
    bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    getMenuCallback(spell: StandardSpell, player: Player): VoidFunction;
    getTooltipHTML(spell: StandardSpell): string;
}
declare class CurseSpellMenu extends SpellMenu<CurseSpell> {
    menuContainer: HTMLDivElement;
    selectButton: HTMLAnchorElement;
    book: CurseSpell[];
    bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    getMenuCallback(spell: CurseSpell, player: Player): VoidFunction;
    getTooltipHTML(curse: CurseSpell): string;
}
declare class AuroraSpellMenu extends SpellMenu<AuroraSpell> {
    menuContainer: HTMLDivElement;
    selectButton: HTMLAnchorElement;
    book: AuroraSpell[];
    bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    getMenuCallback(spell: AuroraSpell, player: Player): VoidFunction;
    getTooltipHTML(aurora: AuroraSpell): string;
}
declare class AncientSpellMenu extends SpellMenu<AncientSpell> {
    menuContainer: HTMLDivElement;
    selectButton: HTMLAnchorElement;
    book: AncientSpell[];
    bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    getMenuCallback(spell: AncientSpell, player: Player): VoidFunction;
    createMenu(): void;
    getTooltipHTML(ancient: AncientSpell): string;
}
declare class ArchaicSpellMenu extends SpellMenu<ArchaicSpell> {
    menuContainer: HTMLDivElement;
    selectButton: HTMLAnchorElement;
    book: ArchaicSpell[];
    bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    getMenuCallback(spell: ArchaicSpell, player: Player): VoidFunction;
    createMenu(): void;
    getTooltipHTML(spell: ArchaicSpell): string;
}
declare type BookData = {
    name: string;
    description: string;
};
declare type CombatSpellBook = 'standard' | 'curse' | 'aurora' | 'ancient' | 'archaic';
declare function updateSpellbook(book: CombatSpellBook, player: Player, magicLevel: number, ignoreReqs: boolean): void;
