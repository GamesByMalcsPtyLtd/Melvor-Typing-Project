/*  Melvor Typing Project v1.8.2: Fetches and Documents Melvor Idle

    Copyright (C) <2021>  <Coolrox95>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
// Contains type definitions for the game, as a companion to the jsdoc
declare function CompileErrorReport(error: PlayFabModule.IPlayFabError): string;
/** The string representation of a number, or the number itself */
type NumberString = string | number;
type SkillID = number;
/** An index of items */
type ItemID = number;
type PetID = number;
type BankID = number;
type SpellID = number;
type AncientID = number;
type CurseID = number;
type AuroraID = number;
type AltmagicID = number;
type MonsterID = number;
type CharacterID = number;
type EquipSetID = 0 | 1 | 2 | 3;
type EquippedFoodID = 0 | 1 | 2 | 3;
type EquipSlotID = number;
type AttackStyleID = number;
type CombatAreaID = number;
type SlayerAreaID = number;
/** The type of a combat area. 0 for normal, 1 for slayer, 2 for dungeons */
type AreaType = 0 | 1 | 2;
type DungeonID = number;
type LootID = number;
type PrayerID = number;
/** An index of playerSpecialAttacks */
type PlayerSpecialID = number;
type EnemySpecialID = number;
type SlayerTier = number;
type SaveString = string;
type TimeoutID = number;
type BankTabID = number;
type ObjectKey = string | number | symbol;
type FarmingAreaID = number;
type FiremakingID = number;
/** An index of fishingItems or fishing mastery */
type FishingID = number;
/** An index of FishingAreas */
type FishingAreaID = number;
/** An index of FishingAreas[i].fish */
type FishID = number;
/** An index of fletchingItems */
type FletchingID = number;
type FletchLog = number;
type FletchingCategory = 0 | 1 | 2 | 3 | 4 | 5;
/** An index of herbloreItemData */
type HerbloreItemID = number;
type HerbloreCategory = 0 | 1 | 2;
type HerbloreTier = 0 | 1 | 2 | 3;
type AmmoType = 0 | 1 | 2 | 3;
type PageID = number;
type NotificationType = 'success' | 'info' | 'danger';
/** Index of glovesTracker, gloveID,glovesCost,glovesActions */
type GloveID = number;
/** Index of thievingNPC */
type ThievingID = number;
/** Index of tutorialTips */
type TutorialtipID = number;
/** Index of agilityObstacles */
type ObstacleID = number;
/** Index of passive pillars */
type PillarID = number;
/** Categories of agility obstacles */
type ObstacleCategories = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/** Current gamemode, 0 is normal, 1 is hardcore, 2 is adventure, 3 is CHAOS */
type GameMode = 0 | 1 | 2 | 3;
/** Index of rockData,oreTypes */
type MiningID = number;
interface ReqCheck {
  reqID: number,
  bankID: number,
  check: number
}
interface QtyReqCheck extends ReqCheck {
  qty: number
  itemID?: ItemID
}
/** Generic Interface for storing itemID quantity pairs */
interface ItemQuantity {
  id: ItemID,
  qty: number
}
interface BankItem {
  id: ItemID,
  qty: number,
  tab: BankTabID,
  sellsFor: number,
  stackValue?: number,
  locked?: boolean
}
interface BankDefaultItem {
  itemID: ItemID,
  tab: BankTabID
}
interface BankSearch {
  id: ItemID,
  qty: number,
  name: string,
  category: string,
  type: string,
  tab: BankTabID
}
interface EnemySpecialAttack {
  /** Index of enemySpecialAttacks */
  id: number,
  /** Displayed name */
  name: string,
  /** Displayed description */
  description: string,
  /** Base chance of attack to trigger in % */
  chance: number,
  /** Number of attacks to perform */
  attackCount: number,
  /** Time between attacks in ms */
  attackInterval: number,
  /** Attack always hits */
  forceHit: boolean,
  /** Attack deals damage equal to this multiplied by numberMultiplier */
  setDamage: null | number,
  /** Unused */
  setDOTDamage: null | number,
  /** Attack heals this % of enemy max HP */
  setDOTHeal?: null | number,
  /** Equivalent to attackInterval when setDOTDamage or setDOTHeal are present */
  DOTInterval: null | number,
  /** Equivalent to attackCount when  setDOTDamage or setDOTHeal are present*/
  DOTMaxProcs: null | number,
  /** Attack can apply stun to player on a hit */
  canStun: boolean,
  /** Number of turns attack stuns player for */
  stunTurns: null | number,
  /** Attack can apply active buffs to enemy */
  activeBuffs?: boolean,
  /** Number of enemy turns active buffs last */
  activeBuffTurns?: number,
  /** % Increase to enemy Melee evasion from active buff*/
  increasedMeleeEvasion?: number | null,
  /** % Increase to enemy Ranged evasion from active buff*/
  increasedRangedEvasion?: number | null,
  /** % Increase to enemy Magic evasion from active buff*/
  increasedMagicEvasion?: number | null,
  /** Flat increase to damage reduction from active buff */
  increasedDamageReduction?: null | number,
  /** Damage dealt to player equal to this times numberMultiplier on a player hit, from active buff*/
  reflectMelee?: number | null,
  /** Unused/No Effect */
  reflectRanged?: null,
  /** Unused/No Effect */
  reflectMagic?: null,
  /** Decrease to enemy attack interval in % from active buff */
  increasedAttackSpeed?: number,
  /** Unused */
  attackSpeedSlow?: null,
  /** Unused */
  attackSpeedSlowTurns?: null,
  /** Player attack interval is decreased by this % */
  attackSpeedDebuff?: number,
  /** Number of turns player attack interval is decreased for */
  attackSpeedDebuffTurns?: number | null,
  /** Attack applies burn debuff dealing this % of player max HP every 500ms */
  burnDebuff?: number,
  /** Attack can apply sleep to player on a hit */
  canSleep?: boolean,
  /** Number of turns attack sleeps player for */
  sleepTurns?: number,
  /** Attack damage is multiplied by this if the player is sleeping */
  sleepDamageMultiplier?: number,
  /** Attack deals damage equal to this % of the current enemy hitpoints */
  setHPDamage?: number,
  /** Attack heals the enemy based on damage dealt */
  lifesteal?: boolean,
  /** Enemy heals equal to damage dealt multiplied by this */
  lifestealMultiplier?: number,
  /** Attack can apply debuffs to player */
  applyDebuffs?: boolean,
  /** Number of player turns debuffs are applied for */
  applyDebuffTurns?: number,
  /** Player melee evasion is decreased by this % while debuffed */
  meleeEvasionDebuff?: null | number,
  /** Player ranged evasion is decreased by this % while debuffed */
  rangedEvasionDebuff?: null | number,
  /** Player magic evasion is decreased by this % while debuffed */
  magicEvasionDebuff?: number,
  /** Attack deals damage equal to this % of the players max hit */
  customDamageModifier?: number,
  /** Attack applies markOfDeath to player */
  markOfDeath?: boolean,
  /** Attack permanently decreases player accuracy by this % */
  decreasePlayerAccuracy?: number,
  /** Decrease in player accuracy can stack multiple times */
  decreasePlayerAccuracyStack?: boolean,
  /** Maximum % attack can decrease player accuracy by */
  decreasePlayerAccuracyLimit?: number,
  /** Attack temporarily increases enemy damage reduction by 10% per attack, while attacking */
  intoTheMist?: boolean,
  modifiers?: ModifierData
}
interface PlayerSpecialAttack {
  /** Index of playerSpecialAttacks */
  id: number,
  /** Display name */
  name: string,
  /** Display description */
  description: string,
  /** Chance this attack happens in % */
  chance: number,
  /** Number of times this attack hits */
  attackCount: number,
  /** Interval between multiple hits */
  attackInterval: number,
  /** Special attack always hits, if ancient spell also requires accuracy above 20k */
  forceHit: boolean,
  /** Attack deals random damage based on current hitpoints */
  setHPDamage?: number,
  /** New Prop for Sandstorm Ring? */
  setHPDamageMinimum?: number
  /** Attack deals this % of max hit */
  customDamageModifier?: number
  /** Attack deals this amount of damage * numberMultiplier */
  setDamage?: number | null,
  extraDamage?: number
  /** Attack deals fixed damage based on magic level */
  stormsnap?: boolean,
  /** Attack has this % chance to stun enemy on hit */
  stunChance?: number,
  /** Attack always stuns enemy on hit */
  canStun?: boolean,
  /** Number of turns the attack stuns the enemy for */
  stunTurns?: number | null,
  /** Attack deals fixed damage equal to play maxHit */
  maxHit?: boolean,
  /** Attack can apply bleed */
  canBleed?: boolean,
  /** Chance to apply bleed on hit in %, if not present defaults to 100% */
  bleedChance?: number,
  /** Interval between bleed procs in [ms] */
  bleedInterval?: number,
  /** Total number of bleed procs */
  bleedCount?: number,
  /** Total bleed damage is totalBleedHP*attackDamage */
  totalBleedHP?: number,
  /** Total bleed damage is this % of enemy max HP */
  totalBleedHPPercent?: number,
  /** Total bleed damage is instead random between [0,totalBleedHP*attackDamage) */
  totalBleedHPCustom?: 1,
  /** Adds value*numberMultiplier to total bleed damage */
  extraBleedDmg?: number,
  /** Enemy sleeps on hit */
  canSleep?: boolean,
  /** Number of turns enemy sleeps for */
  sleepTurns?: number,
  /** Attack permanently decreases enemy ranged evasion by %*/
  decreasedRangedEvasion?: number,
  /** Attack permanently decreases enemy melee evasion by %*/
  decreasedMeleeEvasion?: number,
  /** Attack permanently decreases enemy magic evasion by %*/
  decreasedMagicEvasion?: number,
  /** Attack permanently decreases enemy accuracy by %*/
  decreasedAccuracy?: number,
  /** Damage is always multiplied by this */
  damageMultiplier: number,
  /** Fraction of damage dealt this attack heals player for */
  healsFor?: number,
  /** On hit, decreased enemy attack speed by this % */
  attackSpeedDebuff?: number,
  /** Turns attackSpeedDebuff lasts */
  attackSpeedDebuffTurns?: number,
  /** Unused */
  setDOTDamage?: null,
  /** Unused */
  DOTInterval?: null,
  /** Unused */
  DOTMaxProcs?: null,
  /** Unused */
  activeBuffs?: boolean,
  /** Unused */
  burnDebuff?: number,
  modifiers?: ModifierData
}

