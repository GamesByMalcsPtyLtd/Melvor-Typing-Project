// Design of interfaces that skills may have
interface EncodableObject {
  /** Encodes the objects saved properties into a binary save writer. Returns the original SaveWriter */
  encode(writer: SaveWriter): SaveWriter;
  /** Decodes the objects saved properties from a binary save reader. */
  decode(reader: SaveWriter, version: number): void;
}
/** Object has state data that needs to be saved */
interface Serializable {
  /** Sets class state data based on the data contained in reader. Used to convert from the old serializing format. */
  deserialize(reader: DataReader, version: number, idMap: NumericIDMap): void;
}
interface Action extends NamespacedObject {
  /** Name for the action */
  name: string;
  /** media for the action */
  media: string;
  /** Returns a log of the action state, in the event an error occurs trying to tick it. */
  getErrorLog(): string;
  /** Optional. Called when changing to the actions page, but before the page is visible in the DOM */
  onPageChange?(): void;
  /** Optional. Called when changing to the actions page, just after the page is visible in the DOM */
  onPageVisible?(): void;
  /** Optional. Called when changing from the actions page. */
  onPageLeave?(): void;
  /** Optional. Called when rendering if the player is on a page associated with the action, and player modifiers have changed between the last render */
  renderModifierChange?(): void;
  /** Optional. Called when the the specified item's quantity changes in the bank, and the player is on a page associated with the action. Utilized to queue up renders required on the action's page. */
  queueBankQuantityRender?(item: AnyItem): void;
}
/** Action that has behaviour that is always active */
interface PassiveAction extends Action {
  /** Perform a single tick. Ticks occur regardless of if the action is active or not. */
  passiveTick(): void;
}
/** Action that has behaviour that only occurs when active */
interface ActiveAction extends Action {
  /** If the action is currently active */
  isActive: boolean;
  /** Tries to stop the action. Returns true if successfully stopped. */
  stop(): boolean;
  /** Perform a single tick. Ticks occur only when the skill is currently active. */
  activeTick(): void;
  /** Returns an array of skills which should be highlighted in the sidebar */
  activeSkills: AnySkill[];
  /** Optional. Called when player modifiers change, and this action is the current active action. */
  onModifierChangeWhileActive?(): void;
}
/** Provides modifiers or stats to the Player or Enemy class */
interface StatProvider {
  /** Modifiers that apply to the player */
  modifiers?: MappedModifiers;
  /** Modifiers that apply to enemies */
  enemyModifiers?: TargetModifiers;
  /** Modifiers that can apply to the player/enemy that only apply based on a condition */
  conditionalModifiers?: ConditionalModifier[];
  /** Equipment stats that apply to the player */
  equipmentStats?: EquipStatPair[];
}
/** Provides modifiers or stats to the Player/Enemy class in Golbin Raid */
interface RaidStatProvider {
  raidStats: StatProvider
}
interface SkillCategoryObject<CategoryType extends SkillCategory> {
  categories: NamespaceRegistry<CategoryType>
}