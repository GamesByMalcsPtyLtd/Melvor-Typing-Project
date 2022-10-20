declare abstract class Character implements EncodableObject, Serializable {
    protected manager: BaseManager;
    protected game: Game;
    hitpoints: number;
    stun: ActiveStun;
    sleep: ActiveSleep;
    nextAction: ActionType;
    attackCount: number;
    nextAttack: SpecialAttack;
    private stunImmunity;
    /** Controls if the character is performing hits in a multi-hit attack */
    protected isAttacking: boolean;
    /** True if first hit of attack has not occurred */
    firstHit: boolean;
    /** Number of effects active that are slowing the character */
    private slowCount;
    /** Number of frostburn effects active on the character */
    private frostBurnCount;
    /** Currently active curse. Undefined if no curse is active */
    private curse?;
    get isCursed(): boolean;
    get isSleeping(): boolean;
    /** Returns if the character has a stun effect active. Regardless of flavour */
    get isStunned(): boolean;
    protected timers: CharacterTimers;
    protected modifierEffects: ModifierEffects;
    protected reflexiveEffects: Map<ReflexiveEffect, ActiveReflexiveEffect>;
    protected stackingEffect: Map<StackingEffect, ActiveStackingEffect>;
    protected comboEffects: Map<ComboEffect, ActiveComboEffect>;
    private activeDOTs;
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
    protected canCurse: boolean;
    protected canAurora: boolean;
    abstract noun: Noun;
    protected abstract effectRenderer: EffectRenderer;
    protected abstract statElements: RenderHTMLElements;
    protected abstract splashManager: SplashManager;
    protected abstract attackBar: ProgressBar;
    protected abstract attackBarMinibar: ProgressBar;
    /** Map of active passives, value determines if it should be rendered */
    passives: Map<CombatPassive, ActivePassive>;
    /** Stores state of things that require re-rendering */
    protected rendersRequired: RenderQueue;
    /** Turns taken in the current fight */
    turnsTaken: number;
    get hitpointsPercent(): number;
    protected get usingAncient(): boolean;
    /** If the character is using an Archaic Magic spell */
    protected get isUsingArchaic(): boolean;
    get isBurning(): boolean;
    get isBleeding(): boolean;
    get isPoisoned(): boolean;
    isDotActive(type: DOTType): boolean;
    isEffectSubtypeActive(type: ModifierEffectSubtype): boolean;
    isTargetDotActive(type: DOTType): boolean;
    isFightingTypeVsType(thisType: AttackType, targetType: AttackType): boolean;
    isFighting(): boolean;
    protected get minHitFromMaxHitPercent(): number;
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
    protected computeAttackInterval(): void;
    /** Calculates the Min Hit stat */
    protected computeMinHit(): void;
    /** Calculates the Max HP stat */
    protected computeMaxHP(): void;
    /** Calculates base accuracy stat */
    protected computeAccuracy(): void;
    /** Gets the values to use in the accuracy calculation */
    protected abstract getAccuracyValues(): BaseStatValues;
    /** Calculates base max hit stat */
    protected computeMaxHit(): void;
    /** Calculates the max hit of the character for melee */
    protected computeMeleeMaxHit(): number;
    /** Calculates the max hit of the character for ranged */
    protected computeRangedMaxHit(): number;
    /** Calculates the max hit of the character for magic */
    protected computeMagicMaxHit(): number;
    /** Calculates base evasion stats */
    protected computeEvasion(): void;
    protected getMeleeDefenceBonus(): number;
    protected getRangedDefenceBonus(): number;
    protected getMagicDefenceBonus(): number;
    /** Calculates base damage reduction */
    protected computeDamageReduction(): void;
    /** Standard Stat calculation for accuracy and evasion */
    static calculateStandardStat(values: BaseStatValues): number;
    /** Standard MaxHit calculation for Melee and Ranged */
    static calculateStandardMaxHit(baseLevel: number, strengthBonus: number): number;
    /** Applies modifiers to accuracy rating */
    protected modifyAccuracy(accuracy: number): number;
    /** Applies modifiers to evasion rating */
    protected modifyEvasion(evasion: Evasion<number>): void;
    /** Applies modifiers to max hit */
    protected modifyMaxHit(maxHit: number): number;
    protected getMaxHitMultiplierBasedOnEnemyAttackType(): number;
    /** Applies modifiers to min hit */
    protected modifyMinHit(minHit: number): number;
    /** Applies modifiers to max hp */
    protected modifyMaxHP(maxHP: number): number;
    /** Applies modifiers to attack interval */
    protected modifyAttackInterval(attackInterval: number): number;
    protected modifyDamageReduction(reduction: number): number;
    /** Performs a full calculation of all stats and properties */
    computeAllStats(): void;
    /** Performs a calculation of currentStats property */
    computeCombatStats(): void;
    /** Adds modifiers that are based on hitpoints */
    protected updateHPConditionals(computeStats?: boolean): void;
    protected computeHitchance(): void;
    /** Deals damage to self */
    damage(amount: number, source: SplashType): void;
    /** Heals self, returns healing amount */
    heal(amount: number): number;
    protected addHitpoints(amount: number): void;
    /** Sets hitpoints to a given value */
    setHitpoints(value: number): void;
    isImmuneTo(attackType: AttackType): boolean;
    fireMissSplash(immune: boolean): void;
    protected applyEffects(effects: AnyEffect[], target: Character, damage?: number, attack?: SpecialAttack): void;
    /** Perform an attack against a target */
    protected attack(target: Character, attack: SpecialAttack): number;
    protected modifyAttackDamage(target: Character, attack: SpecialAttack, damage: number): number;
    /** Returns the maximum damage an attack can do in a single hit, accounting for all modifiers */
    getAttackMaxDamage(attack: SpecialAttack): number;
    /** Performs lifesteal from attack damage. Returns the true amount healed. */
    protected lifesteal(attack: SpecialAttack, damage: number): number;
    /** Removes the specified stacking effect from this character */
    private removeStackingEffect;
    /** Method called after being attacked */
    protected abstract postAttack(attack: SpecialAttack, attackType: AttackType): void;
    /** Method called when hitting attack */
    protected abstract onHit(): void;
    /** Method called when hit by an attack */
    protected onBeingHit(): void;
    /** Method called when missing attack */
    protected abstract onMiss(): void;
    protected rollToHit(target: Character, attack: SpecialAttack): boolean;
    protected addAuroraModifiers(): void;
    /** Adds curse modifiers */
    protected addCurseModifiers(): void;
    /** Adds modifiers from attack effects */
    protected addEffectModifiers(): void;
    addCombatAreaEffectModifiers(): void;
    protected addPassiveModifiers(): void;
    /** Adds modifiers provided by the current gamemode */
    protected abstract addGamemodeModifiers(): void;
    addTargetModifiers(): void;
    /** Gets the damage modifiers for the character */
    protected getDamageModifiers(target: Character): number;
    protected applyDamageModifiers(target: Character, damage: number): number;
    /** Removes every effect from the character */
    protected removeAllEffects(removeDOTS?: boolean): void;
    /** Removes all combo effects, does not compute stats */
    private removeComboEffects;
    addPassives(passives: CombatPassive[], save?: boolean, display?: boolean, statUpdate?: boolean): void;
    protected removePassives(passives: CombatPassive[]): void;
    protected removeAllPassives(): void;
    protected applyEffect(effect: AnyEffect, target: Character, damage?: number, attack?: SpecialAttack): void;
    /** Applies a stacking effect to the target */
    protected applyStackingEffect(effect: StackingEffect, target: Character): void;
    /** Applies a reflexive effect to self */
    protected applyReflexiveEffect(effect: ReflexiveEffect, attack: SpecialAttack): void;
    protected applyComboEffect(effect: ComboEffect, attack: SpecialAttack): void;
    /** Attempts to cast the curse spell this character has selected on the target. Differs from applyCurse, as this may include rune costs. */
    protected castCurseSpell(target: Character, curse: CurseSpell): void;
    /** Applies the specified curse to the target charcter for 3 turns */
    protected applyCurse(target: Character, curse: CurseSpell): void;
    /** Recomputes combat stats based on only modifiers updating */
    combatModifierUpdate(): void;
    /** Determines if character is immune to a DOT type */
    private immuneToDOT;
    /** Applies a DOT to the target. Returns true if successfully applied */
    protected applyDOT(effect: DOTEffect, target: Character, damageDealt: number): boolean;
    /** Called when dot is applied to this character */
    protected onDOTApplication(type: DOTType): void;
    /** Called when dot is removed from this character */
    protected onDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    /** Method called when dot is removed from target */
    protected onTargetDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    /** Called when a modifier effect is applied to this character. Does not trigger stat update. */
    protected onModifierEffectApplication(): void;
    /** Called when a modifier effect is removed from this character. Does not trigger stat update. */
    protected onModifierEffectRemoval(): void;
    /** Method called when target modifier effect is removed. Does not trigger stat update. */
    protected onTargetModifierEffectRemoval(): void;
    /** Method called when target modifier effect is added */
    protected onTargetModifierEffectApplication(): void;
    /** Get the attack modifiers as if applying the effect to target */
    protected getModifierEffectAttackMap(effect: ModifierEffect): Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>;
    private applyRandomCurseEffect;
    applyCurseEffect(effect: CurseEffect, target: Character): void;
    protected applyModifierEffect(effect: ModifierEffect, target: Character, attack: SpecialAttack): void;
    /**
     * Applies a Sleep Effect to the target character
     * @param effect Data specifying the sleep
     * @param target Character to apply the sleep to
     * @param interruptAttack If the sleep should interrupt the attack state of the target.  Set to false if this sleep is being applied while the target is attacking.
     */
    private applySleep;
    /** Triggers when this character has sleep applied to it */
    protected onBeingSlept(): void;
    /** Triggers when sleep is removed from this chracter */
    protected onSleepRemoval(): void;
    /** Triggers when sleep is removed from this character target */
    protected onTargetSleepRemoval(): void;
    /** Triggers when this character applies a sleep effect */
    protected onApplyingSleep(target: Character): void;
    /**
     * Applies a Stun Effect to the target character
     * @param effect Data specifying the stun
     * @param target Character to apply the stun to
     * @param interruptAttack If the stun should interrupt the attack state of the target. Set to false if this stun is being applied while the target is attacking.
     */
    private applyStun;
    /** Triggers when this character has stun applied to it */
    protected onBeingStunned(): void;
    /** Triggers when stun is removed from this character */
    protected onStunRemoval(): void;
    /** Triggers when stun is removed from this characters target */
    protected onTargetStunRemoval(): void;
    /** Triggers when this character applies a stun effect */
    protected onApplyingStun(target: Character): void;
    /** Ticks regen, and dots */
    passiveTick(): void;
    /** Ticks action and summons */
    activeTick(): void;
    getErrorLog(): string;
    /** Performs an action: E.g. Sleep/Stun/Attack */
    protected act(): void;
    /** Counts down the turns of modifier effects that count on the targets turn */
    protected countTargetEffectTurns(): boolean;
    /** Counts down the turns of modifier effects */
    protected countModifierEffectTurns(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>): boolean;
    protected removeModifierEffects(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>): boolean;
    /** Processes the characters DOT effects */
    private dot;
    /** Queues up the next action to perform. Will interrupt current action if called */
    queueNextAction(noSpec?: boolean, tickOffset?: boolean): void;
    private isAttackAlreadyActive;
    private isEffectActive;
    /** Renders the character's current stats */
    protected renderStats(): void;
    protected renderDamageValues(): void;
    protected formatNormalAttackDamage(damage: number): string;
    /** Updates the hitchance display */
    protected renderHitchance(): void;
    /** Updates all hitpoint numbers and bars */
    protected renderHitpoints(): void;
    /** Processes the damage splash queue and renders them all */
    protected renderDamageSplashes(): void;
    protected renderEffects(): void;
    protected renderAttackBar(): void;
    protected renderModifierEffect(attackMap: Map<SpecialAttack, Map<ModifierEffect, ActiveModifierEffect>>, turnNoun: Noun): void;
    checkCombatCondition(condition: CombatCondition): boolean;
    render(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    private encodeModifierEffects;
    private decodeModifierEffects;
    private encodeReflexiveEffects;
    private decodeReflexiveEffects;
    private encodeStackingEffects;
    private decodeStackingEffects;
    private encodeDOTS;
    private decodeDOTS;
    private encodePassives;
    private decodePassives;
    private encodeComboEffects;
    private decodeComboEffects;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    private deserializeModifierEffects;
    private deserializeReflexiveEffects;
    private deserializeStackingEffects;
    private deserializeComboEffects;
    private deserializeDOTS;
    private deserializePassives;
    /** Calculates the equipment stats of the character */
    protected abstract computeEquipmentStats(): void;
    /** Applies regeneration to the character */
    protected abstract regen(): void;
    /** Processes the death of character */
    abstract processDeath(): void;
    /** Computes and sets the combat levels of the character */
    protected abstract computeLevels(): void;
    /** Computes the attack type of the character */
    protected abstract computeAttackType(): void;
    /** Computes the modifiers of the character */
    protected abstract computeModifiers(): void;
    /** Computes the attacks the character can use */
    protected abstract computeAttackSelection(): void;
}
declare class SpellSelection implements EncodableObject {
    private game;
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
