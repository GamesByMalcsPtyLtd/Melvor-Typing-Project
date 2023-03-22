interface BaseSpellData extends IDData {
    name: string;
    media: string;
    level: number;
    runesRequired: IDQuantity[];
    runesRequiredAlt?: IDQuantity[];
}
interface CombatSpellData extends BaseSpellData {
    /** Item required to be equipped to use this spell */
    requiredItemID?: string;
    /** Other requirements that must be met to use this spell */
    requirements?: AnyRequirementData[];
}
declare type SpellType = 'Air' | 'Water' | 'Earth' | 'Fire' | 'Nature';
declare type SpellTier = 'Strike' | 'Bolt' | 'Blast' | 'Wave' | 'Surge' | 'Other';
declare type ArchaicSpellType = 'Poison' | 'Infernal' | 'Lightning' | 'Other';
interface StandardSpellData extends CombatSpellData {
    maxHit: number;
    spellType: SpellType;
    spellTier: SpellTier;
    specialAttackID?: string;
}
interface CurseSpellData extends CombatSpellData {
    targetModifiers: CombatModifierData;
}
interface AuroraSpellData extends CombatSpellData {
    modifiers: CombatModifierData;
}
interface AncientSpellData extends CombatSpellData {
    specialAttackID: string;
}
interface ArchaicSpellData extends CombatSpellData {
    spellType: ArchaicSpellType;
    maxHit: number;
    specialAttack: string;
}
declare abstract class BaseSpell extends NamespacedObject {
    get media(): string;
    abstract readonly name: string;
    level: number;
    runesRequired: AnyItemQuantity[];
    runesRequiredAlt?: AnyItemQuantity[];
    _name: string;
    _media: string;
    constructor(namespace: DataNamespace, data: BaseSpellData, game: Game);
}
declare abstract class CombatSpell extends BaseSpell implements SoftDataDependant<CombatSpellData> {
    requiredItem?: EquipmentItem;
    requirements: AnyRequirement[];
    constructor(namespace: DataNamespace, data: CombatSpellData, game: Game);
    registerSoftDependencies(data: CombatSpellData, game: Game): void;
}
declare class StandardSpell extends CombatSpell {
    get name(): string;
    maxHit: number;
    spellType: SpellTypes;
    spellTier: SpellTiers;
    specialAttack?: SpecialAttack;
    constructor(namespace: DataNamespace, data: StandardSpellData, game: Game);
}
declare class CurseSpell extends CombatSpell {
    get name(): string;
    targetModifiers: CombatModifierData;
    constructor(namespace: DataNamespace, data: CurseSpellData, game: Game);
}
declare class AuroraSpell extends CombatSpell {
    get name(): string;
    get description(): string;
    modifiers: CombatModifierData;
    constructor(namespace: DataNamespace, data: AuroraSpellData, game: Game);
}
declare class AncientSpell extends CombatSpell {
    get name(): string;
    specialAttack: SpecialAttack;
    constructor(namespace: DataNamespace, data: AncientSpellData, game: Game);
}
declare class ArchaicSpell extends CombatSpell {
    get name(): string;
    spellType: ArchaicSpellTypeID;
    maxHit: number;
    specialAttack: SpecialAttack;
    constructor(namespace: DataNamespace, data: ArchaicSpellData, game: Game);
}
