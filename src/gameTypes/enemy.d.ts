declare class Enemy extends Character {
    data: Monster;
    protected manager: BaseManager;
    state: EnemyState;
    modifiers: CombatModifiers;
    noun: Noun;
    protected levelElements: StringDictionary<HTMLElement[]>;
    protected statElements: EnemyRenderHTMLElements;
    protected splashManager: SplashManager;
    protected effectRenderer: EffectRenderer;
    protected attackBar: ProgressBar;
    rendersRequired: EnemyRenderQueue;
    constructor(data: Monster, manager: BaseManager);
    protected setData(monster: Monster): void;
    protected computeAttackType(): void;
    protected computeAttackSelection(): void;
    protected computeLevels(): void;
    protected computeEquipmentStats(): void;
    computeModifiers(): void;
    protected getAccuracyValues(): {
        effectiveLevel: number;
        bonus: number;
    };
    protected getFlatReflectDamage(): number;
    damage(amount: number, source: SplashType): void;
    processDeath(): void;
    protected regen(): void;
    /** Sets the enemy to render as spawning */
    setSpawning(): void;
    setRenderAll(): void;
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
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    protected postAttack(): void;
    protected onHit(): void;
    protected onMiss(): void;
}
interface EnemyRenderHTMLElements extends RenderHTMLElements {
    image: HTMLDivElement;
    name: HTMLElement[];
    attackType: HTMLImageElement;
}
declare type EnemyState = 'Dead' | 'Spawning' | 'Alive';
interface EnemyRenderQueue extends RenderQueue {
    image: boolean;
    levels: boolean;
}
