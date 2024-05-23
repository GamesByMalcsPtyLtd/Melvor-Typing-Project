interface CorruptionEffectTableData {
    /** The ID of the effect to apply */
    effectID: string;
    /** Optional. Determines if this effect starts unlocked. Defaults to false. */
    startsUnlocked?: boolean;
    /** The minimum Combat Level a monster must have to roll this as a new effect */
    minMonsterLevel: number;
    /** The custom description of the effect */
    customDescription: string;
    /** The lang ID of the custom description of the effect */
    langStringID?: string;
}
interface CorruptionEffectTableRow {
    effect: CombatEffect;
    startsUnlocked: boolean;
    isUnlocked: boolean;
    minMonsterLevel: number;
    customDescription: string;
    langStringID: string;
}
declare class CorruptionEffectTable implements EncodableObject {
    game: Game;
    allRows: CorruptionEffectTableRow[];
    unlockedRows: CorruptionEffectTableRow[];
    lockedRows: CorruptionEffectTableRow[];
    selectedUnlockRow?: CorruptionEffectTableRow;
    effectRemovalHandler: (e: CharacterEffectRemovedEvent) => void;
    readonly NEW_EFFECT_CHANCE = 0.2;
    get allEffectRows(): CorruptionEffectTableRow[];
    /** Gets the number of corruptions the player has unlocked */
    get numberUnlocked(): number;
    constructor(game: Game);
    /** Gets a random effect applicator */
    getApplicator(monsterLevel?: number, exclude?: CombatEffect): SingleCombatEffectApplicator;
    getRandomUnlockedRow(exclude?: CombatEffect): CorruptionEffectTableRow;
    unlockRow(row: CorruptionEffectTableRow): void;
    onEffectRemoval(e: CharacterEffectRemovedEvent): void;
    registerRows(data: CorruptionEffectTableData[]): void;
    onLoad(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
interface CorruptionSkillData extends BaseSkillData {
    /** Defines the effect applicator for the enemy applying corruption to themselves */
    enemyApplicator?: TriggeredCombatEffectApplicatorData;
    /** Defines the effect applicator for the player applying corruption to themselves */
    playerApplicator?: TriggeredCombatEffectApplicatorData;
    corruptionEffects?: CorruptionEffectTableData[];
}
interface CorruptionModificationData extends BaseSkillModificationData {
}
declare class Corruption extends CombatSkill<CorruptionSkillData, CorruptionModificationData> {
    readonly _media = "assets/media/skills/corruption/corruption.png";
    renderQueue: SkillRenderQueue;
    corruptionEffects: CorruptionEffectTable;
    enemyApplicator?: CombatEffectApplicator;
    playerApplicator?: CombatEffectApplicator;
    get maxLevelCap(): number;
    constructor(namespace: DataNamespace, game: Game);
    registerData(namespace: DataNamespace, data: CorruptionSkillData): void;
    modifyData(data: CorruptionModificationData): void;
    postDataRegistration(): void;
    addProvidedStats(): void;
    incStat(stat: CorruptionStats): void;
    onLoad(): void;
    onUnlock(): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
}
/** Menu for browsing corruptions */
declare class CorruptionMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    corruptionElements: Map<CorruptionEffectTableRow, CorruptionElementElement>;
    constructor();
    connectedCallback(): void;
    updateUnlockedStatus(): void;
}
declare class CorruptionElementElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    description: HTMLSpanElement;
    img: HTMLImageElement;
    unlocked: HTMLSpanElement;
    locked: HTMLSpanElement;
    unlockReqs: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    /** Initializes the display */
    initialize(corruptionEffect: CorruptionEffectTableRow): void;
    setLocked(): void;
    setUnlocked(): void;
}
