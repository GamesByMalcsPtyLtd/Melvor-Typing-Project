/** Player Class for Golbin Raid */
declare class RaidPlayer extends Player {
    manager: RaidManager;
    food: EquippedFood;
    altAttacks: Map<EquipmentSlot, SpecialAttack[]>;
    get isPrayerUnlocked(): boolean;
    get prayerPointsOnWaveCompletion(): number;
    get allowRegen(): boolean;
    get useCombinationRunes(): boolean;
    get addItemsToBankOnLoadFail(): boolean;
    /** Constructs a player for golbin raid */
    constructor(manager: RaidManager, game: Game);
    isEquipmentSlotUnlocked(slot: EquipmentSlot): boolean;
    modifyAttackInterval(interval: number): number;
    resetAltAttacks(): void;
    getSlotAttacks(equipped: EquippedItem): SpecialAttack[];
    computeLevels(): void;
    computeModifiers(): void;
    mergeUninheritedEffectApplicators(): void;
    processDeath(): void;
    baseSpawnInterval: number;
    equipItem(item: EquipmentItem, set: number, slot?: EquipmentSlot, quantity?: number, altAttacks?: SpecialAttack[]): boolean;
    updateForEquipmentChange(): void;
    /** Equips the selected food, replacing it if it is different */
    equipFood(item: FoodItem, quantity: number): boolean;
    /** Sets default starting equipment for golbin raid */
    setEquipmentToDefault(): void;
    addMiscModifiers(): void;
    getSkillLevel(skill: CombatLevelKey): number;
    getLevelHistory(): number[];
    getEquipmentHistory(): EquipmentItem[];
    getFoodHealingBonus(item: FoodItem): number;
    onMagicAttackFailure(): void;
    onRangedAttackFailure(quiver: EquipmentItem): void;
    consumeAmmo(): void;
    equipDefaultWeapon(): void;
    rewardForDamage(damage: number): void;
    trackItemUsage(costs: AnyItemQuantity[]): void;
    trackWeaponStat(stat: ItemStats, amount?: number): void;
    consumeItemCharges(e: GameEvent, item: EquipmentItem): void;
    consumeItemQuantities(e: GameEvent, equipped: EquippedItem): void;
    consumeSynergyTablets(e: GameEvent): void;
    trackArmourStat(stat: ItemStats, amount?: number): void;
    addItemStat(item: EquipmentItem, stat: ItemStats, amount: number): void;
    trackPrayerStats(stat: PrayerStats, amount: number): void;
    checkIfCantEquip(): boolean;
    render(): void;
    renderLevels(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserializeAltAttacks(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
}
