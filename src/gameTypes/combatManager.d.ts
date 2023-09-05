declare enum CombatAreaType {
    Combat = 0,
    Slayer = 1,
    Dungeon = 2,
    None = 3
}
/** Interval between combat ticks in ms */
declare const TICK_INTERVAL = 50;
/** Number of ticks contained in a second */
declare const TICKS_PER_SECOND: number;
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
declare type CombatEvents = {
    monsterKilled: MonsterKilledEvent;
    monsterDrop: MonsterDropEvent;
    monsterSpawned: MonsterSpawnedEvent;
    monsterKilledWithEquipment: MonsterKilledWithEquipmentEvent;
    monsterKilledWithPlayerRequirements: MonsterKilledWithPlayerRequirementsEvent;
    dungeonCompleted: DungeonCompletedEvent;
};
declare class CombatManager extends BaseManager implements PassiveAction, IGameEventEmitter<CombatEvents> {
    _events: import("mitt").Emitter<CombatEvents>;
    on: {
        <Key extends keyof CombatEvents>(type: Key, handler: import("mitt").Handler<CombatEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<CombatEvents>): void;
    };
    off: {
        <Key extends keyof CombatEvents>(type: Key, handler?: import("mitt").Handler<CombatEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<CombatEvents>): void;
    };
    player: Player;
    enemy: Enemy;
    get media(): string;
    get name(): string;
    get activeSkills(): AnySkill[];
    get canStop(): boolean;
    /** Currently selected combat area. undefined if none is selected. */
    selectedArea?: CombatArea | SlayerArea | Dungeon;
    get areaType(): CombatAreaType;
    /** Stores the number of times a dungeon has been completed */
    dungeonCompletion: Map<Dungeon, number>;
    dungeonProgress: number;
    /** Currently selected monster. undefined if none is selected. */
    selectedMonster?: Monster;
    bank: Bank;
    loot: CombatLoot;
    slayerTask: SlayerTask;
    paused: boolean;
    /** Combat event progress */
    activeEvent?: CombatEvent;
    /** If event state should be reset after loading save */
    shouldResetEvent: boolean;
    get isEventActive(): boolean;
    eventProgress: number;
    eventPassives: CombatPassive[];
    availableEventPassives: CombatPassive[];
    eventPassivesBeingSelected: Set<CombatPassive>;
    eventDungeonLength: number;
    activeEventAreas: Map<SlayerArea, number>;
    itmMonsters: Monster[];
    spiderLairMonsters: Monster[];
    get isFightingITMBoss(): boolean;
    /** Currently open area menu */
    openCombatAreaMenu: 'None' | 'Combat' | 'Slayer' | 'Dungeon';
    get onSlayerTask(): boolean;
    get ignoreSpellRequirements(): boolean;
    get canInteruptAttacks(): boolean;
    get areaRequirements(): AnyRequirement[];
    get slayerAreaLevelReq(): number;
    get enemyAreaModifiers(): CombatModifierData;
    /** Recomputes the modifiers currently provided by the selected area to the player */
    computePlayerAreaModifiers(updatePlayer?: boolean): void;
    addDungeonCompletion(dungeon: Dungeon): void;
    getDungeonCompleteCount(dungeon: Dungeon): number;
    getDungeonCompletionsRemainingForSkillUnlock(dungeon: Dungeon): number;
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
    renderPause(): void;
    renderLocation(): void;
    renderSlayerAreaEffects(): void;
    renderEventMenu(): void;
    renderAreaRequirements(): void;
    renderDungeonRelicCount(): void;
    onPlayerDeath(): void;
    /** Called on enemy death, returns if combat should be stopped as a result */
    onEnemyDeath(): boolean;
    awardSkillLevelCapIncreaseForDungeonCompletion(dungeon: Dungeon): void;
    /** Checks to add one time rewards from dungeon completion that were added after completion */
    retroactivelyAddOneTimeRewards(): void;
    rewardForEnemyDeath(monster: Monster): void;
    dropEnemyLoot(monster: Monster): void;
    dropSignetHalfB(monster: Monster): void;
    dropBirthdayPresent(): void;
    dropEnemyBones(monster: Monster): void;
    dropEnemyGP(monster: Monster): void;
    /** Callback function for starting event */
    startEvent(event: CombatEvent): void;
    computeAvailableEventPassives(event: CombatEvent): void;
    fireEventStageCompletionModal(event: CombatEvent): void;
    fireEventPassiveModal(): void;
    showEventPassivesModal(): void;
    showStartEventModal(event: CombatEvent): void;
    showStopEventModal(): void;
    onPassiveSelection(passive: CombatPassive): void;
    removeAvailablePassive(passive: CombatPassive): void;
    increaseEventProgress(event: CombatEvent): void;
    stopEvent(): void;
    renderEventAreas(): void;
    checkAreaEntryRequirements(area: AnyCombatArea): boolean;
    /** Callback function for selecting a monster */
    selectMonster(monster: Monster, area: CombatArea | SlayerArea): void;
    /** Callback function for selecting a dungeon */
    selectDungeon(dungeon: Dungeon): void;
    /** Callback function for selecting an event area */
    selectEventArea(area: SlayerArea): void;
    preSelection(): boolean;
    /** Callback function for running from combat */
    stop(fled?: boolean, areaChange?: boolean): boolean;
    loadNextEnemy(): void;
    createNewEnemy(): void;
    statUpdateOnEnemySpawn(): void;
    onPageChange(): void;
    renderModifierChange(): void;
    spawnEnemy(): void;
    pauseDungeon(): void;
    resumeDungeon(): void;
    onSelection(): void;
    /** Callback function for opening combat area */
    openAreaMenu(areaType: 'Combat' | 'Slayer' | 'Dungeon'): void;
    /** Closes the currently open combat area menu */
    closeAreaMenu(): void;
    resetActionState(): void;
    resetEventState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    resetOfflineTracking(): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame, idMap: NumericIDMap): void;
    convertDungeonCompletion(dungeonCompletion: number[], idMap: NumericIDMap): void;
    getStatsLog(): StatsLog;
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
    action: VoidFunction;
    _ticksLeft: number;
    _maxTicks: number;
    active: boolean;
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
