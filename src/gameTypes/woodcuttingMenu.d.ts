declare class WoodcuttingTreeMenu extends ContainedComponent {
    tree: WoodcuttingTree;
    woodcutting: Woodcutting;
    container: HTMLDivElement;
    cutText: HTMLElement;
    treeName: HTMLElement;
    mastery: MasteryDisplay;
    button: HTMLAnchorElement;
    xpText: HTMLElement;
    intervalText: HTMLElement;
    progressBar: HTMLDivElement;
    constructor(tree: WoodcuttingTree, woodcutting: Woodcutting, before: HTMLElement);
    localize(): void;
    updateRates(): void;
    setActive(): void;
    setInactive(): void;
}
/** Class to manage the woodcutting page's menu */
declare class WoodcuttingMenu {
    woodcutting: Woodcutting;
    treeMenus: Map<WoodcuttingTree, WoodcuttingTreeMenu>;
    progressBar: ProgressBar;
    infoMessage: HTMLHeadingElement;
    grantsContainer: HTMLDivElement;
    lockedTree: HTMLDivElement;
    nextLevelText: HTMLElement;
    shopItemPurchased: HTMLElement;
    treeGrants: TreeGrantElements[];
    lowerGrants: HTMLDivElement;
    xpIcon: XPIcon;
    poolXPIcon: MasteryPoolIcon;
    intervalIcon: IntervalIcon;
    selectedTrees: Set<WoodcuttingTree>;
    constructor(woodcutting: Woodcutting);
    localize(): void;
    updateTreeRates(): void;
    updateTreeUnlocks(): void;
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
