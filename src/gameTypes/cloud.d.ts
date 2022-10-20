declare const CLOUDURL = "";
declare const ENABLEPLAYFABAUTH = false;
declare let forceSaveCooldown: boolean;
declare let forceSyncCooldownTimer: number;
declare let connectedToCloud: boolean;
declare let connectedToPlayFab: boolean;
declare let storedCloudSaves: string[];
declare let playFabSaves: (null | string)[];
declare let playFabLoginTimestamp: Date | number;
declare let forceSave: boolean;
declare let lastSaveTimestamp: number;
declare let lastLoginTimestamp: number;
declare let saveAndClose: boolean;
declare let forceSyncSpamPrevention: number;
declare let autoCloudSaveInterval: number;
/** Used to acquire user data from Melvor Cloud
 * This used to gather all required data from the Cloud, but we have since switched to using PlayFab primarily for this information
 * Still very important though, as it grabs the PlayFab ID from Melvor Cloud to Authenticate.
 */
declare function getCloudCharacters(): void;
/** Future function to be used to determine whether or not the correct URL origin is used to access the game */
declare const gameOriginCheck: () => boolean;
/**
 * This is a dumping ground for sure.
 * Used to initiate the connection to PlayFab and Melvor Cloud
 * If PlayFabID is stored, it will connects to PlayFab immediately to acquire Cloud saves.
 * Detemines what to do based on results of the POST request.
 * @param {boolean} forceLoad
 * @param {boolean} accessCheck
 */
declare const checkConnectionToCloud: (forceLoad?: boolean, accessCheck?: boolean) => void;
/** Character Selection UI update if connection to PlayFab Failed */
declare function connectionFailedPlayFab(): void;
/** Character Selection UI update if connection to PlayFab Failed */
declare function connectionSuccessPlayFab(): void;
/** Deletes the Cloud Save from Melvor Cloud */
declare function deleteCloudSave(): void;
/**
 * Another dumping ground
 * This is the main function to handle cloud saving and UI updates with respect to the response.
 * @param {boolean} closeAfter
 * @param {boolean} ignorePlayFab
 */
declare function forceSync(closeAfter?: boolean, ignorePlayFab?: boolean): void;
/** Applies a cooldown so the Force Sync button cannot be spammed. */
declare function forceSyncCooldown(): void;
/** Game version checker to notify idle players of an update that was released */
declare function checkGameVersion(): void;
/** Check the current status of Patreon subscription based on the access token stored in Melvor Cloud */
declare function checkPatreon(): void;
/** Disconnect your Patreon from Melvor Cloud */
declare function disconnectPatreon(): void;
/** Loads/Creates the Cloud Settings area within the Settings Page */
declare function loadCloudOptions(isCloud: boolean): void;
/** Checks for test server access. */
declare function checkTestAccess(): void;
/** Runs when test access has been confirmed */
declare function confirmTestAccess(): void;
/** Initial check for test server access */
declare function checkTestAccessInit(forceLoad?: boolean, accessCheck?: boolean): void;
/** Checks test server access against Patreon subscription */
declare function checkTestAccessPatreon(forceLoad?: boolean, accessCheck?: boolean): void;
/** Kills the page if Test Server access failed */
declare function killPage(): void;
/** Login to PlayFab using CustomID method
 * @param {string} playFabID - CustomID to authenticate with
 */
declare function playFabLoginWithCustomID(playFabID: string): void;
/** Callback for above PlayFab login method. Performs required functions after authentication. */
declare const playFabLoginCallback: (result: PlayFabModule.SuccessContainer<PlayFabClientModels.LoginResult>, error: PlayFabModule.IPlayFabError) => Promise<void>;
/** Gets the cloud save interval that can be adjusted dyamically via PlayFab */
declare const setAutoCloudSaveInterval: () => void;
/** Gets the existing saves on PlayFab */
declare function getPlayFabSave(): void;
/** Callback for above PlayFab get save method. */
declare function onPlayFabSaveLoad(result: PlayFabModule.SuccessContainer<PlayFabClientModels.GetUserDataResult>, error: PlayFabModule.IPlayFabError): Promise<void>;
/**
 * Function used to get the value of a key from the PlayFab title data of the user.
 * @param {string} key - The key to get the value of
 * @returns {string} The value of the key
 */
