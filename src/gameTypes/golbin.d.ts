/** Enemy Class for Golbin Raid */
declare class Golbin extends Enemy {
    manager: RaidManager;
    get encodeMonster(): boolean;
    /** Constructs an enemy for golbin raid */
    constructor(manager: RaidManager, game: Game);
    tempNamespace: DataNamespace;
    modifyAttackInterval(interval: number): number;
    computeMagicMaxHit(): number;
    modifyMaxHP(maxHP: number): number;
    modifyEvasion(evasion: Evasion<number>): void;
    modifyMaxHit(maxHit: number): number;
    modifyAccuracy(accuracy: number): number;
    getMonster(wave: number, isBoss: boolean, hasExtraPassiveChance: boolean, game: Game): Monster;
    static getName(): string;
    computeModifiers(): void;
    static getLevel(wave: number, isBoss: boolean, hitpoints?: boolean): number;
    static getAttackType(): AttackType;
    static getMedia(isBoss: boolean): string;
    static getStats(wave: number, isBoss: boolean): EquipStatPair[];
    static getStatValue(wave: number, isBoss: boolean): number;
    encode(writer: SaveWriter): SaveWriter;
    /** Encodes the current Golbins monster data */
    encodeMonsterData(writer: SaveWriter): void;
    decode(reader: SaveWriter, version: number): void;
    decodeMonster(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
    deserializeMonsterData(reader: DataReader, version: number, idMap: NumericIDMap): GolbinMonster;
    static readonly names: string[];
    static readonly traits: string[];
}
