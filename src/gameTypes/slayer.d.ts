declare type SlayerTaskData = {
    /** Display name of task difficulty */
    display: string;
    /** English display name of task difficulty */
    engDisplay: string;
    /** Cost to reroll/change to task */
    cost: number;
    /** Minimum combat level of monster for task */
    minLevel: number;
    /** Maximum combat level of monster for task (-1 is uncapped (6969 lol)) */
    maxLevel: number;
    /** Slayer level required to receive task */
    slayerLevel: number;
};
declare class SlayerTask implements Serializable, EncodableObject {
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
    /** Tier of slayer task */
    tier: SlayerTierID;
    /** Slayer task completion stats */
    completion: number[];
    /** Autoslayer option is on */
    get autoSlayer(): boolean;
    taskTimer: Timer;
    autoStartNext: boolean;
    renderRequired: boolean;
    renderNewButton: boolean;
    areaBypassItems: EquipmentItem[];
    allAreaBypassItems: EquipmentItem[];
    shouldResetTaskState: boolean;
    constructor(player: Player, game: Game);
    postDataRegistration(): void;
    render(): void;
    /** Callback function for when the jump to task button is clicked */
    jumpToTaskOnClick(): void;
    renderTask(): void;
    renderButtonSpinner(): void;
    extendTask(): void;
    addKill(): void;
    tick(): void;
    getExtensionCost(): number;
    selectTask(tier: number, costsCoins: boolean, render: boolean, fromClick?: boolean): void;
    getTaskLength(tier: number): number;
    setTask(): void;
    /** Returns the monsters available at a slayer tier */
    getMonsterSelection(tier: number): Monster[];
    /** Callback function for when the new task button is clicked */
    clickNewTask(): void;
    /** Checks the requirements of an area */
    checkRequirements(requirements: AnyRequirement[], softReq: boolean, slayerLevelReq: number): boolean;
    getTaskCompletionsForTierAndAbove(tier: number): number;
    resetTaskState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldSaveFormat(oldTasks: OldSlayerTask[], oldCompletion: number[], idMap: NumericIDMap): void;
    static data: SlayerTaskData[];
}
declare class SlayerTaskMenuElement extends HTMLElement {
    _content: DocumentFragment;
    slayerIcon: HTMLImageElement;
    newTaskSpinner: HTMLDivElement;
    newTaskButton: HTMLAnchorElement;
    newTaskButtonText: HTMLElement;
    selectTaskContainer: HTMLDivElement;
    locatingContent: HTMLDivElement;
    monsterContainer: HTMLDivElement;
    monsterImage: HTMLImageElement;
    monsterLevel: HTMLSpanElement;
    taskTier: HTMLElement;
    monsterName: HTMLDivElement;
    jumpToEnemyButton: HTMLButtonElement;
    extendContainer: HTMLHeadingElement;
    extendMessage: HTMLElement;
    extendTaskButton: HTMLAnchorElement;
    extendTaskCost: HTMLElement;
    autoSlayerCheckBox: SettingsCheckboxElement;
    selectTaskButtons: HTMLButtonElement[];
    taskSelectionOpen: boolean;
    slayerIconTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(game: Game): void;
    setNoTask(): void;
    setTaskMonster(monster: Monster, killsLeft: number, tier: number): void;
    updateTaskExtension(isExtended: boolean, extensionCost: number): void;
    openTaskSelection(): void;
    closeTaskSelection(): void;
    updateTaskSelectButtons(game: Game): void;
    updateTaskSpinner(isSelecting: boolean): void;
    toggleAutoSlayerCheckbox(unlocked: boolean): void;
}
