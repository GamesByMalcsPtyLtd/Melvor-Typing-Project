interface OldMasteryData {
    pool: number;
    xp: number[];
}
declare type OldMastery = NumberDictionary<OldMasteryData>;
/** Sorts the recipe array in ascending order of category, and then level requirement */
declare function sortRecipesByCategoryAndLevel<CategoryType, RecipeType extends {
    category: CategoryType;
    level: number;
}>(recipes: RecipeType[], categories: CategoryType[]): RecipeType[];
declare abstract class MasteryAction extends RealmedObject {
    abstract readonly name: string;
    abstract readonly media: string;
}
declare class DummyMasteryAction extends MasteryAction {
    get name(): string;
    get media(): string;
    constructor(namespace: DataNamespace, id: string, game: Game);
}
