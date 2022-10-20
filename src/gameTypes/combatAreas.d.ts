interface PlayerAreaEffect {
    target: 'Player';
    modifier: StandardModifierKeys;
    magnitude: number;
}
interface EnemyAreaEffect {
    target: 'Enemy';
    modifier: CombatModifierKey;
    magnitude: number;
}
declare type AreaEffect = PlayerAreaEffect | EnemyAreaEffect;
declare type AnyCombatArea = CombatArea | SlayerArea | Dungeon;
declare class CombatAreaMenu {
    private areas;
    private container;
    private menuElems;
    private highlightedArea?;
    constructor(containerID: string, areas: AnyCombatArea[]);
    updateRequirements(): void;
    updateEvent(activeAreas: Map<AnyCombatArea, number>): void;
    updateAreaEffectValues(): void;
    removeEvent(): void;
    setTutorialHighlight(area: AnyCombatArea): void;
    removeTutorialHighlight(): void;
    private setReqStatus;
    private createMenuElement;
    private toggleTable;
    private createTutorialDirection;
    private createName;
    private createDifficultySpan;
    private createRequirements;
    private createReqImage;
    private createReqSpan;
    private createDungeonInfo;
    private createRewardImage;
    private createEffectInfo;
    private createDungeonUnlock;
    private getUnlockMessage;
    private isDungeonUnlocked;
    private createMonsterTable;
    private createDungeonTable;
    private createEventStartButton;
    static difficulty: AreaDifficulty[];
    static attackTypeMedia: {
        melee: string;
        ranged: string;
        magic: string;
        random: string;
    };
}
declare type AreaMenuElement = {
    table: HTMLElement;
    image: HTMLImageElement;
    requirements: HTMLElement[];
    fightButtons: HTMLButtonElement[];
    isOpen: boolean;
    lockedElems: HTMLElement[];
    unlockedElems: HTMLElement[];
    isEventActive: boolean;
    eventButton: HTMLDivElement;
    openButton: HTMLDivElement;
    effectDescription: HTMLSpanElement;
};
declare type AreaDifficulty = {
    name: string;
    class: string;
};
interface CombatAreaData extends IDData {
    name: string;
    media: string;
    monsterIDs: string[];
    difficulty: number[];
    entryRequirements: AnyRequirementData[];
}
interface SlayerAreaData extends CombatAreaData {
    areaEffectDescription?: string;
    areaEffect?: AreaEffect;
    pet?: PetChanceData;
}
interface DungeonData extends CombatAreaData {
    rewardItemIDs: string[];
    oneTimeRewardID?: string;
    dropBones: boolean;
    floors?: number[];
    eventID?: string;
    unlockRequirement?: DungeonRequirementData[];
    pet: PetChanceData;
    fixedPetClears: boolean;
    pauseOnBosses: boolean;
    nonBossPassives?: string[];
}
interface PetChanceData {
    petID: string;
    weight: number;
}
interface PetChance {
    pet: Pet;
    weight: number;
}
declare class CombatArea extends NamespacedObject implements SoftDataDependant<CombatAreaData> {
    monsters: Monster[];
    get media(): string;
    get name(): string;
    difficulty: number[];
    entryRequirements: AnyRequirement[];
    private _media;
    protected _name: string;
    constructor(namespace: DataNamespace, data: CombatAreaData, game: Game);
    registerSoftDependencies(data: CombatAreaData, game: Game): void;
}
declare class SlayerArea extends CombatArea {
    areaEffect?: AreaEffect;
    pet?: PetChance;
    get name(): string;
    get areaEffectDescription(): string;
    private _areaEffectDescription?;
    slayerLevelRequired: number;
    constructor(namespace: DataNamespace, data: SlayerAreaData, game: Game);
}
declare class Dungeon extends CombatArea {
    rewards: AnyItem[];
    oneTimeReward?: AnyItem;
    dropBones: boolean;
    floors?: number[];
    event?: CombatEvent;
    unlockRequirement?: DungeonRequirement[];
    pet: PetChance;
    fixedPetClears: boolean;
    /** If Combat should pause before fighting a monster that is a boss */
    pauseOnBosses: boolean;
    nonBossPassives?: CombatPassive[];
    get name(): string;
    constructor(namespace: DataNamespace, data: DungeonData, game: Game);
}
declare class DummyDungeon extends Dungeon {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
