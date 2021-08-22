/** Normal Attack Damage */
declare const normalDamage: Damage[];
/** Burning: Deal 15% of current HP as dmg over 5 seconds */
declare const burnEffect: DOTEffect;
/** Poison: Deal 10% of max HP as dmg over 10 seconds */
declare const poisonEffect: DOTEffect;
declare const stackingEffects: StackingEffect[];
declare const markOfDeathEffect: StackingEffect;
declare const afflictionEffect: ModifierEffect;
/** Stores all player and enemy attack types */
declare const attacks: StringDictionary<Attack>;
/** Map of attack ID to attack Object */
declare const attacksIDMap: Map<number, Attack>;
declare function getAttackFromID(id: number): Attack;
declare function damageReducer(attacker: Character, target: Character, prevDamage?: number): (totalDamage: number, damage: Damage) => number;
declare function maxDamageReducer(attacker: Character, target: Character, prevDamage?: number): (totalDamage: number, damage: Damage) => number;
declare function getDamageRoll(character: Character, type: RollType, percent: number, damageDealt?: number): number;
declare const rollData: StringDictionary<RollData>;
declare type RollData = {
    formatPercent: (value: number) => string;
    formatName: (name: string) => string;
};
declare function getDamageDescription(damage: Damage, attackerName: Noun, targetName: Noun): string;
declare function getEffectDescription(effect: Effect, attackerNoun: Noun, targetNoun: Noun): string;
declare type AttackDescriber = (attack: Attack, attackerNoun: Noun, targetNoun: Noun) => string;
/** Contains functions that return the strings to fill in attack descriptions
 *  Portions of text in descriptions surrounded by <> indicate sections that will be replaced by a descriptor
 */
declare const attackDescriptors: StringDictionary<AttackDescriber>;
/** Returns a filled in description of an attack includes HTML*/
declare const describeAttack: AttackDescriber;
declare type Attack = AvoidableAttack | UnavoidableAttack;
declare type BaseAttack = {
    /** Display name of attack */
    name: string;
    /** ID for saving attack */
    id: number;
    /** Displayed description of attack */
    description: string;
    /** Default chance for attack to happen in %*/
    defaultChance: number;
    /** Damage dealt by attack */
    damage: Damage[];
    /** Effects of attack before it hits*/
    prehitEffects: Effect[];
    /** Efects of attack when it hits */
    onhitEffects: Effect[];
    /** Attack cant miss target */
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
    useRunesPerProc: boolean;
    /** Attack consumes Prayer Points per hit */
    usePrayerPointsPerProc: boolean;
    /** Attack consumes Potion Charges per hit */
    usePotionChargesPerProc: boolean;
    /** Enabled Attack Types this attack can activate on */
    attackTypes: AttackType[];
};
interface AvoidableAttack extends BaseAttack {
    cantMiss: false;
}
interface UnavoidableAttack extends BaseAttack {
    cantMiss: true;
    minAccuracy: number;
}
declare type Damage = RolledDamage | FixedDamage;
/** Damage of an attack */
declare type BaseDamage = {
    /** Which character to use for roll */
    character: CharacterType;
    /** Value type to use for maximum */
    maxRoll: RollType;
    /** Percentage of maxRoll */
    maxPercent: number;
    /** Whether to roll for damage or simply use the max value */
    roll: boolean;
};
interface RolledDamage extends BaseDamage {
    roll: true;
    /** Roll type to use for minimum */
    minRoll: RollType;
    /** Percentage of minRoll */
    minPercent: number;
}
interface FixedDamage extends BaseDamage {
    roll: false;
}
declare type CharacterType = "Target" | "Attacker";
/** Effects of an attack */
declare type Effect = ModifierEffect | SleepEffect | StunEffect | DOTEffect | StackingEffect | ReflexiveEffect;
declare type RollType = "MaxHit" | "MinHit" | "CurrentHP" | "MaxHP" | "DamageDealt" | "MagicScaling" | "Fixed" | "One" | "Rend";
declare type EffectType = "Modifier" | "Sleep" | "Stun" | "DOT" | "IntoTheMist" | "MarkOfDeath";
interface ModifierEffect {
    type: "Modifier";
    /** Modifiers the attack applies */
    modifiers: CombatModifierData;
    /** Maximum stacks the effect can have */
    maxStacks: number;
    /** Character the effect applies to */
    character: CharacterType;
    /** Number of turns the effect lasts for. 0 means it only lasts for the duration of the attack. */
    turns: number;
    /** Character that the turn timer counts down on */
    countsOn: CharacterType;
    /** Media to display for the effect */
    media: string;
}
interface SleepEffect {
    type: "Sleep";
    /** Number of turns the effect applies for */
    turns: number;
    /** Chance that the effect applies */
    chance: number;
}
interface StunEffect {
    type: "Stun";
    /** Number of turns the effect applies for */
    turns: number;
    /** Chance that the effect applies */
    chance: number;
    flavour: StunFlavour;
}
declare type StunFlavour = "Stun" | "Freeze";
declare type DOTType = "Burn" | "Bleed" | "Poison" | "Regen";
interface DOTEffect {
    type: "DOT";
    subtype: DOTType;
    /** Number of times the DOT applies */
    procs: number;
    /** Total Damage of DOT */
    damage: Damage[];
    /** Interval between DOT procs */
    interval: number;
    /** Chance that the DOT is applied */
    chance: number;
}
interface ReflexiveEffect {
    type: "Reflexive";
    modifiers: CombatModifierData;
    maxStacks: number;
    media: string;
}
interface StackingEffect {
    type: "Stacking";
    stacksToAdd: number;
    modifiers: CombatModifierData;
    maxStacks: number;
    name: string;
    media: string;
    id: number;
}
interface Noun {
    plain: string;
    possesive: string;
    pronoun: string;
    is: string;
}
declare const youNoun: Noun;
declare const enemyNoun: Noun;
