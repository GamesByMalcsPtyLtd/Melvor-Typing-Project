interface HerbloreRecipeData extends CategorizedArtisanRecipeData {
    potionIDs: [string, string, string, string];
    name: string;
}
declare class HerbloreRecipe extends CategorizedArtisanRecipe<SkillCategory> {
    private skill;
    potions: [PotionItem, PotionItem, PotionItem, PotionItem];
    get name(): string;
    get media(): string;
    private _name;
    constructor(namespace: DataNamespace, data: HerbloreRecipeData, game: Game, skill: Herblore);
}
interface HerbloreSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: HerbloreRecipeData[];
    deadlyToxinsItem?: string;
}
declare class Herblore extends ArtisanSkill<HerbloreRecipe, HerbloreSkillData, PotionItem> implements SkillCategoryObject<SkillCategory> {
    protected readonly _media = "assets/media/skills/herblore/herblore.svg";
    protected getTotalUnlockedMasteryActions(): number;
    protected readonly baseInterval: number;
    protected get menu(): HerbloreArtisanMenu;
    protected selectionTabs: Map<SkillCategory, HerbloreSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<HerbloreRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    private potionToRecipeMap;
    private deadlyToxinsItem?;
    protected get noCostsMessage(): string;
    protected get actionItem(): PotionItem;
    protected get actionItemQuantity(): number;
    get activeRecipe(): HerbloreRecipe;
    protected get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: HerbloreSkillData): void;
    postDataRegistration(): void;
    /** Returns the recipe for a given potion. If none exists, returns undefined instead. */
    getRecipeForPotion(potion: PotionItem): HerbloreRecipe | undefined;
    getPotionTier(recipe: HerbloreRecipe): number;
    protected getUncappedDoublingChance(action: HerbloreRecipe): number;
    protected getPreservationChance(action: HerbloreRecipe, chance: number): number;
    getXPModifier(masteryAction?: HerbloreRecipe): number;
    getMasteryXPModifier(action: HerbloreRecipe): number;
    protected onMasteryLevelUp(action: HerbloreRecipe, oldLevel: number, newLevel: number): void;
    protected recordCostPreservationStats(costs: Costs): void;
    protected recordCostConsumptionStats(costs: Costs): void;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
    /** Mastery levels required to craft a tier of potion */
    static tierMasteryLevels: number[];
}
