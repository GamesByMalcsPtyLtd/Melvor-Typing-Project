declare class TownshipResourceDisplayElement extends HTMLElement {
    _content: DocumentFragment;
    setPriorityButton: HTMLLIElement;
    resourceIcon: HTMLImageElement;
    resourceAmount: HTMLElement;
    resourceRate: HTMLSpanElement;
    workerBadge: HTMLDivElement;
    assignedWorkers: HTMLSpanElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setResource(resource: TownshipResource, township: Township): void;
    updateResourceAmount(resource: TownshipResource, township: Township): void;
    updateResourceTextColour(resource: TownshipResource, township: Township): void;
    updateResourceRate(resource: TownshipResource, township: Township): void;
    updateAssignedWorkers(job: TownshipJob): void;
    highlightButton(): void;
    unhighlightButton(): void;
    getTooltipContent(resource: TownshipResource, township: Township): string;
    getResourcePerTickUsageSpan(resource: TownshipResource, township: Township): string;
    getResourcePerTickGainSpan(resource: TownshipResource, township: Township): string;
}
declare class TownshipTownBiomeSelectElement extends HTMLElement {
    _content: DocumentFragment;
    selectButton: HTMLElement;
    biomeName: HTMLSpanElement;
    biomeCount: HTMLElement;
    biomeImage: HTMLImageElement;
    buildingCount: HTMLElement;
    constructor();
    connectedCallback(): void;
    setBiome(biome: TownshipBiome | undefined, township: Township): void;
    updateBuildingCount(biome: TownshipBiome, township: Township): void;
    highlight(biome: TownshipBiome | undefined): void;
    unhighlight(biome: TownshipBiome | undefined): void;
    setAsMobileLayout(biome: TownshipBiome | undefined): void;
    setBuildingCount(building: TownshipBuilding, biome: TownshipBiome): void;
    showBuildingCount(): void;
    hideBuildingCount(): void;
    highlightBorder(): void;
    unhighlightBorder(): void;
}
declare class TownshipBuildingSummaryElement extends HTMLElement {
    _content: DocumentFragment;
    image: HTMLImageElement;
    name: HTMLSpanElement;
    count: HTMLElement;
    provides: HTMLUListElement;
    resourceOutput: HTMLDivElement;
    resourceUsage: HTMLDivElement;
    modifiers: HTMLDivElement;
    extraRequirements: HTMLDivElement;
    levelRequirement: HTMLDivElement;
    popRequirement: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    setBuildingWithoutQuantity(building: TownshipBuilding, township: Township): void;
    updateNameQuantity(building: TownshipBuilding, quantity: number): void;
    updateBuildingCount(count: number): void;
    createProvidesElement(iconClass: string, value: number): string;
    updateBuildingProvides(building: TownshipBuilding, township: Township, qty?: number): void;
    updateResourceOutput(building: TownshipBuilding, township: Township, qty?: number): void;
    updateResourceUsage(building: TownshipBuilding, township: Township, qty?: number): void;
    updateModifiers(building: TownshipBuilding): void;
    applyReqFormatting(req: HTMLElement, isMet: boolean): void;
    updateExtraRequirements(building: TownshipBuilding, township: Township): void;
    updateForBuildQtyChange(building: TownshipBuilding, township: Township): void;
    updateForBaseBuildQty(building: TownshipBuilding, township: Township): void;
}
declare class BuildingInTownElement extends HTMLElement {
    _content: DocumentFragment;
    buildingDiv: HTMLDivElement;
    buildingImage: HTMLImageElement;
    buildingName: HTMLSpanElement;
    buildingTaskIcon: HTMLImageElement;
    buildingCount: HTMLElement;
    destroyContainer: HTMLDivElement;
    destroyButton: HTMLButtonElement;
    destroyQtyOptions: HTMLDivElement;
    buildingTotals: HTMLUListElement;
    buildingResources: HTMLDivElement;
    resourceOutput: HTMLDivElement;
    resourceUsage: HTMLDivElement;
    buildingModifiers: HTMLDivElement;
    upgradesToDivider: HTMLDivElement;
    selectBiomeWarning: HTMLDivElement;
    upgradesToContainer: HTMLDivElement;
    upgradesToName: HTMLLIElement;
    upgradesToCosts: HTMLUListElement;
    upgradeButton: HTMLButtonElement;
    upgradeQtyOptions: HTMLDivElement;
    upgradesToTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    initQtyDropdowns(townshipUI: TownshipUI): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    updateBuildingCount(count: number): void;
    updateBuildingUpgradeCosts(upgradesTo: TownshipBuilding, township: Township): void;
    toggleBuildOptions(show: boolean, hasUpgrade: boolean): void;
    createTotalElement(iconClass: string, total: number): string;
    updateBuildingTotals(building: TownshipBuilding, township: Township): void;
    updateResourceTotals(building: TownshipBuilding, township: Township): void;
    setResourceUsage(building: TownshipBuilding, townshipUI: TownshipUI): void;
    updateModifierTotals(building: TownshipBuilding): void;
}
declare class TownshipBuildBiomeSelectElement extends HTMLElement {
    _content: DocumentFragment;
    selectButton: HTMLElement;
    biomeName: HTMLSpanElement;
    biomesRemaining: HTMLElement;
    biomeImage: HTMLImageElement;
    containsResources: HTMLDivElement;
    buildImage: HTMLImageElement;
    buildingCount: HTMLElement;
    constructor();
    connectedCallback(): void;
    setBiome(biome: TownshipBiome, township: Township): void;
    updateBiomesRemaining(text: string): void;
    highlight(): void;
    unhighlight(): void;
    showHighlightBorder(): void;
    hideHighlightBorder(): void;
    showFilterHighlightBorder(): void;
    hideFilterHighlightBorder(): void;
    showBuildable(): void;
    hideBuildable(): void;
    setBuildingCount(building: TownshipBuilding, biome: TownshipBiome): void;
    showBuildingCount(): void;
    hideBuildingCount(): void;
    showBiome(): void;
    hideBiome(): void;
}
declare class TownshipBuildingSortDropdownOptionElement extends HTMLElement {
    _content: DocumentFragment;
    checkbox: HTMLInputElement;
    label: HTMLLabelElement;
    constructor();
    connectedCallback(): void;
    configure(labelText: string, callback: VoidFunction, id: string): void;
    setChecked(isChecked: boolean): void;
}
declare class TownshipBuildingSortDropdownElement extends HTMLElement {
    _content: DocumentFragment;
    optionsContainer: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    populateOptions(callback: (category: keyof BuildingSortList, index: number) => void): void;
    addOption(text: string, category: keyof BuildingSortList, index: number, isChecked: boolean, callback: (category: keyof BuildingSortList, index: number) => void): void;
}
declare class TownshipBuildBuildingElement extends HTMLElement {
    _content: DocumentFragment;
    buildButton: HTMLAnchorElement;
    buildingSummary: TownshipBuildingSummaryElement;
    buildingCosts: HTMLUListElement;
    constructor();
    connectedCallback(): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    updateResourceOutput(building: TownshipBuilding, township: Township): void;
    updateExtraRequirements(building: TownshipBuilding, township: Township): void;
    updateBuildingCosts(building: TownshipBuilding, township: Township): void;
    updateBuildingCount(building: TownshipBuilding, township: Township): void;
    updateForBuildQtyChange(building: TownshipBuilding, township: Township): void;
    showFilterHighlightBorder(): void;
    hideFilterHighlightBorder(): void;
}
declare class TownshipYeetElement extends HTMLElement {
    _content: DocumentFragment;
    yeetButton: HTMLAnchorElement;
    resourceImage: HTMLImageElement;
    resourceAmount: HTMLElement;
    constructor();
    connectedCallback(): void;
    setResource(resource: TownshipResource, amount: number, township: Township): void;
}
declare class TownshipCapResourceElement extends HTMLElement {
    _content: DocumentFragment;
    resourceImage: HTMLImageElement;
    resourceName: HTMLSpanElement;
    capQtyDropdown: HTMLButtonElement;
    capQtyOptions: HTMLElement;
    constructor();
    connectedCallback(): void;
    setResource(resource: TownshipResource, township: Township): void;
    setCap(resource: TownshipResource): void;
    initQtyDropdowns(resource: TownshipResource, township: Township): void;
}
declare class TownshipConversionElement extends HTMLElement {
    _content: DocumentFragment;
    convertButton: HTMLAnchorElement;
    convertFromImage: HTMLImageElement;
    convertQuantity: HTMLElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    getTooltip(resource: TownshipResource, item: AnyItem): string;
    createConvertToSwal(resource: TownshipResource, item: AnyItem, township: Township): void;
    createConvertFromSwal(resource: TownshipResource, item: AnyItem, township: Township): void;
    setItemToResource(resource: TownshipResource, item: AnyItem, township: Township): void;
    updateConvertRatio(resource: TownshipResource, item: AnyItem, township: Township): void;
    updateConvertToRatio(resource: TownshipResource, item: AnyItem, township: Township): void;
    updateConvertFromRatio(resource: TownshipResource, item: AnyItem, township: Township): void;
}
declare class TownshipConversionSwalTemplate extends HTMLElement {
    _content: DocumentFragment;
    convertFromImage: HTMLImageElement;
    convertFromQuantity: HTMLSpanElement;
    convertToImage: HTMLImageElement;
    convertToQuantity: HTMLSpanElement;
    convertFromRatioImage: HTMLImageElement;
    convertFromRatioQuantity: HTMLSpanElement;
    convertToRatioImage: HTMLImageElement;
    convertToRatioQuantity: HTMLSpanElement;
    receiveImage: HTMLImageElement;
    receiveQuantity: HTMLSpanElement;
    receiveGP: HTMLSpanElement;
    receiveGPContainer: HTMLDivElement;
    btnGroupNumber: HTMLDivElement;
    btnGroupPercent: HTMLDivElement;
    btnNumber: HTMLButtonElement;
    btnPercent: HTMLButtonElement;
    inputQty: HTMLInputElement;
    traderStock: HTMLHeadingElement;
    traderIncrease: HTMLHeadingElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    setConvertToImage(media: string): void;
    setConvertToQuantity(qty: number): void;
    setConvertFromImage(media: string): void;
    setConvertFromQuantity(ratio: number, qty: number): void;
    setConvertToRatioQuantity(qty: number): void;
    setConvertFromRatioQuantity(qty: number): void;
    setConvertButtons(resource: TownshipResource, item: AnyItem, type: TownshipConvertType): void;
    setConvertToQuantityInput(value: number, resource: TownshipResource, item: AnyItem): void;
    setConvertFromQuantityInput(value: number, resource: TownshipResource, item: AnyItem): void;
    updateInputValue(): void;
    updateGPValue(value: number): void;
    setTraderStock(township: Township): void;
}
declare class TownshipWorshipSelectButtonElement extends HTMLElement {
    _content: DocumentFragment;
    selectButton: HTMLButtonElement;
    worshipName: HTMLSpanElement;
    worshipDescription: HTMLElement;
    constructor();
    connectedCallback(): void;
    setWorship(worship: TownshipWorship, township: Township): void;
    setSelected(): void;
    setUnselected(): void;
}
declare class TownshipWorshipSelectElement extends HTMLElement {
    _content: DocumentFragment;
    modifierDiv: HTMLElement;
    modifierContainer: HTMLElement;
    constructor();
    connectedCallback(): void;
    setWorship(worship: TownshipWorship, township: Township): void;
}
declare class TownshipConversionJumpToElement extends HTMLElement {
    _content: DocumentFragment;
    resourceIcon: HTMLImageElement;
    resourceList: HTMLLIElement;
    constructor();
    connectedCallback(): void;
    setIcon(resource: TownshipResource): void;
}
declare class TownshipTownBreakdownElement extends HTMLElement {
    _content: DocumentFragment;
    breakdownTitle: HTMLSpanElement;
    value: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setItem(title: string, value: string): void;
    addValueClass(valueClass: string): void;
    removeValueClass(valueClass: string): void;
}
declare class TownshipBuildBiomeFilterIconElement extends HTMLElement {
    _content: DocumentFragment;
    media: HTMLImageElement;
    icon: HTMLElement;
    filterList: HTMLLIElement;
    filterLink: HTMLAnchorElement;
    tooltip?: TippyTooltip;
    tooltipContent: string;
    constructor();
    connectedCallback(): void;
    setIcon(className: string): void;
    setIconColor(color: string): void;
    setMedia(resource: TownshipResource): void;
    setTooltip(): void;
    setTooltipContent(content: string): void;
}
