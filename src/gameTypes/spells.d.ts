interface BaseSpellData extends IDData {
    name: string;
    media: string;
    level: number;
    runesRequired: IDQuantity[];
    runesRequiredAlt?: IDQuantity[];
    abyssalLevel?: number;
    categories?: string[];
}
interface BaseSpellModificationData extends IDData {
    level?: number;
    runesRequired?: ItemQuantitiesModificationData;
    runesRequiredAlt?: ItemQuantitiesModificationData;
    abyssalLevel?: number;
    categories?: {
        add?: string[];
        remove?: string[];
    };
}
declare abstract class BaseSpell extends NamespacedObject implements SoftDataDependant<BaseSpellData> {
    get media(): string;
    abstract readonly name: string;
    level: number;
    runesRequired: RuneQuantity[];
    runesRequiredAlt?: RuneQuantity[];
    abyssalLevel: number;
    categories: SkillSubcategory[];
    _name: string;
    _media: string;
    constructor(namespace: DataNamespace, data: BaseSpellData, game: Game);
    registerSoftDependencies(data: BaseSpellData, game: Game): void;
    applyDataModification(data: BaseSpellModificationData, game: Game): void;
}
interface AttackSpellbookData extends IDData {
    /** Display name of the spellbook */
    name: string;
    /** Optional. Language string ID to use for the name property */
    nameLang?: string;
    /** URI of the spellbooks icon */
    media: string;
    /** Optional. Prefix used for the language string IDs of spell names in this book */
    spellNameLangPrefix?: string;
    /** Optional. If Curse spells can be used alongside spells from this book. Defaults to true */
    allowCurses?: boolean;
    /** Optional. If Aurora spells can be used alongside spells from this book. Defaults to true */
    allowAuroras?: boolean;
    /** Optional. If the max hit from this spell can benefit from damage modifiers. Defaults to true */
    allowDamageModifiers?: boolean;
    /** Optional. If special attacks can be used with spells from this book. Defaults to true */
    allowSpecialAttacks?: boolean;
    /** Optional. Limit spell usage to these damage types. Unset allows for all damage types. */
    allowedDamageTypeIDs?: string[];
}
declare class AttackSpellbook extends NamespacedObject {
    get name(): string;
    get media(): string;
    allowCurses: boolean;
    allowAuroras: boolean;
    allowDamageModifiers: boolean;
    allowSpecialAttacks: boolean;
    spellNameLangPrefix: string;
    spells: AttackSpell[];
    allowedDamageTypes: Set<DamageType>;
    _name: string;
    _nameLang?: string;
    _media: string;
    constructor(namespace: DataNamespace, data: AttackSpellbookData);
    canUseWithDamageType(damageType: DamageType): boolean;
}
interface CombatSpellData extends BaseSpellData {
    /** Item required to be equipped to use this spell */
    requiredItemID?: string;
    /** Other requirements that must be met to use this spell */
    requirements?: AnyRequirementData[];
}
declare abstract class CombatSpell extends BaseSpell implements SoftDataDependant<CombatSpellData> {
    requiredItem?: EquipmentItem;
    requirements: AnyRequirement[];
    constructor(namespace: DataNamespace, data: CombatSpellData, game: Game);
    registerSoftDependencies(data: CombatSpellData, game: Game): void;
}
interface AttackSpellData extends CombatSpellData {
    /** Optional. The base maximum hit used to calculate the player's max hit. 1/10th of the desired damage in Standard mode. Defaults to 0 */
    maxHit?: number;
    /** Optional. The ID of a special attack. If present, the player's special attack list will be replaced with this attack when using the spell. */
    specialAttackID?: string;
    /** Optional. Combat effect applicators that will be merged with the player when using the spell */
    combatEffects?: TriggeredCombatEffectApplicatorData[];
    /** The ID of the spellbook this spell belongs to */
    spellbook: string;
}
declare type OldAttackSpellData = Omit<AttackSpellData, 'spellbook'> & {
    spellbook?: string;
};
declare class AttackSpell extends CombatSpell {
    get name(): string;
    maxHit: number;
    /** If present, the player's special attack list will be set to exclusively be this spell */
    specialAttack?: SpecialAttack;
    combatEffects: CombatEffectApplicator[];
    /** The spellbook this spell belongs to */
    spellbook: AttackSpellbook;
    modQuery: ModifierQuery;
    constructor(namespace: DataNamespace, data: AttackSpellData, game: Game);
    registerSoftDependencies(data: CombatSpellData, game: Game): void;
}
interface CurseSpellData extends CombatSpellData {
    /** The ID of the effect to apply when casting the curse */
    effectID: string;
}
declare class CurseSpell extends CombatSpell {
    get name(): string;
    effect: CombatEffect;
    constructor(namespace: DataNamespace, data: CurseSpellData, game: Game);
}
declare type AuroraSpellData = CombatSpellData & IStatObjectData;
declare class AuroraSpell extends CombatSpell {
    get name(): string;
    get description(): string;
    stats: StatObject;
    constructor(namespace: DataNamespace, data: AuroraSpellData, game: Game);
}
