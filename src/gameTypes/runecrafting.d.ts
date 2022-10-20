interface RunecraftingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: SingleProductArtisanSkillRecipeData[];
    elementalRuneIDs?: string[];
    comboRuneIDs?: string[];
    crowDevilItem?: string;
}
declare type RunecraftingRecipe = SingleProductArtisanSkillRecipe<SkillCategory>;
declare class Runecrafting extends ArtisanSkill<RunecraftingRecipe, RunecraftingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory> {
    protected readonly _media = "assets/media/skills/runecrafting/runecrafting.svg";
    protected getTotalUnlockedMasteryActions(): number;
    protected readonly baseInterval: number;
    protected get menu(): ArtisanMenu<AnyItem>;
    protected selectionTabs: Map<SkillCategory, RunecraftingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<RunecraftingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    elementalRunes: AnyItem[];
    comboRunes: AnyItem[];
    private crowDevilItem?;
    protected get noCostsMessage(): string;
    protected get actionXP(): number;
    protected get actionItem(): AnyItem;
    protected get actionItemQuantity(): number;
    get activeRecipe(): RunecraftingRecipe;
    protected get masteryModifiedInterval(): number;
    private get isMakingRunes();
    private get isOctoActive();
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: RunecraftingSkillData): void;
    postDataRegistration(): void;
    getRecipeSubCategory(recipe: RunecraftingRecipe): RunecraftingSubCategory;
    protected modifyItemCost(item: AnyItem, quantity: number, recipe: RunecraftingRecipe): number;
    protected getPreservationChance(action: RunecraftingRecipe, chance: number): number;
    getMasteryXPModifier(action: RunecraftingRecipe): number;
    protected onMasteryLevelUp(action: RunecraftingRecipe, oldLevel: number, newLevel: number): void;
    protected recordCostPreservationStats(costs: Costs): void;
    protected recordCostConsumptionStats(costs: Costs): void;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
}
