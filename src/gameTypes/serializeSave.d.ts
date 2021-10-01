interface Window {
    selectedSpell: undefined;
    attackStyle: number;
    currentCombatFood: undefined;
    prayerPoints: undefined;
    slayerCoins: undefined;
    selectedEquipmentSet: undefined;
    activeAurora: undefined;
    combatData: undefined;
    equippedFood: undefined;
    equipmentSets: undefined;
    selectedAttackStyle: undefined;
    slayerTask: undefined;
    slayerTaskCompletion: undefined;
    saveStateBeforeRaid: undefined;
    equippedItems: undefined;
    ammo: undefined;
    randomModifiers: undefined;
    continueThievingOnStun: undefined;
    autoPotion: undefined;
}
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
    agilityPassivePillarActive: number;
    selectedSpell?: number;
    attackStyle?: number;
    currentCombatFood?: number;
    prayerPoints?: number;
    slayerCoins?: number;
    selectedEquipmentSet?: number;
    activeAurora?: number;
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
    secretAreaUnlocked: boolean;
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
}
declare type BoolKey = keyof BoolSaveGame;
interface SerializableSaveGame {
    bank: BankItem[];
    statsGeneral: GameStat[];
    statsWoodcutting: GameStat[];
    statsFiremaking: GameStat[];
    statsFishing: GameStat[];
    statsCooking: GameStat[];
    statsMining: GameStat[];
    statsSmithing: GameStat[];
    statsCombat: GameStat[];
    statsThieving: GameStat[];
    statsFarming: GameStat[];
    statsFletching: GameStat[];
    statsCrafting: GameStat[];
    statsRunecrafting: GameStat[];
    statsHerblore: GameStat[];
    glovesTracker: typeof glovesTracker;
    rockData: RockData[];
    herbloreBonuses: HerbloreBonuses;
    tutorialTips: typeof tutorialTips;
    shopItemsPurchased: Map<string, ShopPurchase>;
    SETTINGS: Settings;
    monsterStats: MonsterStat[];
    petUnlocked: boolean[];
    skillsUnlocked: boolean[];
    skillXP: number[];
    dungeonCompleteCount: number[];
    lockedItems: number[];
    golbinRaidStats: number[];
    chosenAgilityObstacles: number[];
    agilityObstacleBuildCount: number[];
    itemsAlreadyFound: number[];
    combatData?: MinCombatData;
    equippedFood?: ItemQuantity2[];
    equipmentSets?: OldEquipmentSet[];
    selectedAttackStyle?: number[];
    slayerTask?: OldSlayerTask[];
    slayerTaskCompletion?: number[];
    saveStateBeforeRaid?: number[];
}
declare type SerialKey = keyof SerializableSaveGame;
interface NestedSerializeableSaveGame {
    newFarmingAreas: FarmingArea[];
    MASTERY: Mastery;
    golbinRaidHistory: RaidHistory[];
    itemStats: ItemStat[];
}
declare type NestedKey = keyof NestedSerializeableSaveGame;
interface OtherSaveGame {
    offline: Offline;
    titleNewsID: string[];
    scheduledPushNotifications: StringDictionary<string>;
    username: string;
    gameUpdateNotification: string;
    randomModifiers?: any;
    summoningData: typeof summoningData;
    cookingStockpiles: ItemQuantity2[];
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
    serialCombat?: DataReader;
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
    stats: Stats[];
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
declare const reconstructedVars: ReconKey[];
declare const currentSaveVersion = 5;
interface AddRemove<T> {
    add: T[];
    remove: T[];
}
declare type SaveKeyDiff<T> = NumberDictionary<AddRemove<T>>;
declare const numberVarDiff: SaveKeyDiff<NumberKey>;
declare const boolVarDiff: SaveKeyDiff<BoolKey>;
declare const otherVarDiff: SaveKeyDiff<OtherKey>;
declare const serialVarDiff: SaveKeyDiff<SerialKey>;
declare const nestedVarDiff: SaveKeyDiff<NestedKey>;
declare function getSaveKeysFromDiff<T>(diff: SaveKeyDiff<T>): T[][];
declare function testDiffs(): void;
declare function testDiff<T>(diff: SaveKeyDiff<T>, vars: NumberDictionary<T[]>, version: number): void;
declare function createSaveDiff<T>(vars: NumberDictionary<T[]>): SaveKeyDiff<T>;
/** Variables that store a number */
declare const numberVars: (keyof NumberSaveGame)[][];
/** Variables that store a boolean */
declare const boolVars: (keyof BoolSaveGame)[][];
/**  Old variables that should not be stored */
declare const oldVars: SaveKey[];
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
declare function isEmptyObject(obj: Record<string, unknown>): obj is Record<string, never>;
declare const serializeItemsFound: Serializer<number[]>;
declare const serializeNumberArray: Serializer<number[]>;
declare const deserializeNumberArray: Deserializer<number[]>;
declare const serializeRaidHistory: NestedSerializer<RaidHistory[]>;
declare const deserializeRaidHistory: NestedDeserializer<RaidHistory[]>;
declare const serializeMastery: NestedSerializer<Mastery>;
declare const deserializeMastery: NestedDeserializer<Mastery>;
declare const serializeEquipment: Serializer<OldEquipmentSet[]>;
declare const deserializeEquipment: Deserializer<OldEquipmentSet[]>;
declare const serializeBoolArray: Serializer<boolean[]>;
declare const deserializeBoolArray: Deserializer<boolean[]>;
declare const serializeMonsterStats: Serializer<MonsterStat[]>;
declare const deserializeMonsterStats: Deserializer<MonsterStat[]>;
declare enum Stats {
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
    TimesOpened = 16
}
declare function fixStats(stats: ItemStat[]): void;
declare function reduceToID(predicate: (item: GenericItem) => boolean): (idList: number[], item: GenericItem, id: number) => number[];
declare const itemStatsData: {
    all: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
    weapon: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
    quiver: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
    armour: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
    chests: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
    seeds: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
    harvest: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
    food: {
        stats: Stats[];
        items: number[];
        removed: {
            0: number[];
        };
    };
    rune: {
        stats: Stats[];
        items: number[];
        removed: {};
    };
};
declare const itemStatTypes: (keyof typeof itemStatsData)[];
declare function serializeStatPortion(portion: StatsData, stats: ItemStat[]): number[];
declare function deserializeItemStatsPortion(portion: StatsData, subData: number[], stats: ItemStat[], itemStatVer: number): void;
declare const curItemStatVer = 1;
declare const serializeItemStats: NestedSerializer<ItemStat[]>;
declare const deserializeItemStats: NestedDeserializer<ItemStat[]>;
declare const serializeSettings: Serializer<typeof SETTINGS>;
declare const deserializeSettings: Deserializer<typeof SETTINGS>;
declare const deserializeSettingsOld: Deserializer<typeof SETTINGS>;
declare const serializeDefaultItemTabs: Serializer<BankDefaultItem[]>;
declare const deserializeDefaultItemTabs: Deserializer<BankDefaultItem[]>;
declare const serializeNumbers: Serializer<NumberKey[]>;
declare const serializeBools: Serializer<BoolKey[]>;
declare const serializeBank: Serializer<BankItem[]>;
declare const deserializeBank: Deserializer<BankItem[]>;
declare const serializeStats: Serializer<GameStat[]>;
declare function getStatDeserializer(statVar: GameStat[]): Deserializer<GameStat[]>;
declare const deserializeStats: {
    general: Deserializer<GameStat[]>;
    woodcutting: Deserializer<GameStat[]>;
    firemaking: Deserializer<GameStat[]>;
    fishing: Deserializer<GameStat[]>;
    cooking: Deserializer<GameStat[]>;
    mining: Deserializer<GameStat[]>;
    smithing: Deserializer<GameStat[]>;
    combat: Deserializer<GameStat[]>;
    thieving: Deserializer<GameStat[]>;
    farming: Deserializer<GameStat[]>;
    fletching: Deserializer<GameStat[]>;
    crafting: Deserializer<GameStat[]>;
    runecrafting: Deserializer<GameStat[]>;
    herblore: Deserializer<GameStat[]>;
};
declare const serializeGlovesTracker: Serializer<typeof glovesTracker>;
declare const deserializeGlovesTracker: Deserializer<typeof glovesTracker>;
declare const serializeRockData: Serializer<RockData[]>;
declare const deserializeRockData: Deserializer<RockData[]>;
interface OldSlayerTask {
    monsterID: MonsterID;
    count: number;
    tier?: SlayerTier;
    extended?: boolean;
}
declare const deserializeSlayerTask: Deserializer<OldSlayerTask[]>;
declare const serializeFarmingAreas: NestedSerializer<FarmingArea[]>;
declare const deserializeFarmingAreas: NestedDeserializer<FarmingArea[]>;
declare const serializeHerbloreBonuses: Serializer<HerbloreBonuses>;
declare const deserializeHerbloreBonuses: Deserializer<HerbloreBonuses>;
declare const serializeTutorialTips: Serializer<typeof tutorialTips>;
declare const deserializeTutorialTips: Deserializer<typeof tutorialTips>;
declare const serializeShopItems: Serializer<typeof shopItemsPurchased>;
declare const deserializeShopItems: Deserializer<typeof shopItemsPurchased>;
declare const serializeCombatData: Serializer<MinCombatData>;
declare const deserializeCombatData: Deserializer<MinCombatData>;
declare const serailizeFood: Serializer<ItemQuantity2[]>;
declare const deserializeFood: Deserializer<ItemQuantity2[]>;
declare function serializeVars(saveGame: SerializableSaveGame): number[][];
declare function serializeNestedVars(saveGame: NestedSerializeableSaveGame): number[][][];
/** Returns a packaged savefile ready for compression and encoding */
declare function packageSave(saveGame: NewSaveGame): PackagedSave;
/** Gets a compressed save file from current global values */
declare function getCompressedSaveString(): string;
/** Decodes and decompresses a save string */
declare function decompressSaveString(saveString: string): PackagedSave | NewSaveGame;
/** Gets a savegame object from a save string */
declare function getSaveFromString(saveString: string): {
    saveGame: NewSaveGame;
    oldFormat: boolean;
};
declare function setSaveKeyToDefault<T extends keyof NewSaveGame>(saveGame: NewSaveGame, key: T): void;
/** Converts herblore bonuses from array */
declare function convertHerbloreBonusesFromArray(herbloreBonuses: HerbloreBonus[]): HerbloreBonuses;
/** Reconstructs variables that did not need to be saved (and performs some post processing for others) */
declare function constructRedundantVars(saveGame: NewSaveGame, saveVersion: number): void;
/** This is just a utility function for testing */
declare function snapShotAllVars(saveGame: NewSaveGame): StringDictionary<string>;
declare const newAllVars: NewSaveKey[];
/** Gets a savegame object from the current global values */
declare function getSaveGameFromWindow(): NewSaveGame;
/** Tests the old/new save compression methods */
declare function testSaveMethods(): void;
/** Compares the length between the old/new save compression methods */
declare function testLength(): void;
declare class DataReader {
    private data;
    private dataIndex;
    get dataLength(): number;
    constructor(data: number[]);
    getBool(): boolean;
    getNumber(): number;
    private nextValue;
    getChunk(length: number): number[];
    getVariableLengthChunk(): DataReader;
    getBoolArray(): boolean[];
    getStunFlavour(): StunFlavour;
    getActionType(): ActionType;
    getAttack(): Attack;
    getCurse(): Curse;
    getAttackEffect(attack: Attack): Effect;
    getDOTType(): DOTType;
    getMonster(): Monster;
    getAttackStyle(): AttackStyle;
    getLocationType(): LocationType;
    getLocation(): CombatAreaData | SlayerAreaData | DungeonData;
    getEnemyState(): EnemyState;
    getRawData(): number[];
}
declare class DataWriter {
    data: number[];
    addNumber(value: number): void;
    addBool(value: boolean): void;
    addChunk(data: number[]): void;
    addVariableLengthChunk(data: number[]): void;
    addBoolArray(data: boolean[]): void;
    addStunFlavour(flavour: StunFlavour): void;
    addActionType(action: ActionType): void;
    addAttack(attack: Attack): void;
    addCurse(curse: Curse): void;
    addAttackEffect(effect: Effect, attack: Attack): void;
    addDOTType(type: DOTType): void;
    addMonster(monster: Monster): void;
    addAttackStyle(attackStyle: AttackStyle): void;
    addLocationType(type: LocationType): void;
    addLocation(data: CombatAreaData | SlayerAreaData | DungeonData): void;
    addEnemyState(state: EnemyState): void;
}
declare enum DotTypeIDs {
    Burn = 0,
    Bleed = 1,
    Poison = 2,
    Regen = 3
}
declare enum LocationTypeIDs {
    None = 0,
    Combat = 1,
    Slayer = 2,
    Dungeon = 3
}
declare enum EnemyStateID {
    Dead = 0,
    Alive = 1,
    Spawning = 2
}
/** Readonly object, will return a new save game object */
declare const defaultSaveValues: Readonly<Required<NewSaveGame>>;
declare function updateSavePre110(savegame: NewSaveGame): void;
declare function updateSavePre121(savegame: NewSaveGame): void;
declare function cleanSaveGame(savegame: NewSaveGame): void;
/** Converts a savegame's old mastery to new mastery */
declare function convertOldMastery(savegame: NewSaveGame): void;
