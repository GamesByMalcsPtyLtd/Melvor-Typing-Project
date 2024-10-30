declare const enum BankSortOrderSetting {
    Default = 0,
    ItemValueDescending = 1,
    ItemValueAscending = 2,
    StackValueDescending = 3,
    StackValueAscending = 4,
    Custom = 5
}
declare const enum NumberFormatSetting {
    ShowThousands = 0,
    CondenseThousands = 1
}
declare const enum BankBorderSetting {
    Default = 0,
    Minimal = 1
}
declare const enum ColourBlindModeSetting {
    None = 0,
    RedGreen = 1
}
declare const enum MapTextureQuality {
    Low = 0,
    Medium = 1,
    High = 2
}
declare const enum SidebarLevelSetting {
    Both = 0,
    Normal = 1,
    Abyssal = 2
}
interface BooleanSettings {
    /** Skills will continue to run even if the bank is full */
    continueIfBankFull: boolean;
    /** Thieving will continue when the player is stunned */
    continueThievingOnStun: boolean;
    /** Automatically restart dungeons when they are completed */
    autoRestartDungeon: boolean;
    /** Automatically save to the cloud */
    autoCloudSave: boolean;
    /** Enabled Dark Mode for the game */
    darkMode: boolean;
    /** Show Notifications when GP is added/removed */
    showGPNotifications: boolean;
    /** Enable minor accessibility features for screen readers */
    enableAccessibility: boolean;
    /** Show Enemy Skill Levels on the Combat Page */
    showEnemySkillLevels: boolean;
    /** Show a confirmation message before closing the game */
    showCloseConfirmations: boolean;
    /** Displayed numbers will use a thousands seperator */
    hideThousandsSeperator: boolean;
    /** If skills should display "Virtual" levels */
    showVirtualLevels: boolean;
    /** If a confirmation message should be shown when selling items */
    showSaleConfirmations: boolean;
    /** If a confirmation message should be shown when buying items from the shop */
    showShopConfirmations: boolean;
    /** If the game should pause when it becomes unfocused */
    pauseOnUnfocus: boolean;
    /** If the combat minibar should be shown while in combat */
    showCombatMinibar: boolean;
    /** If the combat minibar should be shown on the combat page */
    showCombatMinibarCombat: boolean;
    /** If the skilling minibar should be shown for Non-Combat skills */
    showSkillingMinibar: boolean;
    /** If combinations runes should be used to cast spells */
    useCombinationRunes: boolean;
    /** If the Auto. Slayer upgrade should be used */
    enableAutoSlayer: boolean;
    /** If notifications should be shown when items are added to the bank */
    showItemNotifications: boolean;
    /** If small notifications should be shown when leveling up a skill */
    useSmallLevelUpNotifications: boolean;
    /** If the default border style should be used for bank items */
    useDefaultBankBorders: boolean;
    /** If the equip option in the bank should default to the current set when selecting an item */
    defaultToCurrentEquipSet: boolean;
    /** If max level masteries should be hidden in the spend mastery xp modal */
    hideMaxLevelMasteries: boolean;
    /** If confirmation messages should be shown when losing a mastery pool checkpoint when spending mastery xp */
    showMasteryCheckpointconfirmations: boolean;
    /** If push notifications should be sent when the maximum offline time has been reached */
    enableOfflinePushNotifications: boolean;
    /** If push notifications should be sent when crops are ready to harvest */
    enableFarmingPushNotifications: boolean;
    /** If offline combat has been enabled */
    enableOfflineCombat: boolean;
    /** If the mini sidebar should be used (Desktop only) */
    enableMiniSidebar: boolean;
    /** If the auto-equip food upgrade is enabled */
    enableAutoEquipFood: boolean;
    /** If the auto-swap food upgrade is enabled */
    enableAutoSwapFood: boolean;
    /** If perfect items can be received from Cooking */
    enablePerfectCooking: boolean;
    /** If confirmation modals should be shown when destroying crops in farming */
    showCropDestructionConfirmations: boolean;
    /** If confirmation modals should be shown when attempting to reroll a maximum magnitude modifier in astrology */
    showAstrologyMaxRollConfirmations: boolean;
    /** If the new quantity in the bank should be shown in item notifications */
    showQuantityInItemNotifications: boolean;
    /** If notifications should be shown when preserving resources in skills */
    showItemPreservationNotifications: boolean;
    /** If notifications should be shown when recieving/losing slayer coins */
    showSlayerCoinNotifications: boolean;
    /** If the player's equipment sets should be shown in the combat minibar */
    showEquipmentSetsInCombatMinibar: boolean;
    /** If health and attack progress bars should be shown in the combat minibar */
    showBarsInCombatMinibar: boolean;
    /** If notifications should be shown when being stunned in combat */
    showCombatStunNotifications: boolean;
    /** If notifications should be shown when being slept in combat */
    showCombatSleepNotifications: boolean;
    /** If modals should be shown when discovering a mark in summoning */
    showSummoningMarkDiscoveryModals: boolean;
    /** If damage splashes should be disabled in combat */
    enableCombatDamageSplashes: boolean;
    /** If progress bars should be disabled */
    enableProgressBars: boolean;
    /** If tier I potions should be shown in the potion select screen */
    showTierIPotions: boolean;
    /** If tier II potions should be shown in the potion select screen */
    showTierIIPotions: boolean;
    /** If tier III potions should be shown in the potion select screen */
    showTierIIIPotions: boolean;
    /** If tier IV potions should be shown in the potion select screen */
    showTierIVPotions: boolean;
    /** If the spider assets in Lair of the Spider Queen should be replaced by images of cats */
    enableEyebleachMode: boolean;
    /** If the Township convert bypasses the confirmation popup */
    enableQuickConvert: boolean;
    /** If locked Township buildings should be shown */
    showLockedTownshipBuildings: boolean;
    /** Whether to use the notifications v2 system or not */
    useNewNotifications: boolean;
    /** Whether to display item names in notifications v2 */
    showItemNamesInNotifications: boolean;
    /** Notifications v2: Whether summoning mark notifications are important */
    importanceSummoningMarkFound: boolean;
    /** Notifications v2: Whether error notifications are important */
    importanceErrorMessages: boolean;
    /** Whether bank tabs should show a scroll bar instead of overflowing */
    enableScrollableBankTabs: boolean;
    /** Toggle visibility of Open in Wiki links */
    showWikiLinks: boolean;
    /** Disables the hex grid in cartography for hexes outside of sight range */
    disableHexGridOutsideSight: boolean;
    /** Enables antialiasing on the cartography map */
    enableMapAntialiasing: boolean;
    /** Notifications v2: Show Skill XP Notifications */
    showSkillXPNotifications: boolean;
    /** Enables Super Dark Mode for the game. Requires Dark Mode enabled. */
    superDarkMode: boolean;
    /** Enables background colours for Expansion combat areas*/
    showExpansionBackgroundColours: boolean;
    /** Enables warning text for combat areas (like the barrier one) */
    showCombatAreaWarnings: boolean;
    /** Whether to use compact styling for notifications v2 */
    useCompactNotifications: boolean;
    /** Whether to use the legacy notifications system */
    useLegacyNotifications: boolean;
    /** Whether to display the cat image for hidden dig sites */
    useCat: boolean;
    /** Whether to throttle the framerate of the cartography map when game inactivity is detected */
    throttleFrameRateOnInactivity: boolean;
    /** Enable/Disable Birthday Event during active time period */
    toggleBirthdayEvent: boolean;
    /** Enable/Disable Discord RPC on Steam */
    toggleDiscordRPC: boolean;
    /** Enable All but 1 donation for generic artefacts */
    genericArtefactAllButOne: boolean;
    /** If currency notifications for abyssal pieces should be shown */
    showAbyssalPiecesNotifications: boolean;
    /** If currency notifications for abyssal slayer coins should be shown */
    showAbyssalSlayerCoinNotifications: boolean;
    /** If monsters will be corrupted at the start of a fight, at the cost of soul points */
    enablePermaCorruption: boolean;
    /** If Abyssal Pieces should show next to the shop instead of GP */
    showAPNextToShopSidebar: boolean;
    /** If Abyssal Slayer Coins should show next to slayer instead of SC */
    showASCNextToSlayerSidebar: boolean;
    /** Notifications v2: Show Abyssal XP Notifications */
    showAbyssalXPNotifications: boolean;
    /** Enable double click to equip items from Bank */
    enableDoubleClickEquip: boolean;
    /** Enable double click to open items from Bank */
    enableDoubleClickOpen: boolean;
    /** Enable double click to bury items from Bank */
    enableDoubleClickBury: boolean;
    /** If Soul Points should show next to Prayer instead of PP */
    showSPNextToPrayerSidebar: boolean;
    /** If Bank tabs should be sticky */
    enableStickyBankTabs: boolean;
    /** Determines if the game should use the legacy realm selection (per skill) instead of the new global selection */
    useLegacyRealmSelection: boolean;
    /** Sets opacity on Skill's nav if there is no content in that Skill for the current realm */
    showOpacityForSkillNavs: boolean;
    /**
     * BANK FILTERS (Using settings because its easier)
     */
    bankFilterShowAll: boolean;
    bankFilterShowDemo: boolean;
    bankFilterShowFull: boolean;
    bankFilterShowTotH: boolean;
    bankFilterShowAoD: boolean;
    bankFilterShowItA: boolean;
    bankFilterShowDamageReduction: boolean;
    bankFilterShowAbyssalResistance: boolean;
    bankFilterShowNormalDamage: boolean;
    bankFilterShowAbyssalDamage: boolean;
    bankFilterShowSkillXP: boolean;
    bankFilterShowAbyssalXP: boolean;
    /** Whether to always show realm selection for Agility, regardless of the value of useLegacyRealmSelection */
    alwaysShowRealmSelectAgility: boolean;
}
interface ChoiceSettings {
    /** If special attack modifiers should use neutral colours */
    showNeutralAttackModifiers: boolean;
    /** Determines which page the game will go to when loading a save */
    defaultPageOnLoad: Page;
    /** Determines how numbers are formatted */
    formatNumberSetting: NumberFormatSetting;
    /** Determines how the bank will be sorted */
    bankSortOrder: BankSortOrderSetting;
    /** Unused. Determines colour blind mode that is applied to the game. */
    colourBlindMode: ColourBlindModeSetting;
    /** Determine the Horizontal Position of new notifications */
    notificationHorizontalPosition: NotificationHorizontalPositions;
    /** Determine the Horizontal Position of new notifications */
    notificationDisappearDelay: number;
    /** Determines the texture quality to use for the cartography map */
    mapTextureQuality: MapTextureQuality;
    /** Determine what background image to use for the game. Image file is bg_${num}.jpg */
    backgroundImage: number;
    /** Determines the maximum framerate to run the cartography map at. -1 indicates native screen refreshrate */
    cartographyFrameRateCap: number;
    sidebarLevels: SidebarLevelSetting;
}
interface SettingData<T> {
    /** The current value of the setting */
    currentValue: T;
    /** The default value of the setting */
    defaultValue: T;
    /** If the game should immediately save when the value is changed. */
    saveOnChange: boolean;
    /** Optional. Method called when attempting to change the setting. If it returns false, the setting is not changed. */
    shouldChange?: (oldValue: T, newValue: T) => boolean;
    /** Method called when the setting is attempted to be changed. */
    onChange?: (oldValue: T, newValue: T) => void;
    /** Display name of the setting */
    name: string;
}
declare type ChoiceSettingOption<T> = {
    /** The value of the setting */
    value: T;
    /** The name of the option */
    name: string;
    /** Optional, image to display next to the option */
    media?: string;
};
interface ChoiceSettingData<T> extends SettingData<T> {
    /** Defines the different options the setting can take */
    options: ChoiceSettingOption<T>[];
}
declare type MapToSettingsData<Type> = {
    [Property in keyof Type]: SettingData<Type[Property]>;
};
declare type MapToChoiceSettingData<Type> = {
    [Property in keyof Type]: ChoiceSettingData<Type[Property]>;
};
declare class DefaultPageOption implements ChoiceSettingOption<Page> {
    value: Page;
    get name(): string;
    get media(): string;
    constructor(value: Page);
}
declare class Settings implements EncodableObject, BooleanSettings, ChoiceSettings {
    game: Game;
    get continueIfBankFull(): boolean;
    get continueThievingOnStun(): boolean;
    get autoRestartDungeon(): boolean;
    get autoCloudSave(): boolean;
    get darkMode(): boolean;
    get showGPNotifications(): boolean;
    get enableAccessibility(): boolean;
    get showEnemySkillLevels(): boolean;
    get showCloseConfirmations(): boolean;
    get hideThousandsSeperator(): boolean;
    get showVirtualLevels(): boolean;
    get showSaleConfirmations(): boolean;
    get showShopConfirmations(): boolean;
    get pauseOnUnfocus(): boolean;
    get showCombatMinibar(): boolean;
    get showCombatMinibarCombat(): boolean;
    get showSkillingMinibar(): boolean;
    get useCombinationRunes(): boolean;
    get enableAutoSlayer(): boolean;
    get useDefaultBankBorders(): boolean;
    get defaultToCurrentEquipSet(): boolean;
    get hideMaxLevelMasteries(): boolean;
    get showMasteryCheckpointconfirmations(): boolean;
    get enableOfflinePushNotifications(): boolean;
    get enableFarmingPushNotifications(): boolean;
    get enableOfflineCombat(): boolean;
    get showNeutralAttackModifiers(): boolean;
    get enableMiniSidebar(): boolean;
    get enableAutoEquipFood(): boolean;
    get enableAutoSwapFood(): boolean;
    get enablePerfectCooking(): boolean;
    get showCropDestructionConfirmations(): boolean;
    get showAstrologyMaxRollConfirmations(): boolean;
    get showQuantityInItemNotifications(): boolean;
    get showItemPreservationNotifications(): boolean;
    get showSlayerCoinNotifications(): boolean;
    get showEquipmentSetsInCombatMinibar(): boolean;
    get showBarsInCombatMinibar(): boolean;
    get showCombatStunNotifications(): boolean;
    get showCombatSleepNotifications(): boolean;
    get showSummoningMarkDiscoveryModals(): boolean;
    get enableCombatDamageSplashes(): boolean;
    get enableProgressBars(): boolean;
    get showItemNotifications(): boolean;
    get useSmallLevelUpNotifications(): boolean;
    get showTierIPotions(): boolean;
    get showTierIIPotions(): boolean;
    get showTierIIIPotions(): boolean;
    get showTierIVPotions(): boolean;
    get showPotionTiers(): [boolean, boolean, boolean, boolean];
    get enableEyebleachMode(): boolean;
    get enableQuickConvert(): boolean;
    get showLockedTownshipBuildings(): boolean;
    get useNewNotifications(): boolean;
    get showItemNamesInNotifications(): boolean;
    get importanceSummoningMarkFound(): boolean;
    get importanceErrorMessages(): boolean;
    get showWikiLinks(): boolean;
    get defaultPageOnLoad(): Page;
    get formatNumberSetting(): NumberFormatSetting;
    get bankSortOrder(): BankSortOrderSetting;
    get colourBlindMode(): ColourBlindModeSetting;
    get notificationHorizontalPosition(): NotificationHorizontalPositions;
    get notificationDisappearDelay(): number;
    get enableScrollableBankTabs(): boolean;
    get disableHexGridOutsideSight(): boolean;
    get mapTextureQuality(): MapTextureQuality;
    get enableMapAntialiasing(): boolean;
    get showSkillXPNotifications(): boolean;
    get backgroundImage(): number;
    get superDarkMode(): boolean;
    get showExpansionBackgroundColours(): boolean;
    get showCombatAreaWarnings(): boolean;
    get useCompactNotifications(): boolean;
    get useLegacyNotifications(): boolean;
    get useCat(): boolean;
    get throttleFrameRateOnInactivity(): boolean;
    get cartographyFrameRateCap(): number;
    get toggleBirthdayEvent(): boolean;
    get toggleDiscordRPC(): boolean;
    get genericArtefactAllButOne(): boolean;
    get showAbyssalPiecesNotifications(): boolean;
    get showAbyssalSlayerCoinNotifications(): boolean;
    get enablePermaCorruption(): boolean;
    get showAPNextToShopSidebar(): boolean;
    get showASCNextToSlayerSidebar(): boolean;
    get sidebarLevels(): SidebarLevelSetting;
    get showAbyssalXPNotifications(): boolean;
    get enableDoubleClickEquip(): boolean;
    get enableDoubleClickOpen(): boolean;
    get enableDoubleClickBury(): boolean;
    get showSPNextToPrayerSidebar(): boolean;
    get enableStickyBankTabs(): boolean;
    get useLegacyRealmSelection(): boolean;
    get showOpacityForSkillNavs(): boolean;
    get bankFilterShowAll(): boolean;
    get bankFilterShowDemo(): boolean;
    get bankFilterShowFull(): boolean;
    get bankFilterShowTotH(): boolean;
    get bankFilterShowAoD(): boolean;
    get bankFilterShowItA(): boolean;
    get bankFilterShowDamageReduction(): boolean;
    get bankFilterShowAbyssalResistance(): boolean;
    get bankFilterShowNormalDamage(): boolean;
    get bankFilterShowAbyssalDamage(): boolean;
    get bankFilterShowSkillXP(): boolean;
    get bankFilterShowAbyssalXP(): boolean;
    get alwaysShowRealmSelectAgility(): boolean;
    /** The set of mastery namespaces that should be hidden in the spend mastery modal */
    hiddenMasteryNamespaces: Set<string>;
    constructor(game: Game);
    postDataRegistration(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Transfer settings from old savegame */
    convertFromOldFormat(savegame: NewSaveGame, idMap: NumericIDMap): void;
    /** Initializes all <settings-checkbox> and <settings-toggle> components */
    initializeToggles(): void;
    /** Initializes all <settings-dropdown> components */
    initializeChoices(): void;
    isBooleanSetting(settingID: string): settingID is keyof BooleanSettings;
    isChoiceSetting(settingID: string): settingID is keyof ChoiceSettings;
    toggleSetting(setting: keyof BooleanSettings): void;
    setTogglesChecked(setting: keyof BooleanSettings, isChecked: boolean): void;
    changeChoiceSetting<T extends keyof ChoiceSettings>(setting: T, newValue: ChoiceSettings[T]): void;
    getOptionFromValue<T>(value: T, data: ChoiceSettingData<T>): ChoiceSettingOption<T>;
    /** Load the current settings */
    onLoad(): void;
    boolData: MapToSettingsData<BooleanSettings>;
    choiceData: MapToChoiceSettingData<ChoiceSettings>;
}
declare type OldBankSettings = {
    /** @deprecated */
    bankBorder: BankBorderSetting;
    /** @deprecated */
    currentEquipDefault: boolean;
    /** @deprecated */
    defaultBankSort: BankSortOrderSetting;
    /** @deprecated Replaced by Bank property */
    defaultItemTab: BankDefaultItem[];
};
declare type OldMasterySettings = {
    /** @deprecated */
    hideMaxLevel: boolean;
    /** @deprecated */
    confirmationCheckpoint: boolean;
};
declare type OldGeneralSettings = {
    /** @deprecated */
    pushNotificationOffline: boolean;
    /** @deprecated */
    pushNotificationFarming: boolean;
    /** @deprecated */
    enabledOfflineCombat: boolean;
    /** @deprecated */
    enableNeutralSpecModifiers: boolean;
    /** @deprecated */
    miniSidebar: boolean;
    /** @deprecated */
    autoEquipFood: boolean;
    /** @deprecated */
    autoSwapFood: boolean;
    /** @deprecated */
    continueThievingOnStun: boolean;
    /** @deprecated */
    allowPerfectCook: boolean;
    /** @deprecated */
    showDestroyCropConfirmation: boolean;
    /** @deprecated */
    showAstrologyMaxRollConfirmation: boolean;
    /** @deprecated */
    showQtyInItemNotification: boolean;
    /** @deprecated */
    showItemPreservationNotification: boolean;
    /** @deprecated */
    showSlayerCoinNotification: boolean;
    /** @deprecated */
    combatMinibarShowEquipmentSets: boolean;
    /** @deprecated */
    combatMinibarShowEnemyBars: boolean;
    /** @deprecated */
    showPotionTier: boolean[];
    /** @deprecated */
    autoReusePotion: number[];
};
declare type OldNotificationSettings = {
    /** @deprecated */
    combatStunned: boolean;
    /** @deprecated */
    combatSleep: boolean;
    /** @deprecated */
    summoningMark: boolean;
};
declare type OldPerformanceSettings = {
    /** @deprecated */
    disableDamageSplashes: boolean;
    /** @deprecated */
    disableProgressBars: boolean;
};
declare type OldAccessibilitySettings = {
    /** @deprecated */
    colourBlindMode: number;
};
interface OldSettingsData {
    /** @deprecated */
    bank: OldBankSettings;
    /** @deprecated */
    mastery: OldMasterySettings;
    /** @deprecated */
    general: OldGeneralSettings;
    /** @deprecated */
    notifications: OldNotificationSettings;
    /** @deprecated */
    performance: OldPerformanceSettings;
    /** @deprecated */
    accessibility: OldAccessibilitySettings;
}
declare var localStorageSettings: LocalStorageSettings;
/** Adjusts the zoom level. Only applies to the steam client */
declare function adjustZoom(zoomLevel: number): void;
/** Toggles the game to fullscreen mode. Only applies to the steam client */
declare function toggleFullScreen(): void;
/** Stores class names utilized for colour blind modes for the game */
declare const colourBlindClasses: Record<ColourBlindModeSetting, string>;
/** Localizes elements in the settings menu */
declare function localizeSettings(): void;
declare const offlineCombatChecks: boolean[];
declare function showEnableOfflineCombatModal(): void;
declare function dismissOfflineCombatAlert(): void;
declare function dismissOfflineThievingAlert(): void;
declare function toggleOfflineCombatCheckbox(id: number): void;
declare function updateEnableOfflineCombatBtn(): void;
declare function enableOfflineCombat(): void;
declare function enableOfflineThieving(): void;
declare function initLocalStorageSettings(): void;
interface LocalStorageSettings {
    hideEmptySaveSlots?: string;
    enableSaveOverwriteWarning?: string;
    enableMostRecentSaveBanner?: string;
}
