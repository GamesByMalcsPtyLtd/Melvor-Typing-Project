/** Interval between combat ticks in ms */
declare const TICK_INTERVAL = 50;
declare class CombatManager extends BaseManager {
    player: Player;
    enemy: Enemy;
    areaData: CombatAreaData | SlayerAreaData | DungeonData;
    dungeonProgress: number;
    selectedMonster: MonsterID;
    bank: BankHelper;
    loot: CombatLoot;
    slayerTask: SlayerTask;
    paused: boolean;
    private itmMonsters;
    get isFightingITMBoss(): boolean;
    /** Currently open area menu */
    private openCombatAreaMenu;
    get onSlayerTask(): boolean;
    get canInteruptAttacks(): boolean;
    get areaRequirements(): Requirement[];
    get areaModifiers(): ModifierData;
    /** Management class for combat */
    constructor();
    initialize(): void;
    tick(): void;
    /** Renders combat in current state */
    render(): void;
    private renderPause;
    protected renderLocation(): void;
    /** Renders things that can be unlocked by completing dungeons */
    private renderDungeonCompletion;
    protected onPlayerDeath(): void;
    /** Called on enemy death, returns if combat should be stopped as a result */
    protected onEnemyDeath(): boolean;
    protected rewardForEnemyDeath(): void;
    private dropEnemyLoot;
    private dropSignetHalfB;
    private dropEnemyBones;
    private dropEnemyGP;
    /** Callback function for selecting a monster */
    selectMonster(monsterID: number, areaData: CombatAreaData | SlayerAreaData): void;
    /** Callback function for selecting a dungeon */
    selectDungeon(dungeonID: number): void;
    protected preSelection(): boolean;
    /** Callback function for running from combat */
    stopCombat(fled?: boolean, areaChange?: boolean): void;
    protected loadNextEnemy(): void;
    protected createNewEnemy(): void;
    protected spawnEnemy(): void;
    protected pauseDungeon(): void;
    protected resumeDungeon(): void;
    protected onSelection(): void;
    /** Callback function for opening combat area */
    openAreaMenu(areaType: LocationType): void;
    protected closeAreaMenu(): void;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    resetOfflineTracking(): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame): void;
    private getStatsLog;
    /** Logs player and enemy combat stats to console */
    saveStats(): void;
    compareStatsWithSavedStats(): void;
}
declare type StatsLog = {
    player: {
        stats: NameValuePair[];
        modifiers: NameValuePair[];
    };
    enemy: {
        stats: NameValuePair[];
        modifiers: NameValuePair[];
    };
};
declare class Timer {
    type: TimerTypes;
    private action;
    private _ticksLeft;
    private _maxTicks;
    private active;
    constructor(type: TimerTypes, action: VoidFunction);
    tick(): void;
    start(time: number): void;
    stop(): void;
    get isActive(): boolean;
    get maxTicks(): number;
    get ticksLeft(): number;
    serialize(): number[];
    deserialize(sData: number[], version: number): void;
}
declare type LocationType = 'Combat' | 'Slayer' | 'Dungeon' | 'None';
