declare class CombatEventMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    _title: HTMLHeadingElement;
    _startButton: HTMLButtonElement;
    _passiveButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setButtonCallbacks(): void;
}
