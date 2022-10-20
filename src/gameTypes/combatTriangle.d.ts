/** Combat triangle data. Index by attacker: target */
declare const combatTriangle: Record<CombatTriangles, TriangleData>;
declare type TriangleData = {
    damageModifier: AttackTypeObject<AttackTypeObject<number>>;
    reductionModifier: AttackTypeObject<AttackTypeObject<number>>;
};
declare type AttackTypeObject<T> = {
    melee: T;
    ranged: T;
    magic: T;
};
