interface WoodcuttingSkillData extends MasterySkillData {
    trees?: WoodcuttingTreeData[];
    defaultRandomProducts?: string[];
    randomProducts?: RandomWoodcuttingProductData[];
    bannedJewleryIDs?: string[];
}
interface WoodcuttingModificationData extends MasterySkillModificationData {
    trees?: WoodcuttingTreeModificationData[];
}
declare type WoodcuttingEvents = {
    action: WoodcuttingActionEvent;
} & SkillWithMasteryEvents;
interface WoodcuttingTreeData extends SingleProductRecipeData {
    name: string;
    media: string;
    baseInterval: number;
    randomProducts?: string[];
    /** Optional. If present, these requirements must also be met to cut to tree, in addition to Woodcutting level. */
    requirements?: AnyRequirementData[];
}
interface WoodcuttingTreeModificationData extends SingleProductRecipeModificationData {
    baseInterval?: number;
    randomProducts?: {
        add?: string[];
        remove?: string[];
    };
    requirements?: RequirementsModificationData;
}
interface RandomWoodcuttingProductData extends ItemChanceData {
    quantity: number;
    minChance?: number;
}
declare class RandomWoodcuttingProduct {
    item: Item;
    chance: number;
    quantity: number;
    minChance: number;
    constructor(data: RandomWoodcuttingProductData, game: Game);
}
declare class WoodcuttingTree extends SingleProductRecipe implements SoftDataDependant<WoodcuttingTreeData> {
    get media(): string;
    get name(): string;
    baseInterval: number;
    randomProducts: AnyItem[];
    _name: string;
    _media: string;
    requirements: AnyRequirement[];
    constructor(namespace: DataNamespace, data: WoodcuttingTreeData, game: Game);
    registerSoftDependencies(data: WoodcuttingTreeData, game: Game): void;
    applyDataModification(data: WoodcuttingTreeModificationData, game: Game): void;
}
declare class Woodcutting extends GatheringSkill<WoodcuttingTree, WoodcuttingSkillData, WoodcuttingEvents, WoodcuttingModificationData> {
    readonly _media = Assets.Woodcutting;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: WoodcuttingTree): boolean;
    /** Trees that are currently being cut */
    activeTrees: Set<WoodcuttingTree>;
    renderQueue: WoodcuttingRenderQueue;
    readonly bannedJewelry: Set<AnyItem>;
    readonly randomJewelry: AnyItem[];
    readonly randomProducts: Map<Item, RandomWoodcuttingProduct>;
    readonly defaultRandomProducts: Item[];
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: WoodcuttingSkillData): void;
    modifyData(data: WoodcuttingModificationData): void;
    postDataRegistration(): void;
    getUncappedDoublingChance(action: WoodcuttingTree): number;
    getTreeInterval(tree: WoodcuttingTree): number;
    getTreeMultiplier(tree: WoodcuttingTree): number;
    getTreeMasteryXP(tree: WoodcuttingTree): number;
    getBaseTreeMasteryXP(tree: WoodcuttingTree): number;
    get treeCutLimit(): number;
    onStop(): void;
    /** Returns if all requirements to cut the tree have been met */
    isTreeUnlocked(tree: WoodcuttingTree): boolean;
    /** Callback function for selecting a tree */
    selectTree(tree: WoodcuttingTree): void;
    get actionInterval(): number;
    /** Woodcutting xp to add per action inclusive of modifiers */
    get baseXPToAdd(): number;
    /** Woodcutting xp to add per action inclusive of modifiers */
    get totalXPToAdd(): number;
    get totalPoolXPToAdd(): number;
    /** Woodcutting xp to add per action inclusive of modifiers */
    get baseAbyssalXPToAdd(): number;
    /** Woodcutting xp to add per action inclusive of modifiers */
    get totalAbyssalXPToAdd(): number;
    get actionLevel(): number;
    getWCXPtoFMXP(): number;
    getWCAXPtoFMAXP(): number;
    get masteryAction(): WoodcuttingTree;
    get masteryModifiedInterval(): number;
    getRandomProductInfo(item: Item): {
        chance: number;
        quantity: number;
    };
    addArrowShaftReward(tree: WoodcuttingTree, rewards: Rewards): void;
    preAction(): void;
    get actionRewards(): Rewards;
    /** Adds mastery XP for all active trees */
    addMasteryXPReward(): void;
    postAction(): void;
    onLoad(): void;
    onRealmChange(): void;
    onMasteryLevelUp(action: WoodcuttingTree, oldLevel: number, newLevel: number): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    onAncientRelicUnlock(): void;
    getErrorLog(): string;
    render(): void;
    /** Renders all tree menu rates */
    renderTreeRates(): void;
    /** Renders trees that are unlocked, and the locked tree */
    renderTreeUnlock(): void;
    renderProgressBar(): void;
    renderSelectedTrees(): void;
    renderTreeGrants(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineWoodcut, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
}
declare class WoodcuttingRenderQueue extends GatheringSkillRenderQueue<WoodcuttingTree> {
    /** Updates the actively cut trees */
    selectedTrees: boolean;
    /** Updates the XP and interval of every tree */
    treeRates: boolean;
    /** Updates the unlocked trees. Required on skill level up. */
    treeUnlocks: boolean;
    /** Updates the grants of the selected trees */
    treeGrants: boolean;
}
