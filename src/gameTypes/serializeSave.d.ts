interface NumberSaveGame {
    firstTime: number;
    nameChanges: number;
    gp: number;
    defaultPageOnLoad: number;
    levelUpScreen: number;
    showItemNotify: number;
    myBankVersion: number;
    buyQty: number;
    sellQty: number;
    accountGameVersion: number;
    formatNumberSetting: number;
    saveTimestamp: number;
    currentGamemode: number;
    raidCoins: number;
    agilityPassivePillarActive?: number;
    selectedSpell?: number;
    attackStyle?: number;
    currentCombatFood?: number;
    prayerPoints?: number;
    slayerCoins?: number;
    selectedEquipmentSet?: number;
    activeAurora?: number;
    tutorialProgress: number;
    christmas2021Progress: number;
}
declare type NumberKey = keyof NumberSaveGame;
interface BoolSaveGame {
    ignoreBankFull: boolean;
    continueThievingOnStun?: boolean;
    autoRestartDungeon: boolean;
    autoSaveCloud: boolean;
    darkMode: boolean;
    showGPNotify: boolean;
    enableAccessibility: boolean;
    showEnemySkillLevels: boolean;
    confirmationOnClose: boolean;
    autoPotion?: boolean;
    showCommas: boolean;
    showVirtualLevels: boolean;
    secretAreaUnlocked?: boolean;
    showSaleNotifications: boolean;
    showShopNotifications: boolean;
    pauseOfflineActions: boolean;
    showCombatMinibar: boolean;
    showCombatMinibarCombat: boolean;
    showSkillMinibar: boolean;
    disableAds: boolean;
    useCombinationRunes: boolean;
    firstTimeLoad: boolean;
    autoSlayer: boolean;
    tutorialComplete: boolean;
}
declare type BoolKey = keyof BoolSaveGame;
interface SerializableSaveGame {
    bank: OldBankItem[];
    statsGeneral?: OldGameStat[];
    statsWoodcutting?: OldGameStat[];
    statsFiremaking?: OldGameStat[];
    statsFishing?: OldGameStat[];
    statsCooking?: OldGameStat[];
    statsMining?: OldGameStat[];
    statsSmithing?: OldGameStat[];
    statsCombat?: OldGameStat[];
    statsThieving?: OldGameStat[];
    statsFarming?: OldGameStat[];
    statsFletching?: OldGameStat[];
    statsCrafting?: OldGameStat[];
    statsRunecrafting?: OldGameStat[];
    statsHerblore?: OldGameStat[];
    glovesTracker: OldGloveChargeTracker[];
    rockData?: OldRockData[];
    herbloreBonuses: OldHerbloreBonuses;
    tutorialTips?: {
        activated: boolean;
    }[];
    shopItemsPurchased: Map<string, OldPurchasedShopItem>;
    SETTINGS: OldSettingsData;
    monsterStats?: MonsterStat[] | OldMonsterStat[];
    petUnlocked: boolean[];
    skillsUnlocked: boolean[];
    skillXP: number[];
    dungeonCompleteCount: number[];
    lockedItems: number[];
    golbinRaidStats?: number[];
    chosenAgilityObstacles?: number[];
    agilityObstacleBuildCount?: number[];
    itemsAlreadyFound: number[];
    combatData?: MinCombatData;
    equippedFood?: OldItemQuantity2[];
    equipmentSets?: OldEquipmentSet[];
    selectedAttackStyle?: number[];
    slayerTask?: OldSlayerTask[];
    slayerTaskCompletion?: number[];
    saveStateBeforeRaid?: number[];
}
declare type SerialKey = keyof SerializableSaveGame;
interface NestedSerializeableSaveGame {
    newFarmingAreas: OldFarmingArea[];
    MASTERY: OldMastery;
    golbinRaidHistory: OldRaidHistory[];
    itemStats?: ItemStat[] | OldItemStats[];
}
declare type NestedKey = keyof NestedSerializeableSaveGame;
interface OtherSaveGame {
    offline: OldOffline;
    titleNewsID: string[];
    scheduledPushNotifications: StringDictionary<string>;
    username: string;
    gameUpdateNotification: string;
    randomModifiers?: any;
    summoningData?: OldPlayerSummoningData;
    cookingStockpiles?: OldItemQuantity2[];
    activeAstrologyModifiers?: NumberDictionary<OldPlayerModifierData>[];
    completedTasks: number[];
    activeTasks: NumberDictionary<OldActiveTutorialTask>;
    plantAllSelected: NumberDictionary<number[]>;
    christmas2021PresentProgress: number[];
    bankTabIcons: number[];
    customMinibarItems: NumberDictionary<number[]>;
}
declare type OtherKey = keyof OtherSaveGame;
interface ReconstructedSaveGame {
    skillLevel: number[];
    nextLevelProgress: number[];
    equippedItems?: number[];
    ammo?: number;
}
declare type ReconKey = keyof ReconstructedSaveGame;
interface NewSaveGame extends NumberSaveGame, BoolSaveGame, SerializableSaveGame, NestedSerializeableSaveGame, OtherSaveGame, ReconstructedSaveGame, Partial<OldSaveGame> {
    serialData?: DataReader;
    version: number;
}
declare type NewSaveKey = NumberKey | BoolKey | SerialKey | NestedKey | OtherKey | ReconKey;
interface Serializer<T> {
    (saveVar: T): number[];
}
interface NestedSerializer<T> {
    (saveVar: T): number[][];
}
interface Deserializer<T> {
    (sData: number[], version: number): T;
}
interface NestedDeserializer<T> {
    (sData: number[][], version: number): T;
}
declare type StatsData = {
    stats: ItemStats[];
    items: number[];
    removed: NumberDictionary<number[]>;
};
declare type MinCombatData = {
    player: {
        hitpoints: number;
    };
};
declare type SerializerVar<Key extends NewSaveKey> = {
    saveKey: Key;
    serialize: Serializer<NewSaveGame[Key]>;
    deserialize: Deserializer<NewSaveGame[Key]>;
};
declare type NestedSerializerVar<Key extends NewSaveKey> = {
    saveKey: Key;
    serialize: NestedSerializer<NewSaveGame[Key]>;
    deserialize: NestedDeserializer<NewSaveGame[Key]>;
};
declare type PackagedSave = {
    v: number;
    n: number[];
    b: number[];
    s: number[][];
    ns: number[][][];
    o: string[];
    cd: number[];
};
declare const saveFormat2Version = 21;
declare const currentSaveVersion = 50;
interface AddRemove<T> {
    add: T[];
    remove: T[];
}
declare type SaveKeyDiff<T> = Partial<NumberDictionary<AddRemove<T>>>;
declare const numberVarDiff: SaveKeyDiff<NumberKey>;
declare const boolVarDiff: SaveKeyDiff<BoolKey>;
declare const otherVarDiff: SaveKeyDiff<OtherKey>;
declare const serialVarDiff: SaveKeyDiff<SerialKey>;
declare const nestedVarDiff: SaveKeyDiff<NestedKey>;
/** Readonly object, will return a new save game object */
declare const defaultSaveValues: Readonly<Required<NewSaveGame>>;
declare function getSaveKeysFromDiff<T>(diff: SaveKeyDiff<T>): T[][];
declare function testDiff<T>(diff: SaveKeyDiff<T>, vars: NumberDictionary<T[]>, version: number): void;
/** Variables that store a number */
declare const numberVars: (keyof NumberSaveGame)[][];
/** Variables that store a boolean */
declare const boolVars: (keyof BoolSaveGame)[][];
/** Old Savegame variables that may or may not exist */
interface OldSaveGame {
    currentBankUpgrade: number;
    treeMasteryData: OldMasteryArray;
    currentAxe: number;
    treeCutLimit: number;
    bankMax: number;
    logsMastery: OldMasteryArray;
    fishMastery: OldMasteryArray;
    currentRod: number;
    cookingMastery: OldMasteryArray;
    upgradedToRange: boolean;
    miningOreMastery: OldMasteryArray;
    currentPickaxe: number;
    smithingMastery: OldMasteryArray;
    thievingMastery: OldMasteryArray;
    farmingMastery: OldMasteryArray;
    currentCookingFire: number;
    fletchingMastery: OldMasteryArray;
    craftingMastery: OldMasteryArray;
    runecraftingMastery: OldMasteryArray;
    itemLog: boolean[];
    showSkillNav: boolean;
    herbloreMastery: OldMasteryArray;
    currentAutoEat: number;
    equipmentSetsPurchased: [boolean, boolean];
    showHPNotify: boolean;
    equipmentSwapPurchased: boolean;
    godUpgrade: boolean[];
    autoSlayerUnlocked: boolean;
    xmasPresents: number;
    killCount: number[];
}
/** Variables with other types that are too mishapen or not fit for serialization */
declare const otherVars: (keyof OtherSaveGame)[][];
/** Variables that are serializable */
declare const serialVars: (keyof SerializableSaveGame)[][];
/** Variables that are nested serializable */
declare const nestedVars: (keyof NestedSerializeableSaveGame)[][];
declare const deserializeNumberArray: Deserializer<number[]>;
declare const deserializeRaidHistory: NestedDeserializer<OldRaidHistory[]>;
declare const deserializeMastery: NestedDeserializer<OldMastery>;
declare const deserializeEquipment: Deserializer<OldEquipmentSet[]>;
declare const deserializeBoolArray: Deserializer<boolean[]>;
declare const deserializeMonsterStats: Deserializer<MonsterStat[]>;
declare type OldItemStatType = 'all' | 'weapon' | 'quiver' | 'armour' | 'chests' | 'seeds' | 'harvest' | 'food' | 'rune';
declare const itemStatTypes: OldItemStatType[];
declare function deserializeItemStatsPortion(portion: StatsData, subData: number[], stats: ItemStat[], itemStatVer: number): void;
declare const curItemStatVer = 1;
declare const deserializeItemStats: (sData: number[][], sVersion: number, idMap: NumericIDMap) => ItemStat[];
declare const deserializeSettings: Deserializer<OldSettingsData>;
declare const deserializeSettingsOld: Deserializer<OldSettingsData>;
declare const deserializeDefaultItemTabs: Deserializer<BankDefaultItem[]>;
declare const deserializeBank: Deserializer<OldBankItem[]>;
declare function getStatDeserializer(statVar: OldGameStat[]): Deserializer<OldGameStat[]>;
declare const deserializeStats: {
    general: Deserializer<OldGameStat[]>;
    woodcutting: Deserializer<OldGameStat[]>;
    firemaking: Deserializer<OldGameStat[]>;
    fishing: Deserializer<OldGameStat[]>;
    cooking: Deserializer<OldGameStat[]>;
    mining: Deserializer<OldGameStat[]>;
    smithing: Deserializer<OldGameStat[]>;
    combat: Deserializer<OldGameStat[]>;
    thieving: Deserializer<OldGameStat[]>;
    farming: Deserializer<OldGameStat[]>;
    fletching: Deserializer<OldGameStat[]>;
    crafting: Deserializer<OldGameStat[]>;
    runecrafting: Deserializer<OldGameStat[]>;
    herblore: Deserializer<OldGameStat[]>;
};
declare const deserializeGlovesTracker: Deserializer<OldGloveChargeTracker[]>;
declare const deserializeRockData: Deserializer<OldRockData[]>;
interface OldSlayerTask {
    monsterID: number;
    count: number;
    tier?: SlayerTierID;
    extended?: boolean;
}
declare const deserializeSlayerTask: Deserializer<OldSlayerTask[]>;
declare const deserializeFarmingAreas: NestedDeserializer<OldFarmingArea[]>;
declare const deserializeHerbloreBonuses: Deserializer<OldHerbloreBonuses>;
declare const deserializeTutorialTips: Deserializer<{
    activated: boolean;
}[]>;
declare const deserializeShopItems: Deserializer<Map<string, OldPurchasedShopItem>>;
declare const deserializeCombatData: Deserializer<MinCombatData>;
declare const deserializeFood: Deserializer<OldItemQuantity2[]>;
/** Decodes and decompresses a save string */
declare function decompressSaveString(saveString: string): PackagedSave | NewSaveGame;
/** Gets a savegame object from a save string */
declare function getSaveFromString(saveString: string, idMap: NumericIDMap): {
    saveGame: NewSaveGame;
    oldFormat: boolean;
};
declare function setSaveKeyToDefault<T extends keyof NewSaveGame>(saveGame: NewSaveGame, key: T): void;
/** Converts herblore bonuses from array */
declare function convertHerbloreBonusesFromArray(herbloreBonuses: OldHerbloreBonus[]): OldHerbloreBonuses;
/** Reconstructs variables that did not need to be saved (and performs some post processing for others) */
declare function constructRedundantVars(saveGame: NewSaveGame, saveVersion: number): void;
declare class DataReader {
    data: number[];
    dataIndex: number;
    get dataLength(): number;
    /** If the reader is at the end of the data */
    get atEnd(): boolean;
    constructor(data: number[]);
    getBool(): boolean;
    getNumber(): number;
    nextValue(): number;
    getChunk(length: number): number[];
    getVariableLengthChunk(): DataReader;
    getBoolArray(): boolean[];
    getStunFlavour(): StunFlavour;
    getActionType(): ActionType;
    getAttack(game: Game, idMap: NumericIDMap): SpecialAttack | undefined;
    getAttackEffect(attack: SpecialAttack | undefined): AnyEffect | undefined;
    getDOTType(): DOTType;
    getLocation(game: Game, idMap: NumericIDMap): CombatArea | SlayerArea | Dungeon | undefined;
    getRandomAttackType(): AttackType | 'unset';
    getMonsterAttackType(): AttackType | 'random';
    getString(): string;
    getCombatModifierArray(): CombatModifierArray;
    getModifierArray(game: Game, idMap: NumericIDMap): ModifierArray;
    getTownshipBuildingDataMap(game: Game, idMap: NumericIDMap): Map<TownshipBuilding, number>;
    getAstrologyModifierArray(game: Game, idMap: NumericIDMap): ModifierArray[];
    getRaidSelectionArray(): {
        itemID: number;
        quantity: number;
        isAlt: boolean;
    }[];
    getItemQuantities(): OldItemQuantity[];
    getRawData(): number[];
}
declare const enum AttackEffectType {
    OnHitEffect = 0,
    PreHitEffect = 1,
    Affliction = 2,
    Frostburn = 3,
    SlowEffect = 4,
    AbsorbingSkin = 5,
    Duality = 6,
    Rage = 7,
    DarkBlade = 8,
    EndOfTurnEvasion = 9,
    Shock = 10,
    Assassin = 11,
    DecreasedEvasionStackingEffect = 12,
    GrowingMadness = 13,
    MomentInTime = 14,
    ReignOverTime = 15,
    Leviathan = 16,
    ShadowCloak = 17,
    ItemEffect = 18,
    Increased5DR = 19
}
declare enum DotTypeIDs {
    Burn = 0,
    Bleed = 1,
    Poison = 2,
    Regen = 3,
    DeadlyPoison = 4
}
declare enum AttackTypeID {
    melee = 0,
    ranged = 1,
    magic = 2,
    unset = 3,
    random = 4
}
declare function updateSavePre110(savegame: NewSaveGame): void;
declare function updateSavePre121(savegame: NewSaveGame): void;
declare function cleanSaveGame(savegame: NewSaveGame): void;
/** Converts a savegame's old mastery to new mastery */
declare function convertOldMastery(savegame: NewSaveGame): void;
