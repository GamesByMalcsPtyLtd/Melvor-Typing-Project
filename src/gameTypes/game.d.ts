/** Events emitted by the Game object */
declare type GameEvents = {
    requirementChange: RequirementChangedEvent;
    skillAction: SkillActionEvent;
};
declare class Game extends GameEventEmitter<GameEvents> implements Serializable, EncodableObject {
    loopInterval: number;
    loopStarted: boolean;
    disableClearOffline: boolean;
    isUnpausing: boolean;
    previousTickTime: number;
    enableRendering: boolean;
    maxOfflineTicks: number;
    registeredNamespaces: NamespaceMap;
    /** Contains dummy namespaces used for unregistered data that is to be kept/displayed */
    dummyNamespaces: NamespaceMap;
    openPage?: Page;
    /** Default Combat Triangle. Preinitialized for use as default variable. */
    normalCombatTriangleSet: CombatTriangleSet;
    /** Default Realm Selection. Preinitialized for use as default variable. */
    defaultRealm: Realm;
    /** Default Damage Type (Normal). Preinitialized for convenience. */
    normalDamage: DamageType;
    /** Standard Normal Attack. Preinitialized for use as default variable. */
    normalAttack: SpecialAttack;
    /** Empty Equipment Item. Used as a placeholder for equipment slots that are empty. */
    emptyEquipmentItem: EquipmentItem;
    /** Empty Food Item. Used as a placeholder for food slots that are empty */
    emptyFoodItem: FoodItem;
    /** Unknown Combat Area. Used as a default value when a monster has no area, and for class initialization. */
    unknownCombatArea: CombatArea;
    activeActionPage: Page;
    /** Save state property. Last time the game processed time outside of golbin raid. */
    tickTimestamp: number;
    /** Last time the game was locally saved */
    saveTimestamp: number;
    /** Save state property. Currently active action */
    activeAction: ActiveAction | undefined;
    /** Save state property. Currently paused action */
    pausedAction: ActiveAction | undefined;
    /** Save State Property. If the game is currently paused. */
    _isPaused: boolean;
    /** Save State Property. If the player has read the Merchant's permite item. */
    merchantsPermitRead: boolean;
    /** Save state property. The skill level cap increases that are currently active. */
    activeLevelCapIncreases: SkillLevelCapIncrease[];
    levelCapIncreasesBeingSelected: SkillLevelCapIncrease[];
    get levelCapIncreasesBought(): number;
    /** Save State property. The number of skill level caps that have been purchased */
    _levelCapIncreasesBought: number;
    get abyssalLevelCapIncreasesBought(): number;
    /** Save State property. The number of abyssal level caps that have been purchased */
    _abyssalLevelCapIncreasesBought: number;
    /** Save state property. Current gamemode */
    currentGamemode: Gamemode;
    /** Save state property. Name of loaded character. */
    characterName: string;
    /** Save state property. */
    bank: Bank;
    /** Save state property. */
    combat: CombatManager;
    /** Save state property. */
    golbinRaid: RaidManager;
    /** Save State Property. */
    minibar: Minibar;
    /** Save State Property. */
    petManager: PetManager;
    /** Save State Property. */
    shop: Shop;
    /** Save State Property. */
    itemCharges: ItemCharges;
    /** Save State Property. */
    tutorial: Tutorial;
    /** Save State Property. */
    potions: PotionManager;
    /** Save State Property. */
    stats: Statistics;
    /** Save State Property. */
    settings: Settings;
    /** Save State Property. Manages keybindings and keyboard inputs */
    keyboard: KeyboardInputManager;
    /** Convenience reference to registered GP currency */
    gp: GP;
    /** Convenience reference to registered SlayerCoins currency */
    slayerCoins: SlayerCoins;
    /** Convenience reference to registered RaidCoins currency */
    raidCoins: RaidCoins;
    /** Convenience reference to registered AbyssalPieces currency */
    abyssalPieces?: AbyssalPieces;
    /** Convenience reference to registered AbyssalSlayerCoins currency */
    abyssalSlayerCoins?: AbyssalSlayerCoins;
    /** Save State Property. Stores playfab news that the user has read. */
    readNewsIDs: string[];
    /** Save State Property. Stores the last version of the game the user has loaded. */
    lastLoadedGameVersion: string;
    completion: Completion;
    events: GameEventSystem;
    attack: Attack;
    strength: Strength;
    defence: Defence;
    hitpoints: Hitpoints;
    ranged: Ranged;
    prayer: Prayer;
    slayer: Slayer;
    thieving: Thieving;
    firemaking: Firemaking;
    mining: Mining;
    woodcutting: Woodcutting;
    herblore: Herblore;
    smithing: Smithing;
    altMagic: AltMagic;
    runecrafting: Runecrafting;
    crafting: Crafting;
    fletching: Fletching;
    summoning: Summoning;
    fishing: Fishing;
    cooking: Cooking;
    agility: Agility;
    astrology: Astrology;
    farming: Farming;
    township: Township;
    cartography?: Cartography;
    archaeology?: Archaeology;
    harvesting?: Harvesting;
    corruption?: Corruption;
    lore: Lore;
    eventManager: EventManager;
    notifications: NotificationsManager;
    telemetry: Telemetry;
    clueHunt: ClueHunt;
    birthdayEvent2023CompletionTracker: boolean[];
    dropWeightCache: Map<[number, number, number][], number>;
    refundedAstrology: boolean;
    refundedAstrologyAgain: boolean;
    renderQueue: {
        title: boolean;
        combatMinibar: boolean;
        activeSkills: boolean;
        sidebarSkillUnlock: boolean;
        clueHuntStep6: boolean;
        birthdayEventProgress: boolean;
        realmVisibility: boolean;
    };
    realms: NamespaceRegistry<Realm>;
    damageTypes: NamespaceRegistry<DamageType>;
    combatTriangleSets: NamespaceRegistry<CombatTriangleSet>;
    attackStyles: NamespaceRegistry<AttackStyle>;
    combatEffectGroups: NamespaceRegistry<CombatEffectGroup>;
    combatEffectTemplates: NamespaceRegistry<CombatEffectTemplate>;
    combatEffects: NamespaceRegistry<CombatEffect>;
    combatEffectTables: NamespaceRegistry<CombatEffectTable>;
    specialAttacks: NamespaceRegistry<SpecialAttack>;
    currencies: NamespaceRegistry<Currency>;
    equipmentSlots: NamespaceRegistry<EquipmentSlot>;
    items: ItemRegistry;
    pages: NamespaceRegistry<Page>;
    actions: NamespaceRegistry<Action>;
    /** Registry of all active actions */
    activeActions: NamespaceRegistry<ActiveAction>;
    /** Registry of all passive actions */
    passiveActions: NamespaceRegistry<PassiveAction>;
    _passiveTickers: PassiveAction[];
    actionPageMap: Map<Action, Page>;
    skillPageMap: Map<AnySkill, Page[]>;
    /** Registery of all skills */
    skills: NamespaceRegistry<AnySkill>;
    /** Registry of all skills that have mastery */
    masterySkills: NamespaceRegistry<SkillWithMastery<MasteryAction, MasterySkillData, SkillWithMasteryEvents, MasterySkillModificationData>>;
    monsters: NamespaceRegistry<Monster>;
    monsterAreas: Map<Monster, CombatArea | SlayerArea>;
    combatPassives: NamespaceRegistry<CombatPassive>;
    /** Registry of all combat area categories. Categories contain the display order of their areas */
    combatAreaCategories: NamespaceRegistry<CombatAreaCategory>;
    combatAreaCategoryOrder: NamespacedArray<CombatAreaCategory>;
    combatAreas: CombatAreaRegistry;
    slayerAreas: NamespaceRegistry<SlayerArea>;
    dungeons: NamespaceRegistry<Dungeon>;
    abyssDepths: NamespaceRegistry<AbyssDepth>;
    strongholds: NamespaceRegistry<Stronghold>;
    combatEvents: NamespaceRegistry<CombatEvent>;
    prayers: NamespaceRegistry<ActivePrayer>;
    attackSpellbooks: NamespaceRegistry<AttackSpellbook>;
    attackSpells: NamespaceRegistry<AttackSpell>;
    curseSpells: NamespaceRegistry<CurseSpell>;
    auroraSpells: NamespaceRegistry<AuroraSpell>;
    pets: NamespaceRegistry<Pet>;
    skillLevelCapIncreases: NamespaceRegistry<SkillLevelCapIncrease>;
    gamemodes: NamespaceRegistry<Gamemode>;
    steamAchievements: Map<string, SteamAchievement>;
    itemSynergies: Map<EquipmentItem, ItemSynergy[]>;
    randomGemTable: DropTable;
    randomSuperiorGemTable: DropTable;
    randomAbyssalGemTable: DropTable;
    randomFragmentTable: DropTable;
    randomFiremakingOilTable: DropTable;
    ancientRelics: NamespaceRegistry<AncientRelic>;
    ancientRelicsDisplayOrder: NamespacedArray<AnySkill>;
    skillTreesDisplayOrder: NamespacedArray<AnySkill>;
    /** Registry of all modifiers */
    modifierRegistry: ModifierRegistry;
    /** Utility class for managing realm unlocks */
    realmManager: RealmManager;
    softDataRegQueue: SoftDataDependantElement<any>[];
    get unlockedRealms(): Realm[];
    get playerCombatLevel(): number;
    get playerNormalCombatLevel(): number;
    get playerAbyssalCombatLevel(): number;
    get isPaused(): boolean;
    get isGolbinRaid(): boolean;
    /** Quick refereence for player modifiers */
    get modifiers(): PlayerModifierTable;
    get isBirthdayEvent2023Complete(): boolean;
    readonly attackSpellScopeSource: AttackSpellScopeSource;
    tokenItemStats: StatProvider;
    constructor();
    fetchAndRegisterDataPackage(url: string): Promise<void>;
    /** Performs the registration of a data package to the game */
    registerDataPackage(dataPackage: GameDataPackage): void;
    /** Registers game data under the given namespace */
    registerGameData(namespace: DataNamespace, gameData: GameData): void;
    queueForSoftDependencyReg<DataType>(data: DataType, object: SoftDataDependant<DataType>, where?: string): void;
    postDataRegistration(): void;
    registerAttackStyles(namespace: DataNamespace, data: AttackStyleData[]): void;
    registerItemData(namespace: DataNamespace, data: AnyItemData[]): void;
    registerAttackData(namespace: DataNamespace, data: AttackData[]): void;
    registerCombatEffectGroups(namespace: DataNamespace, data: CombatEffectGroupData[]): void;
    registerCombatEffectTemplates(namespace: DataNamespace, data: CombatEffectTemplateData[]): void;
    registerCombatEffects(namespace: DataNamespace, data: AnyCombatEffectData[]): void;
    registerCombatEffectTables(namespace: DataNamespace, data: CombatEffectTableData[]): void;
    registerCombatPassiveData(namespace: DataNamespace, data: CombatPassiveData[]): void;
    registerMonsterData(namespace: DataNamespace, data: MonsterData[]): void;
    registerRandomMonsters(monsterIDs: string[], monsterArray: Monster[]): void;
    registerCombatAreaData(namespace: DataNamespace, data: CombatAreaData[]): void;
    registerSlayerAreaData(namespace: DataNamespace, data: SlayerAreaData[]): void;
    registerDungeonData(namespace: DataNamespace, data: DungeonData[]): void;
    registerAbyssDepthData(namespace: DataNamespace, data: DungeonData[]): void;
    registerStrongholdData(namespace: DataNamespace, data: StrongholdData[]): void;
    registerCombatAreaCategories(namespace: DataNamespace, data: CombatAreaCategoryData[]): void;
    /** Provides backwards compatability for the old data format for combat area orders */
    registerOldAreaDisplayOrders(gameData: GameData): void;
    registerCombatEventData(namespace: DataNamespace, data: CombatEventData[]): void;
    registerSlayerTaskCategories(namespace: DataNamespace, data: SlayerTaskCategoryData[]): void;
    registerPrayerData(namespace: DataNamespace, data: PrayerData[]): void;
    registerAttackSpellbookData(namespace: DataNamespace, data: AttackSpellbookData[]): void;
    registerAttackSpellData(namespace: DataNamespace, data: AttackSpellData[]): void;
    registerOldAttackSpellData(namespace: DataNamespace, data: OldAttackSpellData[], spellbook: string): void;
    registerStandardSpellData(namespace: DataNamespace, data: OldAttackSpellData[]): void;
    registerAncientSpellData(namespace: DataNamespace, data: OldAttackSpellData[]): void;
    registerArchaicSpellData(namespace: DataNamespace, data: OldAttackSpellData[]): void;
    registerCurseSpellData(namespace: DataNamespace, data: CurseSpellData[]): void;
    registerAuroraSpellData(namespace: DataNamespace, data: AuroraSpellData[]): void;
    registerPets(namespace: DataNamespace, data: PetData[]): void;
    registerShopCategories(namespace: DataNamespace, data: ShopCategoryData[]): void;
    registerShopPurchases(namespace: DataNamespace, data: ShopPurchaseData[]): void;
    registerShopUpgradeChains(namespace: DataNamespace, data: ShopUpgradeChainData[]): void;
    registerItemSynergies(data: ItemSynergyData[]): void;
    registerSkillLevelCapIncreases(namespace: DataNamespace, data: SkillLevelCapIncreaseData[]): void;
    registerGamemodes(namespace: DataNamespace, data: GamemodeData[]): void;
    registerSteamAchievements(data: SteamAchievementData[]): void;
    registerRealms(namespace: DataNamespace, data: RealmData[]): void;
    registerDamageTypes(namespace: DataNamespace, data: DamageTypeData[]): void;
    registerCombatTriangleSets(namespace: DataNamespace, data: CombatTriangleSetData[]): void;
    registerPages(namespace: DataNamespace, data: PageData[]): void;
    registerAncientRelics(namespace: DataNamespace, data: AncientRelicData[]): void;
    registerEquipmentSlotData(namespace: DataNamespace, data: EquipmentSlotData[]): void;
    registerModifiers(namespace: DataNamespace, data: ModifierData[]): void;
    /** Registers a skill. Returns the constructed instance of the skill */
    registerSkill<T extends AnySkill>(namespace: DataNamespace, constructor: new (namespace: DataNamespace, game: Game) => T & Partial<PassiveAction> & Partial<ActiveAction>): T;
    applyDataModifications(modificationData: GameDataModifications): void;
    /**
     * Gets an array of equipment stats from data
     * @param statsData The array of equipment stat data
     * @returns Any array of equipment stats
     */
    getEquipStatsFromData(statsData: AnyEquipStatData[]): AnyEquipStat[];
    /**
     * Applies data modifications to an equipment stats array
     * @param equipStats The equipment stats array to modify
     * @param modData The modification data to apply
     * @returns A new modified equipment stats array
     */
    modifyEquipStats(equipStats: AnyEquipStat[], modData: EquipStatsModificationData): AnyEquipStat[];
    getModifierValuesFromArrayData(data: ModifierValuesArrayData): ModifierValue[];
    /**
     * Gets an array of modifier values from a record of modifier data
     * Note: This method should only be called during soft data registration
     * @param data The data to load
     * @returns An array of modifier values
     */
    getModifierValuesFromData(data: ModifierValuesRecordData): ModifierValue[];
    getEnemyModifierValuesFromData(data: ModifierValuesRecordData): ModifierValue[];
    _modifyModifierValues(modifiers: ModifierValue[], modData: ModifierValuesModificationData, getAlias: (key: string) => ModifierAliasInfo | undefined, getValues: (data: ModifierValuesRecordData) => ModifierValue[]): ModifierValue[];
    /** Applies modification data to a ModifierValue[] array, returning the mutated array */
    modifyModifierValues(modifiers: ModifierValue[], modData: ModifierValuesModificationData): ModifierValue[];
    /** Applies modification data to an enemy ModifierValue[] array, returning the mutated array */
    modifyEnemyModifierValues(modifiers: ModifierValue[], modData: ModifierValuesModificationData): ModifierValue[];
    /** Constructs a Single or Table CombatEffectApplicator from data */
    getCombatEffectApplicatorFromData(data: AnyCombatEffectApplicatorData): AnyCombatEffectApplicator;
    /** Constructs an array of Single or Table CombatEffectApplictors from an array of data */
    getCombatEffectApplicatorsFromData(data: AnyCombatEffectApplicatorData[]): AnyCombatEffectApplicator[];
    /** Constructs a Single or Table CombatEffectApplicator from data */
    getCombatEffectApplicatorWithTriggerFromData(data: TriggeredCombatEffectApplicatorData): AnyCombatEffectApplicator;
    /** Constructs an array of Single or Table CombatEffectApplictors from an array of data */
    getCombatEffectApplicatorsWithTriggersFromData(data: TriggeredCombatEffectApplicatorData[]): AnyCombatEffectApplicator[];
    /** Applies modification data to a CombatEffectApplicator array. Removals are processed before additions. */
    modifyCombatEffectApplicators(applicators: CombatEffectApplicator[], modData: CombatEffectApplicatorModificationData, className?: string): void;
    getRequirementFromData(data: AnyRequirementData): AnyRequirement;
    /** Takes an array of requirement data, and returns an array of requirements */
    getRequirementsFromData(data: AnyRequirementData[]): AnyRequirement[];
    /**
     * Takes an array of requirements and applies data modifications to them
     * @param requirements The requirements to modify
     * @param modData The modifications to apply
     * @returns The modified requirements array
     */
    modifyRequirements(requirements: AnyRequirement[], modData: RequirementsModificationData): AnyRequirement[];
    /** Constructs a CurrencyQuantity object from data */
    getCurrencyQuantity(data: IDQuantity): CurrencyQuantity;
    /** Constructs an array of CurrencyQuantity objects from data */
    getCurrencyQuantities(data: IDQuantity[]): CurrencyQuantity[];
    modifyCurrencyQuantities(quantities: CurrencyQuantity[], data: CurrencyQuantitiesModificationData): CurrencyQuantity[];
    getEquipmentSlotID(slotID: string): string;
    /** Gets EquipmentSlots from an array of ids. Supports local IDs for demo slots. */
    getEquipmentSlotsFromData(data: string[]): EquipmentSlot[];
    getSkillValuesFromData(data: SkillIDValue[]): SkillValue[];
    getDummyData(fullID: string): DummyData;
    constructDummyObject<T>(id: string, constructor: new (namespace: DataNamespace, localID: string, game: Game) => T): T;
    startMainLoop(): void;
    stopMainLoop(): void;
    pauseActiveSkill(fromBlur?: boolean): void;
    unpauseActiveSkill(fromFocus?: boolean): Promise<void>;
    /** Attempts to stop the currently active action, if it belongs to a skill other than the specified one.
     *  Returns true if the active action could not be stopped
     */
    idleChecker(action: ActiveAction | undefined): boolean;
    stopActiveAction(): void;
    /** Things to do after a save has loaded */
    onLoad(): void;
    /** Performs set up tasks for the current gamemode when loading a save */
    setUpGamemodeOnLoad(): void;
    /** Processes time since the last setInterval */
    processTime(): void;
    /** Runs the specified amount of game ticks */
    runTicks(ticksToRun: number): void;
    tick(): void;
    queueRequirementRenders(): void;
    render(): void;
    checkUniqueBirthdayEventCompletions(): void;
    updateBirthdayEventProgress(): void;
    renderBirthdayEventProgress(): void;
    renderGameTitle(): void;
    /** Updates the state of the combat minibar */
    renderCombatMinibar(): void;
    /** Renders Skill unlock available in Ancient Relic gamemode */
    renderSidebarSkillUnlock(): void;
    /** Renders which skills are active in the sidebar */
    renderActiveSkills(): void;
    /** The last time the game loop ran */
    _previousLoopTime: number;
    loop(): void;
    getErrorLog(error: unknown, title: string, modError: Modding.ModError): string;
    showBrokenGame(error: unknown, title: string): void;
    clearActiveAction(save?: boolean): void;
    /** Clears an action that was paused or active, if it is in either state */
    clearActionIfActiveOrPaused(action: ActiveAction): void;
    runOfflineTicks(totalTicks: number, loadingElem?: OfflineLoadingElement): Promise<void>;
    getOfflineTimeDiff(): {
        timeDiff: number;
        originalTimeDiff: number;
    };
    trackOfflineTelemetry(oldSnapshot: OfflineSnapshot, newSnapshot: OfflineSnapshot, timeDiff: number): void;
    processOffline(): Promise<void>;
    snapshotOffline(): OfflineSnapshot;
    /** Resets properties used to track offline progress */
    resetOfflineTracking(): void;
    /** Puts the game in a state where offline will progress the amount specified */
    testForOffline(timeToGoBack: number): Promise<void>;
    /** If a save is scheduled to happen outside of the auto-save interval */
    _isSaveScheduled: boolean;
    /** Schedules a save to occur after the next game loop */
    scheduleSave(): void;
    /** Handles checking if an auto or scheduled save should occur */
    autoSave(time: number): void;
    /** The last timestamp when rich presence was updated */
    _lastRichPresenceUpdate: number;
    updateRichPresence(time: number): void;
    /** The time interval when the game is determined to be inactive (currently 5 mins) */
    readonly INACTIVITY_INTERVAL: number;
    /** The last timestamp of when activity to the game was detected. (Keyboard, Touch or mous interaction) */
    _inactivityTime: number;
    _frameRateThrottled: boolean;
    /** Controls the throttling of the PIXI.js framerate when the player is inactive */
    gameInteractionUpdate(time: number): void;
    onGameInteraction(): void;
    /** The last timestamp when the cloud was updated */
    _lastCloudUpdate: number;
    cloudUpdate(time: number): void;
    _lastSaveBodySize: number;
    _lastSaveHeaderSize: number;
    generateSaveString(): string;
    /** Attempts to get a header from a save string. If save is invalid, returns undefined instead. */
    getHeaderFromSaveString(saveString: string): Promise<SaveGameHeader | SaveLoadError>;
    getSaveHeader(): SaveGameHeader;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getLootTableWeight(table: [number, number, number][]): number;
    getItemFromLootTable(table: [number, number, number][]): OldItemQuantity2;
    getSkillUnlockCount(): number;
    getSkillUnlockCost(): number;
    /** Processes level cap increases to skills */
    increaseSkillLevelCaps(capIncrease: SkillLevelCapIncrease, reqSet: SkillLevelCapRequirementSet): void;
    queueNextRandomLevelCapModal(): void;
    selectRandomLevelCapIncrease(capIncrease: SkillLevelCapIncrease, increase: SkillCapIncrease): void;
    fireLevelCapIncreaseModal(skill: AnySkill): void;
    fireAbyssalLevelCapIncreaseModal(skill: AnySkill): void;
    /** Attempts to purchase a skill level cap for a skill */
    purchaseSkillLevelCaps(skill: AnySkill, amount?: number): void;
    /** Attempts to purchase an abyssal skill level cap for a skill */
    purchaseAbyssalSkillLevelCaps(skill: AnySkill, amount?: number): void;
    /** Checks a single requirement and optionally displays an error message to the player */
    checkRequirement(requirement: AnyRequirement, notifyOnFailure?: boolean, slayerLevelReq?: number): boolean;
    /** Checks an array of rqeuirements, and optionally displays an error message to the player for the first failed requirement */
    checkRequirements(requirements: AnyRequirement[], notifyOnFailure?: boolean, slayerLevelReq?: number): boolean;
    /** Returns true if the player owns the item in their bank or equipment */
    isItemOwned(item: AnyItem): boolean;
    /** Returns the Combat or Slayer area a monster is found in */
    getMonsterArea(monster: Monster): CombatArea | SlayerArea;
    getPageForAction(action: Action): Page | undefined;
    getPageForActiveAction(): Page;
    getPagesForSkill(skill: AnySkill): Page[] | undefined;
    checkSteamAchievements(): void;
    isAchievementMet(achievement: SteamAchievement): boolean;
    /** Sets up the current gamemode to it's starting state */
    setupCurrentGamemode(): void;
    /**
     * Computes the stats currently provided by token items
     * @param updatePlayer If the stats of the player should be recomputed
     */
    computeTokenItemStats(updatePlayer?: boolean): void;
    getItemFromOldID(itemID: number, idMap: NumericIDMap): AnyItem | undefined;
    /** Converts the data from an old format save */
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
    /** Takes the old offline variable and converts it to the new skill format */
    convertOldOffline(offline: OldOffline, idMap: NumericIDMap): void;
    readonly steamAchievementNames: string[];
}
/** Time between auto-saves in [ms] */
declare const AUTO_SAVE_INTERVAL = 10000;
/** Time between checking for updates to the cloud in [ms] */
declare const CLOUD_UPDATE_INTERVAL = 10000;
/** Time between rich presence updates in [ms] */
declare const RICH_PRESENCE_UPDATE_INTERVAL = 10000;
declare type DummyData = {
    dataNamespace: DataNamespace;
    localID: string;
};
interface OfflineSnapshot {
    currencies: Map<Currency, number>;
    prayerPoints: number;
    experience: Map<AnySkill, number>;
    levels: Map<AnySkill, number>;
    food: AnyItemQuantity[];
    equipment: Map<EquipmentSlot, AnyItemQuantity>;
    bank: Map<AnyItem, number>;
    loot: Map<AnyItem, number>;
    monsterKills: Map<Monster, number>;
    dungeonCompletion: Map<Dungeon, number>;
    taskCompletions: Map<SlayerTaskCategory, number>;
    summoningMarks: Map<SummoningRecipe, number>;
    itemCharges: Map<AnyItem, number>;
    cookingStockpile: Map<CookingCategory, AnyItemQuantity>;
    meteorite: MiningNodeSnapshot;
    onyxNode: MiningNodeSnapshot;
    orichaNode: MiningNodeSnapshot;
    ceruleanNode: MiningNodeSnapshot;
    abycite: MiningNodeSnapshot;
    mysticite: MiningNodeSnapshot;
    echocite: MiningNodeSnapshot;
    nightopalNode: MiningNodeSnapshot;
    shadowpearlNode: MiningNodeSnapshot;
    moonstoneNode: MiningNodeSnapshot;
    voidheartNode: MiningNodeSnapshot;
    ancientRelics: Map<AnySkill, Map<AncientRelic, number>>;
    townshipHealth: number;
    townshipStorageFull: boolean;
    soulPoints: number;
    abyssalExperience: Map<AnySkill, number>;
    abyssalLevels: Map<AnySkill, number>;
    corruptionsUnlocked: number;
}
interface MiningNodeSnapshot {
    totalFound: number;
    hpFound: number;
}
declare class OfflineLoadingElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    loadingContainer: HTMLDivElement;
    progressBar: HTMLDivElement;
    timeLeft: HTMLSpanElement;
    ticksPerSecond: HTMLSpanElement;
    errorContainer: HTMLDivElement;
    modText: HTMLHeadingElement;
    devText: HTMLHeadingElement;
    errorText: HTMLTextAreaElement;
    constructor();
    connectedCallback(): void;
    /**
     * Updates the current loading progress
     * @param totalTicks The total number of ticks being processed
     * @param ticksLeft The number of ticks left to process
     * @param tps The ticks per second the game is running at
     */
    updateProgress(totalTicks: number, ticksLeft: number, tps: number): void;
    setError(e: unknown, modError: Modding.ModError, log: string): void;
}
declare class OfflineProgressElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    messageContainer: HTMLDivElement;
    timeAway: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setMessages(game: Game, oldSnapshot: OfflineSnapshot, newSnapshot: OfflineSnapshot, timeDiff: number, offlineAction?: ActiveAction): void;
}
