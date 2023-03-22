interface GolbinRaidData {
    bannedItems: string[];
    bannedPassiveItems: string[];
    crateItems: {
        itemID: string;
        weight: CrateRarity;
    }[];
    golbinPassives: string[];
    startingWeapons?: string[];
    startingFood?: string;
    startingAmmo?: IDQuantity;
    startingRunes?: IDQuantity[];
}
/** Combat Management class for golbin raid */
declare class RaidManager extends BaseManager {
    get media(): string;
    get name(): string;
    activeSkills: AnySkill[];
    get canStop(): boolean;
    randomPlayerModifiers: CombatModifierArray;
    randomEnemyModifiers: CombatModifierArray;
    player: RaidPlayer;
    get areaType(): CombatAreaType;
    state: RaidState;
    /** Difficulty selected in the UI */
    selectedDifficulty: RaidDifficulty;
    get difficulty(): RaidDifficultyData;
    /** Internal difficulty to actually use */
    _setDifficulty: RaidDifficulty;
    enemy: Golbin;
    bank: Bank;
    bannedItems: Set<AnyItem>;
    bannedPassiveItems: Set<AnyItem>;
    crateItems: {
        item: AnyItem;
        weight: CrateRarity;
    }[];
    golbinPassives: CombatPassive[];
    startingWeapons: EquipmentItem[];
    startingFood?: FoodItem;
    startingAmmo?: EquipmentQuantity;
    startingRunes: AnyItemQuantity[];
    itemSelection: RaidItemSelection;
    exclusiveItemSelection: RaidItemSelection;
    itemLevelBrackets: number[];
    wave: number;
    get waveLength(): number;
    get fightingBoss(): boolean;
    waveProgress: number;
    get waveBracket(): number;
    get waveSkipCost(): number;
    get coinsEarned(): number;
    get canInteruptAttacks(): boolean;
    get areaRequirements(): AnyRequirement[];
    get slayerAreaLevelReq(): number;
    get playerAreaModifiers(): PlayerModifierObject;
    get enemyAreaModifiers(): CombatModifierData;
    killCount: number;
    specialAttackSelection: SpecialAttack[];
    isFightingITMBoss: boolean;
    onSlayerTask: boolean;
    get ignoreSpellRequirements(): boolean;
    startTimestamp: number;
    endTimestamp: number;
    ownedCrateItems: Set<AnyItem>;
    randomModifiersBeingSelected: CombatModifierArray;
    isSelectingPositiveModifier: boolean;
    itemsBeingSelected: CreateArrayType<CreateRaidItemBeingSelected<RaidItemTypeMap>>;
    itemCategoryBeingSelected: keyof RaidItemSelection;
    posModsSelected: number;
    negModsSelected: number;
    isPaused: boolean;
    get raidRunning(): boolean;
    /** History of previous raids */
    history: RaidHistory[];
    get cratesPurchased(): number;
    constructor(game: Game, namespace: DataNamespace);
    registerData(data: GolbinRaidData): void;
    activeTick(): void;
    onPageChange(): void;
    render(): void;
    preStartRaid(): void;
    resetModsSelected(): void;
    resetModifiers(): void;
    fireStateModals(): void;
    startRaid(): void;
    updateSkipCost(): void;
    pause(): void;
    unpause(): void;
    pauseGame(): void;
    resumeGame(): void;
    onLoad(): void;
    toggleOffSelectors: string[];
    toggleOnSelectors: string[];
    prayerUnlockedSelectors: string[];
    toggleUIOff(): void;
    toggleUIOn(): void;
    stop(fled?: boolean): boolean;
    skipWave(): void;
    recordRaidHistory(): void;
    postDataRegistration(): void;
    computeItemSelection(): void;
    getItemSelection<T extends keyof RaidItemTypeMap>(category: T): RaidItemTypeMap[T][];
    getCategoryQuantity(category: keyof RaidItemSelection): number;
    getItemChoices<T extends keyof RaidItemTypeMap>(category: T, count: number): RaidItemBeingSelected<RaidItemTypeMap[T]>[];
    createNewEnemy(): void;
    onEnemyDeath(): boolean;
    loadNextEnemy(): void;
    fireCategorySelectModal(): void;
    closeModalAndPause(): void;
    continueRaid(): void;
    addRunesCallback(item: AnyItem, quantity: number): void;
    addFoodCallback(item: FoodItem, quantity: number): void;
    /** Callback function for equipping items
     *  @param item The ItemID to equip
     *  @param quantity The amount of the item to equip
     *  @param isAlt Whether to roll new random special attacks for the weapon
     */
    equipItemCallback(item: EquipmentItem, quantity: number, isAlt: boolean): void;
    rerollPassiveCallback(): void;
    addExistingRunesCallback(quantity: number): void;
    spawnEnemy(): void;
    selectNothingCallback(): void;
    showEquipmentSelectionModal(category: keyof RaidItemSelection): void;
    /** Sets the state data for a selection of equipment */
    setEquipmentSelection(category: keyof RaidItemSelection): void;
    /** Fires the equipment selection modal for the current state data */
    fireItemSelectModal(): void;
    getEquipmentSelectionNodes(selection: RaidItemBeingSelected<EquipmentItem>[]): Node[];
    getRuneSelectionNodes(selection: RaidItemBeingSelected<AnyItem>[]): Node[];
    getFoodSelectionNodes(selection: RaidItemBeingSelected<FoodItem>[]): Node[];
    renderLocation(): void;
    renderStartMenu(): void;
    addMonsterStat(statID: MonsterStats, amount?: number): void;
    addCombatStat(statID: CombatStats, amount?: number): void;
    setDefaultEquipment(): void;
    changeDifficulty(newDifficulty: RaidDifficulty): void;
    renderDifficulty(): void;
    rollForCrateItem(): {
        item: AnyItem;
        weight: CrateRarity;
    };
    openGolbinCrate(): void;
    fireCrateModal(crateItem: {
        item: AnyItem;
        weight: CrateRarity;
    }): void;
    /** Sets the random modifier selection state */
    setRandomModifierSelection(isPositive: boolean, amount?: number): void;
    fireRandomModifierSelection(): void;
    fireViewModifiersModal(): void;
    selectRandomModifier(index: number): void;
    continueModifierSelection(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
    getGolbinRaidHistory(historyID: number): string;
    /** Loads golbin raid history into the DOM */
    loadHistory(): void;
    static difficulties: Record<RaidDifficulty, RaidDifficultyData>;
    static possibleModifiers: RaidRandomModifierList[];
}
interface RaidHistory {
    skillLevels: number[];
    equipment: EquipmentItem[];
    ammo: number;
    inventory: AnyItemQuantity[];
    food: AnyItemQuantity;
    wave: number;
    kills: number;
    timestamp: number;
    raidCoinsEarned: number;
    difficulty: RaidDifficulty;
}
interface OldRaidHistory {
    skillLevels: number[];
    equipment: number[];
    ammo: number;
    inventory: OldItemQuantity[];
    food: OldItemQuantity2;
    wave: number;
    kills: number;
    timestamp: number;
    raidCoinsEarned: number;
    difficulty: RaidDifficulty;
}
interface RaidItemTypeMap {
    weapons: WeaponItem;
    armour: EquipmentItem;
    ammo: EquipmentItem;
    runes: AnyItem;
    food: FoodItem;
    passives: EquipmentItem;
}
declare type CreateRaidItemBeingSelected<Type> = {
    [Property in keyof Type]: RaidItemBeingSelected<Type[Property]>;
};
declare type RaidItemBeingSelected<ItemType> = {
    item: ItemType;
    quantity: number;
    isAlt: boolean;
};
/** Returns a type where all properties of the type are arrays of their original type */
declare type CreateArrayType<Type> = {
    [Property in keyof Type]: Type[Property][];
};
declare type RaidItemSelection = CreateArrayType<CreateArrayType<RaidItemTypeMap>>;
declare type RaidDifficultyData = {
    combatTriangle: CombatTriangles;
    coinMultiplier: number;
    enemyHPModifier: number;
    enemyEvasionModifier: number;
    enemyMaxHitModifier: number;
    enemyAccuracyModifier: number;
    negativeModifierCount: number;
    positiveModifierCount: number;
    selectedClass: string;
    unselectedClass: string;
    hasSecondPassiveChange: boolean;
    name: string;
};
declare type RaidRandomModifierList = {
    key: CombatModifierKey;
    /** Multiplies the random roll from 1-5 by this number */
    multiplier?: number;
};
declare type CombatModifierArray = {
    key: CombatModifierKey;
    value: number;
}[];
declare enum RaidItemSelectionID {
    weapons = 0,
    armour = 1,
    ammo = 2,
    runes = 3,
    food = 4,
    passives = 5
}
declare enum RaidDifficulty {
    Easy = 0,
    Medium = 1,
    Hard = 2
}
declare enum RaidState {
    Unstarted = 0,
    SelectingModifiersStart = 1,
    FightingWave = 2,
    SelectingCategory = 3,
    SelectingItem = 4,
    SelectingModifiersWave = 5
}
