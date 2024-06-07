declare type Comparison = '==' | '!=' | '>' | '<' | '<=' | '>=';
/**
 * Returns the result of a comparison operation between two values
 * @param lhValue The left-hand value to use in the comparison
 * @param rhValue The right-hand value to use in the comparison
 * @param operator The comparison operator to use
 * @example checkComparison(1, 2, '=='); // Returns the result of 1 == 2 (false)
 * @example checkComparison(3, 1, '>='); // Returns the result of 3 >= 1 (true)
 */
declare function checkComparison(lhValue: number, rhValue: number, operator: Comparison): boolean;
declare type ConditionCharacterType = 'Player' | 'Enemy';
declare type CombatConditionData = HitpointsConditionData | CombatEffectGroupConditionData | CombatEffectConditionData | AttackTypeConditionData | DamageTypeConditionData | BarrierConditionData | FightingBossConditionData;
declare type AnyCharacterCondition = CharacterValueCondition | CharacterBooleanCondition;
interface EveryCondition<T> {
    type: 'Every';
    conditions: T[];
}
declare function checkEveryCondition<T>(condition: EveryCondition<T>, checkCondition: (condition: T) => boolean): boolean;
interface SomeCondition<T> {
    type: 'Some';
    conditions: T[];
}
declare function checkSomeCondition<T>(condition: SomeCondition<T>, checkCondition: (condition: T) => boolean): boolean;
declare type ConditionalModifierConditionData = CombatConditionData | ItemInBankConditionData | ItemChargeConditionData | PotionUsedConditionData | EveryCondition<ConditionalModifierConditionData> | SomeCondition<ConditionalModifierConditionData> | EquipStatCompareConditionData | DamageTypeEquipStatCompareConditionData | FightingSlayerTaskConditionData;
/** Base class for all conditional modifier classes */
declare abstract class ConditionalModifierCondition {
    abstract readonly type: string;
    /**
     * Assigns an event handler for when this condition may have changed
     * @param manager The BaseManager to check the condition against, and to assign event handlers
     * @param handler The handler to call when the condition changed
     * @returns An unassigner method to remove the handlers from the manager
     * @sealed
     */
    assignHandler(manager: BaseManager, handler: (isMet: boolean) => void): VoidFunction;
    /** Checks if this condition has been met for the given BaseManager */
    abstract checkIfMet(manager: BaseManager): boolean;
    /** Checks if this condition is equivalent to another one */
    abstract isEquals(condition: ConditionalModifierCondition): boolean;
    abstract _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    abstract _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    abstract addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface BooleanConditionData {
    /** Optional. If this condition should be inverted */
    inverted?: boolean;
}
declare abstract class BooleanCondition extends ConditionalModifierCondition {
    get inverted(): boolean;
    _inverted: boolean;
    constructor(data: BooleanConditionData);
    checkIfMet(manager: BaseManager): boolean;
    isEquals(condition: ConditionalModifierCondition): boolean;
    abstract _checkIfMet(manager: BaseManager): boolean;
}
interface ValueConditionData {
    /** The right-hand value to use in the comparison */
    value: number;
    /** The comparison operator to use */
    operator: Comparison;
}
declare abstract class ValueCondition extends ConditionalModifierCondition {
    get rhValue(): number;
    get operator(): Comparison;
    _rhValue: number;
    _operator: Comparison;
    constructor(data: ValueConditionData);
    checkIfMet(manager: BaseManager): boolean;
    isEquals(condition: ConditionalModifierCondition): boolean;
    /** Gets the Left-hand value of the condition to compare */
    abstract _getLHValue(manager: BaseManager): number;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface ItemInBankConditionData extends ValueConditionData {
    type: 'BankItem';
    itemID: string;
}
declare class ItemInBankCondition extends ValueCondition {
    readonly type = "BankItem";
    item: AnyItem;
    constructor(data: ItemInBankConditionData, game: Game, selfItem?: EquipmentItem);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _getLHValue(manager: BaseManager): number;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface ItemChargeConditionData extends ValueConditionData {
    type: 'ItemCharge';
    itemID: string;
}
declare class ItemChargeCondition extends ValueCondition {
    readonly type = "ItemCharge";
    item: EquipmentItem;
    constructor(data: ItemChargeConditionData, game: Game, selfItem?: EquipmentItem);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _getLHValue(manager: BaseManager): number;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface PotionUsedConditionData extends BooleanConditionData {
    type: 'PotionUsed';
    itemID?: string;
    recipeID?: string;
}
declare class PotionUsedCondition extends BooleanCondition {
    readonly type = "PotionUsed";
    item?: PotionItem;
    recipe?: HerbloreRecipe;
    constructor(data: PotionUsedConditionData, game: Game);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _checkIfMet(manager: BaseManager): boolean;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface CharacterValueConditionData extends ValueConditionData {
    character?: ConditionCharacterType;
}
declare abstract class CharacterValueCondition extends ValueCondition {
    get character(): ConditionCharacterType;
    _character: ConditionCharacterType;
    constructor(data: CharacterValueConditionData);
    isEquals(condition: ConditionalModifierCondition): boolean;
    /**
     * Checks if this condition has been met from the perspective of a character
     * @param character
     * @returns
     */
    isMetForCharacter(character: Character): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _getLHValue(manager: BaseManager): number;
    _getCharacter(manager: BaseManager): Character;
    abstract _assignCharacterHandler(character: Character, handler: VoidFunction): void;
    abstract _unassignCharacterHandler(character: Character, handler: VoidFunction): void;
    abstract _getCharacterLHValue(character: Character): number;
}
interface CharacterBooleanConditionData extends BooleanConditionData {
    character?: ConditionCharacterType;
}
declare abstract class CharacterBooleanCondition extends BooleanCondition {
    get character(): ConditionCharacterType;
    _character: ConditionCharacterType;
    constructor(data: CharacterBooleanConditionData);
    isEquals(condition: ConditionalModifierCondition): boolean;
    /**
     * Checks if this condition has been met from the perspective of a character
     * @param character
     * @returns
     */
    isMetForCharacter(character: Character): boolean;
    _checkIfMet(manager: BaseManager): boolean;
    _getCharacter(manager: BaseManager): Character;
    abstract _checkIfCharacterMet(character: Character): boolean;
}
interface HitpointsConditionData extends CharacterValueConditionData {
    type: 'Hitpoints';
}
declare class HitpointsCondition extends CharacterValueCondition {
    readonly type = "Hitpoints";
    constructor(data: HitpointsConditionData);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignCharacterHandler(character: Character, handler: VoidFunction): void;
    _unassignCharacterHandler(character: Character, handler: VoidFunction): void;
    _getCharacterLHValue(character: Character): number;
}
interface BarrierConditionData extends CharacterValueConditionData {
    type: 'Barrier';
}
declare class BarrierCondition extends CharacterValueCondition {
    readonly type = "Barrier";
    constructor(data: BarrierConditionData);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignCharacterHandler(character: Character, handler: VoidFunction): void;
    _unassignCharacterHandler(character: Character, handler: VoidFunction): void;
    _getCharacterLHValue(character: Character): number;
}
/** Data for a CombatCondition that requires the specified character to have an effect that belongs to the specified group active */
interface CombatEffectGroupConditionData extends CharacterBooleanConditionData {
    type: 'CombatEffectGroup';
    /** The ID of the CombatEffectGroup that an active effect must belong to */
    groupID: string;
}
declare class CombatEffectGroupCondition extends CharacterBooleanCondition {
    readonly type = "CombatEffectGroup";
    get group(): CombatEffectGroup;
    _group: CombatEffectGroup;
    constructor(data: CombatEffectGroupConditionData, game: Game);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _checkIfCharacterMet(character: Character): boolean;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
/** Data for a CombatCondition that requires the specified character to have a specific combat effect active */
interface CombatEffectConditionData extends CharacterBooleanConditionData {
    type: 'CombatEffect';
    /** The ID of the CombatEffect that must be active */
    effectID: string;
}
declare class CombatEffectCondition extends CharacterBooleanCondition {
    readonly type = "CombatEffect";
    get effect(): CombatEffect;
    _effect: CombatEffect;
    constructor(data: CombatEffectConditionData, game: Game);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _checkIfCharacterMet(character: Character): boolean;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface AttackTypeConditionData extends CharacterBooleanConditionData {
    type: 'CombatType';
    thisAttackType: AttackType | 'any';
    targetAttackType: AttackType | 'any';
}
declare class AttackTypeCondition extends CharacterBooleanCondition {
    readonly type = "AttackType";
    get thisAttackType(): AttackType | 'any';
    get targetAttackType(): AttackType | 'any';
    _thisAttackType: AttackType | 'any';
    _targetAttackType: AttackType | 'any';
    constructor(data: AttackTypeConditionData);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _checkIfCharacterMet(character: Character): boolean;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface DamageTypeConditionData extends CharacterBooleanConditionData {
    type: 'DamageType';
    /** The id of the damage type the character must deal */
    damageType: string;
}
declare class DamageTypeCondition extends CharacterBooleanCondition {
    readonly type = "DamageType";
    get damageType(): DamageType;
    _damageType: DamageType;
    constructor(data: DamageTypeConditionData, game: Game);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _checkIfCharacterMet(character: Character): boolean;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface FightingBossConditionData extends CharacterBooleanConditionData {
    type: 'FightingBoss';
}
declare class FightingBossCondition extends CharacterBooleanCondition {
    readonly type = "FightingBoss";
    constructor(data: FightingBossConditionData);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _checkIfCharacterMet(character: Character): boolean;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface FightingSlayerTaskConditionData extends BooleanConditionData {
    type: 'FightingSlayerTask';
}
declare class FightingSlayerTaskCondition extends BooleanCondition {
    readonly type = "FightingSlayerTask";
    constructor(data: FightingSlayerTaskConditionData);
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _checkIfMet(manager: BaseManager): boolean;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface BaseEquipStatCompareConditionData {
    type: 'EquipStatCompare';
    operator: Comparison;
}
/** Checks if PlayerEquipStat operator EnemyEquipStat */
interface EquipStatCompareConditionData extends BaseEquipStatCompareConditionData {
    statKey: EquipStatKey;
}
interface DamageTypeEquipStatCompareConditionData extends BaseEquipStatCompareConditionData {
    statKey: DamageTypeEquipStatKey;
    damageType: string;
}
declare abstract class BaseEquipStatCompareCondition extends ConditionalModifierCondition {
    readonly type = "EquipStatCompare";
    operator: Comparison;
    constructor(data: BaseEquipStatCompareConditionData);
    checkIfMet(manager: BaseManager): boolean;
    abstract getEquipStat(character: Character): number;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
declare class EquipStatCompareCondition extends BaseEquipStatCompareCondition {
    readonly type = "EquipStatCompare";
    statKey: EquipStatKey;
    constructor(data: EquipStatCompareConditionData);
    getEquipStat(character: Character): number;
    isEquals(condition: ConditionalModifierCondition): boolean;
}
declare class DamageTypeEquipStatCompareCondition extends BaseEquipStatCompareCondition {
    readonly type = "EquipStatCompare";
    statKey: DamageTypeEquipStatKey;
    damageType: DamageType;
    constructor(data: DamageTypeEquipStatCompareConditionData, game: Game);
    getEquipStat(character: Character): number;
    isEquals(condition: ConditionalModifierCondition): boolean;
}
declare class SomeConditionClass extends ConditionalModifierCondition {
    readonly type = "Some";
    conditions: ConditionalModifierCondition[];
    constructor(data: SomeCondition<ConditionalModifierConditionData>, game: Game, selfItem?: EquipmentItem);
    checkIfMet(manager: BaseManager): boolean;
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
declare class EveryConditionClass extends ConditionalModifierCondition {
    readonly type = "Every";
    conditions: ConditionalModifierCondition[];
    constructor(data: EveryCondition<ConditionalModifierConditionData>, game: Game, selfItem?: EquipmentItem);
    checkIfMet(manager: BaseManager): boolean;
    isEquals(condition: ConditionalModifierCondition): boolean;
    _assignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    _unassignWrappedHandler(manager: BaseManager, handler: VoidFunction): void;
    addTemplateData(templateData: Record<string, string>, prefix?: string, postfix?: string): void;
}
interface ConditionalModifierData {
    condition: ConditionalModifierConditionData;
    modifiers?: ModifierValuesRecordData;
    enemyModifiers?: ModifierValuesRecordData;
    isNegative?: boolean;
    description?: string;
    descriptionLang?: string;
}
interface ConditionalModifiersModificationData {
    add?: ConditionalModifierData[];
    remove?: string[];
}
declare class ConditionalModifier implements SoftDataDependant<ConditionalModifierData> {
    condition: ConditionalModifierCondition;
    modifiers?: ModifierValue[];
    enemyModifiers?: ModifierValue[];
    isNegative: boolean;
    _description?: string;
    _descriptionLang?: string;
    constructor(data: ConditionalModifierData, game: Game, selfItem?: EquipmentItem);
    registerSoftDependencies(data: ConditionalModifierData, game: Game): void;
    getDescription(negMult?: number, posMult?: number): StatDescription | undefined;
    getDescriptionTemplate(): string | undefined;
    getTemplateData(mult: number): Record<string, string>;
    static getCombatConditionFromData(data: CombatConditionData, game: Game): AnyCharacterCondition;
    static getConditionFromData(data: ConditionalModifierConditionData, game: Game, selfItem?: EquipmentItem): ConditionalModifierCondition;
}
interface ConditionalModifierSource {
    source: ModifierSource;
    conditionals: ConditionalModifier[];
    negMult?: number;
    posMult?: number;
}
interface ActiveConditionalModifier {
    /** The source to use for the modifiers provided by the conditional */
    source: ModifierSource;
    conditional: ConditionalModifier;
    /** If the conditional is currently providing modifiers */
    isActive: boolean;
    /** Multiplier to the modifiers provided by the conditional */
    mult: number;
    unassigner: VoidFunction;
}
