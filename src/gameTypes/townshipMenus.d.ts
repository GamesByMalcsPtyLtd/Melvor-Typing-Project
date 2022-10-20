declare class TownshipResourceDisplayElement extends HTMLElement {
    private _content;
    private setPriorityButton;
    private resourceIcon;
    private resourceAmount;
    private resourceRate;
    private workerBadge;
    private assignedWorkers;
    private tooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setResource(resource: TownshipResource, township: Township): void;
    updateResourceAmount(resource: TownshipResource): void;
    updateResourceRate(resource: TownshipResource, township: Township): void;
    updateAssignedWorkers(job: TownshipJob): void;
    highlightButton(): void;
    unhighlightButton(): void;
    private getTooltipContent;
    private getResourcePerTickUsageSpan;
    private getResourcePerTickGainSpan;
}
declare class TownshipTownBiomeSelectElement extends HTMLElement {
    private _content;
    private selectButton;
    private biomeName;
    private biomeCount;
    constructor();
    connectedCallback(): void;
    setBiome(biome: TownshipBiome | undefined, township: Township): void;
    updateBuildingCount(biome: TownshipBiome, township: Township): void;
    highlight(biome: TownshipBiome | undefined): void;
    unhighlight(biome: TownshipBiome | undefined): void;
}
declare class TownshipBuildingSummaryElement extends HTMLElement {
    private _content;
    private image;
    private name;
    private count;
    private provides;
    private resourceOutput;
    private resourceUsage;
    private modifiers;
    private extraRequirements;
    private levelRequirement;
    private popRequirement;
    constructor();
    connectedCallback(): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    setBuildingWithoutQuantity(building: TownshipBuilding, township: Township): void;
    updateNameQuantity(building: TownshipBuilding, quantity: number): void;
    updateBuildingCount(count: number): void;
    private createProvidesElement;
    updateBuildingProvides(building: TownshipBuilding, township: Township, qty?: number): void;
    updateResourceOutput(building: TownshipBuilding, township: Township, qty?: number): void;
    updateResourceUsage(building: TownshipBuilding, township: Township, qty?: number): void;
    updateModifiers(building: TownshipBuilding): void;
    private applyReqFormatting;
    updateExtraRequirements(building: TownshipBuilding, township: Township): void;
    updateForBuildQtyChange(building: TownshipBuilding, township: Township): void;
    updateForBaseBuildQty(building: TownshipBuilding, township: Township): void;
}
declare class BuildingInTownElement extends HTMLElement {
    private _content;
    private buildingImage;
    private buildingName;
    private buildingCount;
    private destroyContainer;
    private destroyButton;
    private destroyQtyOptions;
    private buildingTotals;
    private buildingResources;
    private resourceOutput;
    private resourceUsage;
    private buildingModifiers;
    private upgradesToDivider;
    private selectBiomeWarning;
    private upgradesToContainer;
    private upgradesToName;
    private upgradesToCosts;
    private upgradeButton;
    private upgradeQtyOptions;
    private upgradesToTooltip?;
    constructor();
    connectedCallback(): void;
    initQtyDropdowns(townshipUI: TownshipUI): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    updateBuildingCount(count: number): void;
    updateBuildingUpgradeCosts(upgradesTo: TownshipBuilding, township: Township): void;
    toggleBuildOptions(show: boolean, hasUpgrade: boolean): void;
    private createTotalElement;
    updateBuildingTotals(building: TownshipBuilding, township: Township): void;
    updateResourceTotals(building: TownshipBuilding, township: Township): void;
    setResourceUsage(building: TownshipBuilding, townshipUI: TownshipUI): void;
    updateModifierTotals(building: TownshipBuilding): void;
}
declare class TownshipBuildBiomeSelectElement extends HTMLElement {
    private _content;
    private selectButton;
    private biomeName;
    private biomesRemaining;
    constructor();
    connectedCallback(): void;
    setBiome(biome: TownshipBiome, township: Township): void;
    updateBiomesRemaining(text: string): void;
    highlight(): void;
    unhighlight(): void;
}
declare class TownshipBuildingSortDropdownOptionElement extends HTMLElement {
    private _content;
    private checkbox;
    private label;
    constructor();
    connectedCallback(): void;
    configure(labelText: string, callback: VoidFunction, id: string): void;
    setChecked(isChecked: boolean): void;
}
declare class TownshipBuildingSortDropdownElement extends HTMLElement {
    private _content;
    private optionsContainer;
    constructor();
    connectedCallback(): void;
    populateOptions(callback: (category: keyof BuildingSortList, index: number) => void): void;
    private addOption;
}
declare class TownshipBuildBuildingElement extends HTMLElement {
    private _content;
    private buildButton;
    private buildingSummary;
    private buildingCosts;
    constructor();
    connectedCallback(): void;
    setBuilding(building: TownshipBuilding, township: Township): void;
    updateResourceOutput(building: TownshipBuilding, township: Township): void;
    updateExtraRequirements(building: TownshipBuilding, township: Township): void;
    updateBuildingCosts(building: TownshipBuilding, township: Township): void;
    updateBuildingCount(building: TownshipBuilding, township: Township): void;
    updateForBuildQtyChange(building: TownshipBuilding, township: Township): void;
}
declare class TownshipYeetElement extends HTMLElement {
    private _content;
    private yeetButton;
    private resourceImage;
    private resourceAmount;
    constructor();
    connectedCallback(): void;
    setResource(resource: TownshipResource, amount: number, township: Township): void;
}
declare class TownshipConversionElement extends HTMLElement {
    private _content;
    private convertButton;
    private convertFromImage;
    private convertQuantity;
    private tooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    getTooltip(resource: TownshipResource, item: AnyItem): string;
    private createConvertToSwal;
    private createConvertFromSwal;
    setItemToResource(resource: TownshipResource, item: AnyItem, township: Township): void;
    updateConvertRatio(resource: TownshipResource, item: AnyItem, township: Township): void;
    updateConvertToRatio(resource: TownshipResource, item: AnyItem, township: Township): void;
    updateConvertFromRatio(resource: TownshipResource, item: AnyItem, township: Township): void;
}
declare class TownshipConversionSwalTemplate extends HTMLElement {
    private _content;
    private convertFromImage;
    private convertFromQuantity;
    private convertToImage;
    private convertToQuantity;
    private convertFromRatioImage;
    private convertFromRatioQuantity;
    private convertToRatioImage;
    private convertToRatioQuantity;
    private receiveImage;
    private receiveQuantity;
    private btnGroupNumber;
    private btnGroupPercent;
    private btnNumber;
    private btnPercent;
    private inputQty;
    private tooltip?;
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
}
declare class TownshipWorshipSelectButtonElement extends HTMLElement {
    private _content;
    private selectButton;
    private worshipName;
    private worshipDescription;
    constructor();
    connectedCallback(): void;
    setWorship(worship: TownshipWorship, township: Township): void;
    setSelected(): void;
    setUnselected(): void;
}
declare class TownshipWorshipSelectElement extends HTMLElement {
    private _content;
    private modifierDiv;
    private modifierContainer;
    constructor();
    connectedCallback(): void;
    setWorship(worship: TownshipWorship, township: Township): void;
}
declare class TownshipConversionJumpToElement extends HTMLElement {
    private _content;
    private resourceIcon;
    private resourceList;
    constructor();
    connectedCallback(): void;
    setIcon(resource: TownshipResource): void;
}
