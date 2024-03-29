interface SmithingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: SingleProductArtisanSkillRecipeData[];
}
declare type SmithingEvents = {
    action: SmithingActionEvent;
};
declare type SmithingRecipe = SingleProductArtisanSkillRecipe<SkillCategory>;
declare class Smithing extends ArtisanSkill<SmithingRecipe, SmithingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory>, IGameEventEmitter<SmithingEvents> {
    _events: import("mitt").Emitter<SmithingEvents>;
    on: {
        <Key extends "action">(type: Key, handler: import("mitt").Handler<SmithingEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<SmithingEvents>): void;
    };
    off: {
        <Key extends "action">(type: Key, handler?: import("mitt").Handler<SmithingEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<SmithingEvents>): void;
    };
    readonly _media = Assets.Smithing;
    getTotalUnlockedMasteryActions(): number;
    readonly baseInterval: number;
    get menu(): ArtisanMenu<AnyItem>;
    selectionTabs: Map<SkillCategory, SmithingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<SmithingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    /** Map of smithing ore to bars */
    oreToBarMap: Map<AnyItem, AnyItem>;
    get noCostsMessage(): string;
    get actionItem(): AnyItem;
    get actionItemQuantity(): number;
    get activeRecipe(): SmithingRecipe;
    get isMakingBar(): boolean;
    /** If the currently selected recipe contains coal as an ingredient */
    get recipeHasCoal(): boolean;
    get masteryModifiedInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: SmithingSkillData): void;
    postDataRegistration(): void;
    getSmithedVersionOfOre(ore: AnyItem): AnyItem | undefined;
    getUncappedDoublingChance(action: SmithingRecipe): number;
    getPreservationChance(action: SmithingRecipe, chance: number): number;
    getMasteryXPModifier(action: SmithingRecipe): number;
    onMasteryLevelUp(action: SmithingRecipe, oldLevel: number, newLevel: number): void;
    modifyItemCost(item: AnyItem, quantity: number, recipe: SmithingRecipe): number;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
}
