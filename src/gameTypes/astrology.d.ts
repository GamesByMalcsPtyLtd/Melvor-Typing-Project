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
    _name: string;
    _media: string;
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
    readonly _media = "assets/media/skills/astrology/astrology.svg";
    getTotalUnlockedMasteryActions(): number;
    renderQueue: AstrologyRenderQueue;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): AstrologyRecipe;
    get meteoriteChance(): number;
    get stardustChance(): number;
    get goldenStardustChance(): number;
    /** The constellation that is currently being studied. Undefined if none is selected. */
    get activeConstellation(): AstrologyRecipe;
    /** The constellation that is currently being studied. Undefined if none is selected. */
    studiedConstellation?: AstrologyRecipe;
    /** The constellation that is currently being explored. Undefined if none is selected. */
    exploredConstellation?: AstrologyRecipe;
    modifiers: MappedModifiers;
    /** Constellations which have a modifier that provides increased mastery xp */
    masteryXPConstellations: AstrologyRecipe[];
    /** Progress bar that is currently animated */
    renderedProgressBar?: ProgressBar;
    starDustItem?: AnyItem;
    goldenStardustItem?: AnyItem;
    shouldRefundStardust: boolean;
    shouldRefundStardustAgain: boolean;
    readonly newRefundDate = 1666051201000;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: AstrologySkillData): void;
    postDataRegistration(): void;
    isModifierUnlocked(constellation: AstrologyRecipe, type: AstrologyModifierType, modID: number): boolean;
    /** Checks modifiers have been bought for the given constellation, modifier type and id */
    isModifierBought(constellation: AstrologyRecipe, type: AstrologyModifierType, modID: number): boolean;
    refundStardust(): void;
    refundStardustAgain(): void;
    getConstellationInterval(constellation: AstrologyRecipe): number;
    getStardustQuantity(action: AstrologyRecipe): number;
    getMasteryXPModifier(action: AstrologyRecipe): number;
    /** Recomputes the passive bonuses provided by this skill */
    computeProvidedStats(updatePlayer?: boolean): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    /** Queues up rendering for explored constellation modifiers */
    queueModifierRender(constellation: AstrologyRecipe, type: AstrologyModifierType, modId: number): void;
    getModifierElement(modifier: AstrologyModifier, value: number): ModifierArray;
    /** Checks for stardust costs, and uses them. Returns true if successful. */
    checkStardustCostsAndConsume(item: AnyItem, quantity: number): boolean;
    isStarMaxValue(constellation: AstrologyRecipe, type: AstrologyModifierType, modID: number): boolean;
    countMaxValuesInConstellation(constellation: AstrologyRecipe): number;
    /** Perform actions when an upgrade of a star is performed */
    onConstellationUpgrade(constellation: AstrologyRecipe, type: AstrologyModifierType, modID: number): void;
    getStandardModifierUpgradeCost(constellation: AstrologyRecipe, modID: number): number;
    getUniqueModifierUpgradeCost(constellation: AstrologyRecipe, modID: number): number;
    upgradeStandardModifier(constellation: AstrologyRecipe, modID: number): void;
    upgradeUniqueModifier(constellation: AstrologyRecipe, modID: number): void;
    get masteryModifiedInterval(): number;
    onLoad(): void;
    onPageChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    getErrorLog(): string;
    /** Checks the mastery level of a constellation and unlocks new modifiers if they are unset */
    unlockNewModifiers(constellation: AstrologyRecipe): void;
    setUnlock(isUnlocked: boolean): void;
    /** Unlocks new modifiers when the skill is unlocked */
    onSkillUnlock(): void;
    /** Unlocks new modifiers when a constellation is unlocked by level up */
    unlockNewModifierOnLevelUp(oldLevel: number): void;
    onMasteryLevelUp(action: AstrologyRecipe, oldLevel: number, newLevel: number): void;
    /** Sets rendering when a constellation is explored */
    onConstellationExplore(): void;
    render(): void;
    renderProgressBar(): void;
    renderStardustRates(): void;
    renderConstellationRates(): void;
    renderStardustQuantities(): void;
    renderExploredStandardMods(): void;
    renderExploredUniqueMods(): void;
    renderVisibleConstellations(): void;
    renderUpgradeCosts(): void;
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
    resetActionState(): void;
    encodeAction(writer: SaveWriter, recipe: AstrologyRecipe): void;
    encode(writer: SaveWriter): SaveWriter;
    decodeAction(reader: SaveWriter, version: number): void;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
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
