interface Tickable {
  tick(): void;
  render(): void;
}
interface Serializable {
  serialize(): number[];
  deserialize(reader: DataReader, version: number): void;
}