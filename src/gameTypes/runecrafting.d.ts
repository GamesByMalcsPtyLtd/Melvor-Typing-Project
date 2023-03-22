interface RunecraftingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: SingleProductArtisanSkillRecipeData[];
    elementalRuneIDs?: string[];
    comboRuneIDs?: string[];
    crowDevilItem?: string;
}
declare type RunecraftingRecipe = SingleProductArtisanSkillRecipe<SkillCategory>;
declare class Runecrafting extends ArtisanSkill<RunecraftingRecipe, RunecraftingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory> {
    readonly _media = "assets/media/skills/runecrafting/runecrafting.svg";
    getTotalUnlockedMasteryActions(): number;
    readonly baseInterval: number;
    get menu(): ArtisanMenu<AnyItem>;
    selectionTabs: Map<SkillCategory, RunecraftingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<RunecraftingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    elementalRunes: AnyItem[];
    comboRunes: AnyItem[];
    crowDevilItem?: AnyItem;
    get noCostsMessage(): string;
    get actionXP(): number;
    get actionItem(): AnyItem;
    get actionItemQuantity(): number;
    get activeRecipe(): RunecraftingRecipe;
    get masteryModifiedInterval(): number;
    get isMakingRunes(): boolean;
    get isOctoActive(): boolean;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: RunecraftingSkillData): void;
    postDataRegistration(): void;
    getRecipeSubCategory(recipe: RunecraftingRecipe): RunecraftingSubCategory;
    modifyItemCost(item: AnyItem, quantity: number, recipe: RunecraftingRecipe): number;
    getPreservationChance(action: RunecraftingRecipe, chance: number): number;
    getMasteryXPModifier(action: RunecraftingRecipe): number;
    onMasteryLevelUp(action: RunecraftingRecipe, oldLevel: number, newLevel: number): void;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
}
