/** Convenience class for generating normal damage */
declare class NormalDamage implements RolledDamage {
    character: CharacterType;
    maxRoll: RollType;
    maxPercent: number;
    minRoll: RollType;
    minPercent: number;
    roll: true;
    attackCount?: number;
    constructor(amplitude: number, attackCount?: number);
}
/** Convenience class for generating burn effects */
declare class BurnEffect implements DOTEffect {
    chance: number;
    type: 'DOT';
    subtype: DOTType;
    damage: Damage[];
    procs: number;
    interval: number;
    constructor(chance?: number);
}
/** Convenience class for generating poison effects */
declare class PoisonEffect implements DOTEffect {
    chance: number;
    type: 'DOT';
    subtype: DOTType;
    damage: Damage[];
    procs: number;
    interval: number;
    constructor(chance?: number);
}
/** Convenience class for generating Deadly Poison effects */
declare class DeadlyPoisonEffect implements DOTEffect {
    chance: number;
    type: 'DOT';
    subtype: DOTType;
    damage: Damage[];
    procs: number;
    interval: number;
    constructor(chance?: number);
}
/** Class for slow effects */
declare class SlowEffect implements ModifierEffect {
    turns: number;
    type: 'Modifier';
    modifiers: Required<Pick<CombatModifierData, 'increasedAttackIntervalPercent'>>;
    character: CharacterType;
    countsOn: CharacterType;
    maxStacks: number;
    stacksToAdd: number;
    media: string;
    constructor(magnitude: number, turns?: number);
}
declare class StickyWebs implements ModifierEffect {
    chance: number;
    type: 'Modifier';
    modifiers: CombatModifierData;
    character: CharacterType;
    countsOn: CharacterType;
    maxStacks: number;
    stacksToAdd: number;
    media: string;
    turns: number;
    constructor(chance?: number);
}
declare class EndOfTurnEvasionEffect implements ModifierEffect {
    turns: number;
    maxValue: number;
    type: 'Modifier';
    modifiers: Required<Pick<CombatModifierData, 'increasedGlobalEvasion'>>;
    character: CharacterType;
    countsOn: CharacterType;
    maxStacks: number;
    stacksToAdd: number;
    media: string;
    constructor(turns: number, maxValue: number, atMax?: boolean);
}
/** Burning: Deal 15% of current HP as damage over 5 seconds */
declare const burnEffect: DOTEffect;
declare const bleedReflectEffect: DOTEffect;
/** Poison: Deal 10% of max HP as damage over 10 seconds, 4 procs */
declare const poisonEffect: DOTEffect;
/** Deadly Poison: Deal 25% of max HP as damage over 10 seconds, 4 procs */
declare const deadlyPoisonEffect: DOTEffect;
declare const frostBurnEffect: ModifierEffect;
declare const decreasedEvasionStackingEffect: ModifierEffect;
declare const afflictionEffect: ModifierEffect;
declare const shockEffect: ModifierEffect;
declare const absorbingSkinEffect: ModifierEffect;
declare const dualityEffect: ModifierEffect;
declare const rageEffect: ModifierEffect;
declare const darkBladeEffect: ModifierEffect;
declare const assassinEffect: ModifierEffect;
declare const growingMadnessEffect: ModifierEffect;
declare const momentInTimeEffect: ModifierEffect;
declare const reignOverTimeEffect: ModifierEffect;
declare const shadowCloakEffect: ModifierEffect;
declare const increased5DROnHitEffect: ModifierEffect;
declare const elementalEffects: AnyEffect[];
declare function damageReducer(attacker: Character, target: Character, prevDamage?: number): (totalDamage: number, damage: Damage) => number;
declare function getMaxDamage(damage: Damage, attacker: Character, target: Character, prevDamage?: number): number;
declare function getDamageRoll(character: Character, type: RollType, percent: number, damageDealt?: number): number;
declare const rollData: StringDictionary<RollData>;
declare type RollData = {
    formatPercent: (value: string) => string;
    formatName: (name: string) => string;
    modValue?: (value: number) => number;
};
declare function getDamageDescription(damage: Damage, attackerName: Noun, targetName: Noun, i: number, key: string): string;
declare function getEffectDescription(effect: AnyEffect, attackerNoun: Noun, targetNoun: Noun, key: string): string;
declare type AttackDescriber = (attack: SpecialAttack, attackerNoun: Noun, targetNoun: Noun) => string;
/** Contains functions that return the strings to fill in attack descriptions
 *  Portions of text in descriptions surrounded by <> indicate sections that will be replaced by a descriptor
 */
