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
    areas: AnyCombatArea[];
    container: HTMLDivElement;
    menuElems: Map<AnyCombatArea, AreaMenuElement>;
    highlightedArea?: AreaMenuElement;
    constructor(containerID: string, areas: AnyCombatArea[]);
    updateRequirements(): void;
    updateEvent(activeAreas: Map<AnyCombatArea, number>): void;
    updateAreaEffectValues(): void;
    removeEvent(): void;
    setTutorialHighlight(area: AnyCombatArea): void;
    removeTutorialHighlight(): void;
    setReqStatus(reqSpan: HTMLSpanElement, met: boolean): void;
    createMenuElement(areaData: AnyCombatArea, id: number): void;
    toggleTable(areaData: AnyCombatArea, menuItem: AreaMenuElement): void;
    createTutorialDirection(areaData: AnyCombatArea): HTMLElement;
    createName(areaData: AnyCombatArea): HTMLDivElement;
    createDifficultySpan(difficulty: number): HTMLSpanElement;
    createRequirements(areaData: AnyCombatArea): {
        requirements: HTMLDivElement;
        reqSpans: HTMLSpanElement[];
    };
    createReqImage(media: string): HTMLImageElement;
    createReqSpan(text: string): HTMLSpanElement;
    createDungeonInfo(areaData: Dungeon): HTMLDivElement[];
    createRewardImage(media: string): HTMLImageElement;
    createEffectInfo(areaData: SlayerArea, description: HTMLSpanElement): HTMLDivElement;
    createDungeonUnlock(dungeon: Dungeon): HTMLDivElement;
    getUnlockMessage(dungReq: DungeonRequirement[]): string;
    isDungeonUnlocked(dungeon: Dungeon): boolean;
    createMonsterTable(areaData: CombatArea | SlayerArea): {
        table: HTMLTableElement;
        buttons: HTMLButtonElement[];
    };
    createDungeonTable(dungeon: Dungeon): {
        table: HTMLDivElement;
        buttons: HTMLButtonElement[];
    };
    createEventStartButton(areaData: AnyCombatArea): HTMLDivElement;
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
    requiredLanguages?: string[];
}
interface CombatAreaModificationData extends IDData {
    difficulty?: number[];
    entryRequirements?: {
        add?: AnyRequirementData[];
        remove?: string[];
    };
    monsters?: {
        add?: {
            monsterID: string;
            insertAt?: number;
        }[];
        remove?: {
            monsterID: string;
            removeAt?: number;
        }[];
    };
}
interface SlayerAreaData extends CombatAreaData {
    areaEffectDescription?: string;
    areaEffect?: AreaEffect;
    pet?: PetChanceData;
}
interface SlayerAreaModificationData extends CombatAreaModificationData {
    areaEffect?: AreaEffect | null;
    areaEffectDescription?: string | null;
    pet?: PetChanceData | null;
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
interface DungeonModificationData extends CombatAreaModificationData {
    dropBones?: boolean;
    eventID?: string | null;
    fixedPetClears?: boolean;
    floors?: number[] | null;
    nonBossPassives?: {
        add?: string[];
        remove?: string[];
    };
    oneTimeRewardID?: string | null;
    pauseOnBosses?: boolean;
    pet?: PetChanceData;
    rewardItemIDs?: {
        add?: string[];
        remove?: string[];
    };
    unlockRequirement?: {
        add?: DungeonRequirementData[];
        remove: string[];
    };
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
    get hasRequiredLanguage(): boolean;
    difficulty: number[];
    entryRequirements: AnyRequirement[];
    _requiredLanguages?: string[];
    _media: string;
    _name: string;
    constructor(namespace: DataNamespace, data: CombatAreaData, game: Game);
    registerSoftDependencies(data: CombatAreaData, game: Game): void;
    applyDataModification(modData: CombatAreaModificationData, game: Game): void;
    overrideMedia(media: string): void;
}
declare class SlayerArea extends CombatArea {
    areaEffect?: AreaEffect;
    pet?: PetChance;
    get name(): string;
    get areaEffectDescription(): string;
    _areaEffectDescription?: string;
    slayerLevelRequired: number;
    constructor(namespace: DataNamespace, data: SlayerAreaData, game: Game);
    applyDataModification(modData: SlayerAreaModificationData, game: Game): void;
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
    applyDataModification(modData: DungeonModificationData, game: Game): void;
}
declare class DummyDungeon extends Dungeon {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
