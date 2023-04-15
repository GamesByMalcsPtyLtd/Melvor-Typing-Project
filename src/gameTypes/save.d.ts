declare let currentCharacter: number;
declare let characterSelected: boolean;
declare let backupSave: string;
declare let dataDeleted: boolean;
declare const keyVersion = "A04";
declare let key: string;
declare let currentStartPage: CharacterSelectPage;
declare let panVal: number;
declare let GUID: string;
interface SaveGameHeader {
    saveVersion: number;
    characterName: string;
    currentGamemode: Gamemode;
    totalSkillLevel: number;
    gp: number;
    offlineAction: ActiveAction | undefined;
    tickTimestamp: number;
    saveTimestamp: number;
    /** The un-modded namespaces that were active in the save when it was created. And empty array indicates the save is old and this information is unknown. */
    activeNamespaces: string[];
}
declare const setSaveGUID: () => void;
declare let sidebarSwipeTimer: number;
/** Flags whether swipe events should be blocked */
declare let disableSwipeEvents: boolean;
declare let disableSidebarSwipe: boolean;
declare function disableSidebarSwipeTimer(): void;
declare function updateKeys(): void;
/** Gets the localstorage key prefix for the given save slot */
declare function getKeyForSaveSlot(slotID: number): string;
declare function setItem(key: string, value: any): void;
declare function getItem(key: string): any;
declare function removeItem(key: string): void;
declare function saveData(): void;
/** Gets a savegame in the old localstorage format */
declare function getSaveGameOld(keyPrefix: string): NewSaveGame;
/** Removes a savegame in the old localstorage format */
declare function removeSaveOld(keyPrefix: string): void;
/** Updates a Partial Settings object to have the full settings */
declare function updatePartialSettings(partialSettings: Partial<OldSettingsData>): OldSettingsData;
/**
 * Checks if the local save with the key exists
 * @param {string} keyPrefix
 * @returns {0|1|2} 0: No save, 1: Old format save, 2: new format save
 */
declare function doesLocalSaveExist(keyPrefix: string): 0 | 1 | 2;
declare function deleteLocalSaveInSlot(slotID?: number): void;
/** Callback function for exporting a save */
declare function exportSave(update?: boolean): void;
/** Sets the specified local save slot to the given saveString */
declare function setSlotToSaveString(slotID: number, saveString: string): void;
/** Attempts to import a save to the specified slot. Returns a promise which if resolved to true means the import was a success. */
declare function importSaveToSlot(saveString: string, slotID: number): Promise<boolean>;
declare function openDeleteMelvorCloudAccount(): void;
declare function confirmDeleteMelvorCloudAccount(): void;
declare function copyToClipboard(input: string): void;
/**
 * Gets a save string for a local save
 * @param customKey
 * @param charID
 * @returns
 */
declare function getLocalSaveString(customKey?: boolean, charID?: number): string;
/**
 *
 * @param {string} keyPrefix
 * @returns {string}
 */
declare function getSaveStringOld(keyPrefix: string): string;
declare let loadedIDMap: NumericIDMap | undefined;
declare function getNumericIDMap(): Promise<NumericIDMap>;
declare function downloadSave(backup?: boolean, slotID?: number): Promise<boolean>;
declare function isOldItemStats(itemStats: OldItemStats[] | ItemStat[]): itemStats is OldItemStats[];
declare function isOldMonsterStats(monsterStats: OldMonsterStat[] | MonsterStat[]): monsterStats is OldMonsterStat[];
interface OldItemStats {
    timesFound: number;
    timesSold: number;
    gpFromSale: number;
    deathCount: number;
    damageTaken: number;
    damageDealt: number;
    missedAttacks: number;
    timesEaten: number;
    healedFor: number;
    totalAttacks: number;
    amountUsedInCombat: number;
    timeWaited: number;
    timesDied: number;
    timesGrown: number;
    harvestAmount: number;
    enemiesKilled: number;
    timesOpened: number;
}
interface ItemStat {
    /**
     * 0: timesFound
     * 1: timesSold
     * 2: gpFromSale
     * 3: deathCount
     * 4: damageTaken
     * 5: damageDealt
     * 6: missedAttacks
     * 7: timesEaten
     * 8: healedFor
     * 9: totalAttacks
     * 10: amountUsedInCombat
     * 11: timeWaited
     * 12: timesDied
     * 13: timesGrown
     * 14: harvestAmount
     * 15: enemiesKilled
     * 16: timesOpened
     */
    stats: number[];
    itemID: number;
}
/** Converts 1st item stats format stats to the 2nd item stats format */
declare function convertItemStats(oldItemStats: OldItemStats[]): ItemStat[];
interface OldMonsterStat {
    damageDealtToPlayer: number;
    damageTakenFromPlayer: number;
    killedByPlayer: number;
    killedPlayer: number;
    hitsToPlayer: number;
    hitsFromPlayer: number;
    enemyMissed: number;
    playerMissed: number;
    seen: number;
    ranAway: number;
}
interface MonsterStat {
    monsterID: number;
    stats: number[];
}
/** Converts 1st monster stats format to the 2nd monster stats format */
declare function convertMonsterStats(oldMonsterStats: OldMonsterStat[]): MonsterStat[];
declare let blockCorruptSaving: boolean;
/**
 * Converts an old format savegame
 * @param {NewSaveGame} savegame
 */
declare function loadOldSaveGame(savegame: NewSaveGame): Promise<void>;
declare function setBackupSaveDetails(save: string): void;
declare let quickEquipInterval: number;
declare let inFocus: boolean;
declare const onloadEvent: (accessCheck?: boolean) => void;
declare function confirmedAuthenticated(): void;
declare function checkIfAuthenticated(): Promise<void>;
declare const INTERFACE_VERSION = 29;
declare function loadGameInterface(accessCheck?: boolean): Promise<void>;
declare const DATA_VERSION = 106;
declare function loadGameData(): Promise<void>;
declare function changePageCharacterSelection(page: CharacterSelectPage): void;
/** Future announcement handler that will occur dynamically. For now this is hard coded. */
declare function updateUIForAnnouncements(): void;
declare function hideUIForAnnouncement(id: number): void;
declare const maxSaveSlots = 6;
declare const enum SaveLoadError {
    Empty = 0,
    Corrupt = 1,
    InvalidVersion = 2
}
declare function updateLocalSaveHeaders(): Promise<void>;
declare function updateCloudSaveHeaders(): Promise<void>;
declare const enum SaveLoadErrorMessage {
    InvalidVersion = "Invalid save version.",
    CorruptSave = "Corrupt Save.",
    InterfaceLoadFailed = "Interface failed to load."
}
/** If the game is currently trying to load a save file */
declare let isLoadingSave: boolean;
/** If the game is currently creating a new save file */
declare let isCreatingSave: boolean;
/** Attempts to load the save in the string */
declare function loadSaveFromString(saveString: string): Promise<void>;
declare function processSaveLoadError(slotID: number, isCloud: boolean, error: unknown): void;
/** Attempts to load the local save in the given save slot */
declare function loadLocalSave(slotID: number): Promise<void>;
/** Attempts to load the cloud save in the given save slot */
declare function loadCloudSave(slotID: number): Promise<void>;
declare function createNewCharacterInSlot(slotID: number, gamemode: Gamemode, characterName: string): Promise<void>;
