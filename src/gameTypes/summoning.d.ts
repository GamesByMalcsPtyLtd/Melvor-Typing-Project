declare type SummoningTier = 1 | 2 | 3 | 4 | 5;
interface SummoningRecipeData extends SingleProductArtisanSkillRecipeData {
    markMedia: string;
    nonShardItemCosts: string[];
    tier: SummoningTier;
    skillIDs: string[];
}
declare class SummoningRecipe extends CategorizedArtisanRecipe<SkillCategory> {
    nonShardItemCosts: AnyItem[];
    tier: SummoningTier;
    skills: AnySkill[];
    get name(): string;
    get media(): string;
    get markMedia(): string;
    product: EquipmentItem;
    baseQuantity: number;
    _markMedia: string;
    constructor(namespace: DataNamespace, data: SummoningRecipeData, game: Game, skill: Summoning);
}
declare class DummySummoningRecipe extends SummoningRecipe {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface SummoningSynergyData {
    summonIDs: [string, string];
    customDescription?: string;
    modifiers: PlayerModifierData;
    enemyModifiers?: CombatModifierData;
    conditionalModifiers?: ConditionalModifierData[];
    consumesOn: GameEventMatcherData[];
}
declare class SummoningSynergy {
    get description(): string;
    _customDescription?: string;
    modifiers: PlayerModifierObject;
    enemyModifiers?: CombatModifierData;
    conditionalModifiers?: ConditionalModifier[];
    summons: [SummoningRecipe, SummoningRecipe];
    /** Determines when one of each of the summons are consumed */
    consumesOn: GameEventMatcher[];
    constructor(data: SummoningSynergyData, game: Game, summoning: Summoning);
}
interface SummoningSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: SummoningRecipeData[];
    synergies?: SummoningSynergyData[];
}
declare class Summoning extends ArtisanSkill<SummoningRecipe, SummoningSkillData, AnyItem> implements SkillCategoryObject<SkillCategory> {
    readonly _media = "assets/media/skills/summoning/summoning.svg";
    getTotalUnlockedMasteryActions(): number;
    /** Returns the total number of synergies unlocked */
    get totalSynergiesUnlocked(): number;
    readonly baseInterval: number;
    get menu(): ArtisanMenu<AnyItem>;
    selectionTabs: Map<SkillCategory, SummoningSelectionTab>;
    renderQueue: SummoningRenderQueue;
    categories: NamespaceRegistry<SkillCategory>;
    synergies: SummoningSynergy[];
    synergiesByItem: Map<AnyItem, Map<AnyItem, SummoningSynergy>>;
    recipesByProduct: Map<AnyItem, SummoningRecipe>;
    recipesBySkill: Map<AnySkill, SummoningRecipe[]>;
    /** Stores the associated alt. recipe index for a recipe */
    setAltRecipes: Map<SummoningRecipe, number>;
    /** Stores the number of each mark that has been unlocked */
    marksUnlocked: Map<SummoningRecipe, number>;
    get noCostsMessage(): string;
    get actionItem(): EquipmentItem;
    get actionItemQuantity(): number;
    get activeRecipe(): SummoningRecipe;
    get masteryModifiedInterval(): number;
    /** Gets the set alt. recipe index for the currently selected recipe */
    get selectedAltRecipe(): number;
    get totalMarksDiscovered(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: SummoningSkillData): void;
    postDataRegistration(): void;
    addXPForTabletConsumption(tablet: EquipmentItem, interval: number): void;
    getPercentageIntervalModifier(action: SummoningRecipe): number;
    getRecipeFromProduct(product: AnyItem): SummoningRecipe | undefined;
    onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    getMarkSnapshot(): Map<SummoningRecipe, number>;
    getNonShardCostReductionModifier(recipe: SummoningRecipe): number;
    modifyItemCost(item: AnyItem, quantity: number, recipe: SummoningRecipe): number;
    modifyGPCost(recipe: SummoningRecipe): number;
    modifySCCost(recipe: SummoningRecipe): number;
    /** Adds the Non shard costs of making a summoning tablet */
    addNonShardCosts(recipe: SummoningRecipe, altID: number, costs: Costs): void;
    onLoad(): void;
    onEquipmentChange(): void;
    render(): void;
    /** Gets the costs for a specific alt recipe */
    getAltRecipeCosts(recipe: SummoningRecipe, altID: number): Costs;
    getRecipeCosts(recipe: SummoningRecipe): Costs;
    /** Callback function for selecting an alternative recipe */
    selectAltRecipeOnClick(altID: number): void;
    renderSelectedRecipe(): void;
    renderMarkState(): void;
    renderMarkProgress(): void;
    renderSynergyUnlock(): void;
    renderSynergyQuantity(): void;
    queueMarkDiscoveryModal(mark: SummoningRecipe): void;
    queueMarkLevelUpModal(mark: SummoningRecipe): void;
    getPreservationChance(action: SummoningRecipe, chance: number): number;
    getMasteryXPModifier(action: SummoningRecipe): number;
    onMasteryLevelUp(action: SummoningRecipe, oldLevel: number, newLevel: number): void;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    /** Sets object data using the old summoningData variable */
    convertFromOldFormat(summoningData: OldPlayerSummoningData, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    /** Gets the number of times a mark has been discovered */
    getMarkCount(mark: SummoningRecipe): number;
    /** Gets the media string of the mark. Returns question mark if undiscovered. */
    getMarkImage(mark: SummoningRecipe): string;
    /** Gets the mark name of the mark. Returns question marks if undiscovered or the level requirement is not met. */
    getMarkName(mark: SummoningRecipe): string;
    /** Gets the level of the mark */
    getMarkLevel(mark: SummoningRecipe): number;
    /** Gets the data for a given synergy. Returns undefined if the synergy does not exist */
    getSynergyData(summon1: EquipmentItem, summon2: EquipmentItem): SummoningSynergy | undefined;
    /** Gets the data for a given if unlocked. Returns undefined if the synergy does not exist or is not unlocked*/
    getUnlockedSynergyData(summon1: EquipmentItem, summon2: EquipmentItem): SummoningSynergy | undefined;
    /** Checks if the synergy is unlocked */
    isSynergyUnlocked(synergy: SummoningSynergy): boolean;
    /** Gets the chance to roll for a given mark */
    getChanceForMark(mark: SummoningRecipe, skill: AnySkill, modifiedInterval: number): number;
    /** Rolls for a summoning mark.*/
    rollForMark(mark: SummoningRecipe, skill: AnySkill, modifiedInterval: number): void;
    discoverMark(mark: SummoningRecipe): void;
    /** Checks if the player meets the conditions for the pet "Mark" */
    checkForPetMark(): void;
    /** Rolls for all the summoning marks applicable for the given skill */
    rollMarksForSkill(skill: AnySkill, modifiedInterval: number): void;
    getMarkForSkill(skill: AnySkill): SummoningRecipe | undefined;
    testTranslations(): void;
    /** GP value required for non shard costs */
    static readonly recipeGPCost = 1000;
    /** Number of mark discoveries required for each level */
    static readonly markLevels: readonly number[];
    /** Returns the summoning xp to be given for consuming a summoning tablet */
    static getTabletConsumptionXP(summon: SummoningRecipe, interval: number): number;
    static searchArray: SummoningSearch[];
    static updateSearchArray(): void;
}
declare function localizeSummoning(): void;
declare type SummoningSearch = {
    synergy: SummoningSynergy;
    description: string;
    name1: string;
    name2: string;
    name1long: string;
    name2long: string;
};
declare class SummoningRenderQueue extends ArtisanSkillRenderQueue<SummoningRecipe> {
    /** Performs a complete update of a mark discovery */
    markState: Set<SummoningRecipe>;
    /** Performs an update of a marks discovery progress */
    markCount: Set<SummoningRecipe>;
    /** Updates the synergy search menu quantities */
    synergyQuantities: boolean;
    /** Updates the synergy search menu unlocks */
    synergyUnlock: boolean;
}
