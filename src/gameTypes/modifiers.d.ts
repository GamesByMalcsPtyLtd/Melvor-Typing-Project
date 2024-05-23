declare type TrueFlags<T> = {
    [Property in keyof T]: true;
};
declare type ToIDData<T> = {
    [Property in keyof T as `${string & Property}ID`]: string;
};
declare type StringProps<T> = {
    [Property in keyof T]: string;
};
declare type NumberProps<T> = {
    [Property in keyof T]: number;
};
interface NamedObject extends NamespacedObject {
    name: string;
}
interface IModifierScope {
    skill?: AnySkill;
    damageType?: DamageType;
    realm?: Realm;
    currency?: Currency;
    category?: NamedObject;
    action?: NamedObject;
    subcategory?: NamedObject;
    item?: Item;
    effectGroup?: CombatEffectGroup;
}
declare type ModifierScopeData = ToIDData<IModifierScope>;
declare enum ScopeSourceType {
    Category = "Category",
    Action = "Action",
    Subcategory = "Subcategory"
}
/** An object that provides actions and categories for modifier scopes */
interface IModifierScopeSource {
    name: string;
    /** Gets a registry corresponding to the given source type */
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    /** Gets the object data from a package corresponding to the given source type */
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
}
declare class AttackSpellScopeSource implements IModifierScopeSource {
    game: Game;
    get name(): string;
    constructor(game: Game);
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
}
declare class ModifierScope implements IModifierScope {
    skill?: AnySkill;
    damageType?: DamageType;
    realm?: Realm;
    currency?: Currency;
    category?: NamedObject;
    action?: NamedObject;
    subcategory?: NamedObject;
    item?: Item;
    effectGroup?: CombatEffectGroup;
    constructor(scope?: IModifierScope);
    static forEachTemplateValue(scope: IModifierScope, callbackFn: (key: string, value: string) => void): void;
    static addTemplateData(scope: IModifierScope, templateData: Record<string, string>): void;
    static addEffectTemplateData(scope: IModifierScope, templateData: Record<string, string>, prefix: string, postfix: string): void;
    static addDescriptionTemplateData(scope: IModifierScope, templateData: Record<string, string> | undefined, prefix: string, postfix: string): Record<string, string>;
    static getScopefromData(data: ModifierScopeData, game: Game, scopeSource?: IModifierScopeSource): IModifierScope;
    /** Gets an object from a scope source of the given type */
    static getObjectFromSourceSafe(source: IModifierScopeSource, type: ScopeSourceType, id: string): NamedObject;
    /** Attempts to get an object from a scope source of the given type, returning undefined if it does note exist */
    static getObjectFromSource(source: IModifierScopeSource, type: ScopeSourceType, id: string): NamedObject | undefined;
    /**
     * Copies the modifier scope from one object to another
     * @param from The modifier scope to copy from
     * @param to The target object to apply the scope to
     */
    static copyScope(from: IModifierScope, to: IModifierScope): void;
    /** Returns how specific a given scope is */
    static getSpecificity(scope?: ModifierQueryParams): number;
    static getScopeKeyFromData(data: ModifierScopeData): number;
    static readonly SCOPE_BIT_FIELD: Readonly<Required<NumberProps<IModifierScope>>>;
}
declare type ModifierAliasData = ModifierScopeData & {
    key: string;
};
declare class ModifierAlias extends ModifierScope {
    key: string;
    constructor(data: ModifierAliasData, game: Game, scopeSource?: IModifierScopeSource);
}
declare type ModifierValueData = ModifierScopeData & {
    value: number;
};
declare type ModifierValuesArrayData = (ModifierValueData & {
    key: string;
})[];
declare type ModifierValuesRecordData = Record<string, ModifierValueData[] | number>;
declare type ModifierValuesModificationData = {
    add?: ModifierValuesRecordData;
    remove?: string[];
};
interface IModifierValue extends IModifierScope {
    modifier: Modifier;
    value: number;
}
declare class ModifierValue extends ModifierScope implements IModifierValue {
    modifier: Modifier;
    value: number;
    get isNegative(): boolean;
    constructor(modifier: Modifier, value: number, scope?: IModifierScope);
    toComparisonKey(): string;
    validateScope(): boolean;
    validateSign(): void;
    clone(): ModifierValue;
    getDescription(negMult?: number, posMult?: number, precision?: number): {
        description: string;
        isNegative: boolean;
    };
    print(negMult?: number, posMult?: number, precision?: number): [string, string];
    printEnemy(negMult?: number, posMult?: number, precision?: number, showPrefix?: boolean): [string, string];
    getTemplatedDescription(prefix: string, postfix: string): string;
    getTemplateData(includeSign: boolean, negMult?: number, posMult?: number, precision?: number): Record<string, string>;
    addEffectTemplateData(templateData: Record<string, string>, prefix: string, postfix: string): void;
    addDescriptionTemplateData(templateData: Record<string, string> | undefined, includeSign: boolean, prefix: string, postfix: string): Record<string, string>;
    static readonly posTextClass = "text-success";
    static readonly negTextClass = "font-w700 text-danger";
    static readonly neutralTextClass = "font-w700 text-warning";
    static readonly disabledTextClass = "font-w700 text-disabled";
    static encode(writer: SaveWriter, value: IModifierValue): SaveWriter;
    static decode(game: Game, reader: SaveWriter, version: number): ModifierValue | undefined;
    static skipBytes(reader: SaveWriter, version: number): void;
    static fromIDWithRegistry(registry: NamespaceRegistry<Modifier>, id: string, valueData: ModifierValueData, game: Game): ModifierValue;
    static fromID(id: string, valueData: ModifierValueData, game: Game): ModifierValue;
    static fromEnemyID(id: string, valueData: ModifierValueData, game: Game): ModifierValue;
    static fromAlias(modifier: Modifier, valueData: ModifierValueData, alias: ModifierAlias, game: Game): ModifierValue;
    static fromKey(key: string, valueData: ModifierValueData, game: Game): ModifierValue;
    static fromEnemyKey(key: string, valueData: ModifierValueData, game: Game): ModifierValue;
    /**
     * Attempts to get an instance of this class from a key value pair, returning undefined if any errors occur.
     * Only for use in converting old save data
     */
    static fromKeySafe(key: string, value: number, game: Game): ModifierValue | undefined;
    /**
     * Attempts to construct skill scoped modifier instances of this class from a series of skill/value pairs, returning results only for the valid pairs
     * Only for use in converting old save data
     */
    static fromSkillKeyValues(key: string, values: {
        skill: AnySkill;
        value: number;
    }[], game: Game): ModifierValue[];
}
interface ModifierDescriptionData {
    /** The template string to use for the description */
    text: string;
    /** Optional. ID of the language string to use in lieu text */
    lang?: string;
    /** Optional. If present, the value of the modifier must be above this for this description to be used */
    above?: number;
    /** Optional. If present, the value of the modifier must be below this for this description to be used */
    below?: number;
    /** Optional. If a `+/-` sign should be included before the `${value}`. Defaults to true. */
    includeSign?: boolean;
    /** Optional. If present, this description's positive/negative formatting will be opposite to the modifier's. Defaults to false. */
    inverted?: boolean;
    /** Optional. If present, this description will only apply to modifiers within the given scope */
    scope?: ModifierScopeData;
}
interface IModifierDescription {
    template: string;
    includeSign: boolean;
    inverted: boolean;
}
declare class ModifierDescription implements IModifierDescription {
    get template(): string;
    _text: string;
    _lang?: string;
    /** The exclusive range of values that can be formatted by this description. */
    range: [number, number];
    includeSign: boolean;
    /** If this description should have positive/negative formatting opposite to the modifier */
    inverted: boolean;
    /** Optional. If present this description only applies to a values who match this scope */
    scope?: IModifierScope;
    constructor(data: ModifierDescriptionData, game: Game, scopeSource?: IModifierScopeSource);
}
interface ModifierScopingData {
    /** The specific scopes allowed by this modifier */
    scopes: TrueFlags<IModifierScope>;
    /** Determines the source for action and category scopes for this scoping */
    scopeSource?: string;
    /** The descriptions to use for the modifier in this scope */
    descriptions: ModifierDescriptionData[];
    /** Aliases for positive values in this scope. Used for backwards compatability with old data format */
    posAliases?: ModifierAliasData[];
    /** Aliases for negative values in this scope. Used for backwards compatability with old data format */
    negAliases?: ModifierAliasData[];
}
interface ModifierScopingModificationData {
    /** Determines which scope to modify, or add if it does not already exist */
    scopes: TrueFlags<IModifierScope>;
    /** Optional. Descriptions to add to this scope */
    descriptions?: ModifierDescriptionData[];
    /** Optional. Aliases for positive values to add to this scope */
    posAliases?: ModifierAliasData[];
    /** Optional. Aliases for negative values to add to this scope */
    negAliases?: ModifierAliasData[];
}
declare class ModifierScoping {
    /** The specific scopes allowed by this modifier */
    scopes: TrueFlags<IModifierScope>;
    /** The object to use for action and category scopes for this scoping */
    scopeSource?: IModifierScopeSource;
    /** The descriptions for this modifier. Sorted by specificity and minimum range */
    descriptions: ModifierDescription[];
    /** Alias for negative values in this scope. Used for backwards compatability with old data format  */
    posAliases?: ModifierAlias[];
    /** Alias for negative values in this scope. Used for backwards compatability with old data format */
    negAliases?: ModifierAlias[];
    constructor(data: ModifierScopingData, game: Game);
    applyDataModification(data: ModifierScopingModificationData, game: Game): void;
    /** Gets the appropriate description for a value within this scope */
    getDescriptionTemplate(modValue: IModifierValue): IModifierDescription;
    constructAliases(scopeKey: number, game: Game, data: ModifierAliasData[]): ModifierAlias[];
    addDescriptions(data: ModifierDescriptionData[], game: Game): void;
    isScopeCombatible(scope: IModifierScope): boolean;
    sortDescriptions(): void;
}
interface ModifierData extends IDData {
    inverted?: boolean;
    /** If this modifier is allowed to have positive values. Defaults to true. */
    allowPositive?: boolean;
    /** If this modifier is allowed to have negative values. Defaults to true. */
    allowNegative?: boolean;
    /** If this modifier causes a change in combat stats when changed. Defaults to false. */
    isCombat?: boolean;
    /** If this modifier can be applied to enemies in combat. Defaults to false. */
    allowEnemy?: boolean;
    /** An expression that is applied to the modifier's value before it is described */
    modifyValue?: string;
    /** Determines which scopes this modifier can belong to */
    allowedScopes: ModifierScopingData[];
}
interface ModifierModificationData extends IDData {
    /** Adds or modifies an existing scopes belonging to this modifier */
    allowedScopes: ModifierScopingModificationData[];
}
declare class Modifier extends NamespacedObject {
    game: Game;
    inverted: boolean;
    allowPositive: boolean;
    allowNegative: boolean;
    isCombat: boolean;
    allowEnemy: boolean;
    modifyValue?: (value: number) => number;
    allowedScopes: ModifierScoping[];
    scopeMap: Map<number, ModifierScoping>;
    /** If this modifier has a scoping with no specified scopes */
    get hasEmptyScope(): boolean;
    /** Run-time property that disables this modifier. Disabling prevents the modifier from being added to ModifierTables */
    disabled: boolean;
    constructor(namespace: DataNamespace, data: ModifierData, game: Game);
    applyDataModification(data: ModifierModificationData, game: Game): void;
    getValueTemplateString(modValue: ModifierValue): IModifierDescription;
    formatValue(includeSign: boolean, value: number, precision?: number, percent?: boolean): string;
    getScopingFromData(data: ModifierScopeData): ModifierScoping;
    getScopingFromDataWithAlias(data: ModifierScopeData, alias: ModifierAlias): ModifierScoping;
    hasScoping(scope: IModifierScope): boolean;
    getScopingFromKey(scopeKey: number): ModifierScoping | undefined;
    static getScopeKey(scope: ModifierQueryParams): number;
    static getIdFromKey(key: string): string;
    static valueTranspiler: IExprTranspiler<(value: number) => number>;
    /** Holds the keys of the modifiers that were "skill" modifiers. Used for loading old save data */
    static readonly OLD_SKILL_MODIFIER_KEYS: readonly string[];
}
interface ModifierAliasInfo {
    isNegative: boolean;
    modifier: Modifier;
    alias: ModifierAlias;
}
declare class ModifierRegistry extends NamespaceRegistry<Modifier> {
    enemyAliases: Map<string, ModifierAliasInfo>;
    aliases: Map<string, ModifierAliasInfo>;
    enemy: NamespaceRegistry<Modifier>;
    constructor(rootNamespaceMap: NamespaceMap);
    registerObject(modifier: Modifier): void;
    updateAliases(modifier: Modifier): void;
    getAlias(key: string): ModifierAliasInfo | undefined;
    getEnemyAlias(key: string): ModifierAliasInfo | undefined;
}
/**
 * Formats Modifiers using the given formatter function
 * @param formatter Formats the description and textClass of a modifier
 * @param modifiers The modifier object to format
 * @param negMult Optional. Multiplier applied to negative modifiers.
 * @param posMult Optional. Multiplier applied to positive modifiers.
 * @returns An array of formatted descriptions
 */
