declare class TutorialStageDisplayElement extends HTMLElement {
    private _content;
    private header;
    private stageStatus;
    private stageName;
    private stageDescription;
    private taskCompletion;
    private pageIcon;
    private pageLink;
    private taskContainer;
    private claimRewardsButton;
    get displayedStage(): TutorialStage | undefined;
    private _displayedStage?;
    private displayedTasks;
    private rewardSpans;
    constructor();
    connectedCallback(): void;
    setStage(stage: TutorialStage, tutorial: Tutorial): void;
    updateTasks(stage: TutorialStage): void;
    private getTaskCount;
    private getTaskIconClass;
    private updateTaskCompletion;
    updateStageStatus(stage: TutorialStage): void;
    private setActive;
    private setCompleted;
    private setClaimed;
    private setHeaderClass;
}
declare class TutorialProgressDisplayElement extends HTMLElement {
    private _content;
    private skipButton;
    private stagesCompleted;
    private totalStages;
    constructor();
    connectedCallback(): void;
    init(tutorial: Tutorial): void;
    updateProgress(tutorial: Tutorial): void;
}
