declare let agilityPassiveBonuses: AgilityModifiers;
declare let combatManager: CombatManager;
declare let raidManager: RaidManager;
declare let playerModifiers: PlayerModifiers;
declare let player: Player;
declare let getTotalFromModifierArray: (key: keyof SkillModifierObject<any>, skill: number) => number;
declare let updateAllPlayerModifiers: VoidFunction;
declare let updatePlayerStats: VoidFunction;
declare let showCombatArea: (areaType: LocationType) => void;
declare let skillNav: SkillNav;
declare let skillProgressDisplay: SkillProgressDisplay;
/** Cache of elements required to render the enemy */
declare let enemyHTMLElements: EnemyRenderHTMLElements;
/** Cache of elements required to render the player */
declare let playerHTMLElements: PlayerHTMLElements;
declare const combatSkills: (keyof CombatLevels)[];
declare const synergyElements: SynergyElements;
declare var monsterStats: MonsterStat[];
declare var dungeonCompleteCount: number[];
declare const me = "w";
interface SynergyElements {
    icons: HTMLImageElement[];
    tooltips: TippyTooltip[];
}
declare let combatMenus: CombatMenus;
interface CombatMenus {
    progressBars: ProgressBars;
    playerEffectRenderer: EffectRenderer;
    enemyEffectRenderer: EffectRenderer;
    spells: SpellMenus;
    prayer: PrayerMenu;
    runes: RuneMenu;
    equipSets: EquipmentSetMenu[];
    combatFood: FoodMenu;
    thievingFood: FoodMenu;
    enemyAttackPassive: EnemyAttackPassiveMenu;
}
interface SpellMenus {
    standard: StandardSpellMenu;
    curse: CurseSpellMenu;
    aurora: AuroraSpellMenu;
    ancient: AncientSpellMenu;
}
interface ProgressBars {
    playerAttack: ProgressBar;
    playerSummon: ProgressBar;
    enemyAttack: ProgressBar;
}
declare let areaMenus: AreaMenus;
interface AreaMenus {
    combat: CombatAreaMenu<CombatAreaData>;
    slayer: CombatAreaMenu<SlayerAreaData>;
    dungeon: CombatAreaMenu<DungeonData>;
}
/** Constructs combat classes, menus and DOM element caches */
declare function loadCombat(): void;
declare const enum MonsterStats {
    DamageTakenFromPlayer = 1,
    DamageDealtToPlayer = 0,
    KilledByPlayer = 2,
    KilledPlayer = 3,
    HitsToPlayer = 4,
    HitsFromPlayer = 5,
    EnemyMissed = 6,
    PlayerMissed = 7,
    Seen = 8,
    RanAway = 9
}
declare const enum CombatStats {
    MonstersKilled = 0,
    DamageDealt = 1,
    DamageTaken = 2,
    AttacksMissed = 3,
    Deaths = 4,
    FoodConsumed = 5,
    HPFromFood = 6
}
declare const enum RaidStats {
    GolbinsKilled = 0,
    HighestWave = 1,
    RaidCoinsEarned = 2,
    TotalTimeSpent = 3,
    LongestRaid = 4,
    TotalDeath = 5
}
declare enum AttackStyles {
    Stab = 0,
    Slash = 1,
    Block = 2,
    Accurate = 3,
    Rapid = 4,
    Longrange = 5,
    Magic = 6,
    Defensive = 7
}
declare enum EquipmentSlots {
    Helmet = 0,
    Platebody = 1,
    Platelegs = 2,
    Boots = 3,
    Weapon = 4,
    Shield = 5,
    Amulet = 6,
    Ring = 7,
    Gloves = 8,
    Quiver = 9,
    Cape = 10,
    Passive = 11,
    Summon1 = 12,
    Summon2 = 13
}
