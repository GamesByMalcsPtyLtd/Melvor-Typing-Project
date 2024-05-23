/** Base class for all requirements */
declare abstract class GameRequirement<Event extends GameEvent> {
    game: Game;
    constructor(game: Game);
    /** Checks if this requirement is met, and optionally fires a notification if it is not */
    check(notifyOnFailure?: boolean): boolean;
    /** Returns if this requirement has been met */
    abstract isMet(): boolean;
    /** Fires a notification that this requirement must be met before performing an action */
    abstract notifyFailure(): void;
    /**
     * Assigns an event handler for when the requirement changes
     * @param callback The function to call when the requirement changes
     * @returns A function that may be called to unassign the handlers
     */
    assignHandler(callback: Handler<Event>): VoidFunction;
    getHandler(callback: Handler<Event>): Handler<Event>;
    abstract _assignHandler(handler: Handler<Event>): void;
    /** Unassigns event listeners  */
    abstract _unassignHandler(handler: Handler<Event>): void;
    /** Creates an image element for use in node templating */
    createImage(media: string, imageClass: string): HTMLImageElement;
    /** Gets nodes describing the requirement */
    abstract getNodes(imageClass: string): (string | Node)[];
}
declare type CompletionRequirementData = {
    type: 'Completion';
    percent: number;
    namespace: string;
};
/** Requires that the player has achieved percent total completion in the specified namespace */
declare class CompletionRequirement extends GameRequirement<CompletionPercentChangedEvent> {
    readonly type = "Completion";
    percent: number;
    namespace: DataNamespace;
    constructor(data: CompletionRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<CompletionPercentChangedEvent>): Handler<CompletionPercentChangedEvent>;
    _assignHandler(handler: Handler<CompletionPercentChangedEvent>): void;
    _unassignHandler(handler: Handler<CompletionPercentChangedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface SkillLevelRequirementData {
    type: 'SkillLevel';
    skillID: string;
    level: number;
}
/** Requires that the given skills level is greater or equal than level */
declare class SkillLevelRequirement extends GameRequirement<SkillLevelChangedEvent> {
    readonly type = "SkillLevel";
    skill: AnySkill;
    level: number;
    constructor(data: SkillLevelRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    _assignHandler(handler: Handler<SkillLevelChangedEvent>): void;
    _unassignHandler(handler: Handler<SkillLevelChangedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface AbyssalLevelRequirementData {
    type: 'AbyssalLevel';
    skillID: string;
    level: number;
}
/** Requires that the given skill's abyssal level is greater or equal than level */
declare class AbyssalLevelRequirement extends GameRequirement<SkillLevelChangedEvent> {
    readonly type = "AbyssalLevel";
    skill: AnySkill;
    level: number;
    constructor(data: AbyssalLevelRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    _assignHandler(handler: Handler<SkillLevelChangedEvent>): void;
    _unassignHandler(handler: Handler<SkillLevelChangedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface AllSkillLevelRequirementData {
    type: 'AllSkillLevels';
    level: number;
    namespace?: string;
    exceptions?: string[];
}
/** Requires that all skill registered to the game have a level greater than or equal to the level */
declare class AllSkillLevelRequirement extends GameRequirement<SkillLevelChangedEvent> {
    readonly type = "AllSkillLevels";
    level: number;
    /** If present, only skills belonging to the specified namespace are included in the requirement */
    namespace?: DataNamespace;
    /** If present, all skills in this set are not included in the requirement */
    exceptions?: Set<AnySkill>;
    constructor(data: AllSkillLevelRequirementData, game: Game);
    checkSkill(skill: AnySkill): boolean;
    isMet(): boolean;
    notifyFailure(): void;
    _assignHandler(handler: Handler<SkillLevelChangedEvent>): void;
    _unassignHandler(handler: Handler<SkillLevelChangedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface MasteryLevelRequirementData {
    type: 'MasteryLevel';
    skillID: string;
    actionID: string;
    level: number;
}
/** Requires that the given action within the given skills mastery level is greater or equal than level */
declare class MasteryLevelRequirement extends GameRequirement<MasteryLevelChangedEvent> {
    readonly type = "MasteryLevel";
    skill: SkillWithMastery<MasteryAction, MasterySkillData>;
    action: MasteryAction;
    level: number;
    constructor(data: MasteryLevelRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<MasteryLevelChangedEvent>): Handler<MasteryLevelChangedEvent>;
    _assignHandler(handler: Handler<MasteryLevelChangedEvent>): void;
    _unassignHandler(handler: Handler<MasteryLevelChangedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface DungeonRequirementData {
    type: 'DungeonCompletion';
    dungeonID: string;
    count: number;
}
/** Requires that the given dungeon has been completed count times */
declare class DungeonRequirement extends GameRequirement<DungeonCompletedEvent> {
    readonly type = "DungeonCompletion";
    dungeon: Dungeon;
    count: number;
    constructor(data: DungeonRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<DungeonCompletedEvent>): Handler<DungeonCompletedEvent>;
    _assignHandler(handler: Handler<DungeonCompletedEvent>): void;
    _unassignHandler(handler: Handler<DungeonCompletedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface StrongholdRequirementData {
    type: 'StrongholdCompletion';
    strongholdID: string;
    count: number;
}
/** Requires that the given dungeon has been completed count times */
declare class StrongholdRequirement extends GameRequirement<StrongholdCompletedEvent> {
    readonly type = "StrongholdCompletion";
    stronghold: Stronghold;
    count: number;
    constructor(data: StrongholdRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<StrongholdCompletedEvent>): Handler<StrongholdCompletedEvent>;
    _assignHandler(handler: Handler<StrongholdCompletedEvent>): void;
    _unassignHandler(handler: Handler<StrongholdCompletedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface AbyssDepthRequirementData {
    type: 'AbyssDepthCompletion';
    depthID: string;
    count: number;
}
/** Requires that the given depth within The Abyss has been completed count times */
declare class AbyssDepthRequirement extends GameRequirement<AbyssDepthCompletedEvent> {
    readonly type = "AbyssDepthCompletion";
    depth: AbyssDepth;
    count: number;
    constructor(data: AbyssDepthRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<AbyssDepthCompletedEvent>): Handler<AbyssDepthCompletedEvent>;
    _assignHandler(handler: Handler<AbyssDepthCompletedEvent>): void;
    _unassignHandler(handler: Handler<AbyssDepthCompletedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface ShopPurchaseRequirementData {
    type: 'ShopPurchase';
    purchaseID: string;
    count: number;
}
/** Requires that the given shop purchase has been bought count times */
declare class ShopPurchaseRequirement extends GameRequirement<ShopPurchaseMadeEvent> {
    readonly type = "ShopPurchase";
    purchase: ShopPurchase;
    count: number;
    constructor(data: ShopPurchaseRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<ShopPurchaseMadeEvent>): Handler<ShopPurchaseMadeEvent>;
    _assignHandler(handler: Handler<ShopPurchaseMadeEvent>): void;
    _unassignHandler(handler: Handler<ShopPurchaseMadeEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface SlayerItemRequirementData {
    type: 'SlayerItem';
    itemID: string;
}
/** Requires that the player has the specified item equipped, or an item that bypasses the requirement */
declare class SlayerItemRequirement extends GameRequirement<EquipmentChangedEvent> {
    readonly type = "SlayerItem";
    item: EquipmentItem;
    constructor(data: SlayerItemRequirementData, game: Game);
    check(notifyOnFailure?: boolean, slayerLevelReq?: number): boolean;
    isMet(slayerLevelReq?: number): boolean;
    notifyFailure(): void;
    _assignHandler(handler: Handler<EquipmentChangedEvent>): void;
    _unassignHandler(handler: Handler<EquipmentChangedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface SlayerTaskRequirementData {
    type: 'SlayerTask';
    category: string;
    /** @deprecated Use category property instead */
    tier?: SlayerTier;
    count: number;
}
declare class SlayerTaskRequirement extends GameRequirement<SlayerTaskCompletedEvent> {
    readonly type = "SlayerTask";
    category: SlayerTaskCategory;
    count: number;
    constructor(data: SlayerTaskRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<SlayerTaskCompletedEvent>): Handler<SlayerTaskCompletedEvent>;
    _assignHandler(handler: Handler<SlayerTaskCompletedEvent>): void;
    _unassignHandler(handler: Handler<SlayerTaskCompletedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
/** Requires that the given item has been found count times */
interface ItemFoundRequirementData {
    type: 'ItemFound';
    itemID: string;
}
declare class ItemFoundRequirement extends GameRequirement<ItemFoundEvent> {
    readonly type = "ItemFound";
    item: AnyItem;
    constructor(data: ItemFoundRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<ItemFoundEvent>): Handler<ItemFoundEvent>;
    _assignHandler(handler: Handler<ItemFoundEvent>): void;
    _unassignHandler(handler: Handler<ItemFoundEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface MonsterKilledRequirementData {
    type: 'MonsterKilled';
    monsterID: string;
    count: number;
}
declare class MonsterKilledRequirement extends GameRequirement<MonsterKilledEvent> {
    readonly type = "MonsterKilled";
    monster: Monster;
    count: number;
    constructor(data: MonsterKilledRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<MonsterKilledEvent>): Handler<MonsterKilledEvent>;
    _assignHandler(handler: Handler<MonsterKilledEvent>): void;
    _unassignHandler(handler: Handler<MonsterKilledEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface TownshipTaskCompletionRequirementData {
    type: 'TownshipTask';
    count: number;
    realm?: string;
}
declare class TownshipTaskCompletionRequirement extends GameRequirement<TownshipTaskCompletedEvent> {
    readonly type = "TownshipTask";
    count: number;
    realm: Realm;
    constructor(data: TownshipTaskCompletionRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<TownshipTaskCompletedEvent>): Handler<TownshipTaskCompletedEvent>;
    _assignHandler(handler: Handler<TownshipTaskCompletedEvent>): void;
    _unassignHandler(handler: Handler<TownshipTaskCompletedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface TownshipBuildingRequirementData {
    type: 'TownshipBuilding';
    buildingID: string;
    count: number;
}
declare class TownshipBuildingRequirement extends GameRequirement<TownshipBuildingCountChangedEvent> {
    readonly type = "TownshipBuilding";
    building: TownshipBuilding;
    count: number;
    constructor(data: TownshipBuildingRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<TownshipBuildingCountChangedEvent>): Handler<TownshipBuildingCountChangedEvent>;
    _assignHandler(handler: Handler<TownshipBuildingCountChangedEvent>): void;
    _unassignHandler(handler: Handler<TownshipBuildingCountChangedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface CartographyHexDiscoveryRequirementData {
    type: 'CartographyHexDiscovery';
    worldMapID: string;
    count: number;
}
declare class CartographyHexDiscoveryRequirement extends GameRequirement<CartographyHexSurveyedEvent> {
    readonly type = "CartographyHexDiscovery";
    worldMap: WorldMap;
    count: number;
    cartography: Cartography;
    constructor(data: CartographyHexDiscoveryRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<CartographyHexSurveyedEvent>): Handler<CartographyHexSurveyedEvent>;
    _assignHandler(handler: Handler<CartographyHexSurveyedEvent>): void;
    _unassignHandler(handler: Handler<CartographyHexSurveyedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface CartographyPOIDiscoveryRequirementData {
    type: 'CartographyPOIDiscovery';
    worldMapID: string;
    poiIDs: string[];
}
declare class CartographyPOIDiscoveryRequirement extends GameRequirement<CartographyPOIDiscoveredEvent> {
    readonly type = "CartographyPOIDiscovery";
    worldMap: WorldMap;
    pois: PointOfInterest[];
    cartography: Cartography;
    constructor(data: CartographyPOIDiscoveryRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<CartographyPOIDiscoveredEvent>): Handler<CartographyPOIDiscoveredEvent>;
    _assignHandler(handler: Handler<CartographyPOIDiscoveredEvent>): void;
    _unassignHandler(handler: Handler<CartographyPOIDiscoveredEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface ArchaeologyItemsDonatedRequirementData {
    type: 'ArchaeologyItemsDonated';
    count: number;
}
declare class ArchaeologyItemsDonatedRequirement extends GameRequirement<ArchaeologyItemDonatedEvent> {
    readonly type = "ArchaeologyItemsDonated";
    count: number;
    archaeology: Archaeology;
    constructor(data: ArchaeologyItemsDonatedRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    _assignHandler(handler: Handler<ArchaeologyItemDonatedEvent>): void;
    _unassignHandler(handler: Handler<ArchaeologyItemDonatedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
interface SkillTreeNodeUnlockedRequirementData {
    type: 'SkillTreeNodeUnlocked';
    skillID: string;
    skillTreeID: string;
    nodeID: string;
}
/** Requires that the given Node in a Skill's Skill Tree is unlocked */
declare class SkillTreeNodeUnlockedRequirement extends GameRequirement<SkillTreeNodeUnlockedEvent> {
    readonly type = "SkillTreeNodeUnlocked";
    skill: AnySkill;
    skillTree: SkillTree;
    node: SkillTreeNode;
    constructor(data: SkillTreeNodeUnlockedRequirementData, game: Game);
    isMet(): boolean;
    notifyFailure(): void;
    getHandler(callback: Handler<SkillTreeNodeUnlockedEvent>): Handler<SkillTreeNodeUnlockedEvent>;
    _assignHandler(handler: Handler<SkillTreeNodeUnlockedEvent>): void;
    _unassignHandler(handler: Handler<SkillTreeNodeUnlockedEvent>): void;
    getNodes(imageClass: string): (string | Node)[];
}
declare type AnyRequirement = SkillLevelRequirement | AllSkillLevelRequirement | DungeonRequirement | StrongholdRequirement | CompletionRequirement | ShopPurchaseRequirement | SlayerItemRequirement | SlayerTaskRequirement | ItemFoundRequirement | MonsterKilledRequirement | TownshipTaskCompletionRequirement | TownshipBuildingRequirement | CartographyHexDiscoveryRequirement | CartographyPOIDiscoveryRequirement | ArchaeologyItemsDonatedRequirement | AbyssalLevelRequirement | SkillTreeNodeUnlockedRequirement | AbyssDepthRequirement | MasteryLevelRequirement;
declare type AnyRequirementData = SkillLevelRequirementData | AllSkillLevelRequirementData | DungeonRequirementData | StrongholdRequirementData | CompletionRequirementData | ShopPurchaseRequirementData | SlayerItemRequirementData | SlayerTaskRequirementData | ItemFoundRequirementData | MonsterKilledRequirementData | TownshipTaskCompletionRequirementData | TownshipBuildingRequirementData | CartographyHexDiscoveryRequirementData | CartographyPOIDiscoveryRequirementData | ArchaeologyItemsDonatedRequirementData | AbyssalLevelRequirementData | SkillTreeNodeUnlockedRequirementData | AbyssDepthRequirementData | MasteryLevelRequirementData;
interface RequirementsModificationData {
    add?: AnyRequirementData[];
    remove?: string[];
}
