interface TownshipTaskRewardsData {
    gp: number;
    slayerCoins: number;
    items: IDQuantity[];
    skillXP: IDQuantity[];
    townshipResources: IDQuantity[];
}
interface MonsterQuantity {
    monster: Monster;
    quantity: number;
}
interface SkillQuantity {
    skill: AnySkill;
    quantity: number;
}
interface BuildingQuantity {
    building: TownshipBuilding;
    quantity: number;
}
declare class TownshipTaskRewards {
    gp: number;
    slayerCoins: number;
    items: AnyItemQuantity[];
    skillXP: {
        skill: AnySkill;
        quantity: number;
    }[];
    townshipResources: ResourceQuantity[];
    constructor(data: TownshipTaskRewardsData, game: Game);
}
interface TownshipTaskGoalsData {
    items: IDQuantity[];
    monsters: IDQuantity[];
    skillXP: IDQuantity[];
    buildings: IDQuantity[];
}
declare class TownshipTaskGoals {
    items: AnyItemQuantity[];
    monsters: MonsterQuantity[];
    skillXP: SkillQuantity[];
    buildings: BuildingQuantity[];
    constructor(data: TownshipTaskGoalsData, game: Game);
}
interface TownshipTaskData extends IDData {
    name: string;
    description?: string;
    category: TownshipTaskCategory;
    goals: TownshipTaskGoalsData;
    rewards: TownshipTaskRewardsData;
    requirements: AnyRequirementData[];
}
declare class TownshipTask extends NamespacedObject {
    get name(): string;
    get description(): string;
    get hasDescription(): boolean;
    category: TownshipTaskCategory;
    goals: TownshipTaskGoals;
    rewards: TownshipTaskRewards;
    requirements: AnyRequirement[];
    private _description?;
    private _name;
    constructor(namespace: DataNamespace, data: TownshipTaskData, game: Game);
}
declare class TownshipTasks {
    private game;
    completedTasks: Set<TownshipTask>;
    private activeTaskCategory;
    tasks: NamespaceRegistry<TownshipTask>;
    private taskReadyIcon;
    get tasksCompleted(): number;
    get allTasksComplete(): boolean;
    constructor(game: Game);
    registerData(namespace: DataNamespace, taskData: TownshipTaskData[]): void;
    /**
     * Initialization function for Township tasks on game load
     */
    onLoad(): void;
    onPageChange(): void;
    resetTutorial(): void;
    skipTownshipTutorial(): void;
    get isTownshipTutorialComplete(): boolean;
    getTaskCountInCategory(category: TownshipTaskCategory): number;
    getCompletedTaskCountInCategory(category: TownshipTaskCategory): number;
    /**
     * Function to perform task completion and checks
     * @param task
     */
    completeTask(task: TownshipTask, giveRewards?: boolean, forceComplete?: boolean): void;
    private showTaskComplete;
    checkForTaskReady(forceCheck?: boolean): void;
    checkForTaskReadyInCategory(category: TownshipTaskCategory): boolean;
    /**
     * Determines if the task is actually complete
     * @param taskTracker
     * @returns
     */
    private checkTaskCompletion;
    private isItemTaskComplete;
    private isMonsterTaskComplete;
    private isSkillTaskComplete;
    private isTownshipBuildingTaskComplete;
    private isTaskRequirementMet;
    updateAllTasks(): void;
    isTaskCategoryComplete(category: TownshipTaskCategory): boolean;
    /**
     * Updates all tracked tasks upon enemy death
     * @param monster
     */
    updateMonsterTasks(monster: Monster): void;
    updateSkillTasks(skill: AnySkill, xp: number): void;
    updateTownshipBuildingTasks(building: TownshipBuilding, qty: number): void;
    /**
     * Removes the task items from bank when turning in task completion
     * @param task
     */
    private removeTaskItemsFromBank;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    private createTaskCompletedBreakdown;
    private getTaskCompletedBreakdownText;
    updateTaskCompletedBreakdownText(): void;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    private createTaskButtonHeader;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    createTaskElement(task: TownshipTask): HTMLElement;
    createTaskDescription(task: TownshipTask): HTMLElement;
    /**
     * Creates task tasks element to display
     */
    private createTaskTasks;
    /**
     * Creates task item task element to display
     */
    private createTaskItemTask;
    /**
     * Creates task monster task element to display
     * @param task
     */
    private createTaskMonsterTask;
    /**
     * Creates task skill xp task element to display
     * @param task
     */
    private createTaskSkillTask;
    /**
     * Creates task skill xp task element to display
     * @param task
     */
    private createTaskTownshipBuildingTask;
    /**
     * Creates task rewards element to display
     * @param task
     */
    private createTaskRewards;
    /**
     * Creates the task GP reward element to display
     */
    private createTaskGPReward;
    /**
     * Creates the task Slayer Coin reward element to display
     */
    private createTaskSlayerCoinReward;
    /**
     * Creates the task Item reward element to display
     */
    private createTaskItemsReward;
    /**
     * Creates the task Skill XP reward element to display
     */
    private createTaskSkillXPReward;
    /**
     * Creates the task Township resource reward element to display
     */
    private createTaskTownshipResourceReward;
    private claimTaskRewards;
    /**
     * Displays all Township Task categories and their progress
     */
    showAllTaskCategories(): void;
    /**
     * Displays a Township Tasks for specified category
     * @param category The Task Category
     */
    showTaskCategory(category: TownshipTaskCategory): void;
    /**
     * Creates a task category element
     * @param category The Task Category
     */
    private createTaskCategory;
    /**
     * Creates a task category link element
     * @param category The Task Category
     */
    private createTaskLinkCategory;
    private updateAllTaskProgress;
    private updateTaskProgress;
    private getTownshipTaskCategoryIcon;
    private getTownshipTaskCategoryName;
    private getTownshipTaskCategoryBG;
    private countTotalTasksInCategory;
    private isPlayerLookingAtTask;
}
declare type TaskTrackingData = {
    task: TownshipTask;
    monsters: {
        monster: Monster;
        quantity: number;
    }[];
    skills: {
        skill: AnySkill;
        quantity: number;
    }[];
    townshipBuildings: {
        building: TownshipBuilding;
        quantity: number;
    }[];
};
declare type TownshipTaskCategory = 'Easy' | 'Normal' | 'Hard' | 'VeryHard' | 'Elite' | 'TownshipTutorial';
