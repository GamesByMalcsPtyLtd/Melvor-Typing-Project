interface CraftingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: SingleProductArtisanSkillRecipeData[];
}
declare type CraftingRecipe = SingleProductArtisanSkillRecipe<SkillCategory>;
declare class Crafting extends ArtisanSkill<CraftingRecipe, CraftingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory> {
    protected readonly _media = "assets/media/skills/crafting/crafting.svg";
    protected getTotalUnlockedMasteryActions(): number;
    protected readonly baseInterval: number;
    protected get menu(): ArtisanMenu<AnyItem>;
    protected selectionTabs: Map<SkillCategory, CraftingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<CraftingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    protected get noCostsMessage(): string;
    protected get actionItem(): AnyItem;
    protected get actionItemQuantity(): number;
    get activeRecipe(): CraftingRecipe;
    protected get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: CraftingSkillData): void;
    postDataRegistration(): void;
    protected getFlatIntervalModifier(action: CraftingRecipe): number;
    protected getUncappedDoublingChance(action: CraftingRecipe): number;
    protected getPreservationChance(action: CraftingRecipe, chance: number): number;
    getMasteryXPModifier(action: CraftingRecipe): number;
    protected onMasteryLevelUp(action: CraftingRecipe, oldLevel: number, newLevel: number): void;
    protected modifyItemCost(item: AnyItem, quantity: number, recipe: CraftingRecipe): number;
    protected recordCostPreservationStats(costs: Costs): void;
    protected recordCostConsumptionStats(costs: Costs): void;
    private get isMakingJewlery();
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
}
