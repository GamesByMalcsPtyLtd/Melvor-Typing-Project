declare type ValFcnForInput = (() => string) & ((value: string) => void);
interface JQueryStatic {
    (selector: '#username-set-main'): JQueryInputElement;
    (selector: '#username-set'): JQueryInputElement;
    (selector: '#searchTextbox'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount-1'): JQueryInputElement;
    (selector: '#import-save-character-selection'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount-2'): JQueryInputElement;
    (selector: "#searchTextbox-items"): JQueryInputElement;
    (selector: "#import-save-link-character-selection"): JQueryInputElement;
}
interface JQueryInputElement extends Omit<JQuery<HTMLElement>, 'val'> {
    val: ValFcnForInput;
}
interface Document {
    getElementById(elementID: 'username-change'): HTMLInputElement;
    getElementById(elementID: 'game-broke-error-msg'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveField'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveField2'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveFieldUpdate'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveFieldUpdate2'): HTMLTextAreaElement;
    getElementById(elementID: 'importSaveField'): HTMLTextAreaElement;
}
interface ObjectConstructor {
    keys(obj: OldSettingsData): (keyof OldSettingsData)[];
    keys(obj: NewSaveGame): NewSaveKey[];
    entries<T>(obj: NumberDictionary<T>): [string, T][];
    entries(obj: CombatLevels): [CombatLevelKey, number][];
}
