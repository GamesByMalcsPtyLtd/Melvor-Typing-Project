declare class LangStringElement extends HTMLElement implements CustomElement {
    constructor();
    connectedCallback(): void;
    updateTranslation(): void;
    attributeChangedCallback(name: LangStringAttribute, oldValue: string, newValue: string): void;
    static get observedAttributes(): LangStringAttribute[];
}
declare type LangStringAttribute = 'lang-id';
declare class ItemChargeDisplayElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    itemImage: HTMLImageElement;
    itemCharges: HTMLSpanElement;
    itemTooltip?: TippyTooltip;
    initialized: boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setInitialized(): void;
    setItem(item: EquipmentItem): void;
    updateCharges(charges: number): void;
}
declare class SettingsCheckboxElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    label: HTMLLabelElement;
    input: HTMLInputElement;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    initialize(data: SettingData<boolean>, onChange: VoidFunction): void;
    setChecked(isChecked: boolean): void;
    static elementCount: number;
    static observedAttributes: string[];
}
declare class SettingsSwitchElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    label: HTMLLabelElement;
    input: HTMLInputElement;
    control: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    initialize(data: SettingData<boolean>, onChange: VoidFunction): void;
    setChecked(isChecked: boolean): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    setLabel(labelHTML: string, size: string | null): void;
    setSize(oldSize: string | null, newSize: 'small' | 'large'): void;
    static get observedAttributes(): string[];
    static elementCount: number;
}
declare class SettingsDropdownElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    dropdownButton: HTMLButtonElement;
    optionsContainer: HTMLDivElement;
    label: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    initialize<T>(data: ChoiceSettingData<T>, onChange: (newValue: T) => void): void;
    appendOptionToElement<T>(option: ChoiceSettingOption<T>, element: HTMLElement): void;
    updateValue<T>(newOption: ChoiceSettingOption<T>): void;
}
declare class UpgradeChainDisplayElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    upgradeImg: HTMLImageElement;
    chainName: HTMLElement;
    upgradeName: HTMLElement;
    descriptionTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(game: Game): void;
    setChain(chain: ShopUpgradeChain): void;
    setUpgrade(name: string, description: string, media: string): void;
    static initializeAll(game: Game): void;
}
declare class SkillMilestoneDisplayElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    block: HTMLDivElement;
    skillName: HTMLHeadingElement;
    levelOptions: HTMLDivElement;
    standardTab: HTMLAnchorElement;
    abyssalTab: HTMLAnchorElement;
    noMilestoneNotice: HTMLElement;
    levelText: HTMLTableCellElement;
    milestoneContainer: HTMLTableSectionElement;
    skill?: AnySkill;
    levelMode: 'Standard' | 'Abyssal';
    constructor();
    connectedCallback(): void;
    setSkill(skill: AnySkill): void;
    updateMilestones(): void;
    createMilestone(level: number, skillLevel: number, milestone: {
        name: string;
        media: string;
    }): void;
    setLevelMode(levelMode: 'Standard' | 'Abyssal'): void;
    changeTab(levelMode: 'Standard' | 'Abyssal'): void;
    getTabForMode(levelMode: 'Standard' | 'Abyssal'): HTMLAnchorElement;
}
declare class CharacterResistanceElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    name: HTMLSpanElement;
    media: HTMLImageElement;
    resistanceDiv: HTMLDivElement;
    resistance: HTMLSpanElement;
    resistanceDiff: HTMLSpanElement;
    constructor(damageType: DamageType);
    connectedCallback(): void;
    initialize(damageType: DamageType): void;
    showResistanceDiff(): void;
    hideResistanceDiff(): void;
    updateResistanceDiff(diff: number): void;
    updateResistanceSpan(value: number): void;
    updateResistanceValue(value: number): void;
    setAsActiveResistance(): void;
    removeAsActiveResistance(): void;
    renderNoResistance(): void;
    replaceResistanceDivClass(className: string, newClassName: string): void;
    setIconClass(className: string): void;
    showResistance(): void;
    hideResistance(): void;
    toggleResistanceView(show: boolean): void;
}
