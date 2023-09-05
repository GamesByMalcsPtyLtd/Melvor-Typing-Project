interface AncientRelicData extends IDData {
    name: string;
    skillID: string;
    number: number;
    description: string;
    modifiers: PlayerModifierData;
}
declare class AncientRelic extends NamespacedObject {
    get name(): string;
    get description(): string;
    _name: string;
    _description: string;
    skill: AnySkill;
    number: number;
    modifiers: PlayerModifierObject;
    constructor(namespace: DataNamespace, data: AncientRelicData, game: Game);
}
declare class DummyAncientRelic extends AncientRelic {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class AncientRelicElement extends HTMLElement {
    _content: DocumentFragment;
    relicContainer: HTMLDivElement;
    relicName: HTMLDivElement;
    relicModifiers: HTMLDivElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    setRelic(relic: AncientRelic): void;
    setHidden(): void;
    setUnlocked(): void;
    setLocked(): void;
}
declare class AncientRelicsMenu {
    game: Game;
    elements: {
        relicContent: HTMLDivElement;
        relicCompleted: HTMLDivElement;
        dropdownBtn: HTMLButtonElement;
        dropdownItems: HTMLDivElement;
        relicProgressImg: HTMLImageElement;
    };
    constructor(game: Game);
    createDropdownItem(skill: AnySkill): HTMLAnchorElement;
    selectSkill(skill: AnySkill): void;
    showAncientRelics(skill: AnySkill): void;
    getSkillItem(skill: AnySkill): HTMLImageElement;
}
