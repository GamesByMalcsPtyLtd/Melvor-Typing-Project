declare class EnemyAttackPassiveMenu {
    private container;
    private passiveContainer;
    private passiveDescCont;
    private attackContainer;
    private attackDescCont;
    private maxhitSpans;
    constructor(isCombat: boolean);
    render(passives: Set<CombatPassive>, attackSelection: AttackSelection[], character: Character): void;
    renderMaxhits(attackSelection: AttackSelection[], character: Character): void;
    private renderPassives;
    private hidePassives;
    private shouldHideAttacks;
    private renderAttacks;
    private getAttackMaxHitText;
    private hideAttacks;
    hide(): void;
}
