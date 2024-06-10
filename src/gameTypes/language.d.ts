declare let setLang: SupportedLanguage;
declare let loadedLangJson: LanguageData;
/** Language specific collator for the currently loaded language. Useful for sorting things alphabetically. */
declare let langCollator: Intl.Collator;
declare const langVersion = 1553;
declare const LANGS: SupportedLanguage[];
declare function fetchLanguageJSON(lang: 'catOrder'): Promise<string[]>;
declare function fetchLanguageJSON(lang: SupportedLanguage): Promise<LanguageData>;
declare function setLanguage(lang: SupportedLanguage): Promise<void>;
declare function localiseSwal2(): void;
declare const defaultSwalCustomClass: SweetAlertCustomClass;
declare let SwalLocale: typeof Swal;
/** Creates a custom class object for Swal2 based on the default custom styling */
declare function createSwalCustomClass(customClass: SweetAlertCustomClass): SweetAlertCustomClass;
declare function updateUIForLanguageChange(): void;
declare function getLangString(identifier: string | number): string;
declare function initializeAltText(): void;
