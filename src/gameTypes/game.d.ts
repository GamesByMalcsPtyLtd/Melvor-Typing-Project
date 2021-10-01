declare class Game implements Serializable {
    private loopInterval;
    private loopStarted;
    activeSkill: ActiveSkills;
    private pausedSkill;
    private _isPaused;
    get isPaused(): boolean;
    private isUnpausing;
    private previousTickTime;
    private enableRendering;
    private maxOfflineTicks;
    combat: CombatManager;
    golbinRaid: RaidManager;
    thieving: Thieving;
    private dropWeightCache;
    merchantsPermitRead: boolean;
    renderQueue: {
        title: boolean;
    };
    startMainLoop(): void;
    stopMainLoop(): void;
    pauseActiveSkill(fromBlur?: boolean): void;
    unpauseActiveSkill(fromFocus?: boolean): Promise<void>;
    /** Things to do after a save has loaded */
    onLoad(): void;
    /** Processes time since the last setInterval */
    private processTime;
    /** Runs the specified amount of game ticks */
    private runTicks;
    private tick;
    private render;
    private renderGameTitle;
    private loop;
    private showBrokenGame;
    processOffline(): Promise<void>;
    private snapShotOffline;
    private createOfflineModal;
    /** Resets properties used to track offline progress */
    private resetOfflineTracking;
    /** Puts the game in a state where offline will progress the amount specified */
    testForOffline(timeToGoBack: number): void;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
    getLootTableWeight(table: [number, number, number][]): number;
    getItemFromLootTable(table: [number, number, number][]): ItemQuantity2;
    getLootTableAverageGP(table: [number, number, number][]): number;
}
declare enum ActiveSkills {
    NONE = 0,
    COMBAT = 1,
    GOLBINRAID = 2,
    THIEVING = 3,
    OTHER = 4
}
declare const activeSkillMedia: string[];
interface OfflineSnapshot {
    gp: number;
    slayercoins: number;
    prayerPoints: number;
    experience: number[];
    levels: number[];
    food: ItemQuantity2;
    quiverItem: ItemQuantity2;
    summon1ID: ItemID;
    summon2ID: ItemID;
    bank: Map<ItemID, number>;
    loot: Map<ItemID, number>;
    monsterKills: number[];
    dungeonCompletion: number[];
    taskCompletions: number[];
    summoningMarks: number[];
    skillGloves: ItemQuantity2[];
}
