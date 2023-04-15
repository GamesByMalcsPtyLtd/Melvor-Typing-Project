interface WoodcuttingSkillData extends MasterySkillData {
    trees?: WoodcuttingTreeData[];
    nestItemID?: string;
    bannedJewleryIDs?: string[];
    ashItemID?: string;
    mushroomItemID?: string;
    ravenNestItemID?: string;
}
interface WoodcuttingTreeData extends SingleProductRecipeData {
    name: string;
    media: string;
    baseInterval: number;
    canDropRavenNest?: boolean;
    /** If present, shop item must be purchased at least once to perform action */
    shopItemPurchased?: string;
}
declare class WoodcuttingTree extends SingleProductRecipe {
    get media(): string;
    get name(): string;
    baseInterval: number;
    _name: string;
    _media: string;
    canDropRavenNest: boolean;
    shopItemPurchased?: ShopPurchase;
    constructor(namespace: DataNamespace, data: WoodcuttingTreeData, game: Game);
}
declare class Woodcutting extends GatheringSkill<WoodcuttingTree, WoodcuttingSkillData> {
    readonly _media = "assets/media/skills/woodcutting/woodcutting.svg";
    getTotalUnlockedMasteryActions(): number;
    /** Trees that are currently being cut */
    activeTrees: Set<WoodcuttingTree>;
    renderQueue: WoodcuttingRenderQueue;
    get mushroomChance(): number;
    addArrowShaftReward(tree: WoodcuttingTree, rewards: Rewards): void;
    nestItem?: AnyItem;
    bannedJewelry: Set<AnyItem>;
    randomJewelry: AnyItem[];
    ashItem?: AnyItem;
    mushroomItem?: AnyItem;
    ravenNestItem?: AnyItem;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: WoodcuttingSkillData): void;
    postDataRegistration(): void;
    getFlatIntervalModifier(action: WoodcuttingTree): number;
    getUncappedDoublingChance(action: WoodcuttingTree): number;
    getTreeInterval(tree: WoodcuttingTree): number;
    getTreeMultiplier(tree: WoodcuttingTree): number;
    getTreeMasteryXP(tree: WoodcuttingTree): number;
    getBaseTreeMasteryXP(tree: WoodcuttingTree): number;
    getBirdNestChance(): number;
    getRavenNestChance(): number;
    getBirdNestQuantity(): number;
    getMasteryXPModifier(action: WoodcuttingTree): number;
    get treeCutLimit(): number;
    onStop(): void;
    /** Callback function for selecting a tree */
    selectTree(tree: WoodcuttingTree): void;
    get actionInterval(): number;
    /** Woodcutting xp to add per action inclusive of modifiers */
    get baseXPToAdd(): number;
    /** Woodcutting xp to add per action inclusive of modifiers */
    get totalXPToAdd(): number;
    get totalPoolXPToAdd(): number;
    get actionLevel(): number;
    get stardustChance(): number;
    getWCXPtoFMXP(): number;
    get ashChance(): number;
    get masteryAction(): WoodcuttingTree;
    get masteryModifiedInterval(): number;
    preAction(): void;
    get actionRewards(): Rewards;
    /** Adds mastery XP for all active trees */
    addMasteryXPReward(): void;
    postAction(): void;
    onLoad(): void;
    onMasteryLevelUp(action: WoodcuttingTree, oldLevel: number, newLevel: number): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
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
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineWoodcut, idMap: NumericIDMap): void;
    testTranslations(): void;
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
