interface KeyMatcherOptions {
    key: string;
    /** If the alt (Option on macOS) key must be pressed. Defaults to false. */
    altKey?: boolean;
    /** If the ctrl key must be pressed. Defaults to false. */
    ctrlKey?: boolean;
    /** If the Meta key must be pressed. (Command on macOS, windows key on Windows). Defaults to false. */
    metaKey?: boolean;
    /** If the Shift key must be pressed. Defaults to false. */
    shiftKey?: boolean;
}
declare type KeyMatcher = Required<KeyMatcherOptions>;
declare type KeyboardCallback = (e: KeyboardEvent) => void;
interface KeyBindingOptions extends IDData {
    /** Display name of the binding */
    name: string;
    /** Optional. If present, the keybinding is only active on the specified pages, otherwise it is global. */
    pageIDs?: string[];
    /** Default keys the binding is active on. */
    defaultKeys: KeyMatcherOptions[];
    /** Callback function for when the key is pressed down */
    keydown?: KeyboardCallback;
    /** Callback function for when the key is released */
    keyup?: KeyboardCallback;
}
declare class KeyBinding extends NamespacedObject {
    get name(): string;
    _name: string;
    /** Set of pages this keybinding fires on. If empty, fires globally. */
    pages: Set<Page>;
    /** Default matches to the keybinding */
    defaultKeys: KeyMatcherOptions[];
    /** Key down callback function */
    keyDown?: KeyboardCallback;
    /** Key up callback function */
    keyup?: KeyboardCallback;
    /** Currently set keys */
    keys: (KeyMatcher | undefined)[];
    constructor(namespace: DataNamespace, options: KeyBindingOptions, game: Game);
    static formatKeyMatcher(matcher: KeyMatcher): string;
}
declare class KeyboardInputManager implements EncodableObject {
    game: Game;
    _bindings: NamespaceRegistry<KeyBinding>;
    _globalBindings: Map<string, KeyBinding>;
    _pageBindings: Map<Page, Map<string, KeyBinding>>;
    /** If a keybind is currently being set */
    get isSettingKeyBind(): boolean;
    _bindingBeingSet?: KeyBinding;
    _bindingSetIndex: number;
    _confirmingBinding: boolean;
    constructor(game: Game);
    /** Registers a single keybinding under the given namespace */
    registerBinding(namespace: DataNamespace, options: KeyBindingOptions): void;
    /** Registers multiple keybindings under the same namespace */
    registerBindings(namespace: DataNamespace, bindingOptions: KeyBindingOptions[]): void;
    /** Gets a KeyBinding by its global ID */
    getBindingByID(id: string): KeyBinding | undefined;
    /** Starts the process for setting a new keybind */
    startBindingKey(binding: KeyBinding, index: number): void;
    /** Removes the key binding from the given index */
    clearKeyBinding(binding: KeyBinding, index: number): void;
    /** Resets all key bindings to their default values */
    resetBindingsToDefault(): void;
    /** Called once after save data is loaded */
    onSaveLoad(): void;
    /** Hides/shows the bindings menu in the settings if there are registered keybinds, and populates the list of key bind settings */
    _constructBindingsMenu(): void;
    /** Intializes key-binding-edit components and sets their callback functions */
    initializeBindingEdits(): void;
    _isValidKeyIndex(index: number): boolean;
    /** Constructs the keys to KeyBinding maps, and sets default values for empty bindings */
    _constructBindingMaps(): void;
    /** Sets a binding to the specified keys in the global and page binding maps */
    _setBindingToMaps(binding: KeyBinding, keys: string): void;
    /** Deletes a binding from the global and page binding maps */
    _removeBindingFromMaps(binding: KeyBinding, keys: string): void;
    /** Removes the binding corresponding to keys from all conflicts, and removes them from the global and page binding maps */
    _removeConflictingBindings(conflicts: Set<KeyBinding>, keys: string): void;
    /** If a keyboard event should be ignored, because it was pressed within a text form */
    _ignoreKeyPress(e: KeyboardEvent): boolean;
    _getKeybindsFromKeys(keys: string): {
        page: KeyBinding | undefined;
        global: KeyBinding | undefined;
    };
    /** Returns a list of KeyBindings that conflict with an existing binding */
    _getConflictsFromKeys(binding: KeyBinding, keys: string): Set<KeyBinding>;
    /** Shows a confirmation modal for replacing conflicting keybinds */
    _showConflictConfirmation(conflicts: Set<KeyBinding>, binding: KeyBinding, bindingIndex: number, e: KeyboardEvent): Promise<void>;
    /** Callback function for when a key is pressed down */
    _onKeydown(e: KeyboardEvent): void;
    /** Callback function for when a key is released */
    _onKeyup(e: KeyboardEvent): void;
    /** Converts a key matcher into a string that identifies it */
    _matcherToKeys(matcher: KeyMatcher): string;
    /** Converts a keyboard event into a matcher for that type of event */
    _eventToKeyMatcher(e: KeyboardEvent): KeyMatcher;
    /** Renders a change in a key binding */
    _renderKeyBindChange(binding: KeyBinding): void;
    _getBindingEdits(binding: KeyBinding): NodeListOf<KeyBindingEditElement>;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Maximum number of keybinds per callback */
    static readonly MAX_KEYBINDS = 2;
    /** Keys that cannot be bound */
    static readonly INVALID_KEYS: string[];
    static readonly DEFAULT_MATCHER_OPTIONS: Readonly<KeyMatcher>;
}
declare type KeyBindingEditOption = {
    binding: HTMLButtonElement;
    clear: HTMLButtonElement;
};
declare class KeyBindingEditElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    name: HTMLSpanElement;
    bindingOptions: KeyBindingEditOption[];
    constructor();
    connectedCallback(): void;
    initialize(binding: KeyBinding, manager: KeyboardInputManager): void;
    updateBindings(binding: KeyBinding): void;
    setBinding(index: number): void;
}
