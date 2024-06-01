interface CombatLevelSlayerTaskMonsterSelection {
    type: 'CombatLevel';
    /** The minimum monster combat level to select from */
    minLevel: number;
    /** Optional. The maximum combat level to select from. If unset, combat level is uncapped */
    maxLevel?: number;
}
interface AbyssSlayerTaskMonsterSelectionData {
    type: 'Abyss';
    /** The ID of the Abyss area to select monsters from */
    areaID: string;
}
interface AbyssSlayerTaskMonsterSelection {
    type: 'Abyss';
    /** The Abyss area to select monsters from */
    area: AbyssDepth;
}
declare type AnySlayerTaskMonsterSelectionData = CombatLevelSlayerTaskMonsterSelection | AbyssSlayerTaskMonsterSelectionData;
declare type AnySlayerTaskMonsterSelection = CombatLevelSlayerTaskMonsterSelection | AbyssSlayerTaskMonsterSelection;
interface SlayerTaskCategoryData extends RealmedObjectData {
    /** The display name of the category */
    name: string;
    /** The error message displayed when attempting to perform an action that requires task completions in this category */
    reqToast: string;
    /** The requires text to display for requirements that require task completions in this category */
    reqText: string;
    /** The unlock text to display for requirements that require task completions in this category */
    unlockText: string;
    /** The text to display in the offline modal for completing a task in this category */
    completionText: string;
    /** The currency costs to reroll/change to a task in this category */
    rollCost: IDQuantity[];
    /** The currency costs to extend a task in this category */
    extensionCost: IDQuantity[];
    /** Multiplier to the number of monsters given on task extension */
    extensionMultiplier: number;
    /** The Slayer level required to recieve tasks from this category */
    level: number;
    /** Optional. The Abyssal Slayer level required to recieve tasks from this category. Also determines if tasks completed in this category should give abyssal XP */
    abyssalLevel?: number;
    /** Defines the currencies awarded upon killing a monster from this category. */
    currencyRewards: {
        /** The ID of the currency */
        id: string;
        /** The percent of the enemies max hitpoints (in Standard Game mode) to award */
        percent: number;
    }[];
    /** Determines the monsters that can be selected for this category */
    monsterSelection: AnySlayerTaskMonsterSelectionData;
    /** Determines the base quantity of monsters that must be killed in a task */
    baseTaskLength: number;
    /** Optional. The ID of the category previous to this one. Used to count the number of tasks completions for this category and below. */
    previousCategory?: string;
}
declare class SlayerTaskCategory extends RealmedObject {
    get name(): string;
    get reqToast(): string;
    get reqText(): string;
    get unlockText(): string;
    get completionText(): string;
    rollCost: CurrencyQuantity[];
    extensionCost: CurrencyQuantity[];
    extensionMultiplier: number;
    level: number;
    abyssalLevel: number;
    currencyRewards: {
        currency: Currency;
        percent: number;
    }[];
    monsterSelection: AnySlayerTaskMonsterSelection;
    baseTaskLength: number;
    previousCategory?: SlayerTaskCategory;
    nextCategory?: SlayerTaskCategory;
    /** The number of times a task in this category has been completed */
    tasksCompleted: number;
    /** Unlocalized display name */
    _name: string;
    _reqToast: string;
    _reqText: string;
    _unlockText: string;
    _completionText: string;
    constructor(namespace: DataNamespace, data: SlayerTaskCategoryData, game: Game);
    /** Gets a filtering function for the monster selection of this category */
    getMonsterFilter(): (m: Monster) => boolean;
}
declare class SlayerTaskRenderQueue {
    task: boolean;
    newButton: boolean;
    realmSelect: boolean;
}
declare class SlayerTaskCompletedEvent extends GameEvent {
    category: SlayerTaskCategory;
    oldCount: number;
    newCount: number;
    constructor(category: SlayerTaskCategory, oldCount: number, newCount: number);
}
declare type SlayerTaskEvents = {
    taskCompleted: SlayerTaskCompletedEvent;
};
declare class SlayerTask extends GameEventEmitter<SlayerTaskEvents> implements Serializable, EncodableObject {
    player: Player;
    game: Game;
    /** Task is active */
    active: boolean;
    /** Monsters for task */
    monster?: Monster;
    /** Kills left on task */
    killsLeft: number;
    /** Task was extended */
    extended: boolean;
    /** Selected realm for slayer tasks */
    realm: Realm;
    /** The currently selected task category */
    category?: SlayerTaskCategory;
    /** Autoslayer option is on */
    get autoSlayer(): boolean;
    /** If the current task is an abyssal one */
    get isAbyssal(): boolean;
    taskTimer: Timer;
    autoStartNext: boolean;
    renderQueue: SlayerTaskRenderQueue;
    areaBypassItems: EquipmentItem[];
    allAreaBypassItems: EquipmentItem[];
    shouldResetTaskState: boolean;
    /** Registry of task categories */
    categories: NamespaceRegistry<SlayerTaskCategory>;
    categoryRealms: Realm[];
    constructor(player: Player, game: Game);
    postDataRegistration(): void;
    render(): void;
    /** Callback function for when the jump to task button is clicked */
    jumpToTaskOnClick(): void;
    renderTask(): void;
    renderButtonSpinner(): void;
    renderRealmSelect(): void;
    extendTask(): void;
    addKill(): void;
    tick(): void;
    getRollCosts(category: SlayerTaskCategory): Costs;
    getExtensionCosts(category: SlayerTaskCategory): Costs;
    selectTask(category: SlayerTaskCategory, costsCurrency: boolean, render: boolean, fromClick?: boolean): void;
    getTaskLength(category: SlayerTaskCategory): number;
    setTask(): void;
    /** Returns the monsters available at a slayer tier */
    getMonsterSelection(category: SlayerTaskCategory): Monster[];
    /** Callback function for when the new task button is clicked */
    clickNewTask(): void;
    changeSelectedRealm(realm: Realm): void;
    /** Checks the requirements of an area */
    checkRequirements(requirements: AnyRequirement[], softReq: boolean, slayerLevelReq: number): boolean;
    getTaskCompletionsForTierAndAbove(category?: SlayerTaskCategory): number;
    /** Returns the total number of tasks completed in all categories */
    getTotalTasksCompleted(): number;
    getTaskCompletionSnapshot(): Map<SlayerTaskCategory, number>;
    resetTaskState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldSaveFormat(oldTasks: OldSlayerTask[], oldCompletion: number[], idMap: NumericIDMap): void;
    /** Sets the category property and tasksCompleted properties from pre v100 saves */
    setCategoriesFromOldData(tier: number, completion: number[]): void;
    static TIER_CATEGORY_MAP: Record<number, SlayerTaskCategoryIDs>;
}
declare class SlayerTaskMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    slayerIcon: HTMLImageElement;
    newTaskSpinner: HTMLDivElement;
    newTaskButton: HTMLAnchorElement;
    newTaskButtonText: HTMLElement;
    selectTaskContainer: HTMLDivElement;
    selectRealmContainer: HTMLDivElement;
    locatingContent: HTMLDivElement;
    monsterContainer: HTMLDivElement;
    monsterImage: HTMLImageElement;
    monsterLevel: HTMLSpanElement;
    monsterAttackType: HTMLImageElement;
    taskTier: HTMLElement;
    monsterName: HTMLDivElement;
    jumpToEnemyButton: HTMLButtonElement;
    extendContainer: HTMLHeadingElement;
    extendMessage: HTMLElement;
    extendTaskButton: HTMLAnchorElement;
    extendTaskCost: HTMLElement;
    autoSlayerCheckBox: SettingsCheckboxElement;
    selectTaskButtons: Map<SlayerTaskCategory, HTMLButtonElement>;
    selectRealmButtons: Map<Realm, HTMLButtonElement>;
    taskSelectionOpen: boolean;
    slayerIconTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(game: Game): void;
    setNoTask(): void;
    setTaskMonster(monster: Monster, killsLeft: number, category: SlayerTaskCategory): void;
    updateTaskExtension(isExtended: boolean, costs: Costs): void;
    openTaskSelection(): void;
    closeTaskSelection(): void;
    updateTaskSelectButtons(game: Game): void;
    updateTaskSpinner(isSelecting: boolean): void;
    toggleAutoSlayerCheckbox(unlocked: boolean): void;
    /** Changes the task categories to only show those from the given realm */
    setRealm(realm: Realm): void;
    updateRealmButtons(task: SlayerTask): void;
}
