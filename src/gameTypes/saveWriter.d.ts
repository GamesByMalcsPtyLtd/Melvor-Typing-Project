declare class BinaryWriter {
    mode: 'Read' | 'Write';
    dataExtensionLength: number;
    set data(newData: ArrayBuffer);
    get data(): ArrayBuffer;
    _data: ArrayBuffer;
    stringEncoder: TextEncoder;
    stringDecoder: TextDecoder;
    dataView: DataView;
    uint8View: Uint8Array;
    /** Current byte position in ArrayBuffer */
    byteOffset: number;
    /** Current regions mark offset */
    markRegionOffset: number;
    /** Returns the number of bytes remaining in the data buffer */
    get remainingBytes(): number;
    constructor(mode: 'Read' | 'Write', dataExtensionLength: number);
    /** Checks if the current buffer can fit the specified number of bytes
     *  If it cannot, extends the buffer by the dataExtensionLength until it can
     */
    checkDataSize(bytes: number): void;
    checkWriteAccess(): void;
    checkReadAccess(): void;
    /** Adds a Uint32 marker for a region of encoded data */
    startMarkingWriteRegion(): void;
    /** Stops marking a region of encoded data */
    stopMarkingWriteRegion(): void;
    /** Gets a signed 64-bit BigInteger */
    getBigInt64(): bigint;
    /** Gets an unsigned 64-bit BigInteger */
    getBigUint64(): bigint;
    /** Gets a 32-bit Float */
    getFloat32(): number;
    /** Gets a 64-bit Float */
    getFloat64(): number;
    /** Gets a signed 8-bit integer [-128, 127] */
    getInt8(): number;
    /** Gets a signed 16-bit integer [-32,768, 32,767] */
    getInt16(): number;
    /** Gets a signed 32-bit integer [-2,147,483,648, 2,147,483,647] */
    getInt32(): number;
    /** Gets an unsigned 8-bit integer [0, 255] */
    getUint8(): number;
    /** Gets an unsigned 16-bit integer [0, 65,535] */
    getUint16(): number;
    /** Gets an unsigned 32-bit integer [0, 4,294,967,295] */
    getUint32(): number;
    /** Gets a string. Max length 4,294,967,295 bytes */
    getString(): string;
    /** Gets a boolean value */
    getBoolean(): boolean;
    /**
     * Gets an array of arbitrary type. If decoding method returns undefined, element is ommited from array.
     * @param decodeArray Function that performs read operations per array element
     * @returns The decoded array
     */
    getArray<T>(decodeArray: (reader: this) => T | undefined): T[];
    /**
     * Gets a map of arbitrary key and value type. If key or value functions return undefined, value is not added.
     * @param decodeKey Function that performs read operations to obtain a map key
     * @param decodeValue Function that performs read operations to obtain a map value
     * @returns The decoded map
     */
    getMap<T, U>(decodeKey: (reader: this) => T | undefined, decodeValue: (reader: this, key: T | undefined) => U | undefined): Map<T, U>;
    /**
     * Gets a map with a key and value type that require eachother to decode. If decode returns undefined, value is ommited.
     * @param decode Function that performs read operations to obtain both the key and value
     * @returns The decoded map
     */
    getComplexMap<T, U>(decode: (reader: this) => {
        key: T;
        value: U;
    } | undefined): Map<T, U>;
    /**
     * Gets a set of arbitrary value type. If value method returns undefined, value is not added.
     * @param decodeValue Function that performs read operations to obtain a set value
     * @returns The decoded set
     */
    getSet<T>(decodeValue: (reader: this) => T | undefined): Set<T>;
    /** Gets an ArrayBuffer */
    getBuffer(): ArrayBuffer;
    /** Gets a buffer of a fixed length */
    getFixedLengthBuffer(length: number): ArrayBuffer;
    /** Tells the reader to skip ahead by length bytes */
    skipBytes(length: number): void;
    /** Tells the reader to skip ahead as if an array with elements that encoded elementByteLength bytes each */
    skipArrayBytes(elementByteLength: number): void;
    /** Writes a bigint as a signed 64-bit integer */
    writeBigInt64(value: bigint): void;
    /** Writes a bigint as an unsigned 64-bit integer */
    writeBigUInt64(value: bigint): void;
    /** Writes a number as a 32-bit float */
    writeFloat32(value: number): void;
    /** Writes a number as a 64-bit float */
    writeFloat64(value: number): void;
    /** Writes a number as a signed 8-bit integer [-128, 127] */
    writeInt8(value: number): void;
    /** Writes a number as a signed 16-bit integer [-32,768, 32,767] */
    writeInt16(value: number): void;
    /** Writes a number as a signed 32-bit integer [-2,147,483,648, 2,147,483,647] */
    writeInt32(value: number): void;
    /** Writes a number as an unsigned 8-bit integer [0, 255] */
    writeUint8(value: number): void;
    /** Writes a number as an unsigned 16-bit integer [0, 65,535] */
    writeUint16(value: number): void;
    /** Writes a number as an unsigned 32-bit integer [0, 4,294,967,295] */
    writeUint32(value: number): void;
    /** Writes a string. Max length 4,294,967,295 bytes */
    writeString(value: string): void;
    /** Writes a boolean value */
    writeBoolean(value: boolean): void;
    /**
     * Writes an array of arbitrary type to the buffer
     * @param array The array to write
     * @param encodeArray Function that performs write operations per array element
     */
    writeArray<T>(array: T[], encodeArray: (value: T, writer: this) => void): void;
    /**
     * Writes a map of arbitrary key and value type to the buffer
     * @param map The map to write
     * @param encodeKey Function that performs write operations per map key
     * @param encodeValue Function that performs write operations per map value
     */
    writeMap<T, U>(map: Map<T, U>, encodeKey: (key: T, writer: this, value: U) => void, encodeValue: (value: U, writer: this, key: T) => void): void;
    /**
     * Writes a map with key and values that require eachother for decoding to the buffer
     * @param map The map to write
     * @param encode Function that encodes both the key and value
     */
    writeComplexMap<T, U>(map: Map<T, U>, encode: (key: T, value: U, writer: this) => void): void;
    /**
     * Writes a set of arbitrary type to the buffer
     * @param set The set to write
     * @param encodeValue Function that performs write operations per set value
     */
    writeSet<T>(set: Set<T>, encodeValue: (value: T, writer: this) => void): void;
    /** Writes an array buffer to the buffer */
    writeBuffer(buffer: ArrayBuffer): void;
    /** Writes a buffer of a fixed length */
    writeFixedLengthBuffer(buffer: ArrayBuffer, length: number): void;
    /** Returns the raw data, minus empty bytes */
    getRawData(): ArrayBuffer;
    /** Sets the buffer to the supplied data */
    setRawData(data: ArrayBuffer): void;
    static readonly Uint32Max = 4294967295;
}
/** Specialized class for writing save files */
declare class SaveWriter extends BinaryWriter {
    /** Writer for header data */
    header: BinaryWriter;
    namespaceMap: Map<string, Map<string, number>>;
    nextNumericID: number;
    numericToStringIDMap: Map<number, string>;
    constructor(mode: 'Read' | 'Write', dataExtensionLength: number);
    writeNamespacedObject<T extends NamespacedObject>(object: T): void;
    /** Gets a namespaced object from a registry. If the object is not registered, returns the ID instead. */
    getNamespacedObject<T extends NamespacedObject>(registry: NamespaceRegistry<T>): T | string;
    writeCombatModifierArray(modifiers: CombatModifierArray): void;
    writeModifierArray(modifiers: ModifierArray): void;
    getCombatModifierArray(): CombatModifierArray;
    getModifierArray(game: Game): ModifierArray;
    writeHeaderInfo(headerInfo: SaveGameHeader): void;
    getHeaderFromSaveString(saveString: string, game: Game): SaveGameHeader;
    getSaveString(headerInfo: SaveGameHeader): string;
    /** Sets the data from a save string. Returns the save version */
    setDataFromSaveString(saveString: string): number;
}
declare const writeNamespaced: (object: NamespacedObject, writer: SaveWriter) => void;
/** Returns a method that reads a namespaced object, but rejects if unregistered. */
declare function readNamespacedReject<T extends NamespacedObject>(registry: NamespaceRegistry<T>): (reader: SaveWriter) => T | undefined;
declare const writeEncodable: (object: EncodableObject, writer: SaveWriter) => void;
declare const writeItemQuantity: (quantity: AnyItemQuantity, writer: SaveWriter) => void;
declare const writeAttackEffect: (game: Game, attack: SpecialAttack) => (effect: AnyEffect, writer: SaveWriter) => void;
declare function readAttackEffect(reader: SaveWriter, game: Game, attack: SpecialAttack | undefined): AnyEffect | undefined;
