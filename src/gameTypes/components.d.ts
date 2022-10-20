declare class LangString extends HTMLElement {
    constructor();
    connectedCallback(): void;
    updateTranslation(): void;
    attributeChangedCallback(name: LangStringAttribute, oldValue: string, newValue: string): void;
    static get observedAttributes(): LangStringAttribute[];
}
declare type LangStringAttribute = 'lang-cat' | 'lang-id';
declare class ItemChargeDisplay extends HTMLElement {
    private _content;
    private itemImage;
    private itemCharges;
    private itemTooltip?;
    initialized: boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setItem(item: EquipmentItem): void;
    updateCharges(charges: number): void;
}
declare class SettingsCheckboxElement extends HTMLElement {
    private _content;
    private label;
    private input;
    constructor();
    connectedCallback(): void;
    initialize(data: SettingData<boolean>, onChange: VoidFunction): void;
    setChecked(isChecked: boolean): void;
    static elementCount: number;
}
declare class SettingsSwitchElement extends HTMLElement {
    private _content;
    private label;
    private input;
    private control;
    constructor();
    connectedCallback(): void;
    initialize(data: SettingData<boolean>, onChange: VoidFunction): void;
    setChecked(isChecked: boolean): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private setLabel;
    setSize(oldSize: string | null, newSize: 'small' | 'large'): void;
    static get observedAttributes(): string[];
    static elementCount: number;
}
declare class SettingsDropdownElement extends HTMLElement {
    private _content;
    private dropdownButton;
    private optionsContainer;
    private label;
    constructor();
    connectedCallback(): void;
    initialize<T>(data: ChoiceSettingData<T>, onChange: (newValue: T) => void): void;
    private appendOptionToElement;
    updateValue<T>(newOption: ChoiceSettingOption<T>): void;
}
declare class UpgradeChainDisplayElement extends HTMLElement {
    private _content;
    private chainName;
    private upgradeName;
    private descriptionTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(chain: ShopUpgradeChain): void;
    setUpgrade(name: string, description: string): void;
}
