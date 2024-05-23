/** Defines data for the construction of an attack */
interface AttackData extends IDData {
    /** Default chance for attack to happen in %*/
    defaultChance: number;
    /** Damage dealt by attack */
    damage: DamageData[];
    /** Effect/EffectTable applicators that are processed before the attack hits */
    prehitEffects: AnyCombatEffectApplicatorData[];
    /** Effect/EffectTable applicators that are processed only when the attack hits */
    onhitEffects: AnyCombatEffectApplicatorData[];
    /** Optional. If true, this attack will be replaced by a normal attack if any of its pre-hit or on-hit effects are active */
    canNormalAttack?: boolean;
    /** If the attack cant miss target */
    cantMiss: boolean;
    /** Number of attacks */
    attackCount: number;
    /** Interval between attacks */
    attackInterval: number;
    /** Portion of damage dealt healed */
    lifesteal: number;
    /** Optional. If present this attack will remove the given effect from the target character, and increase its attack count by the effects paremeter value */
    consumesEffect?: {
        effectID: string;
        paramName: string;
    };
    /** Attack consumes Runes per hit */
    usesRunesPerProc?: boolean;
    /** Attack consumes Prayer Points per hit */
    usesPrayerPointsPerProc?: boolean;
    /** Attack consumes Potion Charges per hit */
    usesPotionChargesPerProc?: boolean;
    /** Optional. If included, only the provided Attack Types this attack can activate on */
    attackTypes?: AttackType[];
    /** Extra rune consumption for this attack */
    extraRuneConsumption?: IDQuantity[];
    /** Attack is considered to be dragonbreath */
    isDragonbreath?: boolean;
    /** Minimum accuracy required for attack to always hit */
    minAccuracy?: number;
    /** Name of the attack */
    name: string;
    /** Description of the attack */
    description: string;
    /** Description generator string */
    descriptionGenerator?: string;
}
declare type DamageData = NormalDamageData | CustomDamageData;
/** Shortcut data for defining damage based on min hit and max hit */
interface NormalDamageData {
    damageType: 'Normal';
    /** Scaling factor for damage */
    amplitude: number;
    /** If present, damage occurs only on the specific proc of the special attack */
    attackCount?: number;
}
declare type CustomDamageData = Damage & {
    damageType: 'Custom';
};
declare class SpecialAttack extends NamespacedObject implements SoftDataDependant<AttackData> {
    /** Localized name of the attack */
    get name(): string;
    get englishName(): string;
    get englishDescription(): string;
    /** Localized description of the attack */
    get description(): string;
    _modifiedDescription: string | undefined;
    get modifiedDescription(): string;
    canNormalAttack: boolean;
    get descriptionTemplateData(): StringDictionary<string>;
    /** Default chance for attack to happen in %*/
    defaultChance: number;
    /** Damage dealt by attack */
    damage: Damage[];
    /** Effects of attack before it hits*/
    prehitEffects: AnyCombatEffectApplicator[];
    /** Efects of attack when it hits */
    onhitEffects: AnyCombatEffectApplicator[];
    /** If the attack cant miss target */
    cantMiss: boolean;
    /** Number of attacks */
    attackCount: number;
    /** Interval between attacks */
    attackInterval: number;
    /** Portion of damage dealt healed */
    lifesteal: number;
    /** Attack will remove an effect from the target character, and increase its attack count by the effects parameter value */
    consumesEffect?: {
        effect: CombatEffect;
        paramName: string;
    };
    /** Attack consumes Runes per hit */
    usesRunesPerProc: boolean;
    /** Attack consumes Prayer Points per hit */
    usesPrayerPointsPerProc: boolean;
    /** Attack consumes Potion Charges per hit */
    usesPotionChargesPerProc: boolean;
    /** Enabled Attack Types this attack can activate on */
    attackTypes?: Set<AttackType>;
    /** Extra rune consumption for this attack */
    extraRuneConsumption?: AnyItemQuantity[];
    /** Attack is considered to be dragonbreath */
    isDragonbreath: boolean;
    minAccuracy: number;
    /** String used to automatically generate a description */
    descriptionGenerator?: string;
    _name: string;
    _description: string;
    constructor(namespace: DataNamespace, data: AttackData, game: Game);
    registerSoftDependencies(data: AttackData, game: Game): void;
}
declare function constructDamageFromData(data: DamageData[]): Damage[];
