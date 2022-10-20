declare class WoodcuttingTreeMenu extends ContainedComponent {
    private tree;
    private woodcutting;
    protected container: HTMLDivElement;
    private cutText;
    private treeName;
    private mastery;
    private button;
    private xpText;
    private intervalText;
    private progressBar;
    constructor(tree: WoodcuttingTree, woodcutting: Woodcutting, before: HTMLElement);
    localize(): void;
    updateRates(): void;
    setActive(): void;
    setInactive(): void;
}
/** Class to manage the woodcutting page's menu */
declare class WoodcuttingMenu {
    private woodcutting;
    private treeMenus;
    progressBar: ProgressBar;
    private infoMessage;
    private grantsContainer;
    private lockedTree;
    private nextLevelText;
    private shopItemPurchased;
    private treeGrants;
    private lowerGrants;
    private xpIcon;
    private poolXPIcon;
    private intervalIcon;
    private selectedTrees;
    constructor(woodcutting: Woodcutting);
    localize(): void;
    updateTreeRates(): void;
    updateTreeUnlocks(): void;
    setTrees(trees: Set<WoodcuttingTree>): void;
    private destroyTreeGrants;
    /** Updates the currently selected tree icons */
    updateSelectedTrees(): void;
}
interface TreeGrantElements {
    itemIcon: ItemQtyIcon;
    masteryXPIcon: MasteryXPIcon;
    container: HTMLDivElement;
}
