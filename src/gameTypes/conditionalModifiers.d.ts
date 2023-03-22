declare type ConditionHooks = 'PlayerHitpoints' | 'EnemyHitpoints' | 'ItemCharges' | 'BankItem' | 'PlayerDOT' | 'EnemyDOT' | 'PlayerModEffect' | 'EnemyModEffect' | 'EnemySpawn' | 'Stun' | 'EnemyStun' | 'Sleep' | 'EnemySleep';
declare type Comparison = '==' | '!=' | '>' | '<' | '<=' | '>=';
declare function checkValueCondition(value: number, condition: ValueCondition): boolean;
declare function checkBooleanCondition(value: boolean, condition: BooleanCondition): boolean;
interface ValueCondition {
    value: number;
    operator: Comparison;
}
interface BooleanCondition {
    inverted: boolean;
}
/** 'Count of item in bank' is 'operator' of 'count' */
interface ItemInBankCondition extends ValueCondition {
    type: 'BankItem';
    item: AnyItem;
}
interface ItemInBankConditionData extends ValueCondition {
    type: 'BankItem';
    itemID: string;
}
interface ItemChargeConditionData extends ValueCondition {
    type: 'ItemCharge';
    itemID: string;
}
interface ItemChargeCondition extends ValueCondition {
    type: 'ItemCharge';
    item: EquipmentItem;
}
interface HitpointsCondition extends ValueCondition {
    type: 'Hitpoints';
}
interface DOTCondition extends BooleanCondition {
    type: 'DOT';
    dotType: DOTType;
}
interface ModifierEffectCondition extends BooleanCondition {
    type: 'Effect';
    effectType: ModifierEffectSubtype;
}
interface AttackTypeCondition extends BooleanCondition {
    type: 'CombatType';
    thisAttackType: AttackType | 'any';
    targetAttackType: AttackType | 'any';
}
interface IsFightingCondition extends BooleanCondition {
    type: 'IsFighting';
}
interface StunnedCondition extends BooleanCondition {
    type: 'IsStunned';
    /** If present, stun flavour must match for condition to match. Otherwise matches both stuns and freezes */
    flavour?: StunFlavour;
}
interface SleepingCondition extends BooleanCondition {
    type: 'IsSleeping';
}
/** Checks if PlayerEquipStat operator EnemyEquipStat */
interface EquipStatCompareCondition {
    type: 'EquipStatCompare';
    statKey: EquipStatKey;
    operator: Comparison;
}
interface FightingBossCondition extends BooleanCondition {
    type: 'FightingBoss';
}
declare type CombatCondition = HitpointsCondition | DOTCondition | ModifierEffectCondition | AttackTypeCondition | IsFightingCondition | StunnedCondition | SleepingCondition;
interface EveryCondition {
    type: 'Every';
    conditions: AnyCondition[];
}
interface SomeCondition {
    type: 'Some';
    conditions: AnyCondition[];
}
interface EveryConditionData {
    type: 'Every';
    conditions: AnyConditionData[];
}
interface SomeConditionData {
    type: 'Some';
    conditions: AnyConditionData[];
}
declare type AnyCondition = (CombatCondition & {
    character: 'Player' | 'Enemy';
}) | ItemInBankCondition | ItemChargeCondition | EveryCondition | SomeCondition | FightingBossCondition | EquipStatCompareCondition;
declare type AnyConditionData = (CombatCondition & {
    character: 'Player' | 'Enemy';
}) | ItemInBankConditionData | ItemChargeConditionData | EveryConditionData | SomeConditionData | FightingBossCondition | EquipStatCompareCondition;
interface ConditionalModifierData {
    condition: AnyConditionData;
    modifiers?: PlayerModifierData;
    enemyModifiers?: CombatModifierData;
}
declare class ConditionalModifier {
    condition: AnyCondition;
    isActive: boolean;
    modifiers?: PlayerModifierObject;
    enemyModifiers?: CombatModifierData;
    hooks: Set<ConditionHooks>;
    constructor(data: ConditionalModifierData, game: Game, selfItem?: EquipmentItem);
    getConditionFromData(conditionData: AnyConditionData, game: Game, selfItem?: EquipmentItem): AnyCondition;
    addConditionHooks(condition: AnyCondition): void;
}
declare type ModifierEffectSubtype = 'Slow' | 'Frostburn';
