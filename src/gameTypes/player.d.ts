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
    equipmentSets: EquipmentSet[];
    selectedEquipmentSet: number;
    get activePrayers(): Set<ActivePrayer>;
    food: EquippedFood;
    protected timers: PlayerTimers;
    private attackStyles;
    equipToSet: number;
    modifiers: PlayerModifiers;
    noun: Noun;
    runesProvided: Map<AnyItem, number>;
    prayerPoints: number;
    target: Character;
    stats: PlayerStats;
    private eatTimeout;
    allowToEatFromTimeout: boolean;
    quickEquipMenu: CombatQuickEquipMenu;
    rendersRequired: PlayerRenderQueue;
    protected get activeTriangle(): TriangleData;
    protected get statElements(): PlayerHTMLElements;
    protected get splashManager(): SplashManager;
    protected get effectRenderer(): EffectRenderer;
    protected get attackBar(): ProgressBar;
    protected get attackBarMinibar(): ProgressBar;
    protected activeSummonSlots: ('Summon1' | 'Summon2')[];
    protected statProviders: Set<StatProvider>;
    activeItemSynergies: Set<ItemSynergy>;
    /** Currently active summoning synergy. Undefined if none active. */
    protected activeSummoningSynergy?: SummoningSynergy;
    chargesUsed: {
        Summon1: number;
        Summon2: number;
    };
    private summonAttackInterval;
    private itemEffects;
    get equipment(): Equipment;
    get spellSelection(): SpellSelection;
    protected get attackStyle(): AttackStyle | undefined;
    /** Player automatically eats below this HP */
    protected get autoEatThreshold(): number;
    /** Player automatically eats to this HP */
    protected get autoEatHPLimit(): number;
    /** Player automatically eats food at this efficiency */
    protected get autoEatEfficiency(): number;
    protected get minHitFromMaxHitPercent(): number;
    /** Returns a description of the current synergy */
    get synergyDescription(): string;
    get numEquipSets(): number;
    /** Modified max cost of all active prayers */
    private get maxPrayerCost();
    private _pets;
    get pets(): number;
    set pets(value: number);
    get bigOlRonModifiers(): PlayerModifierObject;
    /** If the player should use combination runes for spellcasting */
    protected get useCombinationRunes(): boolean;
    protected get allowRegen(): boolean;
    protected get addItemsToBankOnLoadFail(): boolean;
    constructor(manager: BaseManager, game: Game);
    setDefaultAttackStyles(): void;
    setCallbacks(): void;
    initialize(): void;
    registerStatProvider(provider: StatProvider): void;
    setRenderAll(): void;
    activeTick(): void;
    protected baseSpawnInterval: number;
    getErrorLog(): string;
    getMonsterSpawnTime(): number;
    isEquipmentSlotUnlocked(slot: SlotTypes): boolean;
    /** Returns true if the given item is equipped in any equipment set */
    checkEquipmentSetsForItem(item: EquipmentItem): boolean;
    /** Checks and unequips items that the player does not meet the requirements for */
    checkEquipmentRequirements(): void;
    protected modifyDamageReduction(reduction: number): number;
    computeAllStats(): void;
    computeCombatStats(): void;
    private computeItemEffectList;
    /** Applies all item effects to the player */
    private applyItemEffects;
    /** Checks all item effects, removing or adding them as needed */
    private checkItemEffects;
    /** Resets the primary spell selection to Wind Strike */
    private resetPrimarySpell;
    /** Checks the usage of combat spells and disables them if they are not usable */
    protected checkMagicUsage(): void;
    protected computeLevels(): void;
    protected getAccuracyValues(): BaseStatValues;
    protected computeAttackSelection(): void;
    protected getSlotAttacks(slot: EquipSlot): SpecialAttack[];
    protected computeRuneProvision(): void;
    protected rollToHit(target: Character, attack: SpecialAttack): boolean;
    damage(amount: number, source: SplashType, thieving?: boolean): void;
    protected addPrayerPointsBasedOnDamage(amount: number): void;
    protected addHitpoints(amount: number): void;
    setHitpoints(value: number): void;
    protected updateHPConditionals(computeStats?: boolean): void;
    protected autoEat(foodSwapped?: boolean): void;
    getRuneCosts(spell: BaseSpell): AnyItemQuantity[];
    protected castCurseSpell(target: Character, curse: CurseSpell): void;
    protected onMagicAttackFailure(): void;
    protected onRangedAttackFailure(quiver: EquipmentItem): void;
    protected rewardForDamage(damage: number): void;
    protected attack(target: Character, attack: SpecialAttack): number;
    protected lifesteal(attack: SpecialAttack, damage: number): number;
    protected rewardForSummonDamage(damage: number): void;
    protected summonAttack(): void;
    startSummonAttack(tickOffset?: boolean): void;
    protected postAttack(attack: SpecialAttack, attackType: AttackType): void;
    protected onHit(): void;
    protected onBeingHit(): void;
    protected applyOnBeingHitEffects(): void;
    protected onMiss(): void;
    trackWeaponStat(stat: ItemStats, amount?: number): void;
    protected trackArmourStat(stat: ItemStats, amount?: number): void;
    protected addItemStat(item: AnyItem, stat: ItemStats, amount: number): void;
    protected consumeRunes(costs: AnyItemQuantity[]): void;
    consumeEquipmentCharges(event: GameEvent, interval: number): void;
    private removeFromQuiver;
    private removeFromConsumable;
    protected consumeAmmo(): void;
    protected trackItemUsage(costs: AnyItemQuantity[]): void;
    protected applyDOT(effect: DOTEffect, target: Character, damageDealt: number): boolean;
    protected getFlatReflectDamage(): number;
    protected applyDamageModifiers(target: Character, damage: number): number;
    protected applyTriangleToDamage(target: Character, damage: number): number;
    protected getDamageModifiers(target: Character): number;
    quickEquipItem(item: EquipmentItem, skill: AnySkill): void;
    equipCallback(item: EquipmentItem, slot: SlotTypes, quantity?: number): void;
    /** Attempts to quick equip the summons in a summoning synergy */
    quickEquipSynergy(synergy: SummoningSynergy): void;
    /** Callback function for changing equipment set */
    changeEquipmentSet(setID: number): void;
    changeEquipToSet(setID: number): void;
    /** Adds equipment sets based on the modifier value */
    protected updateEquipmentSets(): void;
    /** Perform stat recalculation and ui update, interrupt current player action */
    updateForEquipmentChange(): void;
    /** Updates and renders the equipment sets */
    updateForEquipSetChange(): void;
    /** Function for equipping an item */
    equipItem(item: EquipmentItem, set: number, slot?: SlotTypes | 'Default', quantity?: number): boolean;
    /** Returns a callback function for unequipping an item from a slot*/
    unequipCallback(slot: SlotTypes): () => void;
    /** Function for unequipping an item from a slot */
    protected unequipItem(set: number, slot: SlotTypes): boolean;
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
    /** Eats food */
    eatFood(quantity?: number, interrupt?: boolean, efficiency?: number): void;
    getFoodHealing(item: FoodItem): number;
    protected getFoodHealingBonus(item: FoodItem): number;
    startHoldToEat(): void;
    stopHoldToEat(): void;
    protected interruptAttack(): void;
    /** Callback Function for clicking on a prayer */
    togglePrayer(prayer: ActivePrayer, render?: boolean): void;
    toggleSpell(spell: StandardSpell, render?: boolean): void;
    toggleCurse(spell: CurseSpell, render?: boolean): void;
    toggleAurora(spell: AuroraSpell, render?: boolean): void;
    toggleAncient(spell: AncientSpell, render?: boolean): void;
    toggleArchaic(spell: ArchaicSpell, render?: boolean): void;
    protected consumePrayerPoints(amount: number): void;
    protected disableActivePrayers(): void;
    addPrayerPoints(amount: number): void;
    protected trackPrayerStats(stat: PrayerStats, amount: number): void;
    protected applyCostModifiersToPrayerCost(amount: number): number;
    protected applyPreservationToPrayerCost(amount: number): number;
    protected applyModifiersToPrayerCost(amount: number): number;
    protected computePrayerMaxCost(prayer: ActivePrayer): number;
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
    protected addProviderModifiers(): void;
    protected addAttackStyleModifiers(): void;
    protected addEquippedItemModifiers(): void;
    protected computeTargetModifiers(): void;
    private computeItemSynergies;
    private computeSummoningSynergy;
    protected conditionalListeners: Record<ConditionHooks | 'All', Set<ConditionalModifier>>;
    private checkStatCompareCondition;
    private checkCondition;
    /** Updates all registered conditional modifiers with the given hook */
    updateConditionals(hook: ConditionHooks | 'All', computeStats: boolean, computeTargetStats: boolean): void;
    private registerConditionalListeners;
    private computeConditionalListeners;
    /** Adds all conditional modifiers except for HP hooked ones */
    protected addConditionalModifiers(): void;
    /** Adds all enemy conditional modifiers except for HP hooked ones */
    protected addConditionalTargetModifiers(): void;
    protected addPrayerModifiers(): void;
    protected addMiscModifiers(): void;
    protected addGamemodeModifiers(): void;
    private addSummonSynergyModifiers;
    get equippedSummoningSynergy(): SummoningSynergy | undefined;
    /** Removes a quantity from the summoning familiar equipped in the slot, and rewards XP for it */
    protected removeSummonCharge(slot: 'Summon1' | 'Summon2', interval: number): void;
    addCombatAreaEffectModifiers(): void;
    calculateAreaEffectValue(value: number): number;
    private addMiscSummoningModifiers;
    protected onDOTApplication(type: DOTType): void;
    protected onDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    protected onTargetDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    protected onModifierEffectApplication(): void;
    protected onModifierEffectRemoval(): void;
    protected onTargetModifierEffectRemoval(): void;
    protected onTargetModifierEffectApplication(): void;
    protected onApplyingStun(target: Character): void;
    protected onBeingStunned(): void;
    protected onStunRemoval(): void;
    protected onTargetStunRemoval(): void;
    protected onApplyingSleep(target: Character): void;
    protected onBeingSlept(): void;
    protected onSleepRemoval(): void;
    protected onTargetSleepRemoval(): void;
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
    protected renderSummonMaxHit(): void;
    protected renderStats(): void;
    protected renderFood(): void;
    render(): void;
    protected renderAutoEat(): void;
    protected renderCombatTriangle(): void;
    getExperienceGainSkills(): AnySkill[];
    /** Updates for when the modifiers of a skill are changed based on the current page */
    protected renderActiveSkillModifiers(): void;
    protected renderEquipmentSets(): void;
    protected renderAttackIcon(): void;
    protected renderSummonBar(): void;
    /** Rewards slayer coins for current target */
    rewardSlayerCoins(): void;
    /** Rewards XP and rolls for pets */
    protected rewardXPAndPetsForDamage(damage: number): void;
    rollForSummoningMarks(skill: AnySkill, interval: number): void;
    protected rewardCurrencyForSummonDamage(damage: number): void;
    protected rewardCurrencyForDamage(damage: number): void;
    rewardGPForKill(): void;
    /** Processes game events relating to combat. Exists for golbin raid override */
    protected processCombatEvent(event: GameEvent, interval?: number): void;
    /** For specific player only spawn effects */
    applyUniqueSpawnEffects(): void;
    initializeForCombat(): void;
    stopFighting(): void;
    renderCombatLevel(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame, idMap: NumericIDMap): void;
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
    melee?: AttackStyle;
    ranged?: AttackStyle;
    magic?: AttackStyle;
};
interface PlayerRenderQueue extends RenderQueue {
    prayerPoints: boolean;
    prayerSelection: boolean;
    spellSelection: boolean;
    curseSelection: boolean;
    auroraSelection: boolean;
    ancientSelection: boolean;
    archaicSelection: boolean;
    attackStyle: boolean;
    equipment: boolean;
    food: boolean;
    combatLevel: boolean;
    summonBar: boolean;
    attacks: boolean;
    equipmentSets: boolean;
    runesUsed: boolean;
    autoEat: boolean;
    combatTriangle: boolean;
    levels: boolean;
    activeSkillModifierChange: boolean;
}
interface PlayerTimers extends CharacterTimers {
    summon: Timer;
}
