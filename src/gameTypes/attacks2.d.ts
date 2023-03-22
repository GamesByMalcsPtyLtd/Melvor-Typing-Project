/** Defines data for the construction of an attack */
interface AttackData extends IDData {
    /** Default chance for attack to happen in %*/
    defaultChance: number;
    /** Damage dealt by attack */
    damage: DamageData[];
    /** Effect Data for effects that occur before the attack hits*/
    prehitEffects: EffectData[];
    /** Effect Data for effects that occur when the attack hits */
    onhitEffects: EffectData[];
    /** If the attack cant miss target */
    cantMiss: boolean;
    /** Number of attacks */
    attackCount: number;
    /** Interval between attacks */
    attackInterval: number;
    /** Portion of damage dealt healed */
    lifesteal: number;
    /** ID of stacking effect to consume runes from */
    consumesStacks?: string;
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
/** Defines data for the construction of an effect */
declare type EffectData = SlowEffectData | BurnEffectData | PoisonEffectData | FrostBurnEffectData | AttackStackingEffectData | AfflictionEffectData | CustomEffectData | CurseEffectData | DeadlyPoisonEffectData;
/** Data definition for a slow effect */
interface SlowEffectData {
    effectType: 'Slow';
    /** Percentage value that effect should icnrease attack interval by */
    magnitude: number;
    /** Number of target turns the effect should last for */
    turns: number;
}
/** Data definition for a standard burn effect */
interface BurnEffectData {
    effectType: 'Burn';
    chance: number;
}
/** Data definition for a standard poison effect */
interface PoisonEffectData {
    effectType: 'Poison';
    chance: number;
}
interface DeadlyPoisonEffectData {
    effectType: 'DeadlyPoison';
    chance: number;
}
/** Data definition for a standard frostburn effect */
interface FrostBurnEffectData {
    effectType: 'Frostburn';
}
/** Data definition for a stacking effect. Pulls from stacking effect registry. */
interface AttackStackingEffectData {
    effectType: 'Stacking';
    id: string;
}
/** Data definition for a standard affliction effect */
interface AfflictionEffectData {
    effectType: 'Affliction';
}
declare type CustomEffectData = AnyEffectData & {
    effectType: 'Custom';
};
declare class SpecialAttack extends NamespacedObject implements SoftDataDependant<AttackData> {
    /** Localized name of the attack */
    get name(): string;
    /** Localized description of the attack */
    get description(): string;
    get canNormalAttack(): boolean;
    get descriptionTemplateData(): StringDictionary<string>;
    /** Default chance for attack to happen in %*/
    defaultChance: number;
    /** Damage dealt by attack */
    damage: Damage[];
    /** Effects of attack before it hits*/
    prehitEffects: AnyEffect[];
    /** Efects of attack when it hits */
    onhitEffects: AnyEffect[];
    /** If the attack cant miss target */
    cantMiss: boolean;
    /** Number of attacks */
    attackCount: number;
    /** Interval between attacks */
    attackInterval: number;
    /** Portion of damage dealt healed */
    lifesteal: number;
    /** Attack consumes stacks of this to gain increased attack count */
    consumeStacks?: StackingEffect;
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
interface ItemEffectData extends IDData {
    effectData: EffectData;
}
declare class ItemEffect extends NamespacedObject {
    effect: AnyEffect;
    constructor(namespace: DataNamespace, data: ItemEffectData, game: Game);
}
declare class ItemEffectAttack extends SpecialAttack {
    /** Effects that have been registered */
    itemEffects: NamespaceRegistry<ItemEffect>;
    effectToItemEffectMap: Map<AnyEffect, ItemEffect>;
    constructor(namespace: DataNamespace, game: Game);
    registerItemEffects(namespace: DataNamespace, data: ItemEffectData[], game: Game): void;
    getItemEffectFromEffect(effect: AnyEffect): ItemEffect;
}
interface StackingEffectData extends IDData {
    stacksToAdd: number;
    modifiers: CombatModifierData;
    maxStacks: number;
    name: string;
    langName?: LangStringData;
    media: string;
}
declare class StackingEffect extends NamespacedObject {
    type: 'Stacking';
    stacksToAdd: number;
    modifiers: CombatModifierData;
    maxStacks: number;
    get name(): string;
    get media(): string;
    _media: string;
    _name: string;
    _langName?: LangStringData;
    constructor(namespace: DataNamespace, data: StackingEffectData);
}
declare function constructDamageFromData(data: DamageData[]): Damage[];
declare function constructEffectFromData(effectData: EffectData, game: Game): AnyEffect;
interface CurseEffectData {
    effectType: 'Curse';
    curse: string;
    chance?: number;
    isRandom?: boolean;
}
declare class CurseEffect {
    type: 'Curse';
    curse: CurseSpell;
    chance: number;
    isRandom: boolean;
    constructor(data: CurseEffectData, game: Game);
}
