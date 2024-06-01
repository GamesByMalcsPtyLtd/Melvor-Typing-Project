interface AstrologyModifierData extends IStatObjectData {
    maxCount: number;
    costs: number[];
    unlockRequirements?: AnyRequirementData[];
}
interface AstrologyModifierModificationData extends IStatObjectModificationData {
    index: number;
    maxCount?: number;
    costs?: {
        modify?: {
            index: number;
            value: number;
        }[];
        add?: number[];
    };
    unlockRequirements?: {
        add?: AnyRequirementData[];
        remove?: string[];
    };
}
declare class AstrologyModifier implements SoftDataDependant<AstrologyModifierData> {
    stats: StatObject;
    maxCount: number;
    incrementValue: number;
    costs: AnyItemQuantity[];
    timesBought: number;
    /** If this modifier has been bought at least once */
    get isBought(): boolean;
    /** If this modifier has been bought maximum number of times */
    get isMaxed(): boolean;
    /** Returns the cost of upgrading this modifier to the next level */
    get upgradeCost(): AnyItemQuantity;
    unlockRequirements: AnyRequirement[];
    constructor(data: AstrologyModifierData, game: Game, itemID: string, where: string);
    registerSoftDependencies(data: AstrologyModifierData, game: Game): void;
    applyDataModification(data: AstrologyModifierModificationData, game: Game): void;
}
interface AstrologyRecipeData extends BasicSkillRecipeData {
    name: string;
    media: string;
    skillIDs: string[];
    /** Optional. Specifies the random items that can be recieved from this constellation. Defaults to startdust + golden stardust */
    randomItems?: string[];
    /** Optional. Whether this constellation can locate Meteorites. Requires Throne of the Herald. Defaults to true if unset. */
    canLocateMeteorites?: boolean;
    /** Optional. Whether this constellation can locate Starfalls. Requires Into the Abyss. Defaults to false if unset */
    canLocateStarfalls?: boolean;
    standardModifiers: AstrologyModifierData[];
    uniqueModifiers: AstrologyModifierData[];
    abyssalModifiers?: AstrologyModifierData[];
    masteryXPModifier?: string;
}
interface AstrologyRecipeModificationData extends BasicSkillRecipeModificationData {
    skillIDs?: {
        add?: string[];
        remove?: string[];
    };
    randomItems?: {
        add?: string[];
        remove?: string[];
    };
    canLocateMeteorites?: boolean;
    canLocateStarfalls?: boolean;
    standardModifiers?: AstrologyModifierModificationData[];
    uniqueModifiers?: AstrologyModifierModificationData[];
    abyssalModifiers?: AstrologyModifierModificationData[];
    masteryXPModifier?: string;
}
declare class AstrologyRecipe extends BasicSkillRecipe {
    get name(): string;
    get media(): string;
    skills: AnySkill[];
    /** Determines the random items that can be rolled for this constellation */
    randomItems: Item[];
    standardModifiers: AstrologyModifier[];
    uniqueModifiers: AstrologyModifier[];
    abyssalModifiers: AstrologyModifier[];
    masteryXPModifier?: Modifier;
    _name: string;
    _media: string;
    /** Cache of max value modifiers */
    maxValueModifiers: number;
    canLocateMeteorite: boolean;
    canLocateStarfalls: boolean;
    constructor(namespace: DataNamespace, data: AstrologyRecipeData, game: Game);
    applyDataModification(data: AstrologyRecipeModificationData, game: Game): void;
    /** Recomputes the maxValueModifiers property */
    computeMaxValueModifiers(): void;
    static readonly DEFAULT_RANDOM_ITEMS: string[];
}
declare class DummyAstrologyRecipe extends AstrologyRecipe {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare type AstrologyEvents = {
    action: AstrologyActionEvent;
} & SkillWithMasteryEvents;
interface AstrologySkillData extends MasterySkillData {
    recipes?: AstrologyRecipeData[];
    baseRandomItemChances?: ItemChanceData[];
}
interface AstrologyModificationData extends MasterySkillModificationData {
    recipes?: AstrologyRecipeModificationData[];
}
declare class Astrology extends GatheringSkill<AstrologyRecipe, AstrologySkillData, AstrologyEvents, AstrologyModificationData> {
    readonly _media = Assets.Astrology;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: AstrologyRecipe): boolean;
    isConstellationComplete(constellation: AstrologyRecipe): boolean;
    renderQueue: AstrologyRenderQueue;
    get actionInterval(): number;
    get actionLevel(): number;
    get masteryAction(): AstrologyRecipe;
    get meteoriteChance(): number;
    get starfallChance(): number;
    /** The constellation that is currently being studied. Undefined if none is selected. */
    get activeConstellation(): AstrologyRecipe;
    /** The constellation that is currently being studied. Undefined if none is selected. */
    studiedConstellation?: AstrologyRecipe;
    /** The constellation that is currently being explored. Undefined if none is selected. */
    exploredConstellation?: AstrologyRecipe;
    /** Constellations which have a modifier that provides increased mastery xp */
    masteryXPConstellations: AstrologyRecipe[];
    /** Progress bar that is currently animated */
    renderedProgressBar?: ProgressBarElement;
    baseRandomItemChances: Map<Item, number>;
    shouldRefundStardust: boolean;
    shouldRefundStardustAgain: boolean;
    readonly newRefundDate = 1666051201000;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: AstrologySkillData): void;
    modifyData(data: AstrologyModificationData): void;
    postDataRegistration(): void;
    isModifierUnlocked(constellation: AstrologyRecipe, type: AstrologyModifierType, modID: number): boolean;
    refundStardust(): void;
    refundStardustAgain(): void;
    /** Gets the chance to recieve a given random item from a constellation */
    getRandomItemChance(item: Item): number;
    /** Gets the quantity of a random item to give from a constellation */
    getRandomItemQuantity(item: Item, action: AstrologyRecipe): number;
    getConstellationInterval(constellation: AstrologyRecipe): number;
    addProvidedStats(): void;
    addAstroModProvidedStats(recipe: AstrologyRecipe, astroMods: AstrologyModifier[], multi: number): void;
    preAction(): void;
    get actionRewards(): Rewards;
    postAction(): void;
    /** Queues up rendering for explored constellation modifiers */
    queueModifierRender(constellation: AstrologyRecipe, type: AstrologyModifierType, modId: number): void;
    /** Gets the modified cost to upgrade an astrology modifier */
    getAstroModUpgradeCost(constellation: AstrologyRecipe, astroMod: AstrologyModifier): AnyItemQuantity;
    /** Checks for stardust costs, and uses them. Returns true if successful. */
    checkAndConsumeAstroModCosts(constellation: AstrologyRecipe, astroMod: AstrologyModifier): boolean;
    /** Perform actions when an upgrade of a star is performed */
    onConstellationUpgrade(constellation: AstrologyRecipe, type: AstrologyModifierType, modID: number): void;
    /** onClick callback function for upgrading standard modifiers */
    upgradeStandardModifier(constellation: AstrologyRecipe, modID: number): void;
    /** onClick callback function for upgrading unique modifiers */
    upgradeUniqueModifier(constellation: AstrologyRecipe, modID: number): void;
    /** onClick callback function for upgrading abyssal modifiers */
    upgradeAbyssalModifier(constellation: AstrologyRecipe, modID: number): void;
    get masteryModifiedInterval(): number;
    onLoad(): void;
    onPageChange(): void;
    queueBankQuantityRender(item: AnyItem): void;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    onAncientRelicUnlock(): void;
    getErrorLog(): string;
    /** Queues the rendering of the currently explored constellation's modifiers when it's unlock condition changes */
    queueModifierRenderOnUnlock(): void;
    onUnlock(): void;
    onMasteryLevelUp(action: AstrologyRecipe, oldLevel: number, newLevel: number): void;
    /** Sets rendering when a constellation is explored */
    onConstellationExplore(): void;
    onRealmChange(): void;
    render(): void;
    renderProgressBar(): void;
    renderStardustRates(): void;
    renderConstellationRates(): void;
    renderStardustQuantities(): void;
    renderExploredStandardMods(): void;
    renderExploredUniqueMods(): void;
    renderExploredAbyssalMods(): void;
    renderVisibleConstellations(): void;
    renderUpgradeCosts(): void;
    /** Callback function for when the "View All Active Modifiers" button is clicked */
    viewAllModifiersOnClick(): void;
    /** Callback function for when the "Study" button is clicked */
    studyConstellationOnClick(constellation: AstrologyRecipe): void;
    /** Callback function for when the "Explore" button is clicked */
    exploreConstellationOnClick(constellation: AstrologyRecipe): void;
    resetActionState(): void;
    encodeAction(writer: SaveWriter, recipe: AstrologyRecipe): void;
    encode(writer: SaveWriter): SaveWriter;
    decodeAction(reader: SaveWriter, version: number): void;
    createDummyAstroMods(timesBought: number[]): AstrologyModifier[];
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    setFromOldOffline(offline: OfflineSkill, idMap: NumericIDMap): void;
    rollForMeteorite(): void;
    rollForStarfall(): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    /** Mastery level required to unlock each standard modifier */
    static readonly standardModifierLevels: number[];
    /** Mastery level required to unlock each unique modifier */
    static readonly uniqueModifierLevels: number[];
    static readonly abyssalModifierLevels: number[];
    static readonly baseInterval = 3000;
    /** The chances to roll for a modifier */
    static readonly modifierMagnitudeChances: number[];
}
declare enum AstrologyModifierType {
    Standard = 0,
    Unique = 1,
    Abyssal = 2
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
    upgradeCosts: boolean;
    /** Updates the specific abyssal modifier in the explore panel */
    exploredAbyssalModifiers: Set<number>;
}
