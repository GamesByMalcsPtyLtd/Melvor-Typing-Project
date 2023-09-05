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
    menuElems: Map<AnyCombatArea, CombatAreaMenuElement>;
    highlightedArea?: CombatAreaMenuElement;
    constructor(containerID: string, areas: AnyCombatArea[]);
    updateRewards(): void;
    updateRequirements(): void;
    updateEvent(activeAreas: Map<AnyCombatArea, number>): void;
    updateAreaEffectValues(): void;
    updateDungeonRelicCount(): void;
    removeEvent(): void;
    setTutorialHighlight(area: AnyCombatArea): void;
    removeTutorialHighlight(): void;
    updateAreaBackgroundColours(): void;
    updateAreaWarnings(): void;
}
declare class CombatAreaMenuElement extends HTMLElement {
    _content: DocumentFragment;
    openButton: HTMLDivElement;
    image: HTMLImageElement;
    lockedContainer: HTMLDivElement;
    unlockedContainer: HTMLDivElement;
    unlockText: HTMLDivElement;
    tutorialHere: HTMLSpanElement;
    areaName: HTMLSpanElement;
    minDifficultyBadge: HTMLSpanElement;
    difficultyDash: HTMLSpanElement;
    maxDifficultyBadge: HTMLSpanElement;
    barrierNotification: HTMLDivElement;
    entryRequirementsTitle: HTMLDivElement;
    entryRequirements: HTMLUListElement;
    requirements: HTMLSpanElement[];
    areaEffectContainer: HTMLElement;
    effectDescription: HTMLSpanElement;
    monsterCount: HTMLElement;
    monsterLevel: HTMLElement;
    rewards: HTMLElement;
    openOptions: HTMLDivElement;
    eventButtonCont: HTMLDivElement;
    eventButton: HTMLButtonElement;
    relicSkill: HTMLDivElement;
    wikiLink: HTMLButtonElement;
    titleAoD: HTMLImageElement;
    titleTotH: HTMLImageElement;
    isEventActive: boolean;
    isOpen: boolean;
    constructor();
    connectedCallback(): void;
    setArea(area: AnyCombatArea): void;
    toggleAreaWarnings(area: AnyCombatArea): void;
    toggleBackgroundColour(area: AnyCombatArea): void;
    setRewards(area: AnyCombatArea): void;
    showBarrierNotification(): void;
    hideBarrierNotification(): void;
    setDifficultyBadge(badge: HTMLSpanElement, difficulty: number): void;
    setRequirements(area: CombatArea): void;
    createReqImage(media: string): HTMLImageElement;
    createReqSpan(text: string): HTMLSpanElement;
    setOpenOptions(area: AnyCombatArea): void;
    setDungeonInfo(dungeon: Dungeon): void;
    createRewardImage(media: string): HTMLImageElement;
    getDungeonAncientRelicSkillUnlockText(areaData: Dungeon): string;
    setAreaEffect(area: AnyCombatArea): void;
    setEventStartButton(area: AnyCombatArea): void;
    toggleOptions(area: AnyCombatArea): void;
    updateRequirements(area: AnyCombatArea): void;
    updateUnlockMessage(area: AnyCombatArea): void;
    isDungeonUnlocked(dungeon: Dungeon): boolean;
    updateEvent(isActive: boolean): void;
    updateAreaEffect(area: AnyCombatArea): void;
    updateRelicSkillUnlock(area: AnyCombatArea): void;
    static difficulty: AreaDifficulty[];
}
declare class MonsterSelectTableElement extends HTMLElement {
    _content: DocumentFragment;
    tableBody: HTMLTableSectionElement;
    constructor();
    connectedCallback(): void;
    setArea(area: AnyCombatArea): void;
    createRow(monster: Monster, area: AnyCombatArea): void;
    static attackTypeMedia: {
        melee: string;
        ranged: string;
        magic: string;
        random: string;
    };
}
declare class DungeonSelectElement extends HTMLElement {
    _content: DocumentFragment;
    startButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setDungeon(dungeon: Dungeon): void;
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
    relicSkillElems: HTMLElement[];
    wikiLink: HTMLDivElement;
};
declare type AreaDifficulty = {
    name: string;
    class: string;
};
interface AnyGamemodeRequirementData {
    gamemodeID: string;
    entryRequirements: AnyRequirementData[];
}
interface CombatAreaData extends IDData {
    name: string;
    media: string;
    monsterIDs: string[];
    difficulty: number[];
    entryRequirements: AnyRequirementData[];
    requiredLanguages?: string[];
    gamemodeEntryRequirements?: AnyGamemodeRequirementData[];
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
    gamemodeEntryRequirements?: {
        gamemodeID: string;
        add?: AnyRequirementData[];
        remove?: string[];
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
    skillUnlockCompletions?: number;
    gamemodeRewardItemIDs?: DungeonGamemodeRewardData[];
}
interface DungeonGamemodeRewardData {
    gamemodeID: string;
    rewardItemIDs: string[];
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
    gamemodeRewardItemIDs?: {
        add?: DungeonGamemodeRewardData[];
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
    get wikiName(): string;
    get hasRequiredLanguage(): boolean;
    get hasBarrierMonsters(): boolean;
    difficulty: number[];
    get entryRequirements(): AnyRequirement[];
    _entryRequirements: AnyRequirement[];
    gamemodeEntryRequirements: Map<Gamemode, AnyRequirement[]>;
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
    get wikiName(): string;
    get areaEffectDescription(): string;
    get hasBarrierMonsters(): boolean;
    _areaEffectDescription?: string;
    slayerLevelRequired: number;
    constructor(namespace: DataNamespace, data: SlayerAreaData, game: Game);
    applyDataModification(modData: SlayerAreaModificationData, game: Game): void;
}
declare class Dungeon extends CombatArea {
    _rewards: AnyItem[];
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
    skillUnlockCompletions: number;
    gamemodeRewards: Map<Gamemode, AnyItem[]>;
    get name(): string;
    get hasBarrierMonsters(): boolean;
    get rewards(): AnyItem[];
    get wikiName(): string;
    constructor(namespace: DataNamespace, data: DungeonData, game: Game);
    applyDataModification(modData: DungeonModificationData, game: Game): void;
}
declare class DummyDungeon extends Dungeon {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