declare const attackDescriptors: StringDictionary<AttackDescriber>;
declare function damageMaxValue(i: number): string;
declare function damageMinValue(i: number): string;
declare function effectKey(preHit: boolean, i: number): string;
declare function addEffectTemplateData(data: StringDictionary<string>, effect: AnyEffect, preHit: boolean, i: number): void;
declare function addDamageTemplateData(data: StringDictionary<string>, damage: Damage[], key: string): void;
/** Returns a filled in description of an attack includes HTML*/
declare const generateAttackDescription: AttackDescriber;
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
    /** Optionally apply this damage only on a specific hit of the attack */
    attackCount?: number;
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
declare type CharacterType = 'Target' | 'Attacker';
declare type AnyEffectData = ModifierEffectData | SleepEffect | StunEffect | DOTEffect | StackingEffect | ReflexiveEffectData | CompoundEffect | ComboEffect | CurseEffect;
/** Effects of an attack */
declare type AnyEffect = ModifierEffect | SleepEffect | StunEffect | DOTEffect | StackingEffect | ReflexiveEffect | CompoundEffect | ComboEffect | CurseEffect;
declare type RollType = 'MaxHit' | 'MinHit' | 'CurrentHP' | 'MaxHP' | 'DamageDealt' | 'MagicScaling' | 'Fixed' | 'One' | 'Rend' | 'Poisoned' | 'Bleeding' | 'PoisonMax35' | 'PoisonMin35' | 'PoisonFixed100' | 'BurnFixed100' | 'BurnMaxHit100' | 'CursedFixed100' | 'MaxHitDR' | 'MaxHitScaledByHP' | 'MaxHitScaledByHP2x' | 'FixedPlusMaxHit50' | 'HPUnder90' | 'PoisonedMaxHit';
declare type EffectType = 'Modifier' | 'Sleep' | 'Stun' | 'DOT' | 'IntoTheMist' | 'MarkOfDeath' | 'Curse';
declare type EffectTurnData = {
    turns: number | 'Infinity';
};
interface CompoundEffect {
    type: 'Compound';
    chance: number;
    numEffects: number;
}
interface ModifierEffect {
    type: 'Modifier';
    /** Modifiers the attack applies */
    modifiers: CombatModifierData;
    /** Maximum stacks the effect can have */
    maxStacks: number;
    /** Number of stacks to add */
    stacksToAdd: number;
    /** Character the effect applies to */
    character: CharacterType;
    /** Number of turns the effect lasts for. 0 means it only lasts for the duration of the attack. */
    turns: number;
    /** Character that the turn timer counts down on */
    countsOn: CharacterType;
    /** Media to display for the effect */
    media: string;
}
declare type ModifierEffectData = Omit<ModifierEffect, 'turns'> & EffectTurnData;
interface SleepEffect {
    type: 'Sleep';
    /** Number of turns the effect applies for */
    turns: number;
    /** Chance that the effect applies */
    chance: number;
    /** Optional param that makes this effect only apply when target is under threshold */
    hitpointThreshold?: number;
}
interface StunEffect {
    type: 'Stun';
    /** Number of turns the effect applies for */
    turns: number;
    /** Chance that the effect applies */
    chance: number;
    flavour: StunFlavour;
}
interface ComboEffect {
    type: 'Combo';
    maxStacks: number;
    modifiers: CombatModifierData;
    media: string;
}
declare type StunFlavour = 'Stun' | 'Freeze';
declare type DOTType = 'Burn' | 'Bleed' | 'Poison' | 'Regen' | 'DeadlyPoison';
interface DOTEffect {
    type: 'DOT';
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
    type: 'Reflexive';
    modifiers: CombatModifierData;
    maxStacks: number;
    media: string;
    /** Number of turns the effect lasts */
    turns: number;
    name: string;
}
declare type ReflexiveEffectData = Omit<ReflexiveEffect, 'turns'> & EffectTurnData;
interface Noun {
    plain: string;
    possesive: string;
    pronoun: string;
    is: string;
}
declare const youNoun: Noun;
declare const enemyNoun: Noun;
