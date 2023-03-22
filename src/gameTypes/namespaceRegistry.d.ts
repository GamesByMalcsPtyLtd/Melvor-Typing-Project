interface DataNamespace {
    /** Unique identifier for the namespace */
    name: string;
    /** The displayed name for the namespace */
    displayName: string;
    /** If the namespace is for modded content */
    isModded: boolean;
}
declare class NamespaceMap {
    registeredNamespaces: Map<string, DataNamespace>;
    /** Returns true if the map has a namespace with the given name */
    hasNamespace(name: string): boolean;
    getNamespace(name: string): DataNamespace | undefined;
    registerNamespace(name: string, displayName: string, isModded: boolean): DataNamespace;
    forEach(callbackfn: (namespace: DataNamespace) => void): void;
    static isValidName(name: string): boolean;
    static isValidModdedName(name: string): boolean;
}
declare class NamespacedObject {
    _namespace: DataNamespace;
    /** Readonly namespace of object */
    get namespace(): string;
    /** Readonly global id of the object */
    get id(): string;
    /** Readonly id of object within its namepsace */
    get localID(): string;
    /** Readonly. If the object is from a mod. */
    get isModded(): boolean;
    _localID: string;
    constructor(_namespace: DataNamespace, localID: string);
    getMediaURL(media: string): string;
    static isValidLocalID(localID: string): boolean;
}
interface SoftDataDependant<T extends IDData = IDData> {
    registerSoftDependencies(data: T, game: Game): void;
}
declare class NamespaceRegistry<T extends NamespacedObject> {
    rootNamespaceMap: NamespaceMap;
    /** Map of namespace: id: object */
    namespaceMaps: Map<string, Map<string, T>>;
    registeredObjects: Map<string, T>;
    dummyObjects: Map<string, T>;
    /** A map of the old namespace, to a map of ids to the new namespace */
    namespaceChanges: Map<string, Map<string, string>>;
    /** Returns the number of objects registered */
    get size(): number;
    get dummySize(): number;
    /** Returns an array of all objects which have been registered */
    get allObjects(): T[];
    get firstObject(): T;
    constructor(rootNamespaceMap: NamespaceMap);
    registerObject(object: T): void;
    registerNamespaceChange(oldNamespace: DataNamespace, data: NamespaceChangeData[]): void;
    /** Gets an object with the specified namespace and id. Returns undefined if no object is registered. */
    getObject(namespace: string, id: string): T | undefined;
    /** Gets an object with a quick id: `${namespace}:${id}` */
    getObjectByID(id: string): T | undefined;
    /** Gets a dummy object for the given id. Requires a DummyObject constructor which returns a new dummy object in the event it is unregistered. */
    getDummyObject(id: string, DummyObject: new (namespace: DataNamespace, localID: string, game: Game) => T, game: Game): T;
    forEach(callbackfn: (value: T, key: string, map: Map<string, T>) => void): void;
    forEachDummy(callbackfn: (value: T, key: string, map: Map<string, T>) => void): void;
    /** Searches for the first object which matches predicate. If none found, returns undefined */
    find(predicate: (value: T, id: string, map: Map<string, T>) => boolean): T | undefined;
    /** Returns an array of objects that meet the condition specified by predicate */
    filter(predicate: (value: T, id: string, map: Map<string, T>) => boolean): T[];
    every(predicate: (value: T, id: string, map: Map<string, T>) => boolean): boolean;
    some(predicate: (value: T, id: string, map: Map<string, T>) => boolean): boolean;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, id: string, map: Map<string, T>) => U, initialValue: U): U;
    /** Gets a set of objects for use in constructing an object. */
    getSetForConstructor(ids: string[], objectBeingConstructed: Object, unregisteredName: string): Set<T>;
    getQuantity(quantity: IDQuantity): ItemQuantity<T>;
    getQuantities(quantities: IDQuantity[]): ItemQuantity<T>[];
    /** Returns if a namespace has registered an object */
    hasObjectInNamespace(namespace: string): boolean;
}
declare class ItemRegistry extends NamespaceRegistry<AnyItem> {
    equipment: NamespaceRegistry<EquipmentItem>;
    weapons: NamespaceRegistry<WeaponItem>;
    food: NamespaceRegistry<FoodItem>;
    bones: NamespaceRegistry<BoneItem>;
    potions: NamespaceRegistry<PotionItem>;
    readables: NamespaceRegistry<ReadableItem>;
    openables: NamespaceRegistry<OpenableItem>;
    tokens: NamespaceRegistry<TokenItem>;
    composts: NamespaceRegistry<CompostItem>;
    constructor(rootNamespaceMap: NamespaceMap);
    registerObject(object: AnyItem): void;
    registerNamespaceChange(oldNamespace: DataNamespace, data: ItemNamespaceChangeData[]): void;
}
declare type InsertStart = {
    insertAt: 'Start';
    ids: string[];
};
declare type InsertEnd = {
    insertAt: 'End';
    ids: string[];
};
declare type InsertBefore = {
    insertAt: 'Before';
    beforeID: string;
    ids: string[];
};
declare type InsertAfter = {
    insertAt: 'After';
    afterID: string;
    ids: string[];
};
declare type InsertOrder = InsertStart | InsertEnd | InsertBefore | InsertAfter;
declare class NamespacedArray<T extends NamespacedObject> extends Array<T> {
    registery: NamespaceRegistry<T>;
    constructor(registery: NamespaceRegistry<T>, ...items: T[]);
    registerData(insertions: InsertOrder[]): void;
}