interface PlayerEnemyObject<Player, Enemy> {
  player: Player,
  enemy: Enemy
}
type CombatData = PlayerEnemyObject<PlayerCombatData, EnemyCombatData>;
type SpecialAttackData = {
  isActive?: boolean,
  turnsLeft?: number
}
interface EnemyCombatData extends EnemyModifierData {
  /** 1: LEMONG GANG 2: Some carrot people or whatever */
  gang?: number;
  /** Monster ID */
  id: null | MonsterID,
  /** Current HP of enemy */
  hitpoints: number,
  /** Maximum HP of enemy */
  maxHitpoints?: number;
  /** Attack Skill Level */
  attackLevel?: number;
  /** Strength Skill Level */
  strengthLevel?: number;
  /** Defence Skill Level */
  defenceLevel?: number;
  /** Ranged Skill Level */
  rangedLevel?: number;
  /** Magic Skill Level */
  magicLevel?: number;
  /** Level used to calculate Accuracy Rating */
  effectiveAttackLevel: number,
  /** Melee Attack Bonus (used to calculate Accuracy) */
  attackBonus?: number;
  /** Ranged Attack Bonus (used to Calculate Accuracy) */
  attackBonusRanged?: number;
  /** Magic Attack Bonus (used to Calculate Accuracy) */
  attackBonusMagic?: number;
  /** Current Accuracy Rating of enemy */
  maximumAttackRoll: number,
  /** Level used to calculate enemy max hit */
  effectiveStrengthLevel: number,
  /** Melee Strength Bonus (used to calculate Max Hit for Melee) */
  strengthBonus?: number;
  /** Ranged Strength Bonus (used to calcualte Max Hit for Ranged) */
  strengthBonusRanged?: number;
  /** Magic % Damage Bonus (used to calculate Max Hit for Magic) */
  damageBonusMagic?: number;
  /** Magic Strength Bonus (Golbin Raid Exclusive, used to calculate Max Hit) */
  magicStrengthBonus?: number;
  /** Current Max Hit of enemy */
  maximumStrengthRoll: number,
  /** Level used to calculate melee evasion */
  effectiveDefenceLevel: number,
  /** Level used to calculate ranged evasion */
  effectiveRangedDefenceLevel?: number;
  /** Level used to calculate magic evasion */
  effectiveMagicDefenceLevel?: number;
  /** Melee Defence Bonus (used to calculate melee evasion) */
  defenceBonus?: number;
  /** Ranged Defence Bonus (used to calculate ranged evasion) */
  defenceBonusRanged?: number;
  /** Magic Defence Bonus (used to calculate magic evasion) */
  defenceBonusMagic?: number;
  /** Current Melee Evasion */
  maximumDefenceRoll: number,
  /** Current Ranged Evasion */
  maximumRangedDefenceRoll?: number,
  /** Current Magic Evasion */
  maximumMagicDefenceRoll?: number,
  /** Base attack speed of enemy before any modifiers [ms] */
  baseAttackSpeed?: number;
  /** Current Attack Interval of Enemy [ms] */
  attackSpeed?: number;
  /** If enemy has special attack */
  hasSpecialAttack?: boolean;
  /** Indices of enemySpecialAttacks */
  specialAttackID?: number[];
  /** % Chance for each specialAttackID */
  specialAttackChances?: number[];
  /** Base damage reduction of enemy before any modifiers [%]*/
  baseDamageReduction?: number,
  /** Current damage reduction of enemy [%] */
  damageReduction?: number,
  /** If Enemy has buffs from special attack active */
  activeBuffs: boolean,
  /** enemyTimers Left until buffs run out */
  buffTurns: number,
  /** Enemy reflects this amount*numberMultiplier damage upon being hit */
  reflectMelee: null | number,
  /** @deprecated Unused property (has no effect) */
  reflectRanged: null | number,
  /** @deprecated Unused property (has no effect) */
  reflectMagic: null | number,
  /** enemyTimers left until slow runs out */
  attackSpeedDebuffTurns: number,
  /** Enemy is afflicted by player curse */
  isCursed: boolean,
  /** Index of CURSES enemy is afflicted by */
  curseID?: CurseID;
  /** enemyTimers left until curse runs out */
  curseTurnsLeft: number,
  /** Damage multplier from Anguish Curse (additive with other % damage bonuses) */
  extraDamageMultiplier: number,
  /** % decrease to maximumAttackRoll from player special attacks (multiplicative) */
  decreasedAccuracy?: number
  /** Enemy is under the effect of a bleed DOT */
  isBleeding?: boolean,
  /** Interval between bleed ticks [ms] */
  bleedInterval?: number;
  /** Number of bleed ticks before removing DOT*/
  bleedCount?: number;
  /** Property used to calculate bleedHPPerProc */
  totalBleedHP?: number;
  /** Enemy is under the stun effect */
  stunned?: boolean;
  /** enemyTimers left until stun wears off */
  stunTurns?: number;
  /** Enemy is under the sleep effect */
  sleep?: boolean,
  /** enemyTimers left until sleep wears off */
  sleepTurns?: number,
  /** Enemy has one or more passive modifiers active */
  hasPassive?: boolean;
  /** Indices of combatPassive to apply to enemy stats */
  passiveID?: number[];
  /** Enemy is using the Into the Mist special attack */
  intoTheMist?: boolean;
  /** Enemy attack type
   * 0: Melee
   * 1: Ranged
   * 2: Magic
   */
  attackType?: number;
  /** Enemy is dead */
  isDead?: boolean;
  /** @deprecated Unused property (has no effect) */
  lifesteal?: number;
  burnDebuff?: number;
  isBurning?: boolean;
}
interface PlayerCombatData {
  /** Current HP of player */
  hitpoints: number,
  /** Player is stunned and can't attack */
  stunned: boolean,
  /** Number of playerTimers left till stun wears off*/
  stunTurns: number,
  /** Base attack speed of player [ms] before attackSpeedDebuff/attackSpeedBuff */
  baseAttackSpeed: number,
  /** % decrease to baseAttackSpeed (multiplicative with other speed bonuses) */
  attackSpeedDebuff: number,
  /** Number of playerTimers left until slow wears off */
  attackSpeedDebuffTurns: number,
  /** @deprecated Unused Property */
  increasedDamageReduction: number,
  /** Player is sleeping and can't attack */
  sleep?: boolean,
  /** Number of playerTimers left till sleep wears off */
  sleepTurns?: number,
  /** Player has burn debuff active */
  isBurning?: boolean;
  /** Total % of player maxHitpoints that burn debuff takes */
  burnDebuff?: number,
  /** Player is under the effects of an enemy special stat debuff */
  activeDebuffs?: boolean,
  /** Number of enemyTimers left till attack debuff wears off */
  debuffTurns?: number,
  /** % decrease to player melee evasion from enemy spec (multiplicative with other decreases) */
  meleeEvasionDebuff?: number;
  /** % decrease to player ranged evasion from enemy spec (multiplicative with other decreases) */
  rangedEvasionDebuff?: number;
  /** % decrease to player magic evasion from enemy spec (multiplicative with other decreases) */
  magicEvasionDebuff?: number;
  /** % decrease to maximumAttackRoll from enemy spec (additive with other decreases) */
  decreasedAccuracy?: number,
  /** Number of affliction debuffs stacked on player */
  afflictedStacks?: number
  /** Player has special attack */
  hasSpecialAttack?: boolean;
  /** Array of special attack IDs the player has */
  specialAttackID?: PlayerSpecialID[];
  /** Increased minimum hit from Charged Aurora */
  increasedMinHit?: number,
  /** Player has Mark of Death debuff active removePlayerMarkOfDeath, applyMarkOfDeathToPlayer are relevant*/
  markOfDeath?: boolean;
  /** Number of Mark of Death debuff stacks player has. */
  markOfDeathStacks?: number;
  /** @deprecated This seems to not actually do anything */
  markOfDeathTurns?: number;
  /** % Healing from damage from Fervor Aurora (additive with other increases) */
  lifesteal?: number,
  /** decrease to playerAttackSpeed in [ms] from Surge Aurora (applies after all other bonuses) */
  attackSpeedBuff?: number;
  /** % increase to maximumRangedDefenceRoll from Surge Aurora (multiplicative with other increases) */
  rangedEvasionBuff?: number;
  /** Flat increase to baseMaxHit from Fury Aurora (applies before bonuses from modifiers) */
  increasedMaxHit?: number;
  /** % increase to Magic Evasion from Fury Aurora (multiplicative with other increases) */
  magicEvasionBuff?: number;
  /** % increase to Melee Evasion from Fervor Aurora (multiplicative with other increases) */
  meleeEvasionBuff?: number;
  /** @deprecated Unused property, use playerModifiers instead */
  slayerAreaEffectNegationPercent?: number;
  /** @deprecated Unused property, use playerModifiers instead */
  slayerAreaEffectNegationFlat?: number;
  /**
   * Combat levels used to compute player stats
   * 0: Attack
   * 1: Strength
   * 2: Defence
   * 3: Hitpoints
   * 4: Ranged
   * 5: Magic
   * 6: Prayer
   */
  combatLevels?: number[];
  /** Stats from players Equipment */
  baseStats?: PlayerBaseStats
  /**
   * Bonuses from combat potions
   * 0: Melee Accuracy
   * 1: Melee Evasion
   * 2: Melee Max Hit
   * 3: Ranged Evasion, Ranged Accuracy
   * 4: Ranged Max Hit
   * 5: Magic Evasion, Magic Accuracy
   * 6: Magic Max Hit
   * 7: Regeneration (but this value isn't used)
   * 8: Damage Reduction
   */
  herbloreBonus?: number[];
  /** Free skill levels used to compute maximumAttackRoll from combat style */
  attackStyleBonusAccuracy?: number;
  /** Free skill levels used to compute baseMaxHit from combat style */
  attackStyleBonusStrength?: number;
  maximumDefenceRoll?: number,
  maximumRangedDefenceRoll?: number,
  maximumMagicDefenceRoll?: number
}

type PlayerBaseStats = {
  /** Melee Attack Bonus [stab,slash,defend] */
  attackBonus: [number, number, number],
  /** Melee Defence Bonus */
  defenceBonus: number,
  /** Melee Strength Bonus */
  strengthBonus: number,
  /** % Damage Reduction */
  damageReduction: number,
  /** Ranged Attack Bonus */
  attackBonusRanged: number,
  /** Ranged Defence Bonus */
  defenceBonusRanged: number,
  /** Ranged Strength Bonus */
  strengthBonusRanged: number,
  /** Magic Attack Bonus */
  attackBonusMagic: number,
  /** Magic Defence Bonus */
  defenceBonusMagic: number,
  /** % Bonus to Magic Max Hit */
  damageBonusMagic: number,
};
interface EquipmentSet {
  equipment: number[],
  ammo: number,
  summonAmmo: [number,number]
}
interface ItemQuantity2 {
  itemID: ItemID,
  qty: number
}
interface MonsterStat {
  monsterID: MonsterID,
  stats: number[]
}
interface SlayerTask {
  monsterID: MonsterID,
  count: number,
  tier: SlayerTier,
  extended: boolean
}
interface CookingItem {
  itemID: ItemID,
  cookingID: number,
  cookingLevel: number
}
interface LogsForFire {
  itemID: ItemID,
  firemakingID: number
}
interface CraftingItem {
  itemID: ItemID,
  craftingLevel: number,
  craftingID: number
}
interface Seed {
  itemID: ItemID,
  level: number
}
interface FarmingPatch {
  type: string;
  seedID: ItemID;
  compost: number;
  timePlanted: number;
  setInterval: number;
  timeout: null | TimeoutID;
  hasGrown: boolean;
  unlocked: boolean;
  gloop: boolean;
  level: number;
  cost: number;
}
interface FarmingArea {
  id: number;
  areaName: string;
  patches: FarmingPatch[]
}
interface FishingItem {
  itemID: ItemID,
  fishingLevel: number,
  fishingID: FishingID
}

type Loot = [ItemID, number];
type LootTable = Loot[];

interface FletchingItem {
  itemID: ItemID,
  fletchingLevel: number,
  fletchingID: FletchingID,
  fletchingCategory: FletchingCategory
}
interface RaidHistory {
  skillLevels: number[],
  equipment: number[],
  ammo: number,
  inventory: ItemQuantity[],
  food: ItemQuantity2,
  wave: number,
  kills: number,
  timestamp: number,
  raidCoinsEarned: number,
}
interface HerbloreItem {
  id: HerbloreItemID,
  name: string,
  itemID: ItemID[],
  category: HerbloreCategory,
  herbloreLevel: number,
  herbloreXP: number
}
interface HerbloreBonus {
  itemID: ItemID,
  bonus: [null | PotionBonusID, null | number],
  charges: number
}
type HerbloreBonuses = NumberDictionary<HerbloreBonus>;
type PotionBonusID = number;


interface BaseSpell {
  name: string;
  media: string;
  magicLevelRequired: number;
  runesRequired: ItemQuantity[];
  runesRequiredAlt?: ItemQuantity[];
}
interface Spell extends BaseSpell {
  maxHit: number;
  spellType: number;
}
interface Curse extends BaseSpell {
  description: string;
  chance: number;
  effectValue: number | number[];
}
interface BaseAurora extends BaseSpell {
  description: string;
  effectValue: number | number[];
  requiredItem: ItemID | -1,
}


