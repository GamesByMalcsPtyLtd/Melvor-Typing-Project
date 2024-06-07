declare type SynergyGroup = 'ThrowingWeapon' | 'Melee2HWeapon';
interface ItemSynergyData {
    itemIDs: (string | SynergyGroup)[];
    playerModifiers?: ModifierValuesRecordData;
    enemyModifiers?: ModifierValuesRecordData;
    conditionalModifiers?: ConditionalModifierData[];
    equipmentStats?: AnyEquipStatData[];
    combatEffects?: TriggeredCombatEffectApplicatorData[];
}
declare class ItemSynergy implements SoftDataDependant<ItemSynergyData> {
    items: (EquipmentItem | SynergyGroup)[];
    playerModifiers?: ModifierValue[];
    enemyModifiers?: ModifierValue[];
    conditionalModifiers?: ConditionalModifier[];
    equipmentStats?: AnyEquipStat[];
    combatEffects?: CombatEffectApplicator[];
    get name(): string;
    constructor(data: ItemSynergyData, game: Game);
    registerSoftDependencies(data: ItemSynergyData, game: Game): void;
}
