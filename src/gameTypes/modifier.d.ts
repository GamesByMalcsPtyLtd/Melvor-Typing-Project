declare type BaseModifierTemplate = {
    isNegative: boolean;
    description: string;
    modifyValue?: (value: number) => number | string;
    langDescription?: string;
};
interface StandardModifierTemplate extends BaseModifierTemplate {
    isSkill: false;
}
interface SkillModifierTemplate extends BaseModifierTemplate {
    isSkill: true;
}
declare type ModifierTag = SkillName | 'Combat';
declare class CombatModifiers implements CombatModifierObject<number> {
    increasedGlobalAccuracy: number;
    decreasedGlobalAccuracy: number;
    increasedMeleeAccuracyBonus: number;
    decreasedMeleeAccuracyBonus: number;
    increasedMeleeMaxHit: number;
    decreasedMeleeMaxHit: number;
    increasedMeleeEvasion: number;
    decreasedMeleeEvasion: number;
    increasedRangedAccuracyBonus: number;
    decreasedRangedAccuracyBonus: number;
    increasedRangedMaxHit: number;
    decreasedRangedMaxHit: number;
    increasedRangedEvasion: number;
    decreasedRangedEvasion: number;
    increasedMagicAccuracyBonus: number;
    decreasedMagicAccuracyBonus: number;
    increasedMagicMaxHit: number;
    decreasedMagicMaxHit: number;
    increasedMagicEvasion: number;
    decreasedMagicEvasion: number;
    increasedMaxHitFlat: number;
    decreasedMaxHitFlat: number;
    increasedMaxHitPercent: number;
    decreasedMaxHitPercent: number;
    increasedDamageReduction: number;
    decreasedDamageReduction: number;
    increasedHPRegenFlat: number;
    decreasedHPRegenFlat: number;
    decreasedAttackInterval: number;
    increasedAttackInterval: number;
    decreasedAttackIntervalPercent: number;
    increasedAttackIntervalPercent: number;
    increasedMaxHitpoints: number;
    decreasedMaxHitpoints: number;
    increasedFlatMaxHitpoints: number;
    decreasedFlatMaxHitpoints: number;
    increasedReflectDamage: number;
    decreasedReflectDamage: number;
    increasedFlatReflectDamage: number;
    decreasedFlatReflectDamage: number;
    increasedRolledReflectDamage: number;
    decreasedRolledReflectDamage: number;
    increasedLifesteal: number;
    decreasedLifesteal: number;
    increasedMeleeLifesteal: number;
    increasedRangedLifesteal: number;
    increasedMagicLifesteal: number;
    increasedBleedLifesteal: number;
    increasedBurnLifesteal: number;
    increasedPoisonLifesteal: number;
    decreasedMeleeLifesteal: number;
    decreasedRangedLifesteal: number;
    decreasedMagicLifesteal: number;
    decreasedBleedLifesteal: number;
    decreasedBurnLifesteal: number;
    decreasedPoisonLifesteal: number;
    increasedMeleeCritChance: number;
    increasedMeleeCritMult: number;
    decreasedMeleeCritChance: number;
    decreasedMeleeCritMult: number;
    increasedRangedCritChance: number;
    increasedRangedCritMult: number;
    decreasedRangedCritChance: number;
    decreasedRangedCritMult: number;
    increasedMagicCritChance: number;
    increasedMagicCritMult: number;
    decreasedMagicCritChance: number;
    decreasedMagicCritMult: number;
    increasedHitpointRegeneration: number;
    decreasedHitpointRegeneration: number;
    increasedMinHitBasedOnMaxHit: number;
    decreasedMinHitBasedOnMaxHit: number;
    increasedAttackRolls: number;
    decreasedAttackRolls: number;
    increasedFlatMinHit: number;
    decreasedFlatMinHit: number;
    increasedDamageTaken: number;
    decreasedDamageTaken: number;
    increasedConfusion: number;
    increasedDecay: number;
    increasedGlobalEvasion: number;
    decreasedGlobalEvasion: number;
    increasedMinAirSpellDmg: number;
    decreasedMinAirSpellDmg: number;
    increasedMinWaterSpellDmg: number;
    decreasedMinWaterSpellDmg: number;
    increasedMinEarthSpellDmg: number;
    decreasedMinEarthSpellDmg: number;
    increasedMinFireSpellDmg: number;
    decreasedMinFireSpellDmg: number;
    increasedMaxAirSpellDmg: number;
    decreasedMaxAirSpellDmg: number;
    increasedMaxWaterSpellDmg: number;
    decreasedMaxWaterSpellDmg: number;
    increasedMaxEarthSpellDmg: number;
    decreasedMaxEarthSpellDmg: number;
    increasedMaxFireSpellDmg: number;
    decreasedMaxFireSpellDmg: number;
    meleeProtection: number;
    rangedProtection: number;
    magicProtection: number;
    curseImmunity: number;
    increasedDamageReductionPercent: number;
    decreasedDamageReductionPercent: number;
    stunImmunity: number;
    sleepImmunity: number;
    burnImmunity: number;
    poisonImmunity: number;
    bleedImmunity: number;
    debuffImmunity: number;
    increasedRebirthChance: number;
    increasedChanceToApplyBurn: number;
    decreasedChanceToApplyBurn: number;
    decreasedDragonBreathDamage: number;
    increasedMeleeStunThreshold: number;
    increasedFrostburn: number;
    constructor();
    reset(): void;
    getActiveModifiers(): NameValuePair[];
    addModifiers(modData: CombatModifierData, negMult?: number, posMult?: number): void;
    subModifiers(modData: CombatModifierData, negMult?: number, posMult?: number): void;
    getDOTLifesteal(type: DOTType): number;
    getAccuracyModifier(type: AttackType): number;
    getEvasionModifier(type: AttackType): number;
    getMaxHitModifier(type: AttackType): number;
    getCritChance(type: AttackType): number;
    getCritMult(type: AttackType): number;
    getLifesteal(type: AttackType): number;
    getMaxHitFlatModifier(): number;
    getMinHitFromMaxHitModifier(): number;
    getFlatMinHitModifier(): number;
    getSpellMinHitModifier(spellType: number): number;
    getSpellMaxHitModifier(spellType: number): number;
    getMaxHPPercentModifier(): number;
    getMaxHPFlatModifier(): number;
    getAttackIntervalModifier(): number;
    getFlatAttackIntervalModifier(): number;
    getFlatDamageReductionModifier(): number;
    getProtectionValue(type: AttackType): number;
    getFlatReflectDamage(): number;
    getRolledReflectDamage(): number;
    getReflectPercent(): number;
}
declare class PlayerModifiers extends CombatModifiers implements StandardModifierObject<number> {
    increasedRuneProvision: number;
    increasedChanceToDoubleLootCombat: number;
    decreasedChanceToDoubleLootCombat: number;
    increasedSlayerCoins: number;
    decreasedSlayerCoins: number;
    increasedGPGlobal: number;
    decreasedGPGlobal: number;
    increasedGPFromMonsters: number;
    decreasedGPFromMonsters: number;
    increasedGPFromMonstersFlat: number;
    decreasedGPFromMonstersFlat: number;
    increasedGPFromThieving: number;
    decreasedGPFromThieving: number;
    increasedGPFromThievingFlat: number;
    decreasedGPFromThievingFlat: number;
    increasedDamageToBosses: number;
    decreasedDamageToBosses: number;
    increasedDamageToSlayerTasks: number;
    decreasedDamageToSlayerTasks: number;
    increasedDamageToSlayerAreaMonsters: number;
    decreasedDamageToSlayerAreaMonsters: number;
    increasedDamageToCombatAreaMonsters: number;
    decreasedDamageToCombatAreaMonsters: number;
    increasedDamageToDungeonMonsters: number;
    decreasedDamageToDungeonMonsters: number;
    increasedDamageToAllMonsters: number;
    decreasedDamageToAllMonsters: number;
    increasedAutoEatEfficiency: number;
    decreasedAutoEatEfficiency: number;
    increasedAutoEatThreshold: number;
    decreasedAutoEatThreshold: number;
    increasedAutoEatHPLimit: number;
    decreasedAutoEatHPLimit: number;
    increasedFoodHealingValue: number;
    decreasedFoodHealingValue: number;
    increasedChanceToPreservePrayerPoints: number;
    decreasedChanceToPreservePrayerPoints: number;
    increasedFlatPrayerCostReduction: number;
    decreasedFlatPrayerCostReduction: number;
    increasedAmmoPreservation: number;
    decreasedAmmoPreservation: number;
    increasedRunePreservation: number;
    decreasedRunePreservation: number;
    increasedSlayerAreaEffectNegationFlat: number;
    decreasedSlayerAreaEffectNegationFlat: number;
    decreasedMonsterRespawnTimer: number;
    increasedMonsterRespawnTimer: number;
    increasedGPFromSales: number;
    decreasedGPFromSales: number;
    increasedBankSpace: number;
    decreasedBankSpace: number;
    increasedBankSpaceShop: number;
    decreasedBankSpaceShop: number;
    increasedChanceToPreservePotionCharge: number;
    decreasedChanceToPreservePotionCharge: number;
    increasedChanceToDoubleLootThieving: number;
    decreasedChanceToDoubleLootThieving: number;
    increasedGlobalPreservationChance: number;
    decreasedGlobalPreservationChance: number;
    increasedStaminaPreservationChance: number;
    decreasedStaminaPreservationChance: number;
    increasedGlobalMasteryXP: number;
    decreasedGlobalMasteryXP: number;
    increasedGlobalSkillXP: number;
    decreasedGlobalSkillXP: number;
    increasedMaxStamina: number;
    decreasedMaxStamina: number;
    increasedMiningNodeHP: number;
    decreasedMiningNodeHP: number;
    dungeonEquipmentSwapping: number;
    increasedEquipmentSets: number;
    autoSlayerUnlocked: number;
    increasedTreeCutLimit: number;
    increasedChanceToDoubleItemsGlobal: number;
    decreasedChanceToDoubleItemsGlobal: number;
    increasedFarmingYield: number;
    decreasedFarmingYield: number;
    increasedStaminaPerObstacle: number;
    decreasedStaminaPerObstacle: number;
    increasedSlayerTaskLength: number;
    decreasedSlayerTaskLength: number;
    increasedStaminaCost: number;
    decreasedStaminaCost: number;
    increasedGPFromAgility: number;
    decreasedGPFromAgility: number;
    increasedChanceToDoubleOres: number;
    decreasedChanceToDoubleOres: number;
    golbinRaidWaveSkipCostReduction: number;
    golbinRaidIncreasedMinimumFood: number;
    golbinRaidIncreasedMaximumAmmo: number;
    golbinRaidIncreasedMaximumRunes: number;
    golbinRaidPrayerUnlocked: number;
    golbinRaidIncreasedPrayerLevel: number;
    golbinRaidIncreasedPrayerPointsStart: number;
    golbinRaidIncreasedPrayerPointsWave: number;
    golbinRaidPassiveSlotUnlocked: number;
    golbinRaidIncreasedStartingRuneCount: number;
    golbinRaidStartingWeapon: number;
    increasedPotionChargesFlat: number;
    decreasedPotionChargesFlat: number;
    increasedBirdNestDropRate: number;
    decreasedBirdNestDropRate: number;
    increasedChanceNoDamageMining: number;
    decreasedChanceNoDamageMining: number;
    increasedSeeingGoldChance: number;
    decreasedSeeingGoldChance: number;
    increasedChanceDoubleHarvest: number;
    decreasedChanceDoubleHarvest: number;
    increasedChanceForElementalRune: number;
    decreasedChanceForElementalRune: number;
    increasedElementalRuneGain: number;
    decreasedElementalRuneGain: number;
    increasedChanceRandomPotionHerblore: number;
    decreasedChanceRandomPotionHerblore: number;
    freeBonfires: number;
    increasedAltMagicSkillXP: number;
    decreasedAltMagicSkillXP: number;
    aprilFoolsIncreasedMovementSpeed: number;
    aprilFoolsDecreasedMovementSpeed: number;
    aprilFoolsIncreasedTeleportCost: number;
    aprilFoolsDecreasedTeleportCost: number;
    aprilFoolsIncreasedUpdateDelay: number;
    aprilFoolsDecreasedUpdateDelay: number;
    aprilFoolsIncreasedLemonGang: number;
    aprilFoolsDecreasedLemonGang: number;
    aprilFoolsIncreasedCarrotGang: number;
    aprilFoolsDecreasedCarrotGang: number;
    increasedGPOnEnemyHit: number;
    decreasedGPOnEnemyHit: number;
    increasedAdditionalRunecraftCountRunes: number;
    decreasedAdditionalRunecraftCountRunes: number;
    summoningSynergy_0_1: number;
    summoningSynergy_0_6: number;
    summoningSynergy_0_7: number;
    summoningSynergy_0_8: number;
    summoningSynergy_0_12: number;
    summoningSynergy_0_13: number;
    summoningSynergy_0_14: number;
    summoningSynergy_0_15: number;
    summoningSynergy_1_2: number;
    summoningSynergy_1_8: number;
    summoningSynergy_1_12: number;
    summoningSynergy_1_13: number;
    summoningSynergy_1_14: number;
    summoningSynergy_1_15: number;
    summoningSynergy_2_12: number;
    summoningSynergy_2_13: number;
    summoningSynergy_2_15: number;
    summoningSynergy_3_4: number;
    summoningSynergy_3_5: number;
    summoningSynergy_3_9: number;
    summoningSynergy_3_10: number;
    summoningSynergy_3_11: number;
    summoningSynergy_3_16: number;
    summoningSynergy_3_17: number;
    summoningSynergy_3_18: number;
    summoningSynergy_3_19: number;
    summoningSynergy_4_5: number;
    summoningSynergy_4_9: number;
    summoningSynergy_4_10: number;
    summoningSynergy_4_11: number;
    summoningSynergy_4_16: number;
    summoningSynergy_4_17: number;
    summoningSynergy_4_18: number;
    summoningSynergy_4_19: number;
    summoningSynergy_5_9: number;
    summoningSynergy_5_10: number;
    summoningSynergy_5_11: number;
    summoningSynergy_5_16: number;
    summoningSynergy_5_17: number;
    summoningSynergy_5_18: number;
    summoningSynergy_6_7: number;
    summoningSynergy_6_8: number;
    summoningSynergy_6_12: number;
    summoningSynergy_6_13: number;
    summoningSynergy_6_14: number;
    summoningSynergy_6_15: number;
    summoningSynergy_7_8: number;
    summoningSynergy_7_12: number;
    summoningSynergy_7_13: number;
    summoningSynergy_7_14: number;
    summoningSynergy_7_15: number;
    summoningSynergy_8_12: number;
    summoningSynergy_8_13: number;
    summoningSynergy_8_14: number;
    increasedRunecraftingEssencePreservation: number;
    summoningSynergy_9_11: number;
    summoningSynergy_9_16: number;
    summoningSynergy_9_17: number;
    summoningSynergy_9_18: number;
    summoningSynergy_9_19: number;
    summoningSynergy_10_11: number;
    summoningSynergy_10_16: number;
    summoningSynergy_10_17: number;
    summoningSynergy_10_18: number;
    summoningSynergy_10_19: number;
    summoningSynergy_11_16: number;
    summoningSynergy_11_17: number;
    summoningSynergy_11_18: number;
    summoningSynergy_11_19: number;
    summoningSynergy_12_13: number;
    summoningSynergy_12_14: number;
    summoningSynergy_13_14: number;
    summoningSynergy_16_17: number;
    summoningSynergy_16_18: number;
    summoningSynergy_16_19: number;
    summoningSynergy_17_18: number;
    summoningSynergy_17_19: number;
    summoningSynergy_18_19: number;
    increasedChanceToConvertSeedDrops: number;
    increasedMeleeStrengthBonus: number;
    decreasedMeleeStrengthBonus: number;
    increasedRangedStrengthBonus: number;
    decreasedRangedStrengthBonus: number;
    increasedMagicDamageBonus: number;
    decreasedMagicDamageBonus: number;
    increasedAgilityObstacleCost: number;
    decreasedAgilityObstacleCost: number;
    decreasedSecondaryFoodBurnChance: number;
    freeCompost: number;
    increasedCompostPreservationChance: number;
    increasedOffItemChance: number;
    increasedFiremakingCoalChance: number;
    increasedMiningGemChance: number;
    doubleOresMining: number;
    increasedBonusCoalMining: number;
    decreasedSmithingCoalCost: number;
    increasedThievingSuccessRate: number;
    increasedThievingSuccessCap: number;
    allowSignetDrops: number;
    bonusCoalOnDungeonCompletion: number;
    increasedMasteryPoolProgress: number;
    bypassSlayerItems: number;
    itemProtection: number;
    increasedRedemptionPercent: number;
    increasedRedemptionThreshold: number;
    autoLooting: number;
    autoBurying: number;
    increasedCombatStoppingThreshold: number;
    decreasedSummoningShardCost: number;
    increasedSummoningShardCost: number;
    increasedSummoningCreationCharges: number;
    decreasedSummoningCreationCharges: number;
    increasedSummoningChargePreservation: number;
    decreasedSummoningChargePreservation: number;
    decreasedPrayerCost: number;
    increasedPrayerCost: number;
    increasedGPMultiplierPer1MGP: number;
    increasedGPMultiplierCap: number;
    increasedGPMultiplierMin: number;
    allowAttackAugmentingMagic: number;
    autoEquipFoodUnlocked: number;
    autoSwapFoodUnlocked: number;
    increasedChanceSuccessfulCook: number;
    decreasedChanceSuccessfulCook: number;
    increasedChancePerfectCookGlobal: number;
    decreasedChancePerfectCookGlobal: number;
    increasedChancePerfectCookFire: number;
    decreasedChancePerfectCookFire: number;
    increasedChancePerfectCookFurnace: number;
    decreasedChancePerfectCookFurnace: number;
    increasedChancePerfectCookPot: number;
    decreasedChancePerfectCookPot: number;
    increasedThievingStealth: number;
    decreasedThievingStealth: number;
    increasedAltMagicRunePreservation: number;
    decreasedAltMagicRunePreservation: number;
    increasedMinThievingGP: number;
    decreasedMinThievingGP: number;
    increasedFishingSpecialChance: number;
    decreasedFishingSpecialChance: number;
    increasedAllotmentSeedCost: number;
    decreasedAllotmentSeedCost: number;
    increasedSummoningMaxHit: number;
    decreasedSummoningMaxHit: number;
    masteryToken: number;
    private skillModifiers;
    constructor();
    get combatLootDoubleChance(): number;
    get increasedCombatGP(): number;
    get runePreservationChance(): number;
    get ammoPreservationChance(): number;
    addModifiers(modifiers: ModifierData, negMult?: number, posMult?: number): void;
    getActiveModifiers(): NameValuePair[];
    reset(): void;
    getSkillModifierValue(key: SkillModifierKeys, skill: SkillID): number;
    getGPForDamageMultiplier(attackType: AttackType): number;
    get meleeStrengthBonusModifier(): number;
    get rangedStrengthBonusModifier(): number;
    get magicDamageModifier(): number;
    getHiddenSkillLevels(skill: SkillID): number;
    getActiveModifierDescriptions(): [string, string][];
}
declare type NameValuePair = {
    name: string;
    value: number;
};
declare class AgilityModifiers {
    private skillModifiers;
    private standardModifiers;
    constructor();
    addModifiers(modifiers: ModifierData, negMult?: number, posMult?: number): void;
    reset(): void;
    getActiveModifierDescriptions(): [string, string][];
}
declare class TargetModifiers {
    private modifiers;
    addModifiers(modifiers: CombatModifierData, negMult?: number, posMult?: number): void;
    addToCombatModifiers(combatModifiers: CombatModifiers): void;
    reset(): void;
}
declare function printPlayerModifier(key: SkillModifierKeys, value: [SkillID, number]): [string, string];
declare function printPlayerModifier(key: StandardModifierKeys, value: number): [string, string];
declare function isSkillEntry<Skill, Standard>(entry: ModifierEntry<Skill, Standard>): entry is SkillEntry<Skill>;
interface BaseConditionalModifier {
    itemID: ItemID;
    modifiers: ModifierData;
    active: boolean;
}
declare type ConditionalModifier = HitpointsCondition | GlovesCondition | BankItemCondition;
declare const conditionalModifierData: ConditionalModifier[];
declare type ConditionalTypes = 'Hitpoints' | 'GloveCharges' | 'BankItem';
/** Hitpoints are above a certain percent */
interface HitpointsCondition extends BaseConditionalModifier {
    type: 'Hitpoints';
    percent: number;
}
/** Gloves have charges */
interface GlovesCondition extends BaseConditionalModifier {
    type: 'GloveCharges';
    gloveID: number;
}
/** Item is present in the bank */
interface BankItemCondition extends BaseConditionalModifier {
    type: 'BankItem';
    bankItemID: ItemID;
}
declare function checkGloveCondition(condition: GlovesCondition): boolean;
declare const conditionalModifiers: Map<ItemID, ConditionalModifier>;
/** Describes modifiers and joins them as a list with no HTML formatting */
declare function describeModifierDataPlain(modifiers: ModifierData): string;
/** Describes modifiers and joins them as a list */
declare function describeModifierData(modifiers: ModifierData): string;
/** Gets span HTML that describes modifiers */
declare function getModifierDataSpans(modifiers: ModifierData, negMult?: number, posMult?: number): string[];
/** Modifiers that are common to characters in combat */
interface CombatModifierObject<Standard> {
    /** Increases accuracy rating by %: Implemented */
    increasedGlobalAccuracy: Standard;
    /** Decreases accuracy rating by %: Implemented */
    decreasedGlobalAccuracy: Standard;
    /** Increases accuracy rating by % when using Melee: Implemented */
    increasedMeleeAccuracyBonus: Standard;
    /** Decreases accuracy rating by % when using Melee: Implemented */
    decreasedMeleeAccuracyBonus: Standard;
    /** Increases max hit by % when using Melee: Implemented */
    increasedMeleeMaxHit: Standard;
    /** Decreases max hit by % when using Melee: Implemented */
    decreasedMeleeMaxHit: Standard;
    /** Increases melee evasion by %: Implemented */
    increasedMeleeEvasion: Standard;
    /** Decreases melee evasion by %: Implemented */
    decreasedMeleeEvasion: Standard;
    /** Increases accuracy rating by % when using Ranged: Implemented */
    increasedRangedAccuracyBonus: Standard;
    /** Decreases accuracy rating by % when using Ranged: Implemented */
    decreasedRangedAccuracyBonus: Standard;
    /** Increases max hit by % when using Ranged: Implemented */
    increasedRangedMaxHit: Standard;
    /** Decreases max hit by % when using Ranged: Implemented */
    decreasedRangedMaxHit: Standard;
    /** Increases ranged evasion by %: Implemented */
    increasedRangedEvasion: Standard;
    /** Decreases ranged evasion by %: Implemented */
    decreasedRangedEvasion: Standard;
    /** Increases accuracy rating by % when using Magic: Implemented */
    increasedMagicAccuracyBonus: Standard;
    /** Decreases accuracy rating by % when using Magic: Implemented */
    decreasedMagicAccuracyBonus: Standard;
    /** Increases max hit by % when using Magic: Implemented */
    increasedMagicMaxHit: Standard;
    /** Decreases max hit by % when using Magic: Implemented */
    decreasedMagicMaxHit: Standard;
    /** Increases magic evasion by %: Implemented */
    increasedMagicEvasion: Standard;
    /** Decreases magic evasion by %: Implemented */
    decreasedMagicEvasion: Standard;
    /** Increases max hit by value*numberMultiplier after other bonuses: Implemented */
    increasedMaxHitFlat: Standard;
    /** Decreases max hit by value*numberMultiplier after other bonuses: Implemented */
    decreasedMaxHitFlat: Standard;
    /** Increases max hit by %: Implemnted */
    increasedMaxHitPercent: Standard;
    /** Decreases max hit by %: Implemented */
    decreasedMaxHitPercent: Standard;
    /** Increases damage reduction by value: Implemented */
    increasedDamageReduction: Standard;
    /** Decreases damage reduction by value: Implemented */
    decreasedDamageReduction: Standard;
    /** Increases base HP regen by value*numberMultiplier: Implemented */
    increasedHPRegenFlat: Standard;
    /** Decreases base HP regen by value*numberMultiplier: Implemented */
    decreasedHPRegenFlat: Standard;
    /** Decreases attack interval by value [ms] before % bonuses: Implemented */
    decreasedAttackInterval: Standard;
    /** Increases attack interval by value [ms] before % bonuses: Implemented */
    increasedAttackInterval: Standard;
    /** Decreases attack interval by %: Implemented */
    decreasedAttackIntervalPercent: Standard;
    /** Increases attack interval by %: Implemented */
    increasedAttackIntervalPercent: Standard;
    /** Increases max Hitpoints by %: Implemented */
    increasedMaxHitpoints: Standard;
    /** Decreases max Hitpoints by %: Implemented */
    decreasedMaxHitpoints: Standard;
    /** Increases max Hitpoints by value*numberMultiplier: Implemented */
    increasedFlatMaxHitpoints: Standard;
    /** Decreases max Hitpoints by value*numberMultiplier: Implemented */
    decreasedFlatMaxHitpoints: Standard;
    /** Increase Reflect up to value% of damage taken from attacks: Implemented */
    increasedReflectDamage: Standard;
    /** Increase Reflect up to value% of damage taken from attacks: Implemented */
    decreasedReflectDamage: Standard;
    /** Increases Reflect by value*numberMultiplier: Implemented */
    increasedFlatReflectDamage: Standard;
    /** Increases Reflect by value*numberMultiplier: Implemented */
    decreasedFlatReflectDamage: Standard;
    /** Increases Reflect damage roll max by value*numberMultiplier: Implemented */
    increasedRolledReflectDamage: Standard;
    /** Decreases Reflect damage roll max by value*numberMultiplier: Implemented */
    decreasedRolledReflectDamage: Standard;
    /** Increases the % of attack damage the player is healed for by value: Implemented */
    increasedLifesteal: Standard;
    /** Decreases the % of attack damage the player is healed for by value: Implemented */
    decreasedLifesteal: Standard;
    /** Increases HP regeneration by %: Implemented */
    increasedHitpointRegeneration: Standard;
    /** Decreases HP regeneration by %: Implemented */
    decreasedHitpointRegeneration: Standard;
    /** Increases min hit by floor(max hit*value/100): Implemented */
    increasedMinHitBasedOnMaxHit: Standard;
    /** Decreases min hit by floor(max hit*value/100): Implemented */
    decreasedMinHitBasedOnMaxHit: Standard;
    /** Increases the number of times the player rolls to hit an enemy by value: Implemented */
    increasedAttackRolls: Standard;
    /** Decreases the number of times the player rolls to hit an enemy by value: Implemented */
    decreasedAttackRolls: Standard;
    /** Increases min hit by value*numberMultiplier: Implemented */
    increasedFlatMinHit: Standard;
    /** Decreases min hit by value*numberMultiplier: Implemented */
    decreasedFlatMinHit: Standard;
    /** Increases damage taken by %. Additive with other damage modifiers: Implemented */
    increasedDamageTaken: Standard;
    /** Decreases damage taken by %. Additive with other damage modifiers: Implemented */
    decreasedDamageTaken: Standard;
    /** Take value% of current hitpoints as damage when hitting a target: Implemented */
    increasedConfusion: Standard;
    /** Take value% of max hitpoints as damage when hitting a target: Implemented */
    increasedDecay: Standard;
    /** Increases all evasion values by %: Implemented */
    increasedGlobalEvasion: Standard;
    /** Decreases all evasion values by %: Implemented */
    decreasedGlobalEvasion: Standard;
    /** Increases min hit by value*numberMultiplier when using Air spells: Implemented */
    increasedMinAirSpellDmg: Standard;
    /** Decreases min hit by value*numberMultiplier when using Air spells: Implemented */
    decreasedMinAirSpellDmg: Standard;
    /** Increases min hit by value*numberMultiplier when using Water spells: Implemented */
    increasedMinWaterSpellDmg: Standard;
    /** Decreases min hit by value*numberMultiplier when using Water spells: Implemented */
    decreasedMinWaterSpellDmg: Standard;
    /** Increases min hit by value*numberMultiplier when using Earth spells: Implemented */
    increasedMinEarthSpellDmg: Standard;
    /** Decreases min hit by value*numberMultiplier when using Earth spells: Implemented */
    decreasedMinEarthSpellDmg: Standard;
    /** Increases min hit by value*numberMultiplier when using Fire spells: Implemented */
    increasedMinFireSpellDmg: Standard;
    /** Decreases min hit by value*numberMultiplier when using Fire spells: Implemented */
    decreasedMinFireSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Air spells: Implemented */
    increasedMaxAirSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Air spells: Implemented */
    decreasedMaxAirSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Water spells: Implemented */
    increasedMaxWaterSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Water spells: Implemented */
    decreasedMaxWaterSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Earth spells: Implemented */
    increasedMaxEarthSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Earth spells: Implemented */
    decreasedMaxEarthSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Fire spells: Implemented */
    increasedMaxFireSpellDmg: Standard;
    /** Increases max hit by value*numberMultiplier when using Fire spells: Implemented */
    decreasedMaxFireSpellDmg: Standard;
    /** Increases lifesteal from melee attacks by value%: Implemented */
    increasedMeleeLifesteal: Standard;
    /** Increases lifesteal from ranged attacks by value%: Implemented */
    increasedRangedLifesteal: Standard;
    /** Increases lifesteal from magic attacks by value%: Implemented */
    increasedMagicLifesteal: Standard;
    /** Increases lifesteal from bleed dots by value%: Implemented */
    increasedBleedLifesteal: Standard;
    /** Increases lifesteal from burn dots by value%: Implemented */
    increasedBurnLifesteal: Standard;
    /** Increases lifesteal from poison dots by value%: Implemented */
    increasedPoisonLifesteal: Standard;
    /** Decreases lifesteal from melee attacks by value%: Implemented */
    decreasedMeleeLifesteal: Standard;
    /** Decreases lifesteal from ranged attacks by value%: Implemented */
    decreasedRangedLifesteal: Standard;
    /** Decreases lifesteal from magic attacks by value%: Implemented */
    decreasedMagicLifesteal: Standard;
    /** Decreases lifesteal from bleed dots by value%: Implemented */
    decreasedBleedLifesteal: Standard;
    /** Decreases lifesteal from burn dots by value%: Implemented */
    decreasedBurnLifesteal: Standard;
    /** Decreases lifesteal from poison dots by value%: Implemented */
    decreasedPoisonLifesteal: Standard;
    /** Increases chance to perform a critical hit for melee attacks: Implemented */
    increasedMeleeCritChance: Standard;
    /** Increases critical hit multiplier for melee attacks: Implemented */
    increasedMeleeCritMult: Standard;
    /** Decreases chance to perform a critical hit for melee attacks: Implemented */
    decreasedMeleeCritChance: Standard;
    /** Decreases critical hit multiplier for melee attacks: Implemented */
    decreasedMeleeCritMult: Standard;
    /** Increases chance to perform a critical hit for ranged attacks: Implemented */
    increasedRangedCritChance: Standard;
    /** Decreases critical hit multiplier for ranged attacks: Implemented */
    increasedRangedCritMult: Standard;
    /** Decreases chance to perform a critical hit for ranged attacks: Implemented */
    decreasedRangedCritChance: Standard;
    /** Decreases critical hit multiplier for ranged attacks: Implemented */
    decreasedRangedCritMult: Standard;
    /** Increases chance to perform a critical hit for magic attacks: Implemented */
    increasedMagicCritChance: Standard;
    /** Increases critical hit multiplier for magic attacks: Implemented */
    increasedMagicCritMult: Standard;
    /** Decreases chance to perform a critical hit for magic attacks: Implemented */
    decreasedMagicCritChance: Standard;
    /** Decreases critical hit multiplier for magic attacks: Implemented */
    decreasedMagicCritMult: Standard;
    /** Sets chance to hit for melee attacks to value%. 100% provided immunity: Implemented*/
    meleeProtection: Standard;
    /** Sets chance to hit for ranged attacks to value%. 100% provided immunity: Implemented*/
    rangedProtection: Standard;
    /** Sets chance to hit for magic attacks to value%. 100% provided immunity: Implemented*/
    magicProtection: Standard;
    /** Provides immunity to curses: Implemented */
    curseImmunity: Standard;
    /** Increases damage reduction by %: Implemented */
    increasedDamageReductionPercent: Standard;
    /** Decreases damage reduction by %: Implemented */
    decreasedDamageReductionPercent: Standard;
    /** Provides immunity to stuns: Implemented */
    stunImmunity: Standard;
    /** Provides immunity to sleep: Implemented */
    sleepImmunity: Standard;
    /** Provides immunity to modifier effects that apply to targets, and stacking effects: Implemented */
    debuffImmunity: Standard;
    /** Provides immunity to burn DOTS: Implemented */
    burnImmunity: Standard;
    /** Provides immunity to poison DOTS: Implemented */
    poisonImmunity: Standard;
    /** Provides immunity to bleed DOTS: Implemented */
    bleedImmunity: Standard;
    /** Provides a value% chance to heal to max HP when going to 0 HP: Implemented */
    increasedRebirthChance: Standard;
    /** Increases the chance to apply burn to a target on attack, even if it misses by value%: Implemented */
    increasedChanceToApplyBurn: Standard;
    /** Decreases the chance to apply burn to a target on attack, even if it misses by value%: Implemented */
    decreasedChanceToApplyBurn: Standard;
    /** Decreases the damage from attacks with 'Dragonbreath' in their name by %. Stacks multiplicatively with other damage modifiers: Implemented */
    decreasedDragonBreathDamage: Standard;
    /** Increases the max hit threshold to stun a target for 1 turn with a melee attack: Implemented */
    increasedMeleeStunThreshold: Standard;
    /** Take extra damage per hit equal to value% current HP (of entity being hit) */
    increasedFrostburn: Standard;
}
/** Modifiers that are only common to the player */
interface StandardModifierObject<Standard> extends CombatModifierObject<Standard> {
    /** Increases chance to double bones and item drops by value: Implemented */
    increasedChanceToDoubleLootCombat: Standard;
    /** Decreases chance to double bones and item drops by value: Implemented */
    decreasedChanceToDoubleLootCombat: Standard;
    /** Increases slayer coin gains by %: Implemented */
    increasedSlayerCoins: Standard;
    /** Decreases slayer coin gains by %: Implemented */
    decreasedSlayerCoins: Standard;
    /** Increases GP gain by % from all sources except selling items: Implemented  */
    increasedGPGlobal: Standard;
    /** Decreases GP gain by % from all sources except selling items: Implemented  */
    decreasedGPGlobal: Standard;
    /** Increases GP gain by % from monster drops and confetti crossbow: Implemented */
    increasedGPFromMonsters: Standard;
    /** Decreases GP gain by % from monster drops and confetti crossbow: Implemented */
    decreasedGPFromMonsters: Standard;
    /** Increases GP gain by value from monster drops before % bonuses: Implemented */
    increasedGPFromMonstersFlat: Standard;
    /** Decreases GP gain by value from monster drops before % bonuses: Implemented */
    decreasedGPFromMonstersFlat: Standard;
    /** Increases GP gain by % from thieving: Implemented */
    increasedGPFromThieving: Standard;
    /** Decreases GP gain by % from thieving: Implemented */
    decreasedGPFromThieving: Standard;
    /** Increases GP gain by value from thieving before % bonuses: Implemented */
    increasedGPFromThievingFlat: Standard;
    /** Decreases GP gain by value from thieving before % bonuses: Implemented */
    decreasedGPFromThievingFlat: Standard;
    /** Increases damage dealt to boss monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    increasedDamageToBosses: Standard;
    /** Decreases damage dealt to boss monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    decreasedDamageToBosses: Standard;
    /** Increases damage dealt to slayer task monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    increasedDamageToSlayerTasks: Standard;
    /** Decreases damage dealt to slayer task monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    decreasedDamageToSlayerTasks: Standard;
    /** Increases damage dealt to slayer area monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    increasedDamageToSlayerAreaMonsters: Standard;
    /** Decreases damage dealt to slayer area monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    decreasedDamageToSlayerAreaMonsters: Standard;
    /** Increases damage dealt to combat area monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    increasedDamageToCombatAreaMonsters: Standard;
    /** Decreases damage dealt to combat area monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    decreasedDamageToCombatAreaMonsters: Standard;
    /** Increases damage dealt to dungeon monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    increasedDamageToDungeonMonsters: Standard;
    /** Decreases damage dealt to dungeon monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    decreasedDamageToDungeonMonsters: Standard;
    /** Increases damage dealt to monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    increasedDamageToAllMonsters: Standard;
    /** Decreases damage dealt to monsters by %: Implemented (excludes ancient magicks, confusion, decay) */
    decreasedDamageToAllMonsters: Standard;
    /** Increases the % efficiency of auto-eat by value: Implemented */
    increasedAutoEatEfficiency: Standard;
    /** Decreases the % efficiency of auto-eat by value: Implemented */
    decreasedAutoEatEfficiency: Standard;
    /** Increases the threshold % of maxHitpoints that will trigger auto-eat by value: Implemented */
    increasedAutoEatThreshold: Standard;
    /** Decreases the threshold % of maxHitpoints that will trigger auto-eat by value: Implemented */
    decreasedAutoEatThreshold: Standard;
    /** Increases the % of maxHitpoints that auto-eat heals to by value: Implemented */
    increasedAutoEatHPLimit: Standard;
    /** Decreases the % of maxHitpoints that auto-eat heals to by value: Implemented */
    decreasedAutoEatHPLimit: Standard;
    /** Increases the base healing value of food by %: Implemented */
    increasedFoodHealingValue: Standard;
    /** Decreases the base healing value of food by %: Implemented */
    decreasedFoodHealingValue: Standard;
    /** Increases the % chance to preserve prayerpoints by value: Implemented */
    increasedChanceToPreservePrayerPoints: Standard;
    /** Decreases the % chance to preserve prayerpoints by value: Implemented */
    decreasedChanceToPreservePrayerPoints: Standard;
    /** Decreases the quantity of prayerpoints consumed by a prayer by value: Implemented */
    increasedFlatPrayerCostReduction: Standard;
    /** Increases the quantity of prayerpoints consumed by a prayer by value: Implemented */
    decreasedFlatPrayerCostReduction: Standard;
    /** Increases the % chance to preserve ranged ammo by value: Implemented */
    increasedAmmoPreservation: Standard;
    /** Decreases the % chance to preserve ranged ammo by value: Implemented */
    decreasedAmmoPreservation: Standard;
    /** Increases the % chance to preserve runes by value: Implemented */
    increasedRunePreservation: Standard;
    /** Decreases the % chance to preserve runes by value: Implemented */
    decreasedRunePreservation: Standard;
    /** Increases slayer area effect % values by value: Implemented */
    increasedSlayerAreaEffectNegationFlat: Standard;
    /** Decreases slayer area effect % values by value: Implemented */
    decreasedSlayerAreaEffectNegationFlat: Standard;
    /** Decreases enemySpawnTimer by value [ms]: Implemented */
    decreasedMonsterRespawnTimer: Standard;
    /** Increases enemySpawnTimer by value [ms]: Implemented */
    increasedMonsterRespawnTimer: Standard;
    /** Increases the GP gained from item sales by %: Implemented, but not used. */
    increasedGPFromSales: Standard;
    /** Decreases the GP gained from item sales by %: Implemented, but not used. */
    decreasedGPFromSales: Standard;
    /** Increases maximum bank space by value: Implemented */
    increasedBankSpace: Standard;
    /** Decreases maximum bank space by value: Implemented */
    decreasedBankSpace: Standard;
    /** Increases maximum bank space by value, and increases bank upgrade cost via getBankUpgradeCost: Implemented */
    increasedBankSpaceShop: Standard;
    /** Decreases maximum bank space by value, and decreases bank upgrade cost via getBankUpgradeCost: Implemented */
    decreasedBankSpaceShop: Standard;
    /** Increases % chance to preserve potion charges by value: Implemented */
    increasedChanceToPreservePotionCharge: Standard;
    /** Decreases % chance to preserve potion charges by value: Implemented */
    decreasedChanceToPreservePotionCharge: Standard;
    /** Increases % chance to preserve resources in all skills by value: Implemented via calculateSkillPreservationChance*/
    increasedGlobalPreservationChance: Standard;
    /** Decreases % chance to preserve resources in all skills by value: Implemented via calculateSkillPreservationChance*/
    decreasedGlobalPreservationChance: Standard;
    /** Increases mastery xp earned from all skills by %: Implemented in getMasteryXpToAdd */
    increasedGlobalMasteryXP: Standard;
    /** Decreases mastery xp earned from all skills by %: Implemented in getMasteryXpToAdd */
    decreasedGlobalMasteryXP: Standard;
    /** Increases xp earned from all skills by %: Implemented in addXPBonuses */
    increasedGlobalSkillXP: Standard;
    /** Decreases xp earned from all skills by %: Implemented in addXPBonuses */
    decreasedGlobalSkillXP: Standard;
    /** Increases maxRockHP by value: Implemented*/
    increasedMiningNodeHP: Standard;
    /** Decreases maxRockHP by value: Implemented*/
    decreasedMiningNodeHP: Standard;
    /** Allows swapping equipment/equipment sets/food in dungeons: Implemented */
    dungeonEquipmentSwapping: Standard;
    /** Increases available equipment sets by value: Implemented */
    increasedEquipmentSets: Standard;
    /** Allows usage of autoslayer: Implemented */
    autoSlayerUnlocked: Standard;
    /** Increases the number of trees that can be cut by value: Implemented */
    increasedTreeCutLimit: Standard;
    /** Increases the % chance to double items from all skills by value: Implemented */
    increasedChanceToDoubleItemsGlobal: Standard;
    /** Decreases the % chance to double items from all skills by value: Implemented */
    decreasedChanceToDoubleItemsGlobal: Standard;
    /** Increases the harvest quantity of farming by %: Implemented */
    increasedFarmingYield: Standard;
    /** Decreases the harvest quantity of farming by %: Implemented */
    decreasedFarmingYield: Standard;
    /** Increases slayer task length by %: Implemented */
    increasedSlayerTaskLength: Standard;
    /** Decreases slayer task length by %: Implemented */
    decreasedSlayerTaskLength: Standard;
    /** Increases the GP from agility by %: Implemented in getAgilityGPMultiplier */
    increasedGPFromAgility: Standard;
    /** Decreases the GP from agility by %: Implemented in getAgilityGPMultiplier */
    decreasedGPFromAgility: Standard;
    /** Increases the % chance to double Ores from mining by value: Implemented */
    increasedChanceToDoubleOres: Standard;
    /** Decreases the % chance to double Ores from mining by value: Implemented */
    decreasedChanceToDoubleOres: Standard;
    /** Decreases golbin raid skip cost by %: Implemented */
    golbinRaidWaveSkipCostReduction: Standard;
    /** Increase the quantity of food from golbin raid by value: Implemented, possibly bugged as it just increases the amount, not just the min */
    golbinRaidIncreasedMinimumFood: Standard;
    /** Increases the maximum ammo quantity from goblin raid by %: Implemented */
    golbinRaidIncreasedMaximumAmmo: Standard;
    /** Increases the maximum rune quantity from goblin raid by %: Implemented */
    golbinRaidIncreasedMaximumRunes: Standard;
    /** Unlocks prayer in golbin raid: Implemented */
    golbinRaidPrayerUnlocked: Standard;
    /** Increases the prayer level in golbin raid by value: Implemented */
    golbinRaidIncreasedPrayerLevel: Standard;
    /** Increases the quantity of prayer points started with in golbin raid by value: Implemented */
    golbinRaidIncreasedPrayerPointsStart: Standard;
    /** Increases the quantity of prayer points received per wave in golbin raid by value: Implemented */
    golbinRaidIncreasedPrayerPointsWave: Standard;
    /** Unlocks passive slot selection on tenth wave of golbin raid: Implemented */
    golbinRaidPassiveSlotUnlocked: Standard;
    /** Increases the quantity of runes started with in golbin raid by value: Implemented */
    golbinRaidIncreasedStartingRuneCount: Standard;
    /** Changes the itemID of the starting weapon in golbin raid to value: Implemented */
    golbinRaidStartingWeapon: Standard;
    /** Increases the charges of potions by value: Implemented */
    increasedPotionChargesFlat: Standard;
    /** Decreases the charges of potions by value: Implemented */
    decreasedPotionChargesFlat: Standard;
    /** Increases the % chance to receive bird's nests from Woodcutting by value: Implemented*/
    increasedBirdNestDropRate: Standard;
    /** Decreases the % chance to receive bird's nests from Woodcutting by value: Implemented*/
    decreasedBirdNestDropRate: Standard;
    /** Increases the % chance to not use rockHP when mining by value: Implemented */
    increasedChanceNoDamageMining: Standard;
    /** Decreases the % chance to not use rockHP when mining by value: Implemented */
    decreasedChanceNoDamageMining: Standard;
    /** Increases the % chance to receive a gold bar when smelting silver bars by value: Implemented */
    increasedSeeingGoldChance: Standard;
    /** Decreases the % chance to receive a gold bar when smelting silver bars by value: Implemented */
    decreasedSeeingGoldChance: Standard;
    /** Increases the % chance to double crops from farming by value: Implemented via calculateChanceToDouble*/
    increasedChanceDoubleHarvest: Standard;
    /** Decreases the % chance to double crops from farming by value: Implemented via calculateChanceToDouble*/
    decreasedChanceDoubleHarvest: Standard;
    /** Increases the % chance to receive bonus elemental runes from runecrafting by value: Implemented */
    increasedChanceForElementalRune: Standard;
    /** Decreases the % chance to receive bonus elemental runes from runecrafting by value: Implemented */
    decreasedChanceForElementalRune: Standard;
    /** Increases the quantity of bonus elemental runes from runecrafting by value: Implemented */
    increasedElementalRuneGain: Standard;
    /** Decreases the quantity of bonus elemental runes from runecrafting by value: Implemented */
    decreasedElementalRuneGain: Standard;
    /** Increases the % chance that a random tier of potion is received from herblore by value: Implemented */
    increasedChanceRandomPotionHerblore: Standard;
    /** Decreases the % chance that a random tier of potion is received from herblore by value: Implemented */
    decreasedChanceRandomPotionHerblore: Standard;
    /** Effect of Bonfire Potions: Implemented */
    freeBonfires: Standard;
    /** Increases the Magic XP gained from alt magic by %: Implemented */
    increasedAltMagicSkillXP: Standard;
    /** Decreases the Magic XP gained from alt magic by %: Implemented */
    decreasedAltMagicSkillXP: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedMovementSpeed: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedMovementSpeed: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedTeleportCost: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedTeleportCost: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedUpdateDelay: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedUpdateDelay: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedLemonGang: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedLemonGang: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedCarrotGang: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedCarrotGang: Standard;
    increasedGPOnEnemyHit: Standard;
    decreasedGPOnEnemyHit: Standard;
    increasedAdditionalRunecraftCountRunes: Standard;
    decreasedAdditionalRunecraftCountRunes: Standard;
    summoningSynergy_0_1: Standard;
    summoningSynergy_0_6: Standard;
    summoningSynergy_0_7: Standard;
    summoningSynergy_0_8: Standard;
    summoningSynergy_0_12: Standard;
    summoningSynergy_0_13: Standard;
    summoningSynergy_0_14: Standard;
    summoningSynergy_0_15: Standard;
    summoningSynergy_1_2: Standard;
    summoningSynergy_1_8: Standard;
    summoningSynergy_1_12: Standard;
    summoningSynergy_1_13: Standard;
    summoningSynergy_1_14: Standard;
    summoningSynergy_1_15: Standard;
    summoningSynergy_2_12: Standard;
    summoningSynergy_2_13: Standard;
    summoningSynergy_2_15: Standard;
    summoningSynergy_3_4: Standard;
    summoningSynergy_3_5: Standard;
    summoningSynergy_3_9: Standard;
    summoningSynergy_3_10: Standard;
    summoningSynergy_3_11: Standard;
    summoningSynergy_3_16: Standard;
    summoningSynergy_3_17: Standard;
    summoningSynergy_3_18: Standard;
    summoningSynergy_3_19: Standard;
    summoningSynergy_4_5: Standard;
    summoningSynergy_4_9: Standard;
    summoningSynergy_4_10: Standard;
    summoningSynergy_4_11: Standard;
    summoningSynergy_4_16: Standard;
    summoningSynergy_4_17: Standard;
    summoningSynergy_4_18: Standard;
    summoningSynergy_4_19: Standard;
    summoningSynergy_5_9: Standard;
    summoningSynergy_5_10: Standard;
    summoningSynergy_5_11: Standard;
    summoningSynergy_5_16: Standard;
    summoningSynergy_5_17: Standard;
    summoningSynergy_5_18: Standard;
    summoningSynergy_6_7: Standard;
    summoningSynergy_6_8: Standard;
    summoningSynergy_6_12: Standard;
    summoningSynergy_6_13: Standard;
    summoningSynergy_6_14: Standard;
    summoningSynergy_6_15: Standard;
    summoningSynergy_7_8: Standard;
    summoningSynergy_7_12: Standard;
    summoningSynergy_7_13: Standard;
    summoningSynergy_7_14: Standard;
    summoningSynergy_7_15: Standard;
    summoningSynergy_8_12: Standard;
    summoningSynergy_8_13: Standard;
    summoningSynergy_8_14: Standard;
    increasedRunecraftingEssencePreservation: Standard;
    summoningSynergy_9_11: Standard;
    summoningSynergy_9_16: Standard;
    summoningSynergy_9_17: Standard;
    summoningSynergy_9_18: Standard;
    summoningSynergy_9_19: Standard;
    summoningSynergy_10_11: Standard;
    summoningSynergy_10_16: Standard;
    summoningSynergy_10_17: Standard;
    summoningSynergy_10_18: Standard;
    summoningSynergy_10_19: Standard;
    summoningSynergy_11_16: Standard;
    summoningSynergy_11_17: Standard;
    summoningSynergy_11_18: Standard;
    summoningSynergy_11_19: Standard;
    summoningSynergy_12_13: Standard;
    summoningSynergy_12_14: Standard;
    summoningSynergy_13_14: Standard;
    summoningSynergy_16_17: Standard;
    summoningSynergy_16_18: Standard;
    summoningSynergy_16_19: Standard;
    summoningSynergy_17_18: Standard;
    summoningSynergy_17_19: Standard;
    summoningSynergy_18_19: Standard;
    increasedChanceToConvertSeedDrops: Standard;
    /** Increases melee strength bonus of equipment by %*/
    increasedMeleeStrengthBonus: Standard;
    /** Decreases melee strength bonus of equipment by %*/
    decreasedMeleeStrengthBonus: Standard;
    /** Increases ranged strength bonus of equipment by %*/
    increasedRangedStrengthBonus: Standard;
    /** Decreases ranged strength bonus of equipment by %*/
    decreasedRangedStrengthBonus: Standard;
    /** Increases magic damage bonus of equipment by %*/
    increasedMagicDamageBonus: Standard;
    /** Increases magic damage bonus of equipment by %*/
    decreasedMagicDamageBonus: Standard;
    /** Increases all costs of agility obstacles by % */
    increasedAgilityObstacleCost: Standard;
    /** Decreases all costs of agility obstacles by % */
    decreasedAgilityObstacleCost: Standard;
    decreasedSecondaryFoodBurnChance: Standard;
    freeCompost: Standard;
    increasedCompostPreservationChance: Standard;
    increasedOffItemChance: Standard;
    increasedFiremakingCoalChance: Standard;
    increasedMiningGemChance: Standard;
    doubleOresMining: Standard;
    increasedBonusCoalMining: Standard;
    decreasedSmithingCoalCost: Standard;
    allowSignetDrops: Standard;
    bonusCoalOnDungeonCompletion: Standard;
    increasedMasteryPoolProgress: Standard;
    /** Doubles the rune provision of rune providing items */
    increasedRuneProvision: Standard;
    bypassSlayerItems: Standard;
    /** Prevents item loss on death */
    itemProtection: Standard;
    /** Threshold HP that redemption effect triggers */
    increasedRedemptionThreshold: Standard;
    /** HP that redemption effect heals to */
    increasedRedemptionPercent: Standard;
    autoLooting: Standard;
    autoBurying: Standard;
    increasedCombatStoppingThreshold: Standard;
    increasedSummoningChargePreservation: Standard;
    decreasedSummoningChargePreservation: Standard;
    increasedSummoningCreationCharges: Standard;
    decreasedSummoningCreationCharges: Standard;
    decreasedSummoningShardCost: Standard;
    increasedSummoningShardCost: Standard;
    decreasedPrayerCost: Standard;
    increasedPrayerCost: Standard;
    increasedGPMultiplierPer1MGP: Standard;
    increasedGPMultiplierCap: Standard;
    increasedGPMultiplierMin: Standard;
    allowAttackAugmentingMagic: Standard;
    /** Enables the Auto Equip Food from Active Cook */
    autoEquipFoodUnlocked: Standard;
    /** Enables auto swapping of food in combat */
    autoSwapFoodUnlocked: Standard;
    /** Chance to successfully cook food (replaced burning) */
    increasedChanceSuccessfulCook: Standard;
    decreasedChanceSuccessfulCook: Standard;
    increasedChancePerfectCookGlobal: Standard;
    decreasedChancePerfectCookGlobal: Standard;
    increasedChancePerfectCookFire: Standard;
    decreasedChancePerfectCookFire: Standard;
    increasedChancePerfectCookFurnace: Standard;
    decreasedChancePerfectCookFurnace: Standard;
    increasedChancePerfectCookPot: Standard;
    decreasedChancePerfectCookPot: Standard;
    increasedThievingStealth: Standard;
    decreasedThievingStealth: Standard;
    /** Increases rune preservation but only for alt. magic */
    increasedAltMagicRunePreservation: Standard;
    /** Decreases rune preservation but only for alt. magic */
    decreasedAltMagicRunePreservation: Standard;
    /** Increases the minimum gp from thieving (e.g. +20% changes roll from 1-100 to 20-100) */
    increasedMinThievingGP: Standard;
    /** Decreases the minimum gp from thieving (e.g. -10% changes roll from 20-100 to 10-100) */
    decreasedMinThievingGP: Standard;
    /** Increases the chance for a special item from fishing (shifted from fish chance) */
    increasedFishingSpecialChance: Standard;
    /** Decreases the chance for a special item from fishing (shifted into fish chance) */
    decreasedFishingSpecialChance: Standard;
    /** Increases the quantity of seeds required to plant allotments by amount */
    increasedAllotmentSeedCost: Standard;
    /** Decreases the quantity of seeds required to plant allotments by amount */
    decreasedAllotmentSeedCost: Standard;
    increasedSummoningMaxHit: Standard;
    decreasedSummoningMaxHit: Standard;
    masteryToken: Standard;
}
interface SkillModifierObject<Skill> {
    /** Increases the skill level used to compute combat stats by value: Implemented */
    increasedHiddenSkillLevel: Skill;
    /** Decreases the skill level used to compute combat stats by value: Implemented */
    decreasedHiddenSkillLevel: Skill;
    /** Decreases skill interval by value [ms] before % bonuses: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    decreasedSkillInterval: Skill;
    /** Increases skill interval by value [ms] before % bonuses: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    increasedSkillInterval: Skill;
    /** Decreases skill interval by %: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    decreasedSkillIntervalPercent: Skill;
    /** Increases skill interval by %: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    increasedSkillIntervalPercent: Skill;
    /** Increases % chance to preserve resources in skill by value: Implemented via getTotalFromModifierArray in calculateSkillPreservationChance */
    increasedSkillPreservationChance: Skill;
    /** Decreases % chance to preserve resources in skill by value: Implemented via getTotalFromModifierArray in calculateSkillPreservationChance */
    decreasedSkillPreservationChance: Skill;
    /** Increases mastery xp earned for skill by %: Implemented via getTotalFromModifierArray in getMasteryXpToAdd */
    increasedMasteryXP: Skill;
    /** Decreases mastery xp earned for skill by %: Implemented via getTotalFromModifierArray in getMasteryXpToAdd */
    decreasedMasteryXP: Skill;
    /** Increases xp earned from skill by %: Implemented via getTotalFromModifierArray in addXPBonuses */
    increasedSkillXP: Skill;
    /** Decreases xp earned from skill by %: Implemented via getTotalFromModifierArray in addXPBonuses */
    decreasedSkillXP: Skill;
    /** Increases the % chance to double items from a skill by value: Partially Implemented. */
    increasedChanceToDoubleItemsSkill: Skill;
    /** Decreases the % chance to double items from a skill by value: Partially Implemented. */
    decreasedChanceToDoubleItemsSkill: Skill;
    increasedChanceAdditionalSkillResource: Skill;
    decreasedChanceAdditionalSkillResource: Skill;
    /** Doubles the items received from a skill: Implemented for skills that have this modifier */
    doubleItemsSkill: Skill;
}
declare type ModifierObject<Skill, Standard> = StandardModifierObject<Standard> & SkillModifierObject<Skill>;
declare type SkillModifierData = [SkillID, number];
declare type SkillModifierActive = {
    id: SkillID;
    value: number;
};
declare type CombatModifierData = Partial<CombatModifierObject<number>>;
declare type ModifierData = Partial<ModifierObject<SkillModifierData[], number>>;
declare type ModifierActive = Partial<ModifierObject<SkillModifierActive[], number>>;
declare type CombatModifierKey = keyof CombatModifierObject<any>;
declare type ModifierKeys = keyof ModifierObject<any, any>;
declare type SkillModifierKeys = keyof SkillModifierObject<any>;
declare type StandardModifierKeys = keyof StandardModifierObject<any>;
declare type SkillEntry<T> = [SkillModifierKeys, T];
declare type StandardEntry<T> = [StandardModifierKeys, T];
declare type ModifierEntry<Skill, Standard> = SkillEntry<Skill> | StandardEntry<Standard>;
declare type ModifierDataEntry = ModifierEntry<SkillModifierData[], number>;
declare type ModifierActiveEntry = ModifierEntry<SkillModifierActive[], number>;
