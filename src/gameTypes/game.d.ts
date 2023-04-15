declare class Game implements Serializable, EncodableObject {
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
    /** Standard Normal Attack. Preinitialized for use as default variable. */
    normalAttack: SpecialAttack;
    /** Special Attack used to store the effect of the Absorbing Shield. */
    itemEffectAttack: ItemEffectAttack;
    /** Empty Equipment Item. Used as a placeholder for equipment slots that are empty. */
    emptyEquipmentItem: EquipmentItem;
    /** Empty Food Item. Used as a placeholder for food slots that are empty */
    emptyFoodItem: FoodItem;
    /** Unknown Combat Area. Used as a default value when a monster has no area, and for class initialization. */
    unknownCombatArea: CombatArea;
    decreasedEvasionStackingEffect: StackingEffect;
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
    /** Save State Property. */
    gp: GP;
    /** Save State Property. */
    slayerCoins: SlayerCoins;
    /** Save State Property. */
    raidCoins: RaidCoins;
    /** Save State Property. Stores playfab news that the user has read. */
    readNewsIDs: string[];
    /** Save State Property. Stores the last version of the game the user has loaded. */
    lastLoadedGameVersion: string;
    completion: Completion;
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
    lore: Lore;
    eventManager: EventManager;
    notifications: NotificationsManager;
    telemetry: Telemetry;
    dropWeightCache: Map<[number, number, number][], number>;
    refundedAstrology: boolean;
    refundedAstrologyAgain: boolean;
    renderQueue: {
        title: boolean;
        combatMinibar: boolean;
        activeSkills: boolean;
    };
    attackStyles: NamespaceRegistry<AttackStyle>;
    stackingEffects: NamespaceRegistry<StackingEffect>;
    specialAttacks: NamespaceRegistry<SpecialAttack>;
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
    masterySkills: NamespaceRegistry<SkillWithMastery<MasteryAction, MasterySkillData>>;
    monsters: NamespaceRegistry<Monster>;
    monsterAreas: Map<Monster, CombatArea | SlayerArea>;
    combatPassives: NamespaceRegistry<CombatPassive>;
    combatAreas: NamespaceRegistry<CombatArea>;
    combatAreaDisplayOrder: NamespacedArray<CombatArea>;
    slayerAreas: NamespaceRegistry<SlayerArea>;
    slayerAreaDisplayOrder: NamespacedArray<SlayerArea>;
    dungeons: NamespaceRegistry<Dungeon>;
    dungeonDisplayOrder: NamespacedArray<Dungeon>;
    combatEvents: NamespaceRegistry<CombatEvent>;
    prayers: NamespaceRegistry<ActivePrayer>;
    standardSpells: NamespaceRegistry<StandardSpell>;
    curseSpells: NamespaceRegistry<CurseSpell>;
    auroraSpells: NamespaceRegistry<AuroraSpell>;
    ancientSpells: NamespaceRegistry<AncientSpell>;
    archaicSpells: NamespaceRegistry<ArchaicSpell>;
    pets: NamespaceRegistry<Pet>;
    gamemodes: NamespaceRegistry<Gamemode>;
    steamAchievements: Map<string, SteamAchievement>;
    itemSynergies: Map<EquipmentItem, ItemSynergy[]>;
    randomGemTable: DropTable;
    randomSuperiorGemTable: DropTable;
    softDataRegQueue: [IDData, SoftDataDependant][];
    get playerCombatLevel(): number;
    get isPaused(): boolean;
    get isGolbinRaid(): boolean;
    /** Quick refereence for player modifiers */
    get modifiers(): PlayerModifiers;
    constructor();
    fetchAndRegisterDataPackage(url: string): Promise<void>;
    /** Performs the registration of a data package to the game */
    registerDataPackage(dataPackage: GameDataPackage): void;
    queueForSoftDependencyReg<T extends IDData>(data: T, object: SoftDataDependant<T>): void;
    postDataRegistration(): void;
    registerAttackStyles(namespace: DataNamespace, data: AttackStyleData[]): void;
    registerItemData(namespace: DataNamespace, data: AnyItemData[]): void;
    registerAttackData(namespace: DataNamespace, data: AttackData[]): void;
    registerStackingEffectData(namespace: DataNamespace, data: StackingEffectData[]): void;
    registerCombatPassiveData(namespace: DataNamespace, data: CombatPassiveData[]): void;
    registerMonsterData(namespace: DataNamespace, data: MonsterData[]): void;
    registerRandomMonsters(monsterIDs: string[], monsterArray: Monster[]): void;
    registerCombatAreaData(namespace: DataNamespace, data: CombatAreaData[]): void;
    registerSlayerAreaData(namespace: DataNamespace, data: SlayerAreaData[]): void;
    registerDungeonData(namespace: DataNamespace, data: DungeonData[]): void;
    registerCombatEventData(namespace: DataNamespace, data: CombatEventData[]): void;
    registerPrayerData(namespace: DataNamespace, data: PrayerData[]): void;
    registerStandardSpellData(namespace: DataNamespace, data: StandardSpellData[]): void;
    registerCurseSpellData(namespace: DataNamespace, data: CurseSpellData[]): void;
    registerAuroraSpellData(namespace: DataNamespace, data: AuroraSpellData[]): void;
    registerAncientSpellData(namespace: DataNamespace, data: AncientSpellData[]): void;
    registerArchaicSpellData(namespace: DataNamespace, data: ArchaicSpellData[]): void;
    registerPets(namespace: DataNamespace, data: PetData[]): void;
    registerShopCategories(namespace: DataNamespace, data: ShopCategoryData[]): void;
    registerShopPurchases(namespace: DataNamespace, data: ShopPurchaseData[]): void;
    registerShopUpgradeChains(namespace: DataNamespace, data: ShopUpgradeChainData[]): void;
    registerItemSynergies(data: ItemSynergyData[]): void;
    registerGamemodes(namespace: DataNamespace, data: GamemodeData[]): void;
    registerSteamAchievements(data: SteamAchievementData[]): void;
    registerPages(namespace: DataNamespace, data: PageData[]): void;
    /** Registers a skill. Returns the constructed instance of the skill */
    registerSkill<T extends AnySkill>(namespace: DataNamespace, constructor: new (namespace: DataNamespace, game: Game) => T & Partial<PassiveAction> & Partial<ActiveAction> & Partial<StatProvider>): T;
    applyDataModifications(modificationData: GameDataModifications): void;
    getPlayerModifiersFromData(data: PlayerModifierData): PlayerModifierObject;
    getRequirementFromData(data: AnyRequirementData): AnyRequirement;
    getDungeonRequirement(data: DungeonRequirementData): DungeonRequirement;
    getLevelRequirement(data: SkillLevelRequirementData): SkillLevelRequirement;
    getSlayerItemRequirement(data: SlayerItemRequirementData): SlayerItemRequirement;
    getItemFoundRequirement(data: ItemFoundRequirementData): ItemFoundRequirement;
    getMonsterKilledRequirement(data: MonsterKilledRequirementData): MonsterKilledRequirement;
    getShopPurchaseRequirement(data: ShopPurchaseRequirementData): ShopPurchaseRequirement;
    getTownshipBuildingRequirement(data: TownshipBuildingRequirementData): TownshipBuildingRequirement;
    getAllSkillLevelRequirement(data: AllSkillLevelRequirementData): AllSkillLevelRequirement;
    getSlayerTaskRequirement(data: SlayerTaskRequirementData): SlayerTaskRequirement;
    getCompletionRequirement(data: CompletionRequirementData): CompletionRequirement;
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
    /** Processes time since the last setInterval */
    processTime(): void;
    /** Runs the specified amount of game ticks */
    runTicks(ticksToRun: number): void;
    tick(): void;
    queueRequirementRenders(): void;
    render(): void;
    renderGameTitle(): void;
    /** Updates the state of the combat minibar */
    renderCombatMinibar(): void;
    /** Renders which skills are active in the sidebar */
    renderActiveSkills(): void;
    loop(): void;
    getErrorLog(error: unknown, title: string, modError: Modding.ModError): string;
    showBrokenGame(error: unknown, title: string): void;
    clearActiveAction(save?: boolean): void;
    /** Clears an action that was paused or active, if it is in either state */
    clearActionIfActiveOrPaused(action: ActiveAction): void;
    getOfflineTimeDiff(): {
        timeDiff: number;
        originalTimeDiff: number;
    };
    processOffline(): Promise<void>;
    snapShotOffline(): OfflineSnapshot;
    createOfflineModal(oldSnapshot: OfflineSnapshot, timeDiff: number): string;
    /** Resets properties used to track offline progress */
    resetOfflineTracking(): void;
    /** Puts the game in a state where offline will progress the amount specified */
    testForOffline(timeToGoBack: number): Promise<void>;
    testCombatInitializationStatParity(): void;
    /** If a save is scheduled to happen outside of the auto-save interval */
    _isSaveScheduled: boolean;
    /** Schedules a save to occur after the next game loop */
    scheduleSave(): void;
    /** Handles checking if an auto or scheduled save should occur */
    autoSave(time: number): void;
    /** The last timestamp when rich presence was updated */
    _lastRichPresenceUpdate: number;
    updateRichPresence(time: number): void;
    /** The last timestamp when the cloud was updated */
    _lastCloudUpdate: number;
    cloudUpdate(time: number): void;
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
    /** Checks a single skill requirement and optionally displays an error message to the player */
    checkSkillRequirement(requirement: SkillLevelRequirement, notifyOnFailure?: boolean): boolean;
    /** Checks a requirement for all skill levels, and optionally displays an error message to the player */
    checkAllSkillLevelRequirement(requirement: AllSkillLevelRequirement, notifyOnFailure?: boolean): boolean;
    /** Checks a single dungeon completion requirement and optionally displays an error message to the player */
    checkDungeonRequirement(requirement: DungeonRequirement, notifyOnFailure?: boolean): boolean;
    /** Checks a completion requirement and optionally displays an error message to the player */
    checkCompletionRequirement(requirement: CompletionRequirement, notifyOnFailure?: boolean): boolean;
    /** Checks a slayer item requirement, and optionally displays an error message to the player */
    checkSlayerItemRequirement(requirement: SlayerItemRequirement, notifyOnFailure?: boolean, slayerLevelReq?: number): boolean;
    /** Checks a shop purchase requirement, and optionally displays an error message to the player */
    checkShopPurchaseRequirement(requirement: ShopPurchaseRequirement, notifyOnFailure?: boolean): boolean;
    /** Checks a slayer task requirement, and optionally displays an error message to the player */
    checkSlayerTaskRequirement(requirement: SlayerTaskRequirement, notifyOnFailure?: boolean): boolean;
    checkItemFoundRequirement(requirement: ItemFoundRequirement, notifyOnFailure?: boolean): boolean;
    checkMonsterKilledRequirement(requirement: MonsterKilledRequirement, notifyOnFailure?: boolean): boolean;
    checkTownshipTaskRequirement(requirement: TownshipTaskCompletionRequirement, notifyOnFailure?: boolean): boolean;
    checkTownshipTutorialTaskRequirement(requirement: TownshipTutorialTaskCompletionRequirement, notifyOnFailure?: boolean): boolean;
    checkTownshipBuildingRequirement(requirement: TownshipBuildingRequirement, notifyOnFailure?: boolean): boolean;
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
    constructEventMatcher(data: GameEventMatcherData): GameEventMatcher;
    /** Processes an event */
    processEvent(event: GameEvent, interval?: number): void;
    checkSteamAchievements(): void;
    isAchievementMet(achievement: SteamAchievement): boolean;
    /** Sets up the current gamemode to it's starting state */
    setupCurrentGamemode(): void;
    getItemFromOldID(itemID: number, idMap: NumericIDMap): AnyItem | undefined;
    /** Converts the data from an old format save */
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
    /** Takes the old offline variable and converts it to the new skill format */
    convertOldOffline(offline: OldOffline, idMap: NumericIDMap): void;
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
    gp: number;
    slayercoins: number;
    prayerPoints: number;
    experience: Map<AnySkill, number>;
    levels: Map<AnySkill, number>;
    food: AnyItemQuantity[];
    equipment: Map<SlotTypes, AnyItemQuantity>;
    bank: Map<AnyItem, number>;
    loot: Map<AnyItem, number>;
    monsterKills: Map<Monster, number>;
    dungeonCompletion: Map<Dungeon, number>;
    taskCompletions: number[];
    summoningMarks: Map<SummoningRecipe, number>;
    itemCharges: Map<AnyItem, number>;
    cookingStockpile: Map<CookingCategory, AnyItemQuantity>;
    meteorite: MiningNodeSnapshot;
    onyxNode: MiningNodeSnapshot;
    orichaNode: MiningNodeSnapshot;
    ceruleanNode: MiningNodeSnapshot;
    townshipHealth: number;
    townshipStorageFull: boolean;
}
interface MiningNodeSnapshot {
    totalFound: number;
    hpFound: number;
}
