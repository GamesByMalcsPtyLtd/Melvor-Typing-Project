/** Generic class for tracking statistics */
declare class StatTracker implements Serializable, EncodableObject {
    stats: Map<number, number>;
    wasMutated: boolean;
    add(stat: number, qty: number): void;
    set(stat: number, value: number): void;
    /** Increments a stat by 1 */
    inc(stat: number): void;
    get(stat: number): number;
    /** Gets the sum of a number of stats */
    getSum(stats: number[]): number;
    remove(stat: number): void;
    /** Gets a stat and then removes it */
    convert(stat: number): number;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number): void;
    convertFromOldStatArray(oldStats: OldGameStat[]): void;
    static dumpData(reader: SaveWriter, version: number): void;
}
/** Generic class for tracking stats for registries */
declare class MappedStatTracker<KeyType extends NamespacedObject> implements EncodableObject {
    registry: NamespaceRegistry<KeyType>;
    game: Game;
    dummyConstructor?: (new (namespace: DataNamespace, localID: string, game: Game) => KeyType) | undefined;
    statsMap: Map<KeyType, StatTracker>;
    constructor(registry: NamespaceRegistry<KeyType>, game: Game, dummyConstructor?: (new (namespace: DataNamespace, localID: string, game: Game) => KeyType) | undefined);
    add(key: KeyType, statID: number, qty: number): void;
    get(key: KeyType, statID: number): number;
    getTracker(key: KeyType): StatTracker;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    deserialize(reader: DataReader, version: number, idMap: NumberDictionary<string>): void;
    static dumpData(reader: SaveWriter, version: number): void;
}
declare class CurrencyStatTracker extends StatTracker {
    skill: MappedStatTracker<AnySkill>;
    constructor(game: Game);
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    static dumpData(reader: SaveWriter, version: number): void;
}
