interface FletchingSkillData extends MasterySkillData {
    categories?: SkillCategoryData[];
    recipes?: FletchingRecipeData[];
}
declare type FletchingEvents = {
    action: FletchingActionEvent;
};
declare class Fletching extends ArtisanSkill<FletchingRecipe, FletchingSkillData, AnyItem> implements SkillCategoryObject<SkillCategory>, IGameEventEmitter<FletchingEvents> {
    _events: import("mitt").Emitter<FletchingEvents>;
    on: {
        <Key extends "action">(type: Key, handler: import("mitt").Handler<FletchingEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<FletchingEvents>): void;
    };
    off: {
        <Key extends "action">(type: Key, handler?: import("mitt").Handler<FletchingEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<FletchingEvents>): void;
    };
    readonly _media = "assets/media/skills/fletching/fletching.svg";
    getTotalUnlockedMasteryActions(): number;
    readonly baseInterval: number;
    get menu(): ArtisanMenu<AnyItem>;
    selectionTabs: Map<SkillCategory, FletchingSelectionTab>;
    renderQueue: ArtisanSkillRenderQueue<FletchingRecipe>;
    categories: NamespaceRegistry<SkillCategory>;
    get noCostsMessage(): string;
    get actionItem(): AnyItem;
    get actionItemQuantity(): number;
    get activeRecipe(): FletchingRecipe;
    get masteryModifiedInterval(): number;
    /** Gets the set alt. recipe index for the currently selected recipe */
    get selectedAltRecipe(): number;
    /** Stores the associated alt. recipe index for a recipe */
    setAltRecipes: Map<FletchingRecipe, number>;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: FletchingSkillData): void;
    postDataRegistration(): void;
    getFlatIntervalModifier(action: FletchingRecipe): number;
    modifyItemCost(item: AnyItem, quantity: number, recipe: FletchingRecipe): number;
    getRecipeCosts(recipe: FletchingRecipe): Costs;
    /** Callback function for selecting an alternative recipe */
    selectAltRecipeOnClick(altID: number): void;
    renderSelectedRecipe(): void;
    getPreservationChance(action: FletchingRecipe, chance: number): number;
    getMasteryXPModifier(action: FletchingRecipe): number;
    onMasteryLevelUp(action: FletchingRecipe, oldLevel: number, newLevel: number): void;
    doesRecipeMakeArrows(recipe: FletchingRecipe): boolean;
    doesRecipeMakeUnstrungBows(recipe: FletchingRecipe): boolean;
    recordCostPreservationStats(costs: Costs): void;
    recordCostConsumptionStats(costs: Costs): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    getErrorLog(): string;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineTuple, idMap: NumericIDMap): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
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
