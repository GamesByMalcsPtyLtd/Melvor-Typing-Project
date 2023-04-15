/** Rolls a percentage chance in the range [0,100] */
declare function rollPercentage(chance: number): boolean;
/** Rolls an interger value between [minValue,maxValue] */
declare function rollInteger(minValue: number, maxValue: number): number;
declare function rollForOffItem(baseChance: number): boolean;
declare function generateGaussianNumber($mean: number, $stdDev: number): number;
declare function getMean(numActions: number, probability: number): number;
declare function getStdDev(numActions: number, probability: number): number;
/** Modifies baseStat by modifier
 *   @param type 0 applies a percentage bonus, 1 applies an additive bonus, 2: applies a negative additive bonus, 3: multiplies base number by percentage, 4: same as 3 without flooring
 */
declare function applyModifier(baseStat: number, modifier: number, type?: 0 | 1 | 2 | 3 | 4): number;
declare function binomial_distribution(n: number, p: number, epsilon?: number): number[];
declare function sample_from_binomial(numberTrials: number, chance: number): number;
/**
 * Returns the linear funciton m*x+b
 * @param m The slope of the function
 * @param b The y-intercept of the function
 * @param x The x-value to evaluate the function at
 * @returns m*x+b
 */
declare function linearFunction(m: number, b: number, x: number): number;
/**
 * Returns the linear function m*x+b, capped by cap
 * @param m The slope of the function
 * @param b The y-intercept of the function
 * @param cap The value to cap y at
 * @param x The x-value to evaluate the function at
 * @returns m*x+b, capped by cap
 */
