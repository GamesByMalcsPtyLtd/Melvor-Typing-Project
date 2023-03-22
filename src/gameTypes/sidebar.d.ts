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
    rootSelector: string;
    rootEl?: HTMLUListElement;
    rendered: boolean;
    categories: Map<string, SidebarCategory>;
    categoriesOrder: string[];
    constructor(rootSelector: string);
    get isRendered(): boolean;
    render(): void;
    getCategory(id: string): SidebarCategory | undefined;
    getAllCategories(): SidebarCategory[];
    addCategory(id: string, config?: SidebarCategoryConfig): SidebarCategory;
    removeCategory(id: string): void;
    removeAllCategories(): void;
    configureCategory(id: string, config: SidebarCategoryConfig): void;
    orderCategory(id: string, config: SidebarCategoryConfig): void;
    renderCategories(): void;
}
declare class SidebarCategory {
    id: string;
    config: SidebarCategoryConfig;
    rootEl?: HTMLLIElement;
    categoryEl?: HTMLDivElement;
    nameEl?: HTMLSpanElement;
    toggleEl?: HTMLElement;
    rendered: boolean;
    expanded: boolean;
    items: Map<string, SidebarItem>;
    itemsOrder: string[];
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
    orderItem(id: string, config: SidebarItemConfig): void;
    renderItems(): void;
    update(config: SidebarCategoryConfig, initialRender?: boolean): void;
    updateRootEl(config: SidebarCategoryConfig, initialRender?: boolean): void;
    updateCategoryEl(config: SidebarCategoryConfig, initialRender?: boolean): void;
    updateNameEl(config: SidebarCategoryConfig, initialRender?: boolean): void;
    updateToggle(config: SidebarCategoryConfig): void;
}
declare class SidebarItem {
    id: string;
    config: SidebarItemConfig;
    rootEl?: HTMLLIElement;
    itemEl?: HTMLAnchorElement;
    iconEl?: HTMLSpanElement;
    nameEl?: HTMLSpanElement;
    asideEl?: HTMLElement;
    subMenuEl?: HTMLUListElement;
    rendered: boolean;
    expanded: boolean;
    subitems: Map<string, SidebarSubitem>;
    subitemsOrder: string[];
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
    orderSubitem(id: string, config: SidebarSubitemConfig): void;
    renderSubitems(): void;
    update(config: SidebarItemConfig, initialRender?: boolean): void;
    updateRoot(config: SidebarItemConfig, initialRender?: boolean): void;
    updateItem(config: SidebarItemConfig, initialRender?: boolean): void;
    updateIcon(config: SidebarItemConfig, initialRender?: boolean): void;
    updateName(config: SidebarItemConfig, initialRender?: boolean): void;
    updateAside(config: SidebarItemConfig, initialRender?: boolean): void;
}
declare class SidebarSubitem {
    id: string;
    config: SidebarSubitemConfig;
    rootEl?: HTMLLIElement;
    subitemEl?: HTMLAnchorElement;
    nameEl?: HTMLSpanElement;
    asideEl?: HTMLElement;
    rendered: boolean;
    constructor(id: string, config?: SidebarSubitemConfig);
    get isRendered(): boolean;
    configure(config?: SidebarSubitemConfig): void;
    render(): void;
    click(): void;
    update(config: SidebarSubitemConfig, initialRender?: boolean): void;
    updateRoot(config: SidebarSubitemConfig, initialRender?: boolean): void;
    updateSubitem(config: SidebarSubitemConfig, initialRender?: boolean): void;
    updateName(config: SidebarSubitemConfig, initialRender?: boolean): void;
    updateAside(config: SidebarSubitemConfig, initialRender?: boolean): void;
}
declare const sidebar: SidebarWrapper;
declare function openSidebarLink(e: MouseEvent): boolean;
