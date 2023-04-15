declare class LangString extends HTMLElement {
    constructor();
    connectedCallback(): void;
    updateTranslation(): void;
    attributeChangedCallback(name: LangStringAttribute, oldValue: string, newValue: string): void;
    static get observedAttributes(): LangStringAttribute[];
}
declare type LangStringAttribute = 'lang-id';
declare class ItemChargeDisplay extends HTMLElement {
    _content: DocumentFragment;
    itemImage: HTMLImageElement;
    itemCharges: HTMLSpanElement;
    itemTooltip?: TippyTooltip;
    initialized: boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setItem(item: EquipmentItem): void;
    updateCharges(charges: number): void;
}
declare class SettingsCheckboxElement extends HTMLElement {
    _content: DocumentFragment;
    label: HTMLLabelElement;
    input: HTMLInputElement;
    constructor();
    connectedCallback(): void;
    initialize(data: SettingData<boolean>, onChange: VoidFunction): void;
    setChecked(isChecked: boolean): void;
    static elementCount: number;
}
declare class SettingsSwitchElement extends HTMLElement {
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
declare class SettingsDropdownElement extends HTMLElement {
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
declare class UpgradeChainDisplayElement extends HTMLElement {
    _content: DocumentFragment;
    chainName: HTMLElement;
    upgradeName: HTMLElement;
    descriptionTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(chain: ShopUpgradeChain): void;
    setUpgrade(name: string, description: string): void;
}
