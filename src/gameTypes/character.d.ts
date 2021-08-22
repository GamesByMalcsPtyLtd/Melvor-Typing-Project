declare abstract class Character {
    protected manager: BaseManager;
    hitpoints: number;
    stun: ActiveStun;
    sleep: ActiveSleep;
    nextAction: ActionType;
    attackCount: number;
    nextAttack: Attack;
    private isAttacking;
    /** True if first hit of attack has not occurred */
    firstHit: boolean;
    /** Number of effects active that are slowing the character */
    private slowCount;
    protected curse: ActiveCurse;
    isAfflicted: boolean;
    protected timers: CharacterTimers;
    protected modifierEffects: ModifierEffects;
    protected reflexiveEffects: Map<ReflexiveEffect, ActiveReflexiveEffect>;
    protected stackingEffect: Map<StackingEffect, ActiveStackingEffect>;
    private activeDOTs;
    target: Character;
    spellSelection: SpellSelection;
    protected dotID: number;
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
    passives: Set<CombatPassive>;
    /** Stores state of things that require re-rendering */
    protected rendersRequired: RenderQueue;
    get hitpointsPercent(): number;
    protected get usingAncient(): boolean;
    get isBurning(): boolean;
    protected get minHitFromMaxHitPercent(): number;
    /** Baseclass for Enemy, Player and Golbin */
    constructor(manager: BaseManager);
    /** Sets all renders required to true */
    setRenderAll(): void;
    /** Performs stat updates for when an enemy spawns */
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
    protected setHitpoints(value: number): void;
    /** Perform an attack against a target */
    protected attack(target: Character, attack: Attack): number;
    getAttackMaxDamage(attack: Attack): number;
    /** Performs lifesteal from attack damage. Returns the true amount healed. */
    protected lifesteal(attack: Attack, damage: number): number;
    /** Removes the specified stacking effect from this character */
    private removeStackingEffect;
    /** Method called after being attacked */
    protected abstract postAttack(): void;
    /** Method called when hitting attack */
    protected abstract onHit(): void;
    /** Method called when hit by an attack */
    protected onBeingHit(): void;
    /** Method called when target is no longer burning */
    protected onTargetDOTRemoval(type: DOTType, statUpdate?: boolean): void;
    /** Method called when missing attack */
    protected abstract onMiss(): void;
    protected rollToHit(target: Character, attack: Attack): boolean;
    protected addAuroraModifiers(): void;
    /** Adds curse modifiers */
    protected addCurseModifiers(): void;
    /** Adds modifiers from attack effects */
    protected addEffectModifiers(): void;
    protected addPassiveModifiers(): void;
    addTargetModifiers(): void;
    protected addToTargetModifiers(modifiers: ModifierData, negMult?: number, posMult?: number): void;
    protected subFromTargetModifiers(modifiers: ModifierData, negMult?: number, posMult?: number): void;
    /** Gets the damage modifiers for the character */
    protected getDamageModifiers(target: Character): number;
    protected applyDamageModifiers(target: Character, damage: number): number;
    /** Removes every effect from the character */
    protected removeAllEffects(removeDOTS?: boolean): void;
    protected addPassives(passiveIDs: number[]): void;
    protected removePassives(passiveIDs: number[]): void;
    protected removeAllPassives(): void;
    protected applyEffect(effect: Effect, target: Character, damage?: number): void;
    /** Applies a stacking effect to the target */
    protected applyStackingEffect(effect: StackingEffect, target: Character): void;
    /** Applies a reflexive effect to self */
    protected applyReflexiveEffect(effect: ReflexiveEffect, attack: Attack): void;
    protected applyCurse(target: Character): void;
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
    /** Get the attack modifiers as if applying the effect to target */
    protected getAttackModifiers(effect: ModifierEffect): Map<Attack, Map<ModifierEffect, ActiveModifierEffect>>;
    private applyModifierEffect;
    private applySleep;
    private applyStun;
    tick(): void;
    /** Performs an action: E.g. Sleep/Stun/Attack */
    protected act(): void;
    /** Counts down the turns of modifier effects that count on the targets turn */
    protected countTargetEffectTurns(): void;
    /** Counts down the turns of modifier effects */
    protected countModifierEffectTurns(attackMap: Map<Attack, Map<ModifierEffect, ActiveModifierEffect>>): boolean;
    protected removeModifierEffects(attackMap: Map<Attack, Map<ModifierEffect, ActiveModifierEffect>>): void;
    /** Processes the characters DOT effects */
    private dot;
    /** Queues up the next action to perform. Will interrupt current action if called */
    queueNextAction(noSpec?: boolean): void;
    private isAttackAlreadyActive;
    private isEffectActive;
    /** Renders the character's current stats */
    protected renderStats(): void;
    protected renderDamageValues(): void;
    protected formatAttackDamage(damage: number): string;
    /** Updates the hitchance display */
    protected renderHitchance(): void;
    /** Updates all hitpoint numbers and bars */
    protected renderHitpoints(): void;
    /** Processes the damage splash queue and renders them all */
    protected renderDamageSplashes(): void;
    protected renderEffects(): void;
    protected renderAttackBar(): void;
    protected renderModifierEffect(attackMap: Map<Attack, Map<ModifierEffect, ActiveModifierEffect>>, turnNoun: Noun): void;
    render(): void;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    private serializeModifierEffects;
    private deserializeModifierEffects;
    private serializeReflexiveEffects;
    private deserializeReflexiveEffects;
    private serializeStackingEffects;
    private deserializeStackingEffects;
    private serializeDOTS;
    private deserializeDOTS;
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
declare type SpellSelection = {
    standard: number;
    ancient: number;
    aurora: number;
    curse: number;
};
declare type BaseStatValues = {
    effectiveLevel: number;
    bonus: number;
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
    remItemStats(itemID: ItemID): void;
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
}
declare type AttackSelection = {
    attack: Attack;
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
    countSelf: Map<Attack, Map<ModifierEffect, ActiveModifierEffect>>;
    countTarget: Map<Attack, Map<ModifierEffect, ActiveModifierEffect>>;
};
declare type ModifierEffects = {
    fromSelf: CountedModifier;
    fromTarget: CountedModifier;
};
declare type AttackType = 'melee' | 'ranged' | 'magic';
declare type TimerTypes = 'Act' | 'Spawn' | 'Regen' | 'DOT' | 'SlayerTask' | 'Summon';
declare type AttackStyle = 'Stab' | 'Slash' | 'Block' | 'Magic' | 'Defensive' | 'Accurate' | 'Rapid' | 'Longrange';
declare type CharacterTimers = {
    act: Timer;
    regen: Timer;
};
declare type ActionType = 'Attack' | 'Nothing';
declare type ActiveCurse = {
    turns: number;
    data: Curse;
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
declare type ActiveStackingEffect = {
    stacks: number;
};
interface ActiveReflexiveEffect extends ActiveStackingEffect {
    sourceAttack: Attack;
}
declare type RenderQueue = {
    stats: boolean;
    hitChance: boolean;
    hitpoints: boolean;
    damageSplash: boolean;
    effects: boolean;
    attackBar: boolean;
    attacks: boolean;
    passives: boolean;
    damageValues: boolean;
};
