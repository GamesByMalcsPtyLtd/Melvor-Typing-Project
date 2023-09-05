interface FishData extends SingleProductRecipeData {
    strengthXP: number;
    baseMinInterval: number;
    baseMaxInterval: number;
}
declare class Fish extends SingleProductRecipe {
    strengthXP: number;
    baseMinInterval: number;
    baseMaxInterval: number;
    constructor(namespace: DataNamespace, data: FishData, game: Game);
}
interface FishingAreaData extends IDData {
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
declare class FishingArea extends NamespacedObject implements SoftDataDependant<FishingAreaData> {
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
    specialItems?: DropTableData[];
    easterEgg?: {
        originalID: string;
        equippedID: string;
        rewardID: string;
    };
    lostChestItem?: string;
    fishingContestFish?: FishingContestFishData[];
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
};
declare class Fishing extends GatheringSkill<Fish, FishingSkillData> implements IGameEventEmitter<FishingEvents> {
    _events: import("mitt").Emitter<FishingEvents>;
    on: {
        <Key extends "action">(type: Key, handler: import("mitt").Handler<FishingEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<FishingEvents>): void;
    };
    off: {
        <Key extends "action">(type: Key, handler?: import("mitt").Handler<FishingEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<FishingEvents>): void;
    };
    readonly _media = "assets/media/skills/fishing/fishing.svg";
    getTotalUnlockedMasteryActions(): number;
    renderQueue: FishingRenderQueue;
    get chanceForLostChest(): number;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): Fish;
    get chanceForOneExtraFish(): number;
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
    specialItems: DropTable;
    easterEgg?: {
        original: AnyItem;
        equipped: EquipmentItem;
        reward: AnyItem;
    };
    lostChestItem?: AnyItem;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FishingSkillData): void;
    postDataRegistration(): void;
    unlockSecretArea(): void;
    /** Gets the minimum interval of a fish */
    getMinFishInterval(fish: Fish): number;
    /** Gets the maximum interval of a fish */
    getMaxFishInterval(fish: Fish): number;
    getUncappedDoublingChance(action: Fish): number;
    getMasteryXPModifier(action: Fish): number;
    getAreaChances(area: FishingArea): FishingAreaChances;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    get masteryModifiedInterval(): number;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    onLoad(): void;
    onStop(): void;
    onAncientRelicUnlock(): void;
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
    menu?: FishingContestMenu;
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
