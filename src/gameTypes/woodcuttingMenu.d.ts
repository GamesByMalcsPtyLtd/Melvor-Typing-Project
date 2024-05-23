declare class WoodcuttingTreeElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    button: HTMLAnchorElement;
    treeName: HTMLSpanElement;
    xpText: HTMLSpanElement;
    intervalText: HTMLSpanElement;
    treeImage: HTMLImageElement;
    progressBar: HTMLDivElement;
    requirements: HTMLDivElement;
    requirementElements: HTMLElement[];
    levelRequired: HTMLSpanElement;
    abyssalLevelRequired: HTMLDivElement;
    mastery: MasteryDisplayElement;
    lockedContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    updateTreeVisibility(tree: WoodcuttingTree, woodcutting: Woodcutting): void;
    setMastery(woodcutting: Woodcutting, tree: WoodcuttingTree): void;
    setTree(tree: WoodcuttingTree, woodcutting: Woodcutting): void;
    setTreeUnlocked(): void;
    setTreeLocked(tree: WoodcuttingTree, game: Game): void;
    updateLockedRequirements(tree: WoodcuttingTree, game: Game): void;
    updateRates(tree: WoodcuttingTree, woodcutting: Woodcutting): void;
    setActive(): void;
    setInactive(): void;
}
/** Class to manage the woodcutting page's menu */
declare class WoodcuttingMenu {
    woodcutting: Woodcutting;
    treeMenus: Map<WoodcuttingTree, WoodcuttingTreeElement>;
    progressBar: ProgressBarElement;
    infoMessage: HTMLHeadingElement;
    grantsContainer: HTMLDivElement;
    treeContainer: HTMLDivElement;
    treeGrants: TreeGrantElements[];
    lowerGrants: HTMLDivElement;
    xpIcon: XpIconElement;
    abyssalXPIcon: AbyssalXpIconElement;
    poolXPIcon: MasteryPoolIconElement;
    intervalIcon: IntervalIconElement;
    selectedTrees: Set<WoodcuttingTree>;
    constructor(woodcutting: Woodcutting);
    createTreeMenus(game: Game): void;
    updateTreeRates(woodcutting: Woodcutting): void;
    updateTreeUnlocks(game: Game): void;
    setTrees(trees: Set<WoodcuttingTree>): void;
    destroyTreeGrants(treeGrant: TreeGrantElements): void;
    /** Updates the currently selected tree icons */
    updateSelectedTrees(): void;
}
interface TreeGrantElements {
    itemIcon: ItemQuantityIconElement;
    masteryXPIcon: MasteryXpIconElement;
    container: HTMLDivElement;
}
