declare class ThievingNPCNavElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    button: HTMLAnchorElement;
    buttonContent: HTMLDivElement;
    npcImage: HTMLImageElement;
    npcName: HTMLSpanElement;
    masteryDisplay: CompactMasteryDisplayElement;
    perception: HTMLSpanElement;
    success: HTMLSpanElement;
    maxHit: HTMLSpanElement;
    unlock: HTMLDivElement;
    level: HTMLSpanElement;
    abyssalLevel: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setNPC(npc: ThievingNPC, thieving: Thieving): void;
    updateNPC(npc: ThievingNPC, game: Game): void;
    setLocked(npc: ThievingNPC, thieving: Thieving): void;
    setUnlocked(callback: VoidFunction): void;
}
declare class ThievingInfoBoxElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    stealth: StealthIconElement;
    double: DoublingIconElement;
    xp: XpIconElement;
    abyssalXP: AbyssalXpIconElement;
    masteryXP: MasteryXpIconElement;
    poolXP: MasteryPoolIconElement;
    interval: IntervalIconElement;
    constructor();
    connectedCallback(): void;
    setNPC(thieving: Thieving, npc: ThievingNPC): void;
}
declare class ThievingAreaPanelElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    header: HTMLDivElement;
    eyeIcon: HTMLElement;
    areaName: HTMLSpanElement;
    targetContainer: HTMLDivElement;
    infoContainer: HTMLDivElement;
    infoSkillName: HTMLElement;
    infoBoxName: HTMLSpanElement;
    infoBoxImage: HTMLImageElement;
    infoBox: ThievingInfoBoxElement;
    startButton: HTMLButtonElement;
    dropsButton: HTMLButtonElement;
    npcNavs: Map<ThievingNPC, ThievingNPCNavElement>;
    selectedNPC?: ThievingNPC;
    progressBar: ProgressBarElement;
    constructor();
    connectedCallback(): void;
    setArea(area: ThievingArea, thieving: Thieving): void;
    hide(): void;
    show(): void;
    updateNPCsForLevel(thieving: Thieving, area: ThievingArea): void;
    updateNPCButtons(game: Game): void;
    selectNPC(area: ThievingArea, npc: ThievingNPC, thieving: Thieving): void;
    updateAreaInfo(thieving: Thieving): void;
    updateNPCInfo(thieving: Thieving, npc: ThievingNPC): void;
    setStopButton(thieving: Thieving): void;
    removeStopButton(thieving: Thieving, area: ThievingArea): void;
}
/** Menu class for thieving */
declare class ThievingMenu {
    areaPanels: Map<ThievingArea, ThievingAreaPanelElement>;
    activeArea: ThievingArea | undefined;
    constructor(containerID: string, thieving: Thieving);
    hideAreaPanel(area: ThievingArea): void;
    showAreaPanel(area: ThievingArea): void;
    hideArea(area: ThievingArea): void;
    showArea(area: ThievingArea): void;
    updateNPCsForLevel(thieving: Thieving): void;
    updateNPCButtons(game: Game): void;
    selectNPC(npc: ThievingNPC, area: ThievingArea, thieving: Thieving): void;
    updateAllAreaPanels(thieving: Thieving): void;
    setStopButton(thieving: Thieving, area: ThievingArea): void;
    removeStopButton(thieving: Thieving): void;
    getProgressBar(area: ThievingArea): ProgressBarElement | undefined;
}
