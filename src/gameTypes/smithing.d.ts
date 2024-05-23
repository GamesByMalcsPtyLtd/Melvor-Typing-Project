interface SmithingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    subcategories?: SkillSubcategoryData[];
    recipes?: SmithingRecipeData[];
}
interface SmithingModificationData extends MasterySkillModificationData {
    recipes?: SmithingRecipeModificationData[];
}
declare type SmithingEvents = {
    action: SmithingActionEvent;
} & SkillWithMasteryEvents;
declare class Smithing extends ArtisanSkill<SmithingRecipe, SmithingSkillData, AnyItem, SmithingEvents, SmithingModificationData> implements SkillCategoryObject<SkillCategory> {
    readonly _media = Assets.Smithing;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: SmithingRecipe): boolean;
    readonly baseInterval: number;
    get menu(): ArtisanMenuElement<Item>;
    selectionTabs: Map<SkillCategory, RecipeSelectionTabElement<SmithingRecipe, SmithingRecipeOptionElement>>;
    get categoryMenu(): RealmedCategoryMenuElement;
    renderQueue: ArtisanSkillRenderQueue<SmithingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    subcategories: NamespaceRegistry<SkillSubcategory>;
    /** Map of smithing ore to bars */
    oreToBarMap: Map<AnyItem, AnyItem>;
    get noCostsMessage(): string;
    get actionItem(): AnyItem;
    get unmodifiedActionQuantity(): number;
    get activeRecipe(): SmithingRecipe;
    get isMakingBar(): boolean;
    get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: SmithingSkillData): void;
    modifyData(data: SmithingModificationData): void;
    postDataRegistration(): void;
    getSmithedVersionOfOre(ore: AnyItem): AnyItem | undefined;
    getUncappedCostReduction(action?: SmithingRecipe, item?: AnyItem): number;
    getFlatCostReduction(action?: SmithingRecipe, item?: AnyItem): number;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    onMasteryLevelUp(action: SmithingRecipe, oldLevel: number, newLevel: number): void;
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
interface SmithingRecipeData extends SingleProductArtisanSkillRecipeData {
    subcategoryID?: string;
}
interface SmithingRecipeModificationData extends SingleProductArtisanSkillRecipeModificationData {
    subcategoryID?: string;
}
declare class SmithingRecipe extends SingleProductArtisanSkillRecipe<SkillCategory> {
    subcategory?: SkillSubcategory;
    constructor(namespace: DataNamespace, data: SmithingRecipeData, game: Game, skill: Smithing);
    applyDataModification(data: SmithingRecipeModificationData, game: Game): void;
}
