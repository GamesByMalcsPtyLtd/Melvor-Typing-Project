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
/** Adds the members of the from set to the addTo set (mutates addTo) */
declare function addSetToSet<T>(addTo: Set<T>, from: Set<T>): void;
declare let updateTooltipsTimer: number;
/** Updates all tooltips enabled by [data-toggle="tooltip"] and [data-toggle="popover"] */
declare function updateTooltips(): void;
declare function getSortableDelayOnTouch(): boolean;
declare function roundToTickInterval(interval: number): number;
declare const joinList: (seperator: string) => (list: string[]) => string;
declare function joinAsList(list: string[]): string;
declare function joinAsOrList(list: string[]): string;
declare function joinAsLineBreakList(list: string[]): string;
declare const joinAsSuperList: (list: string[]) => string;
interface StatDescription {
    text: string;
    isNegative: boolean;
    isDisabled: boolean;
}
/** A function used to format the descriptions of modifiers and effect applicators */
declare type DescriptionFormatter<T> = (description: StatDescription) => T;
declare function getStandardDescTextClass(description: StatDescription, fontWeight: boolean): string;
/** Formats a description, with no HTML syntax. For use in search functionality */
declare const searchDescriptionFormatter: DescriptionFormatter<string>;
/** Formats a description, without any positive or negative colours, but with disabled descriptions wrapped in span elements */
declare const plainDescriptionFormatter: DescriptionFormatter<string>;
/**
 * Gets a description formatter that returns an HTML string for elements of the given type
 * @param tagName The tag-name of the type of element to format to
 * @param className Optional additional className to add to the elements
 * @param fontWeight If the default font-weight classes should be added to the elements
 * @returns
 */
declare const getElementHTMLDescriptionFormatter: <T extends keyof HTMLElementTagNameMap>(tagName: T, className?: string, fontWeight?: boolean) => DescriptionFormatter<string>;
/** Formats a description as HTML with span elements */
declare const spanHTMLDescriptionFormatter: DescriptionFormatter<string>;
/**
 * Returns a description formatter that returns elements of the given type
 * @param tagName The tag-name of the type of element to format to
 * @param className Optional additional className to add to the elements
 * @param fontWeight If the default font-weight classes should be added to the elements
 * @returns
 */
