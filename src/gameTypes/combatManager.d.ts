declare enum CombatAreaType {
    Combat = 0,
    Slayer = 1,
    Dungeon = 2,
    None = 3,
    AbyssDepth = 4,
    Stronghold = 5
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
    boneDrop: BoneDropEvent;
    monsterSpawned: MonsterSpawnedEvent;
    dungeonCompleted: DungeonCompletedEvent;
    abyssDepthCompleted: AbyssDepthCompletedEvent;
    strongholdCompleted: StrongholdCompletedEvent;
} & BaseCombatEvents;
declare class CombatManager extends BaseManager implements PassiveAction, IGameEventEmitter<CombatEvents> {
    _events: import("mitt").Emitter<CombatEvents>;
    on: {
        <Key extends keyof BaseCombatEvents | "monsterKilled" | "monsterDrop" | "boneDrop" | "monsterSpawned" | "dungeonCompleted" | "abyssDepthCompleted" | "strongholdCompleted">(type: Key, handler: import("mitt").Handler<CombatEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<CombatEvents>): void;
    };
    off: {
        <Key extends keyof BaseCombatEvents | "monsterKilled" | "monsterDrop" | "boneDrop" | "monsterSpawned" | "dungeonCompleted" | "abyssDepthCompleted" | "strongholdCompleted">(type: Key, handler?: import("mitt").Handler<CombatEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<CombatEvents>): void;
    };
    player: Player;
    enemy: Enemy;
    get media(): string;
    get name(): string;
    get activeSkills(): AnySkill[];
    get canStop(): boolean;
    get areaRealm(): Realm;
    get inAbyssalArea(): boolean;
    get combatTriangle(): CombatTriangle;
    get combatTriangleSet(): CombatTriangleSet;
    /** Stores the number of times a dungeon has been completed */
    dungeonCompletion: Map<Dungeon, number>;
    /** Stores the current progress the player has made in a combat area */
    areaProgress: number;
    /** Currently selected monster. undefined if none is selected. */
    selectedMonster?: Monster;
    /** The current tier of stronghold the player is fighting in. */
    strongholdTier: StrongholdTierName;
    bank: Bank;
    itemCharges: ItemCharges;
    potions: PotionManager;
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
    get onSlayerTask(): boolean;
    get ignoreSpellRequirements(): boolean;
    get canInteruptAttacks(): boolean;
    get areaRequirementsMet(): boolean;
    addDungeonCompletion(dungeon: Dungeon): void;
    getDungeonCompleteCount(dungeon: Dungeon): number;
    getDungeonCompletionSnapshot(): Map<Dungeon, number>;
    setDungeonCompleteCount(dungeon: Dungeon, count: number): void;
    getMonsterDropsHTML(monster: Monster, respectArea: boolean): string;
    getAreaEffectMagnitude(areaEffect: CombatAreaEffect, realm: Realm): number;
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
    renderCompletionCount(): void;
    renderPetStatus(): void;
    renderResistanceMenus(): void;
    updateResistanceMenuVisibility(damageType: DamageType): void;
    renderCorruptionMenus(): void;
    renderAreaSkillUnlockCounts(): void;
    onPlayerDeath(): void;
    /** Called on enemy death, returns if combat should be stopped as a result */
    onEnemyDeath(): boolean;
    /** Checks to add one time rewards from dungeon completion that were added after completion */
    retroactivelyAddOneTimeRewards(): void;
    rewardForEnemyDeath(monster: Monster, area: AnyCombatArea): void;
    /** Gets the chance to double loot against a certain monster */
    getLootDoublingChance(monster: Monster): number;
    dropEnemyLoot(monster: Monster): void;
    dropBarrierDust(monster: Monster): void;
    dropSignetHalfB(monster: Monster): void;
    dropBirthdayPresent(): void;
    dropEnemyBones(monster: Monster): void;
    /** Rolls for each currency that a monster can drop, and rewards it to the player */
    dropEnemyCurrency(monster: Monster): void;
    /** Stores debouncing for gp telemetry events */
    gpTelemetryDebouncing: Map<string, {
        timeoutID: number;
        quantity: number;
    }>;
    /** Stores debouncing for ap telemetry events */
    apTelemetryDebouncing: Map<string, {
        timeoutID: number;
        quantity: number;
    }>;
    /** The interval between GP Telemetry events */
    readonly GP_TELEMETRY_DEBOUNCE_INTERVAL = 500;
    /** Gets the base currency modifier to apply to all gains */
    getCurrencyModifier(currency: Currency): number;
    addCurrency(currency: Currency, baseAmount: number, source: string, modifier?: number): void;
    /** Gives currency rewards for killing a slayer task monster */
    rewardSlayerTaskCurrency(category: SlayerTaskCategory): void;
    /** Temporary flag that prevents the next dungeon/abyss depth from automatically restarting */
    preventAutoRestart: boolean;
    /**
     * Increments the progress through a Dungeon by 1
     * @param dungeon The dungeon to progress through
     * @param monster The monster that was killed
     * @returns If combat should be stopped as a result
     */
    increaseDungeonProgress(dungeon: Dungeon, monster: Monster): boolean;
    /** Increases the progress through The Abyss by 1 */
    increaseAbyssProgress(depth: AbyssDepth, monster: Monster): boolean;
    /** Increases the progress through a Stronghold by 1 */
    increaseStrongholdProgress(stronghold: Stronghold, monster: Monster): boolean;
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
    checkDamageTypeRequirementsForMonster(monster: Monster, notify?: boolean): boolean;
    isCurrentDamageTypeDisallowed(area: AnyCombatArea, notify?: boolean): boolean;
    /** Callback function for selecting a monster */
    selectMonster(monster: Monster, area: CombatArea | SlayerArea): void;
    /** Callback function for selecting a dungeon */
    selectDungeon(dungeon: Dungeon): void;
    /** Callback function for selecting a dungeon */
    selectAbyssDepth(depth: AbyssDepth): void;
    /** Returns if the player currently meets the requirements to fight a stronghold at the given tier */
    canFightInStrongholdTier(stronghold: Stronghold, tier: StrongholdTierName): boolean;
    /** Callback function for selecting a stronghold */
    selectStronghold(stronghold: Stronghold, tier: StrongholdTierName): void;
    /** Callback function for selecting an event area */
    selectEventArea(area: SlayerArea): void;
    preSelection(): boolean;
    /** Callback function for running from combat */
    stop(fled?: boolean, areaChange?: boolean): boolean;
    loadNextEnemy(): void;
    createNewEnemy(): void;
    getPassivesForMonster(monster: Monster, area?: CombatArea): ActiveCombatPassive[];
    computeUnsavedPassives(): ActiveCombatPassive[];
    computePassivesForEnemy(monster: Monster): ActiveCombatPassive[];
    /**
     * Applies permanent coruption to an enemy when they spawn
     * @param monster The monster to attempt to apply perma-corruption to
     */
    applyAutoCorruption(monster: Monster, passives: ActiveCombatPassive[]): void;
    /** Gets the amount of soul points it costs to permanently corrupt a monster */
    getAutoCorruptionCost(monster: Monster): number;
    onPageChange(): void;
    renderModifierChange(): void;
    spawnEnemy(): void;
    pauseDungeon(): void;
    resumeDungeon(): void;
    onSelection(): void;
    resetActionState(): void;
    resetEventState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    resetOfflineTracking(): void;
    /** Sets properties based on the old save file variables */
    convertFromOldSaveFormat(saveGame: NewSaveGame, idMap: NumericIDMap): void;
    convertDungeonCompletion(dungeonCompletion: number[], idMap: NumericIDMap): void;
    enableStatParityCheck: boolean;
    getCombatStatsLog(): CombatStatsLog;
    /** Logs player and enemy combat stats to console */
    saveStats(): void;
    getSavedStats(): CombatStatsLog | null;
    compareSavedStats(): void;
    compareCombatStatLogs(oldStats: CombatStatsLog): boolean;
    testInitializationStatParity(): void;
}
declare type CombatStatsLog = {
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
    get progress(): number;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(sData: number[], version: number): void;
    static skipData(reader: SaveWriter, version: number): void;
}
