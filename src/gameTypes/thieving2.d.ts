interface ThievingNPCData extends BasicSkillRecipeData {
    name: string;
    media: string;
    perception: number;
    maxHit: number;
    maxGP: number;
    uniqueDrop?: IDQuantity;
    lootTable: DropTableData[];
}
declare class ThievingNPC extends BasicSkillRecipe {
    get name(): string;
    get media(): string;
    _name: string;
    _media: string;
    perception: number;
    maxHit: number;
    maxGP: number;
    uniqueDrop?: AnyItemQuantity;
    lootTable: DropTable;
    constructor(namespace: DataNamespace, data: ThievingNPCData, game: Game);
}
interface ThievingAreaData extends IDData {
    name: string;
    npcIDs: string[];
    uniqueDrops: IDQuantity[];
}
declare class ThievingArea extends NamespacedObject {
    get name(): string;
    npcs: ThievingNPC[];
    uniqueDrops: AnyItemQuantity[];
    _name: string;
    constructor(namespace: DataNamespace, data: ThievingAreaData, game: Game, thieving: Thieving);
}
declare const enum DevilResult {
    DOUBLE_GP = 0,
    QUAD_ITEMS = 1,
    NOTHING = 2
}
declare const enum OtherDevilResult {
    SKILL_XP = 0,
    MORE_GOLD = 1,
    NOTHING = 2
}
declare class ThievingRenderQueue extends GatheringSkillRenderQueue<ThievingNPC> {
    menu: boolean;
    stopButton: boolean;
    /** Updates the NPC buttons based on skill level */
    npcUnlock: boolean;
}
interface GeneralThievingRareData {
    itemID: string;
    chance: number;
    npcs?: string[];
}
interface GeneralThievingRare {
    item: AnyItem;
    chance: number;
    npcs?: Set<ThievingNPC>;
}
interface ThievingSkillData extends MasterySkillData {
    npcs?: ThievingNPCData[];
    areas?: ThievingAreaData[];
    generalRareItems?: GeneralThievingRareData[];
    entLeprechaunItem?: string;
    crowLeprechaunItem?: string;
    bearLeprechaunItem?: string;
    easterEgg?: {
        equippedID: string;
        positionedID: string;
        rewardID: string;
    };
}
declare const enum ThievingStunState {
    None = 0,
    Stunned = 1,
    AvoidedStun = 2
}
declare class Thieving extends GatheringSkill<ThievingNPC, ThievingSkillData> {
    stunTimer: Timer;
    readonly _media = "assets/media/skills/thieving/thieving.svg";
    getTotalUnlockedMasteryActions(): number;
    readonly baseInterval = 3000;
    readonly baseStunInterval = 3000;
    readonly itemChance = 75;
    readonly baseAreaUniqueChance = 0.2;
    renderQueue: ThievingRenderQueue;
    areas: NamespaceRegistry<ThievingArea>;
    generalRareItems: GeneralThievingRare[];
    entLeprechaunItem?: AnyItem;
    crowLeprechaunItem?: AnyItem;
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
    get avoidStunChance(): number;
    get stunInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: ThievingSkillData): void;
    postDataRegistration(): void;
    activeTick(): void;
    getErrorLog(): string;
    render(): void;
    renderNPCUnlock(): void;
    resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    onModifierChange(): void;
    onEquipmentChange(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
    onLoad(): void;
    onStop(): void;
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
    getStunInterval(): number;
    getNPCSuccessRate(npc: ThievingNPC): number;
    getNPCSleightOfHand(npc: ThievingNPC): number;
    getNPCPickpocket(npc: ThievingNPC): number;
    getStealthAgainstNPC(npc: ThievingNPC): number;
    getFlatIntervalModifier(action: ThievingNPC): number;
    getPercentageIntervalModifier(action: ThievingNPC): number;
    /** Returns the interval an npc in ms */
    getNPCInterval(npc: ThievingNPC): number;
    getNPCDoublingChance(npc: ThievingNPC): number;
    getNPCGPRange(npc: ThievingNPC): {
        minGP: number;
        maxGP: number;
    };
    getNPCMinGPRoll(npc: ThievingNPC): number;
    getNPCGPMultiplier(npc: ThievingNPC): number;
    getXPModifier(masteryAction?: ThievingNPC): number;
    getMasteryXPModifier(action: ThievingNPC): number;
    /** Method for processing a stunned thieving turn */
    stunned(): void;
    stunState: ThievingStunState;
    get isStunned(): boolean;
    get actionRewards(): Rewards;
    addJesterHatGP(item: AnyItem, rewards: Rewards): void;
    get actionInterval(): number;
    get masteryModifiedInterval(): number;
    startActionTimer(): void;
    preAction(): void;
    postAction(): void;
    addStat(stat: ThievingStats, amount?: number): void;
    testTranslations(): void;
    static readonly DevilTable: [number, number, number][];
    static readonly OtherDevilTable: [number, number, number][];
}