declare function getPlayFabData(key: string): Promise<unknown>;
/**
 * Stores key:value pairs in the PlayFab title data of the user.
 * @param {string} key - The key to set the value of
 * @param {any} value - The value to set the key to
 */
declare function playFabStoreData(key: string, value: string | null): void;
/** Callback for above store data method */
declare function playFabStoreDataCallback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.UpdateUserDataResult>, error: PlayFabModule.IPlayFabError): void;
/**
 *
 * @param {boolean} forceSave - For the save to occur, regardless of the auto save interval.
 * @param {boolean} closeAfterSave - Close the game after saving?
 */
declare function playFabSaveData(forceSave?: boolean, closeAfterSave?: boolean): void;
declare function saveCallback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.UpdateUserDataResult>, error: PlayFabModule.IPlayFabError, forceSave?: boolean): void;
/** CLoud save successful notification */
declare function showPlayFabSaveSuccessfulNotification(): void;
/** Cloud save deleted notification */
declare function showPlayFabSaveDeletedNotification(): void;
declare function createPlayFabSaves(): string;
declare function enableCloudCharacterButton(): void;
declare function deletePlayFabSave(characterID?: number): void;
declare function sendPlayFabEvent(eventName: string, args: PlayFabEventBody): void;
declare function sendPlayFabEventCallback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.WriteEventResponse>, error: PlayFabModule.IPlayFabError): void;
declare function queuePlayFabEvents(eventName: string, args: PlayFabEventBody): void;
declare function submitQueuedPlayFabEvents(): void;
declare function fetchLatestTitleNews(): void;
declare function displayLatestTitleNews(result: PlayFabModule.SuccessContainer<PlayFabClientModels.GetTitleNewsResult>, error: PlayFabModule.IPlayFabError): void;
declare function createTitleNewsElement(timestamp: string, title: string, body: string, newsId: string): string;
declare function readPlayFabNews(): void;
declare function loginToMelvorCloud(playFab?: boolean): void;
declare function registerToMelvorCloud(): void;
declare function forgotPasswordMelvorCloud(): void;
declare function disableLoginForm(): void;
declare function enableLoginForm(): void;
declare function disableRegisterForm(): void;
declare function enableRegisterForm(): void;
declare function disableForgotForm(): void;
declare function enableForgotForm(): void;
declare function disableChangeEmailForm(): void;
declare function enableChangeEmailForm(): void;
declare function disableChangePasswordForm(): void;
declare function enableChangePasswordForm(): void;
declare function updateEmailMelvorCloud(): void;
declare function updatePasswordMelvorCloud(): void;
declare function cloudSaveAndExit(): void;
declare function updateLastCloudSaveTimestamp(): void;
/** Links the user's Steam ID to their PlayFab account which can be used alongside Steam Web API */
declare const linkSteamAccountToPlayFab: () => void;
declare const getPlayFabInfo: () => void;
/** Promise that uses Playfab to check active purchase status of Steam version. Utilises Steam's Web API */
declare const getSteamPurchaseStatus: () => Promise<SteamPurchaseResult>;
/** Redirects user based on value returned of promise */
declare const checkSteamPurchase: () => void;
declare const getMobilePurchaseStatus: () => Promise<unknown>;
declare const checkMobilePurchase: () => void;
/** Genereates a UUID for active user tracking */
declare function generateUUID(length: number): string;
/** Ping function to track active users. Google Analytics sucks for this. Pings every 5 minutes */
declare let pingCheck: number;
declare function pingAsActive(forcePing?: boolean): void;
/** Assigns active device of user */
declare function postActiveUserDevice(): void;
declare function failSteamPurchase(): void;
declare function confirmSteamPurchase(): void;
declare function warningSteamPurchase(): void;
declare function failMobilePurchase(): void;
declare function confirmMobilePurchase(): void;
declare function warningMobilePurchase(): void;
declare function failBrowserPurchase(): void;
declare function confirmBrowserPurchase(): void;
declare function warningBrowserPurchase(): void;
declare function showActivationError(error: number): void;
declare function hideActivationError(error: number): void;
declare function warnActivationNotLoggedIn(): void;
declare const updatePlayerTags: () => void;
