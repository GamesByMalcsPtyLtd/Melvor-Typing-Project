declare class CombatPassiveSpanElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    name: HTMLElement;
    description: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setPassive(passive: CombatPassive): void;
}
declare class EnemyPassivesElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    descriptionContainer: HTMLDivElement;
    passiveSpans: CombatPassiveSpanElement[];
    passiveDividers: HTMLDivElement[];
    constructor();
    connectedCallback(): void;
    setPassives(passives: Map<CombatPassive, ActiveCombatPassive>): boolean;
}
declare class SpecialAttackSpanElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    name: HTMLElement;
    chance: HTMLSpanElement;
    description: HTMLSpanElement;
    maxHit: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setAttack(selection: AttackSelection, character: Character): void;
    updateMaxHit(selection: AttackSelection, character: Character): void;
}
declare class EnemySpecialAttacksElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    descriptionContainer: HTMLDivElement;
    attackSpans: SpecialAttackSpanElement[];
    attackDividers: HTMLDivElement[];
    constructor();
    connectedCallback(): void;
    setAttacks(attacks: AttackSelection[], character: Character): void;
    updateMaxHits(attacks: AttackSelection[], character: Character): void;
    static shouldHideAttacks(attacks: AttackSelection[]): boolean;
}
declare class EvasionTableElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    meleeIcon: HTMLImageElement;
    meleeEvasion: HTMLSpanElement;
    rangedIcon: HTMLImageElement;
    rangedEvasion: HTMLSpanElement;
    magicIcon: HTMLImageElement;
    magicEvasion: HTMLSpanElement;
    tooltips: TippyTooltip[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setStats(character: Character): void;
    setEmpty(): void;
    addTooltip(image: HTMLImageElement, text: string): void;
}
declare class ResistanceSpanElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    icon: HTMLImageElement;
    name: HTMLSpanElement;
    value: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setResistance(damageType: DamageType): void;
    setValue(value: number): void;
}
declare class ResistanceTableElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    resistanceSpans: Map<DamageType, ResistanceSpanElement>;
    highlighted?: ResistanceSpanElement;
    constructor();
    connectedCallback(): void;
    init(game: Game): void;
    setStats(character: Character): void;
    setEmpty(character: Character): void;
    setHighlight(span: ResistanceSpanElement): void;
    removeHighlight(): void;
}
declare class DefensiveStatsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    evasion: EvasionTableElement;
    resistance: ResistanceTableElement;
    constructor();
    connectedCallback(): void;
    init(game: Game): void;
    setStats(character: Character): void;
    setEmpty(character: Character): void;
}
declare class OffensiveStatsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    damageTypeIcon: HTMLImageElement;
    damageTypeName: HTMLSpanElement;
    attackTypeIcon: HTMLImageElement;
    attackIntervalContainer: HTMLDivElement;
    attackInterval: HTMLSpanElement;
    minHit: HTMLSpanElement;
    maxHit: HTMLSpanElement;
    hitChance: HTMLSpanElement;
    accuracyRating: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setStats(character: Character): void;
    setHitChance(character: Character): void;
    unsetHitChance(): void;
    setNormalDamage(minHit: string, maxHit: string): void;
    setEmpty(): void;
    showAttackInterval(): void;
    hideAttackInterval(): void;
    static getAttackTypeMedia(attackType: AttackType): string;
}
declare class CombatLevelsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    hitpointsContainer: HTMLDivElement;
    hitpointsIcon: HTMLImageElement;
    maxHitpoints: HTMLElement;
    combatIcon: HTMLImageElement;
    combatLevel: HTMLElement;
    attackIcon: HTMLImageElement;
    attackLevel: HTMLElement;
    strengthIcon: HTMLImageElement;
    strengthLevel: HTMLElement;
    defenceIcon: HTMLImageElement;
    defenceLevel: HTMLElement;
    rangedIcon: HTMLImageElement;
    rangedLevel: HTMLElement;
    magicIcon: HTMLImageElement;
    magicLevel: HTMLElement;
    corruptionContainer: HTMLDivElement;
    corruptionIcon: HTMLImageElement;
    corruptionLevel: HTMLElement;
    tooltips: TippyTooltip[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setCombatLevel(level: number): void;
    setLevels(character: Character): void;
    setMaxHitpoints(character: Character): void;
    setEmpty(): void;
    addTooltip(image: HTMLImageElement, text: string): void;
}
interface ActivePrayerElements {
    link: HTMLAnchorElement;
    image: HTMLImageElement;
    tooltipElem: PrayerTooltipElement;
    tooltip?: TippyTooltip;
}
declare class TriangleDamageTooltipElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    attackTypes: HTMLSpanElement;
    damageMultiplier: HTMLSpanElement;
    resistanceMultiplier: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setTriangle(attackerType: AttackType, targetType: AttackType, triangle: CombatTriangle): void;
}
declare class PlayerStatsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    damageTypeIcon: HTMLImageElement;
    damageTypeName: HTMLSpanElement;
    minHit: HTMLSpanElement;
    maxHit: HTMLSpanElement;
    summoningMaxHitContainer: HTMLDivElement;
    summoningIcon: HTMLImageElement;
    summoningMaxHit: HTMLSpanElement;
    barrierMaxHitContainer: HTMLDivElement;
    barrierIcon: HTMLImageElement;
    barrierMaxHit: HTMLSpanElement;
    hitChance: HTMLSpanElement;
    accuracyRating: HTMLSpanElement;
    critChance: HTMLSpanElement;
    critMultiplier: HTMLSpanElement;
    lifesteal: HTMLSpanElement;
    resistance: ResistanceTableElement;
    evasion: EvasionTableElement;
    prayerLevelContainer: HTMLDivElement;
    prayerLevel: HTMLSpanElement;
    prayerPoints: HTMLSpanElement;
    soulPointsContainer: HTMLDivElement;
    soulPoints: HTMLSpanElement;
    activePrayers: HTMLSpanElement;
    combatTriangleIcon: HTMLImageElement;
    activePrayerElements: ActivePrayerElements[];
    triangleTooltipElem: TriangleDamageTooltipElement;
    triangleTooltipElemDiv: HTMLDivElement;
    triangleTooltip?: TippyTooltip;
    iconTooltips: TippyTooltip[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    init(game: Game): void;
    setStats(player: Player, game: Game): void;
    setNormalDamage(minHit: string, maxHit: string): void;
    setHitChance(player: Player): void;
    unsetHitChance(): void;
    setPrayerPoints(player: Player): void;
    setSoulPoints(player: Player): void;
    setActivePrayers(player: Player, prayers: Set<ActivePrayer>): void;
    setSummonMaxHit(maxHit: number, barrierMaxHit: number, isFighting: boolean): void;
    setCombatTriangle(player: Player, triangle: CombatTriangle, triangleSet: CombatTriangleSet): void;
    hideCombatTriangle(): void;
    addTooltip(image: HTMLImageElement, text: string): void;
}
declare class MonsterStatsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    modalTitle: HTMLHeadingElement;
    monsterName: HTMLHeadingElement;
    wikiLink: HTMLAnchorElement;
    levels: CombatLevelsElement;
    monsterImage: HTMLImageElement;
    offensiveStats: OffensiveStatsElement;
    defensiveStats: DefensiveStatsElement;
    specialAttacks: EnemySpecialAttacksElement;
    combatPassives: EnemyPassivesElement;
    enemy?: Enemy;
    constructor();
    connectedCallback(): void;
    init(game: Game): void;
    setMonster(monster: Monster): void;
}
