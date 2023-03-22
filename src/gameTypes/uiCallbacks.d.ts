declare const equipStatKeys: EquipStatKey[];
/** Callback function for viewing the contents of an Openable item. Modal will not fire if item is not openable. */
declare function viewItemContents(item: OpenableItem): void;
declare const enum DiffType {
    Negative = 0,
    Neutral = 1,
    Positive = 2
}
/**
 * Views the stats of an item, and the difference in stats if equipped to the specified set
 * @param item The item to show the stats of
 * @param compareToSet The equipment set to compare the stats of, if the item was equipped
 */
declare function viewItemStats(item: EquipmentItem, compareToSet?: Equipment | false): void;
/** Views the stats of the player's currently equipped items */
declare function viewEquipmentStats(): void;
/** Callback function for viewing the drops of a monster
 * @param monster The ID of the monster to view the drops of
 * @param respectArea Whether the drops should obey the type of combat area the player is currently in
 */
declare function viewMonsterDrops(monster: Monster, respectArea: boolean): void;
/** Currently selected combat spellbook */
declare let selectedSpellbook: CombatSpellBook;
/** Changes the spell menu to a spellbook */
declare function selectSpellbook(spellbook: CombatSpellBook): void;
/** @deprecated Use Player.equipFood instead. */
declare function equipFood(): void;
declare const combatMenuCount = 6;
declare function changeCombatMenu(menu: number): void;
declare function togglePlayerContainer(): void;
/** Callback function that changes the summoning category */
declare function switchSummoningCategory(category: SkillCategory): void;
/** Callback function that opens the summoning synergy breakdown menu */
declare function openSynergiesBreakdown(): void;
declare let skillsMenu: boolean;
declare let combatMenu: boolean;
/** Callback function for hiding Combat/Non-Combat skills in the sidebar */
declare function toggleMenu(menu: 0 | 1): void;
/** Callback function for hiding/showing the combat skill progress table */
declare function toggleCombatSkillMenu(): void;
/** Callback function for viewing a game guide */
declare function viewGameGuide(): void;
/** @deprecated Callback function for agreeing to a notice? */
declare function agreeToNotice(noticeID: number): void;
declare function openLink(url: string): void;
declare function openDiscordLink(): void;
declare function openWikiLink(): void;
declare function openExpansionSteamLink(): void;
declare function openExpandedEditionSteamLink(): void;
declare function viewMonsterStats(monster: Monster): void;
declare const changePage: (page: Page, subCategory?: number, skill?: AnySkill, showRaidShop?: boolean, toggleSidebar?: boolean) => void;
/** Function for reading an lore entry */
declare function readLore(loreID: number): void;
