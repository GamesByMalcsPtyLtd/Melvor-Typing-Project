declare class SkillTreeButtonElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    viewBtn: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setSkill(skill: AnySkill): void;
}
declare class SkillTreeNodeInfoElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    name: HTMLSpanElement;
    stats: HTMLDivElement;
    requirements: HTMLDivElement;
    costs: HTMLDivElement;
    costElements: HTMLElement[];
    requirementElements: HTMLElement[];
    constructor();
    connectedCallback(): void;
    setNode(tree: SkillTree, node: SkillTreeNode): void;
    clearRequirements(): void;
    setRequirements(node: SkillTreeNode): void;
    clearCosts(): void;
    setCosts(tree: SkillTree, node: SkillTreeNode): void;
    createCost(media: string, text: string): HTMLSpanElement;
    updateStatus(tree: SkillTree, node: SkillTreeNode): void;
    updateRequirements(node: SkillTreeNode): void;
    updateCosts(tree: SkillTree, node: SkillTreeNode): void;
}
declare class SkillTreeNodeIconElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    name: HTMLSpanElement;
    iconImage: HTMLImageElement;
    lockedImage: HTMLImageElement;
    description: HTMLDivElement;
    pointCost: HTMLSpanElement;
    tooltipContent: SkillTreeNodeInfoElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setNode(tree: SkillTree, node: SkillTreeNode): void;
    updateImage(tree: SkillTree, node: SkillTreeNode): void;
    updatePointCost(tree: SkillTree, node: SkillTreeNode): void;
    updateModifiers(tree: SkillTree, node: SkillTreeNode): void;
    updateStatus(tree: SkillTree, node: SkillTreeNode): void;
    updateCosts(tree: SkillTree, node: SkillTreeNode): void;
}
declare class SkillTreeRenderQueue {
    requirements: boolean;
    costs: boolean;
    currentPoints: boolean;
}
interface SkillTreeMenuEdge {
    from: SkillTreeNode;
    to: SkillTreeNode;
    path: SVGPathElement;
}
declare class SkillTreeMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    nodeScrollContainer: HTMLDivElement;
    nodeContainer: HTMLDivElement;
    edgeContainer: SVGSVGElement;
    zoomIn: HTMLButtonElement;
    zoomOut: HTMLButtonElement;
    pointsCount: HTMLSpanElement;
    pointsTotal: HTMLSpanElement;
    dropdownBtn: HTMLButtonElement;
    dropdownItems: HTMLDivElement;
    elementScrollDragger: ElementScrollDragger;
    get currentSkillTree(): SkillTree | undefined;
    _currentSkillTree?: SkillTree;
    nodeIcons: SkillTreeNodeIconElement[];
    nodeIconMap: Map<SkillTreeNode, SkillTreeNodeIconElement>;
    edges: SkillTreeMenuEdge[];
    zoomLevel: number;
    get sizeScale(): number;
    renderQueue: SkillTreeRenderQueue;
    eventUnlisteners: VoidFunction[];
    constructor();
    initialize(game: Game): void;
    createDropdownItem(skill: AnySkill): void;
    getSkillItem(skill: AnySkill): HTMLImageElement;
    connectedCallback(): void;
    getNodeIcon(node: SkillTreeNode): SkillTreeNodeIconElement | undefined;
    updateMenu(skill: AnySkill): void;
    setSkillTree(tree: SkillTree, game: Game): void;
    setIconPosition(icon: SkillTreeNodeIconElement, position: {
        width: number;
        height: number;
        x: number;
        y: number;
    }): void;
    computeEdgePath(points: {
        x: number;
        y: number;
    }[]): string;
    computeLayout(tree: SkillTree): dagre.graphlib.Graph<{}>;
    onZoomChange(): void;
    onZoomIn(): void;
    onZoomOut(): void;
    updateEdge(edge: SkillTreeMenuEdge): void;
    assignRenderListeners(tree: SkillTree, game: Game): void;
    unassignRenderListeners(): void;
    onClose(): void;
    updateAllIcons(): void;
    render(): void;
    renderNodeRequirements(tree: SkillTree): void;
    renderNodeCosts(tree: SkillTree): void;
    renderCurrentPoints(tree: SkillTree): void;
    static CONFIG: {
        NODE_WIDTH: number;
        NODE_HEIGHT: number;
        MARGIN_X: number;
        NODE_SEPERATION: number;
        EDGE_SEPERATION: number;
        RANK_SEPERATION: number;
        ZOOM_LEVELS: number[];
    };
}
declare class ElementScrollDragger {
    slider: HTMLElement;
    isDown: boolean;
    preventClick: boolean;
    startX: number;
    scrollLeft: number;
    constructor(element: HTMLElement);
    init(): void;
    handleMouseDown(e: MouseEvent): void;
    handleMouseLeave(): void;
    handleMouseUp(): void;
    handleMouseMove(e: MouseEvent): void;
    handleClick(e: MouseEvent): void;
}
