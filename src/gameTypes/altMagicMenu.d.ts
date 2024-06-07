declare class AltMagicMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    spellImage: HTMLImageElement;
    clickImageInfo: HTMLDivElement;
    spellName: HTMLSpanElement;
    spellDescription: HTMLElement;
    runeRequirements: RequiresBoxElement;
    itemRequirementsContainer: HTMLDivElement;
    itemRequirements: QuantityIconsElement;
    runeHaves: HavesBoxElement;
    itemHavesContainer: HTMLDivElement;
    itemHaves: CurrentQuantityIconsElement;
    producesSingle: ProducesBoxElement;
    producesCurrent: HavesBoxElement;
    grants: GrantsBoxElement;
    interval: IntervalIconElement;
    progressBar: ProgressBarElement;
    castButton: HTMLButtonElement;
    doublingIcon: DoublingIconElement;
    doublingCont: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCastCallback(altMagic: AltMagic): void;
    setSpell(altMagic: AltMagic, spell: AltMagicSpell): void;
    setSpellImage(altMagic: AltMagic): void;
    setSpellQuantities(altMagic: AltMagic, game: Game): void;
    resetSpellQuantities(): void;
    updateQuantities(game: Game): void;
    updateRates(altMagic: AltMagic): void;
    unsetSpell(): void;
    renderProgress(altMagic: AltMagic, timer: Timer): void;
}
declare class AltMagicItemMenuElement extends HTMLElement implements CustomElement {
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
