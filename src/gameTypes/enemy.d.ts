declare class Enemy extends Character {
    protected manager: BaseManager;
    protected game: Game;
    state: EnemyState;
    modifiers: CombatModifiers;
    spellSelection: SpellSelection;
    noun: Noun;
    protected get statElements(): EnemyRenderHTMLElements;
    protected get splashManager(): SplashManager;
    protected get effectRenderer(): EffectRenderer;
    protected get attackBar(): ProgressBar;
    protected get attackBarMinibar(): ProgressBar;
    rendersRequired: EnemyRenderQueue;
    private randomAttackType;
    monster?: Monster;
    isBoss: boolean;
    /** Flag for if the monster property should be encoded */
    protected get encodeMonster(): boolean;
    constructor(manager: BaseManager, game: Game);
    setMonster(monster: Monster): void;
    protected computeAttackType(): void;
    protected computeAttackSelection(): void;
    protected computeLevels(): void;
    protected computeEquipmentStats(): void;
    computeModifiers(): void;
    protected addGamemodeModifiers(): void;
    protected getAccuracyValues(): {
        effectiveLevel: number;
        bonus: number;
    };
    protected modifyDamageReduction(reduction: number): number;
    protected getFlatReflectDamage(): number;
    damage(amount: number, source: SplashType): void;
    processDeath(): void;
    protected regen(): void;
    /** Sets the enemy to render as spawning */
    setSpawning(): void;
    setRenderAll(): void;
    /** For specific enemy only spawn effects */
    applyUniqueSpawnEffects(): void;
    initializeForCombat(): void;
    render(): void;
    protected renderAttacksAndPassives(): void;
    protected renderDamageValues(): void;
    protected renderLevels(): void;
    protected renderImageAndName(): void;
    protected renderStats(): void;
    getAttackTypeMedia(attackType: string): string;
    protected renderNoStats(): void;
    protected renderHitpoints(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    private setStatsFromMonster;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    protected postAttack(attack: SpecialAttack, attackType: AttackType): void;
    protected onHit(): void;
    protected onMiss(): void;
}
interface EnemyRenderHTMLElements extends RenderHTMLElements {
    image: HTMLDivElement;
    name: HTMLElement[];
    attackType: HTMLImageElement;
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
