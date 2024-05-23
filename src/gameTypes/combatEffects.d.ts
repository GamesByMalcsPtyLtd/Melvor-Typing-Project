declare type CombatEffectTarget = 'Self' | 'Target';
interface CombatEffectDamageGroupData {
    /** The name of the damage group. */
    name: string;
    /** The damage that will be reduced using the character that applied the effect. */
    damage: Damage[];
    /** Optional. If damage modifiers from the character that applied the effect should be applied. Defaults to false. */
    applyDamageModifiers?: boolean;
    /** Optional. If present, DOTType modifiers will be applied to the calculation of the damage */
    applyTypeModifiers?: DOTType;
    /** Optional. If resistance from the character the effect is applied to should be applied. Uses the source character of the effect to determine resistance type. */
    applyResistance?: boolean;
    /** Optional. The maximum damage that this damage group can compute to. Applies before resistance, but after damage modifiers. Scaled by hpMultiplier*/
    damageCap?: number;
}
declare class CombatEffectDamageGroup {
    name: string;
    damage: Damage[];
    applyDamageModifiers: boolean;
    applyTypeModifiers?: DOTType;
    applyResistance: boolean;
    damageCap: number;
    constructor(data: CombatEffectDamageGroupData);
}
interface CombatEffectParameter {
    /** The name of the parameter */
    name: string;
    /** The default initial value of the parameter when an ActiveEffect is constructed */
    initialValue: number;
}
interface CombatEffectTimer {
    /** The name of the timer */
    name: string;
}
interface CombatEffectStatGroupData {
    /** The name of the stat group */
    name: string;
    /** Optional. Modifiers that can be applied to the player */
    modifiers?: ModifierValuesRecordData;
    /** Optional. An array of combat effect applicaators to merge with the character */
    combatEffects?: TriggeredCombatEffectApplicatorData[];
}
declare class CombatEffectStatGroup implements SoftDataDependant<CombatEffectStatGroupData> {
    name: string;
    modifiers?: ModifierValue[];
    combatEffects?: AnyCombatEffectApplicator[];
    constructor(data: CombatEffectStatGroupData, game: Game, where: string);
    registerSoftDependencies(data: CombatEffectStatGroupData, game: Game): void;
}
interface CombatEffectTTSpanData {
    /** Optional. CSS classes that are added to the span */
    className?: string;
    /** Optional. If present, the character the effect is applied to must be of the given type for the span to display */
    character?: 'Player' | 'Enemy';
    /** Optional. If present, this condition must be met in order for the span to display */
    condition?: BehaviourTriggerConditionData;
}
/** A tooltip span that displays a lang string. Can be templated. */
interface CombatEffectLangTTSpanData extends CombatEffectTTSpanData {
    type: 'LangString';
    /** ID of the language string to display */
    langID: string;
    /** Optional. If present the language string will be templated by the values specified */
    templateData?: Record<string, CombatEffectNumberExpression>;
}
/** A tooltip span that displays the string value specified. Can be templated.*/
interface CombatEffectStringTTSpanData extends CombatEffectTTSpanData {
    type: 'String';
    /** The string to display */
    value: string;
    /** Optional. If present the string will be templated by the values specified. */
    templateData?: Record<string, CombatEffectNumberExpression>;
}
/** A tooltip span that displays the currently applied values of a stat group */
interface CombatEffectStatsTTSpanData extends CombatEffectTTSpanData {
    type: 'Stats';
    /** The name of the stat group to display */
    statGroupName: string;
}
/** A tooltip span that displays turns. */
interface CombatEffectTurnsTTSpanData extends CombatEffectTTSpanData {
    type: 'PlayerTurns' | 'EnemyTurns' | 'Turns' | 'LastsForTurns';
    /** The value to use for the number of turns left */
    turns: CombatEffectNumberExpression;
}
/** A tooltip span that displays stacks and max stacks */
interface CombatEffectStacksWithMaxTTSpanData extends CombatEffectTTSpanData {
    type: 'StacksWithMax';
    /** The value to use for the current amount of stacks */
    stacks: CombatEffectNumberExpression;
    /** The value to use for the maximum number of stacks */
    maxStacks: CombatEffectNumberExpression;
}
declare type CombatEffectNumberFunc = (effect: ActiveCombatEffect) => number;
declare abstract class CombatEffectTTSpan {
    /** Optional. CSS classes that are added to the span */
    className?: string;
    /** Optional. If present, the character the effect is applied to must be of the given type for the span to display */
    character?: 'Player' | 'Enemy';
    /** Optional. If present, this condition must be met in order for the span to display */
    readonly condition?: BehaviourTriggerCondition;
    constructor(data: CombatEffectTTSpanData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener: CombatEffectRenderListener);
    /** Generates a span element to display */
    abstract getSpans(activeEffect: ActiveCombatEffect): HTMLSpanElement[];
    /** Checks if this span should currently show */
    shouldShow(activeEffect: ActiveCombatEffect): boolean;
    getExpressionRecord(data: Record<string, CombatEffectNumberExpression>, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener: CombatEffectRenderListener): Record<string, CombatEffectNumberFunc>;
    /** Evaluates a record of expressions into a record of strings */
    evalExpressionRecord(exprRecord: Record<string, CombatEffectNumberFunc>, activeEffect: ActiveCombatEffect): Record<string, string>;
    createSpan(text: string): HTMLSpanElement;
}
/** A tooltip span that displays a lang string. Can be templated. */
declare class CombatEffectLangTTSpan extends CombatEffectTTSpan {
    readonly type = "LangString";
    /** ID of the language string to display */
    langID: string;
    /** Optional. If present the language string will be templated by the values specified */
    readonly templateData?: Record<string, CombatEffectNumberFunc>;
    constructor(data: CombatEffectLangTTSpanData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener: CombatEffectRenderListener);
    getSpans(activeEffect: ActiveCombatEffect): HTMLSpanElement[];
}
/** A tooltip span that displays the string value specified. Can be templated.*/
declare class CombatEffectStringTTSpan extends CombatEffectTTSpan {
    readonly type = "String";
    /** The string to display */
    value: string;
    /** Optional. If present the string will be templated by the values specified. */
    readonly templateData?: Record<string, CombatEffectNumberFunc>;
    constructor(data: CombatEffectStringTTSpanData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener: CombatEffectRenderListener);
    getSpans(activeEffect: ActiveCombatEffect): HTMLSpanElement[];
}
/** A tooltip span that displays the currently applied values of a stat group */
declare class CombatEffectStatsTTSpan extends CombatEffectTTSpan {
    readonly type = "Stats";
    /** The name of the stat group to display */
    readonly statGroupName: string;
    constructor(data: CombatEffectStatsTTSpanData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener: CombatEffectRenderListener);
    getSpans(activeEffect: ActiveCombatEffect): HTMLSpanElement[];
}
/** A tooltip span that displays turns specifically referencing the player */
declare class CombatEffectTurnsTTSpan extends CombatEffectTTSpan {
    readonly type: 'PlayerTurns' | 'EnemyTurns' | 'Turns' | 'LastsForTurns';
    /** The value to use for the number of turns left */
    readonly turns: CombatEffectNumberFunc;
    constructor(data: CombatEffectTurnsTTSpanData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener: CombatEffectRenderListener);
    getSpans(activeEffect: ActiveCombatEffect): HTMLSpanElement[];
}
/** A tooltip span that displays stacks and max stacks */
declare class CombatEffectStacksWithMaxTTSpan extends CombatEffectTTSpan {
    readonly type = "StacksWithMax";
    /** The value to use for the current amount of stacks */
    readonly stacks: CombatEffectNumberFunc;
    /** The value to use for the maximum number of stacks */
    readonly maxStacks: CombatEffectNumberFunc;
    constructor(data: CombatEffectStacksWithMaxTTSpanData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener: CombatEffectRenderListener);
    getSpans(activeEffect: ActiveCombatEffect): HTMLSpanElement[];
}
declare type AnyCombatEffectTTSpanData = CombatEffectLangTTSpanData | CombatEffectStringTTSpanData | CombatEffectStatsTTSpanData | CombatEffectTurnsTTSpanData | CombatEffectStacksWithMaxTTSpanData;
interface CombatEffectProgressBarData {
    currentValue: CombatEffectNumberExpression;
    maxValue: CombatEffectNumberExpression;
    /** CSS class to apply to the progress bar to determine its background colour */
    barStyle: string;
    /** CSS class to apply to the bar when it is full */
    fullStyles: string[];
}
interface CombatEffectProgressBarModel {
    currentValue: CombatEffectNumberFunc;
    maxValue: CombatEffectNumberFunc;
    /** CSS class to apply to the progress bar to determine its background colour */
    barStyle: string;
    /** CSS class to apply to the bar when it is full */
    fullStyles: string[];
}
interface CombatEffectDescriptionTemplateDataData {
    /**
     *  Record of template prefix to a value based on initial parameters. Value can reference the name of a parameter, or an equation composed of parameters
     *  @example {maxStacks: "stacks"} // Would generate template data in the form {"maxStacks": `${<inital value of stacks parameter>}`}
     */
    initialParameters?: Record<string, InitialParamNumberExpression>;
    /**
     * Record of template prefix to stat group name
     * String template data will be generated for each value of modifiers in the group, prefixed by `${prefix}modValue${i}`, where i is the order of the modifiers in the group
     * @example {buff: "stacks"} // Would generate template data in the form {"buffModValue0": `${<first modifier value>}`, "buffModValue1": `${<second modifier value>}`}
     */
    statGroups?: Record<string, string>;
    /**
     * Record of template prefix to damage group name
     * String template data will be generate for each element of the damage array in the group, prefixed by the key
     * @example {total: "total"} // Would generate template data in the form {"totalDamageMaxValue0": `${<value of maxPercent in first element of damage array>}`, "totalDamageMinValue0": `${value of minPercent in first element of damage array}`}
     */
    damageGroups?: Record<string, string>;
}
interface CombatEffectDescriptionTemplateData {
    initialParameters?: Record<string, (initialParams: Record<string, number>) => number>;
    statGroups?: Record<string, string>;
    damageGroups?: Record<string, string>;
}
/** Partial Data used to construct a CombatEffect. */
interface BaseCombatEffectData {
    /** Name of the effect to display in the effect's tooltip */
    name?: string;
    /** ID of the language string to use for the name of the effect */
    nameLang?: string;
    /** URI for the effect's icon's image */
    media?: string;
    /** Optional. If present this value will be rendered in the bottom-right corner of the effect's icon. */
    turnText?: CombatEffectNumberExpression;
    /** Defines spans that will be displayed in the tooltip of the effect */
    tooltipSpans?: AnyCombatEffectTTSpanData[];
    /** Optional. Specifies how the tooltipSpans will be merged with existing ones. Defaults to 'Replace'. */
    tooltipMergeMode?: 'Replace' | 'Start' | 'End';
    /** Optional. If present this effect will render a progress bar under the character's hitpoints, and a larger progress icon next to the numeric hitpoints */
    progressBar?: CombatEffectProgressBarData;
    /** Optional. If true, this effect will not render an icon when it is active. Defaults to false */
    noIcon?: boolean;
    /** Determines the string template data that will be generated from this effect. Used to template special attack descriptions */
    descriptionTemplateData?: CombatEffectDescriptionTemplateDataData;
    /** Determines the default character the effect should be applied to when an applicator with this effect is processed. */
    target?: CombatEffectTarget;
    /** Defines parameters for the effect. */
    parameters?: CombatEffectParameter[];
    /** Defines timers for the effect. Timers can be used as a trigger for behaviours. */
    timers?: CombatEffectTimer[];
    /** Defines stat groups for the effect. Stat groups can be applied to the character the effect is active on. */
    statGroups?: CombatEffectStatGroupData[];
    /** Defines damage groups for the effect. Damage groups can be referenced as values in the effect. */
    damageGroups?: CombatEffectDamageGroupData[];
    /** Defines behaviours for the effect. Behaviours will be executed in the order of definition, unless the priority property is set. */
    behaviours?: AnyCombatEffectBehaviourData[];
    /** The IDs of effect groups that this effect belongs to. */
    effectGroups?: string[];
    /** The IDs of effect groups that block the application of this effect if they are present on the character it is being applied to */
    exclusiveGroups?: string[];
}
/** Data used to construct a CombatEffect */
declare type CombatEffectData = PickRequired<BaseCombatEffectData, 'name' | 'media' | 'target' | 'behaviours'> & IDData;
/** Data for constructing a CombatEffect from a CombatEffectTemplate */
declare type TemplatedCombatEffectData = BaseCombatEffectData & {
    /** The ID of the CombatEffectTemplate to inherit data from */
    templateID: string;
} & IDData;
declare type AnyCombatEffectData = CombatEffectData | TemplatedCombatEffectData;
/** The different types of named properties available to a CombatEffect. Used for expression validation. */
interface CombatEffectNamedProperties {
    parameters: string[];
    statGroups: string[];
    timers: string[];
    damageGroups: string[];
}
/** Data used to construct a CombatEffectGroup */
interface CombatEffectGroupData extends IDData {
    /** Display name of this effect group for use in modifiers */
    name: string;
    /** Id of language string to use for name */
    nameLang?: string;
    /** Adjective describing the state of a character impacted by this effect group (e.g. Burning). Used to generate descriptions. */
    adjective: string;
}
/** Registered data class used to categorize CombatEffects */
declare class CombatEffectGroup extends NamespacedObject {
    /** Gets the display name of this effect group for use in modifiers */
    get name(): string;
    /** Adjective describing the state of a character impacted by this effect group (e.g. Burning). Used to generate descriptions. */
    adjective: string;
    _name: string;
    _nameLang?: string;
    constructor(namespace: DataNamespace, data: CombatEffectGroupData);
}
interface BehaviourTriggerConditionData {
    /** The comparison operation to perform between the left-hand and right-hand values */
    operator: Comparison;
    /** left-hand value to use in the comparison */
    lhValue: CombatEffectNumberExpression;
    /** right-hand value to use in the comparison */
    rhValue: CombatEffectNumberExpression;
}
declare class BehaviourTriggerCondition {
    /** The comparison operation to perform between the left-hand and right-hand values */
    readonly operator: Comparison;
    /** left-hand value to use in the comparison */
    readonly lhValue: CombatEffectNumberFunc;
    /** right-hand value to use in the comparison */
    readonly rhValue: CombatEffectNumberFunc;
    constructor(data: BehaviourTriggerConditionData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, listener?: CombatEffectRenderListener);
}
/** Data used to construct a CombatBehaviourTrigger */
interface CombatBehaviourTriggerData {
    /** Optional. Defines a condition that must be true for the behaviour to execute from this trigger */
    condition?: BehaviourTriggerConditionData;
}
/** Base class for all Combat Effect Behaviour Triggers */
declare abstract class CombatBehaviourTrigger<Event extends GameEvent> {
    /** Optional. If present, this condition must be met for the behaviour to execute from this trigger */
    condition?: BehaviourTriggerCondition;
    constructor(data: CombatBehaviourTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    /**
     * Assigns Event Handlers for the behaviour trigger
     * @param handler The function to call when the trigger occurs
     * @param activeEffect The active effect this trigger was called from
     * @param character The character the effect was active on
     * @returns A function that unassigns the event handler
     */
    assignHandler(handler: Handler<Event>, activeEffect: ActiveCombatEffect, character: Character): VoidFunction;
    /** Method that assigns event handlers to either the activeEffect or character */
    abstract _assignHandler(handler: Handler<Event>, activeEffect: ActiveCombatEffect, character: Character): void;
    /** Method that unassigns event handlers from either the activeEffect or character */
    abstract _unassignHandler(handler: Handler<Event>, activeEffect: ActiveCombatEffect, character: Character): void;
    /** Checks if all conditions that have been defined are met */
    doesEventMatch(event: Event, activeEffect: ActiveCombatEffect, character: Character): boolean;
}
/** Data used to construct an EndOfTurnTrigger */
interface EndOfTurnTriggerData extends CombatBehaviourTriggerData {
    type: 'EndOfTurn';
    /** Determines whether the behaviour executes at the end of the character's turn or their target's */
    target: CombatEffectTarget;
}
/** Behaviour trigger that occurs at the end of a character's turn */
declare class EndOfTurnTrigger extends CombatBehaviourTrigger<CharacterEndOfTurnEvent> {
    /** Determines whether the behaviour executes at the end of the character's turn or their target's */
    target: CombatEffectTarget;
    constructor(data: EndOfTurnTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CharacterEndOfTurnEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<CharacterEndOfTurnEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct a HitWithAttackTrigger */
interface HitWithAttackTriggerData extends CombatBehaviourTriggerData {
    type: 'HitWithAttack';
}
/** Behaviour trigger that occurs when the character hits with an attack */
declare class HitWithAttackTrigger extends CombatBehaviourTrigger<CharacterAttackEvent> {
    constructor(data: HitWithAttackTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CharacterAttackEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<CharacterAttackEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct a MissedWithAttackTrigger */
interface MissedWithAttackTriggerData extends CombatBehaviourTriggerData {
    type: 'MissedWithAttack';
}
/** Behaviour trigger that occurs when the character misses with an attack */
declare class MissedWithAttackTrigger extends CombatBehaviourTrigger<CharacterAttackEvent> {
    constructor(data: MissedWithAttackTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CharacterAttackEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<CharacterAttackEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct a HitByAttackTrigger */
interface HitByAttackTriggerData extends CombatBehaviourTriggerData {
    type: 'HitByAttack';
}
/** Behaviour trigger that occurs when the character is hit by an attack */
declare class HitByAttackTrigger extends CombatBehaviourTrigger<CharacterAttackedEvent> {
    constructor(data: HitByAttackTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CharacterAttackedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<CharacterAttackedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct an EvadedAttackTrigger */
interface EvadedAttackTriggerData extends CombatBehaviourTriggerData {
    type: 'EvadedAttack';
}
/** Behaviour trigger that occurs when the character evades an attack */
declare class EvadedAttackTrigger extends CombatBehaviourTrigger<CharacterAttackedEvent> {
    constructor(data: EvadedAttackTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CharacterAttackedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<CharacterAttackedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct a PostAttackTrigger */
interface PostAttackTriggerData extends CombatBehaviourTriggerData {
    type: 'PostAttack';
}
/** Behaviour trigger that occurs after a character attacks */
declare class PostAttackTrigger extends CombatBehaviourTrigger<CharacterAttackEvent> {
    constructor(data: PostAttackTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CharacterAttackEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<CharacterAttackEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct a WasAttackedTrigger */
interface WasAttackedTriggerData extends CombatBehaviourTriggerData {
    type: 'WasAttacked';
}
/** Behaviour trigger that occurs after a character is attacked */
declare class WasAttackedTrigger extends CombatBehaviourTrigger<CharacterAttackedEvent> {
    constructor(data: WasAttackedTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CharacterAttackedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<CharacterAttackedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct an EndOfFightTrigger */
interface EndOfFightTriggerData extends CombatBehaviourTriggerData {
    type: 'EndOfFight';
}
/** Behaviour trigger that occurs at the end of a fight */
declare class EndOfFightTrigger extends CombatBehaviourTrigger<EndOfFightEvent> {
    constructor(data: EndOfFightTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<EndOfFightEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<EndOfFightEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
}
/** Data used to construct a PrayerPointUseTrigger */
interface PrayerPointUseTriggerData extends CombatBehaviourTriggerData {
    type: 'PrayerPointUse';
    /** Optional. If present the prayer that is using points must be of the same type for the behaviour to execute */
    isUnholy?: boolean;
}
/** Behaviour trigger that occurs whenever the player would use prayer points. Having 2 active prayers consume points at the same time causes the behaviour to execute twice. */
declare class PrayerPointUseTrigger extends CombatBehaviourTrigger<PrayerPointConsumptionEvent> {
    /** Optional. If present the prayer that is using points must be of the same type for the behaviour to execute */
    isUnholy?: boolean;
    constructor(data: PrayerPointUseTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<PrayerPointConsumptionEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<PrayerPointConsumptionEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    doesEventMatch(event: PrayerPointConsumptionEvent, activeEffect: ActiveCombatEffect, character: Character): boolean;
}
/** Data used to construct a EquipmentChangedTrigger */
interface EquipmentChangedTriggerData extends CombatBehaviourTriggerData {
    type: 'EquipmentChanged';
    /** Optional. The IDs of equipment items the player must not have equipped for the behaviour to execute */
    isNotEquipped?: string[];
    /** Optional. The IDs of equipment items the player must have equipped for the behaviour to execute */
    isEquipped?: string[];
}
/** Behaviour trigger that occurs whenever the player changes their current equipment. Can occur due to (un)equipping items, or changing equipment sets. */
declare class EquipmentChangedTrigger extends CombatBehaviourTrigger<EquipmentChangedEvent> implements SoftDataDependant<EquipmentChangedTriggerData> {
    /** Optional. If present, the player must not have any of these items equipped for the behaviour to execute */
    isNotEquipped?: EquipmentItem[];
    /** Optional. If present, the player must have all of these items equipped for the behaviour to execute */
    isEquipped?: EquipmentItem[];
    constructor(data: EquipmentChangedTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, game: Game);
    registerSoftDependencies(data: EquipmentChangedTriggerData, game: Game): void;
    _assignHandler(handler: Handler<EquipmentChangedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    _unassignHandler(handler: Handler<EquipmentChangedEvent>, activeEffect: ActiveCombatEffect, character: Character): void;
    doesEventMatch(event: EquipmentChangedEvent, activeEffect: ActiveCombatEffect, character: Character): boolean;
}
/** Data used to construct a ParameterChangedTrigger */
interface ParameterChangedTriggerData extends CombatBehaviourTriggerData {
    type: 'ParameterChange';
    /** The name of the parameter that changes */
    paramName: string;
}
/** Behaviour trigger that occurs when the specified parameter changes on the ActiveCombatEffect */
declare class ParameterChangedTrigger extends CombatBehaviourTrigger<CombatEffectParameterChangedEvent> {
    /** The name of the parameter that changes */
    paramName: string;
    constructor(data: ParameterChangedTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CombatEffectParameterChangedEvent>, activeEffect: ActiveCombatEffect): void;
    _unassignHandler(handler: Handler<CombatEffectParameterChangedEvent>, activeEffect: ActiveCombatEffect): void;
    doesEventMatch(event: CombatEffectParameterChangedEvent, activeEffect: ActiveCombatEffect, character: Character): boolean;
}
/** Data used to construct a ModifierChangedTrigger */
interface StatsChangedTriggerData extends CombatBehaviourTriggerData {
    type: 'StatsChange';
    /** The name of the stat group that changed */
    statGroupName: string;
}
/** Behaviour trigger that occurs when the specified stat group changes on the ActiveCombatEffect */
declare class StatsChangedTrigger extends CombatBehaviourTrigger<CombatEffectStatsChangedEvent> {
    /** The name of the stat group that changes */
    statGroupName: string;
    constructor(data: StatsChangedTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CombatEffectStatsChangedEvent>, activeEffect: ActiveCombatEffect): void;
    _unassignHandler(handler: Handler<CombatEffectStatsChangedEvent>, activeEffect: ActiveCombatEffect): void;
    doesEventMatch(event: CombatEffectStatsChangedEvent, activeEffect: ActiveCombatEffect, character: Character): boolean;
}
/** Data used to construct a TimerFiredTrigger */
interface TimerFiredTriggerData extends CombatBehaviourTriggerData {
    type: 'TimerFired';
    /** The name of the timer that fires */
    timerName: string;
}
/** Behaviour trigger that occurs when the specified timer fires on the ActiveCombatEffect */
declare class TimerFiredTrigger extends CombatBehaviourTrigger<CombatEffectTimerFiredEvent> {
    /** The name of the timer that fires */
    timerName: string;
    constructor(data: TimerFiredTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CombatEffectTimerFiredEvent>, activeEffect: ActiveCombatEffect): void;
    _unassignHandler(handler: Handler<CombatEffectTimerFiredEvent>, activeEffect: ActiveCombatEffect): void;
    doesEventMatch(event: CombatEffectTimerFiredEvent, activeEffect: ActiveCombatEffect, character: Character): boolean;
}
/** Data used to construct an EffectAppliedTrigger */
interface EffectAppliedTriggerData extends CombatBehaviourTriggerData {
    type: 'EffectApplied';
}
/** Behaviour trigger that occurs when an effect is first applied to the character */
declare class EffectAppliedTrigger extends CombatBehaviourTrigger<CombatEffectAppliedEvent> {
    constructor(data: EffectAppliedTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CombatEffectAppliedEvent>, activeEffect: ActiveCombatEffect): void;
    _unassignHandler(handler: Handler<CombatEffectAppliedEvent>, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct an EffectReappliedTrigger */
interface EffectReappliedTriggerData extends CombatBehaviourTriggerData {
    type: 'EffectReapplied';
}
/** Behaviour trigger that occurs when an effect is applied to the character, but is already active */
declare class EffectReappliedTrigger extends CombatBehaviourTrigger<CombatEffectReappliedEvent> {
    constructor(data: EffectReappliedTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CombatEffectReappliedEvent>, activeEffect: ActiveCombatEffect): void;
    _unassignHandler(handler: Handler<CombatEffectReappliedEvent>, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct an EffectRemovedTrigger */
interface EffectRemovedTriggerData extends CombatBehaviourTriggerData {
    type: 'EffectRemoved';
}
/** Behaviour trigger that occurs just before an effect is removed from the character */
declare class EffectRemovedTrigger extends CombatBehaviourTrigger<CombatEffectRemovedEvent> {
    constructor(data: EffectRemovedTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _assignHandler(handler: Handler<CombatEffectRemovedEvent>, activeEffect: ActiveCombatEffect): void;
    _unassignHandler(handler: Handler<CombatEffectRemovedEvent>, activeEffect: ActiveCombatEffect): void;
}
declare type AnyCombatEffectBehaviourTriggerData = EndOfTurnTriggerData | HitWithAttackTriggerData | MissedWithAttackTriggerData | HitByAttackTriggerData | EvadedAttackTriggerData | PostAttackTriggerData | WasAttackedTriggerData | EndOfFightTriggerData | PrayerPointUseTriggerData | ParameterChangedTriggerData | StatsChangedTriggerData | TimerFiredTriggerData | EffectAppliedTriggerData | EffectReappliedTriggerData | EffectRemovedTriggerData | EquipmentChangedTriggerData;
/** Represents an Expression string that can reference values from a combat effect */
declare type CombatEffectNumberExpression = number | string;
/** Represents an Expression string that can reference values from a character */
declare type CharacterNumberExpression = number | string;
/** Represents an Expression string that can reference the initial parameters of an effect applicator */
declare type InitialParamNumberExpression = number | string;
/** Data used to construct a CombatEffectBehaviour */
interface CombatEffectBehaviourData {
    /** Array of triggers that determine when this behaviour is executed */
    triggersOn: AnyCombatEffectBehaviourTriggerData[];
    /** Optional. Determines the chance that this behaviour is executed when a trigger occurs. Defaults to 100. */
    chance?: CombatEffectNumberExpression;
    /** Optional. Specifies the priority of executing this behaviour. Higher values will be executed before lower values. Defaults to 0 */
    priority?: number;
}
/** Base class for all Combat Effect Behaviours */
declare abstract class CombatEffectBehaviour {
    /** Array of triggers that determine when this should be executed */
    triggersOn: CombatBehaviourTrigger<GameEvent>[];
    /** Chance that this should be executed when a trigger occurs */
    chance?: CombatEffectNumberFunc;
    /** Determines priority of executing this behaviour over others. Triggers will be assigned from lowest to highest priority behaviours. */
    priority: number;
    constructor(data: CombatEffectBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    /** Executes the given behaviour if the roll for chance is successful */
    execute(character: Character, activeEffect: ActiveCombatEffect): void;
    /** Constructs any registered trigger from data */
    constructTrigger(data: AnyCombatEffectBehaviourTriggerData, transpiler: IExprTranspiler<CombatEffectNumberFunc>, game: Game): CombatBehaviourTrigger<GameEvent>;
    /** Method that is called when this behaviour is executed */
    abstract _execute(character: Character, activeEffect: ActiveCombatEffect): void;
    /** Registers a new trigger type that can be used in behaviours */
    static registerTrigger<T extends keyof BehaviourTriggerNameMap>(name: T, constructor: BehaviourTriggerNameMap[T]): void;
    /** Registers the default triggers that ship with the game */
    static registerDefaultTriggers(): void;
    /** Stores the constructors of registered trigger classes */
    static triggerClasses: BehaviourTriggerNameMap;
}
interface BehaviourTriggerNameMap {
    EndOfTurn: typeof EndOfTurnTrigger;
    HitWithAttack: typeof HitWithAttackTrigger;
    MissedWithAttack: typeof MissedWithAttackTrigger;
    HitByAttack: typeof HitByAttackTrigger;
    EvadedAttack: typeof EvadedAttackTrigger;
    PostAttack: typeof PostAttackTrigger;
    WasAttacked: typeof WasAttackedTrigger;
    EndOfFight: typeof EndOfFightTrigger;
    PrayerPointUse: typeof PrayerPointUseTrigger;
    ParameterChange: typeof ParameterChangedTrigger;
    StatsChange: typeof StatsChangedTrigger;
    TimerFired: typeof TimerFiredTrigger;
    EffectApplied: typeof EffectAppliedTrigger;
    EffectReapplied: typeof EffectReappliedTrigger;
    EffectRemoved: typeof EffectRemovedTrigger;
    EquipmentChanged: typeof EquipmentChangedTrigger;
}
/** Data used to construct an InterruptTurnBehaviour */
interface InterruptTurnBehaviourData extends CombatEffectBehaviourData {
    type: 'InterruptTurn';
}
/** Combat effect behaviour that interrupts the characters turn, resetting their action timer and cancelling any special attacks they were performing */
declare class InterruptTurnBehaviour extends CombatEffectBehaviour {
    constructor(data: InterruptTurnBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a ProcessEffectApplicatorBehaviour */
interface ProcessEffectApplicatorBehaviourData extends CombatEffectBehaviourData {
    type: 'ProcessApplicator';
    /** Data for an effect Applicator that is processed when the behaviour is executed */
    applicator: AnyCombatEffectApplicatorData;
}
/** Combat effect behaviour that processes an effect applicator via the character the effect is applied to when executed */
declare class ProcessEffectApplicatorBehaviour extends CombatEffectBehaviour {
    /** The applicator to process when executed */
    applicator: CombatEffectApplicator;
    constructor(data: ProcessEffectApplicatorBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a RemoveEffectBehaviour */
interface RemoveEffectBehaviourData extends CombatEffectBehaviourData {
    type: 'RemoveEffect';
}
/** Combat effect behaviour that removes the effect from the character */
declare class RemoveEffectBehaviour extends CombatEffectBehaviour {
    constructor(data: RemoveEffectBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a ModifyBehaviour */
interface ModifyBehaviourData extends CombatEffectBehaviourData {
    /** Operations that will be applied to the value being modified */
    operations: CombatEffectNumberExpression;
}
/** Base class for Combat effect behaviours that modify a value on an ActiveCombatEffect */
declare abstract class ModifyBehaviour extends CombatEffectBehaviour {
    /** Operations to apply to the value being modified */
    newValue: CombatEffectNumberFunc;
    constructor(data: ModifyBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    /** Performs the operations of this object on the value, using character and activeEffect for parameters */
    getNewValue(activeEffect: ActiveCombatEffect): number;
}
/** Data used to construct a ModifyStatsBehaviour */
interface ModifyStatsBehaviourData extends ModifyBehaviourData {
    type: 'ModifyStats';
    /** The name of the stat group whose value should be modified */
    statGroupName: string;
}
/** Combat Effect Behaviour that modifies the value of a stat group on the ActiveCombatEffect. Modifiers/Effect Applicators are automatically applied to the character. */
declare class ModifyStatsBehaviour extends ModifyBehaviour {
    /** The name of the stat group whose value should be modified */
    statGroupName: string;
    constructor(data: ModifyStatsBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a ModifyParameterBehaviour */
interface ModifyParameterBehaviourData extends ModifyBehaviourData {
    type: 'ModifyParameter';
    /** The name of the parameter whose current value should be modified */
    paramName: string;
}
/** Combat Effect Behaviour that modifies the current value of a parameter on the ActiveCombatEffect */
declare class ModifyParameterBehaviour extends ModifyBehaviour {
    /** The name of the parameter whose current value should be modified */
    paramName: string;
    constructor(data: ModifyParameterBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a DamageCharacterBehaviour */
interface DamageCharacterBehaviourData extends CombatEffectBehaviourData {
    type: 'DamageCharacter';
    /** The amount of damage to deal to the character */
    value: CombatEffectNumberExpression;
    /** Optional. Determines the colour of the damage splash, and which lifesteal modifiers from the source character to apply */
    damageType?: DOTType;
}
/** Combat Effect Behaviour that causes damage to the character. Will damage barrier if the appropriate damageType is set. */
declare class DamageCharacterBehaviour extends CombatEffectBehaviour {
    game: Game;
    /** The amount of damage to deal to the character */
    value: CombatEffectNumberFunc;
    /** Optional. Determines the colour of the damage splash, and which lifesteal modifiers from the source character to apply */
    damageType?: DOTType;
    constructor(data: DamageCharacterBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a DamageBarrierBehaviour */
interface DamageBarrierBehaviourData extends CombatEffectBehaviourData {
    type: 'DamageBarrier';
    /** The amount of damage to deal to the charater's barrier */
    value: CombatEffectNumberExpression;
    /** Optional. Determines the colour of the damage splash */
    damageType?: DOTType;
}
/** Combat Effect Behaviour that damages a character's barrier. Cannot damage hitpoints. */
declare class DamageBarrierBehaviour extends CombatEffectBehaviour {
    game: Game;
    /** The amount of damage to deal to the charater's barrier */
    value: CombatEffectNumberFunc;
    /** Optional. Determines the colour of the damage splash */
    damageType?: DOTType;
    constructor(data: DamageBarrierBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a HealCharacterBehaviour */
interface HealCharacterBehaviourData extends CombatEffectBehaviourData {
    type: 'HealCharacter';
    /** The amount of hitpoints to heal the character */
    value: CombatEffectNumberExpression;
}
/** Combat Effect Behaviour that heals the character's hitpoints. */
declare class HealCharacterBehaviour extends CombatEffectBehaviour {
    /** The amount of hitpoints to heal the character */
    value: CombatEffectNumberFunc;
    constructor(data: HealCharacterBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a HealBarrierBehaviour */
interface HealBarrierBehaviourData extends CombatEffectBehaviourData {
    type: 'HealBarrier';
    /** The amount of barrier to heal the character */
    value: CombatEffectNumberExpression;
}
declare class HealBarrierBehaviour extends CombatEffectBehaviour {
    /** The amount of barrier to heal the character */
    value: CombatEffectNumberFunc;
    constructor(data: HealBarrierBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a StartTimerBehaviour */
interface StartTimerBehaviourData extends CombatEffectBehaviourData {
    type: 'StartTimer';
    /** The name of the timer to start */
    timerName: string;
    /** Value of interval to start the timer with in [ms] */
    value: CombatEffectNumberExpression;
}
/** Combat Effect Behaviour that starts the specified timer on the ActiveCombatEffect */
declare class StartTimerBehaviour extends CombatEffectBehaviour {
    timerName: string;
    value: CombatEffectNumberFunc;
    constructor(data: StartTimerBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct a StopTimerBehaviour */
interface StopTimerBehaviourData extends CombatEffectBehaviourData {
    type: 'StopTimer';
    /** The name of the timer to stop */
    timerName: string;
}
/** Combat Effect Behaviour that stops the specified timer on the ActiveCombatEffect */
declare class StopTimerBehaviour extends CombatEffectBehaviour {
    /** The name of the timer to stop */
    timerName: string;
    constructor(data: StopTimerBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Data used to construct an UpdatePrayerModifiersBehaviour */
interface UpdatePrayerModifiersBehaviourData extends CombatEffectBehaviourData {
    type: 'UpdatePrayerModifiers';
    /** The value to set the Unholy Prayer multiplier to */
    updateTo: CombatEffectNumberExpression;
}
/** Combat Effect Behaviour that updates the current modifier multiplier of the player's Unholy Prayers */
declare class UpdatePrayerModifiersBehaviour extends CombatEffectBehaviour {
    /** The value to set the Unholy Prayer multiplier to */
    updateTo: CombatEffectNumberFunc;
    constructor(data: UpdatePrayerModifiersBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
interface ApplyCorruptionBehaviourData extends CombatEffectBehaviourData {
    type: 'ApplyCorruption';
}
declare class ApplyCorruptionBehaviour extends CombatEffectBehaviour {
    corruption: Corruption;
    constructor(data: ApplyCorruptionBehaviourData, game: Game, transpiler: IExprTranspiler<CombatEffectNumberFunc>);
    _execute(character: Character, activeEffect: ActiveCombatEffect): void;
}
/** Utility class for assigning event handlers that cause a rendering update for ActiveCombatEffects */
declare class CombatEffectRenderListener implements ExprVisitor<void> {
    /** The names of parameters that should cause a render update when changed */
    parameters: Set<string>;
    /** The names of stat groups that should cause a render update when changed */
    statGroups: Set<string>;
    /** Array of triggers that cause rendering updates */
    triggers: CombatBehaviourTrigger<GameEvent>[];
    /** Add triggers for combat effect expression values */
    addExprTriggers(expr: Expr): void;
    addParameter(name: string): void;
    addStatGroup(name: string): void;
    /** Constructs the actual trigger objects */
    constructTriggers(transpiler: IExprTranspiler<CombatEffectNumberFunc>): void;
    /** Assigns a rendering handler for each trigger, and returns an array of unassignment functions */
    assignHandlers(handler: VoidFunction, activeEffect: ActiveCombatEffect, character: Character): VoidFunction[];
    visitTernaryExpr(expr: TernaryExpr): void;
    visitLogicalExpr(expr: LogicalExpr): void;
    visitBinaryExpr(expr: BinaryExpr): void;
    visitUnaryExpr(expr: UnaryExpr): void;
    visitLiteralExpr(expr: LiteralExpr): void;
    visitBuiltInExpr(expr: BuiltInExpr): void;
    visitReferenceExpr(expr: ReferenceExpr): void;
    visitGroupingExpr(expr: GroupingExpr): void;
}
/** Registered data class for Combat Effects. Determines how the effect behaves and is rendered */
declare class CombatEffect extends NamespacedObject {
    /** Gets the name to display in the effects tooltip */
    get name(): string;
    /** Name to use for modded effects */
    _name: string;
    /** ID of language string to use for name */
    _nameLang?: string;
    /** URI for the image's source in the effect's icon */
    get media(): string;
    _media: string;
    /** If present, this value will be rendered in the bottom-right of the effects icon */
    turnText?: CombatEffectNumberFunc;
    /** Determines the spans that are rendered in the active effects tooltip */
    tooltipSpans: CombatEffectTTSpan[];
    progressBar?: CombatEffectProgressBarModel;
    /** If this effect should not render an icon */
    noIcon: boolean;
    /** Determines the string template data that is generated from this effect */
    descriptionTemplateData?: CombatEffectDescriptionTemplateData;
    /** Handles the assignment of event handlers for rendering */
    renderListener: CombatEffectRenderListener;
    /** The default chracter this effect is applied to when processed */
    target: CombatEffectTarget;
    /** Record of parameter names to initial values */
    parameters: Record<string, number>;
    /** Record of stat group names to stat groups */
    statGroups: Record<string, CombatEffectStatGroup>;
    /** The names of timers that should be constructed in the active effect */
    timers: {
        name: string;
    }[];
    /** Record of damage group names to damage groups */
    damageGroups: Record<string, CombatEffectDamageGroup>;
    /** Behaviours that determine what this effect does */
    behaviours: CombatEffectBehaviour[];
    /** Effect groups this effect belongs to */
    effectGroups: CombatEffectGroup[];
    /** Effect groups that if present, prevent this effect from being applied */
    exclusiveGroups: CombatEffectGroup[];
    /** The template this effect was generated from. Used for debugging/description generation */
    template?: CombatEffectTemplate;
    readonly modQuery: ModifierQuery;
    constructor(namespace: DataNamespace, data: CombatEffectData, game: Game);
    /** Adds string template data to an existing string template data object */
    addTemplateData(data: StringDictionary<string>, preKey: string, initialParams?: Record<string, number>): void;
    /** Registers a new behaviour type that can be used in Combat Effects */
    static registerBehaviour<T extends keyof CombatBehaviourNameMap>(name: T, constructor: CombatBehaviourNameMap[T]): void;
    /** Registers the default behaviours that ship with the game */
    static registerDefaultBehaviours(): void;
    /** Stores the constructors of registered behaviour classes */
    static behaviourClasses: CombatBehaviourNameMap;
}
interface CombatBehaviourNameMap {
    InterruptTurn: typeof InterruptTurnBehaviour;
    ProcessApplicator: typeof ProcessEffectApplicatorBehaviour;
    RemoveEffect: typeof RemoveEffectBehaviour;
    ModifyStats: typeof ModifyStatsBehaviour;
    ModifyParameter: typeof ModifyParameterBehaviour;
    DamageCharacter: typeof DamageCharacterBehaviour;
    DamageBarrier: typeof DamageBarrierBehaviour;
    HealCharacter: typeof HealCharacterBehaviour;
    StartTimer: typeof StartTimerBehaviour;
    StopTimer: typeof StopTimerBehaviour;
    UpdatePrayerModifiers: typeof UpdatePrayerModifiersBehaviour;
    ApplyCorruption: typeof ApplyCorruptionBehaviour;
    HealBarrier: typeof HealBarrierBehaviour;
}
declare type AnyCombatEffectBehaviourData = InterruptTurnBehaviourData | ProcessEffectApplicatorBehaviourData | RemoveEffectBehaviourData | ModifyStatsBehaviourData | ModifyParameterBehaviourData | DamageCharacterBehaviourData | DamageBarrierBehaviourData | HealCharacterBehaviourData | StartTimerBehaviourData | StopTimerBehaviourData | UpdatePrayerModifiersBehaviourData | ApplyCorruptionBehaviourData | HealBarrierBehaviourData;
/** Data used to construct a CombatEffectTemplate */
interface CombatEffectTemplateData extends IDData {
    /** Optional. Description with instructions on the use of this template */
    description?: string;
    /** Optional. Array of the IDs of templates to base this one on. Each will be merged together, in the order they appear, then the baseEffectData of this template will be merged ontop. */
    baseTemplates?: string[];
    /** The partial combat effect data that will be inherited by other templates/combat effects */
    baseEffectData: BaseCombatEffectData;
}
/** Registered data class that allows for the inheritance of partial combat effect data */
declare class CombatEffectTemplate extends NamespacedObject {
    /** The partial combat effect data that is inherited by descendants of this template */
    baseEffectData: BaseCombatEffectData;
    /** The list of all data keys that must be defined in order to construct a Combat Effect from this template */
    requiredKeys: (keyof CombatEffectData)[];
    constructor(namespace: DataNamespace, data: CombatEffectTemplateData, game: Game);
    /** Constructs a new CombatEffect, inheriting from this template's baseEffectData */
    createEffect(namespace: DataNamespace, data: TemplatedCombatEffectData, game: Game): CombatEffect;
    /** Merges the data from one base effect data to another, mutating the to data, but keeping the from data intact. */
    mergeBaseEffectData(from: BaseCombatEffectData, to: BaseCombatEffectData): void;
    /** Computes the keys that must be defined in data to construct a CombatEffect from this template */
    computeRequiredKeys(): void;
    /** Validates if Partial combat effect data can be used to construct an effect from this template */
    validateEffectData(data: Partial<CombatEffectData>, namespace: string): data is CombatEffectData;
}
interface CombatEffectSource {
    /** Why the effect was applied. "Attack" - from a special attack. "Effect" - from another Combat Effect. "Other" - from a characters effect applicators */
    type: 'Attack' | 'Effect' | 'Other';
    /** The raw damage taken when the effect applicator was processed */
    damageTaken?: number;
    /** The raw damage dealt when the effect applicator was processed */
    damageDealt?: number;
}
/** Event fired by ActiveCombatEffect when a parameter changes in value */
declare class CombatEffectParameterChangedEvent extends GameEvent {
    paramName: string;
    oldValue: number;
    newValue: number;
    /**
     *
     * @param paramName The name of the parameter that changed
     * @param oldValue The previous value of the parameter
     * @param newValue The new value of the parameter
     */
    constructor(paramName: string, oldValue: number, newValue: number);
}
/** Event fired by ActiveCombatEffect when a stat group changes in value */
declare class CombatEffectStatsChangedEvent extends GameEvent {
    statGroupName: string;
    oldValue: number;
    newValue: number;
    /**
     *
     * @param statGroupName The name of the stat group that changed
     * @param oldValue The previous value of the stat group
     * @param newValue The new value of the stat group
     */
    constructor(statGroupName: string, oldValue: number, newValue: number);
}
/**
 * Event fired by ActiveCombatEffect when a timer fires
 */
declare class CombatEffectTimerFiredEvent extends GameEvent {
    timerName: string;
    /**
     *
     * @param timerName The name of the timer that fired
     */
    constructor(timerName: string);
}
/**
 * Event fired by ActiveCombatEffect when it is first applied to a character
 */
declare class CombatEffectAppliedEvent extends GameEvent {
    source: CombatEffectSource;
    /**
     *
     * @param source The source of the effect application
     */
    constructor(source: CombatEffectSource);
}
/**
 * Event fired by ActiveCombatEffect when it is reapplied to a character
 */
declare class CombatEffectReappliedEvent extends GameEvent {
    source: CombatEffectSource;
    /**
     *
     * @param source The source of the effect reapplication
     */
    constructor(source: CombatEffectSource);
}
/**
 * Event fired by ActiveCombatEffect just before it is removed from a character
 */
declare class CombatEffectRemovedEvent extends GameEvent {
    constructor();
}
/** Data used to construct a CombatEffectTable */
interface CombatEffectTableData extends IDData {
    /** Array from which a random CombatEffect can be selected from */
    table: {
        /** The ID of the CombatEffect to select */
        effectID: string;
        /** Optional. Specifies overrides to the initial values of parameters in the active effect */
        initialParams?: {
            name: string;
            value: number;
        }[];
        /** The relative weight of selecting this effect */
        weight: number;
    }[];
}
/** Registered data class used to select random combat effects */
declare class CombatEffectTable extends NamespacedObject {
    /** The total of all the weight properties in the table */
    totalWeight: number;
    /** Array of combat effect applicators that can be selected from */
    table: {
        applicator: SingleCombatEffectApplicator;
        weight: number;
    }[];
    constructor(namespace: DataNamespace, data: CombatEffectTableData, game: Game);
    /** Gets a random effect from this table */
    getEffectApplicator(): SingleCombatEffectApplicator;
}
/** Data used to construct a CombatEffectApplicator */
interface CombatEffectApplicatorData {
    /** Optional. Specifies the chance to apply an effect. Defaults to 100 */
    chance?: number;
    /** Optional. Specifies a condition that must be met for the effect to be applied */
    condition?: CombatEffectApplicatorConditionData;
    /** Optional. If present, the default target for the effect will be replaced with this */
    targetOverride?: CombatEffectTarget;
    /** Optional. Determines if the effect can be applied even when the target has barrier, if applying the effect from self to target. Defaults to false. */
    bypassBarrier?: boolean;
}
/** Data used to contstruct a CombatEffectApplicator with a given trigger */
interface CombatEffectApplicatorTriggerData {
    /** Specifies a trigger for when the effect should be appled */
    appliesWhen: CombatEffectApplicationTrigger;
    /** Optional. Specifies if the effect should be applied when the applicator is merged. Defaults to false. */
    applyEffectWhenMerged?: boolean;
    /** Optional. Specifies a string which will be used as a custom description for this applicator */
    customDescription?: string;
    /** Optional. Specifies the ID of a language string which will be used as a custom description for this applicator */
    descriptionLang?: string;
    /** Optional. Specifies if this applicator's description should be formatted as negative. Defaults to false. */
    isNegative?: boolean;
}
/** Defines a condition for a CombatEffectApplicator that depends on the raw damage dealt during application */
interface DamageDealtConditionData {
    type: 'DamageDealt';
    /** Comparison operator to use between the raw damage dealt and the rhValue */
    operator: Comparison;
    /** The right-hand value to use in the comparison. The left-hand value is set to the raw damage dealt. */
    rhValue: CharacterNumberExpression;
}
/** Defines a condition for a CombatEffectApplicator that depends on the raw damage taken during application */
interface DamageTakenConditionData {
    type: 'DamageTaken';
    /** Comparison operator to use between the raw damage taken and the rhValue */
    operator: Comparison;
    /** The right-hand value to use in the comparison. The left-hand value is set to the raw damage taken. */
    rhValue: CharacterNumberExpression;
}
/** Defines a condition for a CombatEffectApplicator that depends on values of the character that is processing the applicator */
interface CharacterNamedValueConditionData {
    type: 'CharacterValue';
    /** Comparison operator to use between the left-hand and right-hand values */
    operator: Comparison;
    /** The left-hand value to use in the comparison. */
    lhValue: CharacterNumberExpression;
    /** The right-hand value to use in the comparison. */
    rhValue: CharacterNumberExpression;
}
/** Defines a condition for a CombatEffectApplicator that depends on the raw damage dealt during application */
interface DamageDealtCondition {
    type: 'DamageDealt';
    /** Comparison operator to use between the raw damage dealt and the rhValue */
    operator: Comparison;
    /** The right-hand value to use in the comparison. The left-hand value is set to the raw damage dealt. */
    rhValue: (character: Character) => number;
}
/** Defines a condition for a CombatEffectApplicator that depends on the raw damage taken during application */
interface DamageTakenCondition {
    type: 'DamageTaken';
    /** Comparison operator to use between the raw damage taken and the rhValue */
    operator: Comparison;
    /** The right-hand value to use in the comparison. The left-hand value is set to the raw damage taken. */
    rhValue: (character: Character) => number;
}
/** Defines a condition for a CombatEffectApplicator that depends on values of the character that is processing the applicator */
interface CharacterNamedValueCondition {
    type: 'CharacterValue';
    /** Comparison operator to use between the left-hand and right-hand values */
    operator: Comparison;
    /** The left-hand value to use in the comparison. */
    lhValue: (character: Character) => number;
    /** The right-hand value to use in the comparison. */
    rhValue: (character: Character) => number;
}
declare type CombatEffectApplicatorConditionData = CombatConditionData | DamageDealtConditionData | DamageTakenConditionData | CharacterNamedValueConditionData | EveryCondition<CombatEffectApplicatorConditionData> | SomeCondition<CombatEffectApplicatorConditionData>;
declare type CombatEffectApplicatorCondition = AnyCharacterCondition | DamageDealtCondition | DamageTakenCondition | CharacterNamedValueCondition | EveryCondition<CombatEffectApplicatorCondition> | SomeCondition<CombatEffectApplicatorCondition>;
/** Base class for all combat effect applicators */
declare abstract class CombatEffectApplicator {
    /** The chance to apply the effect */
    baseChance: number;
    /** Conditional chances to apply the effect. The condition property of elements of this array should not be mutated */
    conditionChances: {
        chance: number;
        condition: CombatEffectApplicatorCondition;
    }[];
    /** If present, this overrides the target property of the effect being applied */
    targetOverride?: CombatEffectTarget;
    /** Determines if the effect can be applied even when the target has barrier, if applying the effect from self to target. Defaults to false. */
    bypassBarrier: boolean;
    /** Determines the trigger for when this effect should attempt to be applied. Has no effect if in a special attack. */
    appliesWhen: CombatEffectApplicationTrigger;
    /** If the effect should be applied when this applicator has been merged. Has no effect if in a special attack. */
    applyEffectWhenMerged: boolean;
    /** Returns if this applicator can never apply an effect */
    get cannotApply(): boolean;
    /** Returns a localized description of the applicator */
    get description(): string;
    get descriptionTemplate(): string;
    /** Gets string template data for the applicator's description */
    get descriptionTemplateData(): StringDictionary<string>;
    /** If ths description of this applicator should be formatted as negative */
    isNegative: boolean;
    /** Custom description string to use for the description */
    _customDescription?: string;
    /** ID of language string to use for description. Has precedence over _customDescription */
    _descriptionLang?: string;
    /** Returns a SingleCombatEffectApplicator to be processed */
    abstract getSingleApplicator(): SingleCombatEffectApplicator;
    /** Adds string template data for this applicator */
    addTemplateData(data: StringDictionary<string>, preKey?: string, negMult?: number, posMult?: number): void;
    /**
     * Gets a description tuple for this applicator
     * @param negMult Optional. Multiplier applied to the chance if this is a negative applicator
     * @param posMult Optional. Multiplier applied to the chance if this is not a negative applicator
     * @returns [description, textClass]
     */
    getDescription(negMult?: number, posMult?: number): [string, string];
    /**
     * Formats the description for this applicator using the given formatter function
     * @param formatter Formats the description and textclass of this applicator
     * @param negMult Optional. Multiplier applied to the chance if this is a negative applicator
     * @param posMult Optional. Multiplier applied to the chance if this is not a negative applicator
     */
    formatDescription<T>(formatter: DescriptionFormatter<T>, negMult?: number, posMult?: number): T;
    /**
     * Creates a clone of this object
     * @param mult Multiplier for the baseChance and conditionChances of this object in the clone
     */
    abstract clone(mult?: number): CombatEffectApplicator;
    /** Sets the properties of a cloned CombatEffectApplicator from this one */
    setCloneProps(clone: CombatEffectApplicator, mult: number): void;
    /** Sets the properties of this object based on data */
    setPropsFromData(data: CombatEffectApplicatorData, game: Game): void;
    /** Sets the trigger properties of this object based on data */
    setTriggerFromData(data: CombatEffectApplicatorTriggerData): void;
    /** Constructs a CombatEffectApplicatorCondition from data */
    getConditionFromData(data: CombatEffectApplicatorConditionData, game: Game): CombatEffectApplicatorCondition;
    /** If this applicator matches another one (e.g. they would apply identical effects) */
    matches(applicator: CombatEffectApplicator): boolean;
    /** Merges the chances of another applictor with this one. Mutates this object. */
    merge(applicator: CombatEffectApplicator, mult: number): void;
    /** Splits the chances of another applicator from this one. Mutates this object. */
    split(applicator: CombatEffectApplicator, mult: number): void;
    /** Merges this applicator with an array of applicators. Used for generating an array of applicators for use in descriptions. */
    mergeWithArray(arr: CombatEffectApplicator[], negMult?: number, posMult?: number): void;
    conditionMatches(applicator: CombatEffectApplicator): boolean;
    static compareConditions(condA: CombatEffectApplicatorCondition, condB: CombatEffectApplicatorCondition): boolean;
}
/** Data used to construct a TableCombatEffectApplicator */
interface TableCombatEffectApplicatorData extends CombatEffectApplicatorData {
    /** The ID of the CombatEffectTable to select an applicator from */
    tableID: string;
}
/** A Combat Effect Applicator that selects a random single applicator from a weighted table */
declare class TableCombatEffectApplicator extends CombatEffectApplicator {
    table: CombatEffectTable;
    /**
     *
     * @param table The table to select a single applicator from
     */
    constructor(table: CombatEffectTable);
    getSingleApplicator(): SingleCombatEffectApplicator;
    matches(applicator: TableCombatEffectApplicator): boolean;
    clone(mult?: number): TableCombatEffectApplicator;
    addTemplateData(data: StringDictionary<string>, preKey?: string, negMult?: number, posMult?: number): void;
    /** Constructs a TableCombatEffectApplicator from data */
    static fromData(data: TableCombatEffectApplicatorData, game: Game): TableCombatEffectApplicator;
    /** Constructs a TableCombatEffectApplicator with a trigger from data */
    static fromDataWithTrigger(data: TableCombatEffectApplicatorData & CombatEffectApplicatorTriggerData, game: Game): TableCombatEffectApplicator;
}
/** Data used to construct a SingleCombatEffectApplicator */
interface SingleCombatEffectApplicatorData extends CombatEffectApplicatorData {
    /** The ID of the CombatEffect to apply */
    effectID: string;
    /** Optional. Specifies overrides to the initial values of parameters in the active effect */
    initialParams?: {
        name: string;
        value: number;
    }[];
}
/** A Combat Effect Applicator that always applies the same effect */
declare class SingleCombatEffectApplicator extends CombatEffectApplicator {
    /** The effec to attempt to apply */
    effect: CombatEffect;
    /** Overrides to the initial values of the parameters in the active effect */
    initialParams?: Record<string, number>;
    constructor(effect: CombatEffect);
    getSingleApplicator(): SingleCombatEffectApplicator;
    /** Returns if the given applicator has the same effect and initial Params */
    matches(applicator: SingleCombatEffectApplicator): boolean;
    /** Clones a new applicator from this one */
    clone(mult?: number): SingleCombatEffectApplicator;
    addTemplateData(data: StringDictionary<string>, preKey?: string, negMult?: number, posMult?: number): void;
    /** Constructs a SingleCombatEffectApplicator from data */
    static fromData(data: SingleCombatEffectApplicatorData, game: Game): SingleCombatEffectApplicator;
    /** Constructs a SingleCombatEffectApplicator with a trigger from data */
    static fromDataWithTrigger(data: SingleCombatEffectApplicatorData & CombatEffectApplicatorTriggerData, game: Game): SingleCombatEffectApplicator;
}
/** Different times in combat when effects provided outside of special attacks can be applied */
declare type CombatEffectApplicationTrigger = 'PreAttack' | 'HitByAttack' | 'HitByFirstAttack' | 'HitWithAttack' | 'HitWithFirstAttack' | 'EvadedAttack' | 'CritWithAttack' | 'PostAttack' | 'PostFirstAttack' | 'WasAttacked' | 'StartOfFight' | 'SummonAttack' | 'Rebirth' | 'BeingAttacked';
/** Data type for effect applicators that are part of special attacks */
declare type AnyCombatEffectApplicatorData = SingleCombatEffectApplicatorData | TableCombatEffectApplicatorData;
/** Data type for effect applicators that are not part of special attacks */
declare type TriggeredCombatEffectApplicatorData = AnyCombatEffectApplicatorData & CombatEffectApplicatorTriggerData;
declare type AnyCombatEffectApplicator = SingleCombatEffectApplicator | TableCombatEffectApplicator;
interface CombatEffectApplicatorModificationData {
    /** Adds a new effect applicator to the combatEffects array. Removals are processed before additions. */
    add?: TriggeredCombatEffectApplicatorData[];
    /** IDs of CombatEffects. Removes SingleCombatEffectApplicators that have an effect that matches the ID. */
    removeEffect?: string[];
    /** IDs of CombatEffectTables. Removes TableCombatEffectApplicators that have a table that matches the ID. */
    removeTable?: string[];
}
declare type ActiveCombatEffectEvents = {
    parameterChanged: CombatEffectParameterChangedEvent;
    statsChanged: CombatEffectStatsChangedEvent;
    timerFired: CombatEffectTimerFiredEvent;
    applied: CombatEffectAppliedEvent;
    reapplied: CombatEffectReappliedEvent;
    removed: CombatEffectRemovedEvent;
};
interface ActiveStatGroup {
    source: ModifierSource;
    value: number;
}
/** Class that manages the state of a CombatEffect that has been applied to a character */
declare class ActiveCombatEffect extends GameEventEmitter<ActiveCombatEffectEvents> implements EncodableObject {
    /** The effect that was applied */
    effect: CombatEffect;
    /** The character this effect has been applied to */
    character: Character;
    /** The character that this effect came from */
    sourceCharacter: Character;
    /** Stores the initial paramaters during effect application. Only available during effect applied and reapplied events */
    applicatorParameters?: Record<string, number>;
    /** Record of parameter names, to current values */
    parameters: Record<string, number>;
    /** Record of stat group names, to the number of times they have been applied to the character */
    statGroups: Record<string, ActiveStatGroup>;
    /** Record of timer names to Timer objects */
    timers: Record<string, Timer>;
    /** Array of functions that unassign event handlers for behaviours */
    behaviourUnlisteners: VoidFunction[];
    /** Array of functions that unassign event handlers for rendering */
    renderUnlisteners: VoidFunction[];
    /** Data about when this effect was applied */
    source: Required<CombatEffectSource>;
    /** Returns if this effect is active on the player */
    get isOnPlayer(): boolean;
    constructor(
    /** The effect that was applied */
    effect: CombatEffect, 
    /** The character this effect has been applied to */
    character: Character, 
    /** The character that this effect came from */
    sourceCharacter: Character, source: CombatEffectSource, initialParams?: Record<string, number>);
    /** Evaluates a Number expression */
    evalExpression(expr: CombatEffectNumberFunc): number;
    /** Initializes this effect, assigning event listeners and adding timers to the character */
    init(): void;
    /** Called by the Character class when an effect is applied to them */
    onApplied(initialParams?: Record<string, number>): void;
    /** Called by the Character class when an effect is reapplied to them */
    onReapplied(source: CombatEffectSource, initialParams?: Record<string, number>): void;
    /** Called by the Character class when this effect is removed */
    destroy(): void;
    /** Gets the chance that this effect would be ignored on the character it is applied to */
    getIgnoreChance(): number;
    /** Sets the value of a parameter. Does not emit events if the value is not different to the current one */
    setParameter(paramName: string, value: number): void;
    /** Gets the current value of a parameter */
    getParameter(paramName: string): number;
    getApplicatorParameter(paramName: string): number;
    /** Gets the number of times a stat group has been applied to the character */
    getStatGroup(statGroupName: string): number;
    /** Checks a comparison condition based on this objects values or its characters */
    checkCondition(condition: BehaviourTriggerCondition): boolean;
    /** Returns the result of damage calculations from a given damageGroup. If the source of this effect was an attack, the damageDealt property is set to the attacks damage. */
    getDamage(damageName: string): number;
    /** Sets the value of a stat group. Automatically updates the amount of times the stats in the group have been applied to the character. Does not emit events if the new value is the same as the current one. */
    setStats(statGroupName: string, value: number): void;
    /** Adds the modifiers of stat groups from this effect to the character it is active on */
    addAllModifiers(): void;
    /** Merges the effect applicators of stat groups from this effect onto the character it is active on */
    mergeAllApplicators(): void;
    /** Starts the specified timer with an interval in [ms] */
    startTimer(timerName: string, interval: number): void;
    /** Stops the specified timer */
    stopTimer(timerName: string): void;
    /** Callback function for when a timer fires */
    fireTimerEvent(timerName: string): void;
    /** Assigns event listeners for the behaviours of the effect, and stores their unassigners */
    assignBehaviourListeners(): void;
    /** Assigns event listeners for the rendering of the effect, and stores their unassigners */
    assignRenderListeners(): void;
    /** Unassigns all event listeners assigned by this object */
    unassignListeners(): void;
    /** If the deocding process has produced an invalid effect, and it should be removed */
    decodeInvalid: boolean;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Skips over any bytes that were encoded by an object of this type */
    static skipData(reader: SaveWriter, version: number): void;
}
