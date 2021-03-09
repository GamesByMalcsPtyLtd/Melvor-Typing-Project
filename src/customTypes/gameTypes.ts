/*  Melvor Typing Project v1.0.0: Fetches and Documents Melvor Idle

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
type SlayerTier = 0 | 1 | 2 | 3 | 4;
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
/** Current gamemode, 0 is normal, 1 is hardcore, 2 is adventure */
type GameMode = 0 | 1 | 2;
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
  /** Attack damage is multiplied by this if the player is stunnned */
  stunDamageMultiplier: number,
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
  intoTheMist?: boolean
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
  bleedInterval?: number,
  totalBleedHP?: number,
  totalBleedHPPercent?: number,
  totalBleedHPCustom?: number,
  extraBleedDmg?: number,
  bleedCount?: number,
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
  /** Damage is multiplied by this if enemy is stunned */
  stunDamageMultiplier: number,
  /** Damage is multiplied by this if enemy is sleeping */
  sleepDamageMultiplier?: number,
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
}
interface CombatData {
  player: PlayerCombatData,
  enemy: EnemyCombatData
}
interface EnemyCombatData {
  id: null | MonsterID,
  hitpoints: number,
  effectiveAttackLevel: number,
  maximumAttackRoll: number,
  effectiveStrengthLevel: number,
  maximumStrengthRoll: number,
  effectiveDefenceLevel: number,
  maximumDefenceRoll: number,
  activeBuffs: boolean,
  buffTurns: number,
  increasedMeleeEvasion: null | number,
  increasedRangedEvasion: null | number,
  increasedMagicEvasion: null | number,
  reflectMelee: null | number,
  reflectRanged: null | number,
  reflectMagic: null | number,
  attackSpeedDebuff: number,
  attackSpeedDebuffTurns: number,
  isCursed: boolean,
  curseTurnsLeft: number,
  extraDamageMultiplier: number,
  decreasedRangedEvasion?: number,
  decreasedMeleeEvasion?: number,
  decreasedMagicEvasion?: number,
  decreasedAccuracy?: number
  isBleeding?: boolean,
  sleep?: boolean,
  sleepTurns?: number,
  maximumRangedDefenceRoll?: number,
  maximumMagicDefenceRoll?: number,
  damageReduction?: number,
  baseDamageReduction?: number,
  increasedDamageReduction?: number,
  hasPassive?: boolean;
  passiveID?: number[];
  intoTheMist?: boolean;
  stunned?: boolean;
  stunTurns?: number;
  hasSpecialAttack?: boolean;
  attackSpeed?: number;
  specialAttackChances?: number[];
  specialAttackID?: number[];
  bleedInterval?: number;
  bleedCount?: number;
  totalBleedHP?: number;
  maxHitpoints?: number;
  curseID?: CurseID;
  increasedAttackSpeed?: number;
  attackType?: number;
  attackLevel?: number;
  attackBonus?: number;
  rangedLevel?: number;
  attackBonusRanged?: number;
  magicLevel?: number;
  attackBonusMagic?: number;
  strengthLevel?: number;
  strengthBonus?: number;
  strengthBonusRanged?: number;
  damageBonusMagic?: number;
  defenceLevel?: number;
  effectiveRangedDefenceLevel?: number;
  magicStrengthBonus?: number;
  defenceBonus?: number;
  defenceBonusRanged?: number;
  effectiveMagicDefenceLevel?: number;
  baseAttackSpeed?: number;
  defenceBonusMagic?: number;
  // New properties?
  increasedHitpointRegeneration?: number;
  isDead?: boolean;
  stunImmunity?: boolean;
  freezeImmunity?: boolean;
  increasedReflectDamagePercent?: number;
  increasedLifesteal?: number;
  increasedMaxHitPercent?: number;
  decreasedMaxHitPercent?: number;
  increasedMaxHitpointsPercent?: number;
  decreasedMaxHitpointsPercent?: number;
  lifesteal?: number;
}
interface PlayerCombatData {
  hitpoints: number,
  stunned: boolean,
  stunTurns: number,
  baseAttackSpeed: number,
  attackSpeedDebuff: number,
  attackSpeedDebuffTurns: number,
  increasedDamageReduction: number,
  sleep?: boolean,
  sleepTurns?: number,
  burnDebuff?: number,
  activeDebuffs?: boolean,
  debuffTurns?: number,
  decreasedAccuracy?: number,
  afflictedStacks?: number
  hasSpecialAttack?: boolean;
  specialAttackID?: PlayerSpecialID[];
  increasedMinHit?: number,
  markOfDeathStacks?: number;
  lifesteal?: number,
  attackSpeedBuff?: number;
  rangedEvasionBuff?: number;
  increasedMaxHit?: number;
  magicEvasionBuff?: number;
  meleeEvasionBuff?: number;
  markOfDeathTurns?: number;
  markOfDeath?: boolean;
  isBurning?: boolean;
  meleeEvasionDebuff?: number;
  rangedEvasionDebuff?: number;
  magicEvasionDebuff?: number;
  autoEatThreshold?: number;
  autoEatEfficiency?: number;
  slayerAreaEffectNegationPercent?: number;
  slayerAreaEffectNegationFlat?: number;
  // New Properties
  /**
   * 0: Attack
   * 1: Strength
   * 2: Defence
   * 3: Hitpoints
   * 4: Ranged
   * 5: Magic
   * 6: Prayer
   */
  combatLevels?: number[];
  baseStats?: PlayerBaseStats
  herbloreBonus?: number[];
  attackStyleBonusAccuracy?: number;
  attackStyleBonusStrength?: number;
}

