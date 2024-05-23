declare class RuneMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    rowContainer: HTMLDivElement;
    realmSelect: RealmTabSelectElement;
    realmContainers: Map<Realm, HTMLDivElement>;
    runeIcons: Map<RuneItem, ItemCurrentIconElement>;
    highlighted: Set<RuneItem>;
    visibleContainer?: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    init(game: Game): void;
    updateCounts(bank: Bank): void;
    updateHighlights(spellSelection: SpellSelection, useAltRunes: boolean): void;
    selectRealm(realm: Realm): void;
    addBordersForSpell(spell: BaseSpell, useAltRunes: boolean): void;
    removeBorder(item: RuneItem): void;
    addBorder(item: RuneItem): void;
}
declare class LockedSpellTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    levelRequired: HTMLSpanElement;
    abyssalLevelRequired: HTMLSpanElement;
    itemRequired: HTMLSpanElement;
    requirements: HTMLSpanElement[];
    pratsIdea: HTMLElement;
    constructor();
    connectedCallback(): void;
    setSpell(spell: CombatSpell, game: Game, player: Player, ignoreReqs: boolean): void;
    removeRequirements(): void;
    setRequirements(spell: CombatSpell): void;
    addRequirement(met: boolean, text: string): void;
}
declare class SpellTooltipRunesElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    runeCosts: HTMLDivElement;
    orText: HTMLElement;
    altRuneText: HTMLElement;
    altRuneCosts: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setSpell(spell: CombatSpell): void;
    setRuneCosts(container: HTMLDivElement, runes: RuneQuantity[]): void;
}
declare class AttackSpellTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    spellName: HTMLSpanElement;
    spellDamage: HTMLSpanElement;
    combatEffects: HTMLSpanElement;
    specialAttack: HTMLSpanElement;
    runeCosts: SpellTooltipRunesElement;
    constructor();
    connectedCallback(): void;
    setSpell(spell: AttackSpell): void;
}
declare class CurseSpellTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    spellName: HTMLSpanElement;
    enemyModifiers: HTMLSpanElement;
    enemyTurns: HTMLSpanElement;
    runeCosts: SpellTooltipRunesElement;
    constructor();
    connectedCallback(): void;
    setSpell(spell: CurseSpell): void;
}
declare class AuroraSpellTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    spellName: HTMLSpanElement;
    description: HTMLSpanElement;
    runeCosts: SpellTooltipRunesElement;
    constructor();
    connectedCallback(): void;
    setSpell(spell: AuroraSpell): void;
}
declare class SpellButtonElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    link: HTMLAnchorElement;
    spellImage: HTMLImageElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setAttackSpell(spell: AttackSpell): void;
    setCurseSpell(spell: CurseSpell): void;
    setAuroraSpell(spell: AuroraSpell): void;
    setLockedSpell(spell: CombatSpell, game: Game, player: Player, ignoreReqs: boolean): void;
    setCallback(callback: VoidFunction): void;
    removeCallback(): void;
    highlight(): void;
    unhighlight(): void;
    static readonly borderClasses: string[];
}
declare abstract class SpellMenuElement<SpellType extends CombatSpell> extends HTMLElement {
    abstract spellContainer: HTMLDivElement;
    spells: SpellButtonElement[];
    spellMap: Map<SpellType, SpellButtonElement>;
    highlightedSpell?: SpellButtonElement;
    abstract getToggleCallback(spell: SpellType, player: Player): VoidFunction;
    abstract setSpellButton(spell: SpellType, spellElem: SpellButtonElement): void;
    updateForUnlock(game: Game, player: Player, ignoreReqs: boolean): void;
    setMenuCallbacks(player: Player): void;
    setSpells(spells: SpellType[]): void;
    appendSpellMenu(spellElem: SpellButtonElement): void;
    highlightSpell(spell?: SpellType): void;
}
declare class AttackSpellMenuElement extends SpellMenuElement<AttackSpell> implements CustomElement {
    _content: DocumentFragment;
    spellContainer: HTMLDivElement;
    bookName: HTMLSpanElement;
    curseAuroraInfo: HTMLSpanElement;
    noDamageModifiersContainer: HTMLDivElement;
    noDamageModifiersMessage: HTMLSpanElement;
    noSpecialAttacksContainer: HTMLDivElement;
    noSpecialAttacksMessage: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setBook(book: AttackSpellbook): void;
    appendSpellMenu(spellElem: SpellButtonElement): void;
    getToggleCallback(spell: AttackSpell, player: Player): VoidFunction;
    setSpellButton(spell: AttackSpell, spellElem: SpellButtonElement): void;
}
declare class CurseSpellMenuElement extends SpellMenuElement<CurseSpell> implements CustomElement {
    _content: DocumentFragment;
    spellContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    init(game: Game): void;
    getToggleCallback(spell: CurseSpell, player: Player): VoidFunction;
    setSpellButton(spell: CurseSpell, spellElem: SpellButtonElement): void;
}
declare class AuroraSpellMenuElement extends SpellMenuElement<AuroraSpell> implements CustomElement {
    _content: DocumentFragment;
    spellContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    init(game: Game): void;
    getToggleCallback(spell: AuroraSpell, player: Player): VoidFunction;
    setSpellButton(spell: AuroraSpell, spellElem: SpellButtonElement): void;
}
declare class SpellbookMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    weaponNotice: HTMLElement;
    attackButtonGroup: HTMLDivElement;
    curseButton: HTMLButtonElement;
    auroraButton: HTMLButtonElement;
    attackSpellMenu: AttackSpellMenuElement;
    curseSpellMenu: CurseSpellMenuElement;
    auroraSpellMenu: AuroraSpellMenuElement;
    combatRunesOption: HTMLDivElement;
    selectedAttackBook?: AttackSpellbook;
    selectedButton: HTMLButtonElement;
    selectedMenu: SpellMenuElement<CombatSpell>;
    tooltips: TippyTooltip[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    init(game: Game): void;
    updateRequirements(game: Game, player: Player, ignoreReqs: boolean): void;
    selectAttack(game: Game, book: AttackSpellbook, button: HTMLButtonElement): void;
    selectCurse(game: Game): void;
    selectAurora(game: Game): void;
    changeSelectedButton(button: HTMLButtonElement): void;
    changeSelectedMenu(menu: SpellMenuElement<CombatSpell>): void;
    onBookChange(game: Game): void;
    addTooltip(button: HTMLButtonElement, bookName: string): void;
}
