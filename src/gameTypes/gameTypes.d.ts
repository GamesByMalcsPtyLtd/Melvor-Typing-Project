declare function CompileErrorReport(error: PlayFabModule.IPlayFabError): string;
declare type EquipSetID = 0 | 1 | 2 | 3;
declare type EquippedFoodID = 0 | 1 | 2 | 3;
declare type HerbloreTier = 0 | 1 | 2 | 3;
declare type StandardTheme = 'primary'|'secondary'|'success'|'info'|'warning'|'danger'|'light'|'dark';
/** Categories of agility obstacles */
declare type ObstacleCategories = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
/** Generic Interface for storing itemID quantity pairs */
interface OldItemQuantity {
    id: number;
    qty: number;
}
interface BankDefaultItem {
    itemID: number;
    tab: number;
}
interface ItemSearch {
  item: AnyItem;
  name: string;
  category: string;
  description?: string;
  type: string;
  slot?:string;
  namespace:string;
  namespaceName:string;
}
interface BankSearch extends ItemSearch {
    qty: number;
    tab: number;
}
interface OldEquipmentSet {
    equipment: number[];
    ammo: number;
    summonAmmo: [number, number];
}
interface OldItemQuantity2 {
    itemID: number;
    qty: number;
}
interface OldFarmingPatch {
    seedID: number;
    compost: number;
    timePlanted: number;
    setInterval: number;
    hasGrown: boolean;
    unlocked: boolean;
    gloop: boolean;
}
interface OldFarmingArea {
    id: number;
    patches: OldFarmingPatch[];
}
interface OldHerbloreBonus {
    itemID: number;
    bonus: [null | number, null | number];
    charges: number;
}
declare type OldHerbloreBonuses = NumberDictionary<OldHerbloreBonus>;
declare type OldMasteryArray = {
    mastery: number;
    masteryXP: number;
}[];
interface OldRockData {
    maxHP: number;
    damage: number;
    depleted: boolean;
    respawnTimer: null | number;
}
interface OldGloveChargeTracker {
  isActive: boolean;
  remainingActions: number;
}
interface SaveGame {
    firstTime: number;
    username: string;
    nameChanges: number;
    gp: number;
    currentBankUpgrade: number;
    skillXP: number[];
    /** Redundant, can be reproduced on load */
    skillLevel: number[];
    /** Redundant, can be reproduced on load */
    nextLevelProgress: number[];
    treeMasteryData: OldMasteryArray;
    currentAxe: number;
    treeCutLimit: number;
    /** Contains redundant data, can be reduced in size */
    bank: OldBankItem[];
    bankMax: number;
    ignoreBankFull: boolean;
    /** Contains redundant data, can be reduced in size */
    statsGeneral: OldGameStat[];
    /** Contains redundant data, can be reduced in size */
    statsWoodcutting: OldGameStat[];
    logsMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    statsFiremaking: OldGameStat[];
    fishMastery: OldMasteryArray;
    currentRod: number;
    /** Contains redundant data, can be reduced in size */
    statsFishing: OldGameStat[];
    cookingMastery: OldMasteryArray;
    upgradedToRange: boolean;
    /** Contains redundant data, can be reduced in size */
    statsCooking: OldGameStat[];
    defaultPageOnLoad: number;
    miningOreMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    statsMining: OldGameStat[];
    currentPickaxe: number;
    /** Contains redundant data, can be reduced in size */
    statsSmithing: OldGameStat[];
    levelUpScreen: 0|1;
    gameUpdateNotification: string;
    /** Redundant, can be reproduced on load */
    equippedItems: number[];
    attackStyle: number;
    /** Contains redundant data, can be reduced in size */
    combatData: MinCombatData;
    currentCombatFood: EquippedFoodID;
    /** Can be reduced in size by changing to array */
    equippedFood: {
        itemID: number;
        qty: number;
    }[];
    smithingMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    statsCombat: OldGameStat[];
    continueThievingOnStun: boolean;
    thievingMastery: OldMasteryArray;
    farmingMastery: OldMasteryArray;
    showItemNotify: number;
    /** Contains redundant data, can be reduced in size */
    glovesTracker: OldGloveChargeTracker[];
    currentCookingFire: number;
    /** Contains redundant data, can be reduced in size */
    rockData: OldRockData[];
    fletchingMastery: OldMasteryArray;
    craftingMastery: OldMasteryArray;
    /** Redundant, can be reproduced on load*/
    ammo: number;
    myBankVersion: number;
    /** Contains redundant data, can be reduced in size */
    statsThieving: OldGameStat[];
    /** Contains redundant data, can be reduced in size */
    statsFarming: OldGameStat[];
    /** Contains redundant data, can be reduced in size */
    statsFletching: OldGameStat[];
    /** Contains redundant data, can be reduced in size */
    statsCrafting: OldGameStat[];
    autoRestartDungeon: boolean;
    autoSaveCloud: boolean;
    selectedSpell: number;
    runecraftingMastery: OldMasteryArray;
    darkMode: boolean;
    buyQty: number;
    itemLog: boolean[];
    dungeonCompleteCount: number[];
    sellQty: number;
    /** Contains redundant data, can be reduced in size */
    statsRunecrafting: OldGameStat[];
    showGPNotify: boolean;
    enableAccessibility: boolean;
    /** Old save variable that can be deleted */
    showSkillNav: boolean;
    accountGameVersion: number;
    prayerPoints: number;
    slayerCoins: number;
    /** Can be serialized to reduce size */
    slayerTask: OldSlayerTask[];
    showEnemySkillLevels: boolean;
    monsterStats: MonsterStat[];
    itemStats: ItemStat[];
    confirmationOnClose: boolean;
    herbloreMastery: OldMasteryArray;
    /** Contains redundant data, can be reduced in size */
    newFarmingAreas: OldFarmingArea[];
    equipmentSets: OldMasteryArray;
    selectedEquipmentSet: EquipSetID;
    currentAutoEat: number;
    equipmentSetsPurchased: boolean[];
    /** Contains redundant data, can be reduced in size */
    herbloreBonuses: NumberDictionary<OldHerbloreBonus>;
    autoPotion: boolean;
    autoUseSpecialAttack: boolean;
    showHPNotify: boolean;
    /** Contains redundant data, can be reduced in size */
    statsHerblore: OldGameStat[];
    offline: OldOffline;
    selectedAttackStyle: number[];
    showCommas: boolean;
    showVirtualLevels: boolean;
    formatNumberSetting: number;
    /** Can be converted to array to reduce size */
    tutorialTips: {
      activated: boolean;
    }[];
    saveTimestamp: number;
    secretAreaUnlocked: boolean;
    equipmentSwapPurchased: boolean;
    godUpgrade: boolean[];
    lockedItems: number[];
    showSaleNotifications: boolean;
    showShopNotifications: boolean;
    pauseOfflineActions: boolean;
    showCombatMinibar: boolean;
    showCombatMinibarCombat: boolean;
    activeAurora: number | null;
    currentGamemode: number;
    petUnlocked: boolean[];
    showSkillMinibar: boolean;
    saveStateBeforeRaid: [] | [number, EquipSetID, EquippedFoodID];
    golbinRaidHistory: OldRaidHistory[];
    golbinRaidStats: number[];
    raidCoins: number;
    disableAds: boolean;
    /** Can be serialized to reduce size */
    SETTINGS: OldSettingsData;
    /** Can be serialized to reduce size */
    MASTERY: OldMastery;
    useCombinationRunes: boolean;
    firstTimeLoad: boolean;
    slayerTaskCompletion: number[];
    autoSlayerUnlocked: boolean;
    autoSlayer: boolean;
    /** Redundant, can be reproduced on load */
    itemsAlreadyFound: number[]
    xmasPresents: number;
    /** Can be massively reduced in size */
    shopItemsPurchased: Map<string, OldPurchasedShopItem>;
    titleNewsID: string[];
    chosenAgilityObstacles: number[];
    skillsUnlocked: boolean[];
    agilityObstacleBuildCount: number[];
    agilityPassivePillarActive: number;
    scheduledPushNotifications: StringDictionary<string>;
    randomModifiers: {
        equipment: NumberDictionary<unknown>;
        player: NumberDictionary<unknown>;
    };
    summoningData: OldPlayerSummoningData;
    cookingStockpiles?: OldItemQuantity2[];
    activeAstrologyModifiers: NumberDictionary<unknown>[];
    tutorialProgress: number;
    tutorialComplete: boolean;
    completedTasks: number[];
    activeTasks: NumberDictionary<OldActiveTutorialTask>;
    plantAllSelected: NumberDictionary<number>;
}
interface OldGameStat {
    stat: string;
    id: string;
    count: number;
}
interface PlayFabEventBody {
    [key: string]: any;
}
interface StringDictionary<T> {
    [index: string]: T;
}
interface NumberDictionary<T> {
    [index: number]: T;
}
interface SkillObject<T> {
    Woodcutting: T;
    Fishing: T;
    Firemaking: T;
    Cooking: T;
    Mining: T;
    Smithing: T;
    Attack: T;
    Strength: T;
    Defence: T;
    Hitpoints: T;
    Thieving: T;
    Farming: T;
    Ranged: T;
    Fletching: T;
    Crafting: T;
    Runecrafting: T;
    Magic: T;
    Prayer: T;
    Slayer: T;
    Herblore: T;
    Agility: T;
    Summoning: T;
    Astrology: T;
    Township: T;
}
declare type OldPlayerSummoningData = {
    MarksDiscovered: NumberDictionary<number>;
    defaultRecipe?: number[];
};
declare type CombatLevelKey = 'Hitpoints'|'Attack'|'Strength'|'Defence'|'Ranged'|'Magic'|'Prayer'|'Corruption';
declare type CombatLevels = Record<CombatLevelKey, number>
declare type MapToElement<Type> = {
    [Property in keyof Type]: HTMLElement;
};
declare type TippyTooltip = import("tippy.js").Instance<import("tippy.js").Props>;
declare type TippyProps = import("tippy.js").Props;
declare type OldPurchasedShopItem = {
    category: OldShopCategory;
    id: number;
    quantity: number;
};
declare type SweetAlertOptions = import("sweetalert2").SweetAlertOptions<*>;
declare type SweetAlertCustomClass = import("sweetalert2").SweetAlertCustomClass;
declare type EventType = import("mitt").EventType;
declare type Handler<T = unknown> = import("mitt").Handler<T>;
declare type WildcardHandler<T = Record<string, unknown>> = import("mitt").WildcardHandler<T>;
declare type Emitter<Events extends Record<EventType, unknown>> = import("mitt").Emitter<Events>;
declare type EventHandlerMap<Events extends Record<EventType, unknown>> = import("mitt").EventHandlerMap<Events>;