type PlayerBaseStats = {
  attackBonus: [number, number, number],
  defenceBonus: number,
  strengthBonus: number,
  damageReduction: number,
  attackBonusRanged: number,
  defenceBonusRanged: number,
  strengthBonusRanged: number,
  attackBonusMagic: number,
  defenceBonusMagic: number,
  damageBonusMagic: number,
};
interface EquipmentSet {
  equipment: number[],
  ammo: number
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

type Loot = [number, number];
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
type HerbloreBonuses = {
  [index: number]: HerbloreBonus
}
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
   * 5: missedAttacks
   * 6: damageDealt
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
  agilityItemCosts?: TippyTooltip[]
}
type SumFunction = (arr: number[]) => number;
type OldMasteryArray = { mastery: number, masteryXP: number }[];
type MasteryCheckPoint = number;
interface Mastery {
  [index: number]: MasteryData
}
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
  currentBank: typeof currentBank,
  currentBankUpgrade: typeof currentBankUpgrade,
  skillXP: typeof skillXP,
  skillLevel: typeof skillLevel,
  nextLevelProgress: typeof nextLevelProgress,
  treeMasteryData: typeof treeMasteryData,
  currentAxe: typeof currentAxe,
  treeCutLimit: typeof treeCutLimit,
  bank: typeof bank,
  bankMax: typeof bankMax,
  ignoreBankFull: typeof ignoreBankFull,
  statsGeneral: typeof statsGeneral,
  statsWoodcutting: typeof statsWoodcutting,
  logsMastery: typeof logsMastery,
  statsFiremaking: typeof statsFiremaking,
  fishMastery: typeof fishMastery,
  fishingArea: { level: number, maxFish: number, currentFish: number[] }[],
  currentRod: typeof currentRod,
  statsFishing: typeof statsFishing,
  cookingMastery: typeof cookingMastery,
  upgradedToRange: typeof upgradedToRange,
  statsCooking: typeof statsCooking,
  defaultPageOnLoad: typeof defaultPageOnLoad,
  miningOreMastery: typeof miningOreMastery,
  statsMining: typeof statsMining,
  currentPickaxe: typeof currentPickaxe,
  statsSmithing: typeof statsSmithing,
  levelUpScreen: typeof levelUpScreen,
  gameUpdateNotification: typeof gameUpdateNotification,
  equippedItems: typeof equippedItems,
  attackStyle: typeof attackStyle,
  combatData: typeof combatData,
  currentCombatFood: typeof currentCombatFood,
  equippedFood: typeof equippedFood,
  smithingMastery: typeof smithingMastery,
  statsCombat: typeof statsCombat,
  continueThievingOnStun: typeof continueThievingOnStun,
  thievingMastery: typeof thievingMastery,
  farmingMastery: typeof farmingMastery,
  showItemNotify: typeof showItemNotify,
  glovesTracker: typeof glovesTracker,
  currentCookingFire: typeof currentCookingFire,
  rockData: typeof rockData,
  fletchingMastery: typeof fletchingMastery,
  craftingMastery: typeof craftingMastery,
  ammo: typeof ammo,
  myBankVersion: typeof myBankVersion,
  statsThieving: typeof statsThieving,
  statsFarming: typeof statsFarming,
  statsFletching: typeof statsFletching,
  statsCrafting: typeof statsCrafting,
  autoRestartDungeon: typeof autoRestartDungeon,
  autoSaveCloud: typeof autoSaveCloud,
  selectedSpell: typeof selectedSpell,
  runecraftingMastery: typeof runecraftingMastery,
  darkMode: typeof darkMode,
  buyQty: typeof buyQty,
  itemLog: typeof itemLog,
  itemLogBuilt: typeof itemLogBuilt,
  dungeonCompleteCount: typeof dungeonCompleteCount,
  sellQty: typeof sellQty,
  statsRunecrafting: typeof statsRunecrafting,
  showGPNotify: typeof showGPNotify,
  enableAccessibility: typeof enableAccessibility,
  showSkillNav: boolean,
  accountGameVersion: typeof accountGameVersion,
  prayerPoints: typeof prayerPoints,
  slayerCoins: typeof slayerCoins,
  slayerTask: typeof slayerTask,
  showEnemySkillLevels: typeof showEnemySkillLevels,
  monsterStats: typeof monsterStats,
  itemStats: typeof itemStats,
  confirmationOnClose: typeof confirmationOnClose,
  listView: typeof listView,
  herbloreMastery: typeof herbloreMastery,
  newFarmingAreas: typeof newFarmingAreas,
  equipmentSets: typeof equipmentSets,
  selectedEquipmentSet: typeof selectedEquipmentSet,
  equipmentSetCount: typeof equipmentSetCount,
  currentAutoEat: typeof currentAutoEat,
  equipmentSetsPurchased: typeof equipmentSetsPurchased,
  herbloreBonuses: typeof herbloreBonuses,
  autoPotion: typeof autoPotion,
  autoUseSpecialAttack: typeof autoUseSpecialAttack,
  showHPNotify: typeof showHPNotify,
  statsHerblore: typeof statsHerblore,
  offline: typeof offline,
  selectedAttackStyle: typeof selectedAttackStyle,
  showCommas: typeof showCommas,
  showVirtualLevels: typeof showVirtualLevels,
  formatNumberSetting: typeof formatNumberSetting,
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
  SETTINGS: typeof SETTINGS,
  MASTERY: typeof MASTERY,
  useCombinationRunes: typeof useCombinationRunes,
  firstTimeLoad: typeof firstTimeLoad,
  slayerTaskCompletion: typeof slayerTaskCompletion,
  autoSlayerUnlocked: typeof autoSlayerUnlocked,
  autoSlayer: typeof autoSlayer,
  itemsAlreadyFound: typeof itemsAlreadyFound
}

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

