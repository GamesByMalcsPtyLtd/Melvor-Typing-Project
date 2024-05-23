declare class Enemy extends Character implements IGameEventEmitter<CharacterCombatEvents> {
    manager: BaseManager;
    game: Game;
    _events: import("mitt").Emitter<CharacterCombatEvents>;
    on: {
        <Key extends keyof CharacterCombatEvents>(type: Key, handler: import("mitt").Handler<CharacterCombatEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<CharacterCombatEvents>): void;
    };
    off: {
        <Key extends keyof CharacterCombatEvents>(type: Key, handler?: import("mitt").Handler<CharacterCombatEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<CharacterCombatEvents>): void;
    };
    get type(): string;
    state: EnemyState;
    modifiers: CharacterModifierTable;
    spellSelection: SpellSelection;
    stats: CharacterCombatStats;
    get statElements(): EnemyRenderHTMLElements;
    get splashManager(): SplashManager;
    get effectRenderer(): EffectRenderer;
    get attackBar(): ProgressBarElement;
    get attackBarMinibar(): ProgressBarElement;
    renderQueue: EnemyRenderQueue;
    randomAttackType: AttackType | 'unset';
    monster?: Monster;
    overrideDamageType?: DamageType;
    /** Flag for if the monster property should be encoded */
    get encodeMonster(): boolean;
    constructor(manager: BaseManager, game: Game);
    /** Sets a new monster to this enemy, preparing it for spawning */
    setNewMonster(monster: Monster): void;
    computeAttackType(): void;
    computeDamageType(): void;
    computeAttackSelection(): void;
    mergeInheritedEffectApplicators(): void;
    mergeUninheritedEffectApplicators(): void;
    computeLevels(): void;
    computeAbyssalLevels(): void;
    computeEquipmentStats(): void;
    computeModifiers(): void;
    addPassiveModifiers(): void;
    addGamemodeModifiers(): void;
    /** Adds the enemy modifiers from stat providers */
    addProviderModifiers(): void;
    /** Adds the enemy modifiers from player attack styles */
    addPlayerAttackStyleModifiers(): void;
    /** Adds the enemy modifiers from the player's equipment */
    addPlayerEquipmentModifiers(): void;
    /** Adds the enemy modifiers from the player's food */
    addPlayerFoodModifiers(): void;
    addPlayerPrayerModifiers(): void;
    addPlayerAuroraModifiers(): void;
    /** Adds all conditional modifiers that are active */
    addConditionalModifiers(): void;
    getAccuracyValues(): {
        effectiveLevel: number;
        bonus: number;
    };
    getFlatReflectDamage(): number;
    damage(amount: number, source: SplashType): void;
    processDeath(): void;
    regen(): void;
    /** Sets the enemy to render as spawning */
    setSpawning(): void;
    setRenderAll(): void;
    initializeForCombat(): void;
    render(): void;
    /** Updates all barrier numbers and bars */
    renderBarrier(): void;
    renderHitchance(): void;
    renderHitpoints(): void;
    renderPassives(): void;
    renderAttacks(): void;
    renderDamageValues(): void;
    renderNormalDamage(minHit: string, maxHit: string): void;
    renderLevels(): void;
    renderImageAndName(): void;
    renderStats(): void;
    renderNoStats(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    setStatsFromMonster(monster: Monster): void;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    postAttack(): void;
    onHit(): void;
    onMiss(): void;
}
interface EnemyRenderHTMLElements extends RenderHTMLElements {
    image: HTMLDivElement;
    name: HTMLElement[];
    attackType: HTMLImageElement[];
}
declare enum EnemyState {
    Dead = 0,
    Alive = 1,
    Spawning = 2
}
declare class EnemyRenderQueue extends CharacterRenderQueue {
    image: boolean;
    levels: boolean;
}
