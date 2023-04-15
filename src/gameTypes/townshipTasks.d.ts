interface TownshipTaskRewardsData {
    /** GP awarded upon completion of the task */
    gp: number;
    /** Slayer coins awarded upon completion of the task */
    slayerCoins: number;
    /** Items awarded upon completion of the task */
    items: IDQuantity[];
    /** Skill experience awarded upon completion of the task */
    skillXP: IDQuantity[];
    /** Township resources awarded upon completion of the task */
    townshipResources: IDQuantity[];
}
interface MonsterQuantity {
    monster: Monster;
    quantity: number;
}
interface MonsterWithItemQuantity {
    monster: Monster;
    quantity: number;
    items: EquipmentItem[];
}
interface SkillQuantity {
    skill: AnySkill;
    quantity: number;
}
interface BuildingQuantity {
    building: TownshipBuilding;
    quantity: number;
}
interface TownshipTaskTrackingData {
    count: number;
    required: number;
    currentCount: number;
}
interface TownshipTaskTracker {
    monsters: Array<TownshipTaskTrackingData>;
    skillXP: Array<TownshipTaskTrackingData>;
    buildings: Array<TownshipTaskTrackingData>;
    monsterWithItems: Array<TownshipTaskTrackingData>;
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
    /** Items that must be handed in to complete the task */
    items: IDQuantity[];
    /** Monsters that must be killed to complete the task */
    monsters: IDQuantity[];
    /** Skill XP that must be earned to complete the task */
    skillXP: IDQuantity[];
    /** Township Buildings that must be actively built to complete the task */
    buildings: IDQuantity[];
    /** Monsters that must be killed while the specified items are equipped to complete the task */
    monsterWithItems?: MonsterItemIDQuantity[];
}
interface MonsterItemIDQuantity {
    /** The ID of the Monster that must be killed */
    monsterID: string;
    /** The IDs of EquipmentItems that the player must wear */
    itemIDs: string[];
    /** The number of times the monster must be killed. Integer range [1,Infinity) */
    quantity: number;
}
declare class TownshipTaskGoals {
    items: AnyItemQuantity[];
    monsters: MonsterQuantity[];
    monsterWithItems: MonsterWithItemQuantity[];
    skillXP: SkillQuantity[];
    buildings: BuildingQuantity[];
    constructor(data: TownshipTaskGoalsData, game: Game);
}
/** Data for constructing a TownshipTask object */
interface TownshipTaskData extends IDData {
    /** The display name of the task */
    name: string;
    /** A description of the task */
    description?: string;
    /** The category of the task. This is used to group tasks together */
    category: TownshipTaskCategory;
    /** The requirements for completing the task */
    goals: TownshipTaskGoalsData;
    /** The rewards given for completing the task */
    rewards: TownshipTaskRewardsData;
    /** Requirements the player must meet before starting the task */
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
declare class TownshipCasualTask extends TownshipTask {
    get name(): string;
    constructor(namespace: DataNamespace, data: TownshipTaskData, game: Game);
}
declare class DummyTownshipCasualTask extends TownshipCasualTask {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class TownshipCasualTasks implements EncodableObject {
    game: Game;
    readonly MAX_CASUAL_TASKS = 5;
    readonly NEW_TASK_INTERVAL: number;
    readonly GP_COST_TO_SKIP = 10000000;
    currentCasualTasks: Array<TownshipCasualTask>;
    casualTaskTracker: Array<TownshipTaskTracker>;
    completedCasualTasks: Array<TownshipCasualTask>;
    allCasualTasks: NamespaceRegistry<TownshipCasualTask>;
    casualTasksCompleted: number;
    newTaskTimer: Timer;
    constructor(game: Game);
    registerData(namespace: DataNamespace, taskData: TownshipTaskData[]): void;
    get availableDailyTasks(): TownshipCasualTask[];
    get gpCostToSkip(): number;
    get xpReward(): number;
    get gpReward(): number;
    get slayerCoinReward(): number;
    get blankDailyTaskTracker(): TownshipTaskTracker;
    onLoad(): void;
    tick(): void;
    skipTask(task: TownshipCasualTask): void;
    removeTask(task: TownshipCasualTask): void;
    resetAllDailyTasks(): void;
    get timeToNextTask(): number;
    selectNewDailyTask(): void;
    addDailyTask(task: TownshipCasualTask): void;
    addDailyTaskToTracker(task: TownshipCasualTask, index: number): void;
    addMonsterGoalToTrackedTask(goal: MonsterQuantity, id: number): void;
    addSkillXPGoalToTrackedTask(goal: SkillQuantity, id: number): void;
    addMonsterWithItemsGoalToTrackedTask(goal: MonsterWithItemQuantity, id: number): void;
    getCompletedDailyTaskCount(): number;
    areMonsterGoalsComplete(task: TownshipCasualTask): boolean;
    isMonsterGoalComplete(goal: MonsterQuantity, index: number, monsterGoalID: number): boolean;
    areMonsterWithItemsGoalsComplete(task: TownshipCasualTask): boolean;
    isMonsterWithItemsGoalComplete(goal: MonsterQuantity, index: number, monsterGoalID: number): boolean;
    areSkillXPGoalsComplete(task: TownshipCasualTask): boolean;
    completeDailyTask(task: TownshipCasualTask): void;
    checkForDailyTaskComplete(): boolean;
    updateForValidMonsterWithItemsKill(monster: Monster): void;
    startTaskTimer(): void;
    addNewTask(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
declare class TownshipTasks {
    game: Game;
    completedTasks: Set<TownshipTask>;
    activeTaskCategory: TownshipTaskCategory | 'None';
    tasks: NamespaceRegistry<TownshipTask>;
    taskReadyIcon: boolean;
    _tasksCompleted: number;
    get tasksCompleted(): number;
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
    skipTownshipTutorial(): void;
    getTaskCountInCategory(category: TownshipTaskCategory): number;
    getCompletedTaskCountInCategory(category: TownshipTaskCategory): number;
    /**
     * Function to perform task completion and checks
     * @param task
     */
    completeTask(task: TownshipTask | TownshipCasualTask, giveRewards?: boolean, forceComplete?: boolean): void;
    showTaskComplete(): void;
    checkForTaskReady(forceCheck?: boolean): void;
    checkForTaskReadyInCategory(category: TownshipTaskCategory): boolean;
    /**
     * Determines if the task is actually complete
     * @param taskTracker
     * @returns
     */
    checkTaskCompletion(task: TownshipTask | TownshipCasualTask): boolean;
    isItemTaskComplete(itemGoal: AnyItemQuantity): boolean;
    isMonsterTaskComplete(monsterGoal: MonsterQuantity): boolean;
    isSkillTaskComplete(skillTask: SkillQuantity): boolean;
    isTownshipBuildingTaskComplete(buildingTask: BuildingQuantity): boolean;
    updateAllTasks(): void;
    isTaskCategoryComplete(category: TownshipTaskCategory): boolean;
    /**
     * Updates all tracked tasks upon enemy death
     * @param monster
     */
    updateMonsterTasks(monster: Monster): void;
    updateTownshipBuildingTasks(building: TownshipBuilding, qty: number): void;
    /**
     * Removes the task items from bank when turning in task completion
     * @param task
     */
    removeTaskItemsFromBank(task: TownshipTask | TownshipCasualTask): void;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    createTaskCompletedBreakdown(): HTMLElement;
    getTaskCompletedBreakdownText(): string;
    getDailyTasksCompletedBreakdownText(): string;
    getNextDailyTaskTimerText(): string;
    updateTaskCompletedBreakdownText(): void;
    updateNextDailyTaskTimerText(): void;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    createTaskButtonHeader(): HTMLElement;
    /**
     * Creates a task element to display
     * TODO: REPLACE WITH TEMPLATES
     */
    createTaskElement(task: TownshipTask | TownshipCasualTask): HTMLElement;
    createTaskDescription(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates task tasks element to display
     */
    createTaskTasks(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates task item task element to display
     */
    createTaskItemTask(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates task monster task element to display
     * @param task
     */
    createTaskMonsterTask(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates task skill xp task element to display
     * @param task
     */
    createTaskSkillTask(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates task skill xp task element to display
     * @param task
     */
    createTaskTownshipBuildingTask(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates task monster task element to display
     * @param task
     */
    createTaskMonsterWithItemTask(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates task rewards element to display
     * @param task
     */
    createTaskRewards(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates the task GP reward element to display
     */
    createTaskGPReward(task: TownshipTask | TownshipCasualTask): HTMLElement;
    /**
     * Creates the task Slayer Coin reward element to display
     */
    createTaskSlayerCoinReward(task: TownshipTask | TownshipCasualTask): HTMLElement;
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
    getTaskGPReward(task: TownshipTask | TownshipCasualTask): number;
    getTaskSCReward(task: TownshipTask | TownshipCasualTask): number;
    getTaskSkillXPReward(task: TownshipTask | TownshipCasualTask, skill: AnySkill): number;
    claimTaskRewards(task: TownshipTask | TownshipCasualTask): void;
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
declare type TownshipTaskCategory = 'Easy' | 'Normal' | 'Hard' | 'VeryHard' | 'Elite' | 'TownshipTutorial' | 'Daily' | 'TotH';