interface OfflineBase {
    timestamp: number;
}
/** Used for woodcutting */
interface OfflineWoodcut extends OfflineBase {
    skill: OldSkillsIDs.Woodcutting;
    action: number[];
}
/** Used for woodcutting */
interface OfflineMagic extends OfflineBase {
    skill: OldSkillsIDs.Magic;
    action: [number, [number, number, number]];
}
interface OfflineCooking extends OfflineBase {
    skill: OldSkillsIDs.Cooking;
    action: {
        active: number;
        passive: number[];
    };
}
interface OfflineNoAction extends OfflineBase {
    skill: OldSkillsIDs,
    action: null;
}
interface OfflineUnset extends OfflineBase {
    skill: null;
    action: null;
    timestamp: null;
}
/** Used for all other skills */
interface OfflineSkill extends OfflineBase {
    skill: OldSkillsIDs.Firemaking | OldSkillsIDs.Cooking | OldSkillsIDs.Mining | OldSkillsIDs.Smithing | OldSkillsIDs.Thieving | OldSkillsIDs.Crafting | OldSkillsIDs.Runecrafting | OldSkillsIDs.Herblore | OldSkillsIDs.Agility | OldSkillsIDs.Summoning | OldSkillsIDs.Astrology;
    action: number;
}
/** Used for fishing, fletching, alt magic */
interface OfflineTuple extends OfflineBase {
    skill: OldSkillsIDs.Fishing | OldSkillsIDs.Fletching;
    action: [number, number];
}
declare type OldOffline = OfflineWoodcut | OfflineTuple | OfflineUnset | OfflineSkill | OfflineMagic | OfflineCooking | OfflineNoAction;

