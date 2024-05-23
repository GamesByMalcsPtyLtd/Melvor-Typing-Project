interface IStatObjectData {
    modifiers?: ModifierValuesRecordData;
    enemyModifiers?: ModifierValuesRecordData;
    conditionalModifiers?: ConditionalModifierData[];
    combatEffects?: TriggeredCombatEffectApplicatorData[];
}
interface IStatObject {
    modifiers?: ModifierValue[];
    enemyModifiers?: ModifierValue[];
    conditionalModifiers?: ConditionalModifier[];
    combatEffects?: CombatEffectApplicator[];
}
/** An object that can provide modifiers, effect applicators or conditional modifiers */
declare class StatObject implements IStatObject, SoftDataDependant<IStatObjectData> {
    modifiers?: ModifierValue[];
    combatEffects?: CombatEffectApplicator[];
    enemyModifiers?: ModifierValue[];
    conditionalModifiers?: ConditionalModifier[];
    /** If this stat object actually contains any stats */
    get hasStats(): boolean;
    constructor(data: IStatObjectData, game: Game, where: string);
    registerSoftDependencies(data: IStatObjectData, game: Game): void;
    describeAsSpanHTML(negMult?: number, posMult?: number): string;
    describeLineBreak(): string;
    describeAsSpans(negMult?: number, posMult?: number): HTMLSpanElement[];
    describePlain(): string;
    /**
     * Gets the descriptions of a stat providing object
     * @param statObject The object to get descriptions for
     * @param negMult A multiplier to apply to effects that are negative to the player
     * @param posMult A multiplier to apply to effects that are positive to the player
     * @param includeZero If zero valued effects should be included
     * @returns An array of [description, textClass] tuples
     */
    static getDescriptions(statObject: IStatObject, negMult?: number, posMult?: number, includeZero?: boolean): [string, string][];
    /**
     * Checks if a description should be included when getting descriptions
     * @param isNegative If the given effect is negative to the player
     * @param negMult The multiplier to apply to effects that are negative to the player
     * @param posMult The multiplier to apply to effects that are positive to the player
     * @param includeZero If zero valued effects should be shown
     * @returns If the description should be shown
     */
    static showDescription(isNegative: boolean, negMult: number, posMult: number, includeZero: boolean): boolean;
    /**
     * Gets the descriptions of a stat providing object, and passes them through a formatting function
     * @param statObject The object to get descriptions for
     * @param formatter The function to format the descriptions with
     * @param negMult A multiplier to apply to effects that are negative to the player
     * @param posMult A multiplier to apply to effects that are positive to the player
     * @param includeZero If zero valued effects should be included
     * @returns An array of formatted descriptions
     */
    static formatDescriptions<T>(statObject: IStatObject, formatter: DescriptionFormatter<T>, negMult?: number, posMult?: number, includeZero?: boolean): T[];
    static formatAsPlainList(statObject: IStatObject): string;
    /** Checks if an object with stat object data actually has any stats */
    static hasStatsData(data: IStatObjectData): boolean;
    /** Checks if a stat object actually has any stats */
    static hasStats(object: IStatObject): boolean;
}
/** Provides modifiers or stats to the Player or Enemy class */
interface IStatProvider {
    /** Modifiers that apply to the player */
    modifiers?: ModifierTable;
    /** Modifiers that apply to enemies */
    enemyModifiers?: ModifierTable;
    /** Modifiers that can apply to the player/enemy that only apply based on a condition */
    conditionalModifiers?: ConditionalModifierSource[];
    /** Equipment stats that apply to the player */
    equipmentStats?: EquipStatPair[];
    /** CombatEffects applied via the player at the specified times */
    combatEffects?: CombatEffectApplicator[];
    /** Resistance stats that apply to the player */
    resistanceStats?: ResistanceMap;
}
/** Provides modifiers or stats to the Player/Enemy class in Golbin Raid */
interface IRaidStatProvider {
    raidStats: IStatProvider;
}
declare class StatProvider implements IStatProvider {
    modifiers: ModifierTable;
    enemyModifiers: ModifierTable;
    conditionalModifiers: ConditionalModifierSource[];
    equipmentStats: EquipStatPair[];
    combatEffects: CombatEffectApplicator[];
    resistanceStats: ResistanceMap;
    reset(): void;
    addStatObject(source: ModifierSource, stats: IStatObject, negMult?: number, posMult?: number): void;
}
declare class StatObjectSummary {
    modifiers: ModifierTable;
    enemyModifiers: ModifierTable;
    combatEffects: CombatEffectApplicator[];
    conditionalModifiers: ConditionalModifier[];
    addStatObject(source: ModifierSource, stats: IStatObject, negMult?: number, posMult?: number): void;
    getAllDescriptions(): [string, string][];
}
