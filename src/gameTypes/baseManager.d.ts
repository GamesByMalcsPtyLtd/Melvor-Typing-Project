/** Base Class for Combat Managers */
declare abstract class BaseManager extends NamespacedObject implements Serializable, EncodableObject, ActiveAction {
    game: Game;
    abstract media: string;
    abstract activeSkills: AnySkill[];
    abstract name: string;
    abstract player: Player;
    abstract enemy: Enemy;
    /** The Type of combat area the player is currently in */
    abstract areaType: CombatAreaType;
    fightInProgress: boolean;
    spawnTimer: Timer;
    abstract bank: Bank;
    notifications: NotificationQueue;
    allowDuplicateDOTS: boolean;
    isActive: boolean;
    giveFreeDeath: boolean;
    rendersRequired: ManagerRenderQueue;
    shouldResetAction: boolean;
    _dotID: number;
    get dotID(): number;
    abstract readonly isFightingITMBoss: boolean;
    abstract readonly canInteruptAttacks: boolean;
    abstract readonly areaRequirements: AnyRequirement[];
    abstract readonly slayerAreaLevelReq: number;
    abstract readonly playerAreaModifiers: PlayerModifierObject;
    abstract readonly enemyAreaModifiers: CombatModifierData;
    abstract readonly onSlayerTask: boolean;
    /** If the level and requirements of spells should be ignored */
    abstract readonly ignoreSpellRequirements: boolean;
    constructor(game: Game, namespace: DataNamespace, id: string);
    initialize(): void;
    setCallbacks(): void;
    minibarEatCallback(): void;
    minibarRunCallback(): void;
    minibarShowHoldToEat(): void;
    minibarHideHoldToEat(): void;
    abstract activeTick(): void;
    /** Renders combat in current state */
    render(): void;
    getErrorLog(): string;
    abstract renderLocation(): void;
    renderSpellBook(): void;
    /** Checks for player or enemy death */
    checkDeath(): void;
    onPlayerDeath(): void;
    /** Called on enemy death, returns if combat should be stopped as a result */
    onEnemyDeath(): boolean;
    addMonsterStat(statID: MonsterStats, amount?: number): void;
    addCombatStat(statID: CombatStats, amount?: number): void;
    onSelection(): void;
    /** Callback function for running from combat */
    stop(fled?: boolean): boolean;
    loadNextEnemy(): void;
    /** Spawns a new enemy when the spawn timer fires */
    spawnEnemy(): void;
    uniqueUpdatesOnEnemySpawn(): void;
    statUpdateOnEnemySpawn(): void;
    startFight(tickOffset?: boolean): void;
    /** Ends the fight the player is currently in */
    endFight(): void;
    abstract createNewEnemy(): void;
    /** Function to execute on changing to the combat page */
    onCombatPageChange(): void;
    renderAutoSwapFood(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
}
interface ManagerRenderQueue {
    location: boolean;
    pause: boolean;
    slayerAreaEffects: boolean;
    eventMenu: boolean;
    /** Updates all combat/slayer/dungeons requirements */
    areaRequirements: boolean;
    /** Updates the currently open spellbook */
    spellBook: boolean;
}
