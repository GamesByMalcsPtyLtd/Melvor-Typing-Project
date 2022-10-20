interface AstrologyModifierData {
    modifiers: ({
        key: StandardModifierKeys;
    } | {
        key: SkillModifierKeys;
        skill: string;
    })[];
    maxCount: number;
    incrementValue: number;
    costs: number[];
}
declare class AstrologyModifier {
    modifiers: ({
        key: StandardModifierKeys;
    } | {
        key: SkillModifierKeys;
        skill: AnySkill;
    })[];
    maxCount: number;
    incrementValue: number;
    costs: number[];
    constructor(data: AstrologyModifierData, game: Game);
}
interface AstrologyRecipeData extends BasicSkillRecipeData {
    name: string;
    media: string;
    skillIDs: string[];
    gpReward: number;
    scReward: number;
    itemRewards: IDQuantity[];
    standardModifiers: AstrologyModifierData[];
    uniqueModifiers: AstrologyModifierData[];
    masteryXPModifier?: SkillModifierKeys;
}
declare class AstrologyRecipe extends BasicSkillRecipe {
    get name(): string;
    get media(): string;
    skills: AnySkill[];
    gpReward: number;
    scReward: number;
    itemRewards: AnyItemQuantity[];
    standardModifiers: AstrologyModifier[];
    uniqueModifiers: AstrologyModifier[];
    masteryXPModifier?: SkillModifierKeys;
    private _name;
    private _media;
    /** The number of times each standard modifier has been bought */
    standardModsBought: number[];
    /** The number of times each unique modifier has been bought */
    uniqueModsBought: number[];
    /** Cache of max value modifiers */
    maxValueModifiers: number;
    constructor(namespace: DataNamespace, data: AstrologyRecipeData, game: Game);
}
declare class DummyAstrologyRecipe extends AstrologyRecipe {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface AstrologySkillData extends MasterySkillData {
    recipes?: AstrologyRecipeData[];
    stardustItemID?: string;
    goldenStardustItemID?: string;
}
declare class Astrology extends GatheringSkill<AstrologyRecipe, AstrologySkillData> implements StatProvider {
    protected readonly _media = "assets/media/skills/astrology/astrology.svg";
    protected getTotalUnlockedMasteryActions(): number;
    renderQueue: AstrologyRenderQueue;
    protected get actionInterval(): number;
    protected get actionLevel(): number;
    protected get masteryAction(): AstrologyRecipe;
    get meteoriteChance(): number;
    get stardustChance(): number;
    get goldenStardustChance(): number;
    /** The constellation that is currently being studied. Undefined if none is selected. */
    get activeConstellation(): AstrologyRecipe;
    /** The constellation that is currently being studied. Undefined if none is selected. */
    private studiedConstellation?;
    /** The constellation that is currently being explored. Undefined if none is selected. */
    private exploredConstellation?;
    modifiers: MappedModifiers;
    /** Constellations which have a modifier that provides increased mastery xp */
    masteryXPConstellations: AstrologyRecipe[];
    /** Progress bar that is currently animated */
    private renderedProgressBar?;
    starDustItem?: AnyItem;
    goldenStardustItem?: AnyItem;
    shouldRefundStardust: boolean;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: AstrologySkillData): void;
    postDataRegistration(): void;
    private isModifierUnlocked;
    /** Checks modifiers have been bought for the given constellation, modifier type and id */
    private isModifierBought;
    private refundStardust;
    private getConstellationInterval;
    private getStardustQuantity;
    getMasteryXPModifier(action: AstrologyRecipe): number;
    /** Recomputes the passive bonuses provided by this skill */
    private computeProvidedStats;
    protected preAction(): void;
    protected get actionRewards(): Rewards;
    protected postAction(): void;
    /** Queues up rendering for explored constellation modifiers */
    private queueModifierRender;
    private getModifierElement;
    /** Checks for stardust costs, and uses them. Returns true if successful. */
    private checkStardustCostsAndConsume;
    isStarMaxValue(constellation: AstrologyRecipe, type: AstrologyModifierType, modID: number): boolean;
    countMaxValuesInConstellation(constellation: AstrologyRecipe): number;
    /** Perform actions when an upgrade of a star is performed */
    private onConstellationUpgrade;
    getStandardModifierUpgradeCost(constellation: AstrologyRecipe, modID: number): number;
    getUniqueModifierUpgradeCost(constellation: AstrologyRecipe, modID: number): number;
    upgradeStandardModifier(constellation: AstrologyRecipe, modID: number): void;
    upgradeUniqueModifier(constellation: AstrologyRecipe, modID: number): void;
    protected get masteryModifiedInterval(): number;
    onLoad(): void;
    onPageChange(): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    protected onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    /** Checks the mastery level of a constellation and unlocks new modifiers if they are unset */
    private unlockNewModifiers;
    setUnlock(isUnlocked: boolean): void;
    /** Unlocks new modifiers when the skill is unlocked */
    onSkillUnlock(): void;
    /** Unlocks new modifiers when a constellation is unlocked by level up */
    unlockNewModifierOnLevelUp(oldLevel: number): void;
    protected onMasteryLevelUp(action: AstrologyRecipe, oldLevel: number, newLevel: number): void;
    /** Sets rendering when a constellation is explored */
    private onConstellationExplore;
    render(): void;
    private renderProgressBar;
    private renderStardustRates;
    private renderConstellationRates;
    private renderStardustQuantities;
    private renderExploredStandardMods;
    private renderExploredUniqueMods;
    private renderVisibleConstellations;
    private renderUpgradeCosts;
    /** Callback function for when the "View All Active Modifiers" button is clicked */
    viewAllModifiersOnClick(): void;
    /** Callback function for when the "Study" button is clicked */
    studyConstellationOnClick(constellation: AstrologyRecipe): void;
    /** Callback function for when the "Explore" button is clicked */
    exploreConstellationOnClick(constellation: AstrologyRecipe): void;
    /** Callback function for when the individual reroll button for a standard modifier is clicked */
    rerollSpecificStandardModifierOnClick(constellation: AstrologyRecipe, modID: number): void;
    /** Callback function for when the individual reroll button for a unique modifier is clicked */
    rerollSpecificUniqueModifierOnClick(constellation: AstrologyRecipe, modID: number): void;
    protected resetActionState(): void;
    private encodeAction;
    encode(writer: SaveWriter): SaveWriter;
    private decodeAction;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    rollForMeteorite(): void;
    testTranslations(): void;
    /** Mastery level required to unlock each standard modifier */
    static readonly standardModifierLevels: number[];
    /** Mastery level required to unlock each unique modifier */
    static readonly uniqueModifierLevels: number[];
    static readonly standardModifierCosts: number[];
    static readonly uniqueModifierCosts: number[];
    static readonly baseStardustChance = 5;
    static readonly baseGoldenStardustChance = 2;
    static readonly baseInterval = 3000;
    /** The chances to roll for a modifier */
    static readonly modifierMagnitudeChances: number[];
}
declare enum AstrologyModifierType {
    Standard = 0,
    Unique = 1
}
declare class AstrologyRenderQueue extends GatheringSkillRenderQueue<AstrologyRecipe> {
    /** Updates the XP, Mastery XP, Mastery Pool XP, Interval, Stardust Chances and Doubling Chance of all constellations */
    constellationRates: boolean;
    /** Updates the owned stardust quantities for the visible explored constellation */
    stardustQuantities: boolean;
    /** Updates the specific standard modifier in the explore panel */
    exploredStandardModifiers: Set<number>;
    /** Updates the specific unique modifier in the explore panel */
    exploredUniqueModifiers: Set<number>;
    /** Updates the chances to obtain stardust and their doubling chance */
    stardustRates: boolean;
    /** Updates which constellations to display, and if the explore panel should be visible */
    visibleConstellations: boolean;
    /** Updates the costs to reroll a modifier */
    rerollCosts: boolean;
}
