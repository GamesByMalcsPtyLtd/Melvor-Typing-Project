declare class CombatEventMenu extends HTMLElement {
    _content: DocumentFragment;
    _title: HTMLHeadingElement;
    _startButton: HTMLButtonElement;
    _passiveButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setButtonCallbacks(): void;
}
