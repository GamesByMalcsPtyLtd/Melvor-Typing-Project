declare class IconBox<T extends InfoIcon> extends ContainedComponent {
    protected name: HTMLElement;
    iconContainer: HTMLDivElement;
    protected icons: T[];
    protected dash: HTMLSpanElement;
    protected container: HTMLDivElement;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[]);
    destroyIcons(): void;
    addIcon(icon: T): void;
    protected setName(name: string): void;
    localize(): void;
    setSelected(): void;
    setUnselected(): void;
}
declare class RequiresBox extends IconBox<InfoIcon> {
    private size;
    /** Allows the specification of a different title */
    private titleLangID;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[], size?: Resize, 
    /** Allows the specification of a different title */
    titleLangID?: string);
    localize(): void;
    setItems(items: AnyItemQuantity[], gp?: number, sc?: number, altMedia?: boolean): void;
    setItemsFromRecipe(recipe: ArtisanSkillRecipe, altMedia?: boolean): void;
}
declare class HavesBox extends IconBox<QtyCurrentIcon> {
    private size;
    /** Allows the specification of a different title */
    private titleLangID;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[], size?: Resize, 
    /** Allows the specification of a different title */
    titleLangID?: string);
    localize(): void;
    updateQuantities(): void;
    setItems(items: AnyItemQuantity[], gp?: number, sc?: number, altMedia?: boolean): void;
    setItemsFromRecipe(recipe: ArtisanSkillRecipe, altMedia?: boolean): void;
}
declare class ProducesBox extends IconBox<InfoIcon> {
    private size;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[]);
    setItems(items: AnyItemQuantity[], gp?: number, sc?: number): void;
    localize(): void;
}
declare class GrantsBox extends IconBox<InfoIcon> {
    private xpIcon;
    private masteryXPIcon;
    private masteryPoolIcon;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], size?: Resize, iconContClasses?: string[]);
    localize(): void;
    updateGrants(xp: number, masteryXP: number, poolXP: number): void;
    hideMastery(): void;
}
declare class CookingBonusBox extends IconBox<InfoIcon> {
    private preserve;
    private double;
    private perfect;
    private success;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[]);
    setChances(preserve: number, double: number, perfect: number, success: number): void;
    localize(): void;
}
