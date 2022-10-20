declare type SynergyGroup = 'ThrowingWeapon' | 'Melee2HWeapon';
interface ItemSynergyData {
    itemIDs: (string | SynergyGroup)[];
    playerModifiers?: PlayerModifierData;
    enemyModifiers?: CombatModifierData;
    conditionalModifiers?: ConditionalModifierData[];
    equipmentStats?: EquipStatPair[];
}
declare class ItemSynergy {
    items: (EquipmentItem | SynergyGroup)[];
    playerModifiers?: PlayerModifierObject;
    enemyModifiers?: CombatModifierData;
    conditionalModifiers?: ConditionalModifier[];
    equipmentStats?: EquipStatPair[];
    constructor(data: ItemSynergyData, game: Game);
}
