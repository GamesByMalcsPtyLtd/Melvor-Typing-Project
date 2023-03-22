/** Menu class for thieving */
declare class ThievingMenu {
    container: HTMLElement;
    areaPanels: Map<ThievingArea, ThievingAreaPanel>;
    npcNavs: Map<ThievingNPC, ThievingNPCNav>;
    activePanel: ThievingAreaPanel | undefined;
    constructor(containerID: string);
    createInfoBox(container: HTMLDivElement): ThievingInfoBox;
    hideAreaPanel(area: ThievingArea): void;
    showAreaPanel(area: ThievingArea): void;
    updateNPCsForLevel(level: number): void;
    updateNPCButtons(): void;
    selectNPC(npc: ThievingNPC, area: ThievingArea): void;
    selectNPCInPanel(npc: ThievingNPC, panel: ThievingAreaPanel): void;
    updateAllAreaPanels(): void;
    setStopButton(area: ThievingArea): void;
    removeStopButton(): void;
    updateAreaPanelInfo(panel: ThievingAreaPanel): void;
    updateInfoContainerForNPC(panel: ThievingAreaPanel, npc: ThievingNPC): void;
    showNPCDrops(npc: ThievingNPC, area: ThievingArea): void;
    formatSpecialDrop(item: AnyItem, qty?: number): string;
    getProgressBar(area: ThievingArea): ProgressBar | undefined;
    localize(): void;
}
declare type ThievingAreaPanel = {
    panelContainer: HTMLDivElement;
    targetContainer: HTMLDivElement;
    infoContainer: HTMLDivElement;
    infoBoxName: HTMLElement;
    infoSkillName: HTMLElement;
    infoBoxImage: HTMLImageElement;
    startButton: HTMLButtonElement;
    dropsButton: HTMLButtonElement;
    progressBar: ProgressBar;
    infoBox: ThievingInfoBox;
    selectedNPC: ThievingNPC | -1;
    area: ThievingArea;
    areaName: HTMLSpanElement;
};
declare type ThievingInfoBox = {
    container: HTMLDivElement;
    xp: XPIcon;
    interval: IntervalIcon;
    stealth: StealthIcon;
    double: DoublingIcon;
    masteryXP: MasteryXPIcon;
    poolXP: MasteryPoolIcon;
};
declare type ThievingNPCNav = {
    npcName: HTMLSpanElement;
    button: HTMLAnchorElement;
    panel: ThievingAreaPanel;
    buttonContent: HTMLDivElement;
    perception: HTMLSpanElement;
    success: HTMLElement;
    maxHit: HTMLElement;
    unlock: HTMLDivElement;
    masteryDisplay: CompactMasteryDisplay;
};
