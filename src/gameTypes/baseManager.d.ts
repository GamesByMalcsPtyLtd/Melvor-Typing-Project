declare type ActiveCombatPassive = {
    /** The combat passive that is active */
    passive: CombatPassive;
    /** If the combat passive should be shown in the menu */
    display: boolean;
    /** If the combt passive should be encoded into the save */
    save: boolean;
};
declare type BaseCombatEvents = {
    endOfFight: EndOfFightEvent;
    startOfFight: StartOfFightEvent;
};
/** Base Class for Combat Managers */
declare abstract class BaseManager extends NamespacedObject implements Serializable, EncodableObject, ActiveAction, INoWildCardGameEventEmitter<BaseCombatEvents> {
    game: Game;
    abstract _events: Pick<Emitter<BaseCombatEvents>, 'emit'>;
    abstract on<Key extends keyof BaseCombatEvents>(type: Key, handler: Handler<BaseCombatEvents[Key]>): void;
    abstract off<Key extends keyof BaseCombatEvents>(type: Key, handler: Handler<BaseCombatEvents[Key]>): void;
    abstract media: string;
    abstract activeSkills: AnySkill[];
    abstract name: string;
    abstract player: Player;
    abstract enemy: Enemy;
    /** Currently selected combat area. undefined if none is selected. */
    selectedArea?: AnyCombatArea;
    /** The Type of combat area the player is currently in */
    get areaType(): CombatAreaType;
    /** The realm of the combat area the player is currently in */
    get areaRealm(): Realm;
    /** If the currently selected combat area belongs to the abyssal realm */
    get inAbyssalArea(): boolean;
    fightInProgress: boolean;
    spawnTimer: Timer;
    abstract bank: Bank;
    abstract itemCharges: ItemCharges;
    abstract potions: PotionManager;
    notifications: NotificationQueue;
    allowDuplicateDOTS: boolean;
    isActive: boolean;
    giveFreeDeath: boolean;
    renderQueue: ManagerRenderQueue;
    shouldResetAction: boolean;
    _dotID: number;
    get dotID(): number;
    abstract readonly isFightingITMBoss: boolean;
    abstract readonly canInteruptAttacks: boolean;
    /** Returns if the player currently meets the requirements to fight in the selected area. If not, all their attacks will miss */
    abstract readonly areaRequirementsMet: boolean;
    /** Stats provided to both the player/enemy in combat */
    readonly statProviders: Set<IStatProvider>;
    /** The CombatPassives that are currently active */
    activeCombatPassives: Map<CombatPassive, ActiveCombatPassive>;
    /** Conditional modifiers that are currently active */
    activeConditionalModifiers: Map<ConditionalModifier, ActiveConditionalModifier>;
    abstract readonly onSlayerTask: boolean;
    /** If the level and requirements of spells should be ignored */
    abstract readonly ignoreSpellRequirements: boolean;
    /** Returns the current combat triangle the player should use */
    abstract readonly combatTriangle: CombatTriangle;
    /** Returns the current combat triangle set the player should use */
    abstract readonly combatTriangleSet: CombatTriangleSet;
    constructor(game: Game, namespace: DataNamespace, id: string);
    /** Flags if the initialize function has not been called on this object */
    firstInit: boolean;
    initialize(): void;
    setButtonVisibility(): void;
    postDataRegistration(): void;
    setCallbacks(): void;
    /**
     * Sets the current combat area, recomputing the area effect as needed
     * @param area The new combat area
     */
    setCombatArea(area: AnyCombatArea | undefined): void;
    /**
     *
     * @param areaEffect The area effect to get the magnitude of
     * @param realm The realm of the area the effect belongs to
     */
    getAreaEffectMagnitude(areaEffect: CombatAreaEffect, realm: Realm): number;
    areaEffectMult: number;
    computeAreaEffects(): void;
    /** Registers a new stat provider for the player/enemy */
    registerStatProvider(provider: IStatProvider): void;
    /** Performs a full stat recalculation of conditional modifiers, followed by player and enemy stats */
    computeAllStats(): void;
    /** Computes an array of active passives that are not encoded in the save */
    computeUnsavedPassives(): ActiveCombatPassive[];
    /** Adjusts the combat passives that are currently applied to the new array */
    adjustPassives(passives: ActiveCombatPassive[]): void;
    addPassiveStats(passive: CombatPassive): void;
    removePassiveStats(passive: CombatPassive): void;
    removeAllPassives(): void;
    /** Computes the conditional modifiers that are currently active */
    computeActiveConditionalModifiers(): void;
    /**
     * Adds conditional modifiers, without adjusting player/enemy stats
     * @param originalSource The object to use as a source for the modifiers
     * @param conditionals The conditional modifiers to add
     * @param negMult A multiplier for conditional modifiers that are negative
     * @param posMult A multiplier for conditional modifiers that are positive
     * @returns The newly created active modifiers, for further processing
     */
    addActiveConditionalModifiers(originalSource: ModifierSource, conditionals: ConditionalModifier[], negMult?: number, posMult?: number): ActiveConditionalModifier[];
    /** Removes all active conditional modifiers */
    resetActiveConditionalModifiers(): void;
    /** Fires when a conditional modifier's condition may have changed */
    onActiveConditionalModifierChange(active: ActiveConditionalModifier, isMet: boolean): void;
    /**
     * Adds the modifiers from an active conditional modifier to the Player/Enemy (does not check if the conditional is active)
     * @param active
     */
    addConditionalModifierStats(active: ActiveConditionalModifier): void;
    /**
     * Removes the modifiers from an active conditional modifier to the Player/Enemy (does not check if the conditional is inactive)
     * @param active
     */
    removeConditionalModifierStats(active: ActiveConditionalModifier): void;
    updateConditionalModifierMult(conditional: ConditionalModifier, mult: number): void;
    updateConditionalModifierMults(conditionals: ConditionalModifier[], mult: number): void;
    /**
     * Adds active conditional modifiers, and their stats to the Player/Enemy (if their condition is met)
     * @param originalSource The object to use as a source for the modifiers
     * @param conditionals The conditional modifiers to add
     * @param negMult A multiplier for conditional modifiers that are negative
     * @param posMult A multiplier for conditional modifiers that are positive
     */
    addAndActivateConditionalModifiers(originalSource: ModifierSource, conditionals: ConditionalModifier[], negMult?: number, posMult?: number): void;
    /**
     * Removes active conditional modifiers, and their stats from the Player/Enemy
     * @param conditionals The conditional modifiers to remove
     */
    removeAndDeactivateConditionalModifiers(conditionals: ConditionalModifier[]): void;
    /** Checks if the given damage type is in use by either the player or enemy */
    isDamageTypeInUse(damageType: DamageType): boolean;
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
    /**
     * Adds a currency sourced from Combat. Applies appropriate modifiers, and handles stat tracking + telemetry
     * @param currency The currency to add
     * @param baseAmount The base amount of the currency to add before modifiers
     * @param source The source of the currency, used in telemetry
     * @param modifier Optional. Additional value to add to the percentage modifiers applied to the base amount
     */
    abstract addCurrency(currency: Currency, baseAmount: number, source: string, modifier?: number): void;
    /** Called after the player queues up an attack action. Returns if combat will be fled from in this case. */
    shouldStopOnPlayerAttack(): boolean;
    onSelection(): void;
    /** Callback function for running from combat */
    stop(fled?: boolean): boolean;
    loadNextEnemy(): void;
    /** Spawns a new enemy when the spawn timer fires */
    spawnEnemy(): void;
    statUpdateOnEnemySpawn(): void;
    startFight(tickOffset?: boolean): void;
    /** Ends the fight the player is currently in */
    endFight(): void;
    abstract createNewEnemy(): void;
    /** Function to execute on changing to the combat page */
    onCombatPageChange(): void;
    renderAutoSwapFood(): void;
    resetActionState(): void;
    encodePassives(writer: SaveWriter): void;
    decodePassives(reader: SaveWriter, version: number): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializePassives(reader: DataReader, version: number, idMap: NumericIDMap): void;
}
declare class ManagerRenderQueue {
    location: boolean;
    pause: boolean;
    slayerAreaEffects: boolean;
    eventMenu: boolean;
    /** Updates all combat/slayer/dungeons requirements */
    areaRequirements: boolean;
    /** Updates the currently open spellbook */
    spellBook: boolean;
    /** Updates dungeon completions remaining for next ancient relic skill unlock */
    areaSkillUnlock: boolean;
    /** Updates the Monster HP & Barrier values after loading depending on gamemode (Specifically for number multiplier) */
    areaMonsterStats: boolean;
    completionCount: Set<Dungeon | Stronghold>;
    petStatus: Set<CombatAreaWithPet>;
    /** Updates the visibility of the corruption menus */
    corruptionMenus: boolean;
    /** Updates the visibility of resistances based on damage type equipped */
    resistanceMenus: boolean;
}
