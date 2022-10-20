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
    private player;
    private game;
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
    private taskTimer;
    private autoStartNext;
    renderRequired: boolean;
    renderNewButton: boolean;
    private areaBypassItems;
    private allAreaBypassItems;
    private shouldResetTaskState;
    constructor(player: Player, game: Game);
    postDataRegistration(): void;
    render(): void;
    /** Callback function for when the jump to task button is clicked */
    jumpToTaskOnClick(): void;
    private renderTask;
    private renderButtonSpinner;
    extendTask(): void;
    addKill(): void;
    tick(): void;
    private getExtensionCost;
    selectTask(tier: number, costsCoins: boolean, render: boolean, fromClick?: boolean): void;
    private getTaskLength;
    private setTask;
    /** Returns the monsters available at a slayer tier */
    private getMonsterSelection;
    /** Callback function for when the new task button is clicked */
    clickNewTask(): void;
    /** Checks the requirements of an area */
    private checkRequirements;
    getTaskCompletionsForTierAndAbove(tier: number): number;
    private resetTaskState;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldSaveFormat(oldTasks: OldSlayerTask[], oldCompletion: number[], idMap: NumericIDMap): void;
    static data: SlayerTaskData[];
}
declare class SlayerTaskMenuElement extends HTMLElement {
    private _content;
    private slayerIcon;
    private newTaskSpinner;
    private newTaskButton;
    private newTaskButtonText;
    private selectTaskContainer;
    private locatingContent;
    private monsterContainer;
    private monsterImage;
    private monsterLevel;
    private taskTier;
    private monsterName;
    private jumpToEnemyButton;
    private extendContainer;
    private extendMessage;
    private extendTaskButton;
    private extendTaskCost;
    private autoSlayerCheckBox;
    private selectTaskButtons;
    taskSelectionOpen: boolean;
    private slayerIconTooltip?;
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