declare const getElementDescriptionFormatter: <T extends keyof HTMLElementTagNameMap>(tagName: T, className?: string, fontWeight?: boolean) => DescriptionFormatter<HTMLElementTagNameMap[T]>;
declare const spanDescriptionFormatter: DescriptionFormatter<HTMLSpanElement>;
declare function pluralS(number: number): "" | "s";
declare function checkMediaQuery(mediaQuery: string): boolean;
declare const addMediaQueryListener: (mediaQuery: string, callbackFn: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void, removeMediaQueryListener: (mediaQuery: string, callbackFn: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
declare function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, options?: ElemCreationOptions): HTMLElementTagNameMap[T];
declare function hideElement(elem: Element): void;
declare function showElement(elem: Element): void;
declare function hideElements(elems: Element[]): void;
declare function showElements(elems: Element[]): void;
declare function createImage(media: string, imageClass: string): HTMLImageElement;
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
    /** Sets the element's innerHTML */
    innerHTML?: string;
};
declare function fireBottomToast(text: string, duration?: number): void;
declare function fireTopToast(text: string, duration?: number): void;
declare function imageNotify(media: string, message: string, messageTheme?: StandardTheme): void;
declare let itemNotifyToProcess: AnyItemQuantity[];
/** If a save is scheduled to happen outside of the auto-save interval */
declare let isItemNotificationScheduled: boolean;
/** Schedules a save to occur after the next game loop */
declare function scheduleItemNotification(): void;
declare function processScheduledItemNotifications(): void;
/** Queues up an item gain notifiaction for the specified item and quantity */
declare function itemNotify(item: AnyItem, quantity: number): void;
/** Fires an item gain notifiaction for the specified item and quantity */
declare function processItemNotify(item: AnyItem, quantity: number): void;
declare let skillXPNotifyTimer: number;
declare let skillXPNotifyToProcess: SkillQuantity[];
/** Queues up an item gain notifiaction for the specified item and quantity */
declare function skillXPNotify(skill: AnySkill, quantity: number): void;
/** Fires an item gain notifiaction for the specified item and quantity */
declare function processSkillXPNotify(skill: AnySkill, quantity: number): void;
declare let abyssalXPNotifyTimer: number;
declare let abyssalXPNotifyToProcess: SkillQuantity[];
/** Queues up an item gain notifiaction for the specified item and quantity */
declare function abyssalXPNotify(skill: AnySkill, quantity: number): void;
/** Fires an item gain notifiaction for the specified item and quantity */
declare function processAbyssalXPNotify(skill: AnySkill, quantity: number): void;
/** Fires a stun notification for thieving, with the damage specified */
declare function stunNotify(damage: number): void;
/** Fires a bank full notification */
declare function bankFullNotify(): void;
/** Fires a skill level up notification */
declare function levelUpNotify(skill: AnySkill): void;
/** Fires a skill abyssal level up notification */
declare function abyssalLevelUpNotify(skill: AnySkill): void;
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
declare function currencyNotify(currency: Currency, amount: number): void;
/** Queues a modal notifying the player of a mastery level up for the specified skill and masteryID */
declare function notifyMasteryLevelUp(action: MasteryAction, newLevel: number): void;
declare function notify99ItemMastery(action: MasteryAction): void;
declare function notifyCompletionBaseGame(): void;
declare function notifyCompletionExpansion(namespace: Namespaces): void;
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
    disableQueueLimit: boolean;
    constructor(maxNotifiactions: number);
    notify(): void;
    add(notification: QueuedNotify): void;
    clear(): void;
    disableMaxQueue(): void;
    enableMaxQueue(): void;
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
    /** Computes the xp required for the next level in the table */
    computeNextLevelXP(level: number): number;
    /** Computes an under-estimate of the level corresponding to an amount of XP */
    estimateXPToLevel(xp: number): number;
    levelToXP(level: number): number;
    /** @deprecated Use levelToXP instead */
    level_to_xp(level: number): number;
    /** XP To level function utilizing estimate method */
    xpToLevel(xp: number): number;
}
/**
 * New abyssal exp class for testing purposes for a different XP scaling
 * Based directly off of the base game experience calculator
 * Level 1 -> 2 starts at the difference in XP between level 99 and 100, and continues up from there
 */
declare class AbyssalExperienceCalculator {
    exp: ExperienceCalculator;
    readonly xpOffset: number;
    readonly levelOffset = 98;
    levelToXP(level: number): number;
    xpToLevel(xp: number): number;
}
/** Old Utility class for computing abyssal experience and levels
 * Leaving this here in case we want to revert back to it
 */