declare function cappedLinearFunction(m: number, b: number, cap: number, x: number): number;
declare function deleteKeysFromObject(object: any): void;
/** Gets a random element from an array */
declare function getRandomArrayElement<T>(array: T[]): T;
/** Gets a random number of elements from an array (exclusive) */
declare function getExclusiveRandomArrayElements<T>(array: T[], numElements: number): Set<T>;
declare const arrSum: (arr: number[]) => number;
declare function getAverage(elements?: number[]): number;
/** Clamps a value between min and max */
declare function clampValue(value: number, min: number, max: number): number;
/** Sets the first character of a string to uppercase */
declare function setToUppercase(string: string): string;
/** Sets the first character of a string to lowercase */
declare function setToLowercase(string: string): string;
/** Uses Regex to replace all in a string. find is regex string. */
declare function replaceAll(str: string, find: string, replace: string): string;
/** Returns true if any member of setA is present in setB */
declare function isAnySetMemberInSet<T>(setA: Set<T>, setB: Set<T>): boolean;
declare let updateTooltipsTimer: number;
/** Updates all tooltips enabled by [data-toggle="tooltip"] and [data-toggle="popover"] */
declare function updateTooltips(): void;
declare function getSortableDelayOnTouch(): boolean;
declare function roundToTickInterval(interval: number): number;
declare const joinList: (seperator: string) => (list: string[]) => string;
declare function joinAsList(list: string[]): string;
declare function joinAsLineBreakList(list: string[]): string;
declare const joinAsSuperList: (list: string[]) => string;
declare function pluralS(number: number): "" | "s";
declare function checkMediaQuery(mediaQuery: string): boolean;
declare function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, options?: ElemCreationOptions): HTMLElementTagNameMap[T];
declare function hideElement(elem: HTMLElement): void;
declare function showElement(elem: HTMLElement): void;
/** Toggles the color of an elements text between success and failure */
declare function toggleDangerSuccess(elem: HTMLElement, success: boolean): void;
declare function removeElementID(elem: HTMLElement): void;
declare type ElemCreationOptions = {
    /** Sets the elements className */
    className?: string;
    /** Sets the element classlist, will be added in addition to className if also provided */
    classList?: string[];
    /** Appends the child to a parent node */
    parent?: HTMLElement;
    /** Appends the children to the element */
    children?: (string | Node)[];
    /** Sets the element's text */
    text?: string;
    /** List of attributes to set on the element */
    attributes?: [string, string][];
    /** Element ID */
    id?: string;
};
/** Returns a reducer for computing the total number of unlocked items in a NamespaceRegistry */
declare const levelUnlockSum: (skill: AnySkill) => (previous: number, current: BasicSkillRecipe) => number;
declare function fireBottomToast(text: string, duration?: number): void;
declare function fireTopToast(text: string, duration?: number): void;
declare function imageNotify(media: string, message: string, messageTheme?: StandardTheme): void;
declare let itemNotifyTimer: number;
declare let itemNotifyToProcess: AnyItemQuantity[];
/** Queues up an item gain notifiaction for the specified item and quantity */
declare function itemNotify(item: AnyItem, quantity: number): void;
/** Fires an item gain notifiaction for the specified item and quantity */
declare function processItemNotify(item: AnyItem, quantity: number): void;
/** Fires a stun notification for thieving, with the damage specified */
declare function stunNotify(damage: number): void;
/** Fires a bank full notification */
declare function bankFullNotify(): void;
/** Fires a skill level up notification */
declare function levelUpNotify(skill: AnySkill): void;
/** Unused notification function */
declare function level99Notify(skill: AnySkill): void;
/** Fires a resource preservation notification */
declare function notifyPreserve(skill: AnySkill): void;
/** Fires a generic notification, with the image of the skill specified */
declare function notifyPlayer(skill: AnySkill | -1, message: string, messageTheme?: StandardTheme, quantity?: number): void;
/** Fires a notification that skill gloves have run out of charges */
declare function notifyItemCharges(item: EquipmentItem): void;
/** Fires a notification that a tutorial task was completed */
declare function tutorialNotify(): void;
declare function currencyNotify(type: string, amount: number): void;
/** Queues a modal notifying the player of a mastery level up for the specified skill and masteryID */
declare function notifyMasteryLevelUp(action: MasteryAction, newLevel: number): void;
declare function notify99ItemMastery(action: MasteryAction): void;
declare function notifyCompletionYay(): void;
declare function notifyCompletionTotH(): void;
declare function notifyCompletionEverything(): void;
declare let pyroInterval: number;
declare let forcePyro: boolean;
declare function showFireworks(force?: boolean): void;
declare function removePyro(): void;
declare function startPyroInterval(): void;
/** Helps queue game notifications */
declare class NotificationQueue {
    maxNotifiactions: number;
    queue: QueuedNotify[];
    constructor(maxNotifiactions: number);
    notify(): void;
    add(notification: QueuedNotify): void;
    clear(): void;
}
/** Utility class for computing experience and levels */
declare class ExperienceCalculator {
    /** Table of level to xp required */
    table: number[];
    xpSum: number;
    /** Constant used to estimate level */
    estConstA: number;
    /** Constant used to estimate level */
    estConstB: number;
    constructor();
    equate(level: number): number;
    level_to_xp(level: number): number;
    /** XP to level function, utilizing loop. Returns level + 1 */
    xp_to_level(xp: number, level?: number): number;
    /** XP To level function utilizing estimate method */
    xpToLevel(xp: number): number;
}
/** Calculator for experience and levels */
declare const exp: ExperienceCalculator;
declare type QueuedNotify = ItemNotify | StunNotify | BankFullNotify | LevelUpNotify | PlayerNotify | ItemChargeNotify | MasteryNotify | Mastery99Notify | PreserveNotify | CurrencyNotify | TutorialNotify;
declare type ItemNotify = {
    type: 'Item';
    args: Parameters<typeof itemNotify>;
};
declare type StunNotify = {
    type: 'Stun';
    args: Parameters<typeof stunNotify>;
};
declare type BankFullNotify = {
    type: 'BankFull';
    args: Parameters<typeof bankFullNotify>;
};
declare type LevelUpNotify = {
    type: 'LevelUp';
    args: Parameters<typeof levelUpNotify>;
};
declare type PlayerNotify = {
    type: 'Player';
    args: Parameters<typeof notifyPlayer>;
};
declare type ItemChargeNotify = {
    type: 'ItemCharges';
    args: Parameters<typeof notifyItemCharges>;
};
declare type MasteryNotify = {
    type: 'Mastery';
    args: Parameters<typeof notifyMasteryLevelUp>;
};
declare type Mastery99Notify = {
    type: 'Mastery99';
    args: Parameters<typeof notify99ItemMastery>;
};
declare type PreserveNotify = {
    type: 'Preserve';
    args: Parameters<typeof notifyPreserve>;
};
declare type CurrencyNotify = {
    type: 'Currency';
    args: Parameters<typeof currencyNotify>;
};
declare type TutorialNotify = {
    type: 'TutorialTask';
};
declare function getItemBaseStatsBreakdown(item: EquipmentItem): string;
declare function lockedSkillAlert(skill: AnySkill, messageTemplate: string): void;
declare function showStunnedNotification(): void;
declare function showSleepNotification(): void;
declare function cdnMedia(media: string): string;
declare function compareNameValuePairs(currentPairs: NameValuePair[], oldPairs: NameValuePair[]): void;
declare function convertNameValuePairToMap(pairs: NameValuePair[]): Map<string, number>;
/**
 * Replaces templates in a string with data
 * @example templateString("Level ${value}",{value: "1"})
 * @param string A string with template replacements in it e.g. ${example}. Replacements may only contain alpha-numeric characters
 * @param templateData An object containing replacements strings e.g. {example: "true text"}
 */
