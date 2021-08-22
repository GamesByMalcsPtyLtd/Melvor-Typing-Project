/** Interval between combat ticks in ms */
declare const TICK_INTERVAL = 50;
declare class CombatManager extends BaseManager {
    player: Player;
    enemy: Enemy;
    areaData: CombatAreaData | SlayerAreaData | DungeonData;
    dungeonProgress: number;
    selectedMonster: MonsterID;
    private dropWeightCache;
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
    protected tick(): void;
    protected runCombat(): void;
    /** Renders combat in current state */
    protected render(): void;
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
    protected preSelection(): void;
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
    private snapShotOffline;
    private createOfflineModal;
    processOffline(): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame): void;
    /** Puts the manager in a state where offline will progress the amount specified */
    testForOffline(timeToGoBack: number): void;
}
interface OfflineSnapshot {
    gp: number;
    slayercoins: number;
    prayerPoints: number;
    experience: number[];
    levels: number[];
    food: ItemQuantity2;
    quiverItem: ItemQuantity2;
    summon1ID: ItemID;
    summon2ID: ItemID;
    bank: Map<ItemID, number>;
    loot: Map<ItemID, number>;
    monsterKills: number[];
    dungeonCompletion: number[];
    taskCompletions: number[];
    summoningMarks: number[];
}
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
