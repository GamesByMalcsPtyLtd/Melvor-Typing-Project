interface OldTutorialTaskData {
    customTasks: {
        name: string;
        media: string;
        qty: number;
        itemID?: number;
    }[];
    items: OldItemQuantity2[];
    monsters: {
        monsterID: number;
        qty: number;
        type?: AttackType;
    }[];
}
interface OldActiveTutorialTask {
    taskID: number;
    tasks: OldTutorialTaskData;
    isActive: boolean;
}
interface TutorialTaskData extends IDData {
    description: string;
    media: string;
    eventMatcher: GameEventMatcherData;
    eventCount: number;
    countEventQuantity: boolean;
}
declare class TutorialTask {
    get description(): string;
    get media(): string;
    get complete(): boolean;
    _description: string;
    _media: string;
    eventMatcher: GameEventMatcher;
    eventCount: number;
    countEventQuantity: boolean;
    id: string;
    /** Current progress in the task */
    progress: number;
    constructor(game: Game, data: TutorialTaskData);
}
interface TutorialStageData extends IDData {
    /** The display name of the stage */
    name: string;
    /** A description of the stage */
    description: string;
    /** Tasks that must be completed to complete the stage */
    tasks: TutorialTaskData[];
    /** Page which the task can be completed on */
    taskPage: string;
    /** Skills that are unlocked with the stage */
    skillUnlocks: string[];
    /** Rewards given upon completion of the stage */
    rewards: {
        gp: number;
        slayerCoins: number;
        items: IDQuantity[];
    };
    /** Purchases that may be made from the shop during the stage */
    allowedShopPurchases: string[];
    /** Monsters that may be killed during the stage */
    allowedMonsters: string[];
    /** Items which cannot be sold during the stage */
    bannedItemSales: string[];
    /** If combat is allowed during the stage */
    allowCombat: boolean;
}
declare class TutorialStage extends NamespacedObject implements EncodableObject {
    get name(): string;
    get description(): string;
    get complete(): boolean;
    get completedTasks(): number;
    get totalTasks(): number;
    claimed: boolean;
    tasks: TutorialTask[];
    taskPage: Page;
    skillUnlocks: AnySkill[];
    rewards: {
        gp: number;
        slayerCoins: number;
        items: AnyItemQuantity[];
    };
    allowedShopPurchases: Set<ShopPurchase>;
    allowedMonsters: Set<Monster>;
    bannedItemSales: Set<AnyItem>;
    allowCombat: boolean;
    constructor(namespace: DataNamespace, data: TutorialStageData, game: Game);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    resetProgress(): void;
    setClaimed(): void;
}
declare class TutorialRenderQueue {
    currentStageTasks: boolean;
    currentStageStatus: boolean;
}
declare class Tutorial implements EncodableObject {
    game: Game;
    /** If the tutorial has been completed */
    complete: boolean;
    /** Items that are allowed to be purchased from the shop */
    allowedShopPurchases: Set<ShopPurchase>;
    /** Monsters that the player is allowed to fight */
    allowedMonsters: Set<Monster>;
    /** Items which are not allowed to be sold during the stage of the tutorial */
    bannedItemSales: Set<AnyItem>;
    /** If the tutorial currently allows accessing combat */
    allowCombat: boolean;
    get stagesCompleted(): number;
    get totalStages(): number;
    /** Current stage the user is on. Undefined if tutorial has not been started. */
    currentStage?: TutorialStage;
    /** Returns if the tutorial should start for the account */
    get shouldStart(): boolean;
    stages: NamespaceRegistry<TutorialStage>;
    _stagesCompleted: number;
    renderQueue: TutorialRenderQueue;
    stageOrder: NamespacedArray<TutorialStage>;
    constructor(game: Game);
    registerStages(namespace: DataNamespace, data: TutorialStageData[]): void;
    registerStageOrder(order: InsertOrder[]): void;
    render(): void;
    continueOnLoad(): void;
    start(): void;
    completeTutorial(): void;
    startNextStage(): void;
    setupForStage(stage: TutorialStage): void;
    setStageMenus(stage: TutorialStage): void;
    renderProgress(): void;
    showStageHints(stage: TutorialStage): void;
    removeStageHints(stage: TutorialStage): void;
    updateTaskProgress(event: GameEvent): void;
    claimStageOnClick(stage: TutorialStage): void;
    skipButtonOnClick(): void;
    skipTutorial(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldFormat(savegame: NewSaveGame, idMap: NumericIDMap): void;
}
