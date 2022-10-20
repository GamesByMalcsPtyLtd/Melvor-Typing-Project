declare const useCDN = true;
declare const CDNVersion = "v018";
declare const CDNEndpoint = "https://cdn.melvor.net/core";
declare const DEBUGENABLED = true;
declare const releaseDate = 1637258400000;
declare const DEBUG_REPORTER: string[];
declare const CDNDIR: string;
declare const gameTitle = "Melvor Idle :: v1.1";
declare let currentTitleNewsID: string[];
declare let playFabEventQueue: {
    eventName: string;
    args: PlayFabEventBody;
}[];
declare let isLoaded: boolean;
declare let confirmedLoaded: boolean;
declare let steamAchievements: number[];
declare let connectedToSteam: boolean;
declare let lolYouDiedGetRekt: boolean;
/** Multiplier for HP and damage values */
declare let numberMultiplier: number;
declare let returnToGameAfterSubmission: boolean;
declare const modalQueue: SweetAlertOptions[];
declare const cloudSaveHeartbeatLevel = 0;
declare let loadingOfflineProgress: boolean;
declare let modalIsOpen: boolean;
declare let offlineProgressCache: string;
/** Update everything on screen when loading the game */
declare function updateWindow(): Promise<void>;
/** Loads the lore book modal text */
declare function loadLore(): void;
declare let offlineModalID: number;
/** Removes old variables from localstorage, and fixes invalid bank tabs */
declare function cleanSaveFile(): void;
declare function getCloudSaveHeartbeatInterval(): number;
declare const tenSeconds = 10000;
declare let tenSecondUpdateTimeout: number;
declare let gameVersionChecker: number;
/** Updates that happen every 10 seconds */
declare function updateEvery10Seconds(): void;
declare const isAdsPath: () => boolean;
/**
 * DEPRECATED
 * Use nativeManager.isIOS
 */
declare function isIOS(): boolean;
/**
 * DEPRECATED
 * Use nativeManager.isAndroid
 */
declare function isAndroid(): boolean;
/**
 * DEPRECATED
 * Use nativeManager.isMobile
 */
declare function isMobile(): true | typeof isAndroid;
/**
 * DEPRECATED
 * Use nativeManager.isSteam
 */
declare function isSteam(): boolean;
declare const isDemoSkill: (skill: AnySkill) => boolean;
declare const getLockedTitle: (skill?: AnySkill, dungeon?: Dungeon) => string;
declare const getLockedMessage: (skill?: AnySkill, dungeon?: Dungeon) => string;
declare let IAPPrice: string;
declare const getLocaleIAPPrice: () => void;
declare const IAPPurchaseInProcess = false;
declare let IAPTimer: number;
declare const performUnlockIAP: (productID: string) => void;
declare const performUnlockExpansionIAP: (productID: string) => void;
declare const startIAPPurchaseInterval: () => void;
declare const getAndroidIAPStatus: () => Promise<unknown>;
declare const updateMobilePurchaseStatus: () => void;
declare const getLockedBtn: (productID: string) => string;
declare function openNextModal(): void;
declare function addModalToQueue(modal: SweetAlertOptions): void;
declare function showBaneCompletionModal(): void;
declare function onSaveDataLoad(): Promise<void>;
declare function resetAccountData(): void;
declare function setDiscordRPCDetails(): Promise<void>;
declare function initSteam(): void;
declare function unlockSteamAchievement(achievementName: string, i: number): void;
declare function resetSteamAchievements(): void;
declare function showPageLoader(): void;
declare function initTooltips(): void;
declare function generateLoreModals(): string;
declare function resetSkillsTo99(confirmed?: boolean): void;
declare function setBackground(id: number): void;
