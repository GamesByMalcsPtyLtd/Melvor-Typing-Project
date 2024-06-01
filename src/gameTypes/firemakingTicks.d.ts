interface FiremakingLogData extends BasicSkillRecipeData {
    readonly logID: string;
    readonly baseInterval: number;
    readonly primaryProducts?: string[];
    readonly secondaryProducts?: string[];
    readonly baseBonfireInterval: number;
    readonly bonfireXPBonus: number;
    readonly bonfireAXPBonus?: number;
    readonly bonfireCost?: number;
    readonly oilItemIDs?: string[];
}
interface FiremakingLogModificationData extends BasicSkillRecipeModificationData {
    logID?: string;
    baseInterval?: number;
    primaryProducts?: {
        add?: string[];
        remove?: string[];
    };
    secondaryProducts?: {
        add?: string[];
        remove?: string[];
    };
    baseBonfireInterval?: number;
    bonfireXPBonus?: number;
    bonfireAXPBonus?: number;
    oilItemIDs?: {
        add?: string[];
        remove?: string[];
    };
}
declare class FiremakingLog extends BasicSkillRecipe {
    get name(): string;
    get media(): string;
    log: AnyItem;
    baseInterval: number;
    /** The primary products obtainable from this log */
    primaryProducts: Item[];
    /** The secondary products obtainable from this log */
    secondaryProducts: Item[];
    baseBonfireInterval: number;
    baseOilInterval: number;
    bonfireXPBonus: number;
    bonfireAXPBonus?: number;
    bonfireCost: number;
    oilCost: number;
    oilItems: AnyItem[];
    /** If this log has an "Abyssal Bonfire" that does not benefit from normal bonuses conferred to bonfires */
    get hasAbyssalBonfire(): boolean;
    constructor(namespace: DataNamespace, data: FiremakingLogData, game: Game);
    applyDataModification(data: FiremakingLogModificationData, game: Game): void;
}
interface FiremakingProductScaling {
    type: 'BaseInterval' | 'AbyssalLevel';
    factor: number;
}
interface FiremakingProductData extends ItemChanceData {
    quantity: number;
    quantityScaling?: FiremakingProductScaling;
}
declare class FiremakingProduct {
    item: Item;
    chance: number;
    quantity: number;
    quantityScaling?: FiremakingProductScaling;
    constructor(data: FiremakingProductData, game: Game);
}
interface FiremakingSkillData extends MasterySkillData {
    logs?: FiremakingLogData[];
    primaryProducts?: FiremakingProductData[];
    secondaryProducts?: FiremakingProductData[];
    defaultPrimaryProducts?: string[];
    defaultSecondaryProducts?: string[];
}
interface FiremakingModificationData extends MasterySkillModificationData {
    logs?: FiremakingLogModificationData[];
}
declare type FiremakingEvents = {
    action: FiremakingActionEvent;
    bonfireLit: BonfireLitEvent;
} & SkillWithMasteryEvents;
declare class Firemaking extends CraftingSkill<FiremakingLog, FiremakingSkillData, FiremakingEvents, FiremakingModificationData> {
    bonfireTimer: Timer;
    oilTimer: Timer;
    readonly _media = Assets.Firemaking;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: FiremakingLog): boolean;
    renderQueue: FiremakingRenderQueue;
    get noCostsMessage(): string;
    get actionInterval(): number;
    get masteryModifiedInterval(): number;
    get actionLevel(): number;
    get masteryAction(): FiremakingLog;
    selectedRecipe?: FiremakingLog;
    get activeRecipe(): FiremakingLog;
    litBonfireRecipe?: FiremakingLog;
    get activeBonfire(): FiremakingLog;
    get isBonfireActive(): boolean;
    selectedOil?: FiremakingOilItem;
    oiledLogRecipe?: FiremakingOilItem;
    get activeOil(): FiremakingOilItem;
    get isOilingOfMyLogsActive(): boolean;
    get isLogSelected(): boolean;
    get isOilSelected(): boolean;
    get bonfireBonusXP(): number;
    get bonfireBonusAXP(): number;
    get hasAbyssalBonfireActive(): boolean;
    get hasAbyssalBonfireLogSelected(): boolean;
    /** Information on the primary products from burning logs */
    readonly primaryProducts: Map<Item, FiremakingProduct>;
    /** Information on the secondary products from burning logs */
    readonly secondaryProducts: Map<Item, FiremakingProduct>;
    /** The default primary products logs should have */
    readonly defaultPrimaryProducts: Item[];
    /** The default secondary products logs should have */
    readonly defaultSecondaryProducts: Item[];
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FiremakingSkillData): void;
    modifyData(data: FiremakingModificationData): void;
    postDataRegistration(): void;
    onLoad(): void;
    onModifierChange(): void;
    onMasteryLevelUp(action: FiremakingLog, oldLevel: number, newLevel: number): void;
    onEquipmentChange(): void;
    onPageChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    localize(): void;
    /** Callback function for when burn button is pressed */
    burnLog(): void;
    activeTick(): void;
    getErrorLog(): string;
    onStop(): void;
    getCurrentRecipeCosts(): Costs;
    recordCostConsumptionStats(costs: Costs): void;
    recordCostPreservationStats(costs: Costs): void;
    computeProductInfo(item: Item, action: FiremakingLog, product?: FiremakingProduct): {
        chance: number;
        quantity: number;
    };
    getPrimaryProductInfo(item: Item, action: FiremakingLog): {
        chance: number;
        quantity: number;
    };
    getSecondaryProductInfo(item: Item, action: FiremakingLog): {
        chance: number;
        quantity: number;
    };
    addProvidedStats(): void;
    preAction(): void;
    /** Modifies the quantity given by a secondary product */
    modifySecondaryProductQuantity(item: Item, quantity: number, action: NamedObject, query: ModifierQuery): number;
    get actionRewards(): Rewards;
    postAction(): void;
    stopBonfire(): void;
    endBonFire(): void;
    getBonfireInterval(recipe: FiremakingLog): number;
    lightBonfire(): void;
    stopOilingMyLog(): void;
    endOilingOfMyLog(): void;
    onOilingOfLogsStatusChange(): void;
    getOilingOfMyLogInterval(oil: FiremakingOilItem): number;
    oilMyLog(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    selectLog(recipe: FiremakingLog): void;
    selectOil(oil: FiremakingOilItem): void;
    render(): void;
    renderBonfireStatus(): void;
    renderBonfireQuantity(): void;
    renderFireProgress(): void;
    renderBonfireProgress(): void;
    renderOilProgress(): void;
    renderOilStatus(): void;
    renderSelectedLog(): void;
    renderSelectedOil(): void;
    renderLogQuantity(): void;
    renderLogSelection(): void;
    renderOilQuantities(): void;
    renderOilSelection(): void;
    renderLogInfo(): void;
    renderOilInfo(): void;
    getBestMasteryRealm(): Realm;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
}
declare class FiremakingRenderQueue extends GatheringSkillRenderQueue<FiremakingLog> {
    selectedLog: boolean;
    bonfireProgress: boolean;
    bonfireStatus: boolean;
    bonfireQty: boolean;
    logQty: boolean;
    logInfo: boolean;
    selectedOil: boolean;
    oilQty: boolean;
    oilProgress: boolean;
    oilInfo: boolean;
    oilStatus: boolean;
}