interface Ancient extends BaseSpell {
  description: string;
  specID: PlayerSpecialID;
  maxHit: number;
  requiredDungeonCompletion: [DungeonID, number];
}
interface Altmagic extends BaseSpell {
  description: string,
  /**
   * -1: Do not need to select item
   * 0: Need to select a Bar item
   * 1: Need to select an item from the bank (may be a subset)
   */
  selectItem: number,
  /** If present, spell produces this item */
  convertTo?: ItemID,
  /** If present, spell produces this quantity of item */
  convertToQty?: number,
  magicXP: number,
  /** If present, spell ignores coal costs */
  ignoreCoal?: boolean,
  /** Alchemy value multiplier */
  effectValue?: number,
  /** Spell is item alchemy */
  isAlch?: boolean,
  /** Spell converts junk*/
  isJunk?: boolean,
  /** Spell converts coal */
  needCoal?: boolean
}
interface ItemStat {
  /**
   * 0: timesFound
   * 1: timesSold
   * 2: gpFromSale
   * 3: deathCount
   * 4: damageTaken
   * 5: damageDealt
   * 6: missedAttacks
   * 7: timesEaten
   * 8: healedFor
   * 9: totalAttacks
   * 10: amountUsedInCombat
   * 11: timeWaited
   * 12: timesDied
   * 13: timesGrown
   * 14: harvestAmount
   * 15: enemiesKilled
   * 16: timesOpened
   */
  stats: number[],
  itemID: ItemID
}

interface OfflineBase {
  skill: SkillID,
  timestamp: number
}
/** Used for woodcutting */
interface OfflineWoodcut extends OfflineBase {
  action: number[],
}
/** Used for woodcutting */
interface OfflineMagic extends OfflineBase {
  action: [number, [number, number, number]],
}
interface OfflineUnset {
  skill: null,
  action: null,
  timestamp: null
}
/** Used for all other skills */
interface OfflineSkill extends OfflineBase {
  action: number,
}
/** Used for fishing, fletching, alt magic */
interface OfflineTuple extends OfflineBase {
  action: [number, number]
}

type Offline = OfflineWoodcut | OfflineTuple | OfflineUnset | OfflineSkill | OfflineMagic;

type TippyTooltip = import("tippy.js").Instance<import("tippy.js").Props>;
type TooltipInstances = {
  bank: TippyTooltip[],
  spellbook: TippyTooltip[],
  equipment: TippyTooltip[],
  minibar: TippyTooltip[],
  combatInfo: TippyTooltip[],
  specialAttack: TippyTooltip[],
  equipmentSets: TippyTooltip[],
  masteryModal: TippyTooltip[],
  combatXP: TippyTooltip[],
  autoEat: TippyTooltip[],
  fletching?: TippyTooltip[],
  herblore?: TippyTooltip[],
  smithing?: TippyTooltip[],
  enemyAttackType?: TippyTooltip[],
  loot?: TippyTooltip[],
  crafting?: TippyTooltip[],
  prayerMenu?: TippyTooltip[],
  craftingRecipe?: TippyTooltip[],
  herbloreRecipe?: TippyTooltip[],
  selectMagic?: TippyTooltip[],
  selectItemForMagic?: TippyTooltip[],
  runecrafting?: TippyTooltip[],
  runecraftingRecipe?: TippyTooltip[],
  fletchingRecipe?: TippyTooltip[],
  smithingRecipe?: TippyTooltip[],
  itemLog?: TippyTooltip[],
  monsterLog?: TippyTooltip[],
  petLog?: TippyTooltip[],
  agilityItemCosts?: TippyTooltip[],
  summoningSynergy?: TippyTooltip[],
  summoningRecipe?: TippyTooltip[],
  summoning?: TippyTooltip[],
}
type SumFunction = (arr: number[]) => number;
type OldMasteryArray = { mastery: number, masteryXP: number }[];
type MasteryCheckPoint = number;
type Mastery = NumberDictionary<MasteryData>;
interface MasteryData {
  pool: number,
  xp: number[]
}
interface Monster {
  id?: MonsterID,
  name: string,
  hitpoints: number,
  attackLevel: number,
  strengthLevel: number,
  defenceLevel: number,
  rangedLevel: number,
  magicLevel: number,
  attackBonus: number,
  attackBonusRanged?: number,
  strengthBonus: number,
  defenceBonus: number,
  defenceBonusRanged: number,
  defenceBonusMagic: number,
  attackSpeed: number,
  attackType: number,
  dropCoins: [number, number],
  lootTable?: [ItemID, number, number][],
  lootChance?: number,
  media: string,
  bones?: number | null,
  canSlayer?: boolean,
  strengthBonusRanged?: number,
  slayerXP?: number,
  attackBonusMagic?: number,
  damageBonusMagic?: number,
  selectedSpell?: SpellID,
  lootQty?: [number],
  foundIn?: 1,
  description?: string,
  isBoss?: boolean,
  hasSpecialAttack?: boolean,
  specialAttackID?: number[],
  setMaxHit?: number | null,
  boneQty?: number,
  overrideSpecialChances?: number[],
  hasPassive?: boolean,
  passiveID?: number[],
  damageReduction?: number,
  ignoreCompletion?: boolean,
  hasAnimation?: boolean,
  mediaAnimation?: string
}
interface Pet {
  name: string,
  description: string,
  media: string,
  acquiredBy: string,
  skill: SkillID,
  chance?: number,
  killCount?: number,
  ignoreCompletion?: boolean
  modifiers?: ModifierData
  obtained?: { dungeonCompletion: [DungeonID, number][] },
  activeInRaid: boolean
}
interface RockData {
  maxHP: number;
  damage: number;
  depleted: boolean;
  respawnTimer: null | TimeoutID;
}
/** Mastery ID for runecrafting */
type RunecraftingID = number;
type RunecraftingCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6;
interface RunecraftingItem {
  itemID: ItemID,
  runecraftingLevel: number,
  runecraftingID: RunecraftingID,
  runecraftingCategory: RunecraftingCategory
}

interface SaveGame {
  firstTime: typeof firstTime,
  username: typeof username,
  nameChanges: typeof nameChanges,
  gp: typeof gp,
  currentBankUpgrade: typeof currentBankUpgrade,
  skillXP: typeof skillXP,
  /** Redundant, can be reproduced on load */
  skillLevel: typeof skillLevel,
  /** Redundant, can be reproduced on load */
  nextLevelProgress: typeof nextLevelProgress,
  treeMasteryData: typeof treeMasteryData,
  currentAxe: typeof currentAxe,
  treeCutLimit: typeof treeCutLimit,
  /** Contains redundant data, can be reduced in size */
  bank: typeof bank,
  bankMax: typeof bankMax,
  ignoreBankFull: typeof ignoreBankFull,
  /** Contains redundant data, can be reduced in size */
  statsGeneral: typeof statsGeneral,
  /** Contains redundant data, can be reduced in size */
  statsWoodcutting: typeof statsWoodcutting,
  logsMastery: typeof logsMastery,
  /** Contains redundant data, can be reduced in size */
  statsFiremaking: typeof statsFiremaking,
  fishMastery: typeof fishMastery,
  currentRod: typeof currentRod,
  /** Contains redundant data, can be reduced in size */
  statsFishing: typeof statsFishing,
  cookingMastery: typeof cookingMastery,
  upgradedToRange: typeof upgradedToRange,
  /** Contains redundant data, can be reduced in size */
  statsCooking: typeof statsCooking,
  defaultPageOnLoad: typeof defaultPageOnLoad,
  miningOreMastery: typeof miningOreMastery,
  /** Contains redundant data, can be reduced in size */
  statsMining: typeof statsMining,
  currentPickaxe: typeof currentPickaxe,
  /** Contains redundant data, can be reduced in size */
  statsSmithing: typeof statsSmithing,
  levelUpScreen: typeof levelUpScreen,
  gameUpdateNotification: typeof gameUpdateNotification,
  /** Redundant, can be reproduced on load */
  equippedItems: typeof equippedItems,
  attackStyle: typeof attackStyle,
  /** Contains redundant data, can be reduced in size */
  combatData: typeof combatData,
  currentCombatFood: typeof currentCombatFood,
  /** Can be reduced in size by changing to array */
  equippedFood: typeof equippedFood,
  smithingMastery: typeof smithingMastery,
  /** Contains redundant data, can be reduced in size */
  statsCombat: typeof statsCombat,
  continueThievingOnStun: typeof continueThievingOnStun,
  thievingMastery: typeof thievingMastery,
  farmingMastery: typeof farmingMastery,
  showItemNotify: typeof showItemNotify,
  /** Contains redundant data, can be reduced in size */
  glovesTracker: typeof glovesTracker,
  currentCookingFire: typeof currentCookingFire,
  /** Contains redundant data, can be reduced in size */
  rockData: typeof rockData,
  fletchingMastery: typeof fletchingMastery,
  craftingMastery: typeof craftingMastery,
  /** Redundant, can be reproduced on load*/
  ammo: typeof ammo,
  myBankVersion: typeof myBankVersion,
  /** Contains redundant data, can be reduced in size */
  statsThieving: typeof statsThieving,
  /** Contains redundant data, can be reduced in size */
  statsFarming: typeof statsFarming,
  /** Contains redundant data, can be reduced in size */
  statsFletching: typeof statsFletching,
  /** Contains redundant data, can be reduced in size */
  statsCrafting: typeof statsCrafting,
  autoRestartDungeon: typeof autoRestartDungeon,
  autoSaveCloud: typeof autoSaveCloud,
  selectedSpell: typeof selectedSpell,
  runecraftingMastery: typeof runecraftingMastery,
  darkMode: typeof darkMode,
  buyQty: typeof buyQty,
  itemLog: typeof itemLog,
  dungeonCompleteCount: typeof dungeonCompleteCount,
  sellQty: typeof sellQty,
  /** Contains redundant data, can be reduced in size */
  statsRunecrafting: typeof statsRunecrafting,
  showGPNotify: typeof showGPNotify,
  enableAccessibility: typeof enableAccessibility,
  /** Old save variable that can be deleted */
  showSkillNav: boolean,
  accountGameVersion: typeof accountGameVersion,
  prayerPoints: typeof prayerPoints,
  slayerCoins: typeof slayerCoins,
  /** Can be serialized to reduce size */
  slayerTask: typeof slayerTask,
  showEnemySkillLevels: typeof showEnemySkillLevels,
  monsterStats: typeof monsterStats,
  itemStats: typeof itemStats,
  confirmationOnClose: typeof confirmationOnClose,
  herbloreMastery: typeof herbloreMastery,
  /** Contains redundant data, can be reduced in size */
  newFarmingAreas: typeof newFarmingAreas,
  equipmentSets: typeof equipmentSets,
  selectedEquipmentSet: typeof selectedEquipmentSet,
  currentAutoEat: typeof currentAutoEat,
  equipmentSetsPurchased: typeof equipmentSetsPurchased,
  /** Contains redundant data, can be reduced in size */
  herbloreBonuses: typeof herbloreBonuses,
  autoPotion: typeof autoPotion,
  autoUseSpecialAttack: typeof autoUseSpecialAttack,
  showHPNotify: typeof showHPNotify,
  /** Contains redundant data, can be reduced in size */
  statsHerblore: typeof statsHerblore,
  offline: typeof offline,
  selectedAttackStyle: typeof selectedAttackStyle,
  showCommas: typeof showCommas,
  showVirtualLevels: typeof showVirtualLevels,
  formatNumberSetting: typeof formatNumberSetting,
  /** Can be converted to array to reduce size */
  tutorialTips: typeof tutorialTips,
  saveTimestamp: typeof saveTimestamp,
  secretAreaUnlocked: typeof secretAreaUnlocked,
  equipmentSwapPurchased: typeof equipmentSwapPurchased,
  godUpgrade: typeof godUpgrade,
  lockedItems: typeof lockedItems,
  showSaleNotifications: typeof showSaleNotifications,
  showShopNotifications: typeof showShopNotifications,
  pauseOfflineActions: typeof pauseOfflineActions,
  showCombatMinibar: typeof showCombatMinibar,
  showCombatMinibarCombat: typeof showCombatMinibarCombat,
  activeAurora: typeof activeAurora,
  currentGamemode: typeof currentGamemode,
  petUnlocked: typeof petUnlocked,
  showSkillMinibar: typeof showSkillMinibar,
  saveStateBeforeRaid: typeof saveStateBeforeRaid,
  golbinRaidHistory: typeof golbinRaidHistory,
  golbinRaidStats: typeof golbinRaidStats,
  raidCoins: typeof raidCoins,
  disableAds: typeof disableAds,
  /** Can be serialized to reduce size */
  SETTINGS: typeof SETTINGS,
  /** Can be serialized to reduce size */
  MASTERY: typeof MASTERY,
  useCombinationRunes: typeof useCombinationRunes,
  firstTimeLoad: typeof firstTimeLoad,
  slayerTaskCompletion: typeof slayerTaskCompletion,
  autoSlayerUnlocked: typeof autoSlayerUnlocked,
  autoSlayer: typeof autoSlayer,
  /** Redundant, can be reproduced on load */
  itemsAlreadyFound: typeof itemsAlreadyFound,
  xmasPresents: number,
  /** Can be massively reduced in size */
  shopItemsPurchased: typeof shopItemsPurchased,
  titleNewsID: typeof titleNewsID,
  chosenAgilityObstacles: typeof chosenAgilityObstacles,
  skillsUnlocked: typeof skillsUnlocked,
  agilityObstacleBuildCount: typeof agilityObstacleBuildCount,
  agilityPassivePillarActive: typeof agilityPassivePillarActive,
  scheduledPushNotifications: typeof scheduledPushNotifications,
  randomModifiers: typeof randomModifiers
  summoningData: typeof summoningData
}
type SaveKey = keyof SaveGame;
interface SmithingItem {
  itemID: ItemID,
  smithingLevel: number,
  smithingID: number,
  name: string,
  category: SmithingCategory,
}
/** Index of smithingItems */
type SmithingID = number;
type SmithingCategory = number;
interface GameStat {
  stat: string;
  id: string;
  count: number;
}
/** Index of trees */
type WoodcuttingID = number;

