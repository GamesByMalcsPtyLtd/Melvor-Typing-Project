declare type CompletionRequirementData = {
    type: 'Completion';
    percent: number;
    namespace: string;
};
/** Requires that the player has achieved percent total completion in the specified namespace*/
declare type CompletionRequirement = {
    type: 'Completion';
    percent: number;
    namespace: DataNamespace;
};
/** Requires that the given skills level is greater or equal than level */
interface SkillLevelRequirement {
    type: 'SkillLevel';
    skill: Skill<any>;
    level: number;
}
interface AllSkillLevelRequirementData {
    type: 'AllSkillLevels';
    level: number;
    exceptions?: string[];
}
/** Requires that all skill registered to the game have a level greater than or equal to the level */
interface AllSkillLevelRequirement {
    type: 'AllSkillLevels';
    level: number;
    /** If present, all skills in this set are not included in the requirement */
    exceptions?: Set<AnySkill>;
}
/** Requires that the given dungeon has been completed count times */
interface DungeonRequirement {
    type: 'DungeonCompletion';
    dungeon: Dungeon;
    count: number;
}
/** Requires that the given shop purchase has been bought count times */
interface ShopPurchaseRequirement {
    type: 'ShopPurchase';
    purchase: ShopPurchase;
    count: number;
}
/** Requires that the player has the specified item equipped, or an item that bypasses the requirement */
interface SlayerItemRequirement {
    type: 'SlayerItem';
    item: EquipmentItem;
}
interface SlayerTaskRequirementData {
    type: 'SlayerTask';
    tier: SlayerTier;
    count: number;
}
interface SlayerTaskRequirement {
    type: 'SlayerTask';
    tier: SlayerTierID;
    count: number;
}
interface SkillLevelRequirementData {
    type: 'SkillLevel';
    skillID: string;
    level: number;
}
interface DungeonRequirementData {
    type: 'DungeonCompletion';
    dungeonID: string;
    count: number;
}
interface ShopPurchaseRequirementData {
    type: 'ShopPurchase';
    purchaseID: string;
    count: number;
}
interface SlayerItemRequirementData {
    type: 'SlayerItem';
    itemID: string;
}
/** Requires that the given item has been found count times */
interface ItemFoundRequirementData {
    type: 'ItemFound';
    itemID: string;
}
interface ItemFoundRequirement {
    type: 'ItemFound';
    item: AnyItem;
}
interface MonsterKilledRequirementData {
    type: 'MonsterKilled';
    monsterID: string;
    count: number;
}
interface MonsterKilledRequirement {
    type: 'MonsterKilled';
    monster: Monster;
    count: number;
}
interface TownshipTaskCompletionRequirement {
    type: 'TownshipTask';
    count: number;
}
interface TownshipTutorialTaskCompletionRequirement {
    type: 'TownshipTutorialTask';
    count: number;
}
interface TownshipBuildingRequirementData {
    type: 'TownshipBuilding';
    buildingID: string;
    count: number;
}
interface TownshipBuildingRequirement {
    type: 'TownshipBuilding';
    building: TownshipBuilding;
    count: number;
}
declare type AnyRequirement = SkillLevelRequirement | AllSkillLevelRequirement | DungeonRequirement | CompletionRequirement | ShopPurchaseRequirement | SlayerItemRequirement | SlayerTaskRequirement | ItemFoundRequirement | MonsterKilledRequirement | TownshipTaskCompletionRequirement | TownshipTutorialTaskCompletionRequirement | TownshipBuildingRequirement;
declare type AnyRequirementData = SkillLevelRequirementData | AllSkillLevelRequirementData | DungeonRequirementData | CompletionRequirementData | ShopPurchaseRequirementData | SlayerItemRequirementData | SlayerTaskRequirementData | ItemFoundRequirementData | MonsterKilledRequirementData | TownshipTaskCompletionRequirement | TownshipTutorialTaskCompletionRequirement | TownshipBuildingRequirementData;
declare function getRequirementNodes(requirement: AnyRequirement, imageClass: string): (string | Node)[];