declare function formatModifiers<T>(formatter: DescriptionFormatter<T>, modifiers: ModifierValue[], negMult?: number, posMult?: number): T[];
declare function addEffectModifierTemplateData(templateData: StringDictionary<string>, modifiers: ModifierValue[], prefix: string): void;
declare function getModifierDataDescriptions(modifiers: ModifierValue[], prefix: string): string[];
declare function generateModifierDataDescription(modifiers: ModifierValue[], key: string): string;
/** Pass a modifier description through here. Applies strike through if modifier is disabled */
declare function disableModifierPass(modifier: Modifier, desc: string): string;
/** Gets an array of plain modifier descriptions from data*/
declare function getPlainModifierDescriptions(modifiers: ModifierValue[]): string[];
declare function containsDisabledModifier(modifiers: ModifierValue[] | undefined): boolean;
/** Describes modifiers and joins them as a list with no HTML formatting, unless the modifier is disabled */
declare function describeModifierDataPlain(modifiers: ModifierValue[]): string;
/** Describes modifiers and joins them as a list separated by HTML line breaks with no HTML formatting for the modifier itself */
declare function describeModifierDataPlainLineBreak(modifiers: ModifierValue[]): string;
/** Describes modifiers and joins them as a list using Intl.ListFormat */
declare function describeModifierData(modifiers: ModifierValue[]): string;
/** Describes modifiers and joins them as a list separated by HTML line breaks */
declare function describeModifierDataLineBreak(modifiers: ModifierValue[]): string;
/** Gets span HTML that describes modifiers */
declare function getModifierDataSpans(modifiers: ModifierValue[], negMult?: number, posMult?: number): string[];
declare function getSpansFromModifierObject(modifiers: ModifierValue[], negMult?: number, posMult?: number, className?: string): HTMLSpanElement[];
