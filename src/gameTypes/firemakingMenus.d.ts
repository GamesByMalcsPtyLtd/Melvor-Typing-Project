declare class FiremakingLogMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    logSelectButton: HTMLButtonElement;
    logOptionsContainer: HTMLDivElement;
    logQuantity: ItemCurrentIconElement;
    logName: HTMLSpanElement;
    preservation: PreservationIconElement;
    doubling: DoublingIconElement;
    mastery: MasteryDisplayElement;
    primaryProducts: HTMLDivElement;
    primaryIconContainer: HTMLDivElement;
    primaryHaves: HavesBoxElement;
    grants: GrantsBoxElement;
    burnButton: HTMLButtonElement;
    interval: IntervalIconElement;
    progressBar: ProgressBarElement;
    recipeOptions: Map<FiremakingLog, {
        link: HTMLAnchorElement;
        name: HTMLSpanElement;
    }>;
    primaryIcons: ItemChanceIconElement[];
    constructor();
    connectedCallback(): void;
    init(game: Game, firemaking: Firemaking): void;
    updateOptions(game: Game, firemaking: Firemaking): void;
    setUnselected(): void;
    setLog(game: Game, firemaking: Firemaking, recipe: FiremakingLog): void;
    updateQuantities(game: Game): void;
    updateLogInfo(game: Game, firemaking: Firemaking, recipe: FiremakingLog): void;
    setProductIcons(container: HTMLDivElement, icons: ItemChanceIconElement[], products: Item[]): void;
}
declare class FiremakingBonfireMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    bonfireImage: HTMLImageElement;
    firemakingBonfireStatusText: HTMLSpanElement;
    statusState: HTMLSpanElement;
    standardXpBonus: HTMLDivElement;
    standardXpPercent: HTMLSpanElement;
    abyssalXpBonus: HTMLDivElement;
    abyssalXpPercent: HTMLSpanElement;
    lightButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
    interval: IntervalIconElement;
    progressBar: ProgressBarElement;
    constructor();
    connectedCallback(): void;
    init(firemaking: Firemaking): void;
    updateInfo(firemaking: Firemaking, recipe: FiremakingLog): void;
    setActive(firemaking: Firemaking, activeBonfire: FiremakingLog): void;
    setInactive(firemaking: Firemaking, selectedLog: FiremakingLog | undefined): void;
    toggleAbyssalState(isAbyssal: boolean): void;
}
declare class FiremakingOilMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    oilSelectButton: HTMLButtonElement;
    oilOptionsContainer: HTMLDivElement;
    oilQuantity: ItemCurrentIconElement;
    oilName: HTMLSpanElement;
    oilInfo: HTMLSpanElement;
    oilButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
    interval: IntervalIconElement;
    recipeOptions: Map<FiremakingOilItem, {
        link: HTMLAnchorElement;
        name: HTMLSpanElement;
        modifiers: HTMLSpanElement;
    }>;
    progressBar: ProgressBarElement;
    constructor();
    connectedCallback(): void;
    init(firemaking: Firemaking): void;
    updateInfo(firemaking: Firemaking, oil: FiremakingOilItem): void;
    updateOptions(game: Game, firemaking: Firemaking): void;
    setUnselected(): void;
    setOil(game: Game, firemaking: Firemaking, oil: FiremakingOilItem): void;
    updateQuantities(game: Game): void;
    setActive(): void;
    setInactive(): void;
}
interface FiremakingMenu {
    logs: FiremakingLogMenuElement;
    bonfire: FiremakingBonfireMenuElement;
    oil: FiremakingOilMenuElement;
}
