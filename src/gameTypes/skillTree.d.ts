interface SkillTreeData extends IDData {
    name: string;
    media: string;
    unlockRequirements: AnyRequirementData[];
    nodes: SkillTreeNodeData[];
}
interface SkillTreeNodeCostsData extends FixedCostsData {
    /** Optional. Specifies the skill tree points required to purchase the node */
    points?: number;
}
declare class SkillTreeNodeCosts extends FixedCosts {
    /** The number of skill tree points required to purchase the node */
    points: number;
    constructor(data: SkillTreeNodeCostsData, game: Game);
}
interface SkillTreeNodeData extends IDData, IStatObjectData {
    name: string;
    costs: SkillTreeNodeCostsData;
    /** The IDs of the nodes which are parents to this one. If not defined, this is considered a root node of the tree. */
    parents?: string[];
    requirements?: AnyRequirementData[];
}
declare class SkillTreeNode extends NamespacedObject implements SoftDataDependant<SkillTreeNodeData> {
    game: Game;
    get name(): string;
    get shortName(): string;
    /** Returns if this node can be unlocked */
    get canUnlock(): boolean;
    get parentsUnlocked(): boolean;
    get requirementsMet(): boolean;
    _name: string;
    /** Returns if this is a root node of the tree */
    get isRoot(): boolean;
    /** The parents of this node */
    parents?: SkillTreeNode[];
    /** The child nodes of this node */
    children: SkillTreeNode[];
    requirements: AnyRequirement[];
    costs: SkillTreeNodeCosts;
    stats: StatObject;
    /** Save state property. If the node has been unlocked. */
    isUnlocked: boolean;
    constructor(namespace: DataNamespace, data: SkillTreeNodeData, tree: SkillTree, game: Game);
    registerSoftDependencies(data: SkillTreeNodeData, game: Game): void;
}
declare class SkillTreeNodeUnlockedEvent extends GameEvent {
    tree: SkillTree;
    node: SkillTreeNode;
    constructor(tree: SkillTree, node: SkillTreeNode);
}
declare type SkillTreeEvents = {
    pointsChanged: GameEvent;
    nodeUnlocked: SkillTreeNodeUnlockedEvent;
};
declare class SkillTree extends NamespacedObject implements EncodableObject, IGameEventEmitter<SkillTreeEvents> {
    game: Game;
    skill: AnySkill;
    _events: import("mitt").Emitter<SkillTreeEvents>;
    on: {
        <Key extends keyof SkillTreeEvents>(type: Key, handler: import("mitt").Handler<SkillTreeEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<SkillTreeEvents>): void;
    };
    off: {
        <Key extends keyof SkillTreeEvents>(type: Key, handler?: import("mitt").Handler<SkillTreeEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<SkillTreeEvents>): void;
    };
    get media(): string;
    get name(): string;
    get points(): number;
    _name: string;
    _media: string;
    unlockRequirements: AnyRequirement[];
    nodes: NamespaceRegistry<SkillTreeNode>;
    root: SkillTreeNode[];
    /** List of nodes that have been unlocked */
    unlockedNodes: SkillTreeNode[];
    /** Save property. How many skill points are available to spend. */
    _points: number;
    constructor(namespace: DataNamespace, data: SkillTreeData, game: Game, skill: AnySkill);
    registerSoftDependencies(data: SkillTreeData, game: Game): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /** Called for each skill tree on save load. */
    onLoad(): void;
    getNodeCosts(node: SkillTreeNode): Costs;
    canAffordNode(node: SkillTreeNode): boolean;
    onNodeIconClick(node: SkillTreeNode): Promise<void>;
    unlockNode(node: SkillTreeNode): void;
    onNodeUnlocked(node: SkillTreeNode): void;
    addPoints(amount: number): void;
}
declare class DummySkillTree extends SkillTree {
    constructor(namespace: DataNamespace, localID: string, game: Game);
}
