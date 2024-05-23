interface FishData extends SingleProductRecipeData {
    strengthXP: number;
    baseMinInterval: number;
    baseMaxInterval: number;
}
interface FishModificationData extends SingleProductRecipeModificationData {
    strengthXP?: number;
    baseMinInterval?: number;
    baseMaxInterval?: number;
}
declare class Fish extends SingleProductRecipe {
    strengthXP: number;
    baseMinInterval: number;
    baseMaxInterval: number;
    area?: FishingArea;
    constructor(namespace: DataNamespace, data: FishData, game: Game);
    applyDataModification(data: FishModificationData, game: Game): void;
}
interface FishingAreaData extends RealmedObjectData {
    name: string;
    description?: string;
    fishChance: number;
    junkChance: number;
    specialChance: number;
    fishIDs: string[];
    /** ID of item required to be equipped to access area */
    requiredItemID?: string;
    /** Area requires the message in a bottle to be read to access */
    isSecret?: boolean;
    /** Optional. If present the Cartography Point of Interest requirement that must be met to to access the area. */
    poiRequirement?: CartographyPOIDiscoveryRequirementData;
}
declare class FishingArea extends RealmedObject implements SoftDataDependant<FishingAreaData> {
    get name(): string;
    get description(): string | undefined;
    fishChance: number;
    junkChance: number;
    specialChance: number;
    fish: Fish[];
    requiredItem?: EquipmentItem;
    isSecret: boolean;
    poiRequirement?: CartographyPOIDiscoveryRequirement;
    _name: string;
    _description?: string;
    constructor(namespace: DataNamespace, data: FishingAreaData, fishing: Fishing, game: Game);
    registerSoftDependencies(data: FishingAreaData, game: Game): void;
}
interface FishingSkillData extends MasterySkillData {
    fish?: FishData[];
    areas?: FishingAreaData[];
    junkItemIDs?: string[];
    specialItems?: {
        realmID: string;
        drops: DropTableData[];
    }[];
    easterEgg?: {
        originalID: string;
        equippedID: string;
        rewardID: string;
    };
    fishingContestFish?: FishingContestFishData[];
}
interface FishingModificationData extends MasterySkillModificationData {
    fish?: FishModificationData[];
}
interface FishingContestFishData {
    fishID: string;
    level: number;
    minLength: number;
    maxLength: number;
}
interface FishingContestFish {
    fish: AnyItem;
    level: number;
    minLength: number;
    maxLength: number;
}
interface FishingContestResult {
    length: number;
    weight: number;
}
interface FishingContestLeaderboardEntry {
    isPlayer: boolean;
    name: string;
    bestResult: FishingContestResult;
}
declare type FishingEvents = {
    action: FishingActionEvent;
} & SkillWithMasteryEvents;
declare class Fishing extends GatheringSkill<Fish, FishingSkillData, FishingEvents, FishingModificationData> {
    readonly _media = Assets.Fishing;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: Fish): boolean;
    renderQueue: FishingRenderQueue;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): Fish;
    /** If the player has read the message in a bottle */
    secretAreaUnlocked: boolean;
    /** The fish that are currently selected in each area */
    selectedAreaFish: Map<FishingArea, Fish>;
    activeFishingArea?: FishingArea;
    /** Areas which the user has decided to hide */
    hiddenAreas: Set<FishingArea>;
    contest?: FishingContest;
    /** The fish that is currently selected and being fished */
    get activeFish(): Fish;
    areas: NamespaceRegistry<FishingArea>;
    junkItems: AnyItem[];
    specialItemTables: Map<Realm, DropTable>;
    easterEgg?: {
        original: AnyItem;
        equipped: EquipmentItem;
        reward: AnyItem;
    };
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FishingSkillData): void;
    modifyData(data: FishingModificationData): void;
    postDataRegistration(): void;
    unlockSecretArea(): void;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    /** Gets the minimum interval of a fish */
    getMinFishInterval(fish: Fish): number;
    /** Gets the maximum interval of a fish */
    getMaxFishInterval(fish: Fish): number;
    getAreaChances(area: FishingArea): FishingAreaChances;
    applyPrimaryProductMultipliers(item: Item, quantity: number, action: NamedObject, query: ModifierQuery): number;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    get masteryModifiedInterval(): number;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    getErrorLog(): string;
    onLoad(): void;
    onStop(): void;
    onAncientRelicUnlock(): void;
    onRealmChange(): void;
    /** Callback function for when the start button of an area is clicked */
    onAreaStartButtonClick(area: FishingArea): void;
    renderHiddenAreas(): void;
    /** Callback function for when the fishing area menu header is clicked */
    onAreaHeaderClick(area: FishingArea): void;
    /** Callback function for when a fish is selected */
    onAreaFishSelection(area: FishingArea, fish: Fish): void;
    render(): void;
    /** Renders the fish in areas that have one selected */
    renderSelectedAreaFish(): void;
    renderSelectedFishRates(): void;
    /** Renders the fish chances of all areas */
    renderAreaChances(): void;
    renderAreaButtons(): void;
    renderAreaUnlock(): void;
    renderActiveArea(): void;
    encode(writer: SaveWriter): SaveWriter;
    resetActionState(): void;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    convertFromOldFormat(savegame: NewSaveGame): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineTuple, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
}
declare class FishingAreaChances {
    fish: number;
    special: number;
    junk: number;
    setChancesFromArea(area: FishingArea): void;
    /** Adds bonus special chance, first taking from junk chance, then from fish chance */
    addBonusSpecialChance(amount: number): void;
    shiftFishToSpecial(amount: number): void;
    shiftJunkToFish(amount: number): void;
    rollForRewardType(): FishingRewardType;
}
declare class FishingContest implements EncodableObject {
    fishing: Fishing;
    readonly MAX_CONTESTANTS = 10;
    /** Fishing Contest Data. If not undefined - contest is available */
    availableFish: FishingContestFish[];
    /** Fishing contest data variables */
    menu?: FishingContestMenuElement;
    isActive: boolean;
    activeFish?: FishingContestFish;
    playerResults: FishingContestResult[];
    contestantLeaderboard: FishingContestLeaderboardEntry[];
    actionsRemaining: number;
    difficulties: string[];
    currentDifficulty: number;
    completionTracker: boolean[];
    masteryTracker: boolean[];
    renderQueue: {
        status: boolean;
        results: boolean;
        leaderboard: boolean;
        remainingActions: boolean;
    };
    /** Handler function for the fishing action event */
    actionHandler: Handler<FishingActionEvent>;
    constructor(fishing: Fishing);
    registerData(data: FishingContestFishData[]): void;
    onLoad(): void;
    startFishingContest(): void;
    stopFishingContest(forceStop: boolean): void;
    setFishingContestDifficulty(difficulty: number): void;
    finalizeFishingContest(): void;
    showFishingContestResults(completion: boolean, mastered: boolean): void;
    generateFishingContestResultsHTML(completion: boolean, mastered: boolean): string;
    generateNewFishingContestLeaderboard(): void;
    getBestFishingContestResultForPlayer(): FishingContestResult;
    getBestFishingContestResultForContestant(index: number): FishingContestResult;
    decideFishingContestFish(): void;
    /** Handler for Fishing action event, when contest is active */
    onFishingAction(e: FishingActionEvent): void;
    peformPlayerFishingContestAction(): void;
    peformContestantFishingContestActions(): void;
    updateBestFishResultForPlayer(result: FishingContestResult): void;
    updateBestFishResultForContestant(result: FishingContestResult, index: number): void;
    getMinLengthModifierForContestant(): number;
    getMaxLengthModifierForContestant(): number;
    rollFishResult(fish: FishingContestFish, isPlayer: boolean): FishingContestResult;
    getFishRanking(result: FishingContestResult): string;
    render(): void;
    renderStatus(): void;
    renderResults(): void;
    renderLeaderboard(): void;
    renderRemainingActions(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    static dumpData(reader: SaveWriter): void;
}
declare enum FishingRewardType {
    Fish = 0,
    Junk = 1,
    Special = 2
}
declare class FishingRenderQueue extends GatheringSkillRenderQueue<Fish> {
    /** Updates the fish specific information for an area */
    selectedAreaFish: boolean;
    /** Updates only the rates of the selected area fish */
    selectedAreaFishRates: boolean;
    /** Updates the chances for all areas */
    areaChances: boolean;
    /** Updates the display of areas based on unlock staus */
    areaUnlock: boolean;
    /** Updates the individual fish buttons of all area menus */
    areaButtons: boolean;
    /** Updates the status of the active fish/start button */
    activeArea: boolean;
}
