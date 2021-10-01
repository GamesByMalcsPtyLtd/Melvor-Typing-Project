declare function CompileErrorReport(error: PlayFabModule.IPlayFabError): string;
/** The string representation of a number, or the number itself */
declare type NumberString = string | number;
declare type SkillID = number;
/** An index of items */
declare type ItemID = number;
declare type PetID = number;
declare type BankID = number;
declare type SpellID = number;
declare type AncientID = number;
declare type CurseID = number;
declare type AuroraID = number;
declare type AltmagicID = number;
declare type MonsterID = number;
declare type CharacterID = number;
declare type EquipSetID = 0 | 1 | 2 | 3;
declare type EquippedFoodID = 0 | 1 | 2 | 3;
declare type EquipSlotID = number;
declare type AttackStyleID = number;
declare type CombatAreaID = number;
declare type SlayerAreaID = number;
/** The type of a combat area. 0 for normal, 1 for slayer, 2 for dungeons */
declare type AreaType = 0 | 1 | 2;
declare type DungeonID = number;
declare type LootID = number;
declare type PrayerID = number;
/** An index of playerSpecialAttacks */
declare type PlayerSpecialID = number;
declare type EnemySpecialID = number;
declare type SlayerTier = number;
declare type SaveString = string;
declare type TimeoutID = number;
declare type BankTabID = number;
declare type ObjectKey = string | number | symbol;
declare type FarmingAreaID = number;
declare type FiremakingID = number;
/** An index of fishingItems or fishing mastery */
declare type FishingID = number;
/** An index of FishingAreas */
declare type FishingAreaID = number;
/** An index of FishingAreas[i].fish */
declare type FishID = number;
/** An index of fletchingItems */
declare type FletchingID = number;
declare type FletchLog = number;
declare type FletchingCategory = 0 | 1 | 2 | 3 | 4 | 5;
/** An index of herbloreItemData */
declare type HerbloreItemID = number;
declare type HerbloreCategory = 0 | 1 | 2;
declare type HerbloreTier = 0 | 1 | 2 | 3;
declare type AmmoType = 0 | 1 | 2 | 3;
declare type PageID = number;
declare type NotificationType = 'success' | 'info' | 'danger';
/** Index of glovesTracker, gloveID,glovesCost,glovesActions */
declare type GloveID = number;
/** Index of thievingNPC */
declare type ThievingID = number;
/** Index of tutorialTips */
declare type TutorialtipID = number;
/** Index of agilityObstacles */
declare type ObstacleID = number;
/** Index of passive pillars */
declare type PillarID = number;
/** Categories of agility obstacles */
declare type ObstacleCategories = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/** Current gamemode, 0 is normal, 1 is hardcore, 2 is adventure, 3 is CHAOS */
declare type GameMode = number;
/** Index of rockData,oreTypes */
declare type MiningID = number;
interface ReqCheck {
    reqID: number;
    bankID: number;
    check: number;
}
interface QtyReqCheck extends ReqCheck {
    qty: number;
    itemID: ItemID;
}
/** Generic Interface for storing itemID quantity pairs */
interface ItemQuantity {
    id: ItemID;
    qty: number;
}
interface BankItem {
    id: ItemID;
    qty: number;
    tab: BankTabID;
    sellsFor: number;
    stackValue: number;
    locked: boolean;
}
interface BankDefaultItem {
    itemID: ItemID;
    tab: BankTabID;
}
interface BankSearch {
    id: ItemID;
    qty: number;
    name: string;
    category: string;
    description: string;
    type: string;
    tab: BankTabID;
}
interface PlayerCombatData {
    /** Current HP of player */
    hitpoints: number;
    /** Player is stunned and can't attack */
    stunned: boolean;
    /** Number of playerTimers left till stun wears off*/
    stunTurns: number;
    /** Base attack speed of player [ms] before attackSpeedDebuff/attackSpeedBuff */
    baseAttackSpeed: number;
    /** % decrease to baseAttackSpeed (multiplicative with other speed bonuses) */
    attackSpeedDebuff: number;
    /** Number of playerTimers left until slow wears off */
    attackSpeedDebuffTurns: number;
    /** @deprecated Unused Property */
    increasedDamageReduction: number;
    /** Player is sleeping and can't attack */
    sleep?: boolean;
    /** Number of playerTimers left till sleep wears off */
    sleepTurns?: number;
    /** Player has burn debuff active */
    isBurning?: boolean;
    /** Total % of player maxHitpoints that burn debuff takes */
    burnDebuff?: number;
    /** Player is under the effects of an enemy special stat debuff */
    activeDebuffs?: boolean;
    /** Number of enemyTimers left till attack debuff wears off */
    debuffTurns?: number;
    /** % decrease to player melee evasion from enemy spec (multiplicative with other decreases) */
    meleeEvasionDebuff?: number;
    /** % decrease to player ranged evasion from enemy spec (multiplicative with other decreases) */
    rangedEvasionDebuff?: number;
    /** % decrease to player magic evasion from enemy spec (multiplicative with other decreases) */
    magicEvasionDebuff?: number;
    /** % decrease to maximumAttackRoll from enemy spec (additive with other decreases) */
    decreasedAccuracy?: number;
    /** Number of affliction debuffs stacked on player */
    afflictedStacks?: number;
    /** Player has special attack */
    hasSpecialAttack?: boolean;
    /** Array of special attack IDs the player has */
    specialAttackID?: PlayerSpecialID[];
    /** Increased minimum hit from Charged Aurora */
    increasedMinHit?: number;
    /** Player has Mark of Death debuff active removePlayerMarkOfDeath, applyMarkOfDeathToPlayer are relevant*/
    markOfDeath?: boolean;
    /** Number of Mark of Death debuff stacks player has. */
    markOfDeathStacks?: number;
    /** @deprecated This seems to not actually do anything */
    markOfDeathTurns?: number;
    /** % Healing from damage from Fervor Aurora (additive with other increases) */
    lifesteal?: number;
    /** decrease to playerAttackSpeed in [ms] from Surge Aurora (applies after all other bonuses) */
    attackSpeedBuff?: number;
    /** % increase to maximumRangedDefenceRoll from Surge Aurora (multiplicative with other increases) */
    rangedEvasionBuff?: number;
    /** Flat increase to baseMaxHit from Fury Aurora (applies before bonuses from modifiers) */
    increasedMaxHit?: number;
    /** % increase to Magic Evasion from Fury Aurora (multiplicative with other increases) */
    magicEvasionBuff?: number;
    /** % increase to Melee Evasion from Fervor Aurora (multiplicative with other increases) */
    meleeEvasionBuff?: number;
    /** @deprecated Unused property, use playerModifiers instead */
    slayerAreaEffectNegationPercent?: number;
    /** @deprecated Unused property, use playerModifiers instead */
    slayerAreaEffectNegationFlat?: number;
    /**
     * Combat levels used to compute player stats
     * 0: Attack
     * 1: Strength
     * 2: Defence
     * 3: Hitpoints
     * 4: Ranged
     * 5: Magic
     * 6: Prayer
     */
    combatLevels?: number[];
    /** Stats from players Equipment */
    baseStats?: PlayerBaseStats;
    /**
     * Bonuses from combat potions
     * 0: Melee Accuracy
     * 1: Melee Evasion
     * 2: Melee Max Hit
     * 3: Ranged Evasion, Ranged Accuracy
     * 4: Ranged Max Hit
     * 5: Magic Evasion, Magic Accuracy
     * 6: Magic Max Hit
     * 7: Regeneration (but this value isn't used)
     * 8: Damage Reduction
     */
    herbloreBonus?: number[];
    /** Free skill levels used to compute maximumAttackRoll from combat style */
    attackStyleBonusAccuracy?: number;
    /** Free skill levels used to compute baseMaxHit from combat style */
    attackStyleBonusStrength?: number;
    maximumDefenceRoll?: number;
    maximumRangedDefenceRoll?: number;
    maximumMagicDefenceRoll?: number;
}
declare type PlayerBaseStats = {
    /** Melee Attack Bonus [stab,slash,defend] */
    attackBonus: [number, number, number];
    /** Melee Defence Bonus */
    defenceBonus: number;
    /** Melee Strength Bonus */
    strengthBonus: number;
    /** % Damage Reduction */
    damageReduction: number;
    /** Ranged Attack Bonus */
    attackBonusRanged: number;
    /** Ranged Defence Bonus */
    defenceBonusRanged: number;
    /** Ranged Strength Bonus */
    strengthBonusRanged: number;
    /** Magic Attack Bonus */
    attackBonusMagic: number;
    /** Magic Defence Bonus */
    defenceBonusMagic: number;
    /** % Bonus to Magic Max Hit */
    damageBonusMagic: number;
};
interface OldEquipmentSet {
    equipment: number[];
    ammo: number;
    summonAmmo: [number, number];
}
interface ItemQuantity2 {
    itemID: ItemID;
    qty: number;
}
interface MonsterStat {
    monsterID: MonsterID;
    stats: number[];
}
interface CookingItem {
    itemID: ItemID;
    cookingID: number;
    cookingLevel: number;
    cookingCategory: CookingCategory;
}
interface LogsForFire {
    itemID: ItemID;
    firemakingID: number;
}
interface CraftingItem {
    itemID: ItemID;
    level: number;
    craftingID: number;
    category: number;
}
interface Seed {
    itemID: ItemID;
    level: number;
}
interface FarmingPatch {
    type: string;
    seedID: ItemID;
    compost: number;
    timePlanted: number;
    setInterval: number;
    timeout: null | TimeoutID;
    hasGrown: boolean;
    unlocked: boolean;
    gloop: boolean;
    level: number;
    cost: number;
}
interface FarmingArea {
    id: number;
    areaName: string;
    patches: FarmingPatch[];
}
interface FishingItem {
    itemID: ItemID;
    fishingLevel: number;
    fishingID: FishingID;
}
declare type Loot = [ItemID, number];
declare type LootTable = Loot[];
interface FletchingItem {
    itemID: ItemID;
    level: number;
    fletchingID: FletchingID;
    fletchingCategory: FletchingCategory;
}
interface RaidHistory {
    skillLevels: number[];
    equipment: number[];
    ammo: number;
    inventory: ItemQuantity[];
    food: ItemQuantity2;
    wave: number;
    kills: number;
    timestamp: number;
    raidCoinsEarned: number;
}
interface HerbloreItem {
    id: HerbloreItemID;
    name: string;
    itemID: ItemID[];
    category: HerbloreCategory;
    level: number;
    herbloreXP: number;
    consumesOn?: PotionConsumption;
}
interface HerbloreBonus {
    itemID: ItemID;
    bonus: [null | PotionBonusID, null | number];
    charges: number;
}
declare type HerbloreBonuses = NumberDictionary<HerbloreBonus>;
declare type PotionBonusID = number;
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
    itemID: ItemID;
}
declare type SumFunction = (arr: number[]) => number;
declare type OldMasteryArray = {
    mastery: number;
    masteryXP: number;
}[];
declare type MasteryCheckPoint = number;
declare type Mastery = NumberDictionary<MasteryData>;
interface MasteryData {
    pool: number;
    xp: number[];
}
interface Pet {
    name: string;
    description: string;
    media: string;
    acquiredBy: string;
    skill: SkillID;
    chance?: number;
    killCount?: number;
    ignoreCompletion?: boolean;
    modifiers?: ModifierData;
    obtained?: {
        dungeonCompletion: [DungeonID, number][];
    };
    activeInRaid: boolean;
}
interface RockData {
    maxHP: number;
    damage: number;
    depleted: boolean;
    respawnTimer: null | TimeoutID;
}
/** Mastery ID for runecrafting */
declare type RunecraftingID = number;
declare type RunecraftingCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6;
interface RunecraftingItem {
    itemID: ItemID;
    level: number;
    runecraftingID: RunecraftingID;
    runecraftingCategory: RunecraftingCategory;
    idx: number;
}
interface SaveGame {
    firstTime: typeof firstTime;
    username: typeof username;
    nameChanges: typeof nameChanges;
    gp: typeof gp;
    currentBankUpgrade: number;
    skillXP: typeof skillXP;
    /** Redundant, can be reproduced on load */
    skillLevel: typeof skillLevel;
    /** Redundant, can be reproduced on load */
    nextLevelProgress: typeof nextLevelProgress;
    treeMasteryData: OldMasteryArray;
    currentAxe: number;
    treeCutLimit: number;
    /** Contains redundant data, can be reduced in size */
    bank: typeof bank;
    bankMax: typeof bankMax;
    ignoreBankFull: typeof ignoreBankFull;
    /** Contains redundant data, can be reduced in size */
    statsGeneral: typeof statsGeneral;
    /** Contains redundant data, can be reduced in size */
    statsWoodcutting: typeof statsWoodcutting;
    logsMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    statsFiremaking: typeof statsFiremaking;
    fishMastery: OldMasteryArray;
    currentRod: number;
    /** Contains redundant data, can be reduced in size */
    statsFishing: typeof statsFishing;
    cookingMastery: OldMasteryArray;
    upgradedToRange: boolean;
    /** Contains redundant data, can be reduced in size */
    statsCooking: typeof statsCooking;
    defaultPageOnLoad: typeof defaultPageOnLoad;
    miningOreMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    statsMining: typeof statsMining;
    currentPickaxe: number;
    /** Contains redundant data, can be reduced in size */
    statsSmithing: typeof statsSmithing;
    levelUpScreen: typeof levelUpScreen;
    gameUpdateNotification: typeof gameUpdateNotification;
    /** Redundant, can be reproduced on load */
    equippedItems: number[];
    attackStyle: number;
    /** Contains redundant data, can be reduced in size */
    combatData: MinCombatData;
    currentCombatFood: EquippedFoodID;
    /** Can be reduced in size by changing to array */
    equippedFood: {
        itemID: number;
        qty: number;
    }[];
    smithingMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    statsCombat: typeof statsCombat;
    continueThievingOnStun: boolean;
    thievingMastery: OldMasteryArray;
    farmingMastery: OldMasteryArray;
    showItemNotify: typeof showItemNotify;
    /** Contains redundant data, can be reduced in size */
    glovesTracker: typeof glovesTracker;
    currentCookingFire: number;
    /** Contains redundant data, can be reduced in size */
    rockData: typeof rockData;
    fletchingMastery: OldMasteryArray;
    craftingMastery: OldMasteryArray;
    /** Redundant, can be reproduced on load*/
    ammo: number;
    myBankVersion: typeof myBankVersion;
    /** Contains redundant data, can be reduced in size */
    statsThieving: typeof statsThieving;
    /** Contains redundant data, can be reduced in size */
    statsFarming: typeof statsFarming;
    /** Contains redundant data, can be reduced in size */
    statsFletching: typeof statsFletching;
    /** Contains redundant data, can be reduced in size */
    statsCrafting: typeof statsCrafting;
    autoRestartDungeon: typeof autoRestartDungeon;
    autoSaveCloud: typeof autoSaveCloud;
    selectedSpell: number;
    runecraftingMastery: OldMasteryArray;
    darkMode: typeof darkMode;
    buyQty: typeof buyQty;
    itemLog: typeof itemLog;
    dungeonCompleteCount: typeof dungeonCompleteCount;
    sellQty: typeof sellQty;
    /** Contains redundant data, can be reduced in size */
    statsRunecrafting: typeof statsRunecrafting;
    showGPNotify: typeof showGPNotify;
    enableAccessibility: typeof enableAccessibility;
    /** Old save variable that can be deleted */
    showSkillNav: boolean;
    accountGameVersion: typeof accountGameVersion;
    prayerPoints: number;
    slayerCoins: number;
    /** Can be serialized to reduce size */
    slayerTask: OldSlayerTask[];
    showEnemySkillLevels: typeof showEnemySkillLevels;
    monsterStats: typeof monsterStats;
    itemStats: typeof itemStats;
    confirmationOnClose: typeof confirmationOnClose;
    herbloreMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    newFarmingAreas: typeof newFarmingAreas;
    equipmentSets: OldMasteryArray;
    selectedEquipmentSet: EquipSetID;
    currentAutoEat: number;
    equipmentSetsPurchased: boolean[];
    /** Contains redundant data, can be reduced in size */
    herbloreBonuses: typeof herbloreBonuses;
    autoPotion: boolean;
    autoUseSpecialAttack: typeof autoUseSpecialAttack;
    showHPNotify: typeof showHPNotify;
    /** Contains redundant data, can be reduced in size */
    statsHerblore: typeof statsHerblore;
    offline: typeof offline;
    selectedAttackStyle: number[];
    showCommas: typeof showCommas;
    showVirtualLevels: typeof showVirtualLevels;
    formatNumberSetting: typeof formatNumberSetting;
    /** Can be converted to array to reduce size */
    tutorialTips: typeof tutorialTips;
    saveTimestamp: typeof saveTimestamp;
    secretAreaUnlocked: typeof secretAreaUnlocked;
    equipmentSwapPurchased: boolean;
    godUpgrade: boolean[];
    lockedItems: typeof lockedItems;
    showSaleNotifications: typeof showSaleNotifications;
    showShopNotifications: typeof showShopNotifications;
    pauseOfflineActions: typeof pauseOfflineActions;
    showCombatMinibar: typeof showCombatMinibar;
    showCombatMinibarCombat: typeof showCombatMinibarCombat;
    activeAurora: number | null;
    currentGamemode: typeof currentGamemode;
    petUnlocked: typeof petUnlocked;
    showSkillMinibar: typeof showSkillMinibar;
    saveStateBeforeRaid: [] | [number, EquipSetID, EquippedFoodID];
    golbinRaidHistory: typeof golbinRaidHistory;
    golbinRaidStats: typeof golbinRaidStats;
    raidCoins: typeof raidCoins;
    disableAds: typeof disableAds;
    /** Can be serialized to reduce size */
    SETTINGS: typeof SETTINGS;
    /** Can be serialized to reduce size */
    MASTERY: typeof MASTERY;
    useCombinationRunes: typeof useCombinationRunes;
    firstTimeLoad: typeof firstTimeLoad;
    slayerTaskCompletion: number[];
    autoSlayerUnlocked: boolean;
    autoSlayer: typeof autoSlayer;
    /** Redundant, can be reproduced on load */
    itemsAlreadyFound: typeof itemsAlreadyFound;
    xmasPresents: number;
    /** Can be massively reduced in size */
    shopItemsPurchased: typeof shopItemsPurchased;
    titleNewsID: typeof titleNewsID;
    chosenAgilityObstacles: typeof chosenAgilityObstacles;
    skillsUnlocked: typeof skillsUnlocked;
    agilityObstacleBuildCount: typeof agilityObstacleBuildCount;
    agilityPassivePillarActive: typeof agilityPassivePillarActive;
    scheduledPushNotifications: typeof scheduledPushNotifications;
    randomModifiers: {
        equipment: NumberDictionary<Partial<ModifierObject<SkillModifierData[], number>>>;
        player: NumberDictionary<Partial<ModifierObject<SkillModifierData[], number>>>;
    };
    summoningData: typeof summoningData;
}
declare type SaveKey = keyof SaveGame;
interface SmithingItem {
    itemID: ItemID;
    level: number;
    smithingID: number;
    name: string;
    category: SmithingCategory;
    idx: number;
}
/** Index of smithingItems */
declare type SmithingID = number;
declare type SmithingCategory = number;
interface GameStat {
    stat: string;
    id: string;
    count: number;
}
/** Index of trees */
declare type WoodcuttingID = number;
interface BankSearchOpts {
    shouldSort: true;
    tokenize: true;
    matchAllTokens: true;
    findAllMatches: true;
    threshold: 0.1;
    location: 0;
    distance: 100;
    maxPatternLength: 32;
    minMatchCharLength: 1;
    keys: ['name', 'category', 'id', 'type', 'description'];
}
/** Generic base for all item like arrays */
interface GenericItem extends BaseItem {
    /** Item has an animated image */
    hasAnimation?: boolean;
    /** Link to animate image source */
    mediaAnimation?: string;
    /** Item can be upgraded */
    canUpgrade?: boolean;
    /** Item to upgrade to */
    trimmedItemID?: number;
    /** Items required to upgrade */
    itemsRequired?: number[][];
    /** GP cost to upgrades */
    trimmedGPCost?: number;
    /** Multiple of the item can be upgraded at once */
    canMultiUpgrade?: boolean;
    /** Item can be opened (e.g. is a chest) */
    canOpen?: boolean;
    /** ItemIDs and weights of drops */
    dropTable?: LootTable;
    /** Quantities of drops */
    dropQty?: number[];
    /** Used to create SHOP variable, but otherwise do not use */
    buysFor?: number;
    /** Unused flag for bones, game uses prayerPoints prop instead */
    isBones?: boolean;
    /** Designates item as bone. Value is base pp given on burying */
    prayerPoints?: number;
    /** Designates item as food */
    canEat?: boolean;
    /** value*numberMultiplier is base hp of food. */
    healsFor?: number;
    /** Item can be read from bank */
    canRead?: boolean;
    /** When read, sets title of Swal */
    readTitle?: string;
    /** When read, sets html of Swal */
    readText?: string;
    /** @deprecated ID for birthday event cluescrolls. No longer in use. */
    clueID?: 0 | 1 | 2 | 3;
    /** Item can be claimed as token in bank */
    isToken?: boolean;
    /** Flags token as mastery token, and is the Skill to give masteryxp to */
    skill?: SkillID;
    /** Flags token as bank token */
    isBankToken?: boolean;
    /** [SkillID,MasteryID] of producing the item*/
    masteryID?: [SkillID, number];
    /** MasteryID for item for Firemaking */
    firemakingID?: number;
    /** Identifies item as able to be cooked. Also MasteryID for cooking */
    cookingID?: number;
    /** Cooking level required to cook item */
    cookingLevel?: number;
    /** Cooking xp for cooking item */
    cookingXP?: number;
    /** ItemID to give when item cooked */
    cookedItemID?: ItemID;
    /** ItemID to give when item burned */
    burntItemID?: ItemID;
    /** Identifies item as fish, should also be identical to MasteryID for it */
    fishingID?: number;
    /** Fishing level required to catch item */
    fishingLevel?: number;
    /** Fishing XP for catching item */
    fishingXP?: number;
    /** Min interval [ms] to catch item */
    minFishingInterval?: number;
    /** Max interval [ms] to catch item */
    maxFishingInterval?: number;
    /** If present fish gives strength xp when caught */
    strengthXP?: number;
    /** Identifies item as specialItems and indicates weight in loot-table */
    fishingCatchWeight?: number;
    /** Experience earned for Mining item */
    miningXP?: number;
    /** Smithing level required to make item */
    smithingLevel?: number;
    /** Smithing xp for making item */
    smithingXP?: number;
    /** Items required to smith item */
    smithReq?: ItemQuantity[];
    /** For seeds, identifies crop type. For smithing identifies metal. */
    tier?: string;
    /** If present, sets smithed quantity to value, else it is 1 */
    smithingQty?: number;
    /** Farming level required to grow seed */
    farmingLevel?: number;
    /** Farming XP given when planting, and xp per harvest qty when harvesting */
    farmingXP?: number;
    /** Quantity of seeds required to plant */
    seedsRequired?: number;
    /** Time to grow seed in [s] */
    timeToGrow?: number;
    /** ItemID given when harvesting seed */
    grownItemID?: ItemID;
    /** Items required to fletch item */
    fletchReq?: ItemQuantity[];
    /** Base quantity given when fletched */
    fletchQty?: number;
    /** Fletching level required to fletch */
    fletchingLevel?: number;
    /** Base Fletching xp given when fletched */
    fletchingXP?: number;
    /** Tab of fletching page:
     * 0: Arrows
     * 1: Shortbows
     * 2: Longbows
     * 3: Gem-Tipped Bolts
     * 4: Crossbows
     * 5: Javelins
     */
    fletchingCategory?: FletchingCategory;
    /** Items required to craft */
    craftReq?: ItemQuantity[];
    /** Base quantity made when crafting */
    craftQty?: number;
    /** Category of crafting item */
    craftingCategory?: number;
    /** Crafting level required to make */
    craftingLevel?: number;
    /** Base Crafting XP per craft  */
    craftingXP?: number;
    /** Runecrafting level required to make */
    runecraftingLevel?: number;
    /** Base Runecrafting xp per runecraft */
    runecraftingXP?: number;
    /** Items required to runecraft */
    runecraftReq?: ItemQuantity[];
    /** Base quantity made when runecrafting */
    runecraftQty?: number;
    /** Runecrafting MasteryID of item */
    runecraftingID?: number;
    /** Tab of Runecrafting page:
     * 0: Standard Runes
     * 1: Combination Runes
     * 2: Staves & Wands
     * 3: Air Magic Gear
     * 4: Water Magic Gear
     * 5: Earth Magic Gear
     * 6: Fire Magic Gear
     */
    runecraftingCategory?: RunecraftingCategory;
    /** Item has stats that are viewable from Runecrafting page */
    hasStats?: boolean;
    /** Items required to brew potion */
    herbloreReq?: ItemQuantity[];
    /** Flags item as potion */
    isPotion?: boolean;
    /** Skill that potion applies to, used for herblore display */
    potionSkill?: SkillID;
    /** Value of potion's effect */
    potionBonus?: number;
    /** ID used to distinguish the effects of combat potions */
    potionBonusID?: PotionBonusID;
    /** Base charges of potion */
    potionCharges?: number;
    /** Page potion can be used on */
    potionPage?: PageID;
    /** Tier of potion */
    potionTier?: HerbloreTier;
    /** Unused flag for ranged weapons */
    isRanged?: boolean;
    /** Flags item as skill glove, and identifies index in data arrays */
    gloveID?: GloveID;
    /** Ammunition type:
     * 0: Arrows
     * 1: Bolts
     * 2: Javelins
     * 3: Throwing Knives
     */
    ammoType?: AmmoType;
    /** Ammunition type required to use ranged weapon:
     * 0: Arrows
     * 1: Bolts
     * 2: Javelins
     * 3: Throwing Knives
     */
    ammoTypeRequired?: AmmoType;
    /** Item has special attack */
    hasSpecialAttack?: boolean;
    /** Index of playerSpecialAttacks that weapon has */
    specialAttacks?: Attack[];
    /** Item provides free runes for spells */
    providesRune?: ItemID[];
    /** Quantity of runes set by providesRune */
    providesRuneQty?: number;
    /** Drop rate of Mysterious Stone */
    dropRate?: number;
    /** Melee strength bonus multiplier of Big Ol Ron */
    bossStrengthMultiplier?: number;
    /** Ranged strength bonus multiplier of Slayer Crossbow */
    slayerStrengthMultiplier?: number;
    /** Base drop rate of Crown of Rhaelyx components */
    baseDropRate?: number;
    /** Max drop rate of Crown of Rhaelyx components */
    maxDropRate?: number;
    /** increasedFarmingYield for Weird Gloop */
    harvestBonus?: number;
    /** Modifiers provided when item is equipped. Also contains modifiers for potions that are WIP */
    modifiers?: ModifierData;
    /** Modifiers applied to the enemy when item is equipped */
    enemyModifiers?: CombatModifierData;
    smithingBar?: ItemID;
    equipRequirements?: Requirement[];
    equipmentStats?: EquipStatPair[];
    summoningDescription?: string;
    summoningID?: number;
    summoningReq?: ItemQuantity[][];
    summoningTier?: number;
    summoningQty?: number;
    summoningLevel?: number;
    summoningXP?: number;
    summoningSkills?: SkillID[];
    validSlots?: SlotTypes[];
    occupiesSlots?: SlotTypes[];
    /** Determines the attacktype the player uses when equipped in weapon slot */
    attackType?: AttackType;
    consumesOn?: QuiverConsumption;
    fightEffects?: FightEffects[];
    perfectItem?: ItemID;
    cookingInterval?: number;
    recipeRequirements?: ItemQuantity[][];
    cookingQty?: number;
    cookingCategory?: CookingCategory;
    ignoreLangGeneration?: true;
}
interface FindEnemyAreaFcn {
    (enemy: MonsterID, name?: true): string;
    (enemy: MonsterID, name: false): [number, number];
}
/** Item with universal Properties */
interface BaseItem {
    /** Categorization tag */
    category: string;
    /** Second Categorization tag */
    type: string;
    /** Display name of item. May contain html portions that must be replaced/filtered*/
    name: string;
    /** Base sale price of item */
    sellsFor: number;
    /** Local path to item image */
    media: string;
    /** ID of item */
    id: ItemID;
    /** Optional description of item */
    description?: string;
    /** Optional flag that indicates item should not count for Item Completion % */
    ignoreCompletion?: boolean;
    isEquipment: boolean;
}
declare type Shop = typeof SHOP;
interface Array<T> {
    sum: (prop: keyof T) => number;
}
declare type AgilityPillar = {
    name: string;
    description: string;
    cost: ObstacleCost;
    modifiers: ModifierData;
};
interface AgilityObstacle extends AgilityPillar {
    media: string;
    category: ObstacleCategories;
    interval: number;
    requirements: UnlockRequirement;
    completionBonuses: {
        stamina: number;
        xp: number;
        gp: number;
        slayerCoins: number;
        items: number[][];
    };
}
declare type ObstacleCost = {
    gp: number;
    slayerCoins: number;
    items: number[][];
};
declare type BankCache = NumberDictionary<number>;
declare type MasteryCache = NumberDictionary<NumberDictionary<number>>;
declare type MasteryLevelCache = NumberDictionary<{
    levels: number[];
}>;
interface PlayFabEventBody {
    [key: string]: any;
}
interface StringDictionary<T> {
    [index: string]: T;
}
interface NumberDictionary<T> {
    [index: number]: T;
}
declare type ShopCategory = 'General' | 'SkillUpgrades' | 'Slayer' | 'Gloves' | 'Skillcapes' | 'Materials' | 'GolbinRaid';
declare type ShopCostTypes = 'gp' | 'slayerCoins' | 'items' | 'raidCoins';
declare type ShopCategoryData = {
    name: string;
    description: string;
    media: string;
    contains: {
        modifiers?: ModifierData;
        items?: [ItemID, number][];
        pet?: PetID;
    };
    cost: {
        gp: number;
        slayerCoins: number;
        items: [ItemID, number][];
        raidCoins?: number;
    };
    hasQty?: boolean;
    charges?: number;
    unlockRequirements: UnlockRequirement;
    buyLimit: [number, number, number, number];
    showBuyLimit?: boolean;
};
declare type UnlockRequirement = {
    customDescription?: string;
    shopItemPurchased?: [ShopCategory, number][];
    skillLevel?: [SkillID, number][];
    slayerTaskCompletion?: [SlayerTier, number][];
    dungeonCompletion?: [DungeonID, number][];
    completionPercentage?: number;
};
declare type SkillData = {
    /** Display name of skill */
    name: string;
    /** Image URL of skill icon */
    media: string;
    /** Skill has mastery levels */
    hasMastery: boolean;
    /** Unused: Maximum level of skill */
    maxLevel: number;
    masteryTokenID?: ItemID;
    miniBarItems: ItemID[];
    intName: string;
};
declare type PageData = {
    name: string;
    media: string;
    isVisible: boolean;
    strID: string;
};
declare type MasteryMedia = {
    /** Image URL of mastery item */
    media: string;
};
declare type MasteryUnlock = {
    /** Mastery level for unlock */
    level: number;
    /** Description of unlock */
    unlock: string;
};
declare type MasteryPoolBonus = {
    /** Description of pool bonus */
    bonuses: string[];
};
interface SkillObject<T> {
    Woodcutting: T;
    Fishing: T;
    Firemaking: T;
    Cooking: T;
    Mining: T;
    Smithing: T;
    Attack: T;
    Strength: T;
    Defence: T;
    Hitpoints: T;
    Thieving: T;
    Farming: T;
    Ranged: T;
    Fletching: T;
    Crafting: T;
    Runecrafting: T;
    Magic: T;
    Prayer: T;
    Slayer: T;
    Herblore: T;
    Agility: T;
    Summoning: T;
}
declare type SkillName = keyof SkillObject<any>;
declare type Milestone = {
    /** Unlock level of milestone */
    level: number;
    /** Display name of milestone */
    name: string;
    /** URL of milestone image */
    media: string;
    /** @deprecated Unused property */
    alwaysShow?: boolean;
};
declare type GamemodeData = {
    name: string;
    media: string;
    description: string;
    rules: string[];
    textClass: string;
    btnClass: string;
    isPermaDeath: boolean;
    isEvent: boolean;
    endDate: number;
    combatTriangle: number;
    numberMultiplier: number;
    hasRegen: boolean;
};
declare type RandomModifier = {
    modifier: ModifierKeys;
    value: number | number[][];
};
declare type SummoningData = {
    Settings: SummoningSettings;
    Marks: SummoningMarks;
    Synergies: SummoningSynergies;
};
declare type SummoningSettings = {
    recipeGPCost: number;
};
declare type SummoningMarks = {
    Levels: number[];
};
declare type SummoningSynergies = NumberDictionary<NumberDictionary<SynergyData>>;
declare type SynergyData = {
    description: string;
    modifiers: ModifierData;
    enemyModifiers?: CombatModifierData;
    /** Presumably this is a typo */
    summoningSynergy_9_19?: number;
};
declare type PlayerSummoningData = {
    MarksDiscovered: NumberDictionary<number>;
    defaultRecipe?: number[];
};
declare type SummoningItem = {
    itemID: ItemID;
    level: number;
    summoningID: number;
};
declare type SummoningSearch = {
    description: string;
    name1: string;
    name2: string;
    name1long: string;
    name2long: string;
    summon1: number;
    summon2: number;
};
declare type CombatLevels = {
    Hitpoints: number;
    Attack: number;
    Strength: number;
    Defence: number;
    Ranged: number;
    Magic: number;
    Prayer: number;
};
declare type MapToElement<Type> = {
    [Property in keyof Type]: HTMLElement;
};
declare type SlotTypes = 'Helmet' | 'Platebody' | 'Platelegs' | 'Boots' | 'Weapon' | 'Shield' | 'Amulet' | 'Ring' | 'Gloves' | 'Quiver' | 'Cape' | 'Passive' | 'Summon1' | 'Summon2';
declare type EquipStatKey = 'attackSpeed' | 'stabAttackBonus' | 'slashAttackBonus' | 'blockAttackBonus' | 'rangedAttackBonus' | 'magicAttackBonus' | 'meleeStrengthBonus' | 'rangedStrengthBonus' | 'magicDamageBonus' | 'meleeDefenceBonus' | 'rangedDefenceBonus' | 'magicDefenceBonus' | 'damageReduction' | 'summoningMaxhit';
declare type EquipStatPair = {
    key: EquipStatKey;
    value: number;
};
declare type TippyTooltip = import("tippy.js").Instance<import("tippy.js").Props>;
declare type TooltipInstances = {
    bank: TippyTooltip[];
    spellbook: TippyTooltip[];
    minibar: TippyTooltip[];
    combatInfo: TippyTooltip[];
    specialAttack: TippyTooltip[];
    equipmentSets: TippyTooltip[];
    masteryModal: TippyTooltip[];
    combatXP: TippyTooltip[];
    autoEat: TippyTooltip[];
    selectItemForMagic: TippyTooltip[];
    fletching?: TippyTooltip[];
    herblore?: TippyTooltip[];
    smithing?: TippyTooltip[];
    enemyAttackType?: TippyTooltip[];
    loot?: TippyTooltip[];
    crafting?: TippyTooltip[];
    prayerMenu?: TippyTooltip[];
    craftingRecipe?: TippyTooltip[];
    herbloreRecipe?: TippyTooltip[];
    selectMagic?: TippyTooltip[];
    runecrafting?: TippyTooltip[];
    runecraftingRecipe?: TippyTooltip[];
    fletchingRecipe?: TippyTooltip[];
    smithingRecipe?: TippyTooltip[];
    itemLog?: TippyTooltip[];
    monsterLog?: TippyTooltip[];
    petLog?: TippyTooltip[];
    agilityItemCosts?: TippyTooltip[];
    summoningSynergy?: TippyTooltip[];
    summoningRecipe?: TippyTooltip[];
    summoning?: TippyTooltip[];
};
declare type ShopPurchase = {
    category: ShopCategory;
    id: number;
    quantity: number;
};
declare type SweetAlertOptions = import("sweetalert2").SweetAlertOptions<*>;
declare type CookingCategory = number;
declare type SkillProcessed = {
    skill: SkillID;
    itemID: ItemID;
    interval: number;
    mainItemsGained: ItemQuantity2[];
    otherItemsGained: ItemQuantity2[];
    itemsUsed: ItemQuantity2[];
    xp: number;
};
declare type BankSettings = {
    bankBorder: number;
    currentEquipDefault: boolean;
    defaultBankSort: number;
    defaultItemTab: BankDefaultItem[];
};
declare type MasterySettings = {
    hideMaxLevel: boolean;
    confirmationCheckpoint: boolean;
};
declare type GeneralSettings = {
    pushNotificationOffline: boolean;
    pushNotificationFarming: boolean;
    enabledOfflineCombat: boolean;
    enableNeutralSpecModifiers: boolean;
    autoReusePotion: number[];
    miniSidebar: boolean;
    autoEquipFood: boolean;
    autoSwapFood: boolean;
    continueThievingOnStun: boolean;
    showPotionTier: boolean[];
    allowPerfectCook: boolean;
};
declare type NotificationSettings = {
    combatStunned: boolean;
    combatSleep: boolean;
    summoningMark: boolean;
};
declare type PerformanceSettings = {
    disableDamageSplashes: boolean;
    disableProgressBars: boolean;
};
declare type AccessibilitySettings = {
  colourBlindMode: number;
};
declare type Settings = {
    bank: BankSettings;
    mastery: MasterySettings;
    general: GeneralSettings;
    notifications: NotificationSettings;
    performance: PerformanceSettings;
    accessibility: AccessibilitySettings;
};
declare type SkillConstant = {
    Woodcutting: 0;
    Fishing: 1;
    Firemaking: 2;
    Cooking: 3;
    Mining: 4;
    Smithing: 5;
    Attack: 6;
    Strength: 7;
    Defence: 8;
    Hitpoints: 9;
    Thieving: 10;
    Farming: 11;
    Ranged: 12;
    Fletching: 13;
    Crafting: 14;
    Runecrafting: 15;
    Magic: 16;
    Prayer: 17;
    Slayer: 18;
    Herblore: 19;
    Agility: 20;
    Summoning: 21;
};
interface OfflineBase {
    timestamp: number;
}
/** Used for woodcutting */
interface OfflineWoodcut extends OfflineBase {
    skill: 0;
    action: number[];
}
/** Used for woodcutting */
interface OfflineMagic extends OfflineBase {
    skill: 16;
    action: [number, [number, number, number]];
}
interface OfflineCooking extends OfflineBase {
    skill: 3;
    action: {
        active: number;
        passive: number[];
    };
}
interface OfflineNoAction extends OfflineBase {
    skill: 9 | 10;
    action: null;
    timestamp: number;
}
interface OfflineUnset {
    skill: null;
    action: null;
    timestamp: null;
}
/** Used for all other skills */
interface OfflineSkill extends OfflineBase {
    skill: 2 | 3 | 4 | 5 | 10 | 14 | 15 | 19 | 20 | 21;
    action: number;
}
/** Used for fishing, fletching, alt magic */
interface OfflineTuple extends OfflineBase {
    skill: 1 | 13;
    action: [number, number];
}
declare type Offline = OfflineWoodcut | OfflineTuple | OfflineUnset | OfflineSkill | OfflineMagic | OfflineCooking | OfflineNoAction;
declare type LanguageCategory = 'SPECIAL_ATTACK'|'SKILL_NAME'|'ITEM_NAME'|'MONSTER_NAME'|'ITEM_DESCRIPTION'|'MODIFIER_DATA'|'PET_NAME'|'LORE'|'GAME_GUIDE'|'SHOP_NAME'|'SHOP_DESCRIPTION'|'PRIVACY_POLICY'|'MENU_TEXT'|'MAGIC'|'THIEVING';
interface ToggleSettingData {
  value: boolean,
  shouldChange: boolean,
  saveOnChange: boolean
}
type LanguageData = Record<LanguageCategory,StringDictionary<string>>;
type SupportedLanguage = 'en'|'zh-CN'|'zh-TW'|'fr'|'de'|'it'|'ko'|'ja'|'pt'|'pt-br'|'es'|'ru'|'tr';