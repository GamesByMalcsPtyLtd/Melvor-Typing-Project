declare class Enemy extends Character {
    manager: BaseManager;
    game: Game;
    state: EnemyState;
    modifiers: CombatModifiers;
    spellSelection: SpellSelection;
    noun: Noun;
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
    renderAttacksAndPassives(): void;
    renderDamageValues(): void;
    renderLevels(): void;
    renderImageAndName(): void;
    renderStats(): void;
    getAttackTypeMedia(attackType: string): string;
    renderNoStats(): void;
    renderHitpoints(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    setStatsFromMonster(monster: Monster): void;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    postAttack(attack: SpecialAttack, attackType: AttackType): void;
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
interface EnemyRenderQueue extends RenderQueue {
    image: boolean;
    levels: boolean;
}
