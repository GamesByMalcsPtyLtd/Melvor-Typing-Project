interface RunecraftingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    subcategories?: SkillSubcategoryData[];
    recipes?: RunecraftingRecipeData[];
    elementalRuneIDs?: string[];
    comboRuneIDs?: string[];
}
interface RunecraftingModificationData extends MasterySkillModificationData {
    recipes?: RunecraftingRecipeModificationData[];
}
declare type RunecraftingEvents = {
    action: RunecraftingActionEvent;
} & SkillWithMasteryEvents;
declare class Runecrafting extends ArtisanSkill<RunecraftingRecipe, RunecraftingSkillData, AnyItem, RunecraftingEvents, RunecraftingModificationData> implements SkillCategoryObject<SkillCategory> {
    readonly _media = Assets.Runecrafting;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: RunecraftingRecipe): boolean;
    readonly baseInterval: number;
    get menu(): ArtisanMenuElement<Item>;
    selectionTabs: Map<SkillCategory, RecipeSelectionTabElement<RunecraftingRecipe, RunecraftingRecipeOptionElement>>;
    get categoryMenu(): RealmedCategoryMenuElement;
    renderQueue: ArtisanSkillRenderQueue<RunecraftingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    subcategories: NamespaceRegistry<SkillSubcategory>;
    elementalRunes: AnyItem[];
    comboRunes: AnyItem[];
    get noCostsMessage(): string;
    get actionXP(): number;
    get actionAbyssalXP(): number;
    get actionItem(): AnyItem;
    get unmodifiedActionQuantity(): number;
    get activeRecipe(): RunecraftingRecipe;
    get masteryModifiedInterval(): number;
    get isMakingRunes(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: RunecraftingSkillData): void;
    modifyData(data: RunecraftingModificationData): void;
    postDataRegistration(): void;
    /** Determines if a recipe makes combo runes that use water runes as an ingredient */
    doesRecipeMakeWaterComboRunes(recipe: RunecraftingRecipe): boolean;
    getRecipeAutoSubcategory(recipe: RunecraftingRecipe): SkillSubcategory | undefined;
    getUncappedCostReduction(recipe?: RunecraftingRecipe, item?: AnyItem): number;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    onMasteryLevelUp(action: RunecraftingRecipe, oldLevel: number, newLevel: number): void;
    checkMasteryLevelBonusFilter(action: RunecraftingRecipe, filter: string): boolean;
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
interface RunecraftingRecipeData extends SingleProductArtisanSkillRecipeData {
    subcategories?: string[];
}
interface RunecraftingRecipeModificationData extends SingleProductArtisanSkillRecipeModificationData {
    subcategories?: {
        add?: string[];
        remove?: string[];
    };
}
declare class RunecraftingRecipe extends SingleProductArtisanSkillRecipe<SkillCategory> {
    subcategories: SkillSubcategory[];
    constructor(namespace: DataNamespace, data: RunecraftingRecipeData, game: Game, skill: Runecrafting);
    applyDataModification(data: RunecraftingRecipeModificationData, game: Game): void;
}