interface ModifierObject<Skill, Standard> {
  /** Applies to maximumAttackRoll: Implemented */
  increasedGlobalAccuracy: Standard,
  decreasedGlobalAccuracy: Standard,
  /** Applies to maximumAttackRoll: Implemented */
  increasedMeleeAccuracyBonus: Standard,
  decreasedMeleeAccuracyBonus: Standard,
  /** Applies to baseMaxHit: Implemented */
  increasedMeleeStrengthBonus: Standard,
  decreasedMeleeStrengthBonus: Standard,
  /** Applies to maximumDefenceRoll: Implemented */
  increasedMeleeEvasion: Standard,
  decreasedMeleeEvasion: Standard,
  /** Applies to maximumAttackRoll: Implemented */
  increasedRangedAccuracyBonus: Standard,
  decreasedRangedAccuracyBonus: Standard,
  /** Applies to baseMaxHit: Implemented */
  increasedRangedStrengthBonus: Standard,
  decreasedRangedStrengthBonus: Standard,
  /** Not Implemented */
  increasedRangedEvasion: Standard,
  decreasedRangedEvasion: Standard,
  /** Applies to maximumAttackRoll: Implemented */
  increasedMagicAccuracyBonus: Standard,
  decreasedMagicAccuracyBonus: Standard,
  /** Applies to baseMaxHit: Implemented */
  increasedMagicDamageBonus: Standard,
  decreasedMagicDamageBonus: Standard,
  /** Not Implemented */
  increasedMagicEvasion: Standard,
  decreasedMagicEvasion: Standard,
  /** Not Implemented, Not Used */
  increasedMaxHitFlat: Standard,
  /** Not Implemented, Not Used */
  decreasedMaxHitFlat: Standard,
  /** Not Implemented */
  increasedMaxHitPercent: Standard,
  /** Not Implemented, Not Used */
  decreasedMaxHitPercent: Standard,
  /** Implemented */
  increasedDamageReduction: Standard,
  decreasedDamageReduction: Standard,
  /** Implemented, applies to bones and item drops. 
   * Appears to be referenced in calculateChanceToDouble but it is never used in the context of combat */
  increasedChanceToDoubleLootCombat: Standard,
  decreasedChanceToDoubleLootCombat: Standard,
  /** Implemented */
  increasedSlayerCoins: Standard,
  decreasedSlayerCoins: Standard,
  /** Implemented */
  increasedHPRegenFlat: Standard,
  decreasedHPRegenFlat: Standard,
  /** Implemented, Applies to confetti crossbow, coin drops, firemaking, alchemy, agility, thieving (offline+online)  */
  increasedGPGlobal: Standard,
  decreasedGPGlobal: Standard,
  /** Implemented */
  increasedGPFromMonsters: Standard,
  decreasedGPFromMonsters: Standard,
  /** Implemented, applies prior to percentage bonus */
  increasedGPFromMonstersFlat: Standard,
  decreasedGPFromMonstersFlat: Standard,
  /** Implemented */
  increasedGPFromThieving: Standard,
  decreasedGPFromThieving: Standard,
  /** Implemented, applies prior to percentage bonus */
  increasedGPFromThievingFlat: Standard,
  decreasedGPFromThievingFlat: Standard,
  /** Implemented, applies directly to damage values, only works on attack damage, excludes ancient magicks */
  increasedDamageToBosses: Standard,
  decreasedDamageToBosses: Standard,
  /** Implemented, applies directly to damage values, only works on attack damage, excludes ancient magicks */
  increasedDamageToSlayerTasks: Standard,
  decreasedDamageToSlayerTasks: Standard,
  /** Implemented, applies directly to damage values, only works on attack damage, excludes ancient magicks */
  increasedDamageToSlayerAreaMonsters: Standard,
  decreasedDamageToSlayerAreaMonsters: Standard,
  /** Implemented, applies directly to damage values, only works on attack damage, excludes ancient magicks */
  increasedDamageToCombatAreaMonsters: Standard,
  decreasedDamageToCombatAreaMonsters: Standard,
  /** Implemented, applies directly to damage values, only works on attack damage, excludes ancient magicks */
  increasedDamageToDungeonMonsters: Standard,
  decreasedDamageToDungeonMonsters: Standard,
  /** Implemented, applies directly to damage values, only works on attack damage, excludes ancient magicks */
  increasedDamageToAllMonsters: Standard,
  decreasedDamageToAllMonsters: Standard,
  /** Implemented, some duplicate code for it but doesn't seem to be a problem */
  increasedAutoEatEfficiency: Standard,
  decreasedAutoEatEfficiency: Standard,
  /** Implemented */
  increasedAutoEatThreshold: Standard,
  decreasedAutoEatThreshold: Standard,
  /** Implemented */
  increasedAutoEatHPLimit: Standard,
  decreasedAutoEatHPLimit: Standard,
  /** Implemented */
  increasedFoodHealingValue: Standard,
  decreasedFoodHealingValue: Standard,
  /** Implemented */
  increasedChanceToPreservePrayerPoints: Standard,
  decreasedChanceToPreservePrayerPoints: Standard,
  /** Implemented */
  increasedFlatPrayerCostReduction: Standard,
  decreasedFlatPrayerCostReduction: Standard,
  /** Implemented */
  increasedMinAirSpellDmg: Standard,
  /** Implemented */
  decreasedMinAirSpellDmg: Standard,
  /** Implemented */
  increasedMinWaterSpellDmg: Standard,
  /** Implemented */
  decreasedMinWaterSpellDmg: Standard,
  /** Implemented */
  increasedMinEarthSpellDmg: Standard,
  /** Implemented */
  decreasedMinEarthSpellDmg: Standard,
  /** Implemented */
  increasedMinFireSpellDmg: Standard,
  /** Implemented */
  decreasedMinFireSpellDmg: Standard,
  /** Implemented */
  increasedAmmoPreservation: Standard,
  /** Implemented */
  decreasedAmmoPreservation: Standard,
  /** Implemented, works but implementation is messy */
  increasedRunePreservation: Standard,
  decreasedRunePreservation: Standard,
  /** Implemented in getSkillHiddenLevels. 
   * Only Attack and Strength present in game. 
   * Used For:
   * Ranged Accuracy
   * Magic Accuracy
   * Melee Accuracy
   * Ranged Max Hit
   * Melee Max Hit
   * 
   * Missing: (Low priority, none of these are actually present)
   * Melee Evasion: Defence
   * Ranged Evasion: Defence
   * Magic Evasion: Defence + Magic
   * Magic Max Hit: Magic Level */
  increasedHiddenSkillLevel: Skill,
  /** Implemented, but bugged. Also has same issues as increasedHiddenSkillLevel if bug fixed */
  decreasedHiddenSkillLevel: Skill,
  /** Implemented */
  decreasedPlayerAttackSpeed: Standard,
  increasedPlayerAttackSpeed: Standard,
  /** Implemented */
  decreasedPlayerAttackSpeedPercent: Standard,
  increasedPlayerAttackSpeedPercent: Standard,
  /** Implemented: Note area effects work with modifier system now */
  increasedSlayerAreaEffectNegationFlat: Standard,
  decreasedSlayerAreaEffectNegationFlat: Standard,
  /** Implemented */
  decreasedMonsterRespawnTimer: Standard,
  increasedMonsterRespawnTimer: Standard,
  /** Implemented, but may be visually bugged. Not actually used though. */
  increasedGPFromSales: Standard,
  decreasedGPFromSales: Standard,
  /** Implemented */
  increasedBankSpace: Standard,
  decreasedBankSpace: Standard,
  /** Implemented Functionally identical to increasedBankSpace*/
  increasedBankSpaceShop: Standard,
  decreasedBankSpaceShop: Standard,
  /** Implemented */
  increasedChanceToPreservePotionCharge: Standard,
  decreasedChanceToPreservePotionCharge: Standard,
  /** Implemented via getTotalFromModifierArray in calculateSkillInterval */
  decreasedSkillInterval: Skill,
  increasedSkillInterval: Skill,
  /** Implemented via getTotalFromModifierArray in calculateSkillInterval  */
  decreasedSkillIntervalPercent: Skill,
  increasedSkillIntervalPercent: Skill,
  /** Not implemented, should be replaced with increasedChanceToDoubleItemsSkill*/
  increasedChanceToDoubleLootThieving: Standard,
  decreasedChanceToDoubleLootThieving: Standard,
  /** Implemented via getTotalFromModifierArray in calculateSkillPreservationChance */
  increasedSkillPreservationChance: Skill,
  decreasedSkillPreservationChance: Skill,
  /** Implemented via calculateSkillPreservationChance*/
  increasedGlobalPreservationChance: Standard,
  decreasedGlobalPreservationChance: Standard,
  /** Unimplemented and Used. Holdover from when agility had stamina */
  increasedStaminaPreservationChance: Standard,
  decreasedStaminaPreservationChance: Standard,
  /** Implemented in getMasteryXpToAdd */
  increasedGlobalMasteryXP: Standard,
  decreasedGlobalMasteryXP: Standard,
  /** Implemented in addXPBonuses */
  increasedGlobalSkillXP: Standard,
  decreasedGlobalSkillXP: Standard,
  /** Implemented via getTotalFromModifierArray in getMasteryXpToAdd */
  increasedMasteryXP: Skill,
  decreasedMasteryXP: Skill,
  /** Implemented via getTotalFromModifierArray in addXPBonuses
   * Currently applies twice for slayer xp
   */
  increasedSkillXP: Skill,
  decreasedSkillXP: Skill,
  /** Unimplemented and Used. Holdover from when agility had stamina */
  increasedMaxStamina: Standard,
  decreasedMaxStamina: Standard,
  /** Unimplemented, should be in updateRockHP. Also need to remove old usage for pet*/
  increasedMiningNodeHP: Standard,
  decreasedMiningNodeHP: Standard,
  /** Implemented */
  dungeonEquipmentSwapping: Standard,
  /** Implemented */
  increasedEquipmentSets: Standard,
  /** Implemented */
  autoSlayerUnlocked: Standard,
  /** Implemented */
  increasedTreeCutLimit: Standard,
  /** Implemented
   * Does not work on gems from mining though
   * Does not work for combat loot
   * Does not work for alt magic
   */
  increasedChanceToDoubleItemsGlobal: Standard,
  decreasedChanceToDoubleItemsGlobal: Standard,
  /** Implemented */
  increasedFarmingYield: Standard,
  decreasedFarmingYield: Standard,
  /** Implemented */
  increasedMaxHitpoints: Standard,
  decreasedMaxHitpoints: Standard,
  /** Unused and Unimplented, Holdover from when agility had stamina */
  increasedStaminaPerObstacle: Standard,
  /** Unused and Unimplented, Holdover from when agility had stamina */
  decreasedStaminaPerObstacle: Standard,
  /** Implemented */
  increasedSlayerTaskLength: Standard,
  decreasedSlayerTaskLength: Standard,
  /** Unused and Unimplented, Holdover from when agility had stamina */
  increasedStaminaCost: Standard,
  /** Unused and Unimplented, Holdover from when agility had stamina */
  decreasedStaminaCost: Standard,
  /** Partially implemented.
   * Doesn't work for: Mining
   * Doesn't work for online Cooking, but the only use is the pet which still works, could do with transitioning to new system
   * Doesn't work for online Crafting (offline uses calculateChanceToDouble), but the global one does. Not used anywhere so it's fine for now.
   * Does not work for Alt. Magic
   */
  increasedChanceToDoubleItemsSkill: Skill,
  decreasedChanceToDoubleItemsSkill: Skill,
  /** Unused and Unimplented */
  increasedLifesteal: Standard,
  /** Unused and Unimplented */
  decreasedLifesteal: Standard,
  /** Unused and Unimplented */
  increasedReflectDamage: Standard,
  /** Unused and Unimplented */
  decreasedReflectDamage: Standard,
  /** Implemented in getAgilityGPMultiplier */
  increasedGPFromAgility: Standard,
  decreasedGPFromAgility: Standard,
  /** Implemented, 
   * but could be replaced with `increasedChanceToDoubleItemsSkill`
   * and mining could be changed to use calculateChanceToDouble*/
  increasedChanceToDoubleOres: Standard,
  decreasedChanceToDoubleOres: Standard,
  /** Implemented, percentage bonus to regen */
  increasedHitpointRegeneration: Standard,
  decreasedHitpointRegeneration: Standard,
  /** Implemented */
  golbinRaidWaveSkipCostReduction: Standard,
  /** Implemented, but also increases the max qty of food */
  golbinRaidIncreasedMinimumFood: Standard,
  /** Implemented */
  golbinRaidIncreasedMaximumAmmo: Standard,
  /** Implemented */
  golbinRaidIncreasedMaximumRunes: Standard,
  /** Implemented */
  golbinRaidPrayerUnlocked: Standard,
  /** Implemented? I don't think this one displays anywhere though */
  golbinRaidIncreasedPrayerLevel: Standard,
  /** Implemented */
  golbinRaidIncreasedPrayerPointsStart: Standard,
  /** Implemented. Golbin raid could have issues with the PP being effected by other modifiers though */
  golbinRaidIncreasedPrayerPointsWave: Standard,
  /** Implemented */
  golbinRaidPassiveSlotUnlocked: Standard,
  /** Implemented */
  golbinRaidIncreasedStartingRuneCount: Standard,
  /** Implemented */
  golbinRaidStartingWeapon: Standard,
  /** Implemented */
  increasedMinHitBasedOnMaxHit: Standard,
  decreasedMinHitBasedOnMaxHit: Standard,
  /** Implemented */
  increasedPotionChargesFlat: Standard,
  decreasedPotionChargesFlat: Standard,
}
type SkillModifierData = [SkillID, number];
type SkillModifierActive = { id: SkillID, value: number };
type ModifierData = Partial<ModifierObject<SkillModifierData[], number>>;
type ModifierActive = Partial<ModifierObject<SkillModifierActive[], number>>;
type ModifierKeys = keyof ModifierActive;
type SkillModifierKeys = 'increasedHiddenSkillLevel' | 'decreasedHiddenSkillLevel' | 'decreasedSkillInterval' | 'decreasedSkillIntervalPercent' | 'increasedSkillPreservationChance' | 'increasedMasteryXP' | 'increasedSkillXP' | 'increasedSkillInterval' | 'increasedSkillIntervalPercent' | 'decreasedSkillPreservationChance' | 'decreasedMasteryXP' | 'decreasedSkillXP' | 'increasedChanceToDoubleItemsSkill' | 'decreasedChanceToDoubleItemsSkill';
type StandardModifierKeys = Exclude<ModifierKeys, SkillModifierKeys>;
type ModifierEntries<Skill, Standard> = [StandardModifierKeys, Standard] | [SkillModifierKeys, Skill];
type ModifierDataEntries = ModifierEntries<SkillModifierData[], number>;
type ModifierActiveEntries = ModifierEntries<SkillModifierActive[], number>;

