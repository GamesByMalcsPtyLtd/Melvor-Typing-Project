declare enum ThievingNPCs {
    MAN = 0,
    GOLBIN = 1,
    LUMBERJACK = 2,
    BOB_THE_FARMER = 3,
    FISHERMAN = 4,
    CHEF = 5,
    MINER = 6,
    KNIGHT = 7,
    WOMAN = 8,
    GOLBIN_CHIEF = 9,
    BANDIT_THUG = 10,
    MARAUDER = 11,
    MERCHANT = 12,
    ASSISTANT_COOK = 13,
    DOCK_HAND = 14,
    TROLL = 15,
    CYCLOPS = 16,
    SQUIRE = 17,
    WIZARD = 18,
    ACOLYTE = 19,
    COURT_JESTER = 20,
    KING = 21,
    PRINCESS = 22
}
declare enum ThievingAreas {
    LOW_TOWN = 0,
    GOLBIN_VILLAGE = 1,
    BANDIT_HIDEOUT = 2,
    FARMERS_MARKET = 3,
    BANQUET = 4,
    PORT_OF_LEMVOR = 5,
    CAVE_OF_GIANTS = 6,
    OUTSKIRTS = 7,
    FORT = 8,
    WIZARD_TOWER = 9,
    ROYAL_CASTLE = 10
}
declare const enum DevilResult {
    DOUBLE_GP = 0,
    QUAD_ITEMS = 1,
    NOTHING = 2
}
interface ThievingRenderQueue extends SkillRenderQueue {
    menu: boolean;
    stopButton: boolean;
    stats: boolean;
}
declare class Thieving extends CraftingSkill {
    private stunTimer;
    protected readonly id: 10;
    protected readonly activeID = ActiveSkills.THIEVING;
    protected readonly pageID: number;
    protected readonly skillPetID = 6;
    protected readonly failureMessage = "to pickpocket this.";
    readonly baseInterval = 3000;
    private readonly stunInterval;
    private readonly itemChance;
    private readonly areaUniqueChance;
    protected renderQueue: ThievingRenderQueue;
    private currentArea;
    private currentNPC;
    /** Pickpocket against current Target */
    private get pickpocket();
    /** Success Rate against current Target */
    protected get successRate(): number;
    /** Mastery level for current NPC */
    protected get masteryLevel(): number;
    protected get masteryID(): number;
    /** Chance to double items for current NPC */
    protected get doublingChance(): number;
    protected get actionLevel(): number;
    constructor();
    tick(): void;
    render(): void;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    onPageChange(): void;
    onLoad(): void;
    stop(): boolean;
    stopOnDeath(): void;
    private notifyStunBlockingAction;
    private renderMenu;
    private renderStopButton;
    private renderStats;
    renderProgressBar(): void;
    /** Determines what should be done when an npc is selected in an area
     * Returns true if the panel should update
     */
    onNPCPanelSelection(npc: ThievingNPC, area: ThievingArea): boolean;
    startThieving(area: ThievingArea, npc: ThievingNPC): void;
    getNPCSuccessRate(npc: ThievingNPC): number;
    getNPCSleightOfHand(npc: ThievingNPC): number;
    getNPCPickpocket(npc: ThievingNPC): number;
    private getNPCMastery;
    getStealthAgainstNPC(npc: ThievingNPC): number;
    /** Returns the interval an npc in ms */
    getNPCInterval(npc: ThievingNPC): number;
    getNPCDoublingChance(npc: ThievingNPC): number;
    getNPCGPRange(npc: ThievingNPC): {
        minGP: number;
        maxGP: number;
    };
    private getNPCMinGPRoll;
    private getNPCGPMultiplier;
    /** Method for processing a stunned thieving turn */
    private stunned;
    isStunned: boolean;
    protected itemCosts: never[];
    protected gpCost: number;
    protected slayercoinCost: number;
    protected get actionRewards(): Rewards;
    private addJesterHatGP;
    protected get actionInterval(): number;
    protected startActionTimer(): void;
    protected preAction(): void;
    protected subtractActionCosts(): void;
    protected postAction(): void;
    private addStat;
    static readonly areas: ThievingArea[];
    static readonly npcs: ThievingNPC[];
    static readonly generalRareItems: {
        itemID: number;
        chance: number;
    }[];
    static readonly DevilTable: [number, number, number][];
}
declare enum ThievingStats {
    SuccessfulPickpockets = 0,
    FailedPickpockets = 1,
    DamageTakenFromNPCs = 2,
    SecondsSpentStunned = 3
}
declare type ThievingNPC = {
    readonly id: ThievingNPCs;
    readonly name: string;
    readonly media: string;
    readonly level: number;
    readonly perception: number;
    readonly maxHit: number;
    readonly xp: number;
    readonly maxGP: number;
    /** Unique drop of NPC, -1 if they don't have one */
    readonly uniqueDrop: ItemQuantity2;
    /** Standard loot table of [ItemID, Weight, MaxQty] */
    readonly lootTable: [number, number, number][];
};
declare type ThievingArea = {
    readonly id: ThievingAreas;
    readonly name: string;
    readonly npcs: readonly ThievingNPCs[];
    readonly uniqueDrops: readonly ItemQuantity2[];
};
