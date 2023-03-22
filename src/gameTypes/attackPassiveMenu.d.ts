declare class EnemyAttackPassiveMenu {
    container: HTMLDivElement;
    passiveContainer: HTMLDivElement;
    passiveDescCont: HTMLHeadElement;
    attackContainer: HTMLDivElement;
    attackDescCont: HTMLDivElement;
    maxhitSpans: HTMLSpanElement[];
    constructor(isCombat: boolean);
    render(passives: Map<CombatPassive, ActivePassive>, attackSelection: AttackSelection[], character: Character): void;
    renderMaxhits(attackSelection: AttackSelection[], character: Character): void;
    renderPassives(passives: Map<CombatPassive, ActivePassive>): boolean;
    hidePassives(): void;
    shouldHideAttacks(attackSelection: AttackSelection[]): boolean;
    renderAttacks(attackSelection: AttackSelection[], character: Character): boolean;
    getAttackMaxHitText(attack: SpecialAttack, character: Character): string;
    hideAttacks(): void;
    hide(): void;
}
