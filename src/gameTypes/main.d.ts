declare const DEBUGENABLED = false;
declare const releaseDate = 1637258400000;
declare const DEBUG_REPORTER: string[];
declare const gameTitle = "Melvor Idle :: v1.3";
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
declare let modalQueuePaused: boolean;
declare const modalQueue: SweetAlertOptions[];
declare const cloudSaveHeartbeatLevel = 0;
declare let loadingOfflineProgress: boolean;
declare let modalIsOpen: boolean;
declare let offlineProgressCache: string;
/** Update everything on screen when loading the game */
declare function updateWindow(): Promise<void>;
/**
 * Handles errors when loading the game. Shows the error modal and removes the loader.
 * @param e Exception from the try catch block
 */
declare function showGameLoadError(e: unknown): void;
/** Loads the lore book modal text */
declare function loadLore(): void;
/** Removes old variables from localstorage, and fixes invalid bank tabs */
declare function cleanSaveFile(): void;
declare function getCloudSaveHeartbeatInterval(): number;
declare const isAdsPath: () => boolean;
/**
 * @deprecated Use nativeManager.isIOS
 */
declare function isIOS(): boolean;
/**
 * @deprecated Use nativeManager.isAndroid
 */
declare function isAndroid(): boolean;
/**
 * @deprecated Use nativeManager.isMobile
 */
declare function isMobile(): true | typeof isAndroid;
/**
 * @deprecated Use nativeManager.isSteam
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
declare const performUnlockExpansionIAP: (productID: string, expansionID: number) => void;
declare const performUnlockExpandedEditionIAP: (productID: string) => void;
declare const enableBuyNowExpandedEditionBtn: () => void;
declare const disableBuyNowExpandedEditionBtn: () => void;
declare const enableBuyNowFullGameBtn: () => void;
declare const disableBuyNowFullGameBtn: () => void;
declare const startIAPPurchaseInterval: () => void;
declare const getAndroidIAPStatus: () => Promise<unknown>;
declare const updateMobilePurchaseStatus: () => void;
declare const getLockedBtn: (productID: string) => string;
/** Temporarily stops modals from being automatically opened when added to the queue */
declare function pauseModalQueue(): void;
/** Resumes modals being automatically opened when added to the queue, and opens the next one */
declare function resumeModalQueue(): void;
declare function openNextModal(): void;
declare function addModalToQueue(modal: SweetAlertOptions): void;
declare function showBaneCompletionModal(): void;
declare function onSaveDataLoad(): Promise<void>;
declare function resetAccountData(): void;
declare function setDiscordRPCDetails(): Promise<void>;
declare function initSteam(): void;
declare function unlockSteamAchievement(achievementName: string, i: number): void;
declare function showPageLoader(): void;
declare function initTooltips(): void;
declare function generateLoreModals(): string;
declare function resetSkillsTo99(confirmed?: boolean): void;
declare function resetAbyssalSkills(): void;
declare function setBackground(id: number): void;
declare function initChangelog(): void;
/** CORE GAME FUNCTIONS */
declare function updateAllGameMedia(): void;
declare function updateGameMedia(media: string): void;
declare function viewExpansion2Details(): void;
declare function resetClient(): void;
declare let shamedThisSession: boolean;
declare function showActionsRunOutSwal(): void;
declare function giveShameToken(): void;
declare function showShameSwal(): void;
declare function showToggleExpansionsModal(): void;
