declare const CLOUDURL = "";
declare const ENABLEPLAYFABAUTH = false;
/** Future function to be used to determine whether or not the correct URL origin is used to access the game */
declare const gameOriginCheck: () => boolean;
/** Character Selection UI update if connection to PlayFab Failed */
declare function connectionFailedPlayFab(): void;
/** Character Selection UI update if connection to PlayFab Failed */
declare function connectionSuccessPlayFab(): void;
/** Game version checker to notify idle players of an update that was released */
declare function checkGameVersion(): void;
/** Loads/Creates the Cloud Settings area within the Settings Page */
declare function loadCloudOptions(isCloud: boolean): void;
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
/** Cloud save deleted notification */
declare function showPlayFabSaveDeletedNotification(): void;
declare function createPlayFabSaves(): string;
declare function enableCloudCharacterButton(): void;
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
declare const updatePlayerLangTags: () => void;
