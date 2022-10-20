declare class CombatEventMenu extends HTMLElement {
    private _content;
    private _title;
    private _startButton;
    private _passiveButton;
    constructor();
    connectedCallback(): void;
    setButtonCallbacks(): void;
}