declare class OldAbyssalExperienceCalculator extends ExperienceCalculator {
    estConstA: number;
    estConstB: number;
    equate(level: number): number;
    computeNextLevelXP(level: number): number;
    estimateXPToLevel(xp: number): number;
}
/** Calculator for experience and levels */
declare const exp: ExperienceCalculator;
declare const abyssalExp: AbyssalExperienceCalculator;
declare function printAbyssalXPTable(upToLevel?: number): void;
declare function printXPTable(upToLevel?: number): void;
declare type QueuedNotify = ItemNotify | StunNotify | BankFullNotify | LevelUpNotify | AbyssalLevelUpNotify | PlayerNotify | ItemChargeNotify | MasteryNotify | Mastery99Notify | PreserveNotify | CurrencyNotify | TutorialNotify | SkillXPNotify | AbyssalXPNotify;
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
declare type AbyssalLevelUpNotify = {
    type: 'AbyssalLevelUp';
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
declare type SkillXPNotify = {
    type: 'SkillXP';
    args: Parameters<typeof skillXPNotify>;
};
declare type AbyssalXPNotify = {
    type: 'AbyssalXP';
    args: Parameters<typeof abyssalXPNotify>;
};
declare function lockedSkillAlert(skill: AnySkill, messageTemplate: string): void;
declare function showStunnedNotification(): void;
declare function showSleepNotification(): void;
declare type NameValuePair = {
    name: string;
    value: number;
};
declare function compareNameValuePairs(currentPairs: NameValuePair[], oldPairs: NameValuePair[], onFirstDiff: string): boolean;
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
declare function formatNumber(number: number, decimals?: number): string;
/** Formats a percentage with locale sensitivity. Uses the 0-100 range
 * @example formatPercent(5) // 5%
 * @example formatPercent(34.2,2) // 34.20%
 */
declare function formatPercent(percent: number, digits?: number): string;
/**
 * Formats a positive integer number to an alphabetic coordinate
 * @param int The positive integer to format
 * @example formatIntegerAlphabetic(0) // A
 * @example formatIntegerAlphabetic(25) // Z
 * @example formatIntegerAlphabetic(26) // AA
 */
declare function formatIntegerAlphabetic(int: number): string;
/**
 * Converts an alphabetic coordinate back to its integer value
 * @param alpha The alphabetic coordinate to convert
 * @returns The integer coordinate
 * @example getIntegerFromAlphabetic('A') // 0
 * @example getIntegerFromAlphabetic('Z') // 25
 * @example getIntegerFromAlphabetic('AA') // 26
 */
declare function getIntegerFromAlphabetic(alpha: string): number;
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
declare function formatAsShorthandTimePeriod(timeInMs: number, roundSeconds?: boolean, showMs?: boolean, padding?: boolean): string;
declare function successSpan(content: string): string;
declare function getTemplateElement(templateID: string): HTMLTemplateElement;
declare function getTemplateNode(templateID: string): Node;
declare function getAnyElementFromFragment(fragment: DocumentFragment, elementID: string): HTMLElement;
declare function getElementFromFragment<T extends keyof HTMLElementTagNameMap>(fragment: DocumentFragment, elementID: string, tagName: T): HTMLElementTagNameMap[T];
/** Formats a number to locale sensitive fixed digits */
declare function formatFixed(num: number, digits: number): string;
declare function switchToCategory<T extends HasLevels>(tabs: Map<CategoryLike, RecipeSelectionTabElement<T>>): (categoryToShow: CategoryLike) => void;
/**
 * Creates a promise that resolves after delay
 * @param delay Time to delay in [ms]
 */
declare function delayPromise(delay: number): Promise<void>;
/** Tells the browser to download a text file */
declare function downloadTextFile(fileName: string, fileText: string, fileType?: string): void;
/** Takes the original array, and returns a soft copy without the elements contained in remove */
declare function removeFromArray<T>(original: T[], remove: T[]): T[];
/** Returns a function for use in Array.sort, that will sort an array of objects T, in the order corresponding to their property key */
declare function sortByOrder<T, K extends keyof T>(order: T[K][], key: K): (a: T, b: T) => number;
declare function sortByCurrencyValue(ascending: boolean, a: CurrencyQuantity, b: CurrencyQuantity): number;
declare function logConsole(message: string): void;
/** Utility function for throwing errors related to unregistered objects during save game conversion */
declare const unregisteredMessage: (type: string) => string;
/** Error type for when the construction of a data object fails */
declare class DataConstructionError extends Error {
    inner?: unknown;
    get name(): string;
    constructor(className: string, inner?: unknown, id?: string);
}
/** Error type for when the modification of a data object fails */
declare class DataModificationError extends Error {
    inner?: unknown;
    get name(): string;
    constructor(className: string, inner?: unknown, id?: string);
}
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
interface Weighted {
    weight: number;
}
interface WeightedResult<T> extends Weighted {
    result: T;
}
/**
 * Selects a random element from a weighted array
 * @param array Weighted array elements
 * @param totalWeight Sum of all weights in the array
 * @returns
 */
declare function selectFromWeightedArray<T extends Weighted>(array: T[], totalWeight: number): T;
declare class DropTable {
    totalWeight: number;
    drops: DropTableElement[];
    /** The number of different drops in the table */
    get size(): number;
    get weight(): number;
    get sortedDropsArray(): DropTableElement[];
    constructor(game: Game, data: DropTableData[]);
    registerDrops(game: Game, data: DropTableData[]): void;
    unregisterDrops(data: string[]): void;
    /** Rolls for a drop on the table */
    getDrop(): AnyItemQuantity;
    /** Rolls for a drop on the table and returns raw drop data with quantity */
    getRawDrop(): RawDrop;
    /** Gets the average currency value of a drop in this table */
    getAverageDropValue(): SparseNumericMap<Currency>;
}
interface RawDrop {
    drop: DropTableElement;
    quantity: number;
}
declare type RandomModifierTableElement = {
    weight: number;
    modifier: ModifierValue;
    min: number;
    max: number;
    unique: boolean;
};
declare type RandomModifierTableData = ModifierScopeData & {
    id: string;
    weight: number;
    min: number;
    max: number;
    unique?: boolean;
};
/** Utility class for selecting random modifiers */
declare class RandomModifierTable {
    totalWeight: number;
    drops: RandomModifierTableElement[];
    get size(): number;
    constructor(game: Game, data: RandomModifierTableData[]);
    /** Registers new modifiers that can be rolled from this table */
    registerModifiers(game: Game, data: RandomModifierTableData[]): void;
    /** Gets a single random modifier from this table */
    getModifier(): ModifierValue;
    processRoll(roll: RandomModifierTableElement): ModifierValue;
    getExcludedTable(existing: ModifierValue[]): {
        excludedWeight: number;
        excludedDrops: RandomModifierTableElement[];
    };
    /** Gets a single random modifier from this table, excluding the modifiers flagged as unique contained in existing */
    getModifierExcludingUnique(existing: ModifierValue[]): ModifierValue;
    /** Gets multiple random modifiers from this table, excluding the modifiers flagged as unique contained in existing. More efficient than calling getModifierExludingUnique multiple times due to excluded table caching. */
    getModifiersExcludingUnique(existing: ModifierValue[], count: number): ModifierValue[];
}
/** Wrapper for sparse numeric maps */
declare class SparseNumericMap<T> {
    data: Map<T, number>;
    get size(): number;
    get isEmpty(): boolean;
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
    keys(): IterableIterator<T>;
}
/**
 * Escapes the characters in a string such that they are considered as their literal values in a RegExp
 * Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
declare function escapeRegExp(string: string): string;
declare function generateComponentClass(tagName: string): string;
declare function getRequirementTextClass(met: boolean): "text-success" | "text-danger";
declare function createUnlockElement(costNodes: (string | Node)[], met: boolean): HTMLDivElement;
declare function printUnlockRequirements(requirements: AnyRequirement[]): HTMLDivElement[];
declare function printUnlockAllRequirements(requirements: AnyRequirement[]): HTMLDivElement[];
/** Displays unlock requirements that are not met. Hides others.*/
declare function printUnlockRequirementsAsHTML(requirements: AnyRequirement[]): string[];
/** Displays all unlock requirements instead of hiding requirements that are met */
declare function printAllUnlockRequirementsAsHTML(requirements: AnyRequirement[]): string[];
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
/** Adds a blanket listener to all on-combat skilling actions to perform specified function */
declare function addAllNonCombatSkillActionEventListeners(game: Game, actionFunction: () => void): void;
/** Removes the blanket listener to all on-combat skilling actions for the specified function */
declare function removeAllNonCombatSkillActionEventListeners(game: Game, actionFunction: () => void): void;
declare function reverseCombatTriangle(triangle: CombatTriangle): CombatTriangle;
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
declare function generateMonsterStatsCSV(): void;
declare function generateEquipmentStatsCSV(): void;
declare function generateLangModifierCustomDescriptionForItem(item: EquipmentItem): void;
