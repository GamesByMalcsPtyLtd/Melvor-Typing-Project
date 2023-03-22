/** Class to store all statistics in the game */
declare class Statistics implements SkillObject<StatTracker>, Serializable, EncodableObject {
    game: Game;
    readonly Woodcutting: StatTracker;
    readonly Fishing: StatTracker;
    readonly Firemaking: StatTracker;
    readonly Cooking: StatTracker;
    readonly Mining: StatTracker;
    readonly Smithing: StatTracker;
    readonly Attack: StatTracker;
    readonly Strength: StatTracker;
    readonly Defence: StatTracker;
    readonly Hitpoints: StatTracker;
    readonly Thieving: StatTracker;
    readonly Farming: StatTracker;
    readonly Ranged: StatTracker;
    readonly Fletching: StatTracker;
    readonly Crafting: StatTracker;
    readonly Runecrafting: StatTracker;
    readonly Magic: StatTracker;
    readonly Prayer: StatTracker;
    readonly Slayer: StatTracker;
    readonly Herblore: StatTracker;
    readonly Agility: StatTracker;
    readonly Summoning: StatTracker;
    readonly Astrology: StatTracker;
    readonly Township: StatTracker;
    /** Map of itemID to item stat tracker */
    readonly Items: MappedStatTracker<AnyItem>;
    /** Map of monsterID to monster stat tracker */
    readonly Monsters: MappedStatTracker<Monster>;
    /** General game statistics */
    readonly General: StatTracker;
    readonly Combat: StatTracker;
    readonly GolbinRaid: StatTracker;
    readonly Shop: StatTracker;
    constructor(game: Game);
    /** Convenience method since this comes up a lot */
    itemFindCount(item: AnyItem): number;
    /** Convenience method for monster kills */
    monsterKillCount(monster: Monster): number;
    /** Returns the total of the stat: ItemStats, but only for items that match predicate */
    getFilteredItemStatsTotal(predicate: (item: AnyItem) => boolean, stat: ItemStats): number;
    /** Returns the difference between the total of the statAdd stat and statSub stat for items that match predicate */
    getFilteredItemStatsDiff(predicate: (item: AnyItem) => boolean, statAdd: ItemStats, statSub: ItemStats): number;
    /** Convenience method for offline meteorites located */
    meteoriteSnapshot(): MiningNodeSnapshot;
    /** Convenience method for offline onyx nodes found */
    onyxSnapshot(): MiningNodeSnapshot;
    /** Convenience method for offline oricha nodes found */
    orichaSnapshot(): MiningNodeSnapshot;
    /** Convenience method for offline cerulean nodes found */
    ceruleanSnapshot(): MiningNodeSnapshot;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldFormat(savegame: SaveGame, idMap: NumericIDMap): void;
    renderMutatedStats(): void;
}
declare enum GeneralStats {
    TotalGPEarned = 0,
    TotalItemsSold = 1,
    UsernameChanges = 2,
    AccountCreationDate = 3,
    SignetRingHalvesMissed = 4
}
declare enum PrayerStats {
    BonesBuried = 0,
    PrayerPointsEarned = 1,
    PrayerPointsSpent = 2,
    PrayerPointsPreserved = 3
}
declare enum SlayerStats {
    SlayerCoinsEarned = 0,
    MonstersKilledOnTask = 1
}
declare enum WoodcuttingStats {
    Actions = 0,
    TimeSpent = 1,
    LogsCut = 2,
    BirdNestsGotten = 3
}
declare enum FishingStats {
    FishCaught = 0,
    JunkCaught = 1,
    SpecialItemsCaught = 2,
    TimeSpent = 3,
    Actions = 4
}
declare enum FiremakingStats {
    LogsBurnt = 0,
    GPBurnt = 1,
    TimeSpent = 2,
    BonusBonfireXP = 3,
    TotalActions = 4,
    BonfiresLit = 5,
    ItemsPreserved = 6,
    GPEarned = 7,
    CoalGained = 8
}
declare enum CookingsStats {
    FoodCooked = 0,
    FoodBurnt = 1,
    TimeSpent = 2,
    SuccessfulActions = 3,
    PerfectCooks = 4,
    PassiveCooks = 5,
    ItemsUsed = 6,
    ItemsPreserved = 7
}
declare enum MiningStats {
    Actions = 0,
    EmptyOresMined = 1,
    TimeSpent = 2,
    OresGained = 3,
    GemsGained = 4,
    RockHPPreserved = 5,
    RocksDepleted = 6,
    OnyxGemNodesFound = 7,
    TotalOnyxGemNodeHPFound = 8,
    OrichaGemNodesFound = 9,
    TotalOrichaGemNodeHPFound = 10,
    CeruleanGemNodesFound = 11,
    TotalCeruleanGemNodeHPFound = 12
}
declare enum SmithingStats {
    SmeltingActions = 0,
    SmithingActions = 1,
    TimeSpent = 2,
    BarsUsed = 3,
    BarsPreserved = 4,
    OresUsed = 5,
    OresPreserved = 6,
    TotalItemsSmithed = 7,
    TotalBarsSmelted = 8
}
declare enum ThievingStats {
    SuccessfulPickpockets = 0,
    FailedPickpockets = 1,
    DamageTakenFromNPCs = 2,
    TimeSpentStunned = 3,
    TimeSpent = 4,
    GPStolen = 5,
    CommonDrops = 6,
    RareDrops = 7,
    AreaDrops = 8,
    NpcDrops = 9
}
declare enum FarmingStats {
    AllotmentsHarvested = 0,
    CompostUsed = 1,
    CropsDied = 2,
    TimeSpentWaitingForCrops = 3,
    TimeSpentWaitingForDeadCrops = 4,
    GloopUsed = 5,
    HerbsHarvested = 6,
    TreesHarvested = 7,
    SeedsPlanted = 8,
    HerbsGained = 9,
    LogsGained = 10,
    FoodGained = 11
}
declare enum FletchingStats {
    ArrowShaftsMade = 0,
    ItemsFletched = 1,
    TimeSpent = 2,
    ItemsUsed = 3,
    ItemsPreserved = 4,
    Actions = 5
}
declare enum CraftingStats {
    ItemsCrafted = 0,
    TimeSpent = 1,
    ItemsUsed = 2,
    ItemsPreserved = 3,
    Actions = 4,
    GPUsed = 5,
    GPPreserved = 6
}
declare enum RunecraftingStats {
    ItemsCrafted = 0,
    TimeSpent = 1,
    ItemsUsed = 2,
    ItemsPreserved = 3,
    Actions = 4
}
declare enum HerbloreStats {
    PotionsMade = 0,
    TimeSpent = 1,
    PotionsUsed = 2,
    ChargesUsed = 3,
    ItemsUsed = 4,
    ItemsPreserved = 5,
    Actions = 6
}
declare enum AgilityStats {
    ObstaclesCompleted = 0,
    CoursesCompleted = 1,
    GPEarned = 2,
    TimeSpent = 3,
    SlayerCoinsEarned = 4,
    ItemsEarned = 5
}
declare enum SummoningStats {
    Actions = 0,
    TimeSpent = 1,
    ItemsMade = 2,
    ItemsUsed = 3,
    ItemsPreserved = 4,
    GPUsed = 5,
    GPPreserved = 6,
    SCUsed = 7,
    SCPreserved = 8,
    TabletsUsed = 9
}
declare enum AltMagicStats {
    Actions = 0,
    TimeSpent = 1,
    BarsMade = 2,
    BonesMade = 3,
    GemsMade = 4,
    GPGained = 5,
    ItemsUsed = 6,
    RunesUsed = 7
}
declare enum AstrologyStats {
    TimeSpent = 0,
    StandardRerolls = 1,
    UniqueRerolls = 2,
    MaxRollsHit = 3,
    MinRollsHit = 4,
    Actions = 5,
    MeteoritesLocated = 6,
    TotalMeteoriteHP = 7
}
declare enum TownshipStats {
}
declare enum ShopStats {
    PurchasesMade = 0,
    ItemsPurchased = 1,
    GPSpent = 2,
    SCSpent = 3,
    RCSpent = 4,
    ItemsSpent = 5,
    GloveChargesPurchased = 6
}
declare enum MonsterStats {
    DamageDealtToPlayer = 0,
    DamageTakenFromPlayer = 1,
    KilledByPlayer = 2,
    KilledPlayer = 3,
    HitsToPlayer = 4,
    HitsFromPlayer = 5,
    EnemyMissed = 6,
    PlayerMissed = 7,
    Seen = 8,
    RanAway = 9
}
declare enum CombatStats {
    MonstersKilled = 0,
    DamageDealt = 1,
    DamageTaken = 2,
    AttacksMissed = 3,
    Deaths = 4,
    FoodConsumed = 5,
    HPFromFood = 6,
    TimeSpentSpawning = 7,
    TimeSpentFighting = 8,
    TimeSpentPaused = 9,
    ItemsLooted = 10,
    GPEarned = 11,
    DungeonRewards = 12
}
declare enum RaidStats {
    GolbinsKilled = 0,
    HighestWave = 1,
    RaidCoinsEarned = 2,
    TotalTimeSpent = 3,
    LongestRaid = 4,
    TotalDeath = 5,
    WavesCompleted = 6
}
declare enum ItemStats {
    /** All Items */
    TimesFound = 0,
    /** All Items */
    TimesSold = 1,
    /** All Items */
    GpFromSale = 2,
    /** Any equipment */
    TimesLostToDeath = 3,
    /** Armour */
    DamageTaken = 4,
    /** Weapons, Quiver */
    DamageDealt = 5,
    /** Weapons, Quiver */
    MissedAttacks = 6,
    /** Food */
    TimesEaten = 7,
    /** Food */
    HealedFor = 8,
    /** Weapons, Quiver */
    TotalAttacks = 9,
    /** Quiver, Runes */
    AmountUsedInCombat = 10,
    /** Seeds */
    TimeWaited = 11,
    /** Seeds */
    TimesDied = 12,
    /** Seeds */
    TimesGrown = 13,
    /** Grown items */
    HarvestAmount = 14,
    /** Weapons, Quiver */
    EnemiesKilled = 15,
    /** Only if item.canOpen */
    TimesOpened = 16,
    /** Transformed by alt magic */
    TimesTransformed = 17,
    /** Stat for bones */
    TimesBuried = 18
}
declare enum StatCategories {
    General = 0,
    Combat = 1,
    Woodcutting = 2,
    Fishing = 3,
    Firemaking = 4,
    Cooking = 5,
    Mining = 6,
    Smithing = 7,
    Thieving = 8,
    Farming = 9,
    Fletching = 10,
    Crafting = 11,
    Runecrafting = 12,
    Herblore = 13,
    MeleeCombat = 14,
    RangedCombat = 15,
    MagicCombat = 16,
    Agility = 17,
    Summoning = 18,
    AltMagic = 19,
    Astrology = 20,
    Shop = 21,
    GolbinRaid = 22,
    Slayer = 23,
    Prayer = 24,
    Township = 25
}
declare const statsData: StatsTableData[];
declare type KeysMatching<T, V> = {
    [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];
declare const statisticCategories: OldCategoryData<StatCategories>[];
declare const statTables: StatsTable[];
declare let statCategoryMenu: CategoryMenu<OldCategoryData<StatCategories>>;
declare function initializeStatTables(): void;
declare let selectedStatCategory: StatCategories;
declare function selectStatsCategory(category: OldCategoryData<StatCategories>): void;
/** Updates the stat table for a given stat category.
 *  Only use this when you need to force update a computed statistic.
 *  Stats tracked via stat trackers will autoupdate with their state mutation tracking.
 */
declare function updateStats(category: StatCategories): void;