interface BankSearchOpts {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: true,
  findAllMatches: true,
  threshold: 0.1,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'category', 'id', 'type'],
}

interface StandardModifierObject<Standard> {
  /** Increases maximumAttackRoll by %: Implemented */
  increasedGlobalAccuracy: Standard,
  /** Decreases maximumAttackRoll by %: Implemented */
  decreasedGlobalAccuracy: Standard,
  /** Increases maximumAttackRoll by % when using Melee: Implemented */
  increasedMeleeAccuracyBonus: Standard,
  /** Decreases maximumAttackRoll by % when using Melee: Implemented */
  decreasedMeleeAccuracyBonus: Standard,
  /** Increases baseMaxHit by % when using Melee: Implemented */
  increasedMeleeStrengthBonus: Standard,
  /** Decreases baseMaxHit by % when using Melee: Implemented */
  decreasedMeleeStrengthBonus: Standard,
  /** Increases maximumDefenceRoll by %: Implemented */
  increasedMeleeEvasion: Standard,
  /** Decreases maximumDefenceRoll by %: Implemented */
  decreasedMeleeEvasion: Standard,
  /** Increases maximumAttackRoll by % when using Ranged: Implemented */
  increasedRangedAccuracyBonus: Standard,
  /** Decreases maximumAttackRoll by % when using Ranged: Implemented */
  decreasedRangedAccuracyBonus: Standard,
  /** Increases baseMaxHit by % when using Ranged: Implemented */
  increasedRangedStrengthBonus: Standard,
  /** Decreases baseMaxHit by % when using Ranged: Implemented */
  decreasedRangedStrengthBonus: Standard,
  /** Increases maximumRangedDefenceRoll by %: Implemented */
  increasedRangedEvasion: Standard,
  /** Decreases maximumRangedDefenceRoll by %: Implemented */
  decreasedRangedEvasion: Standard,
  /** Increases maximumAttackRoll by % when using Magic: Implemented */
  increasedMagicAccuracyBonus: Standard,
  /** Decreases maximumAttackRoll by % when using Magic: Implemented */
  decreasedMagicAccuracyBonus: Standard,
  /** Increases baseMaxHit by % when using Magic: Implemented */
  increasedMagicDamageBonus: Standard,
  /** Decreases baseMaxHit by % when using Magic: Implemented */
  decreasedMagicDamageBonus: Standard,
  /** Increases maximumMagicDefenceRoll by %: Implemented */
  increasedMagicEvasion: Standard,
  /** Decreases maximumMagicDefenceRoll by %: Implemented */
  decreasedMagicEvasion: Standard,
  /** Increases baseMaxHit by value*numberMultiplier after other bonuses: Implemented */
  increasedMaxHitFlat: Standard,
  /** Decreases baseMaxHit by value*numberMultiplier after other bonuses: Implemented */
  decreasedMaxHitFlat: Standard,
  /** Increases baseMaxHit by %: Implemnted */
  increasedMaxHitPercent: Standard,
  /** Decreases baseMaxHit by %: Implemented */
  decreasedMaxHitPercent: Standard,
  /** Increases damageReduction by value: Implemented */
  increasedDamageReduction: Standard,
  /** Decreases damageReduction by value: Implemented */
  decreasedDamageReduction: Standard,
  /** Increases chance to double bones and item drops by value: Implemented
   * Appears to be referenced in calculateChanceToDouble but it is never used in the context of combat */
  increasedChanceToDoubleLootCombat: Standard,
  /** Decreases chance to double bones and item drops by value: Implemented */
  decreasedChanceToDoubleLootCombat: Standard,
  /** Increases slayer coin gains by %: Implemented */
  increasedSlayerCoins: Standard,
  /** Decreases slayer coin gains by %: Implemented */
  decreasedSlayerCoins: Standard,
  /** Increases base HP regen by value*numberMultiplier: Implemented */
  increasedHPRegenFlat: Standard,
  /** Decreases base HP regen by value*numberMultiplier: Implemented */
  decreasedHPRegenFlat: Standard,
  /** Increases GP gain by % from all sources except selling items: Implemented  */
  increasedGPGlobal: Standard,
  /** Decreases GP gain by % from all sources except selling items: Implemented  */
  decreasedGPGlobal: Standard,
  /** Increases GP gain by % from monster drops and confetti crossbow: Implemented */
  increasedGPFromMonsters: Standard,
  /** Decreases GP gain by % from monster drops and confetti crossbow: Implemented */
  decreasedGPFromMonsters: Standard,
  /** Increases GP gain by value from monster drops before % bonuses: Implemented */
  increasedGPFromMonstersFlat: Standard,
  /** Decreases GP gain by value from monster drops before % bonuses: Implemented */
  decreasedGPFromMonstersFlat: Standard,
  /** Increases GP gain by % from thieving: Implemented */
  increasedGPFromThieving: Standard,
  /** Decreases GP gain by % from thieving: Implemented */
  decreasedGPFromThieving: Standard,
  /** Increases GP gain by value from thieving before % bonuses: Implemented */
  increasedGPFromThievingFlat: Standard,
  /** Decreases GP gain by value from thieving before % bonuses: Implemented */
  decreasedGPFromThievingFlat: Standard,
  /** Increases damage dealt to boss monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  increasedDamageToBosses: Standard,
  /** Decreases damage dealt to boss monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  decreasedDamageToBosses: Standard,
  /** Increases damage dealt to slayer task monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  increasedDamageToSlayerTasks: Standard,
  /** Decreases damage dealt to slayer task monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  decreasedDamageToSlayerTasks: Standard,
  /** Increases damage dealt to slayer area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  increasedDamageToSlayerAreaMonsters: Standard,
  /** Decreases damage dealt to slayer area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  decreasedDamageToSlayerAreaMonsters: Standard,
  /** Increases damage dealt to combat area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  increasedDamageToCombatAreaMonsters: Standard,
  /** Decreases damage dealt to combat area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  decreasedDamageToCombatAreaMonsters: Standard,
  /** Increases damage dealt to dungeon monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  increasedDamageToDungeonMonsters: Standard,
  /** Decreases damage dealt to dungeon monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  decreasedDamageToDungeonMonsters: Standard,
  /** Increases damage dealt to monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  increasedDamageToAllMonsters: Standard,
  /** Decreases damage dealt to monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
  decreasedDamageToAllMonsters: Standard,
  /** Increases the % efficiency of auto-eat by value: Implemented */
  increasedAutoEatEfficiency: Standard,
  /** Decreases the % efficiency of auto-eat by value: Implemented */
  decreasedAutoEatEfficiency: Standard,
  /** Increases the threshold % of maxHitpoints that will trigger auto-eat by value: Implemented */
  increasedAutoEatThreshold: Standard,
  /** Decreases the threshold % of maxHitpoints that will trigger auto-eat by value: Implemented */
  decreasedAutoEatThreshold: Standard,
  /** Increases the % of maxHitpoints that auto-eat heals to by value: Implemented */
  increasedAutoEatHPLimit: Standard,
  /** Decreases the % of maxHitpoints that auto-eat heals to by value: Implemented */
  decreasedAutoEatHPLimit: Standard,
  /** Increases the base healing value of food by %: Implemented */
  increasedFoodHealingValue: Standard,
  /** Decreases the base healing value of food by %: Implemented */
  decreasedFoodHealingValue: Standard,
  /** Increases the % chance to preserve prayerpoints by value: Implemented */
  increasedChanceToPreservePrayerPoints: Standard,
  /** Decreases the % chance to preserve prayerpoints by value: Implemented */
  decreasedChanceToPreservePrayerPoints: Standard,
  /** Decreases the quantity of prayerpoints consumed by a prayer by value: Implemented */
  increasedFlatPrayerCostReduction: Standard,
  /** Increases the quantity of prayerpoints consumed by a prayer by value: Implemented */
  decreasedFlatPrayerCostReduction: Standard,
  /** Increases minHitIncrease by value*numberMultiplier when using Air spells: Implemented */
  increasedMinAirSpellDmg: Standard,
  /** Decreases minHitIncrease by value*numberMultiplier when using Air spells: Implemented */
  decreasedMinAirSpellDmg: Standard,
  /** Increases minHitIncrease by value*numberMultiplier when using Water spells: Implemented */
  increasedMinWaterSpellDmg: Standard,
  /** Decreases minHitIncrease by value*numberMultiplier when using Water spells: Implemented */
  decreasedMinWaterSpellDmg: Standard,
  /** Increases minHitIncrease by value*numberMultiplier when using Earth spells: Implemented */
  increasedMinEarthSpellDmg: Standard,
  /** Decreases minHitIncrease by value*numberMultiplier when using Earth spells: Implemented */
  decreasedMinEarthSpellDmg: Standard,
  /** Increases minHitIncrease by value*numberMultiplier when using Fire spells: Implemented */
  increasedMinFireSpellDmg: Standard,
  /** Decreases minHitIncrease by value*numberMultiplier when using Fire spells: Implemented */
  decreasedMinFireSpellDmg: Standard,
  /** Increases the % chance to preserve ranged ammo by value: Implemented */
  increasedAmmoPreservation: Standard,
  /** Decreases the % chance to preserve ranged ammo by value: Implemented */
  decreasedAmmoPreservation: Standard,
  /** Increases the % chance to preserve runes by value: Implemented, but is messy */
  increasedRunePreservation: Standard,
  /** Decreases the % chance to preserve runes by value: Implemented, but is messy */
  decreasedRunePreservation: Standard,
  /** Decreases playerAttackSpeed by value [ms] before % bonuses: Implemented */
  decreasedPlayerAttackSpeed: Standard,
  /** Increases playerAttackSpeed by value [ms] before % bonuses: Implemented */
  increasedPlayerAttackSpeed: Standard,
  /** Decreases playerAttackSpeed by %: Implemented */
  decreasedPlayerAttackSpeedPercent: Standard,
  /** Increases playerAttackSpeed by %: Implemented */
  increasedPlayerAttackSpeedPercent: Standard,
  /** Increases slayer area effect % values by value: Implemented */
  increasedSlayerAreaEffectNegationFlat: Standard,
  /** Decreases slayer area effect % values by value: Implemented */
  decreasedSlayerAreaEffectNegationFlat: Standard,
  /** Decreases enemySpawnTimer by value [ms]: Implemented */
  decreasedMonsterRespawnTimer: Standard,
  /** Increases enemySpawnTimer by value [ms]: Implemented */
  increasedMonsterRespawnTimer: Standard,
  /** Increases the GP gained from item sales by %: Implemented, but not used. */
  increasedGPFromSales: Standard,
  /** Decreases the GP gained from item sales by %: Implemented, but not used. */
  decreasedGPFromSales: Standard,
  /** Increases maximum bank space by value: Implemented */
  increasedBankSpace: Standard,
  /** Decreases maximum bank space by value: Implemented */
  decreasedBankSpace: Standard,
  /** Increases maximum bank space by value, and increases bank upgrade cost via getBankUpgradeCost: Implemented */
  increasedBankSpaceShop: Standard,
  /** Decreases maximum bank space by value, and decreases bank upgrade cost via getBankUpgradeCost: Implemented */
  decreasedBankSpaceShop: Standard,
  /** Increases % chance to preserve potion charges by value: Implemented */
  increasedChanceToPreservePotionCharge: Standard,
  /** Decreases % chance to preserve potion charges by value: Implemented */
  decreasedChanceToPreservePotionCharge: Standard,
  /** Not implemented, Not Used
   * @deprecated Use increasedChanceToDoubleItemsSkill instead
   */
  increasedChanceToDoubleLootThieving: Standard,
  /** Not implemented, Not Used.
   * @deprecated Use decreasedChanceToDoubleItemsSkill instead
   */
  decreasedChanceToDoubleLootThieving: Standard,
  /** Increases % chance to preserve resources in all skills by value: Implemented via calculateSkillPreservationChance*/
  increasedGlobalPreservationChance: Standard,
  /** Decreases % chance to preserve resources in all skills by value: Implemented via calculateSkillPreservationChance*/
  decreasedGlobalPreservationChance: Standard,
  /** @deprecated Unimplemented and Used. Holdover from when agility had stamina */
  increasedStaminaPreservationChance: Standard,
  /** @deprecated Unimplemented and Used. Holdover from when agility had stamina */
  decreasedStaminaPreservationChance: Standard,
  /** Increases mastery xp earned from all skills by %: Implemented in getMasteryXpToAdd */
  increasedGlobalMasteryXP: Standard,
  /** Decreases mastery xp earned from all skills by %: Implemented in getMasteryXpToAdd */
  decreasedGlobalMasteryXP: Standard,
  /** Increases xp earned from all skills by %: Implemented in addXPBonuses */
  increasedGlobalSkillXP: Standard,
  /** Decreases xp earned from all skills by %: Implemented in addXPBonuses */
  decreasedGlobalSkillXP: Standard,
  /** @deprecated Unimplemented and Unused. Holdover from when agility had stamina */
  increasedMaxStamina: Standard,
  /** @deprecated Unimplemented and Unused. Holdover from when agility had stamina */
  decreasedMaxStamina: Standard,
  /** Increases maxRockHP by value: Implemented*/
  increasedMiningNodeHP: Standard,
  /** Decreases maxRockHP by value: Implemented*/
  decreasedMiningNodeHP: Standard,
  /** Allows swapping equipment/equipment sets/food in dungeons: Implemented */
  dungeonEquipmentSwapping: Standard,
  /** Increases available equipment sets by value: Implemented */
  increasedEquipmentSets: Standard,
  /** Allows usage of autoslayer: Implemented */
  autoSlayerUnlocked: Standard,
  /** Increases the number of trees that can be cut by value: Implemented */
  increasedTreeCutLimit: Standard,
  /** Increases the % chance to double items from all skills by value: Implemented */
  increasedChanceToDoubleItemsGlobal: Standard,
  /** Decreases the % chance to double items from all skills by value: Implemented */
  decreasedChanceToDoubleItemsGlobal: Standard,
  /** Increases the harvest quantity of farming by %: Implemented */
  increasedFarmingYield: Standard,
  /** Decreases the harvest quantity of farming by %: Implemented */
  decreasedFarmingYield: Standard,
  /** Increases maxHitpoints by value*numberMultiplier: Implemented */
  increasedMaxHitpoints: Standard,
  /** Decreases maxHitpoints by value*numberMultiplier: Implemented */
  decreasedMaxHitpoints: Standard,
  /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
  increasedStaminaPerObstacle: Standard,
  /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
  decreasedStaminaPerObstacle: Standard,
  /** Increases slayer task length by %: Implemented */
  increasedSlayerTaskLength: Standard,
  /** Decreases slayer task length by %: Implemented */
  decreasedSlayerTaskLength: Standard,
  /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
  increasedStaminaCost: Standard,
  /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
  decreasedStaminaCost: Standard,
  /** Increases the % of attack damage the player is healed for by value: Implemented */
  increasedLifesteal: Standard,
  /** Decreases the % of attack damage the player is healed for by value: Implemented */
  decreasedLifesteal: Standard,
  /** Unused and Unimplemented */
  increasedReflectDamage: Standard,
  /** Unused and Unimplemented */
  decreasedReflectDamage: Standard,
  /** Increases the GP from agility by %: Implemented in getAgilityGPMultiplier */
  increasedGPFromAgility: Standard,
  /** Decreases the GP from agility by %: Implemented in getAgilityGPMultiplier */
  decreasedGPFromAgility: Standard,
  /** Increases the % chance to double Ores from mining by value: Implemented */
  increasedChanceToDoubleOres: Standard,
  /** Decreases the % chance to double Ores from mining by value: Implemented */
  decreasedChanceToDoubleOres: Standard,
  /** Increases HP regeneration by %: Implemented */
  increasedHitpointRegeneration: Standard,
  /** Decreases HP regeneration by %: Implemented */
  decreasedHitpointRegeneration: Standard,
  /** Decreases golbin raid skip cost by %: Implemented */
  golbinRaidWaveSkipCostReduction: Standard,
  /** Increase the quantity of food from golbin raid by value: Implemented, possibly bugged as it just increases the amount, not just the min */
  golbinRaidIncreasedMinimumFood: Standard,
  /** Increases the maximum ammo quantity from goblin raid by %: Implemented */
  golbinRaidIncreasedMaximumAmmo: Standard,
  /** Increases the maximum rune quantity from goblin raid by %: Implemented */
  golbinRaidIncreasedMaximumRunes: Standard,
  /** Unlocks prayer in golbin raid: Implemented */
  golbinRaidPrayerUnlocked: Standard,
  /** Increases the prayer level in golbin raid by value: Implemented, I don't think this one displays anywhere though */
  golbinRaidIncreasedPrayerLevel: Standard,
  /** Increases the quantity of prayer points started with in golbin raid by value: Implemented */
  golbinRaidIncreasedPrayerPointsStart: Standard,
  /** Increases the quantity of prayer points recieved per wave in golbin raid by value: Implemented. Golbin raid could have issues with the PP being effected by other modifiers though */
  golbinRaidIncreasedPrayerPointsWave: Standard,
  /** Unlocks passive slot selection on tenth wave of golbin raid: Implemented */
  golbinRaidPassiveSlotUnlocked: Standard,
  /** Increases the quantity of runes started with in golbin raid by value: Implemented */
  golbinRaidIncreasedStartingRuneCount: Standard,
  /** Changes the itemID of the starting weapon in golbin raid to value: Implemented */
  golbinRaidStartingWeapon: Standard,
  /** Increases minHitIncrease by floor(baseMaxHit*value/100): Implemented */
  increasedMinHitBasedOnMaxHit: Standard,
  /** Decreases minHitIncrease by floor(baseMaxHit*value/100): Implemented */
  decreasedMinHitBasedOnMaxHit: Standard,
  /** Increases the charges of potions by value: Implemented */
  increasedPotionChargesFlat: Standard,
  /** Decreases the charges of potions by value: Implemented */
  decreasedPotionChargesFlat: Standard,
  // Start of New Modifiers for potions
  /** Increases the % chance to recieve bird's nests from Woodcutting by value: Implemented*/
  increasedBirdNestDropRate: Standard,
  /** Decreases the % chance to recieve bird's nests from Woodcutting by value: Implemented*/
  decreasedBirdNestDropRate: Standard
  /** Increases the % chance to not use rockHP when mining by value: Implemented */
  increasedChanceNoDamageMining: Standard,
  /** Decreases the % chance to not use rockHP when mining by value: Implemented */
  decreasedChanceNoDamageMining: Standard
  /** Increases the % chance to recieve a gold bar when smelting silver bars by value: Implemented */
  increasedSeeingGoldChance: Standard,
  /** Decreases the % chance to recieve a gold bar when smelting silver bars by value: Implemented */
  decreasedSeeingGoldChance: Standard
  /** Increases the % chance to double crops from farming by value: Implemented via calculateChanceToDouble*/
  increasedChanceDoubleHarvest: Standard,
  /** Decreases the % chance to double crops from farming by value: Implemented via calculateChanceToDouble*/
  decreasedChanceDoubleHarvest: Standard,
  /** Increases the % chance to recieve bonus elemental runes from runecrafting by value: Implemented */
  increasedChanceForElementalRune: Standard,
  /** Decreases the % chance to recieve bonus elemental runes from runecrafting by value: Implemented */
  decreasedChanceForElementalRune: Standard,
  /** Increases the quantity of bonus elemental runes from runecrafting by value: Implemented */
  increasedElementalRuneGain: Standard,
  /** Decreases the quantity of bonus elemental runes from runecrafting by value: Implemented */
  decreasedElementalRuneGain: Standard,
  /** Increases the % chance that a random tier of potion is recieved from herblore by value: Implemented */
  increasedChanceRandomPotionHerblore: Standard,
  /** Decreases the % chance that a random tier of potion is recieved from herblore by value: Implemented */
  decreasedChanceRandomPotionHerblore: Standard,
  /** Increases the number of times the player rolls to hit an enemy by value: Implemented */
  increasedAttackRolls: Standard,
  /** Decreases the number of times the player rolls to hit an enemy by value: Implemented */
  decreasedAttackRolls: Standard,
  /** Effect of Bonfire Potions: Implemented */
  freeBonfires: Standard,
  /** Increases the Magic XP gained from alt magic by %: Implemented */
  increasedAltMagicSkillXP: Standard
  /** Decreases the Magic XP gained from alt magic by %: Implemented */
  decreasedAltMagicSkillXP: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsIncreasedMovementSpeed: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsDecreasedMovementSpeed: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsIncreasedTeleportCost: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsDecreasedTeleportCost: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsIncreasedUpdateDelay: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsDecreasedUpdateDelay: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsIncreasedLemonGang: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsDecreasedLemonGang: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsIncreasedCarrotGang: Standard
  /** ??? It's a Mystery ??? */
  aprilFoolsDecreasedCarrotGang: Standard
  increasedGPOnEnemyHit: Standard;
  decreasedGPOnEnemyHit: Standard;
  decreasedEnemyMeleeEvasion: Standard;
  increasedEnemyMeleeEvasion: Standard;
  decreasedEnemyRangedEvasion: Standard;
  increasedEnemyRangedEvasion: Standard;
  decreasedEnemyMagicEvasion: Standard;
  increasedEnemyMagicEvasion: Standard;
  decreasedEnemyAccuracy: Standard;
  increasedEnemyAccuracy: Standard;
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
  summoningSynergy_2_6: Standard;
  summoningSynergy_2_7: Standard;
  summoningSynergy_2_8: Standard;
  summoningSynergy_2_12: Standard;
  summoningSynergy_2_13: Standard;
  summoningSynergy_2_14: Standard;
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
  summoningSynergy_9_10: Standard;
  summoningSynergy_9_11: Standard;
  summoningSynergy_9_16: Standard;
  summoningSynergy_9_17: Standard;
  summoningSynergy_9_18: Standard;
  summoningSynergy_9_19: Standard;
  summoningSynergy_10_11: Standard;
  summoningSynergy_10_16: Standard;
  summoningSynergy_10_18: Standard;
  summoningSynergy_10_19: Standard;
  summoningSynergy_11_16: Standard;
  summoningSynergy_11_17: Standard;
  summoningSynergy_11_18: Standard;
  summoningSynergy_11_19: Standard;
  summoningSynergy_12_13: Standard;
  summoningSynergy_12_14: Standard;
  summoningSynergy_12_15: Standard;
  summoningSynergy_13_14: Standard;
  summoningSynergy_13_15: Standard;
  summoningSynergy_14_15: Standard;
  summoningSynergy_16_17: Standard;
  summoningSynergy_16_18: Standard;
  summoningSynergy_16_19: Standard;
  summoningSynergy_17_18: Standard;
  summoningSynergy_17_19: Standard;
  summoningSynergy_18_19: Standard;
  increasedSummoningChargePreservation: Standard;
  decreasedSummoningChargePreservation: Standard;
  increasedSummoningCreationCharges: Standard;
  decreasedSummoningCreationCharges: Standard;
  increasedChanceToApplyBurn: Standard;
  decreasedChanceToApplyBurn: Standard;
  decreasedSummoningShardCost: Standard;
  increasedSummoningShardCost: Standard;
}
interface SkillModifierObject<Skill> {
  /** Increases the skill level used to compute combat stats by value: Implemented */
  increasedHiddenSkillLevel: Skill,
  /** Decreases the skill level used to compute combat stats by value: Implemented */
  decreasedHiddenSkillLevel: Skill,
  /** Decreases skill interval by value [ms] before % bonuses: Implemented via getTotalFromModifierArray in calculateSkillInterval */
  decreasedSkillInterval: Skill,
  /** Increases skill interval by value [ms] before % bonuses: Implemented via getTotalFromModifierArray in calculateSkillInterval */
  increasedSkillInterval: Skill,
  /** Decreases skill interval by %: Implemented via getTotalFromModifierArray in calculateSkillInterval */
  decreasedSkillIntervalPercent: Skill,
  /** Increases skill interval by %: Implemented via getTotalFromModifierArray in calculateSkillInterval */
  increasedSkillIntervalPercent: Skill,
  /** Increases % chance to preserve resources in skill by value: Implemented via getTotalFromModifierArray in calculateSkillPreservationChance */
  increasedSkillPreservationChance: Skill,
  /** Decreases % chance to preserve resources in skill by value: Implemented via getTotalFromModifierArray in calculateSkillPreservationChance */
  decreasedSkillPreservationChance: Skill,
  /** Increases mastery xp earned for skill by %: Implemented via getTotalFromModifierArray in getMasteryXpToAdd */
  increasedMasteryXP: Skill,
  /** Decreases mastery xp earned for skill by %: Implemented via getTotalFromModifierArray in getMasteryXpToAdd */
  decreasedMasteryXP: Skill,
  /** Increases xp earned from skill by %: Implemented via getTotalFromModifierArray in addXPBonuses */
  increasedSkillXP: Skill,
  /** Decreases xp earned from skill by %: Implemented via getTotalFromModifierArray in addXPBonuses */
  decreasedSkillXP: Skill,
  /** Increases the % chance to double items from a skill by value: Partially Implemented. */
  increasedChanceToDoubleItemsSkill: Skill,
  /** Decreases the % chance to double items from a skill by value: Partially Implemented. */
  decreasedChanceToDoubleItemsSkill: Skill,
  increasedChanceAdditionalSkillResource: Skill;
  decreasedChanceAdditionalSkillResource: Skill;
}
type ModifierObject<Skill, Standard> = StandardModifierObject<Standard> & SkillModifierObject<Skill>;
type SkillModifierData = [SkillID, number];
type SkillModifierActive = { id: SkillID, value: number };
type ModifierData = Partial<ModifierObject<SkillModifierData[], number>>;
type ModifierActive = Partial<ModifierObject<SkillModifierActive[], number>>;
type ModifierKeys = keyof ModifierObject<any, any>;
type SkillModifierKeys = keyof SkillModifierObject<any>;
type StandardModifierKeys = keyof StandardModifierObject<any>;
type SkillEntry<T> = [SkillModifierKeys, T];
type StandardEntry<T> = [StandardModifierKeys, T];
type ModifierEntry<Skill, Standard> = SkillEntry<Skill> | StandardEntry<Standard>;
type ModifierDataEntry = ModifierEntry<SkillModifierData[], number>;
type ModifierActiveEntry = ModifierEntry<SkillModifierActive[], number>;

