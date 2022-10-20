interface FletchingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: FletchingRecipeData[];
}
declare class Fletching extends ArtisanSkill<FletchingRecipe, FletchingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory> {
    protected readonly _media = "assets/media/skills/fletching/fletching.svg";
    protected getTotalUnlockedMasteryActions(): number;
    protected readonly baseInterval: number;
    protected get menu(): ArtisanMenu<AnyItem>;
    protected selectionTabs: Map<SkillCategory, FletchingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<FletchingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    protected get noCostsMessage(): string;
    protected get actionItem(): AnyItem;
    protected get actionItemQuantity(): number;
    get activeRecipe(): FletchingRecipe;
    protected get masteryModifiedInterval(): number;
    /** Gets the set alt. recipe index for the currently selected recipe */
    private get selectedAltRecipe();
    /** Stores the associated alt. recipe index for a recipe */
    private setAltRecipes;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FletchingSkillData): void;
    postDataRegistration(): void;
    protected getFlatIntervalModifier(action: FletchingRecipe): number;
    protected modifyItemCost(item: AnyItem, quantity: number, recipe: FletchingRecipe): number;
    getRecipeCosts(recipe: FletchingRecipe): Costs;
    /** Callback function for selecting an alternative recipe */
    selectAltRecipeOnClick(altID: number): void;
    protected renderSelectedRecipe(): void;
    protected getPreservationChance(action: FletchingRecipe, chance: number): number;
    getMasteryXPModifier(action: FletchingRecipe): number;
    protected onMasteryLevelUp(action: FletchingRecipe, oldLevel: number, newLevel: number): void;
    doesRecipeMakeArrows(recipe: FletchingRecipe): boolean;
    doesRecipeMakeUnstrungBows(recipe: FletchingRecipe): boolean;
    protected recordCostPreservationStats(costs: Costs): void;
    protected recordCostConsumptionStats(costs: Costs): void;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    getErrorLog(): string;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineTuple, idMap: NumericIDMap): void;
    testTranslations(): void;
}
interface FletchingRecipeData extends SingleProductArtisanSkillRecipeData {
    alternativeCosts?: {
        itemCosts: IDQuantity[];
        quantityMultiplier: number;
    }[];
}
declare class FletchingRecipe extends SingleProductArtisanSkillRecipe<SkillCategory> {
    alternativeCosts?: {
        itemCosts: AnyItemQuantity[];
        quantityMultiplier: number;
    }[];
    constructor(namespace: DataNamespace, data: FletchingRecipeData, game: Game, skill: Fletching);
    applyDataModification(modData: FletchingRecipeModificationData, game: Game): void;
}
interface FletchingRecipeModificationData extends IDData {
    alternativeCosts?: {
        itemCosts: IDQuantity[];
        quantityMultiplier: number;
    }[];
}