declare function templateString(string: string, templateData: StringDictionary<string>): string;
/**
 * Shortcut for templating language strings
 * @example templateLangString("MENU_TEXT","PERCEPTION",{value: "100"})
 * @param category The category for the language string to template
 * @param identifier The identifier for the language string to template
 * @param templateData An object containing replacements strings e.g. {example: "true text"}
 */
declare function templateLangString(identifier: string, templateData: StringDictionary<string>): string;
declare function milliToSeconds(ms: number): number;
declare function multiplyByNumberMultiplier(value: number): number;
declare function divideByNumberMultiplier(value: number): number;
declare function animateProgress(div: string, interval: number, stayFull?: boolean): void;
declare function resetProgressAnimation(div: string): void;
/** Gets the dom nodes for `Unlocked at ${image} level ${level}' */
declare function getUnlockedAtNodes(skill: AnySkill, level: number): (HTMLImageElement | Text)[];
declare function templateLangStringWithNodes(id: string | number, nodeData: StringDictionary<Node>, textData: StringDictionary<string>, clone?: boolean): (Node | string)[];
declare function templateStringWithNodes(string: string, nodeData: StringDictionary<Node>, textData: StringDictionary<string>, clone?: boolean): (string | Node)[];
/** Formats a number in it's ordinal form
 *  @example formatAsOrdinal(1) // '1st'
 *  @example formatAsOrdinal(2) // '2nd'
 */
declare const formatAsOrdinal: (value: number) => string;
/** Formats a number with a locale specific thousands seperator */
declare function numberWithCommas(number: number | string, ignoreSetting?: boolean): string;
/** Formats a number with a postfix */
declare function formatNumber(number: number): string;
/** Formats a percentage with locale sensitivity. Uses the 0-100 range
 * @example formatPercent(5) // 5%
 * @example formatPercent(34.2,2) // 34.20%
 */
