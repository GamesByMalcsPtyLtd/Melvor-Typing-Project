interface TownshipTaskCategoryData extends IDData {
    name: string;
    nameLang?: string;
    media: string;
    bgClass: string;
}
declare class TownshipTaskCategory extends NamespacedObject {
    get name(): string;
    get media(): string;
    bgClass: string;
    _name: string;
    _nameLang?: string;
    _media: string;
    /** The total number of tasks in this category */
    totalTasks: number;
    /** The number of tasks that have been completed in this category */
    completedTasks: number;
    get isComplete(): boolean;
    /** The number of tasks that are currently ready in this category */
    tasksReady: number;
    constructor(namespace: DataNamespace, data: TownshipTaskCategoryData, game: Game);
}
interface TownshipTaskRewardsData {
    /**
     * @deprecated use currencies instead
     * GP awarded upon completion of the task */
    gp?: number;
    /**
     * @deprecated Use currencies instead
     * Slayer coins awarded upon completion of the task */
    slayerCoins?: number;
    /** Currencies awarded upon completion of the task */
    currencies?: IDQuantity[];
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
interface WorldMapQuantity {
    worldMap: WorldMap;
    quantity: number;
}
interface TownshipTaskTrackingData {
    count: number;
    required: number;
    currentCount: number;
}
interface TownshipTaskTracker {
    monsters: TownshipTaskTrackingData[];
    skillXP: TownshipTaskTrackingData[];
    buildings: TownshipTaskTrackingData[];
    monsterWithItems: TownshipTaskTrackingData[];
}
declare class TownshipTaskRewards {
    currencies: CurrencyQuantity[];
    items: AnyItemQuantity[];
    skillXP: {
        skill: AnySkill;
        quantity: number;
    }[];
    townshipResources: ResourceQuantity[];
    constructor(data: TownshipTaskRewardsData, game: Game);
}
interface MonsterItemIDQuantity {
    /** The ID of the Monster that must be killed */
    monsterID: string;
    /** The IDs of EquipmentItems that the player must wear */
    itemIDs: string[];
    /** The number of times the monster must be killed. Integer range [1,Infinity) */
    quantity: number;
}
interface WorldMapIDQuantity {
    /** The ID of the World Map from Cartography */
    worldMapID: string;
    /** The number of Points of Interest to Discover */
    quantity: number;
}
declare type TownshipTaskGoalEvents = {
    metChanged: boolean;
    progressChanged: void;
};
declare type TownshipTaskGoalCallback = (isMet: boolean) => void;
interface ITownshipTaskGoal {
    checkIfMet(): boolean;
    onMetChanged(callback: TownshipTaskGoalCallback): void;
    offMetChanged(callback: TownshipTaskGoalCallback): void;
    onProgressChanged(callback: VoidFunction): void;
    offProgressChanged(callback: VoidFunction): void;
    getDescriptionHTML(): string;
}
interface ITownshipCasualTaskGoal extends ITownshipTaskGoal {
    progress: number;
    resetProgress(): void;
    setProgress(progress: number): void;
}
declare abstract class TownshipTaskGoal<Event extends GameEvent> implements ITownshipTaskGoal {
    game: Game;
    /** If this goal can become un-met */
    abstract readonly isReversible: boolean;
    _events: import("mitt").Emitter<TownshipTaskGoalEvents>;
    get noEventsHandled(): boolean;
    isMet: boolean;
    constructor(game: Game);
    /** Checks if this goal is currently met */
    abstract checkIfMet(): boolean;
    /** Assigns an event handler for when this goal being met changes */
    onMetChanged(callback: TownshipTaskGoalCallback): void;
    /** Unassigns an event handler for when this goal being met changes */
    offMetChanged(callback: TownshipTaskGoalCallback): void;
    /** Assigns an event handler for when this goals progress changes */
    onProgressChanged(callback: VoidFunction): void;
    /** Unassigns an event handler for when this goals progress changes */
    offProgressChanged(callback: VoidFunction): void;
    abstract getDescriptionHTML(): string;
    /** Checks if an event is valid to increase progress */
    _isEventValid(e: Event): boolean;
    _eventHandler: (e: Event) => void;
    _preSubscribe(): void;
    _postUnsubscribe(): void;
    /** Checks if this goal has been met using event data */
    abstract _metWithEvent(e: Event): boolean;
    /** Assigns the internal event handler of this goal to game events */
    abstract _assignHandler(handler: Handler<Event>): void;
    /** Unassigns the internal event handler of this goal to game events */
    abstract _unassignHandler(handler: Handler<Event>): void;
}
declare class TownshipItemGoal extends TownshipTaskGoal<ItemQuantityChangedEvent> implements ITownshipCasualTaskGoal {
    item: AnyItem;
    quantity: number;
    readonly isReversible = true;
    get progress(): number;
    constructor(data: IDQuantity, game: Game);
    resetProgress(): void;
    setProgress(progress: number): void;
    checkIfMet(): boolean;
    getDescriptionHTML(): string;
    _metWithEvent(e: ItemQuantityChangedEvent): boolean;
    _assignHandler(handler: Handler<ItemQuantityChangedEvent>): void;
    _unassignHandler(handler: Handler<ItemQuantityChangedEvent>): void;
}
declare class TownshipMonsterGoal extends TownshipTaskGoal<MonsterKilledEvent> {
    monster: Monster;
    quantity: number;
    readonly isReversible = false;
    constructor(data: IDQuantity, game: Game);
    checkIfMet(): boolean;
    getDescriptionHTML(): string;
    _metWithEvent(e: MonsterKilledEvent): boolean;
    _assignHandler(handler: Handler<MonsterKilledEvent>): void;
    _unassignHandler(handler: Handler<MonsterKilledEvent>): void;
}
declare class TownshipCasualMonsterGoal extends TownshipMonsterGoal implements ITownshipCasualTaskGoal {
    get progress(): number;
    _progress: number;
    resetProgress(): void;
    setProgress(progress: number): void;
    checkIfMet(): boolean;
    getDescriptionHTML(): string;
    _metWithEvent(e: MonsterKilledEvent): boolean;
}
declare class TownshipMonsterWithItemsGoal extends TownshipTaskGoal<MonsterKilledEvent> implements ITownshipCasualTaskGoal {
    monster: Monster;
    quantity: number;
    items: EquipmentItem[];
    readonly isReversible = false;
    get progress(): number;
    _progress: number;
    constructor(data: MonsterItemIDQuantity, game: Game);
    resetProgress(): void;
    setProgress(progress: number): void;
    checkIfMet(): boolean;
    getDescriptionHTML(): string;
    _isEventValid(e: MonsterKilledEvent): boolean;
    _metWithEvent(e: MonsterKilledEvent): boolean;
    _assignHandler(handler: Handler<MonsterKilledEvent>): void;
    _unassignHandler(handler: Handler<MonsterKilledEvent>): void;
}
declare class TownshipSkillXPGoal extends TownshipTaskGoal<SkillXPEarnedEvent> {
    skill: AnySkill;
    quantity: number;
    readonly isReversible = false;
    constructor(data: IDQuantity, game: Game);
    checkIfMet(): boolean;
    getDescriptionHTML(): string;
    _metWithEvent(e: SkillXPEarnedEvent): boolean;
    _assignHandler(handler: Handler<SkillXPEarnedEvent>): void;
    _unassignHandler(handler: Handler<SkillXPEarnedEvent>): void;
}
declare class TownshipCasualSkillXPGoal extends TownshipSkillXPGoal implements ITownshipCasualTaskGoal {
    get progress(): number;
    _progress: number;
    resetProgress(): void;
    checkIfMet(): boolean;
    setProgress(progress: number): void;
    getDescriptionHTML(): string;
    _metWithEvent(e: SkillXPEarnedEvent): boolean;
}
declare class TownshipPoiDiscoveryGoal extends TownshipTaskGoal<CartographyPOIDiscoveredEvent> {
    worldMap: WorldMap;
    quantity: number;
    readonly isReversible = false;
    cartography: Cartography;
    constructor(data: WorldMapIDQuantity, game: Game);
    checkIfMet(): boolean;
    getDescriptionHTML(): string;
    _isEventValid(e: CartographyPOIDiscoveredEvent): boolean;
    _metWithEvent(e: CartographyPOIDiscoveredEvent): boolean;
    _assignHandler(handler: Handler<CartographyPOIDiscoveredEvent>): void;
    _unassignHandler(handler: Handler<CartographyPOIDiscoveredEvent>): void;
}
declare class TownshipMapRefinementGoal extends TownshipTaskGoal<CartographyMapRefinementEvent> {
    quantity: number;
    readonly isReversible = false;
    cartography: Cartography;
    constructor(data: number, game: Game);
    checkIfMet(): boolean;
    getDescriptionHTML(): string;
    _metWithEvent(e: CartographyMapRefinementEvent): boolean;
    _assignHandler(handler: Handler<CartographyMapRefinementEvent>): void;
    _unassignHandler(handler: Handler<CartographyMapRefinementEvent>): void;
}
declare class BaseTownshipTaskGoals<GoalType extends ITownshipTaskGoal> {
    itemGoals: TownshipItemGoal[];
    allGoals: GoalType[];
    _events: import("mitt").Emitter<TownshipTaskGoalEvents>;
    _goalsMet: number;
    get noMetEventsHandled(): boolean;
    get noProgressEventsHandled(): boolean;
    checkIfMet(): boolean;
    /** Assigns an event handler for when all goals being met changes */
    onMetChanged(callback: TownshipTaskGoalCallback): void;
    /** Unassigns an event handler for when all goals being met changes */
    offMetChanged(callback: TownshipTaskGoalCallback): void;
    /** Assigns an event handler for when any of the goals progress */
    onGoalProgress(callback: VoidFunction): void;
    /** Unassigns an event handler for when any of the goals progress */
    offGoalProgress(callback: VoidFunction): void;
    _onGoalMet: TownshipTaskGoalCallback;
    _onGoalProgress: VoidFunction;
    removeItemsFromBank(game: Game): void;
}
interface TownshipTaskGoalsData {
    items?: IDQuantity[];
    monsters?: IDQuantity[];
    skillXP?: IDQuantity[];
    numPOIs?: WorldMapIDQuantity[];
    numRefinements?: number;
}
declare class TownshipTaskGoals extends BaseTownshipTaskGoals<ITownshipTaskGoal> {
    constructor(data: TownshipTaskGoalsData, game: Game);
}
interface CasualTaskGoalsData {
    items?: IDQuantity[];
    monsters?: IDQuantity[];
    monsterWithItems?: MonsterItemIDQuantity[];
    skillXP?: IDQuantity[];
}
declare class TownshipCasualTaskGoals extends BaseTownshipTaskGoals<ITownshipCasualTaskGoal> {
    constructor(data: CasualTaskGoalsData, game: Game);
    resetProgress(): void;
}
interface BaseTownshipTaskData extends IDData {
    /** Optional description of the tasks */
    description?: string;
    /** The rewards given for completing the task */
    rewards: TownshipTaskRewardsData;
}
declare abstract class BaseTownshipTask extends NamespacedObject {
    abstract readonly name: string;
    get description(): string;
    get hasDescription(): boolean;
    rewards: TownshipTaskRewards;
    _description?: string;
    constructor(namespace: DataNamespace, data: BaseTownshipTaskData, game: Game);
}
/** Data for constructing a TownshipTask object */
interface TownshipTaskData extends BaseTownshipTaskData, RealmedObjectData {
    /** The requirements for completing the task */
    goals: TownshipTaskGoalsData;
    /** The category of the task. This is used to group tasks together */
    category: string;
}
declare class TownshipTask extends BaseTownshipTask {
    get name(): string;
    goals: TownshipTaskGoals;
    category: TownshipTaskCategory;
    realm: Realm;
    constructor(namespace: DataNamespace, data: TownshipTaskData, game: Game);
}
declare class DummyTownshipTask extends TownshipTask {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface TownshipCasualTaskData extends BaseTownshipTaskData {
    /** The requirements for completing the task */
    goals: CasualTaskGoalsData;
    /** Requirements the player must meet before starting the task */
    requirements?: AnyRequirementData[];
}
declare class TownshipCasualTask extends BaseTownshipTask {
    get name(): string;
    goals: TownshipCasualTaskGoals;
    /** Requirements that must be met before this task is available to the player */
    requirements: AnyRequirement[];
    constructor(namespace: DataNamespace, data: TownshipCasualTaskData, game: Game);
}
declare class DummyTownshipCasualTask extends TownshipCasualTask {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class TownshipCasualTaskRenderQueue {
    taskTimer: boolean;
    tasksRemaining: boolean;
    tasksCompleted: boolean;
    currentTasks: boolean;
    tasksReady: boolean;
    taskGoals: Set<TownshipCasualTask>;
}
declare class TownshipCasualTasks implements EncodableObject {
    game: Game;
    readonly MAX_CASUAL_TASKS = 5;
    readonly NEW_TASK_INTERVAL: number;
    readonly GP_COST_TO_SKIP = 10000000;
    currentCasualTasks: TownshipCasualTask[];
    allCasualTasks: NamespaceRegistry<TownshipCasualTask>;
    casualTasksCompleted: number;
    newTaskTimer: Timer;
    get timeToNextTask(): number;
    get availableDailyTasks(): TownshipCasualTask[];
    renderQueue: TownshipCasualTaskRenderQueue;
    _totalTasksReady: number;
    _taskUnlisteners: Map<TownshipCasualTask, VoidFunction>;
    _progressUnlisteners: Map<TownshipCasualTask, VoidFunction>;
    /** If any casual task is ready to be completed */
    get isAnyTaskReady(): boolean;
    constructor(game: Game);
    registerTasks(namespace: DataNamespace, taskData: TownshipCasualTaskData[]): void;
    get gpCostToSkip(): number;
    get xpReward(): number;
    /** Remaps the quantities of casual task currency rewards to scaling values */
    mapCurrencyRewards(currencies: CurrencyQuantity[]): CurrencyQuantity[];
    onLoad(): void;
    setupTaskHandlers(): void;
    addTaskHandler(task: TownshipCasualTask): void;
    onTaskMet(task: TownshipCasualTask, isMet: boolean): void;
    tick(): void;
    render(): void;
    renderTaskTimer(): void;
    renderTasksRemaining(): void;
    renderTasksCompleted(): void;
    renderCurrentTasks(): void;
    renderTasksReady(): void;
    renderTaskGoals(): void;
    assignProgressListeners(): void;
    unassignProgressListeners(): void;
    skipTask(task: TownshipCasualTask): void;
    addTask(task: TownshipCasualTask): void;
    removeTask(task: TownshipCasualTask, wasReady: boolean): void;
    addNewDailyTask(): void;
    isTaskComplete(task: TownshipCasualTask): boolean;
    completeTask(task: TownshipCasualTask): void;
    giveTaskRewards(task: TownshipCasualTask): void;
    startTaskTimer(): void;
    addNewTask(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
declare class TownshipTasksRenderQueue {
    /** Updates the total tasks completed in a realm */
    realmTaskCompletion: Set<Realm>;
    /** Updates the total tasks completed in a category */
    categoryTaskCompletion: Set<TownshipTaskCategory>;
    /** Updates the goals/claim button for a task */
    taskGoals: Set<TownshipTask>;
    /** Updates the task ready icon for a task category */
    taskCategoryReady: Set<TownshipTaskCategory>;
}
declare type TownshipTaskEvents = {
    townshipTaskCompleted: TownshipTaskCompletedEvent;
};
declare class TownshipTasks extends GameEventEmitter<TownshipTaskEvents> {
    game: Game;
    completedTasks: Set<TownshipTask>;
    categories: NamespaceRegistry<TownshipTaskCategory>;
    tasks: NamespaceRegistry<TownshipTask>;
    _totalTasksReady: number;
    _tasksCompleted: number;
    get tasksCompleted(): number;
    _totalTasksPerRealm: SparseNumericMap<Realm>;
    _tasksCompletedPerRealm: SparseNumericMap<Realm>;
    /** The number of different realms that have tasks belonging to them */
    get numberOfTaskRealms(): number;
    /** If any task is ready to be completed */
    get isAnyTaskReady(): boolean;
    renderQueue: TownshipTasksRenderQueue;
    constructor(game: Game);
    registerCategories(namespace: DataNamespace, data: TownshipTaskCategoryData[]): void;
    registerTasks(namespace: DataNamespace, taskData: TownshipTaskData[]): void;
    postDataRegistration(): void;
    /**
     * Initialization function for Township tasks on game load
     */
    onLoad(): void;
    computeTasksCompleted(): void;
    _taskUnlisteners: Map<TownshipTask, VoidFunction>;
    _progressUnlisteners: Map<TownshipTask, VoidFunction>;
    setupTaskHandlers(): void;
    onTaskMet(task: TownshipTask, isMet: boolean): void;
    render(): void;
    renderRealmTaskCompletion(): void;
    renderCategoryTaskCompletion(): void;
    renderTaskGoals(): void;
    renderCategoryReady(): void;
    assignProgressListeners(tasks: TownshipTask[]): void;
    unassignProgressListeners(): void;
    /**
     * Gets the number of tasks that have been completed that belong to a given realm
     * @param realm The realm the tasks belong to
     * @returns The number of tasks completed
     */
    getTasksCompletedInRealm(realm: Realm): number;
    /**
     * Gets the total number of tasks that belong to a given realm
     * @param realm The realm the tasks belong to
     * @returns The total number of tasks
     */
    getNumberOfTasksInRealm(realm: Realm): number;
    /**
     * Function to perform task completion and checks
     * @param task
     */
    completeTask(task: TownshipTask, giveRewards?: boolean, forceComplete?: boolean): void;
    notifyTaskComplete(): void;
    giveTaskRewards(task: TownshipTask | TownshipCasualTask): void;
}
