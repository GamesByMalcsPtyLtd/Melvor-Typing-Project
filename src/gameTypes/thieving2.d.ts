interface ThievingNPCData extends BasicSkillRecipeData {
    name: string;
    media: string;
    perception: number;
    maxHit: number;
    /** @deprecated Use currencyDrops instead */
    maxGP?: number;
    /** Determines the maximum amounts of currencies that can drop from this NPC */
    currencyDrops: IDQuantity[];
    uniqueDrop?: IDQuantity;
    lootTable: DropTableData[];
    /** Determines the allowed damage types a player can use to pickpocket the NPC. Unset means all damage types allowed. */
    allowedDamageTypeIDs?: string[];
}
interface ThievingNPCModificationData extends BasicSkillRecipeModificationData {
    perception?: number;
    maxHit?: number;
    currencyDrops?: CurrencyQuantitiesModificationData;
    uniqueDrop?: IDQuantity;
    lootTable?: {
        add?: DropTableData[];
        remove?: string[];
    };
    allowedDamageTypeIDs?: {
        add?: string[];
        remove?: string[];
    };
}
declare class ThievingNPC extends BasicSkillRecipe {
    get name(): string;
    get media(): string;
    _name: string;
    _media: string;
    perception: number;
    maxHit: number;
    currencyDrops: CurrencyQuantity[];
    uniqueDrop?: AnyItemQuantity;
    lootTable: DropTable;
    allowedDamageTypes: Set<DamageType>;
    /** The area that this NPC belongs to */
    area?: ThievingArea;
    constructor(namespace: DataNamespace, data: ThievingNPCData, game: Game);
    applyDataModification(data: ThievingNPCModificationData, game: Game): void;
    canUseWithDamageType(damageType: DamageType): boolean;
}
interface ThievingAreaData extends RealmedObjectData {
    name: string;
    npcIDs: string[];
    uniqueDrops: IDQuantity[];
}
declare class ThievingArea extends RealmedObject {
    get name(): string;
    npcs: ThievingNPC[];
    uniqueDrops: AnyItemQuantity[];
    _name: string;
    constructor(namespace: DataNamespace, data: ThievingAreaData, game: Game, thieving: Thieving);
}
declare const enum LeprechaunDevilResult {
    DOUBLE_GP = 0,
    QUAD_ITEMS = 1,
    NOTHING = 2
}
declare const enum AbyssalLeprechaunDevilResult {
    DOUBLE_AP = 0,
    QUAD_ITEMS = 1,
    NOTHING = 2
}
declare class ThievingRenderQueue extends GatheringSkillRenderQueue<ThievingNPC> {
    menu: boolean;
    stopButton: boolean;
    /** Updates the NPC buttons based on skill level */
    npcUnlock: boolean;
    areaRealmVisibility: boolean;
}
interface GeneralThievingRareData {
    itemID: string;
    chance: number;
    npcs?: string[];
    realms?: string[];
}
interface GeneralThievingRare {
    item: AnyItem;
    chance: number;
    npcs?: Set<ThievingNPC>;
    realms: Set<Realm>;
}
interface ThievingSkillData extends MasterySkillData {
    npcs?: ThievingNPCData[];
    areas?: ThievingAreaData[];
    generalRareItems?: GeneralThievingRareData[];
    entLeprechaunItem?: string;
    bearLeprechaunItem?: string;
    easterEgg?: {
        equippedID: string;
        positionedID: string;
        rewardID: string;
    };
}
interface ThievingModificationData extends MasterySkillModificationData {
    npcs?: ThievingNPCModificationData[];
}
declare type ThievingEvents = {
    action: ThievingActionEvent;
} & SkillWithMasteryEvents;
declare const enum ThievingStunState {
    None = 0,
    Stunned = 1,
    AvoidedStun = 2
}
declare class Thieving extends GatheringSkill<ThievingNPC, ThievingSkillData, ThievingEvents, ThievingModificationData> {
    stunTimer: Timer;
    readonly _media = Assets.Thieving;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    isMasteryActionUnlocked(action: ThievingNPC): boolean;
    readonly baseInterval = 3000;
    readonly baseStunInterval = 3000;
    readonly itemChance = 75;
    readonly baseAreaUniqueChance = 0.2;
    renderQueue: ThievingRenderQueue;
    areas: NamespaceRegistry<ThievingArea>;
    generalRareItems: GeneralThievingRare[];
    entLeprechaunItem?: AnyItem;
    bearLeprechaunItem?: AnyItem;
    barItems: AnyItem[];
    easterEgg?: {
        equipped: EquipmentItem;
        positioned: AnyItem;
        reward: AnyItem;
    };
    currentArea?: ThievingArea;
    currentNPC?: ThievingNPC;
    hiddenAreas: Set<ThievingArea>;
    /** Last area that was active. Used for rendering progressbars */
    lastActiveAreaProgressBar?: ThievingArea;
    /** Get the chance of a unique area drop with modifiers */
    get areaUniqueChance(): number;
    get masteryAction(): ThievingNPC;
    get actionLevel(): number;
    get canStop(): boolean;
    get stunAvoidanceChance(): number;
    get stunInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: ThievingSkillData): void;
    isCorrectRealmForGeneralRareDrop(drop: GeneralThievingRare, realm: Realm): boolean;
    modifyData(data: ThievingModificationData): void;
    postDataRegistration(): void;
    activeTick(): void;
    getErrorLog(): string;
    onRealmChange(): void;
    render(): void;
    renderAreaRealmVisibility(): void;
    renderNPCUnlock(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    getRegistry(type: ScopeSourceType): NamespaceRegistry<NamedObject> | undefined;
    getPkgObjects(pkg: GameDataPackage, type: ScopeSourceType): IDData[] | undefined;
    getActionModifierQueryParams(action?: NamedObject): SkillModifierQueryParams;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onAnyLevelUp(): void;
    onLoad(): void;
    onStop(): void;
    onAncientRelicUnlock(): void;
    stopOnDeath(): void;
    notifyStunBlockingAction(): void;
    renderMenu(): void;
    renderStopButton(): void;
    renderProgressBar(): void;
    /** Updates the visibility of areas */
    renderVisibleAreas(): void;
    /** Callback function for when thieving area menu panel is clicked */
    onAreaHeaderClick(area: ThievingArea): void;
    /** Determines what should be done when an npc is selected in an area
     * Returns true if the panel should update
     */
    onNPCPanelSelection(npc: ThievingNPC, area: ThievingArea): boolean;
    startThieving(area: ThievingArea, npc: ThievingNPC): void;
    getStunInterval(npc?: ThievingNPC): number;
    getNPCSuccessRate(npc: ThievingNPC): number;
    getNPCSleightOfHand(npc: ThievingNPC): number;
    getNPCPickpocket(npc: ThievingNPC): number;
    getStealthAgainstNPC(npc: ThievingNPC): number;
    getStealthSources(npc: ThievingNPC): HTMLSpanElement[];
    getPercentageIntervalModifier(action: ThievingNPC): number;
    /** Returns the interval an npc in ms */
    getNPCInterval(npc: ThievingNPC): number;
    getNPCDoublingChance(npc: ThievingNPC): number;
    getNPCCurrencyRange(npc: ThievingNPC, currency: Currency, max: number): {
        min: number;
        max: number;
    };
    getMinCurrencyRoll(currency: Currency, max: number): number;
    modifyCurrencyReward(currency: Currency, amount: number, npc: ThievingNPC): number;
    /** Method for processing a stunned thieving turn */
    stunned(): void;
    stunState: ThievingStunState;
    get isStunned(): boolean;
    get actionRewards(): Rewards;
    addJesterHatGP(item: AnyItem, rewards: Rewards, currentNPC: ThievingNPC): void;
    get actionInterval(): number;
    get masteryModifiedInterval(): number;
    startActionTimer(): void;
    notifyIncorrectDamageType(npc: ThievingNPC): void;
    preAction(): void;
    postAction(): void;
    addStat(stat: ThievingStats, amount?: number): void;
    formatSpecialDrop(item: AnyItem, qty?: number): string;
    fireNPCDropsModal(area: ThievingArea, npc: ThievingNPC): void;
    testTranslations(): void;
    getObtainableItems(): Set<AnyItem>;
    static readonly LEPRECHAUN_DEVIL_TABLE: WeightedResult<LeprechaunDevilResult>[];
    static readonly ABYSSAL_LEPRECHAUN_DEVIL_TABLE: WeightedResult<AbyssalLeprechaunDevilResult>[];
}
