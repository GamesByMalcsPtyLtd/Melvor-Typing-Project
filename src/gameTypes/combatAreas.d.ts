interface BaseAreaEffectData {
    /** For modifiers, determines the base value of the modifier. For effect applicators, determines the base multiplier for the applicator's chance. */
    magnitude: number;
    /** Optional. If present these modifier will be applied to the character, with a value equal to the magnitude */
    modifiers?: ModifierValuesRecordData;
    /**
     * @deprecated Use modifiers instead
     * Optional. If present this modifier will be applied to the character, with a base value equal to the magnitude */
    modifier?: string;
    /** Optional. If present this effect applicator will be merged with the character, with chances multiplied by the magnitude */
    applicator?: TriggeredCombatEffectApplicatorData;
}
declare type PlayerAreaEffectData = {
    target: 'Player';
} & BaseAreaEffectData;
declare type EnemyAreaEffectData = {
    target: 'Enemy';
} & BaseAreaEffectData;
interface BaseAreaEffect {
    /** For modifiers, determines the base value of the modifier. For effect applicators, determines the base multiplier for the applicator's chance. */
    magnitude: number;
    /** Optional. If present these modifiers will be applied to the character, with a value equal to the magnitude */
    modifiers?: ModifierValue[];
    /** Optional. If present this effect applicator will be merged with the character, with chances multiplied by the magnitude */
    applicator?: CombatEffectApplicator;
}
declare type PlayerAreaEffect = {
    target: 'Player';
} & BaseAreaEffect;
declare type EnemyAreaEffect = {
    target: 'Enemy';
} & BaseAreaEffect;
/** Data for constructing a CombatAreaEffect object */
declare type CombatAreaEffectData = PlayerAreaEffectData | EnemyAreaEffectData;
declare type CombatAreaEffect = PlayerAreaEffect | EnemyAreaEffect;
declare type AnyCombatArea = CombatArea | SlayerArea | Dungeon | AbyssDepth | Stronghold;
declare type CombatAreaWithPet = SlayerArea | Dungeon | AbyssDepth | Stronghold;
declare class CombatAreaMenu {
    container: HTMLDivElement;
    areas: AnyCombatArea[];
    menuElems: Map<AnyCombatArea, CombatAreaMenuElement>;
    highlightedArea?: CombatAreaMenuElement;
    constructor(container: HTMLDivElement, areas: AnyCombatArea[]);
    open(): void;
    close(): void;
    updateRewards(): void;
    updateRequirements(): void;
    updateCompletionCount(area: Stronghold | Dungeon): void;
    updatePetStatus(area: CombatAreaWithPet): void;
    updateEvent(activeAreas: Map<AnyCombatArea, number>): void;
    updateAreaEffectValues(): void;
    updateAreaSkillUnlock(): void;
    removeEvent(): void;
    setTutorialHighlight(area: AnyCombatArea): void;
    removeTutorialHighlight(): void;
    updateAreaBackgroundColours(): void;
    updateAreaWarnings(): void;
}
declare class CombatAreaMenuElement extends HTMLElement implements CustomElement {
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
    combatTriangleNotification: HTMLDivElement;
    damageTypeNotification: HTMLDivElement;
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
    skillUnlock: HTMLDivElement;
    wikiLink: HTMLAnchorElement;
    titleAoD: HTMLImageElement;
    titleTotH: HTMLImageElement;
    viewCombatTriangleAnchor: HTMLAnchorElement;
    completeCount: HTMLDivElement;
    petLocated: HTMLDivElement;
    areaInfoDivider: HTMLDivElement;
    viewMonsterListCont: HTMLAnchorElement;
    isEventActive: boolean;
    isOpen: boolean;
    strongholdSelect?: StrongholdSelectElement;
    constructor();
    connectedCallback(): void;
    setArea(area: AnyCombatArea): void;
    updateCompletionCount(area: Stronghold | Dungeon): void;
    updatePetStatus(area: CombatAreaWithPet): void;
    viewCombatTriangle(area: AnyCombatArea): void;
    viewMonsterList(area: Dungeon | Stronghold): void;
    toggleAreaWarnings(area: AnyCombatArea): void;
    toggleBackgroundColour(area: AnyCombatArea): void;
    setRewards(area: AnyCombatArea): void;
    showBarrierNotification(): void;
    hideBarrierNotification(): void;
    showCombatTriangleNotification(area: CombatArea): void;
    showDamageTypeNotification(area: CombatArea): void;
    hideCombatTriangleNotification(): void;
    setDifficultyBadge(badge: HTMLSpanElement, difficulty: number): void;
    setRequirements(area: CombatArea): void;
    createReqImage(media: string): HTMLImageElement;
    createReqSpan(text: string): HTMLSpanElement;
    setOpenOptions(area: AnyCombatArea): void;
    setMonsterCount(numMonsters: string, lastMonster: Monster): void;
    setDungeonInfo(dungeon: Dungeon): void;
    setStrongholdInfo(stronghold: Stronghold): void;
    createRewardImage(media: string): HTMLImageElement;
    setAreaEffect(area: AnyCombatArea): void;
    setEventStartButton(area: AnyCombatArea): void;
    toggleOptions(area: AnyCombatArea): void;
    updateRequirements(area: AnyCombatArea): void;
    updateUnlockMessage(area: AnyCombatArea): void;
    isDungeonUnlocked(dungeon: Dungeon): boolean;
    updateEvent(isActive: boolean): void;
    removeEvent(): void;
    updateAreaEffect(area: AnyCombatArea): void;
    updateAreaSkillUnlock(area: AnyCombatArea): void;
    static difficulty: AreaDifficulty[];
}
declare class MonsterSelectTableElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    tableBody: HTMLTableSectionElement;
    constructor();
    connectedCallback(): void;
    setArea(area: AnyCombatArea): void;
    createRow(monster: Monster, area: AnyCombatArea): void;
    static attackTypeMedia: {
        melee: string;
        ranged: Assets;
        magic: Assets;
        random: Assets;
    };
}
declare class MonsterSelectTableRowElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    monsterImage: HTMLImageElement;
    monsterName: HTMLSpanElement;
    combatLevel: HTMLSpanElement;
    barrier: HTMLSpanElement;
    barrierIcon: HTMLImageElement;
    hitpoints: HTMLSpanElement;
    attackType: HTMLImageElement;
    fightButton: HTMLButtonElement;
    dropsButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setRow(monster: Monster, area: AnyCombatArea): void;
    setHitpoints(monster: Monster): void;
    setBarrier(monster: Monster): void;
}
declare class DungeonSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    startButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setDungeon(dungeon: Dungeon): void;
}
declare class AbyssDepthSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    startButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setDepth(depth: AbyssDepth): void;
}
declare class StrongholdTierRow {
    row: HTMLTableRowElement;
    startButton: HTMLButtonElement;
    rewardsButton: HTMLButtonElement;
    name: HTMLSpanElement;
    requirementsContainer: HTMLUListElement;
    requirements: HTMLSpanElement[];
    constructor();
    setTier(stronghold: Stronghold, tier: StrongholdTierName): void;
    updateRequirements(stronghold: Stronghold, tier: StrongholdTierName): void;
    viewStrongholdRewards(stronghold: Stronghold, tier: StrongholdTierName): void;
}
declare class StrongholdSelectElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    tableBody: HTMLTableSectionElement;
    standardRow: StrongholdTierRow;
    augmentedRow: StrongholdTierRow;
    superiorRow: StrongholdTierRow;
    constructor();
    connectedCallback(): void;
    setStronghold(stronghold: Stronghold): void;
    updateRequirements(stronghold: Stronghold): void;
}
declare class CombatAreaMenuManager {
    categoryMenu: CategoryMenuElement;
    open?: CombatAreaCategory;
    all: Map<CombatAreaCategory, CombatAreaMenu>;
    init(game: Game, categoryMenu: CategoryMenuElement): void;
    closeOpen(): void;
    toggleCategory(category: CombatAreaCategory): void;
    openCategory(category: CombatAreaCategory): void;
}
declare type AreaDifficulty = {
    name: string;
    class: string;
};
interface AnyGamemodeRequirementData {
    gamemodeID: string;
    entryRequirements: AnyRequirementData[];
}
interface CombatAreaData extends RealmedObjectData {
    name: string;
    media: string;
    monsterIDs: string[];
    difficulty: number[];
    entryRequirements: AnyRequirementData[];
    requiredLanguages?: string[];
    gamemodeEntryRequirements?: AnyGamemodeRequirementData[];
    combatTriangleSet?: string;
    allowedDamageTypeIDs?: string[];
    overrideDamageType?: string;
    allowedGamemodeIDs?: string[];
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
    allowedDamageTypeIDs?: {
        add?: string[];
        remove?: string[];
    };
}
interface SlayerAreaData extends CombatAreaData {
    areaEffectDescription?: string;
    areaEffect?: CombatAreaEffectData;
    pet?: PetChanceData;
}
interface SlayerAreaModificationData extends CombatAreaModificationData {
    areaEffect?: CombatAreaEffectData | null;
    areaEffectDescription?: string | null;
    pet?: PetChanceData | null;
}
interface DungeonData extends CombatAreaData {
    rewardItemIDs: string[];
    oneTimeRewardID?: string;
    dropBones: boolean;
    floors?: number[];
    eventID?: string;
    unlockRequirement?: AnyRequirementData[];
    pet?: PetChanceData;
    fixedPetClears: boolean;
    pauseOnBosses: boolean;
    nonBossPassives?: string[];
    bossOnlyPassives?: string[];
    gamemodeRewardItemIDs?: DungeonGamemodeRewardData[];
    showUnlockRequirements?: boolean;
    hideIfLocked?: boolean;
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
        add?: AnyRequirementData[];
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
declare class CombatArea extends RealmedObject implements SoftDataDependant<CombatAreaData> {
    monsters: Monster[];
    get media(): string;
    get name(): string;
    get wikiName(): string;
    get hasRequiredLanguage(): boolean;
    get hasBarrierMonsters(): boolean;
    get usesStandardCombatTriangle(): boolean;
    difficulty: number[];
    get entryRequirements(): AnyRequirement[];
    _entryRequirements: AnyRequirement[];
    gamemodeEntryRequirements: Map<Gamemode, AnyRequirement[]>;
    /** Determines the set of combat triangles that should be used while the player is in this area */
    combatTriangleSet: CombatTriangleSet;
    _requiredLanguages?: string[];
    _media: string;
    _name: string;
    /** If monsters in this area should drop their bones */
    dropsBones: boolean;
    /** If monsters in this area should drop their loot table */
    dropsLoot: boolean;
    /** If monsters in this area should drop their currencies */
    dropsCurrency: boolean;
    /** If monster kills in this area should count towards slayer area tasks */
    allowSlayerKills: boolean;
    /** If monsters in this area can be automatically jumped to */
    allowAutoJump: boolean;
    /** Determines which damage types are allowed in this area. Unset allows all damage types */
    allowedDamageTypes: Set<DamageType>;
    /** If set, override all monster damage types in the area with this */
    overrideDamageType?: DamageType;
    allowedGamemodes: Set<Gamemode>;
    constructor(namespace: DataNamespace, data: CombatAreaData, game: Game);
    registerSoftDependencies(data: CombatAreaData, game: Game): void;
    applyDataModification(modData: CombatAreaModificationData, game: Game): void;
    overrideMedia(media: string): void;
    /** Constructs a CombatAreaEffect object from data */
    constructAreaEffect(data: CombatAreaEffectData, game: Game): CombatAreaEffect;
    isRequiredGamemode(gamemode: Gamemode): boolean;
    canEnterWithDamageType(damageType: DamageType): boolean;
}
declare class SlayerArea extends CombatArea {
    areaEffect?: CombatAreaEffect;
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
declare class Dungeon extends CombatArea implements SoftDataDependant<DungeonData> {
    _rewards: AnyItem[];
    oneTimeReward?: AnyItem;
    floors?: number[];
    event?: CombatEvent;
    unlockRequirement?: AnyRequirement[];
    pet?: PetChance;
    fixedPetClears: boolean;
    /** If Combat should pause before fighting a monster that is a boss */
    pauseOnBosses: boolean;
    nonBossPassives?: CombatPassive[];
    bossOnlyPassives: CombatPassive[];
    gamemodeRewards: Map<Gamemode, AnyItem[]>;
    skillUnlockCompletions: number[];
    showUnlockRequirements: boolean;
    hideIfLocked: boolean;
    get name(): string;
    get hasBarrierMonsters(): boolean;
    get rewards(): AnyItem[];
    get wikiName(): string;
    constructor(namespace: DataNamespace, data: DungeonData, game: Game);
    registerSoftDependencies(data: DungeonData, game: Game): void;
    applyDataModification(modData: DungeonModificationData, game: Game): void;
}
declare class AbyssDepth extends Dungeon {
    /** Save state property. Stores the number of times this depth has been completed. */
    timesCompleted: number;
    get name(): string;
}
declare class DummyDungeon extends Dungeon {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class DummyAbyssDepth extends AbyssDepth {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface StrongholdRewardsData extends FixedCostsData {
    /** The percentage chance to give the reward */
    chance: number;
}
/** Utility class for stronghold rewards */
declare class StrongholdRewards extends FixedCosts {
    /** The percentage chance to give the reward */
    chance: number;
    constructor(data: StrongholdRewardsData, game: Game);
}
interface StrongholdTierData {
    /** Items that must be equipped to fight the stronghold at this tier */
    requiredItems: string[];
    /** Passives applied to monsters when fighting at this tier */
    passives: string[];
    /** Rewards given for completing the stronghold at this tier */
    rewards: StrongholdRewardsData;
}
interface StrongholdTier {
    /** Items that must be equipped to fight the stronghold at this tier */
    requiredItems: EquipmentItem[];
    /** Passives applied to monsters when fighting at this tier */
    passives: CombatPassive[];
    /** Rewards given for completing the stronghold at this tier */
    rewards: StrongholdRewards;
}
interface StrongholdPetChanceData extends PetChanceData {
    fixedClears?: boolean;
}
interface StrongholdPetChance extends PetChance {
    fixedClears: boolean;
}
declare type StrongholdTierName = 'Standard' | 'Augmented' | 'Superior';
interface StrongholdData extends CombatAreaData {
    tiers: Record<StrongholdTierName, StrongholdTierData>;
    pet?: StrongholdPetChanceData;
    bossOnlyPassives?: string[];
}
declare class Stronghold extends CombatArea {
    get name(): string;
    tiers: Record<StrongholdTierName, StrongholdTier>;
    pet?: StrongholdPetChance;
    bossOnlyPassives: CombatPassive[];
    /** Save state property. Stores the number of times this stronghold has been completed */
    timesCompleted: number;
    skillUnlockCompletions: number[];
    constructor(namespace: DataNamespace, data: StrongholdData, game: Game);
    getTierName(tier: StrongholdTierName): string;
    static TierIDs: Record<StrongholdTierName, number> & Record<number, StrongholdTierName>;
}
interface CombatAreaCategoryData extends IDData {
    /** The display name of this category */
    name: string;
    /** The URI for the category's image */
    media: string;
    /** The IDs of the CombatAreas that belong to this category */
    areas: string[];
}
interface CombatAreaCategoryModificationData extends IDData {
    /** Modifies the CombatAreas that belong to the category */
    areas: {
        /** Adds new CombatAreas to the category in the order defined. Performed after remove. */
        add?: InsertOrder[];
        /** Removes the CombatAreas from the area with the IDs in this array. Performed before add. */
        remove?: string[];
    };
}
declare class CombatAreaCategory extends NamespacedObject implements CategoryLike {
    get name(): string;
    get media(): string;
    areas: NamespacedArray<AnyCombatArea>;
    _name: string;
    _media: string;
    constructor(namespace: DataNamespace, data: CombatAreaCategoryData, game: Game);
    applyDataModification(modData: CombatAreaCategoryModificationData, game: Game): void;
}
declare class ViewMonsterListTableElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    tableBody: HTMLTableSectionElement;
    areaName: HTMLSpanElement;
    areaImg: HTMLImageElement;
    constructor();
    connectedCallback(): void;
    setArea(area: Dungeon | Stronghold): void;
    createRows(area: Dungeon | Stronghold): void;
}
declare class ViewMonsterListTableRowElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    count: HTMLSpanElement;
    name: HTMLAnchorElement;
    attackType: HTMLImageElement;
    combatLevel: HTMLSpanElement;
    hitpoints: HTMLSpanElement;
    barrier: HTMLSpanElement;
    barrierContainer: HTMLLIElement;
    monsterImg: HTMLImageElement;
    constructor();
    connectedCallback(): void;
    setRow(monster: Monster, count: number): void;
    setSeenMonster(monster: Monster, count: number): void;
    setUnseenMonster(): void;
    attackTypeMedia: {
        melee: string;
        ranged: Assets;
        magic: Assets;
        random: Assets;
    };
}
