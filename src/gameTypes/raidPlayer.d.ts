/** Player Class for Golbin Raid */
declare class RaidPlayer extends Player {
    protected manager: RaidManager;
    food: EquippedFood;
    private altAttacks;
    get isPrayerUnlocked(): boolean;
    get prayerPointsOnWaveCompletion(): number;
    protected get activeTriangle(): TriangleData;
    protected get allowRegen(): boolean;
    protected get useCombinationRunes(): boolean;
    protected get addItemsToBankOnLoadFail(): boolean;
    /** Constructs a player for golbin raid */
    constructor(manager: RaidManager, game: Game);
    isEquipmentSlotUnlocked(slot: SlotTypes): boolean;
    protected modifyAttackInterval(interval: number): number;
    private resetAltAttacks;
    protected getSlotAttacks(slot: EquipSlot): SpecialAttack[];
    protected computeLevels(): void;
    computeModifiers(): void;
    processDeath(): void;
    protected baseSpawnInterval: number;
    equipItem(item: EquipmentItem, set: number, slot?: SlotTypes | 'Default', quantity?: number, altAttacks?: SpecialAttack[]): boolean;
    updateForEquipmentChange(): void;
    /** Equips the selected food, replacing it if it is different */
    equipFood(item: FoodItem, quantity: number): boolean;
    /** Sets default starting equipment for golbin raid */
    setEquipmentToDefault(): void;
    protected addMiscModifiers(): void;
    protected getSkillLevel(skill: keyof CombatLevels): number;
    getLevelHistory(): number[];
    getEquipmentHistory(): EquipmentItem[];
    protected getFoodHealingBonus(item: FoodItem): number;
    protected onMagicAttackFailure(): void;
    protected onRangedAttackFailure(quiver: EquipmentItem): void;
    protected consumeAmmo(): void;
    private equipDefaultWeapon;
    protected rewardForDamage(damage: number): void;
    protected trackItemUsage(costs: AnyItemQuantity[]): void;
    trackWeaponStat(stat: ItemStats, amount?: number): void;
    protected processCombatEvent(event: GameEvent, interval?: number): void;
    consumeEquipmentCharges(event: GameEvent, interval: number): void;
    protected trackArmourStat(stat: ItemStats, amount?: number): void;
    protected addItemStat(item: EquipmentItem, stat: ItemStats, amount: number): void;
    protected trackPrayerStats(stat: PrayerStats, amount: number): void;
    protected checkIfCantEquip(): boolean;
    render(): void;
    protected renderLevels(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    private deserializeAltAttacks;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
}
