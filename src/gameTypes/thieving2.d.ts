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
    private _name;
    private _media;
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
    private _name;
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
    private stunTimer;
    protected readonly _media = "assets/media/skills/thieving/thieving.svg";
    protected getTotalUnlockedMasteryActions(): number;
    readonly baseInterval = 3000;
    readonly baseStunInterval = 3000;
    private readonly itemChance;
    private readonly baseAreaUniqueChance;
    renderQueue: ThievingRenderQueue;
    areas: NamespaceRegistry<ThievingArea>;
    generalRareItems: GeneralThievingRare[];
    private entLeprechaunItem?;
    private crowLeprechaunItem?;
    private bearLeprechaunItem?;
    private barItems;
    private easterEgg?;
    private currentArea?;
    currentNPC?: ThievingNPC;
    private hiddenAreas;
    /** Last area that was active. Used for rendering progressbars */
    private lastActiveAreaProgressBar?;
    /** Get the chance of a unique area drop with modifiers */
    private get areaUniqueChance();
    protected get masteryAction(): ThievingNPC;
    protected get actionLevel(): number;
    protected get canStop(): boolean;
    protected get avoidStunChance(): number;
    protected get stunInterval(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: ThievingSkillData): void;
    postDataRegistration(): void;
    activeTick(): void;
    getErrorLog(): string;
    render(): void;
    private renderNPCUnlock;
    protected resetActionState(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    protected getActionIDFromOldID(oldActionID: number, idMap: NumericIDMap): string;
    onModifierChange(): void;
    onEquipmentChange(): void;
    protected onLevelUp(oldLevel: number, newLevel: number): void;
    onLoad(): void;
    protected onStop(): void;
    stopOnDeath(): void;
    private notifyStunBlockingAction;
    private renderMenu;
    private renderStopButton;
    renderProgressBar(): void;
    /** Updates the visibility of areas */
    private renderVisibleAreas;
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
    protected getFlatIntervalModifier(action: ThievingNPC): number;
    protected getPercentageIntervalModifier(action: ThievingNPC): number;
    /** Returns the interval an npc in ms */
    getNPCInterval(npc: ThievingNPC): number;
    getNPCDoublingChance(npc: ThievingNPC): number;
    getNPCGPRange(npc: ThievingNPC): {
        minGP: number;
        maxGP: number;
    };
    private getNPCMinGPRoll;
    private getNPCGPMultiplier;
    getXPModifier(masteryAction?: ThievingNPC): number;
    getMasteryXPModifier(action: ThievingNPC): number;
    /** Method for processing a stunned thieving turn */
    private stunned;
    private stunState;
    private get isStunned();
    protected get actionRewards(): Rewards;
    private addJesterHatGP;
    protected get actionInterval(): number;
    protected get masteryModifiedInterval(): number;
    protected startActionTimer(): void;
    protected preAction(): void;
    protected postAction(): void;
    private addStat;
    testTranslations(): void;
    static readonly DevilTable: [number, number, number][];
    static readonly OtherDevilTable: [number, number, number][];
}
