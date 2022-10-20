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
    private bonfireTimer;
    protected readonly baseAshChance = 20;
    protected readonly baseStardustChance = 1;
    protected readonly baseCharcoalChance = 1;
    protected readonly _media = "assets/media/skills/firemaking/firemaking.svg";
    modifiers: MappedModifiers;
    protected getTotalUnlockedMasteryActions(): number;
    renderQueue: FiremakingRenderQueue;
    protected get noCostsMessage(): string;
    protected get actionInterval(): number;
    protected get masteryModifiedInterval(): number;
    protected get actionLevel(): number;
    protected get masteryAction(): FiremakingLog;
    private selectedRecipe?;
    private get activeRecipe();
    private litBonfireRecipe?;
    private get activeBonfire();
    get isBonfireActive(): boolean;
    get isLogSelected(): boolean;
    get generousFireSpiritChance(): number;
    private get coalChance();
    private get diamondChance();
    private get bonfireBonusXP();
    get ashChance(): number;
    get charcoalChance(): number;
    get ashQty(): number;
    protected getStardustChance(log: FiremakingLog): number;
    private coalItem?;
    private diamondItem?;
    private ashItem?;
    private fireSpiritItem?;
    private charcoalItem?;
    /** If the bear devil synergy should be active */
    private get isBearDevilActive();
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FiremakingSkillData): void;
    postDataRegistration(): void;
    protected getPercentageIntervalModifier(action: FiremakingLog): number;
    getMasteryXPModifier(action: FiremakingLog): number;
    private computeProvidedStats;
    onLoad(): void;
    onBankLogChange(): void;
    onModifierChange(): void;
    protected onMasteryLevelUp(action: FiremakingLog, oldLevel: number, newLevel: number): void;
    protected onMasteryPoolBonusChange(oldBonusLevel: number, newBonusLevel: number): void;
    onEquipmentChange(): void;
    onPageChange(): void;
    localize(): void;
    /** Callback function for when burn button is pressed */
    burnLog(): void;
    activeTick(): void;
    getErrorLog(): string;
    protected getCurrentRecipeCosts(): Costs;
    protected getFiremakingGPMultiplier(): number;
    getXPModifier(masteryAction?: FiremakingLog): number;
    protected recordCostConsumptionStats(costs: Costs): void;
    protected recordCostPreservationStats(costs: Costs): void;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    protected endBonFire(): void;
    lightBonfire(): void;
    protected resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    selectLog(recipeToSelect: FiremakingLog): void;
    render(): void;
    private renderBonfireStatus;
    private renderFireProgress;
    private renderBonfireProgress;
    private renderSelectedLog;
    private renderSelectedLogQty;
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
}
