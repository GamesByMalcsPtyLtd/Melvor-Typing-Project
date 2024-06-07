declare type CharacterType = 'Target' | 'Attacker';
declare type DamageRollType = 'MaxHit' | 'MinHit' | 'CurrentHP' | 'CurrentHPCapped200' | 'MaxHP' | 'DamageDealt' | 'DamageTaken' | 'MagicScaling' | 'Fixed' | 'One' | 'Rend' | 'Poisoned' | 'Bleeding' | 'PoisonMax35' | 'PoisonMin35' | 'PoisonFixed100' | 'BurnFixed100' | 'BurnMaxHit100' | 'CursedFixed100' | 'MaxHitDR' | 'MaxHitScaledByHP' | 'MaxHitScaledByHP2x' | 'FixedPlusMaxHit50' | 'HPUnder90' | 'PoisonedMaxHit' | 'Reflection' | 'DefenceLevel' | 'Crystallize' | 'BaseMaxHP';
declare type DOTType = 'Burn' | 'Bleed' | 'Poison' | 'Regen' | 'DeadlyPoison' | 'BarrierBleed' | 'BarrierBurn' | 'Laceration' | 'Voidburst' | 'Ablaze' | 'Toxin';
/** Damage of an attack */
interface BaseDamage {
    /** Which character to use for roll */
    character: CharacterType;
    /** Value type to use for maximum */
    maxRoll: DamageRollType;
    /** Percentage of maxRoll */
    maxPercent: number;
    /** Whether to roll for damage or simply use the max value */
    roll: boolean;
    /** Optionally apply this damage only on a specific hit of the attack */
    attackCount?: number;
}
interface RolledDamage extends BaseDamage {
    roll: true;
    /** Roll type to use for minimum */
    minRoll: DamageRollType;
    /** Percentage of minRoll */
    minPercent: number;
}
interface FixedDamage extends BaseDamage {
    roll: false;
}
declare type Damage = RolledDamage | FixedDamage;
/** Convenience class for generating normal damage */
declare class NormalDamage implements RolledDamage {
    character: CharacterType;
    maxRoll: DamageRollType;
    maxPercent: number;
    minRoll: DamageRollType;
    minPercent: number;
    roll: true;
    attackCount?: number;
    constructor(amplitude: number, attackCount?: number);
}
/**
 * Gets a Callback Function for Array<Damage>.reduce. Used to roll the damage from Special Attacks and Combat Effects
 * @param attacker The character performing the Attack
 * @param target The character recieving the Attack
 * @param prevDamage The Damage Dealt when the Combat Effect was applied
 * @param damageTaken The Damage Taken when the Combat Effect was applied
 * @returns A Callback function for use in Array<Damage>.reduce
 */
declare function damageReducer(attacker: Character, target: Character, prevDamage?: number, damageTaken?: number): (totalDamage: number, damage: Damage) => number;
/**
 * Gets the maximum amount of damage that can be rolled by a Damage object during a Special Attack
 * @param damage The damage object
 * @param attacker The character performing the Attack
 * @param target The character recieving the Attack
 * @param prevDamage The cumulative damage dealt with the Attack
 * @param damageTaken The value to use for DamageDealt damage rolls
 * @returns The maximum amount of damage that can be rolled
 */
declare function getMaxDamage(damage: Damage, attacker: Character, target: Character, prevDamage?: number, damageTaken?: number): number;
/**
 * Computes the minimum/maximum range of damage that a Damage object can deal
 * @param character The Character to use the stats of
 * @param type The type of damage roll
 * @param percent The scaling of the damage range (Note: This is not always actually a percent)
 * @param damageDealt The cumulative damage dealt by a SpecialAttack, or the damage dealt when the CombatEffect was applied
 * @param damageTaken The damage taken when the CombatEffect was applied
 * @returns
 */
declare function getDamageRoll(character: Character, type: DamageRollType, percent: number, damageDealt?: number, damageTaken?: number): number;
interface DamageRollData {
    formatPercent: (value: string) => string;
    formatName: (name: string) => string;
    modValue?: (value: number) => number;
}
/** Data associated with Each DamageRollType */
declare const rollData: Record<DamageRollType, DamageRollData>;
/**
 * Embeds the HTML of an image into a description string.
 * @param description The description to modify
 * @returns
 */
declare const applyDescriptionModifications: (description: string) => string;
/** Gets the prefix to use for a special attack's effect's string template data */
declare function effectPrefix(preHit: boolean, idx: number): string;
/**
 * Adds string template data to an existing object for a Special Attack's effect
 * @param data The data object to add to
 * @param applicator The effect applicator
 * @param preHit If this effect applicator is from the prehit array of the attack
 * @param idx The index of the applicator in the attacks prehit/onhit array
 */
declare function addEffectApplicatorTemplateData(data: StringDictionary<string>, applicator: AnyCombatEffectApplicator, preHit: boolean, idx: number): void;
/**
 * Adds string template data to an existing object for a damage array
 * @param data The data object to add to
 * @param damage The damage array
 * @param prefix A prefix for the template data keys
 */
declare function addDamageTemplateData(data: StringDictionary<string>, damage: Damage[], prefix: string): void;
interface Noun {
    plain: string;
    possesive: string;
    pronoun: string;
    is: string;
}
/** Utility object for generating attack descriptions */
declare const attackDescriptions: {
    generateAttackDescription: (attack: SpecialAttack, attackerNoun: Noun, targetNoun: Noun) => string;
    attackDescriptors: StringDictionary<(attack: SpecialAttack, attackerNoun: Noun, targetNoun: Noun) => string>;
    youNoun: Noun;
    enemyNoun: Noun;
};
declare const generateAttackDescription: (attack: SpecialAttack, attackerNoun: Noun, targetNoun: Noun) => string;
declare const attackDescriptors: StringDictionary<(attack: SpecialAttack, attackerNoun: Noun, targetNoun: Noun) => string>;
declare const youNoun: Noun;
declare const enemyNoun: Noun;
