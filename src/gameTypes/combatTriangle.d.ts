declare type CombatTriangleType = 'Standard' | 'Hardcore' | 'InvertedHardcore';
interface BaseCombatTriangleData extends IDData {
    name: string;
    media: string;
}
declare type CombatTriangle = {
    damageModifier: AttackTypeObject<AttackTypeObject<number>>;
    reductionModifier: AttackTypeObject<AttackTypeObject<number>>;
};
declare type AttackTypeObject<T> = {
    melee: T;
    ranged: T;
    magic: T;
};
declare type CombatTriangleSetData = BaseCombatTriangleData & Record<CombatTriangleType, CombatTriangle>;
declare class CombatTriangleSet extends NamespacedObject implements Record<CombatTriangleType, CombatTriangle> {
    get name(): string;
    get media(): string;
    _name: string;
    _media: string;
    Standard: CombatTriangle;
    Hardcore: CombatTriangle;
    InvertedHardcore: CombatTriangle;
    constructor(namespace: DataNamespace, data: CombatTriangleSetData);
    /** Data used to construct the Normal triangle set */
    static normalSetData: CombatTriangleSetData;
}
declare class CombatTriangleSetTableElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    tableBody: HTMLTableSectionElement;
    name: HTMLSpanElement;
    img: HTMLImageElement;
    gamemodeName: HTMLSpanElement;
    gamemodeImg: HTMLImageElement;
    areaName: HTMLSpanElement;
    areaImg: HTMLImageElement;
    constructor();
    connectedCallback(): void;
    setCombatTriangle(area: AnyCombatArea): void;
    createRows(combatTriangle: CombatTriangle): void;
    attackTypeMedia: {
        melee: string;
        ranged: Assets;
        magic: Assets;
        random: Assets;
    };
}
declare class CombaTriangleSetTableRowElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    playerAttackType: HTMLSpanElement;
    vsMeleeDmg: HTMLSpanElement;
    vsMeleeDR: HTMLSpanElement;
    vsRangedDmg: HTMLSpanElement;
    vsRangedDR: HTMLSpanElement;
    vsMagicDmg: HTMLSpanElement;
    vsMagicDR: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setRow(combatTriangle: CombatTriangle, attackType: AttackType, attackTypeMedia: string): void;
    setSpan(el: HTMLSpanElement, value: number): void;
    getSpanClass(value: number): string;
}
