interface RealmData extends IDData {
    name: string;
    media: string;
    unlockRequirements: AnyRequirementData[];
    showIfLocked?: boolean;
}
declare class Realm extends NamespacedObject {
    get name(): string;
    get media(): string;
    _media: string;
    _name: string;
    unlockRequirements: AnyRequirement[];
    showIfLocked: boolean;
    modQuery: ModifierQuery;
    constructor(namespace: DataNamespace, data: RealmData, game: Game);
    registerSoftDependencies(data: RealmData, game: Game): void;
    get isUnlocked(): boolean;
}
interface RealmedObjectData extends IDData {
    /** Optional. The ID of the realm the object belongs to. Defaults to melvorD:Melvor */
    realm?: string;
}
/** Base class for namespaced objects that belong to a particular realm */
declare class RealmedObject extends NamespacedObject {
    /** The realm this object belongs to */
    realm: Realm;
    constructor(namespace: DataNamespace, data: RealmedObjectData, game: Game);
}
interface NamedRealmedObject extends RealmedObject {
    name: string;
}
declare class RealmSelectOptionElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    listItem: HTMLLIElement;
    link: HTMLAnchorElement;
    realmImage: HTMLImageElement;
    span: HTMLSpanElement;
    realmName: HTMLSpanElement;
    lockIcon: HTMLElement;
    submenu: HTMLUListElement;
    tooltip?: TippyTooltip;
    hasSubmenu: boolean;
    realm: Realm;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setRealm(realm: Realm): void;
    setLocked(): void;
    setUnlocked(): void;
    currentCallback?: VoidFunction;
    setCallback(callback: VoidFunction): void;
    setAsSubMenu(): void;
    addSubOption(option: HTMLElement): void;
    enableSubmenu(): void;
    disableSubmenu(): void;
    addSubmenuFix(): void;
}
declare class RealmSelectMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    expandBtn: HTMLButtonElement;
    expanded: HTMLDivElement;
    realmContainer: HTMLUListElement;
    realmOptions: Map<Realm, RealmSelectOptionElement>;
    constructor();
    connectedCallback(): void;
    /** Populates the menu */
    init(skill: AnySkill): void;
    updateRealmVisibility(realm: Realm): void;
    static initializeForSkill(skill: AnySkill): void;
}
declare class RealmTabSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    optionsContainer: HTMLUListElement;
    options: RealmSelectOptionElement[];
    optionsMap: Map<Realm, RealmSelectOptionElement>;
    constructor();
    connectedCallback(): void;
    setOptions(realms: Realm[], callback: (realm: Realm) => void): void;
    updateRealmUnlock(realm: Realm): void;
}