/** Generic base for all item like arrays */
interface GenericItem extends BaseItem {
  // Animated Item
  /** Item has an animated image */
  hasAnimation?: boolean,
  /** Link to animate image source */
  mediaAnimation?: string,
  // Upgradeable Item
  /** Item can be upgraded */
  canUpgrade?: boolean,
  /** Item to upgrade to */
  trimmedItemID?: number,
  /** Items required to upgrade */
  itemsRequired?: number[][],
  /** GP cost to upgrades */
  trimmedGPCost?: number,
  /** Multiple of the item can be upgraded at once */
  canMultiUpgrade?: boolean,
  // Openable Item
  /** Item can be opened (e.g. is a chest) */
  canOpen?: boolean,
  /** ItemIDs and weights of drops */
  dropTable?: LootTable,
  /** Quantities of drops */
  dropQty?: number[],
  // Shop Item
  /** Used to create SHOP variable, but otherwise do not use */
  buysFor?: number,
  /** @deprecated Data is stored in SHOP */
  buysForLeather?: number,
  /** @deprecated Data is now stored in SHOP*/
  slayerCost?: number,
  /** @deprecated Data is now stored in SHOP*/
  slayerTaskRequirement?: [SlayerTier, number],
  /** @deprecated Data is now stored in SHOP */
  buysForItems?: [ItemID, number][],
  // Bone Items
  /** Unused flag for bones, game uses prayerPoints prop instead */
  isBones?: boolean,
  /** Designates item as bone. Value is base pp given on burying */
  prayerPoints?: number,
  // Food
  /** Designates item as food */
  canEat?: boolean,
  /** value*numberMultiplier is base hp of food. */
  healsFor?: number,
  // Readable Item
  /** Item can be read from bank */
  canRead?: boolean,
  // Alert Item
  /** When read, sets title of Swal */
  readTitle?: string,
  /** When read, sets html of Swal */
  readText?: string,
  // Birthday Event Cluescroll
  /** @deprecated ID for birthday event cluescrolls. No longer in use. */
  clueID?: 0 | 1 | 2 | 3,
  // Bank/Mastery Tokens
  /** Item can be claimed as token in bank */
  isToken?: boolean,
  // Mastery tokens only
  /** Flags token as mastery token, and is the Skill to give masteryxp to */
  skill?: SkillID,
  // Bank Token
  /** Flags token as bank token */
  isBankToken?: boolean,
  // Skill Item
  /** [SkillID,MasteryID] of producing the item*/
  masteryID?: [SkillID, number],
  // Log
  /** MasteryID for item for Firemaking */
  firemakingID?: number,
  // Cooking Item
  /** @deprecated Unused category for cooking */
  cookingCategory?: number,
  /** Identifies item as able to be cooked. Also MasteryID for cooking */
  cookingID?: number,
  /** Cooking level required to cook item */
  cookingLevel?: number,
  /** Cooking xp for cooking item */
  cookingXP?: number,
  /** ItemID to give when item cooked */
  cookedItemID?: ItemID,
  /** ItemID to give when item burned */
  burntItemID?: ItemID,
  // Fish
  /** Identifies item as fish, should also be identical to MasteryID for it */
  fishingID?: number,
  /** Fishing level required to catch item */
  fishingLevel?: number,
  /** Fishing XP for catching item */
  fishingXP?: number,
  /** Min interval [ms] to catch item */
  minFishingInterval?: number,
  /** Max interval [ms] to catch item */
  maxFishingInterval?: number,
  // Barbarian Fish
  /** If present fish gives strength xp when caught */
  strengthXP?: number,
  // Special Fishing Item
  /** Identifies item as specialItems and indicates weight in loot-table */
  fishingCatchWeight?: number,
  // Mining Item
  /** @deprecated Unused property */
  miningID?: number,
  /** @deprecated Unused property */
  miningLevel?: number,
  /** Experience earned for Mining item */
  miningXP?: number,
  /** @deprecated Unused property */
  miningRespawnInterval?: number,
  /** @deprecated Unused property */
  maxMiningRespawnInterval?: number,
  // Smithing Item
  /** @deprecated Unused property */
  smithingID?: number,
  /** Smithing level required to make item */
  smithingLevel?: number,
  /** Smithing xp for making item */
  smithingXP?: number,
  /** Items required to smith item */
  smithReq?: ItemQuantity[],
  /** For seeds, identifies crop type. For smithing identifies metal. */
  tier?: string,
  /** If present, sets smithed quantity to value, else it is 1 */
  smithingQty?: number,
  // Farming Seed
  /** Farming level required to grow seed */
  farmingLevel?: number,
  /** Farming XP given when planting, and xp per harvest qty when harvesting */
  farmingXP?: number,
  /** Quantity of seeds required to plant */
  seedsRequired?: number,
  /** Time to grow seed in [s] */
  timeToGrow?: number,
  /** ItemID given when harvesting seed */
  grownItemID?: ItemID,
  /** @deprecated Unused property */
  farmingMasteryID?: number,
  // Fletching Item
  /** @deprecated Unused property */
  fletchingID?: FletchingID,
  /** Items required to fletch item */
  fletchReq?: ItemQuantity[],
  /** Base quantity given when fletched */
  fletchQty?: number,
  /** Fletching level required to fletch */
  fletchingLevel?: number,
  /** Base Fletching xp given when fletched */
  fletchingXP?: number,
  /** Tab of fletching page:
   * 0: Arrows
   * 1: Shortbows
   * 2: Longbows
   * 3: Gem-Tipped Bolts
   * 4: Crossbows
   * 5: Javelins
   */
  fletchingCategory?: FletchingCategory,
  // Crafting Item
  /** @deprecated Unused property */
  craftingID?: number,
  /** Items required to craft */
  craftReq?: ItemQuantity[],
  /** Base quantity made when crafting */
  craftQty?: number,
  /** Crafting level required to make */
  craftingLevel?: number,
  /** Base Crafting XP per craft  */
  craftingXP?: number,
  // Runecrafting Item
  /** Runecrafting level required to make */
  runecraftingLevel?: number,
  /** Base Runecrafting xp per runecraft */
  runecraftingXP?: number,
  /** Items required to runecraft */
  runecraftReq?: ItemQuantity[],
  /** Base quantity made when runecrafting */
  runecraftQty?: number,
  /** Runecrafting MasteryID of item */
  runecraftingID?: number,
  /** Tab of Runecrafting page:
   * 0: Standard Runes
   * 1: Combination Runes
   * 2: Staves & Wands
   * 3: Air Magic Gear
   * 4: Water Magic Gear
   * 5: Earth Magic Gear
   * 6: Fire Magic Gear
   */
  runecraftingCategory?: RunecraftingCategory,
  /** Item has stats that are viewable from Runecrafting page */
  hasStats?: boolean,
  // Herblore Item/Potion
  /** @deprecated Unused property */
  herbloreMasteryID?: HerbloreItemID,
  /** Items required to brew potion */
  herbloreReq?: ItemQuantity[],
  /** Flags item as potion */
  isPotion?: boolean,
  /** Skill that potion applies to, used for herblore display */
  potionSkill?: SkillID,
  /** Value of potion's effect */
  potionBonus?: number,
  /** ID used to distinguish the effects of combat potions */
  potionBonusID?: PotionBonusID,
  /** Base charges of potion */
  potionCharges?: number,
  /** Page potion can be used on */
  potionPage?: PageID,
  /** Tier of potion */
  potionTier?: HerbloreTier,
  // Equipment Item
  /** @deprecated Unused property */
  canEquip?: boolean,
  /** Flags item as equipment, and determines slot it equips to */
  equipmentSlot?: EquipSlotID,
  /** Melee attack bonuses [stab,slash,defend]*/
  attackBonus?: [number, number, number],
  /** Melee strength bonus */
  strengthBonus?: number,
  /** Melee defence bonus */
  defenceBonus?: number,
  /** Attack level required to equip item */
  attackLevelRequired?: number,
  /** Defence level required to equip item */
  defenceLevelRequired?: number,
  /** Ranged attack bonus */
  rangedAttackBonus?: number,
  /** Magic attack bonus */
  magicAttackBonus?: number,
  /** Ranged defence bonus */
  rangedDefenceBonus?: number,
  /** Magic defence bonus */
  magicDefenceBonus?: number,
  /** Damage reduction [%] */
  damageReduction?: number,
  /** Ranged strength bonus */
  rangedStrengthBonus?: number,
  /** Ranged level required to equip item */
  rangedLevelRequired?: number,
  /** @deprecated Unused property */
  prayerBonus?: number,
  /** @deprecated Unused property, used modifiers instead */
  ammoPreservation?: number,
  /** Magic level required to equip item */
  magicLevelRequired?: number,
  /** % bonus to magic maxHit */
  magicDamageBonus?: number,
  /** @deprecated Unused property, use modifiers instead */
  increasedMinAirSpellDmg?: number,
  /** @deprecated Unused property, use modifiers instead */
  increasedMinWaterSpellDmg?: number,
  /** @deprecated Unused property, use modifiers instead */
  increasedMinEarthSpellDmg?: number,
  /** @deprecated Unused property, used modifiers instead */
  increasedMinFireSpellDmg?: number,
  /** @deprecated Unused property, slayer level requirements are baked into SHOP now */
  slayerLevelRequired?: number,
  /** @deprecated Will display when viewing item stats, but actual value is in modifiers */
  slayerBonusXP?: number,
  /** @deprecated Game still calculates this value, but actual value is in modifiers */
  slayerAreaEffectNegationPercent?: number,
  /** @deprecated Use modifiers instead */
  chanceToDoubleLoot?: number,
  /** @deprecated Use modifiers instead */
  increasedMaxHitpoints?: number,
  /** @deprecated Use modifiers instead */
  decreasedAttackSpeed?: number,
  /** @deprecated Game still calculates this value, but actual value is in modifiers */
  slayerAreaEffectNegationFlat?: number,
  /** Unused flag for ranged weapons */
  isRanged?: boolean,
  // Skill Glove
  /** Flags item as skill glove, and identifies index in data arrays */
  gloveID?: GloveID,
  // Quiver Item
  /** Ammunition type:
   * 0: Arrows
   * 1: Bolts
   * 2: Javelins
   * 3: Throwing Knives
   */
  ammoType?: AmmoType,
  /** Flags item as Javelin or Throwing knife */
  isAmmo?: boolean,
  // Passive Item
  /** Flags item as equipable in passive slot */
  isPassiveItem?: boolean,
  // Weapon
  /** Allows non-magic weapons to use curses and auroras */
  canUseMagic?: boolean,
  /** Attack speed of weapon in [ms] */
  attackSpeed?: number,
  /** Weapon blocks the use of shield slot */
  isTwoHanded?: boolean,
  /** Weapon allows the use of spells */
  isMagic?: boolean,
  /** Ammunition type required to use ranged weapon:
   * 0: Arrows
   * 1: Bolts
   * 2: Javelins
   * 3: Throwing Knives
   */
  ammoTypeRequired?: AmmoType,
  // Special Weapon
  /** Item has special attack */
  hasSpecialAttack?: true,
  /** Index of playerSpecialAttacks that weapon has */
  specialAttackID?: PlayerSpecialID
  // Rune Provider
  /** Item provides free runes for spells */
  providesRune?: ItemID[],
  /** Quantity of runes set by providesRune */
  providesRuneQty?: number,
  // Thief Gloves/Gloves of Silence
  /** @deprecated Unused property, use modifiers instead */
  increasedGP?: number,
  /** Increased thieving successrate of Gloves of Silence */
  increasedSuccessRate?: number,
  // Shaman Ring
  /** @deprecated Unused property, use modifiers instead */
  increasedHPRegen?: number,
  // Elder Crown
  /** Lifesteal % of Elder crown */
  lifesteal?: number,
  // Recoil Shield
  /** Reflect damage % of Recoil Shield */
  reflectDamage?: number,
  // Wasteful Ring
  /** @deprecated Unused property, use modifiers instead */
  increasedAutoEat?: number,
  /** @deprecated Unused property, use modifiers instead */
  decreasedAutoEatEfficiency?: number,
  // Priest Hat
  /** @deprecated Unused property, use modifiers instead */
  prayerCostReduction?: number,
  // ARoM
  /** @deprecated Unused property, use modifiers instead */
  bonusMasteryXP?: number,
  // Myserious_Stone (also present on cake but unused)
  /** Drop rate of Mysterious Stone */
  dropRate?: number,
  // Big Ron
  /** Melee strength bonus multiplier of Big Ol Ron */
  bossStrengthMultiplier?: number,
  // Confetti Crossbow
  /** Maximum GP multiplier of Confetti Crossbow */
  gpMultiplierCap?: number,
  /** Minimum GP multiplier of Confetti Crossbow */
  gpMultiplierMin?: number,
  // Slayer Crossbow
  /** Ranged strength bonus multiplier of Slayer Crossbow */
  slayerStrengthMultiplier?: number,
  // Cloudburst
  /** Max Hit bonus of Cloudburst Staff */
  increasedWaterSpellDamage?: number,
  // Crown of Rhaelyx
  /** Base drop rate of Crown of Rhaelyx components */
  baseDropRate?: number,
  /** Max drop rate of Crown of Rhaelyx components */
  maxDropRate?: number,
  /** Resource preservation chance of Crown of Rhaelyx when charges in bank */
  chanceToPreserve?: number,
  /** Resource preservation chance of Crown of Rhaelyx when no charges in bank */
  baseChanceToPreserve?: number,
  // ARoS
  /** @deprecated Unused property, use modifiers instead */
  bonusSkillXP?: number,
  // Clue Chasers
  /** % increase to Off Items of Clue Chaser's Insignia */
  increasedItemChance?: number,
  // Deadeye Amulet
  /** % chance to crit with Deadeye amulet */
  chanceToCrit?: number,
  /** Multiplier to damage on crit with Deadeye amulet */
  critDamage?: number,
  // Warlock Amulet
  /** % lifesteal for magic provided by Warlock Amulet */
  spellHeal?: number,
  // Gold Ruby Ring
  /** @deprecated Unused property, use modifiers instead */
  hpRegenBonus?: number,
  // Fishing Amulet
  /** @deprecated Unused property, use modifiers instead */
  fishingSpeedBonus?: number,
  // Belongs to Gloop and Farming Skillcape
  /** increasedFarmingYield for Weird Gloop */
  harvestBonus?: number,
  // Chest of Witwix
  /** @deprecated Unused property */
  isStreamer?: boolean,
  // Signet Ring
  /** @deprecated Unused property, use modifiers instead */
  gpMultiplier?: number,
  /** @deprecated Unused propery, use modifiers instead */
  chanceToDoubleResources?: number,
  // Modifiers
  /** Modifiers provided when item is equipped. Also contains modifiers for potions that are WIP */
  modifiers?: ModifierData,
  smithingBar?: ItemID,
  summoningDescription?: string,
  summoningID?: number,
  summoningReq?: ItemQuantity[][],
  summoningQty?: number,
  summoningLevel?: number,
  summoningXP?: number,
  summoningTier?: number,
  summoningSkills?: SkillID[],
  summoningMaxHit?: number,
  summoningCategory?: number
}