declare function formatPercent(percent: number, digits?: number): string;
declare function getMSAsTime(time: number): {
    years: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
/** Locally formats a time period in ms
 * @example formatAsTimePeriod(1000) // '1s'
 */
declare function formatAsTimePeriod(timeInMs: number): string;
/** Locally formats a time period in ms using shorthand terminology
 * @example formatAsTimePeriod(1000) // '1s'
 */
declare function formatAsShorthandTimePeriod(timeInMs: number, roundSeconds?: boolean): string;
declare function successSpan(content: string): string;
declare function getTemplateElement(templateID: string): HTMLTemplateElement;
declare function getTemplateNode(templateID: string): Node;
declare function getAnyElementFromFragment(fragment: DocumentFragment, elementID: string): HTMLElement;
declare function getElementFromFragment<T extends keyof HTMLElementTagNameMap>(fragment: DocumentFragment, elementID: string, tagName: T): HTMLElementTagNameMap[T];
/** Formats a number to locale sensitive fixed digits */
declare function formatFixed(num: number, digits: number): string;
declare function switchToCategory<T extends HasLevel>(tabs: Map<CategoryLike, RecipeSelectionTab<T>>): (categoryToShow: CategoryLike) => void;
/** Tells the browser to download a text file */
declare function downloadTextFile(fileName: string, fileText: string, fileType?: string): void;
/** Takes the original array, and returns a soft copy without the elements contained in remove */
declare function removeFromArray<T>(original: T[], remove: T[]): T[];
declare function mapOrder<T, K extends keyof T>(array: T[], order: T[K][], key: K): T[];
/** Returns a function for use in Array.sort, that will sort an array of objects T, in the order corresponding to their property key */
declare function sortByOrder<T, K extends keyof T>(order: T[K][], key: K): (a: T, b: T) => number;
declare function logConsole(message: string): void;
/** Utility function for throwing errors related to unregistered objects during save game conversion */
declare const unregisteredMessage: (type: string) => string;
/** Returns an error message for failing to construct an object that requires registered data. */
declare class UnregisteredConstructionError extends Error {
    constructor(object: Object, unregisteredName: string, id: string);
}
declare class UnregisteredDataModError extends Error {
    constructor(unregisteredName: string, id: string);
}
declare class UnregisteredApplyDataModError extends Error {
    constructor(objectBeingModded: NamespacedObject, unregisteredName: string, unregisteredID: string);
}
declare const progressBarAttributes: [string, string][];
declare type DropTableElement = {
    item: AnyItem;
    minQuantity: number;
    maxQuantity: number;
    weight: number;
};
declare class DropTable {
    totalWeight: number;
    drops: DropTableElement[];
    /** The number of different drops in the table */
    get size(): number;
    get weight(): number;
    get sortedDropsArray(): DropTableElement[];
    /** Average GP sale value from recieving a drop from the table */
    get averageDropValue(): number;
    constructor(game: Game, data: DropTableData[]);
    registerDrops(game: Game, data: DropTableData[]): void;
    unregisterDrops(data: string[]): void;
    /** Rolls for a drop on the table */
    getDrop(): AnyItemQuantity;
}
/** Wrapper for sparse numeric maps */
declare class SparseNumericMap<T> {
    data: Map<T, number>;
    get size(): number;
    has(key: T): boolean;
    get(key: T): number;
    set(key: T, value: number): void;
    add(key: T, amount: number): void;
    inc(key: T): void;
    sub(key: T, amount: number): void;
    dec(key: T): void;
    mult(key: T, multiplier: number): void;
    div(key: T, divisor: number): void;
    getSum(): number;
    getSumOfKeys(keys: T[]): number;
    clear(): void;
    forEach(callbackfn: (value: number, key: T) => void): void;
}
/**
 * Escapes the characters in a string such that they are considered as their literal values in a RegExp
 * Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
declare function escapeRegExp(string: string): string;
declare function generateComponentClass(templateID: string, tagName: string, className: string): string;
declare function generateModifierDataSchema(): string;
declare function getRequirementTextClass(met: boolean): "text-success" | "text-danger";
declare function createUnlockElement(costNodes: (string | Node)[], met: boolean): HTMLDivElement;
declare function printUnlockRequirements(requirements: AnyRequirement[]): HTMLDivElement[];
declare function printUnlockRequirementsAsHTML(requirements: AnyRequirement[]): string[];
declare function isRequirementMet(requirements: AnyRequirement[]): boolean;
/**
 * Create an immutable clone of an array or object
 * @param  {*} obj The array or object to copy
 * @return {*}     The clone of the array or object
 */
declare function createCopyOfObject(obj: any): any;
declare function formatAsSHTimePeriod(timeInMs: number): string;
declare function getMAsTime(time: number): {
    years: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
declare type ScheduledPushNotifications = ScheduledPushNotificationData[];
interface ScheduledPushNotificationData {
    id: string;
    startDate: number;
    endDate: number;
    notificationType: PushNotificationType;
    platform: string;
}
interface OneSignalInfo {
    oneSignalUserId?: string;
    oneSignalPushToken?: string;
    oneSignalSubscribed?: boolean;
    oneSignalRequiresUserPrivacyConsent?: boolean;
    platform?: string;
    appId?: string;
    appVersion?: string;
    distribution?: string;
    hardware?: string;
    installationId?: string;
    language?: string;
    model?: string;
    os?: string;
    osVersion?: string;
    timeZone?: string;
}
declare enum PushNotificationType {
    Unique = 0,
    Other = 1
}
interface SteamPurchaseResult {
    isOwned: boolean;
}
declare type AgilityBlueprintData = {
    name: string;
    obstacles: Map<number, AgilityObstacle>;
    pillar?: AgilityPillar;
    elitePillar?: AgilityPillar;
};
declare type AgilityBlueprints = Map<number, AgilityBlueprintData>;
