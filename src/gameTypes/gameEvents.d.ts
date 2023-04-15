/** Base Class for all game events */
declare class GameEvent {
}
/** Base Class for matching game events */
declare abstract class GameEventMatcher {
    /** Determines if the input event matches the conditions outlined by the matcher */
    abstract doesEventMatch(event: GameEvent): boolean;
}
declare type GameEventMatcherData = WoodcuttingEventMatcherOptions | FishingActionEventMatcherOptions | FiremakingActionEventMatcherOptions | BonfireLitEventMatcherOptions | CookingActionEventMatcherOptions | MiningActionEventMatcherOptions | SmithingActionEventMatcherOptions | ThievingActionEventMatcherOptions | FarmingPlantActionEventMatcherOptions | FarmingHarvestActionEventMatcherOptions | FletchingActionEventMatcherOptions | CraftingActionEventMatcherOptions | RunecraftingActionEventMatcherOptions | HerbloreActionEventMatcherOptions | AgilityActionEventMatcherOptions | SummoningActionEventMatcherOptions | AstrologyActionEventMatcherOptions | AltMagicActionEventMatcherOptions | MonsterDropEventMatcherOptions | PlayerAttackEventMatcherOptions | EnemyAttackEventMatcherOptions | FoodEatenEventMatcherOptions | PrayerPointConsumptionEventMatcherOptions | PlayerHitpointsRegenerationEventMatcherOptions | PlayerSummonAttackEventMatcherOptions | RuneConsumptionEventMatcherOptions | PotionUsedEventMatcherOptions | PotionChargeUsedEventMatcherOptions | MonsterKilledEventMatcherOptions | ItemEquippedEventMatcherOptions | FoodEquippedEventMatcherOptions | ShopPurchaseMadeEventMatcherOptions | SummonTabletUsedEventMatcherOptions;
/** Base Class for all skill action events */
declare class SkillActionEvent extends GameEvent {
    /** If the potion was active during the action */
    get isPotionActive(): boolean;
    /** If the action was sucessful. (e.g. not stunned or food burned) */
    successful: boolean;
    /** The quantity of the primary action product gained */
    productQuantity: number;
    /** The potion that was currently active during the action. Undefined if none active */
    activePotion?: PotionItem;
}
interface SkillActionEventMatcherOptions {
    isPotionActive?: boolean;
    succesful?: boolean;
    activePotionIDs?: string[];
}
/** Matches any skill action */
declare class SkillActionEventMatcher extends GameEventMatcher {
    /** If present, the SkillActionEvent must match this */
    isPotionActive?: boolean;
    /** If present, the SkillActionEvent must match this */
    succesful?: boolean;
    /** If present, the player must be using one of the specified potions during the Events firing */
    activePotions?: Set<PotionItem>;
    constructor(options: SkillActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
/** Event for a Woodcutting Skill Action */
declare class WoodcuttingActionEvent extends SkillActionEvent {
    /** The skill the event originated from */
    skill: Woodcutting;
    /** The active woodcutting trees during the event */
    actions: Set<WoodcuttingTree>;
    /** If a bird's nest or similar item was received during the action */
    nestGiven: boolean;
    constructor(
    /** The skill the event originated from */
    skill: Woodcutting, 
    /** The active woodcutting trees during the event */
    actions: Set<WoodcuttingTree>);
}
interface WoodcuttingEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'WoodcuttingAction';
    nestGiven?: boolean;
    actionIDs?: string[];
}
/** Matches a WoodcuttingActionEvent */
declare class WoodcuttingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the WoodcuttingActionEvent must match this */
    nestGiven?: boolean;
    /** If present, one or more of the trees must match the event */
    actions?: Set<WoodcuttingTree>;
    constructor(options: WoodcuttingEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class FishingActionEvent extends SkillActionEvent {
    /** The skill the event originated from */
    skill: Fishing;
    /** The fish being caught */
    action: Fish;
    /** The area being fished in */
    area: FishingArea;
    /** If a gem item was given as the primary reward */
    gemGiven: boolean;
    /** If a cooked version exists for the primary reward */
    cookedVersionExists: boolean;
    constructor(
    /** The skill the event originated from */
    skill: Fishing, 
    /** The fish being caught */
    action: Fish, 
    /** The area being fished in */
    area: FishingArea);
}
interface FishingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'FishingAction';
    actionIDs?: string[];
    areaIDs?: string[];
    gemGiven?: boolean;
    cookedVersionExists?: boolean;
}
declare class FishingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the FishingActionEvent's action must match a member */
    actions?: Set<Fish>;
    /** If present, the FishingActionEvent's area must match a member*/
    areas?: Set<FishingArea>;
    /** If present, the FishingActionEvent's property must match this */
    gemGiven?: boolean;
    /** If present, the FishingActionEvent's property must match this */
    cookedVersionExists?: boolean;
    constructor(options: FishingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class FiremakingActionEvent extends SkillActionEvent {
    /** The Source Skill for the event */
    skill: Firemaking;
    /** The log being burnt */
    action: FiremakingLog;
    constructor(
    /** The Source Skill for the event */
    skill: Firemaking, 
    /** The log being burnt */
    action: FiremakingLog);
}
interface FiremakingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'FiremakingAction';
    actionIDs?: string[];
}
declare class FiremakingActionEventMatcher extends SkillActionEventMatcher {
    actions?: Set<FiremakingLog>;
    constructor(options: FiremakingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class BonfireLitEvent extends GameEvent {
    /** The Source skill for the event */
    skill: Firemaking;
    /** The log a bonfire is being lit with */
    log: FiremakingLog;
    constructor(
    /** The Source skill for the event */
    skill: Firemaking, 
    /** The log a bonfire is being lit with */
    log: FiremakingLog);
}
interface BonfireLitEventMatcherOptions {
    type: 'BonfireLit';
    logIDs?: string[];
}
declare class BonfireLitEventMatcher extends GameEventMatcher {
    /** If present, the log of the BonfireLitEvent must match a member */
    logs?: Set<FiremakingLog>;
    constructor(options: BonfireLitEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class CookingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Cooking;
    /** The current recipe being cooked */
    action: CookingRecipe;
    /** The category being cooked in */
    category: CookingCategory;
    /** If anything was passive cooking during the event */
    isPassiveCooking: boolean;
    constructor(
    /** The source skill for the event */
    skill: Cooking, 
    /** The current recipe being cooked */
    action: CookingRecipe, 
    /** The category being cooked in */
    category: CookingCategory);
}
interface CookingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'CookingAction';
    actionIDs?: string[];
    categoryIDs?: string[];
    isPassiveCooking?: boolean;
}
declare class CookingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the CookingActionEvent's action must match a member */
    actions?: Set<CookingRecipe>;
    /** If present, the CookingActionEvent's category must match a member */
    categories?: Set<CookingCategory>;
    /** If present, the user must be passive cooking during the action */
    isPassiveCooking?: boolean;
    constructor(options: CookingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class MiningActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Mining;
    /** The current rock being mined */
    action: MiningRock;
    /** If a gem was obtained from the action */
    gemObtained: boolean;
    /** If a smithed version of the primary product exists */
    smithedVersionExists: boolean;
    constructor(
    /** The source skill for the event */
    skill: Mining, 
    /** The current rock being mined */
    action: MiningRock);
}
interface MiningActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'MiningAction';
    actionIDs?: string[];
    gemObtained?: boolean;
    smithedVersionExists?: boolean;
    actionGivesGems?: boolean;
    actionGivesSuperiorGems?: boolean;
    oreTypes?: MiningRockType[];
}
declare class MiningActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the MiningActionEvent's action must match a member */
    actions?: Set<MiningRock>;
    /** If present, the MiningActionEvent's property must match */
    gemObtained?: boolean;
    /** If present, the MiningActionEvent's property must match */
    smithedVersionExists?: boolean;
    /** If present, the actions ability to give gems must match */
    actionGivesGems?: boolean;
    /** If present, the actions ability to give superior gems must match */
    actionGivesSuperiorGems?: boolean;
    /** If present, the action must be one of the specified ore types */
    oreTypes?: Set<MiningRockType>;
    constructor(options: MiningActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class SmithingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Smithing;
    /** The current recipe being smithed */
    action: SmithingRecipe;
    constructor(
    /** The source skill for the event */
    skill: Smithing, 
    /** The current recipe being smithed */
    action: SmithingRecipe);
}
interface SmithingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'SmithingAction';
    actionIDs?: string[];
    categoryIDs?: string[];
    consumedItemIDs?: string[];
}
declare class SmithingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, SmithingActionEvent must match a member */
    actions?: Set<SmithingRecipe>;
    /** If present, the actions catgegory must match a member */
    categories?: Set<SkillCategory>;
    /** If present, the actions ingredient items must match a member */
    consumedItems?: Set<AnyItem>;
    constructor(options: SmithingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class ThievingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Thieving;
    /** The current NPC being stolen from */
    npc: ThievingNPC;
    /** The area the NPC is from */
    area: ThievingArea;
    /** If a common drop from the NPC was obtained */
    commonDropObtained: boolean;
    constructor(
    /** The source skill for the event */
    skill: Thieving, 
    /** The current NPC being stolen from */
    npc: ThievingNPC, 
    /** The area the NPC is from */
    area: ThievingArea);
}
interface ThievingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'ThievingAction';
    npcIDs?: string[];
    areaIDs?: string[];
    commonDropObtained?: boolean;
}
declare class ThievingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the event's action must match a membmer */
    npcs?: Set<ThievingNPC>;
    /** If present, the event's area must match a member */
    areas?: Set<ThievingArea>;
    /** If present, the event's property must match */
    commonDropObtained?: boolean;
    constructor(options: ThievingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
interface FarmingPlantActionEventMatcherOptions {
    type: 'FarmingPlantAction';
    actionIDs?: string[];
    categoryIDs?: string[];
}
declare class FarmingPlantActionEventMatcher extends GameEventMatcher {
    /** If present, the recipe being planted must match a member */
    actions?: Set<FarmingRecipe>;
    /** If present, the category of the recipe being planted must match a member */
    categories?: Set<FarmingCategory>;
    constructor(options: FarmingPlantActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class FarmingPlantActionEvent extends GameEvent {
    /** The source skill for the event */
    skill: Farming;
    /** The farming recipe being planted */
    action: FarmingRecipe;
    constructor(
    /** The source skill for the event */
    skill: Farming, 
    /** The farming recipe being planted */
    action: FarmingRecipe);
}
interface FarmingHarvestActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'FarmingHarvestAction';
    actionIDs?: string[];
    categoryIDs?: string[];
}
declare class FarmingHarvestActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe being harvested must match a member */
    actions?: Set<FarmingRecipe>;
    /** if present, the category of the recipe being harvested must match a member */
    categories?: Set<FarmingCategory>;
    constructor(options: FarmingHarvestActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class FarmingHarvestActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Farming;
    /** The farming recipe being harvested */
    action: FarmingRecipe;
    constructor(
    /** The source skill for the event */
    skill: Farming, 
    /** The farming recipe being harvested */
    action: FarmingRecipe);
}
declare class FletchingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Fletching;
    /** The fletching recipe being made */
    action: FletchingRecipe;
    /** The alternative recipe ID of the action */
    altRecipeID: number;
    constructor(
    /** The source skill for the event */
    skill: Fletching, 
    /** The fletching recipe being made */
    action: FletchingRecipe);
}
interface FletchingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'FletchingAction';
    actionIDs?: string[];
    categoryIDs?: string[];
    isArrows?: boolean;
    isUnstrungBows?: boolean;
}
declare class FletchingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe of the action must match a member */
    actions?: Set<FletchingRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    /** If present, the recipe must make arrows */
    isArrows?: boolean;
    /** If present, the recipe must make an unstrung bow */
    isUnstrungBows?: boolean;
    constructor(options: FletchingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class CraftingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Crafting;
    /** The crafting recipe being made */
    action: CraftingRecipe;
    constructor(
    /** The source skill for the event */
    skill: Crafting, 
    /** The crafting recipe being made */
    action: CraftingRecipe);
}
interface CraftingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'CraftingAction';
    actionIDs?: string[];
    categoryIDs?: string[];
}
declare class CraftingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe of the action must match a member */
    actions?: Set<CraftingRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    constructor(options: CraftingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class RunecraftingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Runecrafting;
    /** The runecrafting recipe being made */
    action: RunecraftingRecipe;
    constructor(
    /** The source skill for the event */
    skill: Runecrafting, 
    /** The runecrafting recipe being made */
    action: RunecraftingRecipe);
}
declare type RunecraftingSubCategory = 'ElementalRunes' | 'Staff' | 'None';
interface RunecraftingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'RunecraftingAction';
    actionIDs?: string[];
    categoryIDs?: string[];
    consumedItemIDs?: string[];
    subCategories?: RunecraftingSubCategory[];
}
declare class RunecraftingActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe of the action must match a member */
    actions?: Set<RunecraftingRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    /** If present, the recipe of the action must consume one of the items in the set */
    consumedItems?: Set<AnyItem>;
    /** If present the recipe of the action must belong to one of the sub categories */
    subCategories?: Set<RunecraftingSubCategory>;
    constructor(options: RunecraftingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class HerbloreActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Herblore;
    /** The herblore recipe being made */
    action: HerbloreRecipe;
    constructor(
    /** The source skill for the event */
    skill: Herblore, 
    /** The herblore recipe being made */
    action: HerbloreRecipe);
}
interface HerbloreActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'HerbloreAction';
    actionIDs?: string[];
    categoryIDs?: string[];
}
declare class HerbloreActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe of the action must match a member */
    actions?: Set<HerbloreRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    constructor(options: HerbloreActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class AgilityActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Agility;
    /** The obstacle being completed */
    action: AgilityObstacle;
    constructor(
    /** The source skill for the event */
    skill: Agility, 
    /** The obstacle being completed */
    action: AgilityObstacle);
}
interface AgilityActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'AgilityAction';
    actionIDs?: string[];
    categories?: number[];
}
declare class AgilityActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the obstacle of the action must match a member */
    actions?: Set<AgilityObstacle>;
    /** If present, the category of the obstacle must match a member */
    categories?: Set<number>;
    constructor(options: AgilityActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class SummoningActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Summoning;
    /** The summoning recipe being made */
    action: SummoningRecipe;
    altRecipeID: number;
    constructor(
    /** The source skill for the event */
    skill: Summoning, 
    /** The summoning recipe being made */
    action: SummoningRecipe);
}
interface SummoningActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'SummoningAction';
    actionIDs?: string[];
    categoryIDs?: string[];
}
declare class SummoningActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe of the action must match a member */
    actions?: Set<SummoningRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    constructor(options: SummoningActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class AstrologyActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Astrology;
    /** The astrology recipe being made */
    action: AstrologyRecipe;
    constructor(
    /** The source skill for the event */
    skill: Astrology, 
    /** The astrology recipe being made */
    action: AstrologyRecipe);
}
interface AstrologyActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'AstrologyAction';
    actionIDs?: string[];
}
declare class AstrologyActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe of the action must match a member */
    actions?: Set<AstrologyRecipe>;
    constructor(options: AstrologyActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class AltMagicActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: AltMagic;
    /** The spell being cast */
    spell: AltMagicSpell;
    /** If alternative runes were used during this event */
    altRunes: boolean;
    constructor(
    /** The source skill for the event */
    skill: AltMagic, 
    /** The spell being cast */
    spell: AltMagicSpell, 
    /** If alternative runes were used during this event */
    altRunes: boolean);
}
interface AltMagicActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'AltMagicAction';
    actionIDs?: string[];
    produces?: AltMagicProduction[];
    usedRuneIDs?: string[];
}
declare class AltMagicActionEventMatcher extends SkillActionEventMatcher {
    /** If present, the recipe of the action must match a member */
    spells?: Set<AltMagicSpell>;
    /** If present the produces of the spell must match a member */
    produces?: Set<AltMagicProductionID>;
    /** If present the spell must use one of the runes in this set */
    usedRunes?: Set<AnyItem>;
    constructor(options: AltMagicActionEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
    /** Checks if the usedRunes property matches */
    checkRunes(event: AltMagicActionEvent): boolean;
}
declare class MonsterDropEvent extends GameEvent {
    /** The item that was dropped */
    item: AnyItem;
    /** The quantity dropped */
    quantity: number;
    /** The drop was/is a herb seed */
    herbSeed: boolean;
    constructor(
    /** The item that was dropped */
    item: AnyItem, 
    /** The quantity dropped */
    quantity: number, 
    /** The drop was/is a herb seed */
    herbSeed: boolean);
}
interface MonsterDropEventMatcherOptions {
    type: 'MonsterDrop';
    herbSeed?: boolean;
}
declare class MonsterDropEventMatcher extends GameEventMatcher {
    /** If present the drop event's property must match */
    herbSeed?: boolean;
    constructor(options: MonsterDropEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class PlayerAttackEvent extends GameEvent {
    /** The attack that was used */
    attack: SpecialAttack;
    /** The attack type of the player */
    attackType: AttackType;
    constructor(
    /** The attack that was used */
    attack: SpecialAttack, 
    /** The attack type of the player */
    attackType: AttackType);
}
interface PlayerAttackEventMatcherOptions {
    type: 'PlayerAttack';
    attackTypes?: AttackType[];
}
declare class PlayerAttackEventMatcher extends GameEventMatcher {
    /** If present, the attack event's attackType must match a member */
    attackTypes?: Set<AttackType>;
    constructor(options: PlayerAttackEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class EnemyAttackEvent extends GameEvent {
    /** The attack that was used */
    attack: SpecialAttack;
    /** The attack type of the player */
    attackType: AttackType;
    constructor(
    /** The attack that was used */
    attack: SpecialAttack, 
    /** The attack type of the player */
    attackType: AttackType);
}
interface EnemyAttackEventMatcherOptions {
    type: 'EnemyAttack';
    attackTypes?: AttackType[];
}
declare class EnemyAttackEventMatcher extends GameEventMatcher {
    /** If present, the attack event's attackType must match a member */
    attackTypes?: Set<AttackType>;
    constructor(options: EnemyAttackEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class FoodEatenEvent extends GameEvent {
    /** The Food item that was eaten */
    food: FoodItem;
    /** The amount of the item that was eaten */
    quantity: number;
    /** The amoun that was healed */
    healed: number;
    constructor(
    /** The Food item that was eaten */
    food: FoodItem, 
    /** The amount of the item that was eaten */
    quantity: number, 
    /** The amoun that was healed */
    healed: number);
}
interface FoodEatenEventMatcherOptions {
    type: 'FoodEaten';
}
declare class FoodEatenEventMatcher extends GameEventMatcher {
    constructor(options: FoodEatenEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class PrayerPointConsumptionEvent extends GameEvent {
    /** The amount of points used */
    pointsUsed: number;
    constructor(
    /** The amount of points used */
    pointsUsed: number);
}
interface PrayerPointConsumptionEventMatcherOptions {
    type: 'PrayerPointConsumption';
}
declare class PrayerPointConsumptionEventMatcher extends GameEventMatcher {
    constructor(options: PrayerPointConsumptionEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class PlayerHitpointRegenerationEvent extends GameEvent {
    hitpointsGained: number;
    constructor(hitpointsGained: number);
}
interface PlayerHitpointsRegenerationEventMatcherOptions {
    type: 'PlayerHitpointRegeneration';
}
declare class PlayerHitpointRegenerationMatcher extends GameEventMatcher {
    constructor(options: PlayerHitpointsRegenerationEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class PlayerSummonAttackEvent extends GameEvent {
    missed: boolean;
    damage: number;
    constructor();
}
interface PlayerSummonAttackEventMatcherOptions {
    type: 'PlayerSummonAttack';
}
declare class PlayerSummonAttackEventMatcher extends GameEventMatcher {
    constructor(options: PlayerSummonAttackEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class RuneConsumptionEvent extends GameEvent {
    /** The runes that were consumed */
    runes: AnyItemQuantity[];
    /** If the runes were preserved */
    preserved: boolean;
    constructor(
    /** The runes that were consumed */
    runes: AnyItemQuantity[]);
}
interface RuneConsumptionEventMatcherOptions {
    type: 'RuneConsumption';
}
declare class RuneConsumptionEventMatcher extends GameEventMatcher {
    constructor(options: RuneConsumptionEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class PotionUsedEvent extends GameEvent {
    /** The potion item that was used */
    potion: PotionItem;
    /** The number of charges gained from the potion */
    charges: number;
    constructor(
    /** The potion item that was used */
    potion: PotionItem, 
    /** The number of charges gained from the potion */
    charges: number);
}
interface PotionUsedEventMatcherOptions {
    type: 'PotionUsed';
}
declare class PotionUsedEventMatcher extends GameEventMatcher {
    constructor(options: PotionUsedEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class PotionChargeUsedEvent extends GameEvent {
    /** The potion item that charges were consumed from */
    potion: PotionItem;
    /** If the charges were preserved */
    preserved: boolean;
    constructor(
    /** The potion item that charges were consumed from */
    potion: PotionItem);
}
interface PotionChargeUsedEventMatcherOptions {
    type: 'PotionChargeUsed';
}
declare class PotionChargeUsedEventMatcher extends GameEventMatcher {
    constructor(options: PotionChargeUsedEventMatcherOptions);
    doesEventMatch(event: GameEvent): boolean;
}
declare class MonsterKilledEvent extends GameEvent {
    /** The monster that was killed */
    monster: Monster;
    /** The attack type that the player was using when the monster was killed */
    killedByType: AttackType;
    constructor(
    /** The monster that was killed */
    monster: Monster, 
    /** The attack type that the player was using when the monster was killed */
    killedByType: AttackType);
}
interface MonsterKilledEventMatcherOptions {
    type: 'MonsterKilled';
    monsterIDs?: string[];
    killedWithType?: AttackType;
}
declare class MonsterKilledEventMatcher extends GameEventMatcher {
    get monsterList(): Monster[];
    /** If present, set monster killed must match a member */
    monsters?: Set<Monster>;
    /** If present, monster must be killed with the specified attack type */
    killedWithType?: AttackType;
    constructor(options: MonsterKilledEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class ItemEquippedEvent extends GameEvent {
    /** The item that was equipped */
    item: EquipmentItem;
    /** The quantity of the item that was equipped */
    quantity: number;
    constructor(
    /** The item that was equipped */
    item: EquipmentItem, 
    /** The quantity of the item that was equipped */
    quantity: number);
}
interface ItemEquippedEventMatcherOptions {
    type: 'ItemEquipped';
    itemIDs?: string[];
}
declare class ItemEquippedEventMatcher extends GameEventMatcher {
    /** If present, equipped item must match a member */
    items?: Set<EquipmentItem>;
    constructor(options: ItemEquippedEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class FoodEquippedEvent extends GameEvent {
    /** The food that was equipped */
    item: FoodItem;
    /** The quantity of the food that was equipped */
    quantity: number;
    constructor(
    /** The food that was equipped */
    item: FoodItem, 
    /** The quantity of the food that was equipped */
    quantity: number);
}
interface FoodEquippedEventMatcherOptions {
    type: 'FoodEquipped';
    itemIDs?: string[];
}
declare class FoodEquippedEventMatcher extends GameEventMatcher {
    /** If present, equipped item must match a member */
    items?: Set<FoodItem>;
    constructor(options: FoodEquippedEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class ShopPurchaseMadeEvent extends GameEvent {
    /** The Purchase that was made */
    purchase: ShopPurchase;
    /** The quantity of the purchase bought */
    quantity: number;
    constructor(
    /** The Purchase that was made */
    purchase: ShopPurchase, 
    /** The quantity of the purchase bought */
    quantity: number);
}
interface ShopPurchaseMadeEventMatcherOptions {
    type: 'ShopPurchaseMade';
    purchaseIDs?: string[];
}
declare class ShopPurchaseMadeEventMatcher extends GameEventMatcher {
    /** If present, purchase must match a member */
    purchases?: Set<ShopPurchase>;
    constructor(options: ShopPurchaseMadeEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
declare class SummonTabletUsedEvent extends GameEvent {
    /** The table that was used */
    tablet: EquipmentItem;
    constructor(
    /** The table that was used */
    tablet: EquipmentItem);
}
interface SummonTabletUsedEventMatcherOptions {
    type: 'SummonTabletUsed';
    tabletIDs?: string[];
}
declare class SummonTabletUsedEventMatcher extends GameEventMatcher {
    tablets?: Set<EquipmentItem>;
    constructor(options: SummonTabletUsedEventMatcherOptions, game: Game);
    doesEventMatch(event: GameEvent): boolean;
}
