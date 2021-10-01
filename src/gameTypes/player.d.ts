declare class PlayerStats extends CharacterStats {
    summoningMaxHit: number;
    constructor();
    getValueTable(): {
        name: string;
        value: number;
    }[];
}
declare class Player extends Character {
    protected manager: BaseManager;
    equipmentSets: Equipment[];
    selectedEquipmentSet: number;
    activePrayers: Set<number>;
    food: EquippedFood;
    protected timers: PlayerTimers;
    private attackStyles;
    private _slayercoins;
    equipToSet: number;
    equipQuantity: number;
    modifiers: PlayerModifiers;
    noun: Noun;
    runesProvided: Map<number, number>;
    prayerPoints: number;
    target: Character;
    stats: PlayerStats;
    rendersRequired: PlayerRenderQueue;
    protected get activeTriangle(): TriangleData;
    protected statElements: PlayerHTMLElements;
    protected splashManager: SplashManager;
    protected effectRenderer: EffectRenderer;
    protected attackBar: ProgressBar;
    protected summonBar: ProgressBar;
    protected activeSummonSlots: ('Summon1' | 'Summon2')[];
    chargesUsed: {
        Summon1: number;
        Summon2: number;
    };
    private summonAttackInterval;
    private synergy_1_2_isActive;
    private itemReflexives;
    get slayercoins(): number;
    get equipment(): Equipment;
    protected get attackStyle(): AttackStyleData;
    /** Player automatically eats below this HP */
    protected get autoEatThreshold(): number;
    /** Player automatically eats to this HP */
    protected get autoEatHPLimit(): number;
    /** Player automatically eats food at this efficiency */
    protected get autoEatEfficiency(): number;
    protected get minHitFromMaxHitPercent(): number;
    get synergyDescription(): string;
    get numEquipSets(): number;
    /** Modified max cost of all active prayers */
    private get maxPrayerCost();
    private _pets;
    get pets(): number;
    set pets(value: number);
    constructor(manager: BaseManager);
    setCallbacks(): void;
    initialize(): void;
    setRenderAll(): void;
    tick(): void;
    getMonsterSpawnTime(): number;
    checkEquipmentSetsForItem(itemID: ItemID): boolean;
    /** Checks and unequips items that the player does not meet the requirements for */
    checkEquipmentRequirements(): void;
    protected modifyDamageReduction(reduction: number): number;
    computeAllStats(): void;
    computeCombatStats(): void;
    private computeItemReflexiveList;
    /** Checks equipped items with fight effects and removes/adds them if need be */
    private checkItemReflexiveEffects;
    /** Checks the usage of auroras/curses and disables them if they are not usable */
    protected checkMagicUsage(): void;
    protected computeLevels(): void;
    protected getSkillLevel(skillID: number): number;
    protected getAccuracyValues(): BaseStatValues;
    protected computeAttackSelection(): void;
    protected getSlotAttacks(slot: EquipSlot): Attack[];
    protected computeRuneProvision(): void;
    protected rollToHit(target: Character, attack: Attack): boolean;
    damage(amount: number, source: SplashType, thieving?: boolean): void;
    protected addHitpoints(amount: number): void;
    protected setHitpoints(value: number): void;
    protected updateHPConditionals(computeStats?: boolean): void;
    protected autoEat(foodSwapped?: boolean): void;
    getRuneCosts(spell: BaseSpell): ItemQuantity2[];
    protected applyCurse(target: Character): void;
    protected onMagicAttackFailure(): void;
    protected onRangedAttackFailure(quiver: EquipmentItem): void;
    protected rewardForDamage(damage: number): void;
    protected attack(target: Character, attack: Attack): number;
    protected lifesteal(attack: Attack, damage: number): number;
    protected summonAttack(): void;
    startSummonAttack(): void;
    protected postAttack(): void;
    protected onHit(): void;
    protected onBeingHit(): void;
    protected onMiss(): void;
    trackWeaponStat(stat: Stats, amount?: number): void;
    protected trackArmourStat(stat: Stats, amount?: number): void;
    protected addItemStat(itemID: number, stat: Stats, amount: number): void;
    protected consumeRunes(costs: ItemQuantity2[]): void;
    consumeQuiver(type: QuiverConsumption): void;
    private removeFromQuiver;
    protected consumeAmmo(): void;
    protected trackItemUsage(costs: ItemQuantity2[]): void;
    protected applyDOT(effect: DOTEffect, target: Character, damageDealt: number): boolean;
    protected getFlatReflectDamage(): number;
    protected applyDamageModifiers(target: Character, damage: number): number;
    protected applyTriangleToDamage(target: Character, damage: number): number;
    protected getDamageModifiers(target: Character): number;
    equipCallback(itemID: number, slot: SlotTypes): void;
    /** Callback function for changing equipment set */
    changeEquipmentSet(setID: number): void;
    /** Adds equipment sets based on the modifier value */
    protected addEquipmentSets(): void;
    /** Perform stat recalculation and ui update, interrupt current player action */
    updateForEquipmentChange(): void;
    /** Updates and renders the equipment sets */
    updateForEquipSetChange(): void;
    /** Function for equipping an item */
    equipItem(itemID: number, set: number, slot?: SlotTypes | 'Default', quantity?: number): boolean;
    /** Returns a callback function for unequipping an item from a slot*/
    unequipCallback(slot: SlotTypes): () => void;
    /** Function for unequipping an item from a slot */
    protected unequipItem(set: number, slot: SlotTypes): boolean;
    /** Equips the selected food from bank */
    equipFood(itemID: number, quantity: number, autoEquipped?: boolean): boolean | undefined;
    /** Unequips the player's currently selected food */
    unequipFood(): void;
    /** Changes the player's currently selected food */
    selectFood(slotID: number): void;
    /** Eats food */
    eatFood(quantity?: number, interrupt?: boolean, efficiency?: number): void;
    getFoodHealing(item: FoodItem): number;
    protected getFoodHealingBonus(item: FoodItem): number;
    protected interruptAttack(): void;
    /** Callback Function for clicking on a prayer */
    togglePrayer(prayerID: number, render?: boolean): void;
    toggleSpell(spellID: number, render?: boolean): void;
    toggleCurse(spellID: number, render?: boolean): void;
    toggleAurora(spellID: number, render?: boolean): void;
    toggleAncient(spellID: number, render?: boolean): void;
    protected consumePrayerPoints(amount: number): void;
    protected disableActivePrayers(): void;
    addPrayerPoints(amount: number): void;
    protected applyCostModifiersToPrayerCost(amount: number): number;
    protected applyPreservationToPrayerCost(amount: number): number;
    protected applyModifiersToPrayerCost(amount: number): number;
    protected computePrayerMaxCost(prayer: Prayer): number;
    protected renderPrayerPoints(): void;
    protected renderPrayerSelection(): void;
    /** Determines in the player can (un)equip an item currently */
    protected checkIfCantEquip(): boolean;
    protected computeEquipmentStats(): void;
    protected checkActiveSummon(slot: 'Summon1' | 'Summon2'): void;
    protected computeMeleeMaxHit(): number;
    protected computeRangedMaxHit(): number;
    protected computeMagicMaxHit(): number;
    protected computeSummonMaxHit(): void;
    protected computeAttackType(): void;
    private setAttackStyle;
    computeModifiers(): void;
    protected addAttackStyleModifiers(): void;
    protected addEquippedItemModifiers(): void;
    private computeTargetModifiers;
    protected bankConditionWatchLists: Map<ItemID, BankItemCondition[]>;
    protected gloveConditionWatchLists: Map<GloveID, GlovesCondition[]>;
    protected hitpointConditionWatchLists: Set<HitpointsCondition>;
    private computeConditionalWatchLists;
    protected addConditionalModifiers(): void;
    updateGloveConditionals(gloveID: GloveID): void;
    updateBankConditionals(itemID: ItemID): void;
    protected addPetModifiers(): void;
    protected addPrayerModifiers(): void;
    private addAgilityModifiers;
    private addPotionModifiers;
    protected addShopModifiers(): void;
    protected addMiscModifiers(): void;
    private addSummonSynergyModifiers;
    getSummoningIDs(): [number, number];
    /** Checks if a summoning synergy is active */
    isSynergyActive(summonID1: number, summonID2: number): boolean;
    consumeSummonCharge(summonID: number, charges?: number): boolean;
    protected removeSummonCharge(slot: 'Summon1' | 'Summon2', charges?: number): void;
    addCombatAreaEffectModifiers(): void;
    calculateAreaEffectValue(value: number): number;
    private addMiscSummoningModifiers;
    addTargetDotModifiers(): void;
    protected onTargetDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    protected onDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    protected onDOTApplication(type: DOTType): void;
    protected getMeleeDefenceBonus(): number;
    protected getRangedDefenceBonus(): number;
    protected getMagicDefenceBonus(): number;
    processDeath(): void;
    /** Removes an item from the player's equipment on death */
    protected applyDeathPenalty(): void;
    protected regen(): void;
    /** Renders the attack style selection menu */
    protected renderAttackStyle(): void;
    protected setAttackStyleButtonCallbacks(): void;
    protected renderHitpoints(): void;
    protected renderSlayercoins(): void;
    protected renderSummonMaxHit(): void;
    protected renderStats(): void;
    protected renderGP(): void;
    protected renderFood(): void;
    render(): void;
    protected renderAutoEat(): void;
    protected renderCombatTriangle(): void;
    protected renderSummonMarks(): void;
    /** Sets the sidebar to green when skills are active */
    protected renderActiveSkills(): void;
    protected renderActiveSkillPage(): void;
    protected renderEquipmentSets(): void;
    protected renderAttackIcon(): void;
    protected renderPotions(): void;
    protected renderSummonBar(): void;
    /** Rewards slayer coins for current target */
    rewardSlayerCoins(): void;
    addSlayerCoins(amount: number): void;
    removeSlayerCoins(amount: number, render?: boolean): void;
    addGP(amount: number): void;
    removeGP(amount: number): void;
    addXP(skill: number, amount: number): void;
    /** Rewards XP and rolls for pets */
    protected rewardXPAndPetsForDamage(damage: number): void;
    rollForSummoningMarks(skill: SkillID, interval: number): void;
    protected rewardCurrencyForDamage(damage: number): void;
    rewardGPForKill(): void;
    protected renderXP(): void;
    /** Consumes a potion charge */
    consumePotionCharge(type: PotionConsumption, page?: PageID): void;
    /** Non-rendering potion re-use */
    protected reusePotion(page: PageID): void;
    initializeForCombat(): void;
    stopFighting(): void;
    protected renderLevelUp(): void;
    renderCombatLevel(): void;
    /** Serializes the player object */
    serialize(): number[];
    /** Deserializes the player object */
    deserialize(reader: DataReader, version: number): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame): void;
}
interface PlayerHTMLElements extends RenderHTMLElements {
    navHitpoints: HTMLElement[];
    prayerPoints: HTMLElement[];
    navPrayerPoints: HTMLElement[];
    gp: HTMLElement[];
    combatLevel: HTMLElement[];
    specialIcon: HTMLImageElement;
    specialTooltip: TippyTooltip;
    autoEatIcons: HTMLElement[];
    autoEatTooltips: TippyTooltip[];
    triangleDamageIcons: HTMLElement[];
    triangleReductionIcon: HTMLElement;
    triangleDamageTooltips: TippyTooltip[];
    triangleReductionTooltip: TippyTooltip;
    golbinLevels: MapToElement<CombatLevels>;
}
declare type AttackStyleSelection = {
    melee: AttackStyle;
    ranged: AttackStyle;
    magic: AttackStyle;
};
interface PlayerRenderQueue extends RenderQueue {
    prayerPoints: boolean;
    prayerSelection: boolean;
    spellSelection: boolean;
    curseSelection: boolean;
    auroraSelection: boolean;
    ancientSelection: boolean;
    attackStyle: boolean;
    equipment: boolean;
    slayercoins: boolean;
    food: boolean;
    gp: boolean;
    xp: Set<SkillID>;
    level: Set<SkillID>;
    combatLevel: boolean;
    summonBar: boolean;
    potion: Set<PageID>;
    attacks: boolean;
    equipmentSets: boolean;
    activeSkills: boolean;
    summoningMarks: Set<number>;
    runesUsed: boolean;
    autoEat: boolean;
    combatTriangle: boolean;
    levels: boolean;
    activeSkillPage: boolean;
}
interface PlayerTimers extends CharacterTimers {
    summon: Timer;
}
declare type PotionConsumption = 'Regen' | 'Attack' | 'EnemyAttack' | 'HerbSeedDrop' | 'PrayerPointCost' | 'Skill';
