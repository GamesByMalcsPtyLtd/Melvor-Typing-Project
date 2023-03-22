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
    _description?: string;
    _name: string;
    constructor(namespace: DataNamespace, data: TownshipTaskData, game: Game);
}
declare class DummyTownshipTask extends TownshipTask {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class TownshipTasks {
    game: Game;
    completedTasks: Set<TownshipTask>;
    activeTaskCategory: TownshipTaskCategory | 'None';
    tasks: NamespaceRegistry<TownshipTask>;
    taskReadyIcon: boolean;
    get tasksCompleted(): number;
    _tasksCompleted: number;
    get tutorialTasksCompleted(): number;
    get allTasksComplete(): boolean;
    constructor(game: Game);
    registerData(namespace: DataNamespace, taskData: TownshipTaskData[]): void;
    /**
     * Initialization function for Township tasks on game load
     */
    onLoad(): void;
    computeTaskTotal(): void;
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
    showTaskComplete(): void;
    checkForTaskReady(forceCheck?: boolean): void;
    checkForTaskReadyInCategory(category: TownshipTaskCategory): boolean;
    /**
     * Determines if the task is actually complete
     * @param taskTracker
     * @returns
     */
    checkTaskCompletion(task: TownshipTask): boolean;
    isItemTaskComplete(itemGoal: AnyItemQuantity): boolean;
    isMonsterTaskComplete(monsterGoal: MonsterQuantity): boolean;
    isSkillTaskComplete(skillTask: SkillQuantity): boolean;
    isTownshipBuildingTaskComplete(buildingTask: BuildingQuantity): boolean;
    isTaskRequirementMet(task: TownshipTask): boolean;
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
    removeTaskItemsFromBank(task: TownshipTask): void;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    createTaskCompletedBreakdown(): HTMLElement;
    getTaskCompletedBreakdownText(): string;
    updateTaskCompletedBreakdownText(): void;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    createTaskButtonHeader(): HTMLElement;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    createTaskElement(task: TownshipTask): HTMLElement;
    createTaskDescription(task: TownshipTask): HTMLElement;
    /**
     * Creates task tasks element to display
     */
    createTaskTasks(task: TownshipTask): HTMLElement;
    /**
     * Creates task item task element to display
     */
    createTaskItemTask(task: TownshipTask): HTMLElement;
    /**
     * Creates task monster task element to display
     * @param task
     */
    createTaskMonsterTask(task: TownshipTask): HTMLElement;
    /**
     * Creates task skill xp task element to display
     * @param task
     */
    createTaskSkillTask(task: TownshipTask): HTMLElement;
    /**
     * Creates task skill xp task element to display
     * @param task
     */
    createTaskTownshipBuildingTask(task: TownshipTask): HTMLElement;
    /**
     * Creates task rewards element to display
     * @param task
     */
    createTaskRewards(task: TownshipTask): HTMLElement;
    /**
     * Creates the task GP reward element to display
     */
    createTaskGPReward(task: TownshipTask): HTMLElement;
    /**
     * Creates the task Slayer Coin reward element to display
     */
    createTaskSlayerCoinReward(task: TownshipTask): HTMLElement;
    /**
     * Creates the task Item reward element to display
     */
    createTaskItemsReward(item: AnyItem, quantity: number): HTMLElement;
    /**
     * Creates the task Skill XP reward element to display
     */
    createTaskSkillXPReward(skill: AnySkill, quantity: number): HTMLElement;
    /**
     * Creates the task Township resource reward element to display
     */
    createTaskTownshipResourceReward(resource: TownshipResource, quantity: number): HTMLElement;
    claimTaskRewards(task: TownshipTask): void;
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
    createTaskCategory(category: TownshipTaskCategory): HTMLElement;
    /**
     * Creates a task category link element
     * @param category The Task Category
     */
    createTaskLinkCategory(category: TownshipTaskCategory): HTMLElement;
    updateAllTaskProgress(): void;
    updateTaskProgress(category: TownshipTaskCategory): void;
    getTownshipTaskCategoryIcon(category: TownshipTaskCategory): string;
    getTownshipTaskCategoryName(category: TownshipTaskCategory): string;
    getTownshipTaskCategoryBG(category: TownshipTaskCategory): string;
    countTotalTasksInCategory(category: TownshipTaskCategory): number;
    isPlayerLookingAtTask(task: TownshipTask): boolean;
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