interface FindEnemyAreaFcn {
  (enemy: MonsterID, name?: true): string;
  (enemy: MonsterID, name: false): [number, number];
}

/** Item with universal Properties */
interface BaseItem {
  /** Categorization tag */
  category: string,
  /** Second Categorization tag */
  type: string,
  /** Display name of item. May contain html portions that must be replaced/filtered*/
  name: string,
  /** Base sale price of item */
  sellsFor: number,
  /** Local path to item image */
  media: string,
  /** @deprecated Unused variable that references the item index */
  id?: ItemID,
  /** Optional description of item */
  description?: string,
  /** Optional flag that indicates item should not count for Item Completion % */
  ignoreCompletion?: boolean,
}
type Shop = typeof SHOP;
// Array prototype extension... :(
interface Array<T> {
  sum: (prop: keyof T) => number
}
type AgilityPillar = {
  name: string,
  description: string,
  cost: ObstacleCost
  modifiers: ModifierData
}
interface AgilityObstacle extends AgilityPillar {
  media: string,
  category: ObstacleCategories,
  interval: number,
  requirements: UnlockRequirement
  completionBonuses: {
    stamina: number,
    xp: number,
    gp: number,
    slayerCoins: number,
    items: number[][]
  }
}
type ObstacleCost = {
  gp: number,
  slayerCoins: number,
  items: number[][]
}
type BankCache = NumberDictionary<number>;
type MasteryCache = NumberDictionary<NumberDictionary<number>>;
type MasteryLevelCache = NumberDictionary<{ levels: number[] }>;
interface PlayFabEventBody {
  [key: string]: any
}
interface StringDictionary<T> {
  [index: string]: T
}
interface NumberDictionary<T> {
  [index: number]: T
}
type SweetAlertOptions = import("sweetalert2").SweetAlertOptions<*>;
type ShopCategory = 'General' | 'SkillUpgrades' | 'Slayer' | 'Gloves' | 'Skillcapes' | 'Materials' | 'GolbinRaid';
type ShopCostTypes = 'gp' | 'slayerCoins' | 'items' | 'raidCoins';
type ShopCategoryData = {
  name: string,
  description: string,
  media: string,
  contains: {
    modifiers?: ModifierData,
    items?: [ItemID, number][],
    pet?: PetID
  },
  cost: {
    gp: number,
    slayerCoins: number,
    items: [ItemID, number][],
    raidCoins?: number
  },
  hasQty?: boolean,
  charges?: number,
  unlockRequirements: UnlockRequirement,
  buyLimit: [number, number, number, number],
  showBuyLimit?: boolean
}
type UnlockRequirement = {
  customDescription?: string
  shopItemPurchased?: [ShopCategory, number][],
  skillLevel?: [SkillID, number][],
  slayerTaskCompletion?: [SlayerTier, number][]
  dungeonCompletion?: [DungeonID, number][]
  completionPercentage?: number
}

