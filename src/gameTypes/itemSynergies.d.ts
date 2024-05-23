declare type SynergyGroup = 'ThrowingWeapon' | 'Melee2HWeapon';
interface ItemSynergyData {
    itemIDs: (string | SynergyGroup)[];
    playerModifiers?: ModifierValuesRecordData;
    enemyModifiers?: ModifierValuesRecordData;
    conditionalModifiers?: ConditionalModifierData[];
    equipmentStats?: EquipStatPair[];
    combatEffects?: TriggeredCombatEffectApplicatorData[];
    /** Resistance stats provided by item */
    resistanceStats?: ResistanceStatData[];
}
declare class ItemSynergy implements SoftDataDependant<ItemSynergyData> {
    items: (EquipmentItem | SynergyGroup)[];
    playerModifiers?: ModifierValue[];
    enemyModifiers?: ModifierValue[];
    conditionalModifiers?: ConditionalModifier[];
    equipmentStats?: EquipStatPair[];
    combatEffects?: CombatEffectApplicator[];
    /** Resistance stats provided by item */
    resistanceStats: ResistanceMap;
    get name(): string;
    constructor(data: ItemSynergyData, game: Game);
    registerSoftDependencies(data: ItemSynergyData, game: Game): void;
}
