declare class AltMagicMenu extends HTMLElement {
    private _content;
    private spellImage;
    private clickImageInfo;
    private spellName;
    private spellDescription;
    private runeRequirements;
    private itemRequirements;
    private runeHaves;
    private itemHaves;
    private producesSingle;
    private producesCurrent;
    grants: GrantsBox;
    private interval;
    private progressBar;
    private castButton;
    private doublingIcon;
    private doublingCont;
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
    private _content;
    private buttonContainer;
    private selectItemFragment;
    private selectBarFragment;
    private lockedBarFragment;
    constructor();
    connectedCallback(): void;
    private createItemButton;
    private createBarButton;
    private createLockedBarButton;
    /** Sets the available item selection for the given spell */
    setItemSelection(altMagic: AltMagic, spell: AltMagicSpell): void;
    /** Sets the available bar selection */
    setBarSelection(altMagic: AltMagic): void;
}
