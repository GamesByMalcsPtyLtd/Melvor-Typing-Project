interface FletchingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    subcategories?: SkillSubcategoryData[];
    recipes?: FletchingRecipeData[];
}
interface FletchingModificationData extends MasterySkillModificationData {
    recipes?: FletchingRecipeModificationData[];
}
declare type FletchingEvents = {
    action: FletchingActionEvent;
} & SkillWithMasteryEvents;
declare class Fletching extends ArtisanSkill<FletchingRecipe, FletchingSkillData, AnyItem, FletchingEvents, FletchingModificationData> implements SkillCategoryObject<SkillCategory> {
    readonly _media = Assets.Fletching;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: FletchingRecipe): boolean;
    readonly baseInterval: number;
    get menu(): ArtisanMenuElement<Item>;
    selectionTabs: Map<SkillCategory, RecipeSelectionTabElement<FletchingRecipe, FletchingRecipeOptionElement>>;
    get categoryMenu(): RealmedCategoryMenuElement;
    renderQueue: ArtisanSkillRenderQueue<FletchingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    subcategories: NamespaceRegistry<SkillSubcategory>;
    get noCostsMessage(): string;
    get actionItem(): AnyItem;
    get unmodifiedActionQuantity(): number;
    get activeRecipe(): FletchingRecipe;
    get masteryModifiedInterval(): number;
    /** Gets the set alt. recipe index for the currently selected recipe */
    get selectedAltRecipe(): number;
    /** Stores the associated alt. recipe index for a recipe */
    setAltRecipes: Map<FletchingRecipe, number>;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FletchingSkillData): void;
    modifyData(data: FletchingModificationData): void;
    postDataRegistration(): void;
    getRecipeAutoSubcategory(recipe: FletchingRecipe): SkillSubcategory | undefined;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    getRecipeCosts(recipe: FletchingRecipe): Costs;
    /** Callback function for selecting an alternative recipe */
    selectAltRecipeOnClick(altID: number): void;
    renderSelectedRecipe(): void;
    onMasteryLevelUp(action: FletchingRecipe, oldLevel: number, newLevel: number): void;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getErrorLog(): string;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineTuple, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
}
interface FletchingRecipeData extends SingleProductArtisanSkillRecipeData {
    /** Optional. Specifies a manually defined subcategory this recipe belongs to */
    subcategoryID?: string;
    alternativeCosts?: {
        itemCosts: IDQuantity[];
        quantityMultiplier: number;
    }[];
}
interface FletchingRecipeModificationData extends SingleProductArtisanSkillRecipeModificationData {
    subcategoryID?: string;
    alternativeCosts?: {
        itemCosts: IDQuantity[];
        quantityMultiplier: number;
    }[];
}
declare class FletchingRecipe extends SingleProductArtisanSkillRecipe<SkillCategory> {
    subcategory?: SkillSubcategory;
    alternativeCosts?: {
        itemCosts: AnyItemQuantity[];
        quantityMultiplier: number;
    }[];
    constructor(namespace: DataNamespace, data: FletchingRecipeData, game: Game, skill: Fletching);
    applyDataModification(data: FletchingRecipeModificationData, game: Game): void;
}
