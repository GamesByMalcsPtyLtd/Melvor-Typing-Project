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
    randomPlayerModifiers: CombatModifierArray;
    randomEnemyModifiers: CombatModifierArray;
    player: RaidPlayer;
    get areaType(): CombatAreaType;
    private state;
    /** Difficulty selected in the UI */
    private selectedDifficulty;
    get difficulty(): RaidDifficultyData;
    /** Internal difficulty to actually use */
    private _setDifficulty;
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
    private itemSelection;
    private exclusiveItemSelection;
    private itemLevelBrackets;
    wave: number;
    private get waveLength();
    get fightingBoss(): boolean;
    private waveProgress;
    private get waveBracket();
    private get waveSkipCost();
    private get coinsEarned();
    get canInteruptAttacks(): boolean;
    get areaRequirements(): AnyRequirement[];
    get slayerAreaLevelReq(): number;
    get playerAreaModifiers(): PlayerModifierObject;
    get enemyAreaModifiers(): CombatModifierData;
    private killCount;
    private specialAttackSelection;
    isFightingITMBoss: boolean;
    onSlayerTask: boolean;
    get ignoreSpellRequirements(): boolean;
    private startTimestamp;
    private endTimestamp;
    private ownedCrateItems;
    private randomModifiersBeingSelected;
    private isSelectingPositiveModifier;
    private itemsBeingSelected;
    private itemCategoryBeingSelected;
    private posModsSelected;
    private negModsSelected;
    private isPaused;
    get raidRunning(): boolean;
    /** History of previous raids */
    private history;
    get cratesPurchased(): number;
    constructor(game: Game, namespace: DataNamespace);
    registerData(data: GolbinRaidData): void;
    activeTick(): void;
    preStartRaid(): void;
    private resetModsSelected;
    private resetModifiers;
    fireStateModals(): void;
    startRaid(): void;
    private updateSkipCost;
    pause(): void;
    unpause(): void;
    private pauseGame;
    private resumeGame;
    onLoad(): void;
    private toggleOffSelectors;
    private toggleOnSelectors;
    private prayerUnlockedSelectors;
    private toggleUIOff;
    private toggleUIOn;
    stop(fled?: boolean): boolean;
    skipWave(): void;
    private recordRaidHistory;
    postDataRegistration(): void;
    private computeItemSelection;
    private getItemSelection;
    private getCategoryQuantity;
    private getItemChoices;
    protected createNewEnemy(): void;
    protected onEnemyDeath(): boolean;
    protected loadNextEnemy(): void;
    private fireCategorySelectModal;
    closeModalAndPause(): void;
    private continueRaid;
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
    protected spawnEnemy(): void;
    selectNothingCallback(): void;
    showEquipmentSelectionModal(category: keyof RaidItemSelection): void;
    /** Sets the state data for a selection of equipment */
    private setEquipmentSelection;
    /** Fires the equipment selection modal for the current state data */
    private fireItemSelectModal;
    private getEquipmentSelectionNodes;
    private getRuneSelectionNodes;
    private getFoodSelectionNodes;
    protected renderLocation(): void;
    private renderStartMenu;
    addMonsterStat(statID: MonsterStats, amount?: number): void;
    addCombatStat(statID: CombatStats, amount?: number): void;
    private setDefaultEquipment;
    changeDifficulty(newDifficulty: RaidDifficulty): void;
    private renderDifficulty;
    private rollForCrateItem;
    openGolbinCrate(): void;
    private fireCrateModal;
    /** Sets the random modifier selection state */
    private setRandomModifierSelection;
    private fireRandomModifierSelection;
    fireViewModifiersModal(): void;
    selectRandomModifier(index: number): void;
    private continueModifierSelection;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
    getGolbinRaidHistory(historyID: number): string;
    /** Loads golbin raid history into the DOM */
    loadHistory(): void;
    static difficulties: Record<RaidDifficulty, RaidDifficultyData>;
    private static possibleModifiers;
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
