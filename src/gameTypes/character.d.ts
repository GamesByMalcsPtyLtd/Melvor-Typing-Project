declare type CharacterCombatEvents = {
    attack: CharacterAttackEvent;
    hitpointRegen: HitpointRegenerationEvent;
    endOfTurn: CharacterEndOfTurnEvent;
    preAttack: CharacterAttackEvent;
    hitWithAttack: CharacterAttackEvent;
    missedWithAttack: CharacterAttackEvent;
    beingAttacked: CharacterAttackedEvent;
    hitByAttack: CharacterAttackedEvent;
    evadedAttack: CharacterAttackedEvent;
    wasAttacked: CharacterAttackedEvent;
    rebirth: CharacterRebirthEvent;
    effectApplied: CharacterEffectAppliedEvent;
    effectRemoved: CharacterEffectRemovedEvent;
    effectGroupApplied: CharacterEffectGroupAppliedEvent;
    effectGroupRemoved: CharacterEffectGroupRemovedEvent;
    /** Fires when the current or maximum hitpoints of a character changes */
    hitpointsChanged: HitpointsChangedEvent;
    /** Fires when the current or maximum barrier of a character changes */
    barrierChanged: BarrierChangedEvent;
};
declare abstract class Character implements EncodableObject, Serializable, INoWildCardGameEventEmitter<CharacterCombatEvents> {
    manager: BaseManager;
    game: Game;
    abstract _events: Pick<Emitter<CharacterCombatEvents>, 'emit'>;
    abstract on<Key extends keyof CharacterCombatEvents>(type: Key, handler: Handler<CharacterCombatEvents[Key]>): void;
    abstract off<Key extends keyof CharacterCombatEvents>(type: Key, handler: Handler<CharacterCombatEvents[Key]>): void;
    abstract readonly type: string;
    hitpoints: number;
    /** Effect applicators that have been merged with this character, and need to be processed as the "applyEffectWhenMerged" property is true */
    effectApplicatorsToProcess: CombatEffectApplicator[];
    effectApplicators: Map<CombatEffectApplicationTrigger, CombatEffectApplicator[]>;
    /** Stores a count of the number of active combat effects that belong to each group id */
    activeEffectGroups: SparseNumericMap<string>;
    /** Stores all CombatEffects that are active on this character */
    activeEffects: Map<CombatEffect, ActiveCombatEffect>;
    /** All timers for active effects that are currently started. */
    activeEffectTimers: Set<Timer>;
    /** Returns if the Character has an active effect belonging to the Curse group */
    get isCursed(): boolean;
    /** Returns if the Character has an active effect belonging to the Sleep group */
    get isSleeping(): boolean;
    /** Returns if the character has an active effect belonging to the StunLike group */
    get isStunned(): boolean;
    /** Returns if the character has an active effect belonging to the Crystallize group */
    get isCrystallized(): boolean;
    /** Returns if the character has an active effect belonging to the Freeze group */
    get isFrozen(): boolean;
    /** Returns if the character has an active effect belonging to the Slow group */
    get isSlowed(): boolean;
    /** Returns if the character has an active effect belonging to the BurnDOT group */
    get isBurning(): boolean;
    /** Returns if the character has an active effect belonging to the BleedDOT group */
    get isBleeding(): boolean;
    /** Returns if the character has an active effect belonging to the PoisonDOT group */
    get isPoisoned(): boolean;
    /** Returns if the character has an active effect belonging to the Corruption group */
    get isCorrupted(): boolean;
    /** Returns if the character has an active effect belonging to the Blight group */
    get isBlighted(): boolean;
    /** Returns if the character has an active effect belonging to the AblazeDOT group */
    get isAblaze(): boolean;
    /** Returns if the character has an active effect belonging to the ToxinDOT group */
    get isToxined(): boolean;
    /** Returns the number of effects belonging to the Debuff group that are active on this character */
    get debuffCount(): number;
    /** Returns the total number of CombatEffects that are active on the character */
    get activeEffectCount(): number;
    /** If this character is considered to be a boss. */
    isBoss: boolean;
    nextAction: ActionType;
    attackCount: number;
    nextAttack: SpecialAttack;
    /** Controls if the character is performing hits in a multi-hit attack */
    isAttacking: boolean;
    /** True if first hit of attack has not occurred */
    firstHit: boolean;
    /** True if the first miss of an attack has not occured */
    firstMiss: boolean;
    /** The amount of Barrier remaining */
    barrier: number;
    /** The amount of Barrier remaining */
    maxBarrierPercent: number;
    barrierTurns: number;
    hasBarrier: boolean;
    timers: CharacterTimers;
    /** Stores additional hitpoints that will be regenerated on the next HP regen proc */
    bufferedRegen: number;
    target: Character;
    abstract spellSelection: SpellSelection;
    equipmentStats: EquipmentStats;
    /** Combat levels of character including hidden levels */
    levels: CombatLevels;
    /** Abyssal levels of character including hidden levels. Mainly used for Player-related functions that require abyssal level to be included in the calcs. */
    abyssalLevels: CombatLevels;
    /** Current Combat Stats */
    stats: CharacterCombatStats;
    attackType: AttackType;
    /** The default damage type for the character */
    damageType: DamageType;
    availableAttacks: AttackSelection[];
    /** The modifiers that are currently active on this character */
    abstract modifiers: CharacterModifierTable;
    canCurse: boolean;
    canAurora: boolean;
    abstract effectRenderer: EffectRenderer;
    abstract statElements: RenderHTMLElements;
    abstract splashManager: SplashManager;
    abstract attackBar: ProgressBarElement;
    abstract attackBarMinibar: ProgressBarElement;
    /** Stores state of things that require re-rendering */
    abstract renderQueue: CharacterRenderQueue;
    /** Turns taken in the current fight */
    turnsTaken: number;
    get hitpointsPercent(): number;
    get barrierPercent(): number;
    /** If this character cannot benefit from max hit/damage modifiers */
    get cantUseDamageModifiers(): boolean;
    /** If this character is currently using a spell that only has one special attack */
    get isUsingSpecialAttackSpell(): boolean;
    get isBarrierActive(): boolean;
    readonly BASE_REGEN_INTERVAL = 10000;
    readonly MIN_REGEN_INTERVAL = 2500;
    get hpRegenInterval(): number;
    isFightingTypeVsType(thisType: AttackType, targetType: AttackType): boolean;
    static readonly numberExprTranspiler: IExprTranspiler<(character: Character) => number>;
    /** Baseclass for Enemy, Player and Golbin */
    constructor(manager: BaseManager, game: Game);
    actOnClick(): void;
    /** Resets all properties of this class, preparing it for an enemy spawn */
    resetForSpawning(): void;
    setDefaultSpells(): void;
    /** Sets all renders required to true */
    setRenderAll(): void;
    /** Performs stat updates for when an enemy spawns, or a fight ends */
    initializeForCombat(): void;
    /** Stops timers and sets stats to update */
    stopFighting(): void;
    /** Computes the attack interval */
    computeAttackInterval(): void;
    /** Calculates the Min Hit stat */
    computeMinHit(): void;
    /** Calculates the Max HP stat */
    computeMaxHP(): void;
    /** Sets barrier to a given value */
    setBarrier(value: number): void;
    /** Calculates the Max Barrier stat */
    computeMaxBarrier(): void;
    /** Calculates base accuracy stat */
    computeAccuracy(): void;
    /** Gets the values to use in the accuracy calculation */
    abstract getAccuracyValues(): BaseStatValues;
    /** Calculates base max hit stat */
    computeMaxHit(): void;
    /** Calculates the max hit of the character for melee */
    computeMeleeMaxHit(): number;
    /** Calculates the max hit of the character for ranged */
    computeRangedMaxHit(): number;
    /** Calculates the max hit of the character for magic */
    computeMagicMaxHit(): number;
    /** Calculates base evasion stats */
    computeEvasion(): void;
    getMeleeDefenceBonus(): number;
    getRangedDefenceBonus(): number;
    getMagicDefenceBonus(): number;
    /** Calculates base resistances */
    computeAllResistances(): void;
    computeResistance(damageType: DamageType): void;
    /** Standard Stat calculation for accuracy and evasion */
    static calculateStandardStat(values: BaseStatValues): number;
    /** Standard MaxHit calculation for Melee and Ranged */
    static calculateStandardMaxHit(baseLevel: number, strengthBonus: number): number;
    spellModifierQuery: ModifierQuery;
    computeSpellModifierQuery(): void;
    readonly selfModifierQuery: ModifierQuery;
    /** Gets the percent modifier to accuracy rating */
    getAccuracyModifier(): number;
    /** Applies modifiers to accuracy rating */
    modifyAccuracy(accuracy: number): number;
    /** Gets the modifiers for each evasion type */
    getEvasionModifiers(): Evasion<number>;
    /** Applies modifiers to evasion rating */
    modifyEvasion(evasion: Evasion<number>): void;
    /** Applies modifiers to max hit */
    modifyMaxHit(maxHit: number): number;
    getFlatMaxHitModifier(): number;
    getMaxHitModifier(): number;
    getMinHitFromMaxHitPercent(): number;
    /** Applies modifiers to min hit */
    modifyMinHit(minHit: number): number;
    /** Applies modifiers to max hp */
    modifyMaxHP(maxHP: number): number;
    /** Applies modifiers to attack interval */
    modifyAttackInterval(attackInterval: number): number;
    /** Modifies the specified resistance */
    modifyResistance(damageType: DamageType, resistance: number): number;
    /** Modified normal damage reduction
     * @deprecated Use modifyResistance instead
     */
    modifyDamageReduction(reduction: number): number;
    /** Computes all stats that should be computed before conditional modifiers are calculated */
    computePreConditionalStats(): void;
    /** Computes all modifiers and combat effects, excluding area-effects */
    computeModifiersAndEffects(): void;
    /** Computes all stats that should be computed after modifiers have been calculated */
    computePostModifierStats(): void;
    /** Performs a calculation of currentStats property */
    computeCombatStats(): void;
    computeHitchance(): void;
    canDamageBarrier(source: SplashType): boolean;
    /** Deals damage to self */
    damage(amount: number, source: SplashType): void;
    /** Heals self, returns healing amount */
    heal(amount: number): number;
    addHitpoints(amount: number): void;
    damageBarrier(amount: number, source: SplashType): void;
    addBarrier(amount: number): void;
    /** Actions to perform when Barrier is removed */
    onBarrierRemoval(): void;
    /** Sets hitpoints to a given value */
    setHitpoints(value: number): void;
    /**
     * Determines if this character is immune to the attacks/effects from another. Checks for attack type and damage type immunities
     * @param attacker The character that is attacking or processing effects
     * @returns If this character is immune to attacks/effects
     */
    isImmuneTo(attacker: Character): boolean;
    fireMissSplash(immune: boolean): void;
    /**
     * Merges (adds) an effect applicator to this character. Matching applicators will have their chances added together.
     * @param applicator The applicator to merge
     * @param mult Optional multiplier to apply to the applicator's chances
     */
    mergeEffectApplicator(applicator: CombatEffectApplicator, mult?: number): void;
    /**
     * Splits (removes) an effect applicator from this character.
     * @param applicator The applicator to split
     * @param mult Optional multiplier to apply to the applicators chances
     */
    splitEffectApplicator(applicator: CombatEffectApplicator, mult?: number): void;
    /**
     * Merges (adds) an array of effect applicators onto this character. Matching applicators will have their chances added together.
     * @param applicators The array of applicators to merge
     * @param mult Optional multiplier to apply to the applicators' chances
     */
    mergeEffectApplicators(applicators: CombatEffectApplicator[], mult?: number): void;
    /**
     * Splits (removes) an array of effect applicators from this character.
     * @param applicators The array of applicators to split
     * @param mult Optional multiplier to apply to the applicators' chances
     */
    splitEffectApplicators(applicators: CombatEffectApplicator[], mult?: number): void;
    /** Listener for when the appropriate effect application trigger event occurs. */
    onEffectApplicatorTrigger(trigger: CombatEffectApplicationTrigger, source: CombatEffectSource): void;
    /** Assigns event handlers for processing effect applicators that have been merged with this character */
    assignEffectApplicatorListeners(): void;
    /** Returns the percent chance that this character is immune to an effect */
    getEffectIgnoreChance(effect: CombatEffect): number;
    /** Applies a combat effect to this character */
    applyCombatEffect(effect: CombatEffect, sourceCharacter: Character, source: CombatEffectSource, initialParams?: Record<string, number>): void;
    /** Computes the net chance to apply a CombatEffect */
    getEffectApplicatorChance(applicator: CombatEffectApplicator, source: CombatEffectSource): number;
    checkEffectApplicatorCondition(condition: CombatEffectApplicatorCondition, source: CombatEffectSource): boolean;
    /** Processes a combat effect, and applies it to the appropriate character via this one */
    processEffectApplicator(applicator: CombatEffectApplicator, source: CombatEffectSource): void;
    /** Processes an array of combat effects, applying them to the appropriate characters via this one */
    processEffectApplicators(applicators: CombatEffectApplicator[], source: CombatEffectSource): void;
    /** Removes a combat effect from this Character */
    removeCombatEffect(effect: CombatEffect): void;
    initializeEffects(): void;
    clampDamageValue(damage: number, target: Character): number;
    /** Perform an attack against a target */
    attack(target: Character, attack: SpecialAttack): number;
    /** Computes the flat bonus to attack damage. Applied directly after computing the base damage from an attack. */
    getFlatAttackDamageBonus(target: Character): number;
    /** Computes the flat bonus to normal attack damage. Applied directly after computing the base damage from an attack. */
    getNormalFlatAttackDamageBonus(target: Character): number;
    /** Computes the flat bonus to abyssal attack damage. Applied directly after computing the base damage from an attack. */
    getAbyssalFlatAttackDamageBonus(target: Character): number;
    /**
     * Modifies the damage dealt by an attack by damage modifiers and damage reduction
     * @param target The character being attacked
     * @param attack The attack being performed
     * @param damage The raw damage dealt
     * @param applyReduction If damage reduction should be applied. Defaults to true
     * @returns The modified attack damage
     */
    modifyAttackDamage(target: Character, attack: SpecialAttack, damage: number, applyReduction?: boolean): number;
    /** Returns the maximum damage an attack can do in a single hit, accounting for all modifiers */
    getAttackMaxDamage(attack: SpecialAttack): number;
    /** Computes the flat bonus to lifesteal from attacks. Computed before the attacks damage is performed. */
    getFlatLifestealBonus(target: Character): number;
    /** Gets the current modifier to lifesteal from attacks */
    getAttackLifestealModifier(): number;
    /** Performs lifesteal from attack damage. Returns the true amount healed. */
    lifesteal(attack: SpecialAttack, damage: number, flatBonus: number): number;
    /** Method called after being attacked */
    abstract postAttack(): void;
    /** Method called when hitting attack */
    abstract onHit(): void;
    /** Method called when hit by an attack */
    onBeingHit(): void;
    /** Method called when missing attack */
    abstract onMiss(): void;
    rollToHit(target: Character, attack: SpecialAttack): boolean;
    addAuroraModifiers(): void;
    /** Adds modifiers from active effects */
    addEffectModifiers(): void;
    /** Adds modifiers provided by the current gamemode */
    abstract addGamemodeModifiers(): void;
    /** Gets the modifier to damage taken by this character */
    getDamageTakenModifier(): number;
    /** Gets the modifier to damage dealt by this character to a target character */
    getDamageDealtModifier(): number;
    /** Gets the damage modifiers for the character */
    getDamageModifiers(target: Character): number;
    /** Reduces a damage array using this character as the Attacker and this character's target as the Target */
    reduceDamage(damage: Damage[], damageDealt?: number, damageTaken?: number): number;
    applyDamageModifiers(target: Character, damage: number): number;
    modifyDamageDealt(damage: number): number;
    /** Gets the modifier to the amount of DOT damage taken by this character */
    getDotDamageModifier(type: DOTType): number;
    /** Removes every effect from the character. Only occurs when this character dies. */
    removeAllEffects(): void;
    /** Attempts to cast the curse spell on this character's target. May contain rune costs. */
    castCurseSpell(curse: CurseSpell): void;
    /** Ticks regen, and effect timers */
    passiveTick(): void;
    /** Ticks action and summons */
    activeTick(): void;
    getErrorLog(): string;
    /** If thie character's attack method was interrupted */
    attackInterrupted: boolean;
    /** If this character is currently processing code inside of the attack method */
    inAttack: boolean;
    /** Performs an action: E.g. Sleep/Stun/Attack */
    act(): void;
    /** Adds a timer to the set of timers that should be ticked on this character's passive tick */
    addCombatEffectTimer(timer: Timer): void;
    /** Removes a timer from the set of timers that should be ticked on this character's passive tick */
    removeCombatEffectTimer(timer: Timer): void;
    /** Interrupts the current action of the character, resetting their attack bar, and cancelling multi-hit special attacks */
    interruptAction(): void;
    /** Queues up the next action to perform. Will interrupt current action if called */
    queueNextAction(noSpec?: boolean, tickOffset?: boolean): void;
    isAttackAlreadyActive(attack: SpecialAttack): boolean;
    isEffectApplicatorApplied(applicator: AnyCombatEffectApplicator): boolean;
    /** Checks if a combat effect is active on this character */
    isEffectActive(effect: CombatEffect): boolean;
    /** Checks if a combat effect group is active on this character */
    isEffectGroupActive(group: CombatEffectGroup): boolean;
    /** Renders the character's current stats */
    renderStats(): void;
    renderDamageValues(): void;
    abstract renderNormalDamage(minHit: string, maxHit: string): void;
    formatNormalAttackDamage(damage: number): string;
    /** Updates the hitchance display */
    abstract renderHitchance(): void;
    /** Updates all hitpoint numbers and bars */
    renderHitpoints(): void;
    /** Updates all barrier numbers and bars */
    renderBarrier(): void;
    /** Processes the damage splash queue and renders them all */
    renderDamageSplashes(): void;
    renderEffects(): void;
    renderAttackBar(): void;
    render(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Skips old effects data for Reflexive, reductive and incremental effects */
    skipReflexiveLikeData(reader: SaveWriter, version: number): void;
    encodeActiveEffects(writer: SaveWriter): void;
    decodeActiveEffects(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Calculates the equipment stats of the character */
    abstract computeEquipmentStats(): void;
    /** Applies regeneration to the character */
    abstract regen(): void;
    /** Processes the death of character */
    abstract processDeath(): void;
    /** Computes and sets the combat levels of the character */
    abstract computeLevels(): void;
    /** Computes and sets the abyssal combat levels of the character */
    abstract computeAbyssalLevels(): void;
    /** Computes the attack type of the character */
    abstract computeAttackType(): void;
    /** Computes the modifiers of the character */
    abstract computeModifiers(): void;
    /** Computes sources of CombatEffects outside of special attacks */
    computeEffectApplicators(): void;
    /** Merges effect applicators common to all sub-classes */
    mergeInheritedEffectApplicators(): void;
    /** Merges effect applicators that should not be inherited by sub-classes */
    abstract mergeUninheritedEffectApplicators(): void;
    /** Checks for removed effect applicators that have the removeEffectWhenRemove property */
    checkEffectApplicators(): void;
    /** Computes the attacks the character can use */
    abstract computeAttackSelection(): void;
    /** Computes the damage type of the character */
    abstract computeDamageType(): void;
}
declare class SpellSelection implements EncodableObject {
    game: Game;
    /** The current attack spell that is selected */
    attack?: AttackSpell;
    aurora?: AuroraSpell;
    curse?: CurseSpell;
    constructor(game: Game);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    validate(): void;
}
declare type BaseStatValues = {
    effectiveLevel: number;
    bonus: number;
};
/** The keys of equipment stats that do not require a damage type */
declare type EquipStatKey = 'attackSpeed' | 'stabAttackBonus' | 'slashAttackBonus' | 'blockAttackBonus' | 'rangedAttackBonus' | 'magicAttackBonus' | 'meleeStrengthBonus' | 'rangedStrengthBonus' | 'magicDamageBonus' | 'meleeDefenceBonus' | 'rangedDefenceBonus' | 'magicDefenceBonus';
/** The keys of equipment stats that also require damage types */
declare type DamageTypeEquipStatKey = 'resistance' | 'summoningMaxhit';
interface EquipStatPairData {
    key: EquipStatKey | 'damageReduction';
    value: number;
}
interface EquipStatPair {
    key: EquipStatKey;
    value: number;
}
interface DamageTypeEquipStatData {
    key: DamageTypeEquipStatKey;
    value: number;
    damageType?: string;
}
interface DamageTypeEquipStat {
    key: DamageTypeEquipStatKey;
    value: number;
    damageType: DamageType;
}
declare type AnyEquipStatData = EquipStatPairData | DamageTypeEquipStatData;
declare type AnyEquipStat = EquipStatPair | DamageTypeEquipStat;
interface EquipStatsModificationData {
    add?: AnyEquipStatData[];
    remove?: string[];
}
declare class EquipmentStats implements Record<EquipStatKey, number> {
    attackSpeed: number;
    stabAttackBonus: number;
    slashAttackBonus: number;
    blockAttackBonus: number;
    rangedAttackBonus: number;
    magicAttackBonus: number;
    meleeStrengthBonus: number;
    rangedStrengthBonus: number;
    magicDamageBonus: number;
    meleeDefenceBonus: number;
    rangedDefenceBonus: number;
    magicDefenceBonus: number;
    /** @deprecated Use resistances instead */
    get damageReduction(): number;
    summoningMaxHit: SparseNumericMap<DamageType>;
    resistances: SparseNumericMap<DamageType>;
    constructor(stats?: AnyEquipStat[]);
    addItemStats(item: EquipmentItem): void;
    remItemStats(item: EquipmentItem): void;
    addStats(stats: AnyEquipStat[]): void;
    subtractStats(stats: AnyEquipStat[]): void;
    adjustSummoningMaxHit(value: number): number;
    getResistance(damageType: DamageType): number;
    getSummoningMaxHit(damageType: DamageType): number;
    resetStats(): void;
}
interface DamageTypeData extends IDData {
    name: string;
    media: string;
    resistanceName: string;
    resistanceCap: number;
    immuneTo?: string[];
    spanClass: string;
    onlyShowIfUsing?: boolean;
}
interface DamageTypeModificationData extends IDData {
    resistanceCap?: number;
    immuneTo?: {
        add?: string[];
        remove?: string[];
    };
}
declare class DamageType extends NamespacedObject {
    get name(): string;
    get resistanceName(): string;
    get media(): string;
    _media: string;
    _name: string;
    _resistanceName: string;
    _resistanceCap: number;
    onlyShowIfUsing: boolean;
    get resistancCap(): number;
    immuneTo: Set<DamageType>;
    /** The colour to use for the damage type spans */
    spanClass: string;
    readonly modQuery: ModifierQuery;
    constructor(namespace: DataNamespace, data: DamageTypeData, game: Game);
    applyDataModification(modData: DamageTypeModificationData, game: Game): void;
}
/** List of keys that can be used as named values for character stats */
declare type CharacterStatKey = 'minHit' | 'maxHit' | 'accuracy' | 'maxHitpoints' | 'attackInterval' | 'maxBarrier';
declare class CharacterCombatStats {
    character: Character;
    get maxHitpoints(): number;
    set maxHitpoints(value: number);
    get attackInterval(): number;
    set attackInterval(value: number);
    get accuracy(): number;
    set accuracy(value: number);
    get evasion(): Evasion<number>;
    get averageEvasion(): number;
    get maxEvasion(): number;
    get maxHit(): number;
    set maxHit(value: number);
    get minHit(): number;
    set minHit(value: number);
    get maxBarrier(): number;
    set maxBarrier(value: number);
    get hitChance(): number;
    set hitChance(value: number);
    get dirty(): boolean;
    _evasion: Evasion<number>;
    _averageEvasion: number;
    _maxEvasion: number;
    _minHit: number;
    _maxHit: number;
    _accuracy: number;
    _maxHitpoints: number;
    _attackInterval: number;
    _maxBarrier: number;
    _hitChance: number;
    _resistances: Map<DamageType, number>;
    /** Flags if these stats need to be re-calculated when getting a value */
    _dirty: boolean;
    constructor(character: Character);
    setDirty(): void;
    getResistance(damageType: DamageType): number;
    getResistanceByID(damageTypeID: string): number;
    setResistance(damageType: DamageType, resistance: number): void;
    dirtyCheck(): void;
    update(): void;
    getValueTable(): {
        name: string;
        value: number;
    }[];
}
declare type AttackSelection = {
    attack: SpecialAttack;
    chance: number;
};
/** HTML Elements that all characters have */
declare type RenderHTMLElements = {
    maxHitpoints: HTMLElement[];
    attackInterval: HTMLElement[];
    hitpoints: HTMLElement[];
    hitpointsBar: HTMLElement[];
    attackName: HTMLElement[];
    maxBarrier: HTMLElement[];
    barrier: HTMLElement[];
    barrierBar: HTMLElement[];
    barrierContainer: HTMLElement[];
    resistances: Map<DamageType, CharacterResistanceElement>;
};
declare type Evasion<T> = {
    melee: T;
    ranged: T;
    magic: T;
};
declare type AttackType = 'melee' | 'ranged' | 'magic';
declare type TimerTypes = 'Act' | 'Spawn' | 'Regen' | 'DOT' | 'SlayerTask' | 'Summon' | 'Skill';
declare type CharacterTimers = {
    act: Timer;
    regen: Timer;
};
declare type ActionType = 'Attack' | 'Nothing';
declare class CharacterRenderQueue {
    stats: boolean;
    hitChance: boolean;
    hitpoints: boolean;
    damageSplash: boolean;
    effects: boolean;
    attackBar: boolean;
    attackBarMinibar: boolean;
    attacks: boolean;
    passives: boolean;
    damageValues: boolean;
    barrier: boolean;
}
