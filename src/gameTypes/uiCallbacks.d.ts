declare const equipStatKeys: EquipStatKey[];
/** Views the stats of an item, and the difference in stats if equipped to default slot */
declare function viewItemStats(itemID: number, player?: Player): void;
/** Views the stats of the player's currently equipped items */
declare function viewEquipmentStats(): void;
/** Currently selected combat spellbook */
declare let selectedSpellbook: CombatSpellBook;
declare type CombatSpellBook = Exclude<SpellBookType, 'all' | 'altMagic'>;
/** Changes the spell menu to a spellbook */
declare function selectSpellbook(spellbook: CombatSpellBook): void;
declare function equipFood(): void;
declare const combatMenuCount = 6;
declare function changeCombatMenu(menu: number): void;
declare function togglePlayerContainer(): void;
