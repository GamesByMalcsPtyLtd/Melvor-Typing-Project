declare class TownshipResourceDisplayElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    setPriorityButton: HTMLLIElement;
    resourceIcon: HTMLImageElement;
    resourceAmount: HTMLElement;
    resourceRate: HTMLSpanElement;
    storageOverlayDIv: HTMLDivElement;
    storageOverlayImg: HTMLImageElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setResource(resource: TownshipResource, township: Township): void;
    updateStorageIcon(resource: TownshipResource): void;
    updateResourceAmount(resource: TownshipResource, township: Township): void;
    updateResourceTextColour(resource: TownshipResource, township: Township): void;
    updateResourceRate(resource: TownshipResource): void;
    getTooltipContent(resource: TownshipResource, township: Township): string;
}
declare class TownshipTownBiomeSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    selectButton: HTMLElement;
    biomeName: HTMLSpanElement;
    biomeProgress: HTMLElement;
    biomeImage: HTMLImageElement;
    biomeProgressBar: HTMLDivElement;
    levelRequirement: HTMLDivElement;
    popRequirement: HTMLDivElement;
    abyssalLevelRequirement: HTMLDivElement;
    fortificationRequirement: HTMLDivElement;
    buildAvailable: HTMLSpanElement;
    otherRequirements: HTMLUListElement;
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
declare class TownshipBuildingSummaryElement extends HTMLElement implements CustomElement {
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
    abyssalLevelRequirement: HTMLDivElement;
    fortificationRequirement: HTMLDivElement;
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
declare class BuildingRequirementsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    otherRequirements: HTMLUListElement;
    levelRequirement: HTMLLIElement;
    popRequirement: HTMLLIElement;
    abyssalLevelRequirement: HTMLLIElement;
    fortificationRequirement: HTMLLIElement;
    constructor();
    connectedCallback(): void;
    applyReqFormatting(req: HTMLElement, isMet: boolean): void;
    updateRequirements(building: TownshipBuilding, township: Township): void;
}
declare class BuildingInTownElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    buildingDiv: HTMLDivElement;
    buildingImage: HTMLImageElement;
    buildingName: HTMLSpanElement;
    buildingTaskIcon: HTMLImageElement;
    buildingTotals: HTMLUListElement;
    resourceOutput: HTMLDivElement;
    buildingStats: HTMLDivElement;
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
    updateStatsTotals(building: TownshipBuilding): void;
    updateBuildingProgress(building: TownshipBuilding, biome: TownshipBiome | undefined, township: Township): void;
    updateBuildingProgressText(building: TownshipBuilding, biome: TownshipBiome | undefined): void;
    updateBuildingEfficiency(building: TownshipBuilding, township: Township): void;
    addGlow(): void;
    removeGlow(): void;
}
declare class TownshipYeetElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    yeetButton: HTMLAnchorElement;
    resourceImage: HTMLImageElement;
    resourceAmount: HTMLElement;
    constructor();
    connectedCallback(): void;
    setResource(resource: TownshipResource, amount: number, township: Township): void;
}
declare class TownshipCapResourceElement extends HTMLElement implements CustomElement {
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
declare class TownshipConversionElement extends HTMLElement implements CustomElement {
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
    updateConvertToRatio(resource: TownshipResource, conversion: TownshipItemConversion, township: Township): void;
    updateConvertFromRatio(resource: TownshipResource, conversion: TownshipItemConversion, township: Township): void;
}
declare class TownshipConversionSwalElement extends HTMLElement implements CustomElement {
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
    setConvertButtons(resource: TownshipResource, conversion: TownshipItemConversion, type: TownshipConvertType): void;
    setConvertToQuantityInput(value: number, resource: TownshipResource, conversion: TownshipItemConversion): void;
    setConvertFromQuantityInput(value: number, resource: TownshipResource, conversion: TownshipItemConversion): void;
    updateInputValue(): void;
    setItemContents(contents: string): void;
    showItemContents(): void;
    hideItemContents(): void;
}
declare class TownshipWorshipSelectButtonElement extends HTMLElement implements CustomElement {
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
declare class TownshipWorshipSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    modifierDiv: HTMLElement;
    modifierContainer: HTMLElement;
    constructor();
    connectedCallback(): void;
    setWorship(worship: TownshipWorship, township: Township): void;
}
declare class TownshipConversionJumpToElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    resourceIcon: HTMLImageElement;
    resourceList: HTMLLIElement;
    constructor();
    connectedCallback(): void;
    setIcon(resource: TownshipResource): void;
}
declare class TownshipTaskCategoryElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    button: HTMLAnchorElement;
    container: HTMLDivElement;
    categoryImage: HTMLImageElement;
    categoryName: HTMLSpanElement;
    completionIcon: HTMLElement;
    completionCount: HTMLHeadingElement;
    progressBar: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCategory(category: TownshipTaskCategory, callback: VoidFunction): void;
    updateTaskReady(category: TownshipTaskCategory): void;
    updateCompletedTasks(tasks: TownshipTasks, category: TownshipTaskCategory): void;
}
declare class TownshipCasualTaskCategoryElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    button: HTMLAnchorElement;
    completionIcon: HTMLElement;
    tasksRemaining: HTMLHeadingElement;
    constructor();
    connectedCallback(): void;
    setCallback(callback: VoidFunction): void;
    updateTaskReady(casualTasks: TownshipCasualTasks): void;
    updateTasksRemaining(casualTasks: TownshipCasualTasks): void;
}
declare class TownshipTaskGoalElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    description: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setComplete(isComplete: boolean): void;
    setGoal(goal: ITownshipTaskGoal): void;
}
declare class TownshipTaskRewardElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    container: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCurrencyReward(currency: Currency, quantity: number): void;
    setItemReward(item: Item, quantity: number): void;
    setSkillXPReward(skill: AnySkill, quantity: number): void;
    setTownshipResourceReward(resource: TownshipResource, quantity: number): void;
}
declare class TownshipTaskElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    header: HTMLDivElement;
    taskName: HTMLHeadingElement;
    realmContainer: HTMLDivElement;
    realmImage: HTMLImageElement;
    taskDescription: HTMLHeadingElement;
    goalContainer: HTMLDivElement;
    rewardsContainer: HTMLDivElement;
    completeButton: HTMLButtonElement;
    goals: TownshipTaskGoalElement[];
    rewards: TownshipTaskRewardElement[];
    bgClass?: string;
    constructor();
    connectedCallback(): void;
    setTask(game: Game, task: TownshipTask): void;
    updateGoals(task: TownshipTask): void;
    createTaskGoals(goals: ITownshipTaskGoal[]): void;
    createTaskRewards(task: TownshipTask): void;
}
declare class TownshipCasualTaskElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    skipButton: HTMLAnchorElement;
    taskDescription: HTMLHeadingElement;
    goalContainer: HTMLDivElement;
    rewardsContainer: HTMLDivElement;
    completeButton: HTMLButtonElement;
    goals: TownshipTaskGoalElement[];
    rewards: TownshipTaskRewardElement[];
    constructor();
    connectedCallback(): void;
    setTask(casualTasks: TownshipCasualTasks, task: TownshipCasualTask): void;
    updateGoals(task: TownshipCasualTask): void;
    createTaskGoals(goals: ITownshipTaskGoal[]): void;
    createTaskRewards(casualTasks: TownshipCasualTasks, task: TownshipCasualTask): void;
}
declare const enum TownshipTasksMenuElementMode {
    AllCategories = 0,
    TaskCategory = 1,
    CasualTasks = 2
}
declare class TownshipTasksMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    casualTasksCompleted: HTMLLIElement;
    nextCasualTaskTimer: HTMLLIElement;
    buttonContainer: HTMLDivElement;
    viewAllButton: HTMLButtonElement;
    casualTaskButton: HTMLButtonElement;
    categoryContainer: HTMLDivElement;
    casualTaskCategory: TownshipCasualTaskCategoryElement;
    taskContainer: HTMLDivElement;
    casualTaskContainer: HTMLDivElement;
    realmCounts: Map<Realm, HTMLSpanElement>;
    categoryMap: Map<TownshipTaskCategory, TownshipTaskCategoryElement>;
    taskElems: TownshipTaskElement[];
    taskMap: Map<TownshipTask, TownshipTaskElement>;
    casualTaskElems: TownshipCasualTaskElement[];
    casualTaskMap: Map<TownshipCasualTask, TownshipCasualTaskElement>;
    mode: TownshipTasksMenuElementMode;
    constructor();
    connectedCallback(): void;
    initialize(game: Game, tasks: TownshipTasks): void;
    showAllCategories(): void;
    showCategoryTasks(game: Game, tasks: TownshipTasks, category: TownshipTaskCategory): void;
    showCasualTasks(tasks: TownshipTasks, casualTasks: TownshipCasualTasks): void;
    updateCasualTaskTimer(casualTasks: TownshipCasualTasks): void;
    updateCasualTasksCompleted(casualTasks: TownshipCasualTasks): void;
    updateCasualTasksRemaining(casualTasks: TownshipCasualTasks): void;
    setCasualTasks(casualTasks: TownshipCasualTasks): void;
    updateRealmCompletion(tasks: TownshipTasks, realm: Realm): void;
    updateCategoryCompletion(tasks: TownshipTasks, category: TownshipTaskCategory): void;
    updateTaskGoals(task: TownshipTask): void;
    updateCategoryReady(category: TownshipTaskCategory): void;
    updateCasualTaskGoals(task: TownshipCasualTask): void;
    updateCasualReady(casualTasks: TownshipCasualTasks): void;
    removeTask(task: TownshipTask): void;
    removeCasualTask(task: TownshipCasualTask): void;
}
