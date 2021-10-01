/** Player Class for Golbin Raid */
declare class RaidPlayer extends Player {
    protected manager: RaidManager;
    food: EquippedFood;
    private altAttacks;
    get isPrayerUnlocked(): boolean;
    get prayerPointsOnWaveCompletion(): number;
    /** Constructs a player for golbin raid */
    constructor(manager: RaidManager);
    protected modifyAttackInterval(interval: number): number;
    protected addPetModifiers(): void;
    private resetAltAttacks;
    protected getSlotAttacks(slot: EquipSlot): Attack[];
    protected computeLevels(): void;
    computeModifiers(): void;
    processDeath(): void;
    getMonsterSpawnTime(): number;
    equipItem(itemID: number, set: number, slot?: SlotTypes | 'Default', quantity?: number, altAttacks?: Attack[]): boolean;
    updateForEquipmentChange(): void;
    /** Equips the selected food, replacing it if it is different */
    equipFood(itemID: number, quantity: number): boolean;
    /** Sets default starting equipment for golbin raid */
    setEquipmentToDefault(): void;
    protected addMiscModifiers(): void;
    protected addShopModifiers(): void;
    protected getSkillLevel(skillID: number): number;
    getLevelHistory(): number[];
    getEquipmentHistory(): number[];
    protected getFoodHealingBonus(item: FoodItem): number;
    protected onMagicAttackFailure(): void;
    protected onRangedAttackFailure(quiver: EquipmentItem): void;
    protected consumeAmmo(): void;
    private equipDefaultWeapon;
    protected rewardForDamage(damage: number): void;
    protected trackItemUsage(costs: ItemQuantity2[]): void;
    trackWeaponStat(stat: Stats, amount?: number): void;
    consumePotionCharge(type: PotionConsumption): void;
    protected trackArmourStat(stat: Stats, amount?: number): void;
    protected addItemStat(itemID: number, stat: Stats, amount: number): void;
    protected checkIfCantEquip(): boolean;
    render(): void;
    protected renderLevels(): void;
}
