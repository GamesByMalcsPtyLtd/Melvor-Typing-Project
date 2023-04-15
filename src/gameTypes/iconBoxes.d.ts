declare class IconBox<T extends InfoIcon> extends ContainedComponent {
    name: HTMLElement;
    iconContainer: HTMLDivElement;
    icons: T[];
    dash: HTMLSpanElement;
    container: HTMLDivElement;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[]);
    destroyIcons(): void;
    addIcon(icon: T): void;
    setName(name: string): void;
    localize(): void;
    setSelected(): void;
    setUnselected(): void;
}
declare class RequiresBox extends IconBox<InfoIcon> {
    size: Resize;
    /** Allows the specification of a different title */
    titleLangID: string;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[], size?: Resize, 
    /** Allows the specification of a different title */
    titleLangID?: string);
    localize(): void;
    setItems(items: AnyItemQuantity[], gp?: number, sc?: number, altMedia?: boolean): void;
    setItemsFromRecipe(recipe: ArtisanSkillRecipe, altMedia?: boolean): void;
}
declare class HavesBox extends IconBox<QtyCurrentIcon> {
    size: Resize;
    /** Allows the specification of a different title */
    titleLangID: string;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[], size?: Resize, 
    /** Allows the specification of a different title */
    titleLangID?: string);
    localize(): void;
    updateQuantities(): void;
    setItems(items: AnyItemQuantity[], gp?: number, sc?: number, altMedia?: boolean): void;
    setItemsFromRecipe(recipe: ArtisanSkillRecipe, altMedia?: boolean): void;
}
declare class ProducesBox extends IconBox<InfoIcon> {
    size: Resize;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], iconContClasses?: string[]);
    setItems(items: AnyItemQuantity[], gp?: number, sc?: number): void;
    localize(): void;
}
declare class GrantsBox extends IconBox<InfoIcon> {
    xpIcon: XPIcon;
    masteryXPIcon: MasteryXPIcon;
    masteryPoolIcon: MasteryPoolIcon;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[], size?: Resize, iconContClasses?: string[]);
    localize(): void;
    updateGrants(xp: number, baseXP: number, masteryXP: number, baseMasteryXP: number, poolXP: number): void;
    hideMastery(): void;
}
declare class CookingBonusBox extends IconBox<InfoIcon> {
    preserve: PreservationIcon;
    double: DoublingIcon;
    perfect: PerfectCookIcon;
    success: CookingSuccessIcon;
    constructor(parent: HTMLElement, smallName: boolean, containerClasses?: string[]);
    setChances(preserve: number, double: number, perfect: number, success: number): void;
    localize(): void;
}
