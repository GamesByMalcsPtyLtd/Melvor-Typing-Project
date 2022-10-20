/** Enemy Class for Golbin Raid */
declare class Golbin extends Enemy {
    protected manager: RaidManager;
    protected get encodeMonster(): boolean;
    /** Constructs an enemy for golbin raid */
    constructor(manager: RaidManager, game: Game);
    private tempNamespace;
    protected modifyAttackInterval(interval: number): number;
    protected computeMagicMaxHit(): number;
    protected modifyMaxHP(maxHP: number): number;
    protected modifyEvasion(evasion: Evasion<number>): void;
    protected modifyMaxHit(maxHit: number): number;
    protected modifyAccuracy(accuracy: number): number;
    getMonster(wave: number, isBoss: boolean, hasExtraPassiveChance: boolean, game: Game): Monster;
    private static getName;
    computeModifiers(): void;
    private static getLevel;
    private static getAttackType;
    private static getMedia;
    private static getStats;
    private static getStatValue;
    encode(writer: SaveWriter): SaveWriter;
    /** Encodes the current Golbins monster data */
    private encodeMonsterData;
    decode(reader: SaveWriter, version: number): void;
    decodeMonster(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    private deserializeMonsterData;
    private static readonly names;
    private static readonly traits;
}
