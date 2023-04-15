declare const gameVersion = "v1.1.2";
declare const previousGameVersion = "v1.1.1";
declare const characterSelectAnnouncementVersion = 4;
declare const setupSkillLock: (game: Game) => void;
/** Callback function for the "Change Character Name" button in the account menu */
declare function showUsernameChange(): void;
/** Callback function for changing the character name */
declare function changeName(): void;
/** Callback function for the "Delete Character" button on the Settings page */
declare function accountDeletion(confirmation?: boolean): void;
/** Notifies the player if the game has updated, if they last loaded the game on an older version */
declare function gameUpdate(): void;
