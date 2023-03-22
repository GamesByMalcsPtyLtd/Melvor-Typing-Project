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
}
declare class FishingArea extends NamespacedObject {
    get name(): string;
    get description(): string | undefined;
    fishChance: number;
    junkChance: number;
    specialChance: number;
    fish: Fish[];
    requiredItem?: EquipmentItem;
    isSecret: boolean;
    _name: string;
    _description?: string;
    constructor(namespace: DataNamespace, data: FishingAreaData, fishing: Fishing, game: Game);
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
}
declare class Fishing extends GatheringSkill<Fish, FishingSkillData> {
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
