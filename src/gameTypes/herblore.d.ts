interface HerbloreRecipeData extends CategorizedArtisanRecipeData {
    potionIDs: [string, string, string, string];
    name: string;
}
declare class HerbloreRecipe extends CategorizedArtisanRecipe<SkillCategory> {
    skill: Herblore;
    potions: [PotionItem, PotionItem, PotionItem, PotionItem];
    get name(): string;
    get media(): string;
    _name: string;
    constructor(namespace: DataNamespace, data: HerbloreRecipeData, game: Game, skill: Herblore);
}
interface HerbloreSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: HerbloreRecipeData[];
    deadlyToxinsItem?: string;
}
declare class Herblore extends ArtisanSkill<HerbloreRecipe, HerbloreSkillData, PotionItem> implements SkillCategoryObject<SkillCategory> {
    readonly _media = "assets/media/skills/herblore/herblore.svg";
    getTotalUnlockedMasteryActions(): number;
    readonly baseInterval: number;
    get menu(): HerbloreArtisanMenu;
    selectionTabs: Map<SkillCategory, HerbloreSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<HerbloreRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    potionToRecipeMap: Map<PotionItem, HerbloreRecipe>;
    deadlyToxinsItem?: AnyItem;
    get noCostsMessage(): string;
    get actionItem(): PotionItem;
    get actionItemQuantity(): number;
    get activeRecipe(): HerbloreRecipe;
    get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: HerbloreSkillData): void;
    postDataRegistration(): void;
    /** Returns the recipe for a given potion. If none exists, returns undefined instead. */
    getRecipeForPotion(potion: PotionItem): HerbloreRecipe | undefined;
    getPotionTier(recipe: HerbloreRecipe): number;
    getUncappedDoublingChance(action: HerbloreRecipe): number;
    getPreservationChance(action: HerbloreRecipe, chance: number): number;
    getXPModifier(masteryAction?: HerbloreRecipe): number;
    getMasteryXPModifier(action: HerbloreRecipe): number;
    onMasteryLevelUp(action: HerbloreRecipe, oldLevel: number, newLevel: number): void;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
    /** Mastery levels required to craft a tier of potion */
    static tierMasteryLevels: number[];
}
