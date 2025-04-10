interface RealmData extends IDData {
    name: string;
    media: string;
    unlockRequirements: AnyRequirementData[];
    showIfLocked?: boolean;
    ignoreCompletion?: boolean;
    sidebarClass?: string;
    realmClass?: string;
}
declare class Realm extends NamespacedObject {
    get name(): string;
    get media(): string;
    _media: string;
    _name: string;
    unlockRequirements: AnyRequirement[];
    showIfLocked: boolean;
    ignoreCompletion: boolean;
    modQuery: ModifierQuery;
    sidebarClass?: string;
    realmClass: string;
    constructor(namespace: DataNamespace, data: RealmData, game: Game);
    registerSoftDependencies(data: RealmData, game: Game): void;
    get isUnlocked(): boolean;
}
declare class RealmManager {
    game: Game;
    readonly unlockUnlisteners: Map<Realm, VoidFunction[]>;
    currentSidebarRealm?: Realm;
    constructor(game: Game);
    onLoad(): void;
    assignUnlockListeners(): void;
    onRealmRequirementMet(realm: Realm): void;
    queueRealmUnlockedModal(realm: Realm): void;
    queueRealmUnlockRenders(realm: Realm): void;
    showRealmUnlockRequirementsModal(realm: Realm): void;
    setSidebarTheme(realm: Realm): void;
    removeSidebarTheme(): void;
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
    setSelected(): void;
    setUnselected(): void;
    currentCallback?: VoidFunction;
    setCallback(callback: VoidFunction): void;
    setAsSubMenu(): void;
    addSubOption(option: HTMLElement): void;
    enableSubmenuScrolling(maxHeight: number): void;
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
    realmSidebarOptions: Map<Realm, RealmSidebarSelect>;
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
    selectedOption?: RealmSelectOptionElement;
    constructor();
    connectedCallback(): void;
    setOptions(realms: Realm[], callback: (realm: Realm) => void, highlightSelected?: boolean): void;
    updateRealmUnlock(realm: Realm): void;
    setSelectedRealm(realm: Realm): void;
    selectOption(option: RealmSelectOptionElement): void;
    unselectOption(): void;
}
declare class RealmSidebarSelect {
    realmSidebarOptions: Map<Realm, RealmSidebarSelectOption>;
    constructor();
    updateRealmVisibility(realm: Realm): void;
}
declare class RealmSidebarSelectOption {
    realm: Realm;
    sidebarEl: SidebarSubitemWrapper;
    constructor(realm: Realm);
    setLocked(): void;
    setUnlocked(): void;
    showRealmSidebarOption(): void;
    hideRealmSidebarOption(): void;
    setSidebarOptionAsLocked(): void;
    setSidebarOptionAsUnlocked(): void;
}
