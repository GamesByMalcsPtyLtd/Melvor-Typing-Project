declare class PlayerCombatStats extends CharacterCombatStats {
    /** If the player can currently attack with summons */
    get canSummonAttack(): boolean;
    set canSummonAttack(value: boolean);
    get summoningMaxHit(): number;
    set summoningMaxHit(value: number);
    get barrierDamage(): number;
    set barrierDamage(value: number);
    _canSummonAttack: boolean;
    _summoningMaxHit: number;
    _barrierDamage: number;
    constructor(player: Player);
    getValueTable(): {
        name: string;
        value: number;
    }[];
}
declare type PlayerCombatEvents = {
    summonAttack: PlayerSummonAttackEvent;
    runesUsed: RuneConsumptionEvent;
    itemEquipped: ItemEquippedEvent;
    equipmentChanged: EquipmentChangedEvent;
    foodEquipped: FoodEquippedEvent;
    foodEaten: FoodEatenEvent;
    prayerPointsUsed: PrayerPointConsumptionEvent;
    summonTabletUsed: SummonTabletUsedEvent;
    soulPointsUsed: SoulPointConsumptionEvent;
} & CharacterCombatEvents;
declare class Player extends Character implements IGameEventEmitter<PlayerCombatEvents> {
    manager: BaseManager;
    _events: import("mitt").Emitter<PlayerCombatEvents>;
    on: {
        <Key extends "runesUsed" | "summonAttack" | "itemEquipped" | "equipmentChanged" | "foodEquipped" | "foodEaten" | "prayerPointsUsed" | "summonTabletUsed" | "soulPointsUsed" | keyof CharacterCombatEvents>(type: Key, handler: import("mitt").Handler<PlayerCombatEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<PlayerCombatEvents>): void;
    };
    off: {
        <Key extends "runesUsed" | "summonAttack" | "itemEquipped" | "equipmentChanged" | "foodEquipped" | "foodEaten" | "prayerPointsUsed" | "summonTabletUsed" | "soulPointsUsed" | keyof CharacterCombatEvents>(type: Key, handler?: import("mitt").Handler<PlayerCombatEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<PlayerCombatEvents>): void;
    };
    get type(): string;
    equipmentSets: EquipmentSet[];
    selectedEquipmentSet: number;
    /** Current multiplier for unholy prayer modifiers */
    unholyPrayerMultiplier: number;
    get activePrayers(): Set<ActivePrayer>;
    food: EquippedFood;
    timers: PlayerTimers;
    attackStyles: AttackStyleSelection;
    equipToSet: number;
    modifiers: PlayerModifierTable;
    runesProvided: Map<AnyItem, number>;
    prayerPoints: number;
    soulPoints: number;
    target: Character;
    stats: PlayerCombatStats;
    eatTimeout: number;
    allowToEatFromTimeout: boolean;
    renderQueue: PlayerRenderQueue;
    get statElements(): PlayerHTMLElements;
    get splashManager(): SplashManager;
    get effectRenderer(): EffectRenderer;
    get attackBar(): ProgressBarElement;
    get attackBarMinibar(): ProgressBarElement;
    get summonBar(): ProgressBarElement;
    get summonBarMinibar(): ProgressBarElement;
    activeItemSynergies: Set<ItemSynergy>;
    /** Currently active summoning synergy. Undefined if none active. */
    activeSummoningSynergy?: SummoningSynergy;
    get summonAttackInterval(): number;
    get equipment(): Equipment;
    /** Gets the equipment for the "Equip to Set" */
    get equipToSetEquipment(): Equipment;
    get spellSelection(): SpellSelection;
    get attackStyle(): AttackStyle | undefined;
    /** Player automatically eats below this HP */
    get autoEatThreshold(): number;
    /** Player automatically eats to this HP */
    get autoEatHPLimit(): number;
    /** Player automatically eats food at this efficiency */
    get autoEatEfficiency(): number;
    /** Returns a description of the current synergy */
    get synergyDescription(): string;
    get numEquipSets(): number;
    /** Modified max cost of all active prayers */
    get maxPrayerCost(): number;
    /** Modified max cost of all active prayers using soul points */
    get maxSoulPointCost(): number;
    _pets: number;
    get pets(): number;
    set pets(value: number);
    /** If the player should use combination runes for spellcasting */
    get useCombinationRunes(): boolean;
    get allowRegen(): boolean;
    get addItemsToBankOnLoadFail(): boolean;
    constructor(manager: BaseManager, game: Game);
    setDefaultEquipmentSets(): void;
    setDefaultAttackStyles(): void;
    setCallbacks(): void;
    setRenderAll(): void;
    activeTick(): void;
    baseSpawnInterval: number;
    getErrorLog(): string;
    queueNextAction(noSpec?: boolean, tickOffset?: boolean): void;
    getMonsterSpawnTime(): number;
    isEquipmentSlotUnlocked(slot: EquipmentSlot): boolean;
    /** Returns true if the given item is equipped in any equipment set */
    checkEquipmentSetsForItem(item: EquipmentItem): boolean;
    /** Checks and unequips items that the player does not meet the requirements for */
    checkEquipmentRequirements(): void;
    modifyResistance(damageType: DamageType, resistance: number): number;
    computePreConditionalStats(): void;
    computePostModifierStats(): void;
    computeCombatStats(): void;
    /** Resets the attack spell selection to the first valid spell that can be used with the current damage type */
    resetAttackSpell(): void;
    /** Checks the usage of combat spells and disables them if they are not usable */
    checkMagicUsage(): void;
    computeLevels(): void;
    computeAbyssalLevels(): void;
    getAccuracyValues(): BaseStatValues;
    computeAttackSelection(): void;
    mergeInheritedEffectApplicators(): void;
    mergeUninheritedEffectApplicators(): void;
    assignEffectApplicatorListeners(): void;
    getSlotAttacks(slot: EquippedItem): SpecialAttack[];
    computeRuneProvision(): void;
    rollToHit(target: Character, attack: SpecialAttack): boolean;
    damage(amount: number, source: SplashType, thieving?: boolean): void;
    addPrayerPointsBasedOnDamage(amount: number): void;
    addHitpoints(amount: number): void;
    setHitpoints(value: number): void;
    autoEat(foodSwapped?: boolean): void;
    getRuneCosts(spell: BaseSpell): AnyItemQuantity[];
    castCurseSpell(curse: CurseSpell): void;
    onMagicAttackFailure(): void;
    onRangedAttackFailure(quiver: EquipmentItem): void;
    rewardForDamage(damage: number): void;
    attack(target: Character, attack: SpecialAttack): number;
    lifesteal(attack: SpecialAttack, damage: number, flatBonus: number): number;
    /**
     * Provides rewards for when a summon attack deals damage
     * @param damage The damage dealt
     * @param isBarrier If the damage was dealt to barrier
     */
    rewardForSummonDamage(damage: number, isBarrier: boolean): void;
    /**
     * Applies combat triangle, modifiers and damage reduction to summoning attack damage
     * @param damage The base damage to modify
     * @param isBarrier If this summon attack is damaging barrier
     * @returns The modified damage
     */
    modifySummonAttackDamage(damage: number, isBarrier: boolean): number;
    /** Applies multiplicative and flat damage modifiers to summoning attack damage */
    applySummonDamageModifiers(damage: number, isBarrier: boolean): number;
    /** Clamps summoning attack damage to remaining barrier or hitpoints */
    clampSummonAttackDamage(damage: number, target: Character): number;
    summonAttack(): void;
    startSummonAttack(tickOffset?: boolean): void;
    postAttack(): void;
    onHit(): void;
    onBeingHit(): void;
    onMiss(): void;
    trackWeaponStat(stat: ItemStats, amount?: number): void;
    trackArmourStat(stat: ItemStats, amount?: number): void;
    addItemStat(item: AnyItem, stat: ItemStats, amount: number): void;
    consumeRunes(costs: AnyItemQuantity[]): void;
    /** Event Handler for item charge use */
    consumeItemCharges(e: GameEvent, item: EquipmentItem): void;
    /** Event Handler for item quantity use */
    consumeItemQuantities(e: GameEvent, equipped: EquippedItem): void;
    getConsumablePreservationChance(): number;
    /** Event Handler for bank item use */
    consumeBankItem(e: GameEvent, consumption: BankItemConsumption): void;
    /** Event Handler for Summoning Synergy tablet usage */
    consumeSynergyTablets(e: GameEvent): void;
    removeFromQuiver(qty?: number): void;
    consumeAmmo(): void;
    trackItemUsage(costs: AnyItemQuantity[]): void;
    getFlatReflectDamage(): number;
    applyDamageModifiers(target: Character, damage: number): number;
    applyTriangleToDamage(target: Character, damage: number): number;
    getDamageModifiers(target: Character): number;
    quickEquipItem(item: EquipmentItem, skill: AnySkill): void;
    equipCallback(item: EquipmentItem, slot: EquipmentSlot, quantity?: number): void;
    /** Attempts to quick equip the summons in a summoning synergy */
    quickEquipSynergy(synergy: SummoningSynergy): void;
    checkCompatibleWeaponDamageTypeInEquipmentSet(setID: number, notify?: boolean): boolean;
    /** Checks if the player can change to the defined equipment set */
    canChangeToEquipmentSet(setID: number, notify?: boolean): boolean;
    /** Callback function for changing equipment set */
    changeEquipmentSet(setID: number): void;
    changeEquipToSet(setID: number): void;
    /** Adds equipment sets based on the modifier value */
    updateEquipmentSets(): void;
    onUnequipFromQuantityUse(): void;
    /** Perform stat recalculation and ui update, interrupt current player action */
    updateForEquipmentChange(): void;
    /** Updates and renders the equipment sets */
    updateForEquipSetChange(): void;
    /** Checks if the monster is immune to the damage type of the item. */
    isCurrentMonsterImmuneToWeaponDamageType(item: WeaponItem, notify?: boolean): boolean;
    /** Checks if the monster is immune to the damage type of the item. */
    isMonsterImmuneToWeaponDamageType(item: WeaponItem, monster: Monster, notify?: boolean): boolean;
    /** Checks if the monster is immune to the damage type of the item. */
    isDamageTypeDisallowedInCurrentCombatArea(item: WeaponItem, notify?: boolean): boolean;
    /** Checks if the monster is immune to the damage type of the item. */
    isDamageTypeDisallowedInCombatArea(item: WeaponItem, area: AnyCombatArea, notify?: boolean): boolean;
    /** Checks if the monster is immune to the damage type of the item. */
    isEquipmentNeededInStronghold(item: EquipmentItem, area: Stronghold, tier: StrongholdTierName, notify?: boolean): boolean;
    /** Checks if the monster is immune to the damage type of the item. */
    isEquipmentAllowedInCombatArea(item: EquipmentItem, area: AnyCombatArea, notify?: boolean): boolean;
    /** Function for equipping an item */
    equipItem(item: EquipmentItem, set: number, slot?: EquipmentSlot, quantity?: number): boolean;
    /** Returns a callback function for unequipping an item from a slot*/
    unequipCallback(slot: EquipmentSlot): () => void;
    /** Function for unequipping an item from a slot */
    unequipItem(set: number, slot: EquipmentSlot): boolean;
    /**
     * Callback function for setting the quick equip item of a given slot
     * @param slot The slot to set the quick equip item
     * @param pos The quick equip position
     * @returns If the quick equip item was changed
     */
    setQuickEquipItem(slot: EquipmentSlot, pos: number): boolean;
    onQuickEquipClick(slot: EquipmentSlot, pos: number): void;
    /** The array of event unassigners for events that consume resources based on current equipment */
    equipmentEventUnassigners: VoidFunction[];
    assignEquipmentEventHandlers(): void;
    summoningSynergyEventUnassigners: VoidFunction[];
    assignSynergyEventHandlers(): void;
    /** Automatically equips the selected food, without taking it from the bank
     *  Will update the completion log and item statistics
     */
    autoEquipFood(item: FoodItem, quantity: number): boolean;
    /** Callback function for equipping the selected food from bank */
    equipFood(item: FoodItem, quantity: number): boolean | undefined;
    /** Unequips the player's currently selected food */
    unequipFood(): void;
    /** Changes the player's currently selected food */
    selectFood(slotID: number): void;
    /** Handles modifier changes when the players selected food item changes */
    onSelectedFoodChange(oldFood: FoodItem, newFood: FoodItem): void;
    /** Eats food */
    eatFood(quantity?: number, interrupt?: boolean, efficiency?: number): void;
    getFoodHealing(item: FoodItem): number;
    getFoodHealingBonus(item: FoodItem): number;
    startHoldToEat(): void;
    stopHoldToEat(): void;
    interruptAttack(): void;
    canEnablePrayer(prayer: ActivePrayer): boolean;
    /** Callback Function for clicking on a prayer */
    togglePrayer(prayer: ActivePrayer, render?: boolean): void;
    /** Checks if the player meets the requirements to use the currently selected prayers */
    checkPrayerUsage(): void;
    /**
     * Checks if a combat spell can be used by the player
     * @param spell The combat spell to check
     * @param ignoreReqs Whether to ignore requirements other than equipped item requirements
     * @returns If the spell can be used
     */
    canUseCombatSpell(spell: CombatSpell, ignoreReqs?: boolean): boolean;
    selectAttackSpell(spell: AttackSpell, render?: boolean): void;
    toggleCurse(spell: CurseSpell, render?: boolean): void;
    toggleAurora(spell: AuroraSpell, render?: boolean): void;
    consumePrayerPoints(amount: number, isUnholy: boolean): void;
    consumeSoulPoints(amount: number): void;
    disableActivePrayers(): void;
    addPrayerPoints(amount: number): void;
    addSoulPoints(amount: number): void;
    trackPrayerStats(stat: PrayerStats, amount: number): void;
    applyCostModifiersToPrayerCost(amount: number): number;
    applyCostModifiersToSoulPointCost(amount: number): number;
    applyPreservationToPrayerCost(amount: number, isUnholy: boolean): number;
    applyPreservationToSoulPointCost(amount: number): number;
    applyModifiersToPrayerCost(amount: number, isUnholy: boolean): number;
    applyModifiersToSoulPointCost(amount: number): number;
    computePrayerMaxCost(prayer: ActivePrayer): number;
    computeSoulPointMaxCost(prayer: ActivePrayer): number;
    renderPrayerPoints(): void;
    renderSoulPoints(): void;
    renderPrayerSelection(): void;
    renderAttackSpellSelection(): void;
    renderCurseSelection(): void;
    renderAuroraSelection(): void;
    renderRunesUsed(): void;
    /** Determines in the player can (un)equip an item currently */
    checkIfCantEquip(): boolean;
    /** Determines in the player can unequip an item currently */
    checkIfCanUnequipItem(item: EquipmentItem, notify?: boolean): boolean;
    /** Check for unequipping weapon which defaults to normal damage */
    checkIfCanUnequipWeapon(item: WeaponItem, notify?: boolean): boolean;
    /** Check for items that are needed in the stronghold (if player is in one) */
    checkIfEquipmentNeededInStronghold(item: EquipmentItem, notify?: boolean): boolean;
    computeEquipmentStats(): void;
    /** Calculates the Max HP stat */
    computeMaxHP(): void;
    computeMeleeMaxHit(): number;
    computeRangedMaxHit(): number;
    computeMagicMaxHit(): number;
    computeSummonMaxHit(): void;
    computeAttackType(): void;
    computeDamageType(): void;
    setAttackStyle(attackType: AttackType, style: AttackStyle): void;
    computeModifiers(): void;
    addInheretedModifiers(): void;
    addAoDSkillcapeInheretedModifiers(): void;
    inheritModifiersFromItem(source: EquipmentItem, itemID: string): void;
    addProviderModifiers(): void;
    addAttackStyleModifiers(): void;
    addPassiveModifiers(): void;
    addEquippedItemModifiers(): void;
    addSelectedFoodModifiers(): void;
    computeItemSynergies(): void;
    computeSummoningSynergy(): void;
    /** Adds all conditional modifiers that are active */
    addConditionalModifiers(): void;
    addPrayerModifiers(): void;
    addGamemodeModifiers(): void;
    addSummonSynergyModifiers(): void;
    get equippedSummoningSynergy(): SummoningSynergy | undefined;
    /** Gets the chance to preserve a summoning tablet */
    getSummoningTabletPreservationChance(item: EquipmentItem): number;
    /** Removes a quantity from the summoning familiar equipped in the slot, and rewards XP for it */
    removeSummonCharge(slotID: EquipmentSlotIDs.Summon1 | EquipmentSlotIDs.Summon2, interval: number): void;
    calculateAreaEffectValue(value: number, realm: Realm): number;
    updateUnholyPrayerMultiplier(newMultiplier: number): void;
    getMeleeDefenceBonus(): number;
    getRangedDefenceBonus(): number;
    getMagicDefenceBonus(): number;
    processDeath(): void;
    getAccuracyModifier(): number;
    getEvasionModifiers(): Evasion<number>;
    getMaxHitModifier(): number;
    getMinHitFromMaxHitPercent(): number;
    /** Removes an item from the player's equipment on death */
    applyDeathPenalty(): void;
    regen(): void;
    renderStats(): void;
    /** Renders the attack style selection menu */
    renderAttackStyle(): void;
    setAttackStyleButtonCallbacks(): void;
    renderHitchance(): void;
    renderHitpoints(): void;
    renderSummonMaxHit(): void;
    renderDamageValues(): void;
    renderNormalDamage(minHit: string, maxHit: string): void;
    renderFood(): void;
    render(): void;
    renderAutoEat(): void;
    renderCombatTriangle(): void;
    getExperienceGainSkills(): AnySkill[];
    /** Renders changes in the UI due to mutations in player modifiers */
    renderActiveSkillModifiers(): void;
    renderEquipment(): void;
    renderItemCharges(): void;
    renderEquipmentSets(): void;
    renderAttackIcon(): void;
    renderSummonBar(): void;
    /** Rewards XP and rolls for pets */
    rewardXPAndPetsForDamage(damage: number): void;
    rollForSummoningMarks(skill: AnySkill, interval: number): void;
    rewardCurrencyForSummonDamage(damage: number, isBarrierDmg: boolean): void;
    rewardXPForSummonBarrierDamage(damage: number): void;
    rewardCurrencyForDamage(damage: number): void;
    rewardForKill(): void;
    rewardCurrencyForKill(): void;
    rewardPrayerPointsForKill(): void;
    initializeForCombat(): void;
    stopFighting(): void;
    renderCombatLevel(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeQuickEquip(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame, idMap: NumericIDMap): void;
}
interface PlayerHTMLElements extends RenderHTMLElements {
    navHitpoints: HTMLElement[];
    navPrayerPoints: HTMLElement[];
    combatLevel: HTMLElement[];
    specialIcon: HTMLImageElement;
    specialTooltip: TippyTooltip;
    autoEatIcons: HTMLElement[];
    autoEatSpans: HTMLElement[];
    autoEatTooltips: TippyTooltip[];
    golbinLevels: MapToElement<CombatLevels>;
}
declare type AttackStyleSelection = {
    melee?: AttackStyle;
    ranged?: AttackStyle;
    magic?: AttackStyle;
};
declare class PlayerRenderQueue extends CharacterRenderQueue {
    prayerPoints: boolean;
    prayerSelection: boolean;
    attackSpellSelection: boolean;
    curseSelection: boolean;
    auroraSelection: boolean;
    attackStyle: boolean;
    equipment: boolean;
    food: boolean;
    combatLevel: boolean;
    summonBar: boolean;
    summonBarMinibar: boolean;
    attacks: boolean;
    equipmentSets: boolean;
    runesUsed: boolean;
    autoEat: boolean;
    combatTriangle: boolean;
    levels: boolean;
    activeSkillModifierChange: boolean;
    soulPoints: boolean;
}
interface PlayerTimers extends CharacterTimers {
    summon: Timer;
}
