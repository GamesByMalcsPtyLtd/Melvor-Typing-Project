declare type IGameEventEmitter<Events extends Record<EventType, GameEvent>> = Omit<Emitter<Events>, 'all' | 'emit'>;
/** An object that emits GameEvents, but cannot have wildcard handlers assigned. Used for base classes that implement events. */
declare type INoWildCardGameEventEmitter<Events extends Record<EventType, GameEvent>> = {
    on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
    off<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
};
declare type NoWildcardEventHandlerMap<Events extends Record<EventType, unknown>> = Map<keyof Event, Handler<Events[keyof Events]>[]>;
interface NoWildcardEmitter<Events extends Record<EventType, unknown>> {
    all: NoWildcardEventHandlerMap<Events>;
    on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
    off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void;
    emit<Key extends keyof Events>(type: Key, event: Events[Key]): void;
    emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void;
}
declare class GameEventEmitter<Events extends Record<EventType, GameEvent>> implements IGameEventEmitter<Events> {
    _events: import("mitt").Emitter<Events>;
    on: {
        <Key extends keyof Events>(type: Key, handler: import("mitt").Handler<Events[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<Events>): void;
    };
    off: {
        <Key extends keyof Events>(type: Key, handler?: import("mitt").Handler<Events[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<Events>): void;
    };
}
/** Base Class for all game events */
declare class GameEvent {
}
/** Base Class for matching game events */
declare abstract class GameEventMatcher<Event extends GameEvent> {
    game: Game;
    abstract readonly type: keyof EventMatcherMap;
    constructor(game: Game);
    /**
     * Assigns an event handler
     * @param handler The function to execute when a matching event occurs
     * @param golbinRaid If this handler is being assigned for Golbin Raid Combat
     * @returns A function that may be called to unassign the handlers
     */
    assignHandler(handler: Handler<Event>, golbinRaid?: boolean): VoidFunction;
    abstract _assignHandler(handler: Handler<Event>, golbinRaid: boolean): void;
    abstract _unassignHandler(handler: Handler<Event>, golbinRaid: boolean): void;
    /** Determines if the input event matches the conditions outlined by the matcher */
    abstract doesEventMatch(event: Event): boolean;
}
/** Base Class for Game Event Matchers that should not apply to Golbin Raid */
declare abstract class NonRaidGameEventMatcher<Event extends GameEvent> extends GameEventMatcher<Event> {
    _assignHandler(handler: Handler<Event>, golbinRaid: boolean): void;
    _unassignHandler(handler: Handler<Event>, golbinRaid: boolean): void;
    /** Assigns the event handler to the appropriate object. */
    abstract _assignNonRaidHandler(handler: Handler<Event>): void;
    /** Unassigns the event handler to the appropriate object. */
    abstract _unassignNonRaidHandler(handler: Handler<Event>): void;
}
/** Base class for Game Event Matchers that deal with Enemy/Player related events */
declare abstract class CharacterGameEventMatcher<Event extends GameEvent> extends GameEventMatcher<Event> {
    _assignHandler(handler: Handler<Event>, golbinRaid: boolean): void;
    _unassignHandler(handler: Handler<Event>, golbinRaid: boolean): void;
    /** Assigns the event handlers to the character associated with the combat manager */
    abstract _assignCharacterHandler(handler: Handler<Event>, combat: BaseManager): void;
    /** Unassigns the event handlers to the character associated with the combat manager */
    abstract _unassignCharacterHandler(handler: Handler<Event>, combat: BaseManager): void;
}
declare type EventMatcherMap = {
    WoodcuttingAction: WoodcuttingActionEventMatcher;
    FishingAction: FishingActionEventMatcher;
    FiremakingAction: FiremakingActionEventMatcher;
    BonfireLit: BonfireLitEventMatcher;
    CookingAction: CookingActionEventMatcher;
    MiningAction: MiningActionEventMatcher;
    SmithingAction: SmithingActionEventMatcher;
    ThievingAction: ThievingActionEventMatcher;
    FarmingPlantAction: FarmingPlantActionEventMatcher;
    FarmingHarvestAction: FarmingHarvestActionEventMatcher;
    FletchingAction: FletchingActionEventMatcher;
    CraftingAction: CraftingActionEventMatcher;
    RunecraftingAction: RunecraftingActionEventMatcher;
    HerbloreAction: HerbloreActionEventMatcher;
    AgilityAction: AgilityActionEventMatcher;
    SummoningAction: SummoningActionEventMatcher;
    AstrologyAction: AstrologyActionEventMatcher;
    AltMagicAction: AltMagicActionEventMatcher;
    MonsterDrop: MonsterDropEventMatcher;
    PlayerAttack: PlayerAttackEventMatcher;
    EnemyAttack: EnemyAttackEventMatcher;
    FoodEaten: FoodEatenEventMatcher;
    PrayerPointConsumption: PrayerPointConsumptionEventMatcher;
    PlayerHitpointRegeneration: PlayerHitpointRegenerationMatcher;
    PlayerSummonAttack: PlayerSummonAttackEventMatcher;
    RuneConsumption: RuneConsumptionEventMatcher;
    PotionUsed: PotionUsedEventMatcher;
    PotionChargeUsed: PotionChargeUsedEventMatcher;
    MonsterKilled: MonsterKilledEventMatcher;
    ItemEquipped: ItemEquippedEventMatcher;
    FoodEquipped: FoodEquippedEventMatcher;
    ShopPurchaseMade: ShopPurchaseMadeEventMatcher;
    SummonTabletUsed: SummonTabletUsedEventMatcher;
    MonsterSpawned: MonsterSpawnedEventMatcher;
    CartographySurvey: CartographySurveyEventMatcher;
    CartographyPaperMaking: CartographyPaperMakingEventMatcher;
    CartographyMapUpgrade: CartographyMapUpgradeEventMatcher;
    CartographyMapRefinement: CartographyMapRefinementEventMatcher;
    CartographyTravel: CartographyTravelEventMatcher;
    ArchaeologyAction: ArchaeologyActionEventMatcher;
    TownshipTaskCompleted: TownshipTaskCompletedEventMatcher;
    HarvestingAction: HarvestingActionEventMatcher;
    SoulPointConsumption: SoulPointConsumptionEventMatcher;
    BoneDrop: BoneDropEventMatcher;
};
declare type GameEventMatcherData = WoodcuttingEventMatcherOptions | FishingActionEventMatcherOptions | FiremakingActionEventMatcherOptions | BonfireLitEventMatcherOptions | CookingActionEventMatcherOptions | MiningActionEventMatcherOptions | SmithingActionEventMatcherOptions | ThievingActionEventMatcherOptions | FarmingPlantActionEventMatcherOptions | FarmingHarvestActionEventMatcherOptions | FletchingActionEventMatcherOptions | CraftingActionEventMatcherOptions | RunecraftingActionEventMatcherOptions | HerbloreActionEventMatcherOptions | AgilityActionEventMatcherOptions | SummoningActionEventMatcherOptions | AstrologyActionEventMatcherOptions | AltMagicActionEventMatcherOptions | MonsterDropEventMatcherOptions | PlayerAttackEventMatcherOptions | EnemyAttackEventMatcherOptions | FoodEatenEventMatcherOptions | PrayerPointConsumptionEventMatcherOptions | PlayerHitpointsRegenerationEventMatcherOptions | PlayerSummonAttackEventMatcherOptions | RuneConsumptionEventMatcherOptions | PotionUsedEventMatcherOptions | PotionChargeUsedEventMatcherOptions | MonsterKilledEventMatcherOptions | MonsterSpawnedEventMatcherOptions | ItemEquippedEventMatcherOptions | FoodEquippedEventMatcherOptions | ShopPurchaseMadeEventMatcherOptions | SummonTabletUsedEventMatcherOptions | CartographySurveyEventMatcherOptions | CartographyPaperMakingEventMatcherOptions | CartographyMapUpgradeEventMatcherOptions | CartographyMapRefinementEventMatcherOptions | CartographyTravelEventMatcherOptions | ArchaeologyActionEventMatcherOptions | TownshipTaskCompletedEventMatcherOptions | HarvestingActionEventMatcherOptions | SoulPointConsumptionEventMatcherOptions | BoneDropEventMatcherOptions;
declare type AnyGameEventMatcher = EventMatcherMap[keyof EventMatcherMap];
declare class IntervaledGameEvent extends GameEvent {
    /** The interval of the timer that triggered this event */
    interval: number;
    constructor();
}
/** Base Class for all skill action events */
declare class SkillActionEvent extends IntervaledGameEvent {
    /** If the potion was active during the action */
    get isPotionActive(): boolean;
    /** If the action was sucessful. (e.g. not stunned or food burned) */
    successful: boolean;
    /** The quantity of the primary action product gained */
    productQuantity: number;
    /** The potion that was currently active during the action. Undefined if none active */
    activePotion?: PotionItem;
    /** The realm associated with the given action. Undefined if no realm. */
    realm?: Realm;
}
interface SkillActionEventMatcherOptions {
    isPotionActive?: boolean;
    succesful?: boolean;
    activePotionIDs?: string[];
    /** Optional. If present the realm of the action must match an element of the array */
    realms?: string[];
}
/** Matches any skill action */
declare abstract class SkillActionEventMatcher<Event extends SkillActionEvent> extends NonRaidGameEventMatcher<Event> {
    /** If present, the SkillActionEvent must match this */
    isPotionActive?: boolean;
    /** If present, the SkillActionEvent must match this */
    succesful?: boolean;
    /** If present, the player must be using one of the specified potions during the Events firing */
    activePotions?: Set<PotionItem>;
    realms?: Set<Realm>;
    constructor(options: SkillActionEventMatcherOptions, game: Game);
    doesEventMatch(event: SkillActionEvent): boolean;
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
declare class WoodcuttingActionEventMatcher extends SkillActionEventMatcher<WoodcuttingActionEvent> {
    readonly type = "WoodcuttingAction";
    /** If present, the WoodcuttingActionEvent must match this */
    nestGiven?: boolean;
    /** If present, one or more of the trees must match the event */
    actions?: Set<WoodcuttingTree>;
    constructor(options: WoodcuttingEventMatcherOptions, game: Game);
    doesEventMatch(event: WoodcuttingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<WoodcuttingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<WoodcuttingActionEvent>): void;
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
    /** If a special item was given as the primary reward */
    specialItemGiven: boolean;
    /** The primary item that was rewarded for the event */
    rewardItem: AnyItem;
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
    specialItemGiven?: boolean;
}
declare class FishingActionEventMatcher extends SkillActionEventMatcher<FishingActionEvent> {
    readonly type = "FishingAction";
    /** If present, the FishingActionEvent's action must match a member */
    actions?: Set<Fish>;
    /** If present, the FishingActionEvent's area must match a member*/
    areas?: Set<FishingArea>;
    /** If present, the FishingActionEvent's property must match this */
    gemGiven?: boolean;
    /** If present, the FishingActionEvent's property must match this */
    cookedVersionExists?: boolean;
    /** If present, the FishingActionEvent's property must match this */
    specialItemGiven?: boolean;
    constructor(options: FishingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: FishingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<FishingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<FishingActionEvent>): void;
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
declare class FiremakingActionEventMatcher extends SkillActionEventMatcher<FiremakingActionEvent> {
    readonly type = "FiremakingAction";
    actions?: Set<FiremakingLog>;
    constructor(options: FiremakingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: FiremakingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<FiremakingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<FiremakingActionEvent>): void;
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
    /** Optional. If present, the ID of the realm the log belongs to must match an element of the array */
    realms?: string[];
}
declare class BonfireLitEventMatcher extends NonRaidGameEventMatcher<BonfireLitEvent> {
    readonly type = "BonfireLit";
    /** If present, the log of the BonfireLitEvent must match a member */
    logs?: Set<FiremakingLog>;
    /** If present, the log used must belong to one of these realms */
    realms?: Set<Realm>;
    constructor(options: BonfireLitEventMatcherOptions, game: Game);
    doesEventMatch(event: BonfireLitEvent): boolean;
    _assignNonRaidHandler(handler: Handler<BonfireLitEvent>): void;
    _unassignNonRaidHandler(handler: Handler<BonfireLitEvent>): void;
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
declare class CookingActionEventMatcher extends SkillActionEventMatcher<CookingActionEvent> {
    readonly type = "CookingAction";
    /** If present, the CookingActionEvent's action must match a member */
    actions?: Set<CookingRecipe>;
    /** If present, the CookingActionEvent's category must match a member */
    categories?: Set<CookingCategory>;
    /** If present, the user must be passive cooking during the action */
    isPassiveCooking?: boolean;
    constructor(options: CookingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: CookingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<CookingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<CookingActionEvent>): void;
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
    actionGivesAbyssalGems?: boolean;
    /** @deprecated Use categories instead */
    oreTypes?: string[];
    categories?: string[];
}
declare class MiningActionEventMatcher extends SkillActionEventMatcher<MiningActionEvent> {
    readonly type = "MiningAction";
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
    /** If present, the actions ability to give abyssal gems must match */
    actionGivesAbyssalGems?: boolean;
    /** If present, the action must be one of the specified categories */
    categories?: Set<MiningCategory>;
    constructor(options: MiningActionEventMatcherOptions, game: Game);
    doesEventMatch(event: MiningActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<MiningActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<MiningActionEvent>): void;
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
declare class SmithingActionEventMatcher extends SkillActionEventMatcher<SmithingActionEvent> {
    readonly type = "SmithingAction";
    /** If present, SmithingActionEvent must match a member */
    actions?: Set<SmithingRecipe>;
    /** If present, the actions catgegory must match a member */
    categories?: Set<SkillCategory>;
    /** If present, the actions ingredient items must match a member */
    consumedItems?: Set<AnyItem>;
    constructor(options: SmithingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: SmithingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<SmithingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<SmithingActionEvent>): void;
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
declare class ThievingActionEventMatcher extends SkillActionEventMatcher<ThievingActionEvent> {
    readonly type = "ThievingAction";
    /** If present, the event's action must match a membmer */
    npcs?: Set<ThievingNPC>;
    /** If present, the event's area must match a member */
    areas?: Set<ThievingArea>;
    /** If present, the event's property must match */
    commonDropObtained?: boolean;
    constructor(options: ThievingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: ThievingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<ThievingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<ThievingActionEvent>): void;
}
interface FarmingPlantActionEventMatcherOptions {
    type: 'FarmingPlantAction';
    actionIDs?: string[];
    categoryIDs?: string[];
}
declare class FarmingPlantActionEventMatcher extends NonRaidGameEventMatcher<FarmingPlantActionEvent> {
    readonly type = "FarmingPlantAction";
    /** If present, the recipe being planted must match a member */
    actions?: Set<FarmingRecipe>;
    /** If present, the category of the recipe being planted must match a member */
    categories?: Set<FarmingCategory>;
    constructor(options: FarmingPlantActionEventMatcherOptions, game: Game);
    doesEventMatch(event: FarmingPlantActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<FarmingPlantActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<FarmingPlantActionEvent>): void;
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
declare class FarmingHarvestActionEventMatcher extends SkillActionEventMatcher<FarmingHarvestActionEvent> {
    readonly type = "FarmingHarvestAction";
    /** If present, the recipe being harvested must match a member */
    actions?: Set<FarmingRecipe>;
    /** if present, the category of the recipe being harvested must match a member */
    categories?: Set<FarmingCategory>;
    constructor(options: FarmingHarvestActionEventMatcherOptions, game: Game);
    doesEventMatch(event: FarmingHarvestActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<FarmingHarvestActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<FarmingHarvestActionEvent>): void;
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
declare class FletchingActionEventMatcher extends SkillActionEventMatcher<FletchingActionEvent> {
    readonly type = "FletchingAction";
    /** If present, the recipe of the action must match a member */
    actions?: Set<FletchingRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    /** If present, the recipe must make arrows */
    isArrows?: boolean;
    /** If present, the recipe must make an unstrung bow */
    isUnstrungBows?: boolean;
    constructor(options: FletchingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: FletchingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<FletchingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<FletchingActionEvent>): void;
}
declare class CraftingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Crafting;
    /** The crafting recipe being made */
    action: CraftingRecipe;
    /** If the item being made is a consumable */
    isConsumable: boolean;
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
    /** Optional. If present, the item being crafted must match being a consumable item or not */
    isConsumable?: boolean;
}
declare class CraftingActionEventMatcher extends SkillActionEventMatcher<CraftingActionEvent> {
    readonly type = "CraftingAction";
    /** If present, the recipe of the action must match a member */
    actions?: Set<CraftingRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    /** If present, the product of the recipe must match being a consumble item or not */
    isConsumable?: boolean;
    constructor(options: CraftingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: CraftingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<CraftingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<CraftingActionEvent>): void;
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
interface RunecraftingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'RunecraftingAction';
    actionIDs?: string[];
    categoryIDs?: string[];
    consumedItemIDs?: string[];
    subcategoryIDs?: string[];
    /** @deprecated Use subcategoryIDs instead */
    subCategories?: string[];
}
declare class RunecraftingActionEventMatcher extends SkillActionEventMatcher<RunecraftingActionEvent> {
    readonly type = "RunecraftingAction";
    /** If present, the recipe of the action must match a member */
    actions?: Set<RunecraftingRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    /** If present, the recipe of the action must consume one of the items in the set */
    consumedItems?: Set<AnyItem>;
    /** If present the recipe of the action must belong to one of the sub categories */
    subCategories?: Set<SkillSubcategory>;
    constructor(options: RunecraftingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: RunecraftingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<RunecraftingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<RunecraftingActionEvent>): void;
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
declare class HerbloreActionEventMatcher extends SkillActionEventMatcher<HerbloreActionEvent> {
    readonly type = "HerbloreAction";
    /** If present, the recipe of the action must match a member */
    actions?: Set<HerbloreRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    constructor(options: HerbloreActionEventMatcherOptions, game: Game);
    doesEventMatch(event: HerbloreActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<HerbloreActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<HerbloreActionEvent>): void;
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
declare class AgilityActionEventMatcher extends SkillActionEventMatcher<AgilityActionEvent> {
    readonly type = "AgilityAction";
    /** If present, the obstacle of the action must match a member */
    actions?: Set<AgilityObstacle>;
    /** If present, the category of the obstacle must match a member */
    categories?: Set<number>;
    constructor(options: AgilityActionEventMatcherOptions, game: Game);
    doesEventMatch(event: AgilityActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<AgilityActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<AgilityActionEvent>): void;
}
declare class SummoningActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Summoning;
    /** The summoning recipe being made */
    action: SummoningRecipe;
    nonShardCost: Item;
    constructor(
    /** The source skill for the event */
    skill: Summoning, 
    /** The summoning recipe being made */
    action: SummoningRecipe, nonShardCost: Item);
}
interface SummoningActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'SummoningAction';
    actionIDs?: string[];
    categoryIDs?: string[];
}
declare class SummoningActionEventMatcher extends SkillActionEventMatcher<SummoningActionEvent> {
    readonly type = "SummoningAction";
    /** If present, the recipe of the action must match a member */
    actions?: Set<SummoningRecipe>;
    /** If present, the category of the recipe must match a member */
    categories?: Set<SkillCategory>;
    constructor(options: SummoningActionEventMatcherOptions, game: Game);
    doesEventMatch(event: SummoningActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<SummoningActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<SummoningActionEvent>): void;
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
declare class AstrologyActionEventMatcher extends SkillActionEventMatcher<AstrologyActionEvent> {
    readonly type = "AstrologyAction";
    /** If present, the recipe of the action must match a member */
    actions?: Set<AstrologyRecipe>;
    constructor(options: AstrologyActionEventMatcherOptions, game: Game);
    doesEventMatch(event: AstrologyActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<AstrologyActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<AstrologyActionEvent>): void;
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
declare class AltMagicActionEventMatcher extends SkillActionEventMatcher<AltMagicActionEvent> {
    readonly type = "AltMagicAction";
    /** If present, the recipe of the action must match a member */
    spells?: Set<AltMagicSpell>;
    /** If present the produces of the spell must match a member */
    produces?: Set<AltMagicProductionID>;
    /** If present the spell must use one of the runes in this set */
    usedRunes?: Set<AnyItem>;
    constructor(options: AltMagicActionEventMatcherOptions, game: Game);
    doesEventMatch(event: AltMagicActionEvent): boolean;
    /** Checks if the usedRunes property matches */
    checkRunes(event: AltMagicActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<AltMagicActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<AltMagicActionEvent>): void;
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
declare class MonsterDropEventMatcher extends NonRaidGameEventMatcher<MonsterDropEvent> {
    readonly type = "MonsterDrop";
    /** If present the drop event's property must match */
    herbSeed?: boolean;
    constructor(options: MonsterDropEventMatcherOptions, game: Game);
    doesEventMatch(event: MonsterDropEvent): boolean;
    _assignNonRaidHandler(handler: Handler<MonsterDropEvent>): void;
    _unassignNonRaidHandler(handler: Handler<MonsterDropEvent>): void;
}
declare class BoneDropEvent extends GameEvent {
    /** The monster that dropped a bone */
    monster: Monster;
    /** The bone item that dropped */
    item: AnyItem;
    /** The quantity of the item that dropped */
    quantity: number;
    constructor(
    /** The monster that dropped a bone */
    monster: Monster, 
    /** The bone item that dropped */
    item: AnyItem, 
    /** The quantity of the item that dropped */
    quantity: number);
}
interface BoneDropEventMatcherOptions {
    type: 'BoneDrop';
    /** Optional. If present the bone item that drops must match being a BoneItem */
    isBone?: boolean;
    /** Optional. If present the bone item that drops must match being a SoulItem */
    isSoul?: boolean;
}
declare class BoneDropEventMatcher extends NonRaidGameEventMatcher<BoneDropEvent> {
    readonly type = "BoneDrop";
    isBone?: boolean;
    isSoul?: boolean;
    constructor(options: BoneDropEventMatcherOptions, game: Game);
    doesEventMatch(event: BoneDropEvent): boolean;
    _assignNonRaidHandler(handler: Handler<BoneDropEvent>): void;
    _unassignNonRaidHandler(handler: Handler<BoneDropEvent>): void;
}
interface CharacterAttackEventProps {
    /** The character that attacked */
    attacker: Character;
    /** The attack that was used */
    attack: SpecialAttack;
    /** The attack type of the attacking character */
    attackType: AttackType;
    /** The number of times this attack has occured on the turn */
    attackCount: number;
    /** If this was the first time the attack hit */
    firstHit: boolean;
    /** If the attack was a critical hit */
    isCritical: boolean;
    /** The damage dealt by the attack before modification */
    rawDamage?: number;
    /** The damage dealt by the attack */
    damage?: number;
}
declare class CharacterAttackEvent extends IntervaledGameEvent implements Required<CharacterAttackEventProps> {
    /** The type of attack event */
    type: 'Pre' | 'Hit' | 'Miss' | 'Post';
    attacker: Character;
    attack: SpecialAttack;
    attackType: AttackType;
    attackCount: number;
    firstHit: boolean;
    isCritical: boolean;
    rawDamage: number;
    damage: number;
    /** Returns true if this is a subsequent hit of a multi-attack special, originating from the player */
    get isPlayerMulti(): boolean;
    constructor(
    /** The type of attack event */
    type: 'Pre' | 'Hit' | 'Miss' | 'Post', props: CharacterAttackEventProps);
}
interface PlayerAttackEventMatcherOptions {
    type: 'PlayerAttack';
    attackTypes?: AttackType[];
}
declare class PlayerAttackEventMatcher extends CharacterGameEventMatcher<CharacterAttackEvent> {
    readonly type = "PlayerAttack";
    /** If present, the attack event's attackType must match a member */
    attackTypes?: Set<AttackType>;
    constructor(options: PlayerAttackEventMatcherOptions, game: Game);
    doesEventMatch(event: CharacterAttackEvent): boolean;
    _assignCharacterHandler(handler: Handler<CharacterAttackEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<CharacterAttackEvent>, combat: BaseManager): void;
}
interface EnemyAttackEventMatcherOptions {
    type: 'EnemyAttack';
    attackTypes?: AttackType[];
}
declare class EnemyAttackEventMatcher extends CharacterGameEventMatcher<CharacterAttackEvent> {
    readonly type = "EnemyAttack";
    /** If present, the attack event's attackType must match a member */
    attackTypes?: Set<AttackType>;
    constructor(options: EnemyAttackEventMatcherOptions, game: Game);
    doesEventMatch(event: CharacterAttackEvent): boolean;
    _assignCharacterHandler(handler: Handler<CharacterAttackEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<CharacterAttackEvent>, combat: BaseManager): void;
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
declare class FoodEatenEventMatcher extends CharacterGameEventMatcher<FoodEatenEvent> {
    readonly type = "FoodEaten";
    constructor(options: FoodEatenEventMatcherOptions, game: Game);
    doesEventMatch(event: FoodEatenEvent): boolean;
    _assignCharacterHandler(handler: Handler<FoodEatenEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<FoodEatenEvent>, combat: BaseManager): void;
}
declare class PrayerPointConsumptionEvent extends GameEvent {
    /** The amount of points used */
    pointsUsed: number;
    /** If the prayer used was unholy */
    isUnholy: boolean;
    constructor(
    /** The amount of points used */
    pointsUsed: number, 
    /** If the prayer used was unholy */
    isUnholy: boolean);
}
interface PrayerPointConsumptionEventMatcherOptions {
    type: 'PrayerPointConsumption';
    /** Optional. If present the prayer the points were consumed for must have a matching property */
    isUnholy?: boolean;
}
declare class PrayerPointConsumptionEventMatcher extends CharacterGameEventMatcher<PrayerPointConsumptionEvent> {
    readonly type = "PrayerPointConsumption";
    isUnholy?: boolean;
    constructor(options: PrayerPointConsumptionEventMatcherOptions, game: Game);
    doesEventMatch(event: PrayerPointConsumptionEvent): boolean;
    _assignCharacterHandler(handler: Handler<PrayerPointConsumptionEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<PrayerPointConsumptionEvent>, combat: BaseManager): void;
}
declare class HitpointRegenerationEvent extends GameEvent {
    hitpointsGained: number;
    constructor(hitpointsGained: number);
}
/** Event that occurs when either the maximum or current hitpoints of a character changes */
declare class HitpointsChangedEvent extends GameEvent {
    oldCurrent: number;
    oldMax: number;
    newCurrent: number;
    newMax: number;
    get oldPercent(): number;
    get newPercent(): number;
    constructor(oldCurrent: number, oldMax: number, newCurrent: number, newMax: number);
}
/** Event that occurs when either the maximum or current barrier of a character changes */
declare class BarrierChangedEvent extends GameEvent {
    oldCurrent: number;
    oldMax: number;
    newCurrent: number;
    newMax: number;
    get oldPercent(): number;
    get newPercent(): number;
    constructor(oldCurrent: number, oldMax: number, newCurrent: number, newMax: number);
}
/** Event that is fired at the end of a Character's turn */
declare class CharacterEndOfTurnEvent extends GameEvent {
    constructor();
}
interface CharacterAttackedEventProps {
    /** The attack used */
    attack: SpecialAttack;
    /** If this was the first time the attack hit */
    firstHit: boolean;
    /** The raw damage taken from the attack */
    rawDamage?: number;
    /** The damage taken from the attack */
    damage?: number;
}
declare class CharacterAttackedEvent extends GameEvent implements Required<CharacterAttackedEventProps> {
    type: 'Being' | 'Hit' | 'Evaded' | 'Was';
    attack: SpecialAttack;
    firstHit: boolean;
    rawDamage: number;
    damage: number;
    constructor(type: 'Being' | 'Hit' | 'Evaded' | 'Was', props: CharacterAttackedEventProps);
}
/** Event that occurs when an effect that belongs to the group is added to a character */
declare class CharacterEffectGroupAppliedEvent extends GameEvent {
    group: CombatEffectGroup;
    constructor(group: CombatEffectGroup);
}
/** Event that occurs when all effects that belong to the group are removed from a character */
declare class CharacterEffectGroupRemovedEvent extends GameEvent {
    group: CombatEffectGroup;
    constructor(group: CombatEffectGroup);
}
/** Event that occurs when the given effect is applied to a character */
declare class CharacterEffectAppliedEvent extends GameEvent {
    effect: CombatEffect;
    constructor(effect: CombatEffect);
}
/** Event that occurs when the given effect is removed from a character */
declare class CharacterEffectRemovedEvent extends GameEvent {
    effect: CombatEffect;
    constructor(effect: CombatEffect);
}
/** Event that occurs at the start of a fight in combat */
declare class StartOfFightEvent extends GameEvent {
    constructor();
}
/** Event that occurs at the end of a fight in combat */
declare class EndOfFightEvent extends GameEvent {
    constructor();
}
interface PlayerHitpointsRegenerationEventMatcherOptions {
    type: 'PlayerHitpointRegeneration';
}
declare class PlayerHitpointRegenerationMatcher extends CharacterGameEventMatcher<HitpointRegenerationEvent> {
    readonly type = "PlayerHitpointRegeneration";
    constructor(options: PlayerHitpointsRegenerationEventMatcherOptions, game: Game);
    doesEventMatch(event: HitpointRegenerationEvent): boolean;
    _assignCharacterHandler(handler: Handler<HitpointRegenerationEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<HitpointRegenerationEvent>, combat: BaseManager): void;
}
declare class PlayerSummonAttackEvent extends IntervaledGameEvent {
    missed: boolean;
    damage: number;
    constructor();
}
interface PlayerSummonAttackEventMatcherOptions {
    type: 'PlayerSummonAttack';
}
declare class PlayerSummonAttackEventMatcher extends CharacterGameEventMatcher<PlayerSummonAttackEvent> {
    readonly type = "PlayerSummonAttack";
    constructor(options: PlayerSummonAttackEventMatcherOptions, game: Game);
    doesEventMatch(event: PlayerSummonAttackEvent): boolean;
    _assignCharacterHandler(handler: Handler<PlayerSummonAttackEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<PlayerSummonAttackEvent>, combat: BaseManager): void;
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
declare class RuneConsumptionEventMatcher extends GameEventMatcher<RuneConsumptionEvent> {
    readonly type = "RuneConsumption";
    constructor(options: RuneConsumptionEventMatcherOptions, game: Game);
    doesEventMatch(event: RuneConsumptionEvent): boolean;
    _assignHandler(handler: Handler<RuneConsumptionEvent>, golbinRaid: boolean): void;
    _unassignHandler(handler: Handler<RuneConsumptionEvent>, golbinRaid: boolean): void;
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
declare class PotionUsedEventMatcher extends NonRaidGameEventMatcher<PotionUsedEvent> {
    readonly type = "PotionUsed";
    constructor(options: PotionUsedEventMatcherOptions, game: Game);
    doesEventMatch(event: PotionUsedEvent): boolean;
    _assignNonRaidHandler(handler: Handler<PotionUsedEvent>): void;
    _unassignNonRaidHandler(handler: Handler<PotionUsedEvent>): void;
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
declare class PotionChargeUsedEventMatcher extends NonRaidGameEventMatcher<PotionChargeUsedEvent> {
    readonly type = "PotionChargeUsed";
    constructor(options: PotionChargeUsedEventMatcherOptions, game: Game);
    doesEventMatch(event: PotionChargeUsedEvent): boolean;
    _assignNonRaidHandler(handler: Handler<PotionChargeUsedEvent>): void;
    _unassignNonRaidHandler(handler: Handler<PotionChargeUsedEvent>): void;
}
declare class PotionChangedEvent extends GameEvent {
    /** The action whose potion changed */
    action: Action;
    /** The previous potion being used. Undefined if none. */
    oldPotion: PotionItem | undefined;
    /** The new potion being used. Undefined if none. */
    newPotion: PotionItem | undefined;
    constructor(
    /** The action whose potion changed */
    action: Action, 
    /** The previous potion being used. Undefined if none. */
    oldPotion: PotionItem | undefined, 
    /** The new potion being used. Undefined if none. */
    newPotion: PotionItem | undefined);
}
declare class MonsterKilledEvent extends GameEvent {
    /** The monster that was killed */
    monster: Monster;
    /** The attack type that the player was using when the monster was killed */
    killedByType: AttackType;
    /** The player class that killed the monster */
    player: Player;
    /** If the monster killed was corrupted */
    wasCorrupted: boolean;
    constructor(
    /** The monster that was killed */
    monster: Monster, 
    /** The attack type that the player was using when the monster was killed */
    killedByType: AttackType, 
    /** The player class that killed the monster */
    player: Player, 
    /** If the monster killed was corrupted */
    wasCorrupted: boolean);
}
interface MonsterKilledEventMatcherOptions {
    type: 'MonsterKilled';
    monsterIDs?: string[];
    killedWithType?: AttackType;
    /** Optional. If present, the monster killed must drop one of these currencies */
    droppedCurrencies?: string[];
    /** Optional. If present, the monster dropping a SoulItem must match. */
    droppedSoul?: boolean;
    /** Optional. If present, the monster killed must match being Corrupted */
    isCorrupted?: boolean;
}
declare class MonsterKilledEventMatcher extends NonRaidGameEventMatcher<MonsterKilledEvent> {
    readonly type = "MonsterKilled";
    get monsterList(): Monster[];
    /** If present, set monster killed must match a member */
    monsters?: Set<Monster>;
    /** If present, monster must be killed with the specified attack type */
    killedWithType?: AttackType;
    /** If present, monster must drop one of these currencies */
    droppedCurrencies?: Set<Currency>;
    /** If present, monster dropping a SoulItem must match */
    droppedSoul?: boolean;
    /** If present, monster being killed must match being Corrupted */
    isCorrupted?: boolean;
    constructor(options: MonsterKilledEventMatcherOptions, game: Game);
    doesEventMatch(event: MonsterKilledEvent): boolean;
    _assignNonRaidHandler(handler: Handler<MonsterKilledEvent>): void;
    _unassignNonRaidHandler(handler: Handler<MonsterKilledEvent>): void;
}
declare class MonsterSpawnedEvent extends GameEvent {
    /** The monster that spawned */
    monster: Monster;
    constructor(
    /** The monster that spawned */
    monster: Monster);
}
interface MonsterSpawnedEventMatcherOptions {
    type: 'MonsterSpawned';
    monsterIDs?: string[];
}
declare class MonsterSpawnedEventMatcher extends NonRaidGameEventMatcher<MonsterSpawnedEvent> {
    readonly type = "MonsterSpawned";
    get monsterList(): Monster[];
    /** If present, set monster spawned must match a member */
    monsters?: Set<Monster>;
    constructor(options: MonsterSpawnedEventMatcherOptions, game: Game);
    doesEventMatch(event: MonsterSpawnedEvent): boolean;
    _assignNonRaidHandler(handler: Handler<MonsterSpawnedEvent>): void;
    _unassignNonRaidHandler(handler: Handler<MonsterSpawnedEvent>): void;
}
/** Triggers when a character "Respwans" from the increasedRebirthChance modifier */
declare class CharacterRebirthEvent extends GameEvent {
    constructor();
}
/** Fires when the player changes their currently equipped items. Occurs before stats are computed. */
declare class EquipmentChangedEvent extends GameEvent {
    player: Player;
    constructor(player: Player);
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
declare class ItemEquippedEventMatcher extends CharacterGameEventMatcher<ItemEquippedEvent> {
    readonly type = "ItemEquipped";
    /** If present, equipped item must match a member */
    items?: Set<EquipmentItem>;
    constructor(options: ItemEquippedEventMatcherOptions, game: Game);
    doesEventMatch(event: ItemEquippedEvent): boolean;
    _assignCharacterHandler(handler: Handler<ItemEquippedEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<ItemEquippedEvent>, combat: BaseManager): void;
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
declare class FoodEquippedEventMatcher extends CharacterGameEventMatcher<FoodEquippedEvent> {
    readonly type = "FoodEquipped";
    /** If present, equipped item must match a member */
    items?: Set<FoodItem>;
    constructor(options: FoodEquippedEventMatcherOptions, game: Game);
    doesEventMatch(event: FoodEquippedEvent): boolean;
    _assignCharacterHandler(handler: Handler<FoodEquippedEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<FoodEquippedEvent>, combat: BaseManager): void;
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
declare class ShopPurchaseMadeEventMatcher extends NonRaidGameEventMatcher<ShopPurchaseMadeEvent> {
    readonly type = "ShopPurchaseMade";
    /** If present, purchase must match a member */
    purchases?: Set<ShopPurchase>;
    constructor(options: ShopPurchaseMadeEventMatcherOptions, game: Game);
    doesEventMatch(event: ShopPurchaseMadeEvent): boolean;
    _assignNonRaidHandler(handler: Handler<ShopPurchaseMadeEvent>): void;
    _unassignNonRaidHandler(handler: Handler<ShopPurchaseMadeEvent>): void;
}
declare class SummonTabletUsedEvent extends GameEvent {
    /** The tablet that was used */
    tablet: EquipmentItem;
    /** The summoning recipe associated with the tablet */
    recipe?: SummoningRecipe | undefined;
    constructor(
    /** The tablet that was used */
    tablet: EquipmentItem, 
    /** The summoning recipe associated with the tablet */
    recipe?: SummoningRecipe | undefined);
}
interface SummonTabletUsedEventMatcherOptions {
    type: 'SummonTabletUsed';
    tabletIDs?: string[];
    /** Optional. If present, the ID of the realm the tablet's recipe belongs to must match an element of the array */
    realms?: string[];
}
declare class SummonTabletUsedEventMatcher extends CharacterGameEventMatcher<SummonTabletUsedEvent> {
    readonly type = "SummonTabletUsed";
    tablets?: Set<EquipmentItem>;
    /** If present, the tablet used must belong to one of these realms */
    realms?: Set<Realm>;
    constructor(options: SummonTabletUsedEventMatcherOptions, game: Game);
    doesEventMatch(event: SummonTabletUsedEvent): boolean;
    _assignCharacterHandler(handler: Handler<SummonTabletUsedEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<SummonTabletUsedEvent>, combat: BaseManager): void;
}
declare class GameEventSystem {
    game: Game;
    constructor(game: Game);
    /** Constructs a GameEventMatcher object from any event matcher datat type */
    constructMatcher(data: GameEventMatcherData): AnyGameEventMatcher;
    /**
     * Assigns the handler function for each game event matcher
     * @param matchers An array of game event matchers
     * @param handler The handler to call each time an event matches
     * @param golbinRaid If these matchers were assigned from a golbin raid related class
     * @returns An array of unassigner functions
     */
    assignMatchers(matchers: AnyGameEventMatcher[], handler: Handler<GameEvent>, golbinRaid?: boolean): VoidFunction[];
    /** Calls each unassigner in an array of unassigner functions */
    unassignMatchers(unassigners: VoidFunction[]): void;
}
declare class CartographySurveyEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Cartography;
    /** The hex that was surveyed */
    hex: Hex;
    constructor(
    /** The source skill for the event */
    skill: Cartography, 
    /** The hex that was surveyed */
    hex: Hex);
}
interface CartographySurveyEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'CartographySurvey';
    worldMaps?: string[];
}
declare class CartographySurveyEventMatcher extends SkillActionEventMatcher<CartographySurveyEvent> {
    readonly type = "CartographySurvey";
    /** If present, the CartographySurveyEvent's hex must belong to one of the world maps */
    worldMaps?: Set<WorldMap>;
    constructor(options: CartographySurveyEventMatcherOptions, game: Game);
    doesEventMatch(event: CartographySurveyEvent): boolean;
    _assignNonRaidHandler(handler: Handler<CartographySurveyEvent>): void;
    _unassignNonRaidHandler(handler: Handler<CartographySurveyEvent>): void;
}
declare class CartographyTravelEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Cartography;
    /** The hex that was travelled to */
    hex: Hex;
    constructor(
    /** The source skill for the event */
    skill: Cartography, 
    /** The hex that was travelled to */
    hex: Hex);
}
interface CartographyTravelEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'CartographyTravel';
    worldMaps?: string[];
}
declare class CartographyTravelEventMatcher extends SkillActionEventMatcher<CartographyTravelEvent> {
    readonly type = "CartographyTravel";
    /** If present, the CartographyTravelEvent's hex must belong to one of the world maps */
    worldMaps?: Set<WorldMap>;
    constructor(options: CartographyTravelEventMatcherOptions, game: Game);
    doesEventMatch(event: CartographyTravelEvent): boolean;
    _assignNonRaidHandler(handler: Handler<CartographyTravelEvent>): void;
    _unassignNonRaidHandler(handler: Handler<CartographyTravelEvent>): void;
}
declare class CartographyPaperMakingEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Cartography;
    /** Recipe that is being used to make paper */
    recipe: PaperMakingRecipe;
    constructor(
    /** The source skill for the event */
    skill: Cartography, 
    /** Recipe that is being used to make paper */
    recipe: PaperMakingRecipe);
}
interface CartographyPaperMakingEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'CartographyPaperMaking';
    recipes?: string[];
}
declare class CartographyPaperMakingEventMatcher extends SkillActionEventMatcher<CartographyPaperMakingEvent> {
    readonly type = "CartographyPaperMaking";
    /** If present, the CartographyPaperMakingEvent's recipe must belong to the set */
    recipes?: Set<PaperMakingRecipe>;
    constructor(options: CartographyPaperMakingEventMatcherOptions, game: Game);
    doesEventMatch(event: CartographyPaperMakingEvent): boolean;
    _assignNonRaidHandler(handler: Handler<CartographyPaperMakingEvent>): void;
    _unassignNonRaidHandler(handler: Handler<CartographyPaperMakingEvent>): void;
}
declare class CartographyMapUpgradeEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Cartography;
    /** Map that is being upgraded for the event */
    map: DigSiteMap;
    constructor(
    /** The source skill for the event */
    skill: Cartography, 
    /** Map that is being upgraded for the event */
    map: DigSiteMap);
}
interface CartographyMapUpgradeEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'CartographyMapUpgrade';
    digSites?: string[];
}
declare class CartographyMapUpgradeEventMatcher extends SkillActionEventMatcher<CartographyMapUpgradeEvent> {
    readonly type = "CartographyMapUpgrade";
    digSites?: Set<ArchaeologyDigSite>;
    constructor(options: CartographyMapUpgradeEventMatcherOptions, game: Game);
    doesEventMatch(event: CartographyMapUpgradeEvent): boolean;
    _assignNonRaidHandler(handler: Handler<CartographyMapUpgradeEvent>): void;
    _unassignNonRaidHandler(handler: Handler<CartographyMapUpgradeEvent>): void;
}
declare class CartographyMapRefinementEvent extends GameEvent {
    /** The source skill for the event */
    skill: Cartography;
    /** The map that had a refinement bought for it */
    map: DigSiteMap;
    constructor(
    /** The source skill for the event */
    skill: Cartography, 
    /** The map that had a refinement bought for it */
    map: DigSiteMap);
}
interface CartographyMapRefinementEventMatcherOptions {
    type: 'CartographyMapRefinement';
    digSites?: string[];
}
declare class CartographyMapRefinementEventMatcher extends NonRaidGameEventMatcher<CartographyMapRefinementEvent> {
    readonly type = "CartographyMapRefinement";
    digSites?: Set<ArchaeologyDigSite>;
    constructor(options: CartographyMapRefinementEventMatcherOptions, game: Game);
    doesEventMatch(event: CartographyMapRefinementEvent): boolean;
    _assignNonRaidHandler(handler: Handler<CartographyMapRefinementEvent>): void;
    _unassignNonRaidHandler(handler: Handler<CartographyMapRefinementEvent>): void;
}
/** Event for an Archaeology Skill Action */
declare class ArchaeologyActionEvent extends SkillActionEvent {
    /** The skill the event originated from */
    skill: Archaeology;
    /** The dig site being dug in */
    action: ArchaeologyDigSite;
    /** If an artifact was found during the action */
    artifactFound: boolean;
    constructor(
    /** The skill the event originated from */
    skill: Archaeology, 
    /** The dig site being dug in */
    action: ArchaeologyDigSite);
}
interface ArchaeologyActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'ArchaeologyAction';
    actionIDs?: string[];
    artifactFound?: boolean;
}
/** Matches a WoodcuttingActionEvent */
declare class ArchaeologyActionEventMatcher extends SkillActionEventMatcher<ArchaeologyActionEvent> {
    readonly type = "ArchaeologyAction";
    /** If present, the ArchaeologyActionEvent's action must match a member */
    actions?: Set<ArchaeologyDigSite>;
    /** If present, an artifact being found must match this property */
    artifactFound?: boolean;
    constructor(options: ArchaeologyActionEventMatcherOptions, game: Game);
    doesEventMatch(event: ArchaeologyActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<ArchaeologyActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<ArchaeologyActionEvent>): void;
}
/** Event that is fired when anything changes that may meet/fail to meet the requirements system */
declare class RequirementChangedEvent extends GameEvent {
    constructor();
}
declare class TownshipTaskCompletedEvent extends SkillActionEvent {
    /** The task that was completed */
    task: TownshipTask;
    constructor(
    /** The task that was completed */
    task: TownshipTask);
}
interface TownshipTaskCompletedEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'TownshipTaskCompleted';
    taskIDs?: string[];
}
declare class TownshipTaskCompletedEventMatcher extends SkillActionEventMatcher<TownshipTaskCompletedEvent> {
    readonly type = "TownshipTaskCompleted";
    /** If present, set task completed must match a member */
    tasks?: Set<TownshipTask>;
    constructor(options: TownshipTaskCompletedEventMatcherOptions, game: Game);
    doesEventMatch(event: TownshipTaskCompletedEvent): boolean;
    _assignNonRaidHandler(handler: Handler<TownshipTaskCompletedEvent>): void;
    _unassignNonRaidHandler(handler: Handler<TownshipTaskCompletedEvent>): void;
}
declare class DungeonCompletedEvent extends GameEvent {
    /** The dungeon that was completed */
    dungeon: Dungeon;
    constructor(
    /** The dungeon that was completed */
    dungeon: Dungeon);
}
declare class AbyssDepthCompletedEvent extends GameEvent {
    /** The depth of The Abyss that was completed */
    depth: AbyssDepth;
    constructor(
    /** The depth of The Abyss that was completed */
    depth: AbyssDepth);
}
declare class StrongholdCompletedEvent extends GameEvent {
    /** The Stronghold that was completed */
    stronghold: Stronghold;
    constructor(
    /** The Stronghold that was completed */
    stronghold: Stronghold);
}
declare class HarvestingActionEvent extends SkillActionEvent {
    /** The source skill for the event */
    skill: Harvesting;
    /** The current vein being harvested */
    action: HarvestingVein;
    constructor(
    /** The source skill for the event */
    skill: Harvesting, 
    /** The current vein being harvested */
    action: HarvestingVein);
}
interface HarvestingActionEventMatcherOptions extends SkillActionEventMatcherOptions {
    type: 'HarvestingAction';
    actionIDs?: string[];
}
declare class HarvestingActionEventMatcher extends SkillActionEventMatcher<HarvestingActionEvent> {
    readonly type = "HarvestingAction";
    /** If present, the HarvestingActionEvent's action must match a member */
    actions?: Set<HarvestingVein>;
    constructor(options: HarvestingActionEventMatcherOptions, game: Game);
    doesEventMatch(event: HarvestingActionEvent): boolean;
    _assignNonRaidHandler(handler: Handler<HarvestingActionEvent>): void;
    _unassignNonRaidHandler(handler: Handler<HarvestingActionEvent>): void;
}
declare class SoulPointConsumptionEvent extends GameEvent {
    /** The amount of points used */
    pointsUsed: number;
    constructor(
    /** The amount of points used */
    pointsUsed: number);
}
interface SoulPointConsumptionEventMatcherOptions {
    type: 'SoulPointConsumption';
    /** Optional. If present the prayer the points were consumed for must have a matching property */
    isUnholy?: boolean;
}
declare class SoulPointConsumptionEventMatcher extends CharacterGameEventMatcher<SoulPointConsumptionEvent> {
    readonly type = "SoulPointConsumption";
    constructor(options: SoulPointConsumptionEventMatcherOptions, game: Game);
    doesEventMatch(event: SoulPointConsumptionEvent): boolean;
    _assignCharacterHandler(handler: Handler<SoulPointConsumptionEvent>, combat: BaseManager): void;
    _unassignCharacterHandler(handler: Handler<SoulPointConsumptionEvent>, combat: BaseManager): void;
}
