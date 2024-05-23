interface AncientRelicData extends IDData, IStatObjectData {
    name: string;
    skillID: string;
    number: number;
}
declare class AncientRelic extends NamespacedObject {
    get name(): string;
    _name: string;
    skill: AnySkill;
    number: number;
    stats: StatObject;
    constructor(namespace: DataNamespace, data: AncientRelicData, game: Game);
}
interface AncientRelicDropData {
    /** Ancient Relic that drops */
    relicID: string;
    /** The quantity of the relic that drops (always 1, but adding for future proofing) */
    quantity: number;
    /** Chance for the drop */
    chance: RareSkillDropChance;
    /** Requirements for the drop, if any */
    requirements: AnyRequirementData[];
}
declare class AncientRelicDrop implements SoftDataDependant<AncientRelicDropData> {
    /** The ancient relic that drops */
    relic: AncientRelic;
    /** The quantity of the relic that drops */
    quantity: number;
    /** The chance for the item to drop */
    chance: RareSkillDropChance;
    /** The requirements for the relic to drop, if any */
    requirements: AnyRequirement[];
    constructor(data: AncientRelicDropData, game: Game, where: string);
    registerSoftDependencies(data: AncientRelicDropData, game: Game): void;
}
interface AncientRelicSetData {
    realmID: string;
    relicDrops: AncientRelicDropData[];
    completedRelicID: string;
    levelUpUnlocks?: number[];
    abyssalLevelUpUnlocks?: number[];
}
declare class AncientRelicSet {
    realm: Realm;
    relicDrops: AncientRelicDrop[];
    completedRelic: AncientRelic;
    /** Upon reaching these levels in a skill, a random relic drop from this set is unlocked */
    levelUpUnlocks: number[];
    /** Upon reaching these abyssal levels in a skill, a random relic drop from this set is unlocked */
    abyssalLevelUpUnlocks: number[];
    /** The relics that have been found in this set */
    foundRelics: Map<AncientRelic, number>;
    /** The total number of relics that have been found in this set */
    foundCount: number;
    get isComplete(): boolean;
    constructor(data: AncientRelicSetData, game: Game, where: string);
    isRelicFound(relic: AncientRelic): boolean;
    getFoundCount(relic: AncientRelic): number;
    addRelic(relic: AncientRelic, count?: number): void;
}
declare class AncientRelicElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    relicContainer: HTMLDivElement;
    relicName: HTMLDivElement;
    relicModifiers: HTMLDivElement;
    tooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    setRelic(relic: AncientRelic): void;
    setHidden(): void;
    setUnlocked(): void;
    setLocked(): void;
}
declare class AncientRelicsMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    skillDropdownButton: HTMLButtonElement;
    skillDropdownOptions: HTMLDivElement;
    realmSelect: RealmTabSelectElement;
    relicImage: HTMLImageElement;
    levelUnlockNotice: HTMLHeadingElement;
    relicsContainer: HTMLUListElement;
    completedRelic: AncientRelicElement;
    relics: AncientRelicElement[];
    constructor();
    connectedCallback(): void;
    init(game: Game): void;
    createDropdownItem(skill: AnySkill): HTMLAnchorElement;
    selectSkill(skill: AnySkill): void;
    showAncientRelicsFromSidebar(game: Game): void;
    showAncientRelics(skill: AnySkill, relicSet: AncientRelicSet): void;
    getSkillItem(skill: AnySkill): HTMLImageElement;
}
