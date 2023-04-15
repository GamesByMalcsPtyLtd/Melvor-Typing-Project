declare type BaseModifierTemplate = {
    isNegative: boolean;
    description: string;
    modifyValue?: (value: number) => number | string;
    langDescription?: string;
    tags: string[];
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
    decreasedMeleeCritChance: number;
    increasedRangedCritChance: number;
    decreasedRangedCritChance: number;
    increasedMagicCritChance: number;
    decreasedMagicCritChance: number;
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
    freezeImmunity: number;
    increasedRebirthChance: number;
    increasedChanceToApplyBurn: number;
    decreasedChanceToApplyBurn: number;
    decreasedDragonBreathDamage: number;
    increasedMeleeStunThreshold: number;
    increasedFrostburn: number;
    increasedAfflictionChance: number;
    otherStyleImmunity: number;
    meleeImmunity: number;
    rangedImmunity: number;
    magicImmunity: number;
    slowImmunity: number;
    increasedEndOfTurnHealing2: number;
    increasedEndOfTurnHealing3: number;
    increasedEndOfTurnHealing5: number;
    increasedChanceToApplyPoison: number;
    increasedChanceToApplyFrostburn: number;
    increasedMeleeStunChance: number;
    increasedElementalEffectChance: number;
    frostBurnImmunity: number;
    increasedPoisonReflectChance: number;
    increasedBleedReflectChance: number;
    increasedMinNatureSpellDamageBasedOnMaxHit: number;
    increasedTotalBleedDamage: number;
    increasedChanceToIncreaseStunDuration: number;
    increasedSurgeSpellAccuracy: number;
    increasedSurgeSpellMaxHit: number;
    decreasedRegenerationInterval: number;
    increasedOnHitSlowMagnitude: number;
    globalEvasionHPScaling: number;
    doubleBoneDrops: number;
    increasedPrayerPointsWhenHit: number;
    increasedFlatMeleeAccuracyBonusPerAttackInterval: number;
    decreasedFlatMeleeAccuracyBonusPerAttackInterval: number;
    increasedFlatMeleeStrengthBonusPerAttackInterval: number;
    decreasedFlatMeleeStrengthBonusPerAttackInterval: number;
    increasedFlatRangedAccuracyBonusPerAttackInterval: number;
    decreasedFlatRangedAccuracyBonusPerAttackInterval: number;
    increasedFlatRangedStrengthBonusPerAttackInterval: number;
    decreasedFlatRangedStrengthBonusPerAttackInterval: number;
    increasedFlatMagicAccuracyBonusPerAttackInterval: number;
    decreasedFlatMagicAccuracyBonusPerAttackInterval: number;
    increasedDamageReductionAgainstMelee: number;
    decreasedDamageReductionAgainstMelee: number;
    increasedDamageReductionAgainstRanged: number;
    decreasedDamageReductionAgainstRanged: number;
    increasedDamageReductionAgainstMagic: number;
    decreasedDamageReductionAgainstMagic: number;
    increasedDamageReductionWithMagic2HWeapon: number;
    decreasedDamageReductionWithMagic2HWeapon: number;
    increasedMaxHitPercentBasedOnEnemyDamageReduction: number;
    decreasedMaxHitPercentBasedOnEnemyDamageReduction: number;
    increasedMeleeMaxHitBonusAgainstRanged: number;
    decreasedMeleeMaxHitBonusAgainstRanged: number;
    increasedRangedMaxHitBonusAgainstMagic: number;
    decreasedRangedMaxHitBonusAgainstMagic: number;
    increasedMagicMaxHitBonusAgainstMelee: number;
    decreasedMagicMaxHitBonusAgainstMelee: number;
    gainSlayerCoinsBasedOnEnemyCombatLevelMelee: number;
    gainSlayerCoinsBasedOnEnemyCombatLevelRanged: number;
    gainSlayerCoinsBasedOnEnemyCombatLevelMagic: number;
    increasedDamageReductionAgainstBosses: number;
    decreasedDamageReductionAgainstBosses: number;
    increasedChanceDoubleSlayerTaskKill: number;
    decreasedChanceDoubleSlayerTaskKill: number;
    increasedDamageTakenAddedAsPrayerPoints: number;
    decreasedDamageTakenAddedAsPrayerPoints: number;
    globalAccuracyHPScaling: number;
    decreasedEnemyDamageReduction: number;
    increasedEnemyDamageReduction: number;
    increasedGlobalStunChance: number;
    decreasedGlobalStunChance: number;
    increasedGlobalSleepChance: number;
    decreasedGlobalSleepChance: number;
    increased15SlowStunChance2Turns: number;
    decreased15SlowStunChance2Turns: number;
    increasedGPPerDamage: number;
    decreasedGPPerDamage: number;
    increasedGPBasedOnEnemyCombatLevel: number;
    increasedGPBasedOnSummonDamage: number;
    decreasedGPBasedOnSummonDamage: number;
    increasedSlayerCoinsPerDamage: number;
    decreasedSlayerCoinsPerDamage: number;
    increasedChanceToIncreaseSleepDuration: number;
    decreasedChanceToIncreaseSleepDuration: number;
    increasedChanceToAvoidStun: number;
    decreasedChanceToAvoidStun: number;
    increasedChanceToAvoidSleep: number;
    decreasedChanceToAvoidSleep: number;
    increasedHealWhenStunned: number;
    decreasedHealWhenStunned: number;
    increasedHealWhenSleep: number;
    decreasedHealWhenSleep: number;
    increasedChanceToApplyDeadlyPoisonWhenPoisoned: number;
    decreasedChanceToApplyDeadlyPoisonWhenPoisoned: number;
    increasedDamageTakenPerAttack: number;
    decreasedDamageTakenPerAttack: number;
    increasedDamageTakenWhenAsleep: number;
    decreasedDamageTakenWhenAsleep: number;
    increasedDamageTakenWhenStunned: number;
    decreasedDamageTakenWhenStunned: number;
    decreasedPlayerDamageReduction: number;
    increasedDamageDealtIfPoisoned: number;
    decreasedDamageDealtIfPoisoned: number;
    increasedMeleeMaxHitFlat: number;
    decreasedMeleeMaxHitFlat: number;
    increasedRangedMaxHitFlat: number;
    decreasedRangedMaxHitFlat: number;
    increasedMagicMaxHitFlat: number;
    decreasedMagicMaxHitFlat: number;
    increasedChanceToApplyShock: number;
    increasedAbsorbingSkin: number;
    increasedDuality: number;
    increasedChanceToApplyDecayCurse: number;
    increasedRage: number;
    increasedCurseLifesteal: number;
    applyRandomCurseOnSpawn: number;
    increasedChanceDarkBlade: number;
    increasedMaxHitPercentBasedOnDamageReduction: number;
    decreasedMaxHitPercentBasedOnDamageReduction: number;
    halveDamageReduction: number;
    increasedLifestealBasedOnHPRegenEffectiveness: number;
    disableHPRegeneration: number;
    increasedMinMeteorShowerSpellDamage: number;
    increasedEndOfTurnEvasion2: number;
    decreaseEnemyEvasionOnStun: number;
    decreaseEnemyEvasionOnSleep: number;
    decreasedEvasionBasedOnDR: number;
    healOnHitBasedOnTargetDR: number;
    doubleLifesteal: number;
    increasedMaxHPBurnDamage: number;
    increasedChanceToApplyDeadlyPoison: number;
    disableLifesteal: number;
    increasedSlayerCoinsBasedOnTargetDR: number;
    increasedSlayerCoinsPerPoisonDamage: number;
    increasedChanceToAvoidCurses: number;
    applyMadnessCurseOnSpawn: number;
    applyTormentCurseOnSpawn: number;
    applyDespairCurseOnSpawn: number;
    increasedMinPoisonArchaicDmg: number;
    increasedMinInfernalArchaicDmg: number;
    increasedMinLightningArchaicDmg: number;
    reducedTargetDamageRedcutionIfBleeding: number;
    increasedAssassin: number;
    summoningSynergy_Devil_Eagle: number;
    growingMadnessPassive: number;
    momentInTimePassive: number;
    reignOverTimePassive: number;
    increasedChanceToApplySleepToTargetWhenHit: number;
    increasedPlayerRage: number;
    increasedLeviathan: number;
    shadowCloak: number;
    increasedPoisonSpellAccuracy: number;
    increasedInfernalSpellAccuracy: number;
    increasedLightningSpellAccuracy: number;
    decreasedBurnDOTDamage: number;
    increasedBurnDOTDamage: number;
    decreasedBleedDOTDamage: number;
    increasedBleedDOTDamage: number;
    increasedPoisonDOTDamage: number;
    decreasedPoisonDOTDamage: number;
    increasedDeadlyPoisonDOTDamage: number;
    decreasedDeadlyPoisonDOTDamage: number;
    increased30Slow5TurnsChance: number;
    increasedEndOfTurnMaxHealing2: number;
    increasedEvasionAgainstMelee: number;
    increasedEvasionAgainstRanged: number;
    increasedEvasionAgainstMagic: number;
    constructor();
    reset(): void;
    getActiveModifiers(): NameValuePair[];
    addModifiers(modData: CombatModifierData, negMult?: number, posMult?: number): void;
    addArrayModifiers(modArray: CombatModifierArray): void;
    subArrayModifiers(modArray: CombatModifierArray): void;
    subModifiers(modData: CombatModifierData, negMult?: number, posMult?: number): void;
    getDOTLifesteal(type: DOTType): number;
    getDOTDamageModifier(type: DOTType): number;
    getAccuracyModifier(type: AttackType): number;
    getEvasionModifier(type: AttackType): number;
    getMaxHitModifier(type: AttackType): number;
    getCritChance(type: AttackType): number;
    getLifesteal(type: AttackType): number;
    getMaxHitFlatModifier(type: AttackType): number;
    getMinHitFromMaxHitModifier(): number;
    getFlatMinHitModifier(): number;
    getSpellMinHitModifier(spellType: number): number;
    getArchaicMinHitModifier(archaicSpell: ArchaicSpell): number;
    getSpellMaxHitModifier(spellType: number): number;
    getMaxHPPercentModifier(): number;
    getMaxHPFlatModifier(): number;
    getAttackIntervalModifier(): number;
    getFlatAttackIntervalModifier(): number;
    getFlatDamageReductionModifier(): number;
    getProtectionValue(type: AttackType): number;
    getImmunity(type: AttackType): boolean;
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
    increasedGPFromMonstersFlatBasedOnEvasion: number;
    increasedGPPerMeleeDamage: number;
    increasedGPPerRangedDamage: number;
    increasedGPPerMagicDamage: number;
    increasedGPFromSlayerTaskMonsters: number;
    increasedGPWhenHitBasedOnDR: number;
    increasedGPOnRegenBasedOnHPGain: number;
    increasedGPFromBurningMonsters: number;
    summoningSynergy_1_2: number;
    increasedFlatMagicDefenceBonus: number;
    decreasedSlayerTaskMonsterAccuracy: number;
    increasedMeleeRangedDefenceBonusBasedOnDR: number;
    increasedHPRegenWhenEnemyHasMoreEvasion: number;
    summoningSynergy_1_15: number;
    increasedSCfromLifesteal: number;
    increasedHealingOnAttackBasedOnDR: number;
    increasedSummoningAttackLifesteal: number;
    increasedWoodcuttingGemChance: number;
    increasedBonusFishingSpecialChance: number;
    summoningSynergy_3_9: number;
    increasedRunecraftingStavePreservation: number;
    summoningSynergy_Ent_Leprechaun: number;
    increasedWoodcuttingJewelryChance: number;
    summoningSynergy_3_17: number;
    increasedMinimumBirdNestsWhenPotionActive: number;
    summoningSynergy_3_19: number;
    summoningSynergy_4_5: number;
    decreasedCookingSuccessCap: number;
    doubleRuneEssenceMining: number;
    summoningSynergy_Mole_Leprechaun: number;
    doubleSilverGoldMining: number;
    increasedMiningBarChance: number;
    increasedMiningNodeHPWithPerfectSwing: number;
    summoningSynergy_4_19: number;
    increasedFishingCookedChance: number;
    increasedRunecraftingWaterComboRunes: number;
    summoningSynergy_Octopus_Leprechaun: number;
    increasedCraftingJewelryRandomGemChance: number;
    increasedSmithingDragonGearPreservation: number;
    increasedFishermansPotionCharges: number;
    summoningSynergy_6_7: number;
    increasedMagicMinHitBasedOnMaxHitSlayerTask: number;
    increasedMeleeMaxHitBasedOnMaxHitSlayerTask: number;
    summoningSynergy_6_13: number;
    increasedFlatHPRegenBasedOnMeleeMaxHit: number;
    summoningSynergy_6_15: number;
    summoningSynergy_7_8: number;
    increasedRangedMaxHitBasedOnMaxHitSlayerTask: number;
    summoningSynergy_7_13: number;
    increasedFlatHPRegenBasedOnRangedMaxHit: number;
    increasedChanceToApplyBurnWithRanged: number;
    increasedSlayerCoinsPerMagicDamageSlayerTask: number;
    summoningSynergy_8_13: number;
    increasedFlatHPRegenBasedOnMagicMaxHit: number;
    increasedRunecraftingEssencePreservation: number;
    thievingChefNoDamage: number;
    decreasedFlatCraftingDragonhideCost: number;
    summoningSynergy_9_17: number;
    increasedGenerousCookPotionCharges: number;
    summoningSynergy_9_19: number;
    increasedRuneEssenceThievingMiner: number;
    increasedChanceToDoubleLeatherDragonhideCrafting: number;
    summoningSynergy_10_17: number;
    giveRandomComboRunesRunecrafting: number;
    increasedFireRunesWhenMakingElementalRunes: number;
    increasedThievingAutoSellPrice: number;
    increasedRandomBarChanceThievingMiner: number;
    increasedHerbSackChanceThievingFarmer: number;
    summoningSynergy_Leprechaun_Devil: number;
    increasedDamageReductionAgainstSlayerTasks: number;
    increasedHitpointRegenerationAgainstSlayerTasks: number;
    summoningSynergy_13_14: number;
    increasedCraftingJewelryPreservation: number;
    increasedCraftingPotionCharges: number;
    increasedFiremakingLogGP: number;
    doubleSilverGoldSmithingWithSeeingGold: number;
    decreasedFlatSmithingCoalCost: number;
    summoningSynergy_Bear_Devil: number;
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
    freeProtectItem: number;
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
    increasedChanceForDiamondFiremaking: number;
    decreasedChanceForDiamondFiremaking: number;
    increasedNonMagicPoisonChance: number;
    increasedChanceToPreserveFood: number;
    allowLootContainerStacking: number;
    infiniteLootContainer: number;
    increasedBaseStardustDropQty: number;
    increasedGPFromFiremaking: number;
    decreasedGPFromFiremaking: number;
    increasedWoodcuttingXPAddedAsFiremakingXP: number;
    decreasedWoodcuttingXPAddedAsFiremakingXP: number;
    increasedChanceForOneExtraOre: number;
    decreasedChanceForOneExtraOre: number;
    increasedChanceForQualitySuperiorGem: number;
    decreasedChanceForQualitySuperiorGem: number;
    increasedMeteoriteOre: number;
    increasedChanceForAshInWoodcutting: number;
    decreasedChanceForAshInWoodcutting: number;
    increasedChanceForAshInFiremaking: number;
    decreasedChanceForAshInFiremaking: number;
    increasedChanceForStardustInFiremaking: number;
    decreasedChanceForStardustInFiremaking: number;
    increasedChanceForOneExtraFish: number;
    decreasedChanceForOneExtraFish: number;
    doubleLogProduction: number;
    increasedGPFromNegativeObstacles: number;
    decreasedGPFromNegativeObstacles: number;
    increasedXPFromNegativeObstacles: number;
    decreasedXPFromNegativeObstacles: number;
    increasedMasteryXPFromNegativeObstacles: number;
    decreasedMasteryXPFromNegativeObstacles: number;
    increasedChanceGoldenStardust: number;
    decreasedChanceGoldenStardust: number;
    increasedChanceStardust: number;
    decreasedChanceStardust: number;
    decreasedThievingStunIntervalPercent: number;
    increasedThievingStunIntervalPercent: number;
    decreasedGlobalSkillIntervalPercent: number;
    increasedGlobalSkillIntervalPercent: number;
    increasedChanceForArrowShaftsWoodcutting: number;
    decreasedChanceForArrowShaftsWoodcutting: number;
    decreasedNonShardCostForEquippedTablets: number;
    increasedNonShardCostForEquippedTablets: number;
    decreasedPassiveCookInterval: number;
    increasedPassiveCookInterval: number;
    increasedSalamanderCreationCharges: number;
    decreasedSalamanderCreationCharges: number;
    decreasedJavelinResourceCost: number;
    increasedJavelinResourceCost: number;
    increasedJavelinProduction: number;
    decreasedJavelinProduction: number;
    increasedChanceExtraJavelins: number;
    decreasedChanceExtraJavelins: number;
    increasedChanceExtraMeteoriteOre: number;
    decreasedChanceExtraMeteoriteOre: number;
    increasedChanceExtraArrows: number;
    decreasedChanceExtraArrows: number;
    increasedChanceExtraUnstrungBows: number;
    decreasedChanceExtraUnstrungBows: number;
    increasedChanceItemToGoldFletching: number;
    decreasedChanceItemToGoldFletching: number;
    increasedLeprechaunCreationCharges: number;
    decreasedLeprechaunCreationCharges: number;
    increasedGPFromAgilityPerActiveObstacle: number;
    decreasedGPFromAgilityPerActiveObstacle: number;
    increasedChanceExtraCrossbows: number;
    decreasedChanceExtraCrossbows: number;
    disableGoldenStardustDrops: number;
    increasedBoltProduction: number;
    decreasedBoltProduction: number;
    decreasedFletchingIntervalWithArrows: number;
    increasedFletchingIntervalWithArrows: number;
    increasedCyclopsCreationCharges: number;
    decreasedCyclopsCreationCharges: number;
    increasedGPFromItemAlchemy: number;
    increasedChanceForCharcoalInFiremaking: number;
    decreasedChanceForCharcoalInFiremaking: number;
    increasedThievingAreaUniqueChance: number;
    decreasedThievingAreaUniqueChance: number;
    increasedChanceToFindMeteorite: number;
    increasedChanceToFindMushroomWoodcutting: number;
    increasedChanceToAvoidThievingStuns: number;
    increasedChanceAdditionalPerfectItem: number;
    increasedChanceStardustCuttingMagicLogs: number;
    increasedTownshipPopulationCap: number;
    decreasedTownshipPopulationCap: number;
    increasedTownshipHappiness: number;
    decreasedTownshipHappiness: number;
    increasedTownshipEducation: number;
    decreasedTownshipEducation: number;
    increasedTownshipHealth: number;
    decreasedTownshipHealth: number;
    increasedTownshipGPProduction: number;
    decreasedTownshipGPProduction: number;
    increasedTownshipMaxStorage: number;
    decreasedTownshipMaxStorage: number;
    increasedTownshipFoodProduction: number;
    decreasedTownshipFoodProduction: number;
    increasedTownshipWoodProduction: number;
    decreasedTownshipWoodProduction: number;
    increasedTownshipOreProduction: number;
    decreasedTownshipOreProduction: number;
    increasedTownshipStoneProduction: number;
    decreasedTownshipStoneProduction: number;
    increasedTownshipCoalProduction: number;
    decreasedTownshipCoalProduction: number;
    increasedTownshipBarProduction: number;
    decreasedTownshipBarProduction: number;
    increasedTownshipHerbProduction: number;
    decreasedTownshipHerbProduction: number;
    increasedTownshipRuneEssenceProduction: number;
    decreasedTownshipRuneEssenceProduction: number;
    increasedTownshipLeatherProduction: number;
    decreasedTownshipLeatherProduction: number;
    increasedTownshipPotionProduction: number;
    decreasedTownshipPotionProduction: number;
    increasedTownshipPlankProduction: number;
    decreasedTownshipPlankProduction: number;
    increasedTownshipClothingProduction: number;
    decreasedTownshipClothingProduction: number;
    increasedTownshipBuildingCost: number;
    decreasedTownshipBuildingCost: number;
    increasedTownshipGrasslandsProduction: number;
    decreasedTownshipGrasslandsProduction: number;
    increasedTownshipForestProduction: number;
    decreasedTownshipForestProduction: number;
    increasedTownshipDesertProduction: number;
    decreasedTownshipDesertProduction: number;
    increasedTownshipWaterProduction: number;
    decreasedTownshipWaterProduction: number;
    increasedTownshipSwampProduction: number;
    decreasedTownshipSwampProduction: number;
    increasedTownshipAridPlainsProduction: number;
    decreasedTownshipAridPlainsProduction: number;
    increasedTownshipMountainsProduction: number;
    decreasedTownshipMountainsProduction: number;
    increasedTownshipValleyProduction: number;
    decreasedTownshipValleyProduction: number;
    increasedTownshipJungleProduction: number;
    decreasedTownshipJungleProduction: number;
    increasedTownshipSnowlandsProduction: number;
    decreasedTownshipSnowlandsProduction: number;
    increasedTownshipFishingDockProduction: number;
    decreasedTownshipFishingDockProduction: number;
    increasedTownshipMagicEmporiumProduction: number;
    decreasedTownshipMagicEmporiumProduction: number;
    increasedTownshipOrchardProduction: number;
    decreasedTownshipOrchardProduction: number;
    increasedTownshipFarmProduction: number;
    decreasedTownshipFarmProduction: number;
    increasedTownshipWoodcuttingProduction: number;
    decreasedTownshipWoodcuttingProduction: number;
    increasedTownshipBlacksmithProduction: number;
    decreasedTownshipBlacksmithProduction: number;
    increasedTownshipTaxPerCitizen: number;
    decreasedTownshipTaxPerCitizen: number;
    townshipDisableHunting: number;
    increasedTownshipResourceProduction: number;
    decreasedTownshipResourceProduction: number;
    increasedTownshipCoalUsage: number;
    decreasedTownshipCoalUsage: number;
    increasedTownshipBuildingHappinessPenalties: number;
    decreasedTownshipBuildingHappinessPenalties: number;
    increasedAdditionalAshInFiremaking: number;
    decreasedAdditionalAshInFiremaking: number;
    increasedTownshipFoodUsage: number;
    decreasedTownshipFoodUsage: number;
    increasedChanceToFindLostChest: number;
    increasedChanceToPreserveConsumable: number;
    increasedTownshipDeadStorage: number;
    decreasedTownshipDeadStorage: number;
    bigRon: number;
    coalGainedOnCookingFailure: number;
    halvedWoodcuttingDoubleChance: number;
    increasedFlatFarmingYield: number;
    decreasedFlatFarmingYield: number;
    increasedDeadlyToxinsFromHerblore: number;
    increasedSummoningCreationChargesForEquippedTablets: number;
    decreasedSummoningIntervalPercentForEquippedTablets: number;
    increasedMinBirdNestQuantity: number;
    increasedGemVeinChance: number;
    decreasedGemVeinChance: number;
    increasedChanceAdditionalBarSmithing: number;
    increasedFletchingBoltQuantity: number;
    increasedAgilityPillarCost: number;
    decreasedAgilityPillarCost: number;
    increasedNonCombatSkillXP: number;
    decreasedNonCombatSkillXP: number;
    increasedFlatMeleeDefenceBonus: number;
    increasedFlatRangedDefenceBonus: number;
    increasedFlatStabAttackBonus: number;
    increasedFlatSlashAttackBonus: number;
    increasedFlatBlockAttackBonus: number;
    increasedFlatRangedAttackBonus: number;
    increasedFlatMagicAttackBonus: number;
    increasedFlatMeleeStrengthBonus: number;
    increasedFlatRangedStrengthBonus: number;
    disableSalamanderItemReduction: number;
    decreasedSummoningIntervalForOctopus: number;
    increasedMasteryPoolCap: number;
    bypassAllSlayerItems: number;
    increased5DROnBeingHit: number;
    allowNonMagicCurses: number;
    increasedTownshipTraderStock: number;
    increasedEssenceFromMining: number;
    increasedMasteryTokens: number;
    decreasedTownshipRepairCost: number;
    decreasedTownshipTraderCost: number;
    enableNightfallSeason: number;
    enableSolarEclipseSeason: number;
    skillModifiers: Map<SkillModifierKeys, Map<AnySkill, number>>;
    constructor();
    get combatLootDoubleChance(): number;
    get increasedCombatGP(): number;
    get runePreservationChance(): number;
    get ammoPreservationChance(): number;
    addModifiers(modifiers: PlayerModifierObject, negMult?: number, posMult?: number): void;
    /** Adds the modifiers from a MappedModifiers object to this */
    addMappedModifiers(modifiers: MappedModifiers): void;
    getActiveModifiers(): NameValuePair[];
    reset(): void;
    getSkillModifierValue(key: SkillModifierKeys, skill: AnySkill): number;
    getGPForDamageMultiplier(attackType: AttackType): number;
    get meleeStrengthBonusModifier(): number;
    get rangedStrengthBonusModifier(): number;
    get magicDamageModifier(): number;
    getHiddenSkillLevels(skill: AnySkill): number;
    getActiveModifierDescriptions(): [string, string][];
}
declare type NameValuePair = {
    name: string;
    value: number;
};
declare class MappedModifiers {
    skillModifiers: Map<SkillModifierKeys, Map<AnySkill, number>>;
    standardModifiers: Map<StandardModifierKeys, number>;
    constructor();
    addStandardModifier(key: StandardModifierKeys, value: number): void;
    addSkillModifiers(key: SkillModifierKeys, values: SkillModifier[], negMult?: number, posMult?: number): void;
    /** Adds a modifier data object */
    addModifiers(modifiers: PlayerModifierObject, negMult?: number, posMult?: number): void;
    /** Adds a modifier array */
    addArrayModifiers(modArray: ModifierArray): void;
    /** Adds the modifiers from another mapped modifiers object to this one */
    addMappedModifiers(modifiers: MappedModifiers): void;
    reset(): void;
    getActiveModifierDescriptions(): [string, string][];
    getActiveModifierDescriptionsToPrecision(precision: number): [string, string][];
    getModifierDescriptionsAsNodes<T extends keyof HTMLElementTagNameMap>(tagName: T, additionalClasses?: string[]): HTMLElementTagNameMap[T][];
}
declare class TargetModifiers {
    modifiers: Map<CombatModifierKey, number>;
    addTargetModifiers(modifiers: TargetModifiers): void;
    addModifiers(modifiers: CombatModifierData, negMult?: number, posMult?: number): void;
    addToCombatModifiers(combatModifiers: CombatModifiers): void;
    subFromCombatModifiers(combatModifiers: CombatModifiers): void;
    reset(): void;
}
declare function shouldRoundModifier(key: ModifierKeys, value: number): boolean;
declare function printPlayerModifier(key: SkillModifierKeys, value: SkillModifier, precision?: number): [string, string];
declare function printPlayerModifier(key: StandardModifierKeys, value: number, precision?: number): [string, string];
declare function isSkillEntry<Skill, Standard>(entry: ModifierEntry<Skill, Standard>): entry is SkillEntry<Skill>;
declare function isSkillKey(key: SkillModifierKeys | StandardModifierKeys): key is SkillModifierKeys;
declare function addModifierTemplateData(formatData: StringDictionary<string>, modifiers: PlayerModifierObject, key: string): void;
declare function generateModifierDataDescription(modifiers: PlayerModifierObject, key: string): string;
/** Gets an array of plain modifier descriptions from data*/
declare function getPlainModifierDescriptions(modifiers: PlayerModifierObject): string[];
/** Describes modifiers and joins them as a list with no HTML formatting */
declare function describeModifierDataPlain(modifiers: PlayerModifierObject): string;
/** Describes modifiers and joins them as a list separated by HTML line breaks with no HTML formatting for the modifier itself */
declare function describeModifierDataPlainLineBreak(modifiers: PlayerModifierObject): string;
/** Describes modifiers and joins them as a list using Intl.ListFormat */
declare function describeModifierData(modifiers: PlayerModifierObject): string;
/** Describes modifiers and joins them as a list separated by HTML line breaks */
declare function describeModifierDataLineBreak(modifiers: PlayerModifierObject): string;
/** Gets span HTML that describes modifiers */
declare function getModifierDataSpans(modifiers: PlayerModifierObject, negMult?: number, posMult?: number): string[];
declare function getSpansFromModifierObject(modifiers: PlayerModifierObject, negMult?: number, posMult?: number): HTMLSpanElement[];
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
    /** Decreases chance to perform a critical hit for melee attacks: Implemented */
    decreasedMeleeCritChance: Standard;
    /** Increases chance to perform a critical hit for ranged attacks: Implemented */
    increasedRangedCritChance: Standard;
    /** Decreases chance to perform a critical hit for ranged attacks: Implemented */
    decreasedRangedCritChance: Standard;
    /** Increases chance to perform a critical hit for magic attacks: Implemented */
    increasedMagicCritChance: Standard;
    /** Decreases chance to perform a critical hit for magic attacks: Implemented */
    decreasedMagicCritChance: Standard;
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
    /** Provides immunity to freezes: Implemented */
    freezeImmunity: Standard;
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
    /** Increases the chance that affliction is applied by {value}% */
    increasedAfflictionChance: Standard;
    /** Provides character with immunity to damage from other attack styles */
    otherStyleImmunity: Standard;
    /** Provides character with immunity to damage from Melee */
    meleeImmunity: Standard;
    /** Provides character with immunity to damage from Ranged */
    rangedImmunity: Standard;
    /** Provides character with immunity to damage from Magic */
    magicImmunity: Standard;
    /** Provides character with immunity to Slows */
    slowImmunity: Standard;
    /** Heal % of current hitpoints every 2 turns */
    increasedEndOfTurnHealing2: Standard;
    /** Heal % of current hitpoints every 3 turns */
    increasedEndOfTurnHealing3: Standard;
    /** Heal % of current hitpoints every 5 turns */
    increasedEndOfTurnHealing5: Standard;
    /** Chance to apply poison when hitting with an attack */
    increasedChanceToApplyPoison: Standard;
    /** Chance to apply frostburn when hitting with an attack */
    increasedChanceToApplyFrostburn: Standard;
    /** Chance to stun when hitting with a Melee attack (once per turn) */
    increasedMeleeStunChance: Standard;
    /** Chance to apply Burn, Frostburn or Freeze when hitting with a Magic attack (once per turn) */
    increasedElementalEffectChance: Standard;
    /** Provides character with immunity to Frostburn */
    frostBurnImmunity: Standard;
    /** Chance to poison attackers when hit */
    increasedPoisonReflectChance: Standard;
    /** Chance to inflict a bleed that does 100% of the attack's damage to attackers when hit */
    increasedBleedReflectChance: Standard;
    /** % of Maximum Hit added to Minimum Hit when using Nature spells */
    increasedMinNatureSpellDamageBasedOnMaxHit: Standard;
    /** Increases total damage to bleeds inflicted by flat amount */
    increasedTotalBleedDamage: Standard;
    /** % chance to increase the length of stuns inflicted by 1 turn */
    increasedChanceToIncreaseStunDuration: Standard;
    /** Increases Accuracy Rating when using Surge spells */
    increasedSurgeSpellAccuracy: Standard;
    /** Increases Max Hit when using Surge spells */
    increasedSurgeSpellMaxHit: Standard;
    /** Decreases Hitpoint Regeneration interval (s) */
    decreasedRegenerationInterval: Standard;
    /** Inflict a slow that increases the target's attack interval by % when hitting with an attack */
    increasedOnHitSlowMagnitude: Standard;
    /** Modifier for the pegasus passive, only works for enemies */
    globalEvasionHPScaling: Standard;
    /** Increases Flat Melee Accuracy Bonus per 0.1s Attack Interval */
    increasedFlatMeleeAccuracyBonusPerAttackInterval: Standard;
    /** Decreases Flat Melee Accuracy Bonus per 0.1s Attack Interval */
    decreasedFlatMeleeAccuracyBonusPerAttackInterval: Standard;
    /** Increases Flat Melee Strength Bonus per 0.1s Attack Interval */
    increasedFlatMeleeStrengthBonusPerAttackInterval: Standard;
    /** Decreases Flat Melee Strength Bonus per 0.1s Attack Interval */
    decreasedFlatMeleeStrengthBonusPerAttackInterval: Standard;
    /** Increases Flat Ranged Accuracy Bonus per 0.1s Attack Interval */
    increasedFlatRangedAccuracyBonusPerAttackInterval: Standard;
    /** Decreases Flat Ranged Accuracy Bonus per 0.1s Attack Interval */
    decreasedFlatRangedAccuracyBonusPerAttackInterval: Standard;
    /** Increases Flat Ranged Strength Bonus per 0.1s Attack Interval */
    increasedFlatRangedStrengthBonusPerAttackInterval: Standard;
    /** Decreases Flat Ranged Strength Bonus per 0.1s Attack Interval */
    decreasedFlatRangedStrengthBonusPerAttackInterval: Standard;
    /** Increases Flat Magic Accuracy Bonus per 0.1s Attack Interval */
    increasedFlatMagicAccuracyBonusPerAttackInterval: Standard;
    /** Decreases Flat Magic Accuracy Bonus per 0.1s Attack Interval */
    decreasedFlatMagicAccuracyBonusPerAttackInterval: Standard;
    /** Increases Damage Reduction against Melee Enemy */
    increasedDamageReductionAgainstMelee: Standard;
    /** Decreases Damage Reduction against Melee Enemy */
    decreasedDamageReductionAgainstMelee: Standard;
    /** Increases Damage Reduction against Ranged Enemy */
    increasedDamageReductionAgainstRanged: Standard;
    /** Decreases Damage Reduction against Ranged Enemy */
    decreasedDamageReductionAgainstRanged: Standard;
    /** Increases Damage Reduction against Magic Enemy */
    increasedDamageReductionAgainstMagic: Standard;
    /** Decreases Damage Reduction against Magic Enemy */
    decreasedDamageReductionAgainstMagic: Standard;
    /** Increases Damage Reduction when using a 2H Magic Weapon */
    increasedDamageReductionWithMagic2HWeapon: Standard;
    /** Decreases Damage Reduction when using a 2H Magic Weapon */
    decreasedDamageReductionWithMagic2HWeapon: Standard;
    /** Increases Max Hit for each 1% of Damage Reduction the Enemy has */
    increasedMaxHitPercentBasedOnEnemyDamageReduction: Standard;
    /** Decreases Max Hit for each 1% of Damage Reduction the Enemy has */
    decreasedMaxHitPercentBasedOnEnemyDamageReduction: Standard;
    /** Increases Melee Max Hit. This value is tripled if fighting a Ranged Enemy. */
    increasedMeleeMaxHitBonusAgainstRanged: Standard;
    /** Decreases Melee Max Hit. This value is tripled if fighting a Ranged Enemy. */
    decreasedMeleeMaxHitBonusAgainstRanged: Standard;
    /** Increases Ranged Max Hit. This value is tripled if fighting a Magic Enemy. */
    increasedRangedMaxHitBonusAgainstMagic: Standard;
    /** Decreases Ranged Max Hit. This value is tripled if fighting a Magic Enemy. */
    decreasedRangedMaxHitBonusAgainstMagic: Standard;
    /** Increases Magic Max Hit. This value is tripled if fighting a Melee Enemy. */
    increasedMagicMaxHitBonusAgainstMelee: Standard;
    /** Decreases Magic Max Hit. This value is tripled if fighting a Melee Enemy. */
    decreasedMagicMaxHitBonusAgainstMelee: Standard;
    /** Killing a Melee Slayer Task Enemy grants Slayer Coins equal to Enemy Combat Level */
    gainSlayerCoinsBasedOnEnemyCombatLevelMelee: Standard;
    /** Killing a Ranged Slayer Task Enemy grants Slayer Coins equal to Enemy Combat Level */
    gainSlayerCoinsBasedOnEnemyCombatLevelRanged: Standard;
    /** Killing a Magic Slayer Task Enemy grants Slayer Coins equal to Enemy Combat Level */
    gainSlayerCoinsBasedOnEnemyCombatLevelMagic: Standard;
    /** Increases Damage Reduction when fighting a Dungeon Boss */
    increasedDamageReductionAgainstBosses: Standard;
    /** Decreases Damage Reduction when fighting a Dungeon Boss */
    decreasedDamageReductionAgainstBosses: Standard;
    /** Increases chance for a Slayer Task kill to count as 2 kills */
    increasedChanceDoubleSlayerTaskKill: Standard;
    /** Decreases chance for a Slayer Task kill to count as 2 kills */
    decreasedChanceDoubleSlayerTaskKill: Standard;
    /** Increases % of damage taken is added as Prayer Points (% damage rounded down) [% is divided by number multiplier] */
    increasedDamageTakenAddedAsPrayerPoints: Standard;
    /** Decreases % of damage taken is added as Prayer Points (% damage rounded down) [% is divided by number multiplier] */
    decreasedDamageTakenAddedAsPrayerPoints: Standard;
    /** Accuracy Ratings are multiplied by ${value} times current Hitpoints percent */
    globalAccuracyHPScaling: Standard;
    /** Do not use in the context of Conditional Modifiers. Use appropriate enemyModifiers instead */
    decreasedEnemyDamageReduction: Standard;
    /** Do not use in the context of Conditional Modifiers. Use appropriate enemyModifiers instead */
    increasedEnemyDamageReduction: Standard;
    increasedGlobalStunChance: Standard;
    decreasedGlobalStunChance: Standard;
    increasedGlobalSleepChance: Standard;
    decreasedGlobalSleepChance: Standard;
    increased15SlowStunChance2Turns: Standard;
    decreased15SlowStunChance2Turns: Standard;
    increasedPrayerPointsWhenHit: Standard;
    increasedGPPerDamage: Standard;
    decreasedGPPerDamage: Standard;
    increasedGPBasedOnEnemyCombatLevel: Standard;
    increasedGPBasedOnSummonDamage: Standard;
    decreasedGPBasedOnSummonDamage: Standard;
    increasedSlayerCoinsPerDamage: Standard;
    decreasedSlayerCoinsPerDamage: Standard;
    increasedChanceToIncreaseSleepDuration: Standard;
    decreasedChanceToIncreaseSleepDuration: Standard;
    increasedChanceToAvoidStun: Standard;
    decreasedChanceToAvoidStun: Standard;
    increasedChanceToAvoidSleep: Standard;
    decreasedChanceToAvoidSleep: Standard;
    increasedHealWhenStunned: Standard;
    decreasedHealWhenStunned: Standard;
    increasedHealWhenSleep: Standard;
    decreasedHealWhenSleep: Standard;
    increasedChanceToApplyDeadlyPoisonWhenPoisoned: Standard;
    decreasedChanceToApplyDeadlyPoisonWhenPoisoned: Standard;
    increasedDamageTakenPerAttack: Standard;
    decreasedDamageTakenPerAttack: Standard;
    increasedDamageTakenWhenAsleep: Standard;
    decreasedDamageTakenWhenAsleep: Standard;
    increasedDamageTakenWhenStunned: Standard;
    decreasedDamageTakenWhenStunned: Standard;
    decreasedPlayerDamageReduction: Standard;
    increasedDamageDealtIfPoisoned: Standard;
    decreasedDamageDealtIfPoisoned: Standard;
    increasedMeleeMaxHitFlat: Standard;
    decreasedMeleeMaxHitFlat: Standard;
    increasedRangedMaxHitFlat: Standard;
    decreasedRangedMaxHitFlat: Standard;
    increasedMagicMaxHitFlat: Standard;
    decreasedMagicMaxHitFlat: Standard;
    increasedChanceToApplyShock: Standard;
    increasedAbsorbingSkin: Standard;
    increasedDuality: Standard;
    increasedChanceToApplyDecayCurse: Standard;
    increasedRage: Standard;
    increasedCurseLifesteal: Standard;
    applyRandomCurseOnSpawn: Standard;
    increasedChanceDarkBlade: Standard;
    /** Increases Max Hit for each 1% of Damage Reduction the Player has */
    increasedMaxHitPercentBasedOnDamageReduction: Standard;
    /** Decreases Max Hit for each 1% of Damage Reduction the Player has */
    decreasedMaxHitPercentBasedOnDamageReduction: Standard;
    halveDamageReduction: Standard;
    increasedLifestealBasedOnHPRegenEffectiveness: Standard;
    disableHPRegeneration: Standard;
    increasedMinMeteorShowerSpellDamage: Standard;
    increasedEndOfTurnEvasion2: Standard;
    decreaseEnemyEvasionOnStun: Standard;
    decreaseEnemyEvasionOnSleep: Standard;
    decreasedEvasionBasedOnDR: Standard;
    healOnHitBasedOnTargetDR: Standard;
    doubleLifesteal: Standard;
    increasedMaxHPBurnDamage: Standard;
    increasedChanceToApplyDeadlyPoison: Standard;
    disableLifesteal: Standard;
    increasedSlayerCoinsBasedOnTargetDR: Standard;
    increasedSlayerCoinsPerPoisonDamage: Standard;
    increasedChanceToAvoidCurses: Standard;
    applyMadnessCurseOnSpawn: Standard;
    applyTormentCurseOnSpawn: Standard;
    applyDespairCurseOnSpawn: Standard;
    /** Increases min hit by value*numberMultiplier when using Archaic spells that use Poison Runes */
    increasedMinPoisonArchaicDmg: Standard;
    /** Increases min hit by value*numberMultiplier when using Archaic spells that use Infernal Runes */
    increasedMinInfernalArchaicDmg: Standard;
    /** Increases min hit by value*numberMultiplier when using Archaic spells that use Lightning Runes */
    increasedMinLightningArchaicDmg: Standard;
    reducedTargetDamageRedcutionIfBleeding: Standard;
    increasedAssassin: Standard;
    growingMadnessPassive: Standard;
    momentInTimePassive: Standard;
    reignOverTimePassive: Standard;
    increasedChanceToApplySleepToTargetWhenHit: Standard;
    /** @deprecated Has no effect. Replaced by Item Effect system */
    increasedPlayerRage: Standard;
    /** @deprecated Has no effect. Replaced by Item Effect system */
    increasedLeviathan: Standard;
    shadowCloak: Standard;
    /** Increased accuracy when using Archaic spells that use Poison Runes */
    increasedPoisonSpellAccuracy: Standard;
    /** Increased accuracy when using Archaic spells that use Infernal Runes */
    increasedInfernalSpellAccuracy: Standard;
    /** Increased accuracy when using Archaic spells that use Lightning Runes */
    increasedLightningSpellAccuracy: Standard;
    decreasedBurnDOTDamage: Standard;
    increasedBurnDOTDamage: Standard;
    decreasedBleedDOTDamage: Standard;
    increasedBleedDOTDamage: Standard;
    increasedPoisonDOTDamage: Standard;
    decreasedPoisonDOTDamage: Standard;
    increasedDeadlyPoisonDOTDamage: Standard;
    decreasedDeadlyPoisonDOTDamage: Standard;
    increased30Slow5TurnsChance: Standard;
    increasedEndOfTurnMaxHealing2: Standard;
    increasedEvasionAgainstMelee: Standard;
    increasedEvasionAgainstRanged: Standard;
    increasedEvasionAgainstMagic: Standard;
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
    increasedGPFromMonstersFlatBasedOnEvasion: Standard;
    increasedGPPerMeleeDamage: Standard;
    increasedGPPerRangedDamage: Standard;
    increasedGPPerMagicDamage: Standard;
    increasedGPFromSlayerTaskMonsters: Standard;
    increasedGPWhenHitBasedOnDR: Standard;
    increasedGPOnRegenBasedOnHPGain: Standard;
    increasedGPFromBurningMonsters: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_1_2: Standard;
    increasedFlatMagicDefenceBonus: Standard;
    decreasedSlayerTaskMonsterAccuracy: Standard;
    increasedMeleeRangedDefenceBonusBasedOnDR: Standard;
    increasedHPRegenWhenEnemyHasMoreEvasion: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_1_15: Standard;
    increasedSCfromLifesteal: Standard;
    increasedHealingOnAttackBasedOnDR: Standard;
    increasedSummoningAttackLifesteal: Standard;
    increasedWoodcuttingGemChance: Standard;
    increasedBonusFishingSpecialChance: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_3_9: Standard;
    increasedRunecraftingStavePreservation: Standard;
    summoningSynergy_Ent_Leprechaun: Standard;
    increasedWoodcuttingJewelryChance: Standard;
    summoningSynergy_3_17: Standard;
    increasedMinimumBirdNestsWhenPotionActive: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_3_19: Standard;
    summoningSynergy_4_5: Standard;
    decreasedCookingSuccessCap: Standard;
    doubleRuneEssenceMining: Standard;
    summoningSynergy_Mole_Leprechaun: Standard;
    doubleSilverGoldMining: Standard;
    increasedMiningBarChance: Standard;
    increasedMiningNodeHPWithPerfectSwing: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_4_19: Standard;
    increasedFishingCookedChance: Standard;
    increasedRunecraftingWaterComboRunes: Standard;
    summoningSynergy_Octopus_Leprechaun: Standard;
    increasedCraftingJewelryRandomGemChance: Standard;
    increasedSmithingDragonGearPreservation: Standard;
    increasedFishermansPotionCharges: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_6_7: Standard;
    increasedMagicMinHitBasedOnMaxHitSlayerTask: Standard;
    increasedMeleeMaxHitBasedOnMaxHitSlayerTask: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_6_13: Standard;
    increasedFlatHPRegenBasedOnMeleeMaxHit: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_6_15: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_7_8: Standard;
    increasedRangedMaxHitBasedOnMaxHitSlayerTask: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_7_13: Standard;
    increasedFlatHPRegenBasedOnRangedMaxHit: Standard;
    increasedChanceToApplyBurnWithRanged: Standard;
    increasedSlayerCoinsPerMagicDamageSlayerTask: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_8_13: Standard;
    increasedFlatHPRegenBasedOnMagicMaxHit: Standard;
    increasedRunecraftingEssencePreservation: Standard;
    thievingChefNoDamage: Standard;
    decreasedFlatCraftingDragonhideCost: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_9_17: Standard;
    increasedGenerousCookPotionCharges: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_9_19: Standard;
    increasedRuneEssenceThievingMiner: Standard;
    increasedChanceToDoubleLeatherDragonhideCrafting: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_10_17: Standard;
    giveRandomComboRunesRunecrafting: Standard;
    increasedFireRunesWhenMakingElementalRunes: Standard;
    increasedThievingAutoSellPrice: Standard;
    increasedRandomBarChanceThievingMiner: Standard;
    increasedHerbSackChanceThievingFarmer: Standard;
    summoningSynergy_Leprechaun_Devil: Standard;
    increasedDamageReductionAgainstSlayerTasks: Standard;
    increasedHitpointRegenerationAgainstSlayerTasks: Standard;
    /** @deprecated Unused Modifier */
    summoningSynergy_13_14: Standard;
    increasedCraftingJewelryPreservation: Standard;
    increasedCraftingPotionCharges: Standard;
    increasedFiremakingLogGP: Standard;
    doubleSilverGoldSmithingWithSeeingGold: Standard;
    decreasedFlatSmithingCoalCost: Standard;
    summoningSynergy_Bear_Devil: Standard;
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
    /** @deprecated Unused Modifier */
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
    freeProtectItem: Standard;
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
    increasedChanceForDiamondFiremaking: Standard;
    decreasedChanceForDiamondFiremaking: Standard;
    increasedNonMagicPoisonChance: Standard;
    /** % Chance to preserve food when eaten */
    increasedChanceToPreserveFood: Standard;
    allowLootContainerStacking: Standard;
    infiniteLootContainer: Standard;
    increasedBaseStardustDropQty: Standard;
    increasedGPFromFiremaking: Standard;
    decreasedGPFromFiremaking: Standard;
    increasedWoodcuttingXPAddedAsFiremakingXP: Standard;
    decreasedWoodcuttingXPAddedAsFiremakingXP: Standard;
    increasedChanceForOneExtraOre: Standard;
    decreasedChanceForOneExtraOre: Standard;
    increasedChanceForQualitySuperiorGem: Standard;
    decreasedChanceForQualitySuperiorGem: Standard;
    increasedMeteoriteOre: Standard;
    increasedChanceForAshInWoodcutting: Standard;
    decreasedChanceForAshInWoodcutting: Standard;
    increasedChanceForAshInFiremaking: Standard;
    decreasedChanceForAshInFiremaking: Standard;
    increasedChanceForStardustInFiremaking: Standard;
    decreasedChanceForStardustInFiremaking: Standard;
    increasedChanceForOneExtraFish: Standard;
    decreasedChanceForOneExtraFish: Standard;
    doubleBoneDrops: Standard;
    /** Increases % GP gained from Agility Obstacles that contain a negative Modifier */
    increasedGPFromNegativeObstacles: Standard;
    /** Decreases % GP gained from Agility Obstacles that contain a negative Modifier */
    decreasedGPFromNegativeObstacles: Standard;
    /** Increases % Skill XP gained from Agility Obstacles that contain a negative Modifier */
    increasedXPFromNegativeObstacles: Standard;
    /** Decreases % Skill XP gained from Agility Obstacles that contain a negative Modifier */
    decreasedXPFromNegativeObstacles: Standard;
    /** Increases % Mastery XP gained from Agility Obstacles that contain a negative Modifier */
    increasedMasteryXPFromNegativeObstacles: Standard;
    /** Decreases % Mastery XP gained from Agility Obstacles that contain a negative Modifier */
    decreasedMasteryXPFromNegativeObstacles: Standard;
    /** Increases % chance to locate Golden Stardust in Astrology */
    increasedChanceGoldenStardust: Standard;
    /** Decreases % chance to locate Golden Stardust in Astrology */
    decreasedChanceGoldenStardust: Standard;
    increasedChanceStardust: Standard;
    decreasedChanceStardust: Standard;
    decreasedThievingStunIntervalPercent: Standard;
    increasedThievingStunIntervalPercent: Standard;
    decreasedGlobalSkillIntervalPercent: Standard;
    increasedGlobalSkillIntervalPercent: Standard;
    doubleLogProduction: Standard;
    increasedChanceForArrowShaftsWoodcutting: Standard;
    decreasedChanceForArrowShaftsWoodcutting: Standard;
    decreasedNonShardCostForEquippedTablets: Standard;
    increasedNonShardCostForEquippedTablets: Standard;
    decreasedPassiveCookInterval: Standard;
    increasedPassiveCookInterval: Standard;
    increasedSalamanderCreationCharges: Standard;
    decreasedSalamanderCreationCharges: Standard;
    decreasedJavelinResourceCost: Standard;
    increasedJavelinResourceCost: Standard;
    increasedJavelinProduction: Standard;
    decreasedJavelinProduction: Standard;
    increasedChanceExtraJavelins: Standard;
    decreasedChanceExtraJavelins: Standard;
    increasedChanceExtraMeteoriteOre: Standard;
    decreasedChanceExtraMeteoriteOre: Standard;
    increasedChanceExtraArrows: Standard;
    decreasedChanceExtraArrows: Standard;
    increasedChanceExtraUnstrungBows: Standard;
    decreasedChanceExtraUnstrungBows: Standard;
    increasedChanceItemToGoldFletching: Standard;
    decreasedChanceItemToGoldFletching: Standard;
    increasedLeprechaunCreationCharges: Standard;
    decreasedLeprechaunCreationCharges: Standard;
    increasedGPFromAgilityPerActiveObstacle: Standard;
    decreasedGPFromAgilityPerActiveObstacle: Standard;
    increasedChanceExtraCrossbows: Standard;
    decreasedChanceExtraCrossbows: Standard;
    disableGoldenStardustDrops: Standard;
    increasedBoltProduction: Standard;
    decreasedBoltProduction: Standard;
    decreasedFletchingIntervalWithArrows: Standard;
    increasedFletchingIntervalWithArrows: Standard;
    increasedCyclopsCreationCharges: Standard;
    decreasedCyclopsCreationCharges: Standard;
    increasedGPFromItemAlchemy: Standard;
    increasedChanceForCharcoalInFiremaking: Standard;
    decreasedChanceForCharcoalInFiremaking: Standard;
    increasedThievingAreaUniqueChance: Standard;
    decreasedThievingAreaUniqueChance: Standard;
    increasedChanceToFindMeteorite: Standard;
    increasedChanceToFindMushroomWoodcutting: Standard;
    increasedChanceToAvoidThievingStuns: Standard;
    increasedChanceAdditionalPerfectItem: Standard;
    increasedChanceStardustCuttingMagicLogs: Standard;
    increasedTownshipPopulationCap: Standard;
    decreasedTownshipPopulationCap: Standard;
    increasedTownshipHappiness: Standard;
    decreasedTownshipHappiness: Standard;
    increasedTownshipEducation: Standard;
    decreasedTownshipEducation: Standard;
    increasedTownshipHealth: Standard;
    decreasedTownshipHealth: Standard;
    increasedTownshipGPProduction: Standard;
    decreasedTownshipGPProduction: Standard;
    increasedTownshipMaxStorage: Standard;
    decreasedTownshipMaxStorage: Standard;
    increasedTownshipFoodProduction: Standard;
    decreasedTownshipFoodProduction: Standard;
    increasedTownshipWoodProduction: Standard;
    decreasedTownshipWoodProduction: Standard;
    increasedTownshipOreProduction: Standard;
    decreasedTownshipOreProduction: Standard;
    increasedTownshipStoneProduction: Standard;
    decreasedTownshipStoneProduction: Standard;
    increasedTownshipCoalProduction: Standard;
    decreasedTownshipCoalProduction: Standard;
    increasedTownshipBarProduction: Standard;
    decreasedTownshipBarProduction: Standard;
    increasedTownshipHerbProduction: Standard;
    decreasedTownshipHerbProduction: Standard;
    increasedTownshipRuneEssenceProduction: Standard;
    decreasedTownshipRuneEssenceProduction: Standard;
    increasedTownshipLeatherProduction: Standard;
    decreasedTownshipLeatherProduction: Standard;
    increasedTownshipPotionProduction: Standard;
    decreasedTownshipPotionProduction: Standard;
    increasedTownshipPlankProduction: Standard;
    decreasedTownshipPlankProduction: Standard;
    increasedTownshipClothingProduction: Standard;
    decreasedTownshipClothingProduction: Standard;
    increasedTownshipBuildingCost: Standard;
    decreasedTownshipBuildingCost: Standard;
    increasedTownshipGrasslandsProduction: Standard;
    decreasedTownshipGrasslandsProduction: Standard;
    increasedTownshipForestProduction: Standard;
    decreasedTownshipForestProduction: Standard;
    increasedTownshipDesertProduction: Standard;
    decreasedTownshipDesertProduction: Standard;
    increasedTownshipWaterProduction: Standard;
    decreasedTownshipWaterProduction: Standard;
    increasedTownshipSwampProduction: Standard;
    decreasedTownshipSwampProduction: Standard;
    increasedTownshipAridPlainsProduction: Standard;
    decreasedTownshipAridPlainsProduction: Standard;
    increasedTownshipMountainsProduction: Standard;
    decreasedTownshipMountainsProduction: Standard;
    increasedTownshipValleyProduction: Standard;
    decreasedTownshipValleyProduction: Standard;
    increasedTownshipJungleProduction: Standard;
    decreasedTownshipJungleProduction: Standard;
    increasedTownshipSnowlandsProduction: Standard;
    decreasedTownshipSnowlandsProduction: Standard;
    increasedTownshipFishingDockProduction: Standard;
    decreasedTownshipFishingDockProduction: Standard;
    increasedTownshipMagicEmporiumProduction: Standard;
    decreasedTownshipMagicEmporiumProduction: Standard;
    increasedTownshipOrchardProduction: Standard;
    decreasedTownshipOrchardProduction: Standard;
    increasedTownshipFarmProduction: Standard;
    decreasedTownshipFarmProduction: Standard;
    increasedTownshipWoodcuttingProduction: Standard;
    decreasedTownshipWoodcuttingProduction: Standard;
    increasedTownshipBlacksmithProduction: Standard;
    decreasedTownshipBlacksmithProduction: Standard;
    increasedTownshipTaxPerCitizen: Standard;
    decreasedTownshipTaxPerCitizen: Standard;
    townshipDisableHunting: Standard;
    increasedTownshipResourceProduction: Standard;
    decreasedTownshipResourceProduction: Standard;
    increasedTownshipCoalUsage: Standard;
    decreasedTownshipCoalUsage: Standard;
    increasedTownshipBuildingHappinessPenalties: Standard;
    decreasedTownshipBuildingHappinessPenalties: Standard;
    increasedAdditionalAshInFiremaking: Standard;
    decreasedAdditionalAshInFiremaking: Standard;
    increasedTownshipFoodUsage: Standard;
    decreasedTownshipFoodUsage: Standard;
    increasedChanceToFindLostChest: Standard;
    increasedChanceToPreserveConsumable: Standard;
    increasedTownshipDeadStorage: Standard;
    decreasedTownshipDeadStorage: Standard;
    /** Big old ron modifiers */
    bigRon: Standard;
    /** Gives coal amount when failing to cook */
    coalGainedOnCookingFailure: Standard;
    /** Chance to double logs while Woodcutting is halved */
    halvedWoodcuttingDoubleChance: Standard;
    increasedFlatFarmingYield: Standard;
    decreasedFlatFarmingYield: Standard;
    summoningSynergy_Devil_Eagle: Standard;
    increasedDeadlyToxinsFromHerblore: Standard;
    increasedSummoningCreationChargesForEquippedTablets: Standard;
    decreasedSummoningIntervalPercentForEquippedTablets: Standard;
    increasedMinBirdNestQuantity: Standard;
    increasedGemVeinChance: Standard;
    decreasedGemVeinChance: Standard;
    increasedChanceAdditionalBarSmithing: Standard;
    increasedFletchingBoltQuantity: Standard;
    increasedAgilityPillarCost: Standard;
    decreasedAgilityPillarCost: Standard;
    increasedNonCombatSkillXP: Standard;
    decreasedNonCombatSkillXP: Standard;
    increasedFlatMeleeDefenceBonus: Standard;
    increasedFlatRangedDefenceBonus: Standard;
    increasedFlatStabAttackBonus: Standard;
    increasedFlatSlashAttackBonus: Standard;
    increasedFlatBlockAttackBonus: Standard;
    increasedFlatRangedAttackBonus: Standard;
    increasedFlatMagicAttackBonus: Standard;
    increasedFlatMeleeStrengthBonus: Standard;
    increasedFlatRangedStrengthBonus: Standard;
    disableSalamanderItemReduction: Standard;
    decreasedSummoningIntervalForOctopus: Standard;
    increasedMasteryPoolCap: Standard;
    bypassAllSlayerItems: Standard;
    increased5DROnBeingHit: Standard;
    allowNonMagicCurses: Standard;
    increasedTownshipTraderStock: Standard;
    increasedEssenceFromMining: Standard;
    increasedMasteryTokens: Standard;
    decreasedTownshipRepairCost: Standard;
    decreasedTownshipTraderCost: Standard;
    enableNightfallSeason: Standard;
    enableSolarEclipseSeason: Standard;
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
    /** Increased % chance to received +1 item in a skill (Cannot be doubled) */
    increasedChanceAdditionalSkillResource: Skill;
    /** Decreased % chance to received +1 item in a skill (Cannot be doubled) */
    decreasedChanceAdditionalSkillResource: Skill;
    /** Doubles the items received from a skill: Implemented for skills that have this modifier */
    doubleItemsSkill: Skill;
    /** Increases resource preservation cap in a skill */
    increasedSkillPreservationCap: Skill;
    /** Decreases resource preservation cap in a skill */
    decreasedSkillPreservationCap: Skill;
    increasedSkillMasteryXPPerDeedree: Skill;
    increasedSkillMasteryXPPerAmeria: Skill;
    increasedSkillMasteryXPPerVale: Skill;
    increasedSkillMasteryXPPerQimican: Skill;
    increasedSkillMasteryXPPerKo: Skill;
    increasedSkillMasteryXPPerArachi: Skill;
    increasedSkillMasteryXPPerIridan: Skill;
    increasedSkillMasteryXPPerHyden: Skill;
    increasedSkillMasteryXPPerSyllia: Skill;
    /** Dummy modifier for adding mastery pool xp */
    masteryToken: Skill;
}
interface SkillModifierData {
    skillID: string;
    value: number;
}
interface SkillModifier {
    skill: AnySkill;
    value: number;
}
declare type ModifierObject<Skill, Standard> = StandardModifierObject<Standard> & SkillModifierObject<Skill>;
declare type PlayerModifierData = Partial<ModifierObject<SkillModifierData[], number>>;
declare type PlayerModifierObject = Partial<ModifierObject<SkillModifier[], number>>;
declare type OldSkillModifierData = [number, number];
declare type CombatModifierData = Partial<CombatModifierObject<number>>;
declare type OldPlayerModifierData = Partial<ModifierObject<OldSkillModifierData[], number>>;
declare type CombatModifierKey = keyof CombatModifierObject<any>;
declare type ModifierKeys = keyof ModifierObject<any, any>;
declare type SkillModifierKeys = keyof SkillModifierObject<any>;
declare type StandardModifierKeys = keyof StandardModifierObject<any>;
declare type SkillEntry<T> = [SkillModifierKeys, T];
declare type StandardEntry<T> = [StandardModifierKeys, T];
declare type ModifierEntry<Skill, Standard> = SkillEntry<Skill> | StandardEntry<Standard>;
declare type ModifierDataEntry = ModifierEntry<OldSkillModifierData[], number>;
declare type SkillModifierArrayElement = {
    key: SkillModifierKeys;
    values: SkillModifier[];
};
declare type StandardModifierArrayElement = {
    key: StandardModifierKeys;
    value: number;
};
declare type ModifierArrayElement = SkillModifierArrayElement | StandardModifierArrayElement;
declare type ModifierArray = ModifierArrayElement[];
