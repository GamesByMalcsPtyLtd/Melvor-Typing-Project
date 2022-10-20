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
    private _name;
    private _media;
    canDropRavenNest: boolean;
    shopItemPurchased?: ShopPurchase;
    constructor(namespace: DataNamespace, data: WoodcuttingTreeData, game: Game);
}
declare class Woodcutting extends GatheringSkill<WoodcuttingTree, WoodcuttingSkillData> {
    protected readonly _media = "assets/media/skills/woodcutting/woodcutting.svg";
    protected getTotalUnlockedMasteryActions(): number;
    /** Trees that are currently being cut */
    private activeTrees;
    renderQueue: WoodcuttingRenderQueue;
    protected get mushroomChance(): number;
    private addArrowShaftReward;
    private nestItem?;
    private bannedJewelry;
    private randomJewelry;
    private ashItem?;
    private mushroomItem?;
    private ravenNestItem?;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: WoodcuttingSkillData): void;
    postDataRegistration(): void;
    protected getFlatIntervalModifier(action: WoodcuttingTree): number;
    protected getUncappedDoublingChance(action: WoodcuttingTree): number;
    getTreeInterval(tree: WoodcuttingTree): number;
    getTreeMultiplier(tree: WoodcuttingTree): number;
    getTreeMasteryXP(tree: WoodcuttingTree): number;
    private getBirdNestChance;
    private getRavenNestChance;
    private getBirdNestQuantity;
    getMasteryXPModifier(action: WoodcuttingTree): number;
    private get treeCutLimit();
    protected onStop(): void;
    /** Callback function for selecting a tree */
    selectTree(tree: WoodcuttingTree): void;
    get actionInterval(): number;
    /** Woodcutting xp to add per action inclusive of modifiers */
    get totalXPToAdd(): number;
    get totalPoolXPToAdd(): number;
    protected get actionLevel(): number;
    protected get stardustChance(): number;
    protected getWCXPtoFMXP(): number;
    private get ashChance();
    protected get masteryAction(): WoodcuttingTree;
    protected get masteryModifiedInterval(): number;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    /** Adds mastery XP for all active trees */
    protected addMasteryXPReward(): void;
    protected postAction(): void;
    onLoad(): void;
    protected onMasteryLevelUp(action: WoodcuttingTree, oldLevel: number, newLevel: number): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    protected onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    render(): void;
    /** Renders all tree menu rates */
    private renderTreeRates;
    /** Renders trees that are unlocked, and the locked tree */
    private renderTreeUnlock;
    private renderProgressBar;
    private renderSelectedTrees;
    private renderTreeGrants;
    protected resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
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
