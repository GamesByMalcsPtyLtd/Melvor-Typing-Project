interface FiremakingLogData extends BasicSkillRecipeData {
    readonly logID: string;
    readonly baseInterval: number;
    readonly baseBonfireInterval: number;
    readonly bonfireXPBonus: number;
}
declare class FiremakingLog extends BasicSkillRecipe {
    get name(): string;
    get media(): string;
    log: AnyItem;
    baseInterval: number;
    baseBonfireInterval: number;
    bonfireXPBonus: number;
    constructor(namespace: DataNamespace, data: FiremakingLogData, game: Game);
}
interface FiremakingSkillData extends MasterySkillData {
    logs?: FiremakingLogData[];
    coalItemID?: string;
    diamondItemID?: string;
    ashItemID?: string;
    fireSpiritItemID?: string;
    charcoalItemID?: string;
}
declare class Firemaking extends CraftingSkill<FiremakingLog, FiremakingSkillData> implements StatProvider {
    bonfireTimer: Timer;
    readonly baseAshChance = 20;
    readonly baseStardustChance = 1;
    readonly baseCharcoalChance = 1;
    readonly _media = "assets/media/skills/firemaking/firemaking.svg";
    modifiers: MappedModifiers;
    getTotalUnlockedMasteryActions(): number;
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
    get isLogSelected(): boolean;
    get generousFireSpiritChance(): number;
    get coalChance(): number;
    get diamondChance(): number;
    get bonfireBonusXP(): number;
    get ashChance(): number;
    get charcoalChance(): number;
    get ashQty(): number;
    getStardustChance(log: FiremakingLog): number;
    coalItem?: AnyItem;
    diamondItem?: AnyItem;
    ashItem?: AnyItem;
    fireSpiritItem?: AnyItem;
    charcoalItem?: AnyItem;
    /** If the bear devil synergy should be active */
    get isBearDevilActive(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FiremakingSkillData): void;
    postDataRegistration(): void;
    getPercentageIntervalModifier(action: FiremakingLog): number;
    getMasteryXPModifier(action: FiremakingLog): number;
    computeProvidedStats(updatePlayer?: boolean): void;
    onLoad(): void;
    onModifierChange(): void;
    onMasteryLevelUp(action: FiremakingLog, oldLevel: number, newLevel: number): void;
    onMasteryPoolBonusChange(oldBonusLevel: number, newBonusLevel: number): void;
    onEquipmentChange(): void;
    onPageChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    localize(): void;
    /** Callback function for when burn button is pressed */
    burnLog(): void;
    activeTick(): void;
    getErrorLog(): string;
    getCurrentRecipeCosts(): Costs;
    getFiremakingGPMultiplier(): number;
    getXPModifier(masteryAction?: FiremakingLog): number;
    recordCostConsumptionStats(costs: Costs): void;
    recordCostPreservationStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    endBonFire(): void;
    lightBonfire(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    selectLog(recipeToSelect: FiremakingLog): void;
    render(): void;
    renderBonfireStatus(): void;
    renderFireProgress(): void;
    renderBonfireProgress(): void;
    renderSelectedLog(): void;
    renderSelectedLogQty(): void;
    renderLogSelection(): void;
}
declare class FiremakingRenderQueue extends GatheringSkillRenderQueue<FiremakingLog> {
    selectedLog: boolean;
    bonfireProgress: boolean;
    bonfireStatus: boolean;
    logQty: boolean;
}
interface FiremakingMenu {
    fireProgress: ProgressBar;
    bonfireProgress: ProgressBar;
    masteryDisplay: MasteryDisplay;
    recipeSelect: Map<FiremakingLog, {
        link: HTMLAnchorElement;
        name: HTMLSpanElement;
    }>;
    grants: HTMLDivElement;
    xpIcon: XPIcon;
    masteryIcon: MasteryXPIcon;
    masteryPoolIcon: MasteryPoolIcon;
    intervalIcon: IntervalIcon;
}
