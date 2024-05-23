interface CombatPassiveData extends IDData {
    /** Display name of the passive */
    name: string;
    /** Modifiers provided to Enemy by the passive */
    modifiers?: ModifierValuesRecordData;
    /** CombatEffects merged with the enemy by the Passive */
    combatEffects?: TriggeredCombatEffectApplicatorData[];
    /** Modifiers provided to the player by the Passive */
    playerModifiers?: ModifierValuesRecordData;
    /** CombatEffects merged with the player by the Passive */
    playerCombatEffects?: TriggeredCombatEffectApplicatorData[];
    /** Conditional Modifiers provided by the Passive */
    conditionalModifiers?: ConditionalModifierData[];
    /** Optional. Specifies a custom description which overrides the modifier generated one. */
    customDescription?: string;
}
declare class CombatPassive extends NamespacedObject implements SoftDataDependant<CombatPassiveData> {
    modifiers?: ModifierValue[];
    combatEffects?: CombatEffectApplicator[];
    enemyModifiers?: ModifierValue[];
    enemyCombatEffects?: CombatEffectApplicator[];
    conditionalModifiers?: ConditionalModifier[];
    get name(): string;
    get englishName(): string;
    get description(): string;
    _modifiedDescription: string | undefined;
    get modifiedDescription(): string;
    _name: string;
    _customDescription?: string;
    constructor(namespace: DataNamespace, data: CombatPassiveData, game: Game);
    registerSoftDependencies(data: CombatPassiveData, game: Game): void;
}
declare class ControlledAffliction extends CombatPassive {
    constructor(namespace: DataNamespace, game: Game);
    registerSoftDependencies(data: CombatPassiveData, game: Game): void;
}
