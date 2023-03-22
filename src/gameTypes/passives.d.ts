interface CombatPassiveData extends IDData {
    /** Display name of the passive */
    name: string;
    /** Modifiers provided to Enemy by passive */
    modifiers: CombatModifierData;
    /** Optional. Specifies a custom description which overrides the modifier generated one. */
    customDescription?: string;
}
declare class CombatPassive extends NamespacedObject {
    modifiers: CombatModifierData;
    get name(): string;
    get description(): string;
    _name: string;
    _customDescription?: string;
    constructor(namespace: DataNamespace, data: CombatPassiveData);
}
declare class ControlledAffliction extends CombatPassive {
    constructor(namespace: DataNamespace, game: Game);
}
