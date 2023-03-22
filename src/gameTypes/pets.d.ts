interface PetData extends IDData {
    /** Display name of the pet */
    name: string;
    /** Media string for pet */
    media: string;
    /** Optional custom hint for the pet */
    hint?: string;
    /** Language string for pet hint */
    langHint?: LangStringData;
    /** Optional skill this pet is obtained from */
    skillID?: string;
    /** If the chance to recieve the pet should scale with the skill's mastery pool progress */
    scaleChanceWithMasteryPool: boolean;
    /** True if pet does not count towards game completion */
    ignoreCompletion: boolean;
    modifiers: PlayerModifierData;
    enemyModifiers?: CombatModifierData;
    /** True if pets bonus should only apply to Golbin Raid */
    activeInRaid: boolean;
    /** Optional, name of patreon who created this pet */
    patreonName?: string;
    /** Custom description for the pet. Appended to custom modifier description. */
    customDescription?: string;
    /** Optional, Language string for custom description */
    langCustomDescription?: LangStringData;
}
declare class Pet extends NamespacedObject {
    get name(): string;
    get media(): string;
    get acquiredBy(): string;
    get description(): string;
    skill?: AnySkill;
    scaleChanceWithMasteryPool: boolean;
    ignoreCompletion: boolean;
    modifiers: PlayerModifierObject;
    enemyModifiers?: CombatModifierData;
    activeInRaid: boolean;
    _name: string;
    _media: string;
    _hint?: string;
    _langHint?: LangStringData;
    _patreonName?: string;
    _customDescription?: string;
    _langCustomDescription?: LangStringData;
    constructor(namespace: DataNamespace, data: PetData, game: Game);
}
declare class DummyPet extends Pet {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class PetManager implements StatProvider, RaidStatProvider, EncodableObject {
    game: Game;
    modifiers: MappedModifiers;
    enemyModifiers: TargetModifiers;
    raidStats: Required<Pick<StatProvider, 'modifiers' | 'enemyModifiers'>>;
    unlocked: Set<Pet>;
    constructor(game: Game);
    onLoad(): void;
    isPetUnlocked(pet: Pet): boolean;
    /** Rolls to unlock a pet with a fixed percentage chance */
    rollForPet(chance: PetChance): void;
    /** Rolls to unlock a skill pet */
    rollForSkillPet(pet: Pet, actionInterval: number, forceSkill?: AnySkill): void;
    /** Unlocks a pet, if it wasn't already unlocked */
    unlockPet(pet: Pet): void;
    /**
     * @description Attempts to unlock a pet with the given id. Throws an error if the pet is not registered.
     * @param petID
     */
    unlockPetByID(petID: string): void;
    /**
     * @description Callback function for petting a pet
     * @param pet The pet to pet
     */
    petPet(pet: Pet): void;
    firePetUnlockModal(pet: Pet): void;
    computeProvidedStats(updatePlayers?: boolean): void;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    convertFromOldFormat(save: NewSaveGame, idMap: NumericIDMap): void;
}
