declare type SummoningTier = 1 | 2 | 3 | 4 | 5;
declare type SummoningCategoryType = 'Mark' | 'Tablet' | 'Synergy';
interface SummoningCategoryData extends SkillCategoryData {
    type: SummoningCategoryType;
}
declare class SummoningCategory extends SkillCategory {
    readonly type: SummoningCategoryType;
    constructor(namespace: DataNamespace, data: SummoningCategoryData, skill: AnySkill, game: Game);
}
interface SummoningRecipeData extends SingleProductArtisanSkillRecipeData {
    markMedia: string;
    nonShardItemCosts: string[];
    tier: SummoningTier;
    skillIDs: string[];
    /** Optional. Defines the maximum Summoning Mark level this familiar can reach. Defaults to 6. */
    maxMarkLevel?: number;
}
interface SummoningRecipeModificationData extends SingleProductArtisanSkillRecipeModificationData {
    nonShardItemCosts?: {
        add?: string[];
        remove?: string[];
    };
    tier?: SummoningTier;
    skillIDs?: {
        add?: string[];
        remove?: string[];
    };
    maxMarkLevel?: number;
}
declare class SummoningRecipe extends CategorizedArtisanRecipe<SummoningCategory> {
    nonShardItemCosts: AnyItem[];
    tier: SummoningTier;
    skills: AnySkill[];
    /** The maximum Summoning Mark level this familiar can reach */
    maxMarkLevel: number;
    get name(): string;
    get media(): string;
    get markMedia(): string;
    product: EquipmentItem;
    baseQuantity: number;
    _markMedia: string;
    constructor(namespace: DataNamespace, data: SummoningRecipeData, game: Game, skill: Summoning);
    applyDataModification(data: SummoningRecipeModificationData, game: Game): void;
}
declare class DummySummoningRecipe extends SummoningRecipe {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface SummoningSynergyData {
    summonIDs: [string, string];
    customDescription?: string;
    modifiers: ModifierValuesRecordData;
    enemyModifiers?: ModifierValuesRecordData;
    conditionalModifiers?: ConditionalModifierData[];
    combatEffects?: TriggeredCombatEffectApplicatorData[];
    consumesOn: GameEventMatcherData[];
}
declare class SummoningSynergy implements SoftDataDependant<SummoningSynergyData> {
    get description(): string;
    get name(): string;
    _customDescription?: string;
    modifiers: ModifierValue[];
    enemyModifiers?: ModifierValue[];
    conditionalModifiers?: ConditionalModifier[];
    combatEffects?: CombatEffectApplicator[];
    summons: [SummoningRecipe, SummoningRecipe];
    /** Determines when one of each of the summons are consumed */
    consumesOn: AnyGameEventMatcher[];
    constructor(data: SummoningSynergyData, game: Game, summoning: Summoning);
    registerSoftDependencies(data: SummoningSynergyData, game: Game): void;
}
interface SummoningSkillData extends MasterySkillData {
    categories?: SummoningCategoryData[];
    recipes?: SummoningRecipeData[];
    synergies?: SummoningSynergyData[];
}
interface SummoningModificationData extends MasterySkillModificationData {
    recipes?: SummoningRecipeModificationData[];
}
declare type SummoningEvents = {
    action: SummoningActionEvent;
} & SkillWithMasteryEvents;
declare class Summoning extends ArtisanSkill<SummoningRecipe, SummoningSkillData, AnyItem, SummoningEvents, SummoningModificationData> implements SkillCategoryObject<SummoningCategory> {
    readonly _media = Assets.Summoning;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: SummoningRecipe): boolean;
    /** Returns the total number of synergies unlocked */
    get totalSynergiesUnlocked(): number;
    readonly baseInterval: number;
    get menu(): ArtisanMenuElement<Item>;
    selectionTabs: Map<SkillCategory, SummoningSelectionTabElement>;
    get categoryMenu(): RealmedCategoryMenuElement;
    renderQueue: SummoningRenderQueue;
    categories: NamespaceRegistry<SummoningCategory>;
    synergies: SummoningSynergy[];
    synergiesByItem: Map<AnyItem, Map<AnyItem, SummoningSynergy>>;
    recipesByProduct: Map<AnyItem, SummoningRecipe>;
    /** Maps Skills -> Realms -> SummoningRecipes for quick access when rolling for marks. Populated after data registration. */
    recipesBySkillAndRealm: Map<AnySkill, Map<Realm, SummoningRecipe[]>>;
    /** Stores the non-shard costs selected for a recipe */
    selectedNonShardCosts: Map<SummoningRecipe, Item>;
    /** Stores the number of each mark that has been unlocked */
    marksUnlocked: Map<SummoningRecipe, number>;
    get noCostsMessage(): string;
    get actionItem(): EquipmentItem;
    get unmodifiedActionQuantity(): number;
    get activeRecipe(): SummoningRecipe;
    get masteryModifiedInterval(): number;
    /** Gets the non-shard cost set for the currently selected recipe */
    get activeNonShardCost(): Item;
    get totalMarksDiscovered(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: SummoningSkillData): void;
    modifyData(data: SummoningModificationData): void;
    postDataRegistration(): void;
    addXPForTabletConsumption(tablet: EquipmentItem, interval: number): void;
    getRecipeFromProduct(product: AnyItem): SummoningRecipe | undefined;
    onAnyLevelUp(): void;
    getErrorLog(): string;
    getMarkSnapshot(): Map<SummoningRecipe, number>;
    getNonShardCostReductionModifier(recipe: SummoningRecipe): number;
    getFlatCostReduction(recipe?: SummoningRecipe, item?: AnyItem): number;
    modifyCurrencyCost(currency: Currency, quantity: number, recipe: SummoningRecipe): number;
    /** Adds the Non shard costs of making a summoning tablet */
    addNonShardCosts(recipe: SummoningRecipe, item: Item, costs: Costs): void;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    onLoad(): void;
    onEquipmentChange(): void;
    render(): void;
    /** Gets the costs for a specific alt recipe */
    getAltRecipeCosts(recipe: SummoningRecipe, nonShardItem: Item): Costs;
    getRecipeCosts(recipe: SummoningRecipe): Costs;
    /** Callback function for selecting an alternative recipe */
    selectNonShardCostOnClick(index: number): void;
    renderSelectedRecipe(): void;
    renderMarkState(): void;
    renderMarkProgress(): void;
    renderSynergyUnlock(): void;
    renderSynergyQuantity(): void;
    queueMarkDiscoveryModal(mark: SummoningRecipe): void;
    queueMarkLevelUpModal(mark: SummoningRecipe): void;
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
    /** Gets a summoning synergy between 2 items. Returns undefined if the synergy does not exist */
    getSynergy(summon1: EquipmentItem, summon2: EquipmentItem): SummoningSynergy | undefined;
    /** Gets a summoning synergy between 2 items if it is unlocked. Returns undefined if the synergy does not exist or is not unlocked*/
    getUnlockedSynergy(summon1: EquipmentItem, summon2: EquipmentItem): SummoningSynergy | undefined;
    /** Checks if the synergy is unlocked */
    isSynergyUnlocked(synergy: SummoningSynergy): boolean;
    /** Gets the chance to roll for a given mark */
    getChanceForMark(mark: SummoningRecipe, skill: AnySkill, modifiedInterval: number): number;
    /** Rolls for a summoning mark.*/
    rollForMark(mark: SummoningRecipe, skill: AnySkill, modifiedInterval: number): void;
    discoverMark(mark: SummoningRecipe): void;
    /** Checks if the player meets the conditions for the pet "Mark" */
    checkForPetMark(): void;
    /**
     * Rolls for all the summoning marks applicable for the given skill
     * @param skill The skill to roll marks for
     * @param modifiedInterval The interval to use to compute the chance for a mark
     * @param realm The realm that marks must belong to
     */
    rollMarksForSkill(skill: AnySkill, modifiedInterval: number, realm?: Realm): void;
    getMarkForSkill(skill: AnySkill): SummoningRecipe | undefined;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    /** GP value required for non shard costs */
    static readonly recipeGPCost = 1000;
    /** AP value required for non shard costs */
    static readonly recipeAPCost = 5000;
    /** Number of mark discoveries required for each level */
    static readonly markLevels: readonly number[];
    /** Returns the summoning xp to be given for consuming a summoning tablet */
    static getTabletConsumptionXP(summon: SummoningRecipe, interval: number): number;
    /** Returns the Abyssal Summoning XP to be given for consuming a summoning tablet */
    static getTabletConsumptionAXP(summon: SummoningRecipe, interval: number): number;
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
