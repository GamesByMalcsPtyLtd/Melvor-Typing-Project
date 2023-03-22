interface CraftingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: SingleProductArtisanSkillRecipeData[];
}
declare type CraftingRecipe = SingleProductArtisanSkillRecipe<SkillCategory>;
declare class Crafting extends ArtisanSkill<CraftingRecipe, CraftingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory> {
    readonly _media = "assets/media/skills/crafting/crafting.svg";
    getTotalUnlockedMasteryActions(): number;
    readonly baseInterval: number;
    get menu(): ArtisanMenu<AnyItem>;
    selectionTabs: Map<SkillCategory, CraftingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<CraftingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    get noCostsMessage(): string;
    get actionItem(): AnyItem;
    get actionItemQuantity(): number;
    get activeRecipe(): CraftingRecipe;
    get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: CraftingSkillData): void;
    postDataRegistration(): void;
    getFlatIntervalModifier(action: CraftingRecipe): number;
    getUncappedDoublingChance(action: CraftingRecipe): number;
    getPreservationChance(action: CraftingRecipe, chance: number): number;
    getMasteryXPModifier(action: CraftingRecipe): number;
    onMasteryLevelUp(action: CraftingRecipe, oldLevel: number, newLevel: number): void;
    modifyItemCost(item: AnyItem, quantity: number, recipe: CraftingRecipe): number;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    get isMakingJewlery(): boolean;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
}
