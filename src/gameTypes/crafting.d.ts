interface CraftingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    subcategories?: SkillSubcategoryData[];
    recipes?: CraftingRecipeData[];
}
interface CraftingModificationData extends MasterySkillModificationData {
    recipes?: CraftingRecipeModificationData[];
}
declare type CraftingEvents = {
    action: CraftingActionEvent;
} & SkillWithMasteryEvents;
declare class Crafting extends ArtisanSkill<CraftingRecipe, CraftingSkillData, AnyItem, CraftingEvents, CraftingModificationData> implements SkillCategoryObject<SkillCategory> {
    readonly _media = Assets.Crafting;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: CraftingRecipe): boolean;
    readonly baseInterval: number;
    get menu(): ArtisanMenuElement<Item>;
    selectionTabs: Map<SkillCategory, RecipeSelectionTabElement<CraftingRecipe, CraftingRecipeOptionElement>>;
    get categoryMenu(): RealmedCategoryMenuElement;
    renderQueue: ArtisanSkillRenderQueue<CraftingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    subcategories: NamespaceRegistry<SkillSubcategory>;
    get noCostsMessage(): string;
    get actionItem(): AnyItem;
    get unmodifiedActionQuantity(): number;
    get activeRecipe(): CraftingRecipe;
    get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: CraftingSkillData): void;
    modifyData(data: CraftingModificationData): void;
    postDataRegistration(): void;
    getRecipeAutoSubcategory(recipe: CraftingRecipe): SkillSubcategory | undefined;
    getFlatCostReduction(action?: CraftingRecipe, item?: AnyItem): number;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    onMasteryLevelUp(action: CraftingRecipe, oldLevel: number, newLevel: number): void;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
}
interface CraftingRecipeData extends SingleProductArtisanSkillRecipeData {
    subcategoryID?: string;
}
interface CraftingRecipeModificationData extends SingleProductArtisanSkillRecipeModificationData {
    subcategoryID?: string;
}
declare class CraftingRecipe extends SingleProductArtisanSkillRecipe<SkillCategory> {
    subcategory?: SkillSubcategory;
    constructor(namespace: DataNamespace, data: CraftingRecipeData, game: Game, skill: Crafting);
    applyDataModification(data: CraftingRecipeModificationData, game: Game): void;
}
