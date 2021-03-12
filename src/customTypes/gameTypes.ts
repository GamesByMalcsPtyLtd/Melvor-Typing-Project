/*  Melvor Typing Project v1.2.2: Fetches and Documents Melvor Idle

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
  /** Decreases maximumMagicDefenceRoll by %: Implemented but
   *  Bugged: Applies twice when debuffed by special attack
  */
  decreasedMagicEvasion: Standard,
  /** Not Implemented, Not Used */
  increasedMaxHitFlat: Standard,
  /** Not Implemented, Not Used */
  decreasedMaxHitFlat: Standard,
  /** Not Implemented */
  increasedMaxHitPercent: Standard,
  /** Not Implemented, Not Used */
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
  /** Decreases the quantity of prayerpoints consumed by a prayer by value: Implemented, but bugged, applies to 0 cost updates to pp */
  increasedFlatPrayerCostReduction: Standard,
  /** Increases the quantity of prayerpoints consumed by a prayer by value: Implemented, bug bugged, applies to 0 cost updates to pp */
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
  /** @deprecated Unimplemented and Used. Holdover from when agility had stamina */
  increasedMaxStamina: Standard,
  /** @deprecated Unimplemented and Used. Holdover from when agility had stamina */
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
  /** Increases the % chance to double items from all skills by value: Implemented
   * Does not work for combat loot
   */
  increasedChanceToDoubleItemsGlobal: Standard,
  /** Decreases the % chance to double items from all skills by value: Implemented
   * Does not work for combat loot
   */
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
  /** Unused and Unimplemented */
  increasedLifesteal: Standard,
  /** Unused and Unimplemented */
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
  /** Increases the % chance to double items from a skill by value: Partially Implemented.
   * Doesn't work for online Cooking, but the only use is the pet which still works, could do with transitioning to new system
   * Doesn't work for online Crafting (offline uses calculateChanceToDouble), but the global one does. Not used anywhere so it's fine for now.
   */
   increasedChanceToDoubleItemsSkill: Skill,
   /** Decreases the % chance to double items from a skill by value: Partially Implemented.
    * Doesn't work for online Cooking, but the only use is the pet which still works, could do with transitioning to new system
    * Doesn't work for online Crafting (offline uses calculateChanceToDouble), but the global one does. Not used anywhere so it's fine for now.
    */
   decreasedChanceToDoubleItemsSkill: Skill,
}
type ModifierObject<Skill, Standard> = StandardModifierObject<Standard> & SkillModifierObject<Skill>;
type SkillModifierData = [SkillID, number];
type SkillModifierActive = { id: SkillID, value: number };
type ModifierData = Partial<ModifierObject<SkillModifierData[], number>>;
type ModifierActive = Partial<ModifierObject<SkillModifierActive[], number>>;
type ModifierKeys = keyof ModifierObject<any,any>;
type SkillModifierKeys = keyof SkillModifierObject<any>;
type StandardModifierKeys = keyof StandardModifierObject<any>;
type SkillEntry<T> = [SkillModifierKeys,T];
type StandardEntry<T> = [StandardModifierKeys,T];
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
  /** Display name of item. May contain html portions that must be replaced/filtered*/
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
interface StringDictionary<T> {
  [index: string]: T
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