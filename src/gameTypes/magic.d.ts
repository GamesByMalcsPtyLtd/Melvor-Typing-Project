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
    private container;
    private runes;
    private highlighted;
    constructor();
    init(): void;
    private createMenuElement;
    private createTooltip;
    updateCounts(): void;
    updateHighlights(spellSelection: SpellSelection, useAltRunes: boolean): void;
    private addBordersForSpell;
    private removeBorder;
    private addBorder;
}
interface RuneMenuElement {
    tooltip: TippyTooltip;
    count: HTMLElement;
    border: HTMLElement;
}
declare abstract class SpellMenu<T extends CombatSpell> {
    protected abstract menuContainer: HTMLDivElement;
    protected spellElements: Map<T, CombatMenuElement>;
    protected abstract book: T[];
    protected abstract bookData: BookData;
    protected abstract selectButton: HTMLAnchorElement;
    protected selection?: T;
    updateForUnlock(level: number, player: Player, ignoreReqs: boolean): void;
    setMenuCallbacks(player: Player): void;
    protected abstract getMenuCallback(id: T, player: Player): VoidFunction;
    setSelection(spell: T | undefined): void;
    protected createMenu(): void;
    private createSpell;
    private createTooltip;
    private getLockedTooltipHTML;
    protected getRuneHTML(spell: T): string;
    private getRuneCostHTML;
    protected abstract getTooltipHTML(spell: T): string;
    protected getUnlockHTML(spell: T, player: Player, magicLevel: number, ignoreReqs: boolean): string;
    protected itemRequirement(spell: T, player: Player): boolean;
    protected checkUnlocked(spell: T, level: number, player: Player, ignoreReqs: boolean): boolean;
}
declare class StandardSpellMenu extends SpellMenu<StandardSpell> {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: StandardSpell[];
    protected bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    protected getMenuCallback(spell: StandardSpell, player: Player): VoidFunction;
    protected getTooltipHTML(spell: StandardSpell): string;
}
declare class CurseSpellMenu extends SpellMenu<CurseSpell> {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: CurseSpell[];
    protected bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    protected getMenuCallback(spell: CurseSpell, player: Player): VoidFunction;
    protected getTooltipHTML(curse: CurseSpell): string;
}
declare class AuroraSpellMenu extends SpellMenu<AuroraSpell> {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: AuroraSpell[];
    protected bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    protected getMenuCallback(spell: AuroraSpell, player: Player): VoidFunction;
    protected getTooltipHTML(aurora: AuroraSpell): string;
}
declare class AncientSpellMenu extends SpellMenu<AncientSpell> {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: AncientSpell[];
    protected bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    protected getMenuCallback(spell: AncientSpell, player: Player): VoidFunction;
    protected createMenu(): void;
    protected getTooltipHTML(ancient: AncientSpell): string;
}
declare class ArchaicSpellMenu extends SpellMenu<ArchaicSpell> {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: ArchaicSpell[];
    protected bookData: {
        readonly name: string;
        readonly description: string;
    };
    constructor();
    protected getMenuCallback(spell: ArchaicSpell, player: Player): VoidFunction;
    protected createMenu(): void;
    protected getTooltipHTML(spell: ArchaicSpell): string;
}
declare type BookData = {
    name: string;
    description: string;
};
declare type CombatSpellBook = 'standard' | 'curse' | 'aurora' | 'ancient' | 'archaic';
declare function updateSpellbook(book: CombatSpellBook, player: Player, magicLevel: number, ignoreReqs: boolean): void;
