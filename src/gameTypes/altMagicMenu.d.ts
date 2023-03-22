declare class AltMagicMenu extends HTMLElement {
    _content: DocumentFragment;
    spellImage: HTMLImageElement;
    clickImageInfo: HTMLDivElement;
    spellName: HTMLSpanElement;
    spellDescription: HTMLElement;
    runeRequirements: RequiresBox;
    itemRequirements: RequiresBox;
    runeHaves: HavesBox;
    itemHaves: HavesBox;
    producesSingle: ProducesBox;
    producesCurrent: HavesBox;
    grants: GrantsBox;
    interval: IntervalIcon;
    progressBar: ProgressBar;
    castButton: HTMLButtonElement;
    doublingIcon: DoublingIcon;
    doublingCont: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCastCallback(altMagic: AltMagic): void;
    setSpell(altMagic: AltMagic, spell: AltMagicSpell): void;
    setSpellImage(altMagic: AltMagic): void;
    setSpellQuantities(altMagic: AltMagic): void;
    resetSpellQuantities(): void;
    updateQuantities(): void;
    updateRates(altMagic: AltMagic): void;
    unsetSpell(): void;
    renderProgress(altMagic: AltMagic, timer: Timer): void;
}
declare class AltMagicItemMenu extends HTMLElement {
    _content: DocumentFragment;
    buttonContainer: HTMLDivElement;
    selectItemFragment: DocumentFragment;
    selectBarFragment: DocumentFragment;
    lockedBarFragment: DocumentFragment;
    constructor();
    connectedCallback(): void;
    createItemButton(item: AnyItem, callback: VoidFunction): DocumentFragment;
    createBarButton(item: AnyItem, callback: VoidFunction): DocumentFragment;
    createLockedBarButton(unlockLevel: number): DocumentFragment;
    /** Sets the available item selection for the given spell */
    setItemSelection(altMagic: AltMagic, spell: AltMagicSpell): void;
    /** Sets the available bar selection */
    setBarSelection(altMagic: AltMagic): void;
}
