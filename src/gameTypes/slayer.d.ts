declare type SlayerTaskData = {
    /** Display name of task difficulty */
    display: string;
    /** Cost to reroll/change to task */
    cost: number;
    /** Minimum combat level of monster for task */
    minLevel: number;
    /** Maximum combat level of monster for task (-1 is uncapped (6969 lol)) */
    maxLevel: number;
    /** Slayer level required to recieve task */
    slayerLevel: number;
};
declare class SlayerTask {
    private player;
    /** Task is active */
    active: boolean;
    /** Monsters for task */
    monster: Monster;
    /** Kills left on task */
    killsLeft: number;
    /** Task was extended */
    extended: boolean;
    /** Tier of slayer task */
    tier: SlayerTier;
    /** Slayer task completion stats */
    completion: number[];
    /** Autoslayer option is on */
    get autoSlayer(): boolean;
    private newOpen;
    private taskContainer;
    private extendContainer;
    private selectContainer;
    private imageElem;
    private levelElem;
    private tierElem;
    private nameElem;
    private jumpButton;
    private extendMessage;
    private extendButton;
    private extendCost;
    private newButton;
    private newButtonText;
    private spinner;
    private locating;
    private selectButtons;
    private taskTimer;
    private autoStartNext;
    renderRequired: boolean;
    renderNewButton: boolean;
    private renderShop;
    constructor(player: Player);
    render(): void;
    private renderTask;
    private renderButtonSpinner;
    extendTask(): void;
    addKill(): void;
    updateButtons(): void;
    tick(): void;
    private getExtensionCost;
    private selectTask;
    private getTaskLength;
    private setTask;
    /** Returns the monsters available at a slayer tier */
    private getMonsterSelection;
    private clickNewTask;
    /** Checks the requirements of an area */
    private checkRequirements;
    private createSelectionMenu;
    private createSelectButton;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    convertFromOldSaveFormat(oldTasks: OldSlayerTask[], oldCompletion: number[]): void;
    static data: SlayerTaskData[];
}
