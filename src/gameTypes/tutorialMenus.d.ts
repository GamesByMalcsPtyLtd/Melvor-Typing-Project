declare class TutorialStageDisplayElement extends HTMLElement {
    _content: DocumentFragment;
    header: HTMLDivElement;
    stageStatus: HTMLSpanElement;
    stageName: HTMLSpanElement;
    stageDescription: HTMLSpanElement;
    taskCompletion: HTMLHeadingElement;
    pageIcon: HTMLImageElement;
    pageLink: HTMLAnchorElement;
    taskContainer: HTMLDivElement;
    claimRewardsButton: HTMLButtonElement;
    get displayedStage(): TutorialStage | undefined;
    _displayedStage?: TutorialStage;
    displayedTasks: {
        taskImage: HTMLImageElement;
        taskQuantity: HTMLSpanElement;
        taskIcon: HTMLElement;
    }[];
    rewardSpans: HTMLSpanElement[];
    constructor();
    connectedCallback(): void;
    setStage(stage: TutorialStage, tutorial: Tutorial): void;
    updateTasks(stage: TutorialStage): void;
    getTaskCount(task: TutorialTask): string;
    getTaskIconClass(task: TutorialTask): string;
    updateTaskCompletion(completedTasks: number, totalTasks: number): void;
    updateStageStatus(stage: TutorialStage): void;
    setActive(): void;
    setCompleted(): void;
    setClaimed(): void;
    setHeaderClass(className: 'bg-tutorial-claimed' | 'bg-primary'): void;
}
declare class TutorialProgressDisplayElement extends HTMLElement {
    _content: DocumentFragment;
    skipButton: HTMLButtonElement;
    stagesCompleted: HTMLSpanElement;
    totalStages: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    init(tutorial: Tutorial): void;
    updateProgress(tutorial: Tutorial): void;
}
