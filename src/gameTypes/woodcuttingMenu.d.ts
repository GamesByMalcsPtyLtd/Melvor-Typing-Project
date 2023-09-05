declare class WoodcuttingTreeElement extends HTMLElement {
    _content: DocumentFragment;
    button: HTMLAnchorElement;
    unlockedText: HTMLDivElement;
    treeName: HTMLSpanElement;
    xpText: HTMLSpanElement;
    intervalText: HTMLSpanElement;
    lockedText: HTMLDivElement;
    treeImage: HTMLImageElement;
    progressContainer: HTMLDivElement;
    progressBar: HTMLDivElement;
    requirements: HTMLDivElement;
    requirementElements: HTMLElement[];
    levelRequired: HTMLDivElement;
    shopPurchaseRequired: HTMLElement;
    masteryContainer: HTMLDivElement;
    mastery: MasteryDisplay;
    constructor();
    connectedCallback(): void;
    setTreeUnlocked(tree: WoodcuttingTree, woodcutting: Woodcutting): void;
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
    progressBar: ProgressBar;
    infoMessage: HTMLHeadingElement;
    grantsContainer: HTMLDivElement;
    treeContainer: HTMLDivElement;
    treeGrants: TreeGrantElements[];
    lowerGrants: HTMLDivElement;
    xpIcon: XPIcon;
    poolXPIcon: MasteryPoolIcon;
    intervalIcon: IntervalIcon;
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
    itemIcon: ItemQtyIcon;
    masteryXPIcon: MasteryXPIcon;
    container: HTMLDivElement;
}