type SpellCost = {
  id: number,
  qty: number,
  hasRune: boolean,
  bankID: number | null,
}

type Prayer = {
  name: string,
  description: string,
  prayerLevel: number,
  media: string,
  pointsPerPlayer: number,
  pointsPerEnemy: number,
  pointsPerRegen: number,
  modifiers: Partial<StandardModifierObject<number>>,
  vars?: string[],
  values?: number[]
}
/** Base for Dungeons, slayer areas, and combat areas */
interface BaseArea {
  /** URL to display image */
  media: string,
  /** @deprecated Old property for old area display system */
  type?: string,
  /** Monsters contained in area */
  monsters: MonsterID[],
  /**
   * 0: Very Easy
   * 1: Easy
   * 2: Medium
   * 3: Hard:
   * 4: Very Hard
   */
  difficulty: number[],
  /** If not 0, Item required to do damage to monsters in area */
  slayerItem: ItemID
}

interface CombatArea extends BaseArea {
  /** Display name HTML */
  areaName: string
}

interface SlayerArea extends BaseArea {
  /** Display name HTML */
  areaName: string
  /** Slayer level required to enter area */
  slayerLevel: number
  /** Dungeon required to complete to enter area */
  dungeonCompleted: DungeonID
  /** Area has modifiers to apply to player */
  areaEffect?: true
  /** Description of modifiers */
  areaEffectDescription?: string
  /** Value of modifier to apply to player */
  areaEffectValue?: number
}

