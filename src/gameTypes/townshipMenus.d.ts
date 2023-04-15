declare class TownshipResourceDisplayElement extends HTMLElement {
    _content: DocumentFragment;
    setPriorityButton: HTMLLIElement;
    resourceIcon: HTMLImageElement;
    resourceAmount: HTMLElement;
    resourceRate: HTMLSpanElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setResource(resource: TownshipResource, township: Township): void;
    updateResourceAmount(resource: TownshipResource, township: Township): void;
    updateResourceTextColour(resource: TownshipResource, township: Township): void;
    updateResourceRate(resource: TownshipResource): void;
    getTooltipContent(resource: TownshipResource, township: Township): string;
}
declare class TownshipTownBiomeSelectElement extends HTMLElement {
    _content: DocumentFragment;
    selectButton: HTMLElement;
    biomeName: HTMLSpanElement;
    biomeProgress: HTMLElement;
    biomeImage: HTMLImageElement;
    biomeProgressBar: HTMLDivElement;
    levelRequirement: HTMLDivElement;
    popRequirement: HTMLDivElement;
    buildAvailable: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setBiome(biome: TownshipBiome, township: Township): void;
    highlight(biome: TownshipBiome | undefined): void;
    unhighlight(biome: TownshipBiome | undefined): void;
    setAsMobileLayout(biome: TownshipBiome | undefined): void;
    updateProgress(biome: TownshipBiome, township: Township): void;
    applyReqFormatting(req: HTMLElement, isMet: boolean): void;
    updateRequirements(biome: TownshipBiome, township: Township): void;
    showBuildAvailable(): void;
    hideBuildAvailable(): void;
}
declare class TownshipBuildingSummaryElement extends HTMLElement {
    _content: DocumentFragment;
    image: HTMLImageElement;
    name: HTMLSpanElement;
    count: HTMLElement;
    provides: HTMLUListElement;
    resourceOutput: HTMLDivElement;
    modifiers: HTMLDivElement;
    extraRequirements: HTMLDivElement;
    levelRequirement: HTMLDivElement;
    popRequirement: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    updateBuildingCount(count: number): void;
    createProvidesElement(media: string, value: number): string;
    createPercentProvidesElement(media: string, value: number): string;
    updateBuildingProvides(building: TownshipBuilding, township: Township, qty?: number): void;
    updateResourceOutput(building: TownshipBuilding, township: Township): void;
    updateModifiers(building: TownshipBuilding): void;
    applyReqFormatting(req: HTMLElement, isMet: boolean): void;
    updateExtraRequirements(building: TownshipBuilding, township: Township): void;
    updateForBaseBuildQty(building: TownshipBuilding, township: Township): void;
}
declare class BuildingRequirementsElement extends HTMLElement {
    _content: DocumentFragment;
    otherRequirements: HTMLUListElement;
    levelRequirement: HTMLLIElement;
    popRequirement: HTMLLIElement;
    constructor();
    connectedCallback(): void;
    applyReqFormatting(req: HTMLElement, isMet: boolean): void;
    updateRequirements(building: TownshipBuilding, township: Township): void;
}
declare class BuildingInTownElement extends HTMLElement {
    _content: DocumentFragment;
    buildingDiv: HTMLDivElement;
    buildingImage: HTMLImageElement;
    buildingName: HTMLSpanElement;
    buildingTaskIcon: HTMLImageElement;
    buildingTotals: HTMLUListElement;
    resourceOutput: HTMLDivElement;
    buildingModifiers: HTMLDivElement;
    requirementsContainer: HTMLDivElement;
    upgradesToContainer: HTMLDivElement;
    upgradesToName: HTMLLIElement;
    upgradesToCosts: HTMLUListElement;
    upgradesToProvides: HTMLUListElement;
    upgradeButton: HTMLButtonElement;
    upgradeButtonGroup: HTMLDivElement;
    upgradeQtyOptions: HTMLDivElement;
    upgradesToTooltip?: TippyTooltip;
    upgradeProgressBar: HTMLDivElement;
    buildingEfficiency: HTMLDivElement;
    repairContainer: HTMLDivElement;
    repairCosts: HTMLUListElement;
    repairButton: HTMLButtonElement;
    upgradeData: HTMLUListElement;
    upgradeDataStatus: {
        locked: HTMLLIElement;
        active: HTMLLIElement;
        inactive: HTMLLIElement;
    };
    constructor();
    connectedCallback(): void;
    setUpgradeDataStatus(building: TownshipBuilding, township: Township): void;
    initQtyDropdowns(townshipUI: TownshipUI): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    setBuildingName(building: TownshipBuilding): void;
    setBuildingMedia(building: TownshipBuilding): void;
    updateBuildingRequirements(building: TownshipBuilding, township: Township): void;
    updateBuildingUpgradeCosts(building: TownshipBuilding, township: Township): void;
    updateBuildingUpgradeProvides(building: TownshipBuilding, township: Township): void;
    updateBuildingRepairCosts(building: TownshipBuilding, township: Township): void;
    toggleBuildOptions(maxUpgrades: boolean, canBuildTier: boolean, requiresRepair: boolean): void;
    showRepairButton(): void;
    hideRepairButton(): void;
    showRepairContainer(): void;
    hideRepairContainer(): void;
    showBuildButton(): void;
    hideBuildButton(): void;
    showUpgradesToContainer(): void;
    hideUpgradesToContainer(): void;
    showBuildRequirements(): void;
    hideBuildRequirements(): void;
    createTotalElement(media: string, total: number): string;
    updateBuildingTotals(building: TownshipBuilding, township: Township): void;
    updateResourceTotals(building: TownshipBuilding, township: Township): void;
    updateModifierTotals(building: TownshipBuilding): void;
    updateBuildingProgress(building: TownshipBuilding, biome: TownshipBiome | undefined, township: Township): void;
    updateBuildingProgressText(building: TownshipBuilding, biome: TownshipBiome | undefined): void;
    updateBuildingEfficiency(building: TownshipBuilding, township: Township): void;
    addGlow(): void;
    removeGlow(): void;
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
    itemName: HTMLSpanElement;
    itemDescription: HTMLSpanElement;
    convertQuantity: HTMLElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    getLockedTooltip(conversion: TownshipItemConversion): string;
    getTooltip(resource: TownshipResource, conversion: TownshipItemConversion): string;
    getItemContents(item: AnyItem): string;
    getItemDescription(item: AnyItem): string;
    createConvertToSwal(resource: TownshipResource, conversion: TownshipItemConversion, township: Township): void;
    createConvertFromSwal(resource: TownshipResource, conversion: TownshipItemConversion, township: Township): void;
    setItemToResource(resource: TownshipResource, conversion: TownshipItemConversion, township: Township): void;
    updateConvertRatio(resource: TownshipResource, conversion: TownshipItemConversion, township: Township): void;
    updateConvertToRatio(resource: TownshipResource, item: AnyItem, township: Township): void;
    updateConvertFromRatio(resource: TownshipResource, conversion: TownshipItemConversion, township: Township): void;
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
    btnGroupNumber: HTMLDivElement;
    btnGroupPercent: HTMLDivElement;
    btnNumber: HTMLButtonElement;
    btnPercent: HTMLButtonElement;
    inputQty: HTMLInputElement;
    itemContents: HTMLDivElement;
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
    setItemContents(contents: string): void;
    showItemContents(): void;
    hideItemContents(): void;
}
declare class TownshipWorshipSelectButtonElement extends HTMLElement {
    _content: DocumentFragment;
    selectButton: HTMLButtonElement;
    worshipName: HTMLSpanElement;
    worshipDescription: HTMLElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    setWorship(worship: TownshipWorship, township: Township): void;
    setSelected(): void;
    setUnselected(): void;
    setLocked(worship: TownshipWorship): void;
    setUnlocked(worship: TownshipWorship): void;
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
