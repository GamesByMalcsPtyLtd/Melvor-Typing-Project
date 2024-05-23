interface HerbloreRecipeData extends CategorizedArtisanRecipeData {
    potionIDs: [string, string, string, string];
    name: string;
}
interface HerbloreRecipeModificationData extends CategorizedArtisanRecipeModificationData {
    potionIDs?: [string, string, string, string];
}
declare class HerbloreRecipe extends CategorizedArtisanRecipe<SkillCategory> {
    potions: [PotionItem, PotionItem, PotionItem, PotionItem];
    get name(): string;
    get media(): string;
    _name: string;
    skill: Herblore;
    constructor(namespace: DataNamespace, data: HerbloreRecipeData, game: Game, skill: Herblore);
    applyDataModification(data: HerbloreRecipeModificationData, game: Game): void;
}
interface HerbloreSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: HerbloreRecipeData[];
}
interface HerbloreModificationData extends MasterySkillModificationData {
    recipes?: HerbloreRecipeModificationData[];
}
declare type HerbloreEvents = {
    action: HerbloreActionEvent;
} & SkillWithMasteryEvents;
declare class Herblore extends ArtisanSkill<HerbloreRecipe, HerbloreSkillData, PotionItem, HerbloreEvents, HerbloreModificationData> implements SkillCategoryObject<SkillCategory> {
    readonly _media = Assets.Herblore;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: HerbloreRecipe): boolean;
    readonly baseInterval: number;
    get menu(): HerbloreArtisanMenuElement;
    selectionTabs: Map<SkillCategory, RecipeSelectionTabElement<HerbloreRecipe, HerbloreRecipeOptionElement>>;
    get categoryMenu(): RealmedCategoryMenuElement;
    renderQueue: ArtisanSkillRenderQueue<HerbloreRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    potionToRecipeMap: Map<PotionItem, HerbloreRecipe>;
    get noCostsMessage(): string;
    get actionItem(): PotionItem;
    get unmodifiedActionQuantity(): number;
    get activeRecipe(): HerbloreRecipe;
    get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: HerbloreSkillData): void;
    modifyData(data: HerbloreModificationData): void;
    postDataRegistration(): void;
    /** Returns the recipe for a given potion. If none exists, returns undefined instead. */
    getRecipeForPotion(potion: PotionItem): HerbloreRecipe | undefined;
    getPotionTier(recipe: HerbloreRecipe): number;
    onMasteryLevelUp(action: HerbloreRecipe, oldLevel: number, newLevel: number): void;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    /** Mastery levels required to craft a tier of potion */
    static tierMasteryLevels: number[];
}