interface Dungeon extends BaseArea {
  /** Display name HTML */
  name: string,
  /** @deprecated Old property for old dungeon display system */
  recommendedStats?: [number, number, number]
  /** @deprecated Unused property */
  rewardCount: number
  /** @deprecated Old property for old dungeon display system */
  rewards: ItemID[]
  /** ID of boss pet rolled on completion of dungeon */
  petID: PetID
  /** Dungeon required to enter dungeon */
  requiresCompletion?: DungeonID
  /** Number of times requiresCompletion must be finished to enter (if not present once) */
  requiresCompletionCount?: number
  /** Slayer level required to enter dungeon */
  slayerLevel?: number
}

type SlayerTaskData = {
  /** Display name of task difficulty */
  display: string,
  /** Cost to reroll/change to task */
  cost: number,
  /** Minimum combat level of monster for task */
  minLevel: number,
  /** Maximum combat level of monster for task (-1 is uncapped (6969 lol)) */
  maxLevel: number,
  /** Slayer level required to recieve task */
  slayerLevel: number
}

type Slayer = {
  task: {
    Easy: SlayerTaskData,
    Normal: SlayerTaskData,
    Hard: SlayerTaskData,
    Elite: SlayerTaskData,
    Master: SlayerTaskData
  }
}
/** These are applied to combatData.enemy as properties */
interface EnemyModifierObject<T> {
  /** % Increase to Melee Evasion */
  increasedMeleeEvasion: T,
  /** % Decrease to Melee Evasion */
  decreasedMeleeEvasion: T,
  /** % Increase to Ranged Evasion */
  increasedRangedEvasion: T,
  /** % Decrease to Ranged Evasion */
  decreasedRangedEvasion: T,
  /** % Increase to Magic Evasion */
  increasedMagicEvasion: T,
  /** % Decrease to Magic Evasion */
  decreasedMagicEvasion: T,
  /** % Increase to Max Hit */
  increasedMaxHitPercent: T,
  /** % Decrease to Max Hit */
  decreasedMaxHitPercent: T,
  /** % Increase to Max HP */
  increasedMaxHitpointsPercent: T,
  /** % Decrease to Max HP */
  decreasedMaxHitpointsPercent: T,
  /** % Increase to Accuracy Rating */
  increasedGlobalAccuracy: T,
  /** % Decrease to Accuracy Rating */
  decreasedGlobalAccuracy: T,
  /** % Decrease to attack interval */
  increasedAttackSpeed: T,
  /** % Increase to attack interval */
  attackSpeedDebuff: T,
  /** % of damage taken to reflect to player */
  increasedReflectDamagePercent: T,
  /** Flat increase to damageReduction */
  increasedDamageReduction: T,
  /** % of HP to heal every 10 seconds */
  increasedHitpointRegeneration: T,
  /** % of all damage to player to heal from */
  increasedLifesteal: T,
  /** Cannot be stunned */
  stunImmunity: T,
  /** Cannot be stunned */
  freezeImmunity: T
}
type EnemyModifierData = Partial<EnemyModifierObject<number>>;
type EnemyModiferKey = keyof EnemyModifierObject<any>;

type CombatPassive = {
  /** Index of passive in combatPassive */
  id: number,
  /** Display name of passive */
  name: string,
  /** Description of passive */
  description: string,
  /** Chance for passive to occur */
  chance: number,
  /** Modifiers to apply to monster */
  modifiers?: EnemyModifierData
}
type SkillData = {
  /** Display name of skill */
  name: string,
  /** Image URL of skill icon */
  media: string,
  /** Skill has mastery levels */
  hasMastery: boolean,
  /** Unused: Maximum level of skill */
  maxLevel: number,
  masteryTokenID?: ItemID
}
type MasteryMedia = {
  /** Image URL of mastery item */
  media: string
}
type MasteryUnlock = {
  /** Mastery level for unlock */
  level: number,
  /** Description of unlock */
  unlock: string
}
type MasteryPoolBonus = {
  /** Description of pool bonus */
  bonuses: string[]
}
interface SkillObject<T> {
  Woodcutting: T,
  Fishing: T,
  Firemaking: T,
  Cooking: T,
  Mining: T,
  Smithing: T,
  Attack: T,
  Strength: T,
  Defence: T,
  Hitpoints: T,
  Thieving: T,
  Farming: T,
  Ranged: T,
  Fletching: T,
  Crafting: T,
  Runecrafting: T,
  Magic: T,
  Prayer: T,
  Slayer: T,
  Herblore: T,
  Agility: T,
  Summoning: T
}

type SkillName = keyof SkillObject<any>;

type Milestone = {
  /** Unlock level of milestone */
  level: number,
  /** Display name of milestone */
  name: string,
  /** URL of milestone image */
  media: string,
  /** @deprecated Unused property */
  alwaysShow?: boolean
}
// Typedefs imported from serializeSave.ts
interface NumberSaveGame {
  firstTime: number,
  nameChanges: number,
  gp: number,
  defaultPageOnLoad: number,
  levelUpScreen: number,
  attackStyle: number,
  currentCombatFood: number,
  showItemNotify: number,
  myBankVersion: number,
  selectedSpell: number,
  buyQty: number,
  sellQty: number,
  accountGameVersion: number,
  prayerPoints: number,
  slayerCoins: number,
  selectedEquipmentSet: number,
  formatNumberSetting: number,
  saveTimestamp: number,
  activeAurora: number,
  currentGamemode: number,
  raidCoins: number,
  agilityPassivePillarActive: number
}
type NumberKey = keyof NumberSaveGame;

interface BoolSaveGame {
  ignoreBankFull: boolean,
  continueThievingOnStun: boolean,
  autoRestartDungeon: boolean,
  autoSaveCloud: boolean,
  darkMode: boolean,
  showGPNotify: boolean,
  enableAccessibility: boolean,
  showEnemySkillLevels: boolean,
  confirmationOnClose: boolean,
  autoPotion: boolean,
  showCommas: boolean,
  showVirtualLevels: boolean,
  secretAreaUnlocked: boolean,
  showSaleNotifications: boolean,
  showShopNotifications: boolean,
  pauseOfflineActions: boolean,
  showCombatMinibar: boolean,
  showCombatMinibarCombat: boolean,
  showSkillMinibar: boolean,
  disableAds: boolean,
  useCombinationRunes: boolean,
  firstTimeLoad: boolean,
  autoSlayer: boolean,
}
type BoolKey = keyof BoolSaveGame;

interface SerializableSaveGame {
  bank: BankItem[]
  statsGeneral: GameStat[]
  statsWoodcutting: GameStat[]
  statsFiremaking: GameStat[]
  statsFishing: GameStat[]
  statsCooking: GameStat[]
  statsMining: GameStat[]
  statsSmithing: GameStat[]
  statsCombat: GameStat[]
  statsThieving: GameStat[]
  statsFarming: GameStat[]
  statsFletching: GameStat[]
  statsCrafting: GameStat[]
  statsRunecrafting: GameStat[]
  statsHerblore: GameStat[]
  glovesTracker: typeof glovesTracker
  rockData: RockData[]
  herbloreBonuses: HerbloreBonus[]
  tutorialTips: typeof tutorialTips
  shopItemsPurchased: [ShopCategory, number][]
  combatData: MinCombatData
  equippedFood: ItemQuantity2[]
  SETTINGS: typeof SETTINGS
  monsterStats: MonsterStat[]
  petUnlocked: boolean[]
  skillsUnlocked: boolean[]
  equipmentSets: EquipmentSet[]
  skillXP: number[]
  dungeonCompleteCount: number[]
  selectedAttackStyle: number[]
  lockedItems: number[]
  golbinRaidStats: number[]
  slayerTask: SlayerTask[]
  slayerTaskCompletion: number[]
  chosenAgilityObstacles: number[]
  agilityObstacleBuildCount: number[]
  itemsAlreadyFound: number[]
  saveStateBeforeRaid: number[]
}
type SerialKey = keyof SerializableSaveGame;
interface NestedSerializeableSaveGame {
  newFarmingAreas: FarmingArea[],
  MASTERY: Mastery,
  golbinRaidHistory: RaidHistory[],
  itemStats: ItemStat[]
}
type NestedKey = keyof NestedSerializeableSaveGame;
interface OtherSaveGame {
  offline: Offline,
  titleNewsID: string[],
  scheduledPushNotifications: StringDictionary<string>
  username: string,
  gameUpdateNotification: string,
  randomModifiers: typeof randomModifiers
  summoningData: typeof summoningData
}
type OtherKey = keyof OtherSaveGame;
interface ReconstructedSaveGame {
  skillLevel: number[],
  nextLevelProgress: number[],
  equippedItems: number[],
  ammo: number
}
type ReconKey = keyof ReconstructedSaveGame;
type NewSaveGame = NumberSaveGame & BoolSaveGame & SerializableSaveGame & NestedSerializeableSaveGame & OtherSaveGame & ReconstructedSaveGame;
interface Serializer<T> {
  (saveVar: T): number[]
}

interface NestedSerializer<T> {
  (saveVar: T): number[][]
}
interface Deserializer<T> {
  (sData: number[], version: number): T
}
interface NestedDeserializer<T> {
  (sData: number[][], version: number): T
}
type StatsData = {
  stats: number[],
  items: number[]
}
type MinCombatData = {
  player: {
    hitpoints: number
  },
  enemy: {

  }
}
type SerializerVar<T, U> = {
  saveKey: U,
  serialize: Serializer<T>,
  deserialize: Deserializer<T>
}
type NestedSerializerVar<T, U> = {
  saveKey: U,
  serialize: NestedSerializer<T>,
  deserialize: NestedDeserializer<T>
}
type MapToSerializer<Type> = {
  [Property in keyof Type]: SerializerVar<Type[Property], Property>
}

type MapToNested<Type> = {
  [Property in keyof Type]: NestedSerializerVar<Type[Property], Property>
}
type PackagedSave = {
  v: number
  n: number[],
  b: number[],
  s: number[][],
  ns: number[][][]
  o: string[]
}
type GamemodeData = {
  name: string,
  media: string,
  description: string,
  rules: string[],
  textClass: string,
  btnClass: string,
  isPermaDeath: boolean,
  isEvent: boolean,
  endDate: number,
  combatTriangle: number,
  numberMultiplier: number
}

type RandomModifier = {
  modifier: ModifierKeys,
  value: number | number[][]
}
type SummoningData = {
  Settings: SummoningSettings,
  Marks: SummoningMarks,
  Synergies: SummoningSynergies
}
type SummoningSettings = {
  recipeGPCost: number,
}
type SummoningMarks = {
  Levels: number[]
}
type SummoningSynergies = NumberDictionary<NumberDictionary<SynergyData>>
type SynergyData = {
  description: string,
  modifiers: ModifierData
}
type PlayerSummoningData = {
  MarksDiscovered?: NumberDictionary<number>,
  defaultRecipe?: number[]
}
type SummoningItem = {
  itemID: ItemID,
  summoningLevel: number
  summoningID: number
  summoningCategory: number
}
type SummoningSearch = {
  description: string,
  name1: string,
  name2: string,
  summon1: number,
  summon2: number
}