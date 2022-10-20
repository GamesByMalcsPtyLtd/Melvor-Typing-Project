declare type SidebarCategoryBuilder = (category: SidebarCategoryWrapper) => unknown;
declare type SidebarItemBuilder = (item: SidebarItemWrapper) => unknown;
declare type SidebarSubitemBuilder = (subitem: SidebarSubitemWrapper) => unknown;
interface SidebarWrapper {
    category(id: string, builder?: SidebarCategoryBuilder): SidebarCategoryWrapper;
    category(id: string, config?: SidebarCategoryConfig, builder?: SidebarCategoryBuilder): SidebarCategoryWrapper;
    categories(): SidebarCategoryWrapper[];
    removeCategory(id: string): void;
    removeAllCategories(): void;
    render(): void;
}
interface SidebarCategoryConfig {
    rootClass?: string | null;
    categoryClass?: string | null;
    name?: string | HTMLElement | null;
    nameClass?: string | null;
    toggleable?: boolean | null;
    before?: string | null;
    after?: string | null;
    onClick?: () => unknown | null;
    onRender?: (elements: SidebarCategoryRenderCallbackParameter) => unknown;
}
interface SidebarCategoryRenderCallbackParameter {
    rootEl: HTMLLIElement;
    categoryEl: HTMLDivElement;
    nameEl: HTMLSpanElement;
    toggleEl?: HTMLElement;
}
interface SidebarCategoryWrapper {
    id: string;
    rootEl?: HTMLLIElement;
    categoryEl?: HTMLDivElement;
    nameEl?: HTMLSpanElement;
    toggleEl?: HTMLElement;
    click(): void;
    toggle(force?: boolean): void;
    item(id: string, builder?: SidebarItemBuilder): SidebarItemWrapper;
    item(id: string, config?: SidebarItemConfig, builder?: SidebarItemBuilder): SidebarItemWrapper;
    items(): SidebarItemWrapper[];
    remove(): void;
    removeItem(id: string): void;
    removeAllItems(): void;
}
interface SidebarItemConfig {
    rootClass?: string | null;
    itemClass?: string | null;
    icon?: string | HTMLElement | null;
    iconClass?: string | null;
    name?: string | HTMLElement | null;
    nameClass?: string | null;
    aside?: string | HTMLElement | null;
    asideClass?: string | null;
    link?: string | null;
    ignoreToggle?: boolean | null;
    before?: string | null;
    after?: string | null;
    onClick?: () => unknown | null;
    onRender?: (elements: SidebarItemRenderCallbackParameter) => unknown;
}
interface SidebarItemRenderCallbackParameter {
    rootEl: HTMLLIElement;
    itemEl: HTMLAnchorElement;
    iconEl: HTMLSpanElement;
    nameEl: HTMLSpanElement;
    asideEl?: HTMLElement;
    subMenuEl?: HTMLElement;
}
interface SidebarItemWrapper {
    id: string;
    rootEl?: HTMLLIElement;
    itemEl?: HTMLAnchorElement;
    iconEl?: HTMLSpanElement;
    nameEl?: HTMLSpanElement;
    asideEl?: HTMLElement;
    subMenuEl?: HTMLUListElement;
    click(): void;
    toggle(force?: boolean): void;
    subitem(id: string, builder?: SidebarSubitemBuilder): SidebarSubitemWrapper;
    subitem(id: string, config?: SidebarSubitemConfig, builder?: SidebarSubitemBuilder): SidebarSubitemWrapper;
    subitems(): SidebarSubitemWrapper[];
    remove(): void;
    removeSubitem(id: string): void;
    removeAllSubitems(): void;
    category: SidebarCategoryWrapper;
}
interface SidebarSubitemConfig {
    rootClass?: string | null;
    subitemClass?: string | null;
    name?: string | HTMLElement | null;
    nameClass?: string | null;
    aside?: string | HTMLElement | null;
    asideClass?: string | null;
    link?: string | null;
    before?: string;
    after?: string;
    onClick?: () => unknown | null;
    onRender?: (elements: SidebarSubitemRenderCallbackParameter) => unknown;
}
interface SidebarSubitemRenderCallbackParameter {
    rootEl: HTMLLIElement;
    subitemEl: HTMLAnchorElement;
    nameEl: HTMLSpanElement;
    asideEl?: HTMLElement;
}
interface SidebarSubitemWrapper {
    id: string;
    rootEl?: HTMLLIElement;
    subitemEl?: HTMLAnchorElement;
    nameEl?: HTMLSpanElement;
    asideEl?: HTMLElement;
    click(): void;
    remove(): void;
    item: SidebarItemWrapper;
}
declare class Sidebar {
    private rootSelector;
    rootEl?: HTMLUListElement;
    private rendered;
    private categories;
    private categoriesOrder;
    constructor(rootSelector: string);
    get isRendered(): boolean;
    render(): void;
    getCategory(id: string): SidebarCategory | undefined;
    getAllCategories(): SidebarCategory[];
    addCategory(id: string, config?: SidebarCategoryConfig): SidebarCategory;
    removeCategory(id: string): void;
    removeAllCategories(): void;
    configureCategory(id: string, config: SidebarCategoryConfig): void;
    private orderCategory;
    private renderCategories;
}
declare class SidebarCategory {
    id: string;
    private config;
    rootEl?: HTMLLIElement;
    categoryEl?: HTMLDivElement;
    nameEl?: HTMLSpanElement;
    toggleEl?: HTMLElement;
    private rendered;
    private expanded;
    private items;
    private itemsOrder;
    constructor(id: string, config?: SidebarCategoryConfig);
    get isRendered(): boolean;
    configure(config?: SidebarCategoryConfig): void;
    render(): void;
    toggle(force?: boolean): void;
    click(): void;
    getItem(id: string): SidebarItem | undefined;
    getAllItems(): SidebarItem[];
    addItem(id: string, config?: SidebarItemConfig): SidebarItem;
    removeItem(id: string): void;
    removeAllItems(): void;
    configureItem(id: string, config: SidebarItemConfig): void;
    private orderItem;
    private renderItems;
    private update;
    private updateRootEl;
    private updateCategoryEl;
    private updateNameEl;
    private updateToggle;
}
declare class SidebarItem {
    id: string;
    private config;
    rootEl?: HTMLLIElement;
    itemEl?: HTMLAnchorElement;
    iconEl?: HTMLSpanElement;
    nameEl?: HTMLSpanElement;
    asideEl?: HTMLElement;
    subMenuEl?: HTMLUListElement;
    private rendered;
    private expanded;
    private subitems;
    private subitemsOrder;
    constructor(id: string, config?: SidebarItemConfig);
    get isRendered(): boolean;
    get ignoreToggle(): boolean;
    configure(config?: SidebarItemConfig): void;
    render(): void;
    toggle(force?: boolean): void;
    click(): void;
    getSubitem(id: string): SidebarSubitem | undefined;
    getAllSubitems(): SidebarSubitem[];
    addSubitem(id: string, config?: SidebarSubitemConfig): SidebarSubitem;
    removeSubitem(id: string, removingAll?: boolean): void;
    removeAllSubitems(): void;
    configureSubitem(id: string, config: SidebarSubitemConfig): void;
    private orderSubitem;
    private renderSubitems;
    private update;
    private updateRoot;
    private updateItem;
    private updateIcon;
    private updateName;
    private updateAside;
}
declare class SidebarSubitem {
    id: string;
    private config;
    rootEl?: HTMLLIElement;
    subitemEl?: HTMLAnchorElement;
    nameEl?: HTMLSpanElement;
    asideEl?: HTMLElement;
    private rendered;
    constructor(id: string, config?: SidebarSubitemConfig);
    get isRendered(): boolean;
    configure(config?: SidebarSubitemConfig): void;
    render(): void;
    click(): void;
    private update;
    private updateRoot;
    private updateSubitem;
    private updateName;
    private updateAside;
}
declare const sidebar: SidebarWrapper;
declare function openLink(e: MouseEvent): void;
