declare let inCharacterSelection: boolean;
declare const enum SaveViewType {
    Local = 0,
    Cloud = 1
}
declare let currentSaveView: SaveViewType;
declare let startingGamemode: undefined | Gamemode;
declare let createNewCharacterSlot: number;
/** Headers of local saves that have been loaded */
declare const localSaveHeaders: (SaveGameHeader | SaveLoadError)[];
/** Headers of cloud saves that have been loaded */
declare const cloudSaveHeaders: (SaveGameHeader | SaveLoadError)[];
declare function loadCharacterSelection(returnToGame?: boolean): void;
declare function getCloudInfoInSlot(slotID: number): {
    cloudInfo: SaveGameHeader | undefined;
    hasCloud: boolean;
};
declare function getLocalInfoInSlot(slotID: number): SaveGameHeader | undefined;
/** Callback function for when the user refreshes the cloud save selection */
declare function refreshCloudSavesOnClick(): Promise<void>;
/** Shows the saves that are locally present on the character selection page */
declare function showLocalSaveSelection(): void;
/** Shows the saves that have been fetched from the cloud on the character selection page */
declare function showCloudSaveSelection(): void;
/** Shows the save selection as loading a save in a given slot */
declare function showSaveSelectionLoading(slotLoading: number): void;
declare function showSaveLoadingError(slotID: number, message: string, isCloud: boolean): void;
/** Changes the type of saves being displayed. */
declare function toggleSaveSelectionView(newView?: SaveViewType | -1): void;
/**
 * Checks the header of a savegame for expansion or full version content, and if that content is installed.
 * @param saveInfo A header of a savegame
 * @returns The first namespace of the expansion that is not installed, or undefined if all are installed
 */
declare function checkSaveExpansions(saveInfo: SaveGameHeader): string | undefined;
/**
 * Shows an error to the end user that their save cannot be loaded because an expansion is not installed
 * @param ns The namespace of the expansion that is not installed
 */
declare function showSaveExpansionError(ns: string): void;
/** Callback function for when the force load save setting is clicked on */
declare function forceLoadSaveOnClick(slotID: number, isCloud: boolean): Promise<void>;
/** Callback function for when a local save is clicked on */
declare function loadLocalSaveOnClick(slotID: number, force?: boolean): Promise<void>;
/** Callback function for when a cloud save is clicked on */
declare function loadCloudSaveOnClick(slotID: number, force?: boolean): Promise<void>;
/** Gets an element that displays the info on a local save in the given save slot */
declare function getLocalSaveSummary(slotID: number): HTMLElement;
/** Gets an element that displays the info on a cloud save in the given save slot */
declare function getCloudSaveSummary(slotID: number): HTMLElement;
/** Opens the import save from string form */
declare function showImportSaveFromStringForm(slotID: number): Promise<void>;
/** Opens the import save from link form */
declare function showImportSaveFromLinkForm(slotID: number): Promise<void>;
/** Attempts to import a save from a link */
declare function processImportSaveFromLink(link: string, slotID: number): Promise<void>;
declare function createLocalSaveOnClick(slotID: number): void;
/** Callback function. Setup the user account on first load */
declare function createNewSave(): void;
interface LatestHCDeath {
    PlayerName: string;
    killedBy: string;
    TotalSkillLevel: number;
    timestamp: number;
}
declare function createLatestDeathNotification(): string;
declare function showDiscontinuedModal(title: string): void;
declare function createToggleCharacterSelectionViewBtn(): string;
declare function createCharacterSelectSettings(): string;
declare function toggleCharacteSelectWarningPopup(): void;
declare function setNewStartPage(page: CharacterSelectPage): void;
/** Checks mod manager status, and shows a prompt to the user. Returns true if the current callback function should abort early. */
declare function showModManagerPrompts(): boolean;
declare function displayGamemodeSelection(slotID: number): void;
declare const setStartingGamemode: (gamemode: Gamemode) => void;
/** Callback function for when the Import Save option is clicked */
declare function importSaveOnClick(slotID: number): void;
/** Callback function for when the Create Sharable Save URL option is clicked */
declare function createSaveShareLink(characterID: number): void;
/** Callback function for when the Download Save option is clicked */
declare function openDownloadSave(slotID: number): Promise<void>;
/** Callback function for when the Export Save option is clicked */
declare function openExportSave(slotID: number): void;
/** Callback function for when the Delete Local save option is clicked */
declare function confirmLocalSaveDeletion(slotID: number): Promise<void>;
/** Callback function for when the Delete Cloud save option is clicked. */
declare function confirmCloudSaveDeletion(slotID: number): Promise<void>;