/** Generic base for all item like arrays */
interface GenericItem extends BaseItem {
  // Animated Item
  hasAnimation?: boolean,
  mediaAnimation?: string,
  // Upgradeable Item
  canUpgrade?: boolean,
  trimmedItemID?: number,
  itemsRequired?: number[][],
  trimmedGPCost?: number,
  canMultiUpgrade?: boolean,
  // Openable Item
  canOpen?: boolean,
  dropTable?: LootTable,
  dropQty?: number[],
  // Shop Item
  buysFor?: number,
  buysForLeather?: number,
  slayerCost?: number,
  slayerTaskRequirement?: [SlayerTier, number],
  buysForItems?: [ItemID, number][],
  // Bone Items
  isBones?: boolean,
  prayerPoints?: number,
  // Food
  canEat?: boolean,
  healsFor?: number,
  // Readable Item
  canRead?: boolean,
  // Alert Item
  readTitle?: string,
  readText?: string,
  // Birthday Event Cluescroll
  clueID?: 0 | 1 | 2 | 3,
  // Bank/Mastery Tokens
  isToken?: boolean,
  // Mastery tokens only
  skill?: SkillID,
  // Bank Token
  isBankToken?: boolean,
  // Skill Item
  masteryID?: [SkillID, number],
  // Log
  firemakingID?: number,
  // Cooking Item
  cookingCategory?: number,
  cookingID?: number,
  cookingLevel?: number,
  cookingXP?: number,
  cookedItemID?: ItemID,
  burntItemID?: ItemID,
  // Fish
  fishingID?: number,
  fishingLevel?: number,
  fishingXP?: number,
  minFishingInterval?: number,
  maxFishingInterval?: number,
  // Barbarian Fish
  strengthXP?: number,
  // Special Fishing Item
  fishingCatchWeight?: number,
  // Mining Item
  miningID?: number,
  miningLevel?: number,
  miningXP?: number,
  miningRespawnInterval?: number,
  maxMiningRespawnInterval?: number,
  // Smithing Item
  smithingID?: number,
  smithingLevel?: number,
  smithingXP?: number,
  smithReq?: ItemQuantity[],
  tier?: string,
  smithingQty?: number,
  // Farming Seed
  farmingLevel?: number,
  farmingXP?: number,
  seedsRequired?: number,
  timeToGrow?: number,
  grownItemID?: ItemID,
  farmingMasteryID?: number,
  // Fletching Item
  fletchingID?: FletchingID,
  fletchReq?: ItemQuantity[],
  fletchQty?: number,
  fletchingLevel?: number,
  fletchingXP?: number,
  fletchingCategory?: FletchingCategory,
  // Crafting Item
  craftingID?: number,
  craftReq?: ItemQuantity[],
  craftQty?: number,
  craftingLevel?: number,
  craftingXP?: number,
  // Runecrafting Item
  runecraftingLevel?: number,
  runecraftingXP?: number,
  runecraftReq?: ItemQuantity[],
  runecraftQty?: number,
  runecraftingID?: number,
  runecraftingCategory?: RunecraftingCategory,
  hasStats?: boolean,
  // Herblore Item/Potion
  herbloreMasteryID?: HerbloreItemID,
  herbloreReq?: ItemQuantity[],
  isPotion?: boolean,
  potionSkill?: SkillID,
  potionBonus?: number,
  potionBonusID?: PotionBonusID,
  potionCharges?: number,
  potionPage?: number,
  potionTier?: HerbloreTier,
  // Equipment Item
  canEquip?: boolean,
  equipmentSlot?: EquipSlotID,
  attackBonus?: [number, number, number],
  strengthBonus?: number,
  defenceBonus?: number,
  attackLevelRequired?: number,
  defenceLevelRequired?: number,
  rangedAttackBonus?: number,
  magicAttackBonus?: number,
  rangedDefenceBonus?: number,
  magicDefenceBonus?: number,
  damageReduction?: number,
  rangedStrengthBonus?: number,
  rangedLevelRequired?: number,
  prayerBonus?: number,
  ammoPreservation?: number,
  magicLevelRequired?: number,
  magicDamageBonus?: number,
  increasedMinAirSpellDmg?: number,
  increasedMinWaterSpellDmg?: number,
  increasedMinEarthSpellDmg?: number,
  increasedMinFireSpellDmg?: number,
  slayerLevelRequired?: number,
  slayerBonusXP?: number,
  slayerAreaEffectNegationPercent?: number,
  chanceToDoubleLoot?: number,
  increasedMaxHitpoints?: number,
  //  increasedWaterAirSpellDmg?: number,
  //  increasedEarthFireSpellDmg?: number,
  decreasedAttackSpeed?: number,
  slayerAreaEffectNegationFlat?: number,
  /** Unused flag for ranged weapons */
  isRanged?: boolean,
  // Skill Glove
  gloveID?: GloveID,
  // Quiver Item
  ammoType?: AmmoType,
  isAmmo?: boolean,
  // Passive Item
  isPassiveItem?: boolean,
  // Weapon
  canUseMagic?: boolean,
  attackSpeed?: number,
  isTwoHanded?: boolean,
  isMagic?: boolean,
  ammoTypeRequired?: AmmoType,
  // Special Weapon
  hasSpecialAttack?: true,
  specialAttackID?: PlayerSpecialID
  // Rune Provider
  providesRune?: ItemID[],
  providesRuneQty?: number,
  // Thief Gloves
  increasedGP?: number,
  increasedSuccessRate?: number,
  // Shaman Ring
  increasedHPRegen?: number,
  // Elder Crown
  lifesteal?: number,
  // Recoil Shield
  reflectDamage?: number,
  // Wasteful Ring
  increasedAutoEat?: number,
  decreasedAutoEatEfficiency?: number,
  // Priest Hat
  prayerCostReduction?: number,
  // ARoM
  bonusMasteryXP?: number,
  // Myserious_Stone (also present on cake but unused)
  dropRate?: number,
  // Big Ron
  bossStrengthMultiplier?: number,
  // Confetti Crossbow
  gpMultiplierCap?: number,
  gpMultiplierMin?: number,
  // Slayer Crossbow
  slayerStrengthMultiplier?: number,
  // Cloudburst
  increasedWaterSpellDamage?: number,
  // Crown of Rhaelyx
  baseDropRate?: number,
  maxDropRate?: number,
  chanceToPreserve?: number,
  baseChanceToPreserve?: number,
  // ARoS
  bonusSkillXP?: number,
  // Clue Chasers
  increasedItemChance?: number,
  // Deadeye Amulet
  chanceToCrit?: number,
  critDamage?: number,
  // Warlock Amulet
  spellHeal?: number,
  // Gold Ruby Ring
  hpRegenBonus?: number,
  // Fishing Amulet
  fishingSpeedBonus?: number,
  // Belongs to Gloop and Farming Skillcape
  harvestBonus?: number,
  // Chest of Witwix
  isStreamer?: boolean,
  // Signet Ring
  gpMultiplier?: number,
  chanceToDoubleResources?: number,
  // Pirates Lost Ring
  fishingBonusXP?: number
  // Modifiers
  modifiers?: ModifierData
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
  /** Display name of item */
  name: string,
  /** Base sale price of item */
  sellsFor: number,
  /** Local path to item image */
  media: string,
  /** Unused variable that references the item index */
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
interface BankCache {
  [index: number]: number
}
interface MasteryCache {
  [index: number]: number[]
}
interface MasteryLevelCache {
  [index: number]: { levels: number[] }
}
interface PlayFabEventBody {
  [key: string]: any
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
  buyLimit: [number, number, number],
  showBuyLimit?: boolean
}
type UnlockRequirement = {
  customDescription?: string
  shopItemPurchased?: [ShopCategory, number][],
  skillLevel?: [SkillID, number][],
  slayerTaskCompletion?: [SlayerTier, number][]
  dungeonCompletion?: [DungeonID, number][]
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
  modifiers: ModifierData,
  vars?: string[],
  values?: number[]
}