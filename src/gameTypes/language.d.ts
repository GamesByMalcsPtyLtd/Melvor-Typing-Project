declare let setLang: SupportedLanguage;
declare let loadedLangJson: LanguageData;
declare const langVersion = 699;
declare const LANGS: SupportedLanguage[];
declare type LanguageCategory = 'SPECIAL_ATTACK' | 'SKILL_NAME' | 'ITEM_NAME' | 'MONSTER_NAME' | 'ITEM_DESCRIPTION' | 'MODIFIER_DATA' | 'PET_NAME' | 'LORE' | 'GAME_GUIDE' | 'SHOP_NAME' | 'SHOP_DESCRIPTION' | 'PRIVACY_POLICY' | 'MENU_TEXT' | 'MAGIC' | 'THIEVING' | 'PRAYER' | 'TREE_NAME' | 'ORE_NAME' | 'FISHING' | 'SKILL_CATEGORY' | 'SPECIAL_ATTACK_NAME' | 'CHARACTER_SELECT' | 'FARMING_MISC' | 'SHOP_MISC' | 'EQUIP_SLOT' | 'COMBAT_MISC' | 'MASTERY_BONUS' | 'MASTERY_CHECKPOINT' | 'MISC_STRING' | 'BANK_STRING' | 'COMBAT_AREA' | 'SLAYER_AREA' | 'DUNGEON' | 'TUTORIAL' | 'COMPLETION' | 'BANE_EVENT' | 'AGILITY' | 'POTION_NAME' | 'PET_MISC' | 'NUM' | 'IAP' | 'SUMMONING_SYNERGY' | 'PAGE_NAME_MISC' | 'GAMEMODES' | 'PAGE_NAME' | 'SETTINGS' | 'GOLBIN_RAID' | 'SHOP_CAT' | 'ASTROLOGY' | 'STATISTICS' | 'COMPLETION' | 'MISC_STRING' | 'SHOP_MISC' | 'SUMMONING_SYNERGY' | 'AGILITY' | 'CHARACTER_SELECT' | 'EVENTS' | 'TOASTS' | 'EQUIPMENT_STAT' | 'TIME_UNIT' | 'MILESTONES' | 'PUSH_NOTIFICATIONS' | 'PASSIVES' | 'ERROR' | 'MONSTER_DESCRIPTION' | 'TOWNSHIP' | 'TOWNSHIP_MENU' | 'MINING_TYPE' | 'MOD_MANAGER' | 'TOWNSHIP_TASKS';
interface LangStringData {
    category: LanguageCategory;
    id: string;
}
declare function fetchLanguageJSON(lang: 'catOrder'): Promise<[string][]>;
declare function fetchLanguageJSON(lang: SupportedLanguage): Promise<LanguageData>;
declare function setLanguage(lang: SupportedLanguage): Promise<void>;
declare function localiseSwal2(): void;
declare let SwalLocale: typeof Swal;
declare function updateUIForLanguageChange(): void;
declare function getLangString(identifier: string | number): string;
