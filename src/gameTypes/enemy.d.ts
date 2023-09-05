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
    state: EnemyState;
    modifiers: CombatModifiers;
    spellSelection: SpellSelection;
    stats: CharacterStats;
    readonly noun: Noun;
    get statElements(): EnemyRenderHTMLElements;
    get splashManager(): SplashManager;
    get effectRenderer(): EffectRenderer;
    get attackBar(): ProgressBar;
    get attackBarMinibar(): ProgressBar;
    rendersRequired: EnemyRenderQueue;
    randomAttackType: AttackType | 'unset';
    monster?: Monster;
    isBoss: boolean;
    /** Flag for if the monster property should be encoded */
    get encodeMonster(): boolean;
    constructor(manager: BaseManager, game: Game);
    /** Resets all mutable properties of this class, as if it were freshly constructed. Does not reset event handlers. */
    resetStateToDefault(): void;
    setMonster(monster: Monster): void;
    computeAttackType(): void;
    computeAttackSelection(): void;
    computeLevels(): void;
    computeEquipmentStats(): void;
    computeModifiers(): void;
    addGamemodeModifiers(): void;
    getAccuracyValues(): {
        effectiveLevel: number;
        bonus: number;
    };
    modifyDamageReduction(reduction: number): number;
    getFlatReflectDamage(): number;
    damage(amount: number, source: SplashType): void;
    processDeath(): void;
    regen(): void;
    /** Sets the enemy to render as spawning */
    setSpawning(): void;
    setRenderAll(): void;
    /** For specific enemy only spawn effects */
    applyUniqueSpawnEffects(): void;
    initializeForCombat(): void;
    render(): void;
    /** Updates all barrier numbers and bars */
    renderBarrier(): void;
    renderHitpoints(): void;
    renderAttacksAndPassives(): void;
    renderDamageValues(): void;
    renderLevels(): void;
    renderImageAndName(): void;
    renderStats(): void;
    getAttackTypeMedia(attackType: string): string;
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
    levels: StringDictionary<HTMLElement[]>;
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