type LanguageData = Record<string,string>;
type SupportedLanguage = 'en'|'zh-CN'|'zh-TW'|'fr'|'de'|'it'|'ko'|'ja'|'pt'|'pt-br'|'es'|'ru'|'tr'|'lemon'|'carrot';
declare type OldCategoryData<T> = {
  id: T;
  name: string;
  media: string;
}
declare interface OldBankItem {
  id: number;
  qty: number;
  tab: number;
  locked: boolean;
}

/** Utility Type. Sets the specified keys to be required in a type. */
type PickRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & Omit<T, K>;

/** Utility Type. Sets the specified keys to be optional in a type */
type PickPartial<T, K extends keyof T> = {
  [P in K]?: T[P];
} & Omit<T, K>;

/** 
 * A convenience interface for the Custom Elements API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
 */
interface CustomElement {
  /** Called each time this element is added to the document. Custom element setup should be performed in this method as much as possible */
  connectedCallback?(): void;
  /** Called each time this element is removed from the document. */
  disconnectedCallback?(): void;
  /** Called each time this element is moved to a new document */
  adoptedCallback?(): void;
  /**
   * Called when an attribute whose name is within the observedAttributes property is added, modified, removed or replaced
   * @param name The name of the attribute which changed
   * @param oldValue The attributes old value
   * @param newValue The attributes new value
   */
  attributeChangedCallback?(name: string, oldValue: string|null, newValue: string|null): void;
}