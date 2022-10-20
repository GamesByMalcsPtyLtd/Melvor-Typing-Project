interface SmithingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: SingleProductArtisanSkillRecipeData[];
}
declare type SmithingRecipe = SingleProductArtisanSkillRecipe<SkillCategory>;
declare class Smithing extends ArtisanSkill<SmithingRecipe, SmithingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory> {
    protected readonly _media = "assets/media/skills/smithing/smithing.svg";
    protected getTotalUnlockedMasteryActions(): number;
    protected readonly baseInterval: number;
    protected get menu(): ArtisanMenu<AnyItem>;
    protected selectionTabs: Map<SkillCategory, SmithingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<SmithingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    /** Map of smithing ore to bars */
    private oreToBarMap;
    protected get noCostsMessage(): string;
    protected get actionItem(): AnyItem;
    protected get actionItemQuantity(): number;
    get activeRecipe(): SmithingRecipe;
    protected get isMakingBar(): boolean;
    /** If the currently selected recipe contains coal as an ingredient */
    protected get recipeHasCoal(): boolean;
    protected get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: SmithingSkillData): void;
    postDataRegistration(): void;
    getSmithedVersionOfOre(ore: AnyItem): AnyItem | undefined;
    protected getUncappedDoublingChance(action: SmithingRecipe): number;
    protected getPreservationChance(action: SmithingRecipe, chance: number): number;
    getMasteryXPModifier(action: SmithingRecipe): number;
    protected onMasteryLevelUp(action: SmithingRecipe, oldLevel: number, newLevel: number): void;
    protected modifyItemCost(item: AnyItem, quantity: number, recipe: SmithingRecipe): number;
    protected recordCostPreservationStats(costs: Costs): void;
    protected recordCostConsumptionStats(costs: Costs): void;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
}
