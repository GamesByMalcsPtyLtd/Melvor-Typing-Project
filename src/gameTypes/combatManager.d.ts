declare enum CombatAreaType {
    Combat = 0,
    Slayer = 1,
    Dungeon = 2,
    None = 3
}
/** Interval between combat ticks in ms */
declare const TICK_INTERVAL = 50;
/** Number of ticks contained in a minute */
declare const TICKS_PER_MINUTE: number;
interface CombatEventData extends IDData {
    itemRewardIDs: string[];
    petID: string;
    slayerAreaIDs: string[];
    passiveSelectionIDs: string[];
    enemyPassives: string[];
    bossPassives: string[];
    firstBossMonster: string;
    finalBossMonster: string;
}
declare class CombatEvent extends NamespacedObject {
    /** Item rewards given for each event stage */
    itemRewards: AnyItem[];
    /** Pet rewarded on completion of event */
    pet: Pet;
    /** Slayer areas which the player must clear to complete an event stage */
    slayerAreas: SlayerArea[];
    /** Passives which the player must randomly select before each event stage */
    passiveSelection: CombatPassive[];
    /** Passives given to all non first/final boss monsters */
    enemyPassives: CombatPassive[];
    /** Passives given to the "Boss" monsters of the slayer areas */
    bossPassives: CombatPassive[];
    /** Boss monster fought for all stages except the final one */
    firstBossMonster: Monster;
    /** Boss monster fought for the final stage */
    finalBossMonster: Monster;
    constructor(namespace: DataNamespace, data: CombatEventData, game: Game);
}
declare class CombatManager extends BaseManager implements PassiveAction {
    player: Player;
    enemy: Enemy;
    get media(): string;
    get name(): string;
    get activeSkills(): AnySkill[];
    /** Currently selected combat area. undefined if none is selected. */
    selectedArea?: CombatArea | SlayerArea | Dungeon;
    get areaType(): CombatAreaType;
    /** Stores the number of times a dungeon has been completed */
    private dungeonCompletion;
    dungeonProgress: number;
    /** Currently selected monster. undefined if none is selected. */
    selectedMonster?: Monster;
    bank: Bank;
    loot: CombatLoot;
    slayerTask: SlayerTask;
    paused: boolean;
    /** Combat event progress */
    private activeEvent?;
    /** If event state should be reset after loading save */
    private shouldResetEvent;
    get isEventActive(): boolean;
    eventProgress: number;
    private eventPassives;
    private availableEventPassives;
    private eventPassivesBeingSelected;
    private eventDungeonLength;
    activeEventAreas: Map<SlayerArea, number>;
    private itmMonsters;
    spiderLairMonsters: Monster[];
    get isFightingITMBoss(): boolean;
    /** Currently open area menu */
    private openCombatAreaMenu;
    get onSlayerTask(): boolean;
    get ignoreSpellRequirements(): boolean;
    get canInteruptAttacks(): boolean;
    get areaRequirements(): AnyRequirement[];
    get slayerAreaLevelReq(): number;
    get playerAreaModifiers(): PlayerModifierObject;
    get enemyAreaModifiers(): CombatModifierData;
    private addDungeonCompletion;
    getDungeonCompleteCount(dungeon: Dungeon): number;
    getDungeonCompletionSnapshot(): Map<Dungeon, number>;
    setDungeonCompleteCount(dungeon: Dungeon, count: number): void;
    getMonsterDropsHTML(monster: Monster, respectArea: boolean): string;
    getAreaEffectMagnitude(areaEffect: AreaEffect): number;
    get atLastEventDungeon(): boolean;
    /** Management class for combat */
    constructor(game: Game, namespace: DataNamespace);
    initialize(): void;
    postDataRegistration(): void;
    passiveTick(): void;
    activeTick(): void;
    getErrorLog(): string;
    /** Renders combat in current state */
    render(): void;
    private renderPause;
    protected renderLocation(): void;
    private renderSlayerAreaEffects;
    private renderEventMenu;
    private renderAreaRequirements;
    protected onPlayerDeath(): void;
    /** Called on enemy death, returns if combat should be stopped as a result */
    protected onEnemyDeath(): boolean;
    /** Checks to add one time rewards from dungeon completion that were added after completion */
    retroactivelyAddOneTimeRewards(): void;
    protected rewardForEnemyDeath(monster: Monster): void;
    private dropEnemyLoot;
    private dropSignetHalfB;
    private dropEnemyBones;
    private dropEnemyGP;
    /** Callback function for starting event */
    startEvent(event: CombatEvent): void;
    private computeAvailableEventPassives;
    private fireEventStageCompletionModal;
    private fireEventPassiveModal;
    showEventPassivesModal(): void;
    showStartEventModal(event: CombatEvent): void;
    showStopEventModal(): void;
    private onPassiveSelection;
    private removeAvailablePassive;
    private increaseEventProgress;
    stopEvent(): void;
    private renderEventAreas;
    /** Callback function for selecting a monster */
    selectMonster(monster: Monster, areaData: CombatArea | SlayerArea): void;
    /** Callback function for selecting a dungeon */
    selectDungeon(dungeon: Dungeon): void;
    /** Callback function for selecting an event area */
    selectEventArea(areaData: SlayerArea): void;
    protected preSelection(): boolean;
    /** Callback function for running from combat */
    stop(fled?: boolean, areaChange?: boolean): boolean;
    protected loadNextEnemy(): void;
    protected createNewEnemy(): void;
    protected spawnEnemy(): void;
    protected pauseDungeon(): void;
    protected resumeDungeon(): void;
    protected onSelection(): void;
    /** Callback function for opening combat area */
    openAreaMenu(areaType: CombatAreaType): void;
    protected closeAreaMenu(): void;
    protected resetActionState(): void;
    private resetEventState;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    resetOfflineTracking(): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame, idMap: NumericIDMap): void;
    convertDungeonCompletion(dungeonCompletion: number[], idMap: NumericIDMap): void;
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
declare class Timer implements EncodableObject {
    type: TimerTypes;
    private action;
    private _ticksLeft;
    private _maxTicks;
    private active;
    constructor(type: TimerTypes, action: VoidFunction);
    tick(): void;
    start(time: number, offsetByTick?: boolean): void;
    stop(): void;
    get isActive(): boolean;
    get maxTicks(): number;
    get ticksLeft(): number;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(sData: number[], version: number): void;
}
