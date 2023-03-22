declare abstract class Character implements EncodableObject, Serializable {
    manager: BaseManager;
    game: Game;
    hitpoints: number;
    stun: ActiveStun;
    sleep: ActiveSleep;
    nextAction: ActionType;
    attackCount: number;
    nextAttack: SpecialAttack;
    stunImmunity: ActiveStunImmunity;
    /** Controls if the character is performing hits in a multi-hit attack */
    isAttacking: boolean;
    /** True if first hit of attack has not occurred */
    firstHit: boolean;
    /** Number of effects active that are slowing the character */
    slowCount: number;
    /** Number of frostburn effects active on the character */
    frostBurnCount: number;
    /** Currently active curse. Undefined if no curse is active */
    curse?: ActiveCurse;
    get isCursed(): boolean;
    get isSleeping(): boolean;
    /** Returns if the character has a stun effect active. Regardless of flavour */
    get isStunned(): boolean;
    timers: CharacterTimers;
    modifierEffects: ModifierEffects;
    reflexiveEffects: Map<ReflexiveEffect, ActiveReflexiveEffect>;
    stackingEffect: Map<StackingEffect, ActiveStackingEffect>;
    comboEffects: Map<ComboEffect, ActiveComboEffect>;
    activeDOTs: Map<number, ActiveDOT>;
    target: Character;
    abstract spellSelection: SpellSelection;
    equipmentStats: EquipmentStats;
    /** Combat levels of character including hidden levels */
    levels: CombatLevels;
    /** Current Combat Stats **/
    stats: CharacterStats;
    attackType: AttackType;
    hitchance: number;
    availableAttacks: AttackSelection[];
    abstract modifiers: CombatModifiers;
    /** Modifiers that are applied to the target constantly */
    targetModifiers: TargetModifiers;
    canCurse: boolean;
    canAurora: boolean;
    abstract noun: Noun;
    abstract effectRenderer: EffectRenderer;
    abstract statElements: RenderHTMLElements;
    abstract splashManager: SplashManager;
    abstract attackBar: ProgressBar;
    abstract attackBarMinibar: ProgressBar;
    /** Map of active passives, value determines if it should be rendered */
    passives: Map<CombatPassive, ActivePassive>;
    /** Stores state of things that require re-rendering */
    rendersRequired: RenderQueue;
    /** Turns taken in the current fight */
    turnsTaken: number;
    get hitpointsPercent(): number;
    get usingAncient(): boolean;
    /** If the character is using an Archaic Magic spell */
    get isUsingArchaic(): boolean;
    get isBurning(): boolean;
    get isBleeding(): boolean;
    get isPoisoned(): boolean;
    isDotActive(type: DOTType): boolean;
    isEffectSubtypeActive(type: ModifierEffectSubtype): boolean;
    isTargetDotActive(type: DOTType): boolean;
    isFightingTypeVsType(thisType: AttackType, targetType: AttackType): boolean;
    isFighting(): boolean;
    get minHitFromMaxHitPercent(): number;
    /** Baseclass for Enemy, Player and Golbin */
    constructor(manager: BaseManager, game: Game);
    setDefaultSpells(): void;
    /** Sets all renders required to true */
    setRenderAll(): void;
    /** Performs unique spawn effects (Like random curse application) */
    applyUniqueSpawnEffects(): void;
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
    /** Calculates base damage reduction */
    computeDamageReduction(): void;
    /** Standard Stat calculation for accuracy and evasion */
    static calculateStandardStat(values: BaseStatValues): number;
    /** Standard MaxHit calculation for Melee and Ranged */
    static calculateStandardMaxHit(baseLevel: number, strengthBonus: number): number;
    /** Applies modifiers to accuracy rating */
    modifyAccuracy(accuracy: number): number;
    /** Applies modifiers to evasion rating */
    modifyEvasion(evasion: Evasion<number>): void;
    /** Applies modifiers to max hit */
    modifyMaxHit(maxHit: number): number;
    getMaxHitMultiplierBasedOnEnemyAttackType(): number;
    /** Applies modifiers to min hit */
    modifyMinHit(minHit: number): number;
    /** Applies modifiers to max hp */
    modifyMaxHP(maxHP: number): number;
    /** Applies modifiers to attack interval */
    modifyAttackInterval(attackInterval: number): number;
    modifyDamageReduction(reduction: number): number;
    /** Performs a full calculation of all stats and properties */
    computeAllStats(): void;
    /** Performs a calculation of currentStats property */
    computeCombatStats(): void;
    /** Adds modifiers that are based on hitpoints */
    updateHPConditionals(computeStats?: boolean): void;
    computeHitchance(): void;
    /** Deals damage to self */
    damage(amount: number, source: SplashType): void;
    /** Heals self, returns healing amount */
    heal(amount: number): number;
    addHitpoints(amount: number): void;
    /** Sets hitpoints to a given value */
    setHitpoints(value: number): void;
    isImmuneTo(attackType: AttackType): boolean;
    fireMissSplash(immune: boolean): void;
    applyEffects(effects: AnyEffect[], target: Character, damage?: number, attack?: SpecialAttack): void;
    /** Perform an attack against a target */
    attack(target: Character, attack: SpecialAttack): number;
    modifyAttackDamage(target: Character, attack: SpecialAttack, damage: number): number;
    /** Returns the maximum damage an attack can do in a single hit, accounting for all modifiers */
    getAttackMaxDamage(attack: SpecialAttack): number;
    /** Performs lifesteal from attack damage. Returns the true amount healed. */
    lifesteal(attack: SpecialAttack, damage: number): number;
    /** Removes the specified stacking effect from this character */
    removeStackingEffect(effect: StackingEffect): void;
    /** Method called after being attacked */
    abstract postAttack(attack: SpecialAttack, attackType: AttackType): void;
    /** Method called when hitting attack */
    abstract onHit(): void;
    /** Method called when hit by an attack */
    onBeingHit(): void;
    /** Method called when missing attack */
    abstract onMiss(): void;
    rollToHit(target: Character, attack: SpecialAttack): boolean;
    addAuroraModifiers(): void;
    /** Adds curse modifiers */
    addCurseModifiers(): void;
    /** Adds modifiers from attack effects */
    addEffectModifiers(): void;
    addCombatAreaEffectModifiers(): void;
    addPassiveModifiers(): void;
    /** Adds modifiers provided by the current gamemode */
    abstract addGamemodeModifiers(): void;
    addTargetModifiers(): void;
    /** Gets the damage modifiers for the character */
    getDamageModifiers(target: Character): number;
    applyDamageModifiers(target: Character, damage: number): number;
    /** Removes every effect from the character */
    removeAllEffects(removeDOTS?: boolean): void;
    /** Removes all combo effects, does not compute stats */
    removeComboEffects(): void;
    addPassives(passives: CombatPassive[], save?: boolean, display?: boolean, statUpdate?: boolean): void;
    removePassives(passives: CombatPassive[]): void;
    removeAllPassives(): void;
    applyEffect(effect: AnyEffect, target: Character, damage?: number, attack?: SpecialAttack): void;
    /** Applies a stacking effect to the target */
    applyStackingEffect(effect: StackingEffect, target: Character): void;
    /** Applies a reflexive effect to self */
    applyReflexiveEffect(effect: ReflexiveEffect, attack: SpecialAttack): void;
    applyComboEffect(effect: ComboEffect, attack: SpecialAttack): void;
    /** Attempts to cast the curse spell this character has selected on the target. Differs from applyCurse, as this may include rune costs. */
    castCurseSpell(target: Character, curse: CurseSpell): void;
    /** Applies the specified curse to the target charcter for 3 turns */
    applyCurse(target: Character, curse: CurseSpell): void;
    /** Recomputes combat stats based on only modifiers updating */
    combatModifierUpdate(): void;
    /** Determines if character is immune to a DOT type */
    immuneToDOT(type: DOTType): boolean;
    /** Applies a DOT to the target. Returns true if successfully applied */
    applyDOT(effect: DOTEffect, target: Character, damageDealt: number): boolean;
    /** Called when dot is applied to this character */
    onDOTApplication(type: DOTType): void;
    /** Called when dot is removed from this character */
    onDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    /** Method called when dot is removed from target */
    onTargetDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    /** Called when a modifier effect is applied to this character. Does not trigger stat update. */
    onModifierEffectApplication(): void;
    /** Called when a modifier effect is removed from this character. Does not trigger stat update. */
    onModifierEffectRemoval(): void;
    /** Method called when target modifier effect is removed. Does not trigger stat update. */
    onTargetModifierEffectRemoval(): void;
    /** Method called when target modifier effect is added */
    onTargetModifierEffectApplication(): void;
    /** Get the attack modifiers as if applying the effect to target */
    getModifierEffectAttackMap(effect: ModifierEffect): Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>;
    applyRandomCurseEffect(chance: number, target: Character): void;
    applyCurseEffect(effect: CurseEffect, target: Character): void;
    applyModifierEffect(effect: ModifierEffect, target: Character, attack: SpecialAttack): void;
    /**
     * Applies a Sleep Effect to the target character
     * @param effect Data specifying the sleep
     * @param target Character to apply the sleep to
     * @param interruptAttack If the sleep should interrupt the attack state of the target.  Set to false if this sleep is being applied while the target is attacking.
     */
    applySleep(effect: SleepEffect, target: Character, interruptAttack?: boolean): void;
    /** Triggers when this character has sleep applied to it */
    onBeingSlept(): void;
    /** Triggers when sleep is removed from this chracter */
    onSleepRemoval(): void;
    /** Triggers when sleep is removed from this character target */
    onTargetSleepRemoval(): void;
    /** Triggers when this character applies a sleep effect */
    onApplyingSleep(target: Character): void;
    /**
     * Applies a Stun Effect to the target character
     * @param effect Data specifying the stun
     * @param target Character to apply the stun to
     * @param interruptAttack If the stun should interrupt the attack state of the target. Set to false if this stun is being applied while the target is attacking.
     */
    applyStun(effect: StunEffect, target: Character, interruptAttack?: boolean): void;
    /** Triggers when this character has stun applied to it */
    onBeingStunned(): void;
    /** Triggers when stun is removed from this character */
    onStunRemoval(): void;
    /** Triggers when stun is removed from this characters target */
    onTargetStunRemoval(): void;
    /** Triggers when this character applies a stun effect */
    onApplyingStun(target: Character): void;
    /** Ticks regen, and dots */
    passiveTick(): void;
    /** Ticks action and summons */
    activeTick(): void;
    getErrorLog(): string;
    /** Performs an action: E.g. Sleep/Stun/Attack */
    act(): void;
    /** Counts down the turns of modifier effects that count on the targets turn */
    countTargetEffectTurns(): boolean;
    /** Counts down the turns of modifier effects */
    countModifierEffectTurns(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>): boolean;
    removeModifierEffects(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>): boolean;
    /** Processes the characters DOT effects */
    dot(dotID: number): void;
    /** Queues up the next action to perform. Will interrupt current action if called */
    queueNextAction(noSpec?: boolean, tickOffset?: boolean): void;
    isAttackAlreadyActive(attack: SpecialAttack): boolean;
    isEffectActive(effect: AnyEffect, attack: SpecialAttack): boolean;
    /** Renders the character's current stats */
    renderStats(): void;
    renderDamageValues(): void;
    formatNormalAttackDamage(damage: number): string;
    /** Updates the hitchance display */
    renderHitchance(): void;
    /** Updates all hitpoint numbers and bars */
    renderHitpoints(): void;
    /** Processes the damage splash queue and renders them all */
    renderDamageSplashes(): void;
    renderEffects(): void;
    renderAttackBar(): void;
    renderModifierEffect(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>, turnNoun: Noun): void;
    checkCombatCondition(condition: CombatCondition): boolean;
    render(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    encodeModifierEffects(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>, writer: SaveWriter): void;
    decodeModifierEffects(reader: SaveWriter, version: number): Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>;
    encodeReflexiveEffects(writer: SaveWriter): void;
    decodeReflexiveEffects(reader: SaveWriter, version: number): Map<ReflexiveEffect, ActiveReflexiveEffect>;
    encodeStackingEffects(writer: SaveWriter): void;
    decodeStackingEffects(reader: SaveWriter, version: number): Map<StackingEffect, ActiveStackingEffect>;
    encodeDOTS(writer: SaveWriter): void;
    decodeDOTS(reader: SaveWriter, version: number): Map<number, ActiveDOT>;
    encodePassives(writer: SaveWriter): void;
    decodePassives(reader: SaveWriter, version: number): void;
    encodeComboEffects(writer: SaveWriter): void;
    decodeComboEffects(reader: SaveWriter, version: number): Map<ComboEffect, ActiveComboEffect>;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeModifierEffects(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>, reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeReflexiveEffects(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeStackingEffects(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeComboEffects(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeDOTS(reader: DataReader, version: number): void;
    deserializePassives(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Calculates the equipment stats of the character */
    abstract computeEquipmentStats(): void;
    /** Applies regeneration to the character */
    abstract regen(): void;
    /** Processes the death of character */
    abstract processDeath(): void;
    /** Computes and sets the combat levels of the character */
    abstract computeLevels(): void;
    /** Computes the attack type of the character */
    abstract computeAttackType(): void;
    /** Computes the modifiers of the character */
    abstract computeModifiers(): void;
    /** Computes the attacks the character can use */
    abstract computeAttackSelection(): void;
}
declare class SpellSelection implements EncodableObject {
    game: Game;
    standard?: StandardSpell;
    ancient?: AncientSpell;
    aurora?: AuroraSpell;
    curse?: CurseSpell;
    archaic?: ArchaicSpell;
    constructor(game: Game);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    validate(): void;
}
declare type BaseStatValues = {
    effectiveLevel: number;
    bonus: number;
};
declare type ActivePassive = {
    display: boolean;
    save: boolean;
};
declare class EquipmentStats {
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
    damageReduction: number;
    summoningMaxhit: number;
    constructor(stats?: EquipStatPair[]);
    addItemStats(item: EquipmentItem): void;
    remItemStats(item: EquipmentItem): void;
    addStats(stats: EquipStatPair[]): void;
    subtractStats(stats: EquipStatPair[]): void;
    resetStats(): void;
}
declare class CharacterStats {
    evasion: Evasion<number>;
    minHit: number;
    maxHit: number;
    accuracy: number;
    maxHitpoints: number;
    attackInterval: number;
    damageReduction: number;
    get averageEvasion(): number;
    get maxEvasion(): number;
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
    evasion: Evasion<HTMLElement[]>;
    minHit: HTMLElement[];
    maxHit: HTMLElement[];
    accuracy: HTMLElement[];
    maxHitpoints: HTMLElement[];
    attackInterval: HTMLElement[];
    damageReduction: HTMLElement[];
    hitChance: HTMLElement[];
    hitpoints: HTMLElement[];
    hitpointsBar: HTMLElement[];
    attackName: HTMLElement[];
};
declare type Evasion<T> = {
    melee: T;
    ranged: T;
    magic: T;
};
declare type CountedModifier = {
    countSelf: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>;
    countTarget: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>;
};
declare type ModifierEffects = {
    fromSelf: CountedModifier;
    fromTarget: CountedModifier;
};
declare type AttackType = 'melee' | 'ranged' | 'magic';
declare type TimerTypes = 'Act' | 'Spawn' | 'Regen' | 'DOT' | 'SlayerTask' | 'Summon' | 'Skill';
declare type CharacterTimers = {
    act: Timer;
    regen: Timer;
};
declare type ActionType = 'Attack' | 'Nothing';
declare type ActiveCurse = {
    turns: number;
    data: CurseSpell;
};
declare type ActiveDOT = {
    type: DOTType;
    damage: number;
    procsLeft: number;
    interval: number;
    timer: Timer;
};
declare type ActiveModifierEffect = {
    turnsLeft: number;
    stacks: number;
};
declare type ActiveSleep = {
    turns: number;
};
interface ActiveStun extends ActiveSleep {
    flavour: StunFlavour;
}
declare type ActiveStunImmunity = {
    turns: number;
};
declare type ActiveStackingEffect = {
    stacks: number;
};
interface ActiveComboEffect extends ActiveStackingEffect {
    sourceAttack: SpecialAttack;
}
interface ActiveReflexiveEffect extends ActiveComboEffect {
    turnsLeft: number;
}
declare type RenderQueue = {
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
};
