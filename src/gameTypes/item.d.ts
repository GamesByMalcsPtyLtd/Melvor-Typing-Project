interface IDData {
    id: string;
}
/** Format for item data */
interface BaseItemData extends IDData {
    name: string;
    category: string;
    type: string;
    media: string;
    mediaAnimation?: string;
    altMedia?: string;
    ignoreCompletion: boolean;
    obtainFromItemLog: boolean;
    golbinRaidExclusive: boolean;
    customDescription?: string;
    sellsFor: number;
    /** Optional. Sets the currency that this item sells for. Defaults to GP. */
    sellsForCurrency?: string;
    isArtefact?: boolean;
    isGenericArtefact?: boolean;
}
interface BaseItemModificationData extends IDData {
    category?: string;
    obtainFromItemLog?: boolean;
    sellsFor?: number;
    type?: string;
}
interface ItemData extends BaseItemData {
    itemType: 'Item';
}
declare type AnyItemData = ItemData | EquipmentItemData | WeaponItemData | FoodItemData | BoneItemData | PotionItemData | ReadableItemData | OpenableItemData | TokenItemData | MasteryTokenItemData | CompostItemData | SoulItemData | RuneItemData | FiremakingOilItemData;
declare type AnyItemModificationData = BaseItemModificationData | BaseEquipmentItemModificationData | WeaponItemModificationData | FoodItemModificationData | BoneItemModificationData | PotionItemModificationData | OpenableItemModificationData | TokenItemModificationData | CompostItemModificationData | SoulItemModificationData;
declare type AnyItem = Item | EquipmentItem | WeaponItem | FoodItem | BoneItem | PotionItem | ReadableItem | OpenableItem | TokenItem | MasteryTokenItem | CompostItem | SoulItem | RuneItem | FiremakingOilItem;
declare type ItemEvents = {
    /** Fired when the quantity of this item changes in the bank */
    bankQuantityChanged: ItemQuantityChangedEvent;
    /** Fired when this item is obtained for the first time */
    found: ItemFoundEvent;
};
/** Base class for items in the game */
declare class Item extends NamespacedObject implements IGameEventEmitter<ItemEvents> {
    category: string;
    type: string;
    get nameFromData(): string;
    get descriptionFromData(): string;
    get name(): string;
    get englishName(): string;
    get wikiName(): string;
    /** Image URL*/
    get media(): string;
    /** Alternative image URL, if one is present, otherwise defaults to media */
    get altMedia(): string;
    get description(): string;
    _modifiedDescription: string | undefined;
    get modifiedDescription(): string;
    get artefactSizeAndLocation(): string;
    sellsFor: CurrencyQuantity;
    _name: string;
    _media: string;
    get hasDescription(): boolean;
    get isArtefact(): boolean;
    get isGenericArtefact(): boolean;
    ignoreCompletion: boolean;
    obtainFromItemLog: boolean;
    golbinRaidExclusive: boolean;
    _isArtefact?: boolean;
    _isGenericArtefact?: boolean;
    _customDescription?: string;
    _mediaAnimation?: string;
    _altMedia?: string;
    readonly modQuery: ModifierQuery;
    _events: import("mitt").Emitter<ItemEvents>;
    on: {
        <Key extends keyof ItemEvents>(type: Key, handler: import("mitt").Handler<ItemEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<ItemEvents>): void;
    };
    off: {
        <Key extends keyof ItemEvents>(type: Key, handler?: import("mitt").Handler<ItemEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<ItemEvents>): void;
    };
    emit: {
        <Key extends keyof ItemEvents>(type: Key, event: ItemEvents[Key]): void;
        <Key_1 extends keyof ItemEvents>(type: undefined extends ItemEvents[Key_1] ? Key_1 : never): void;
    };
    constructor(namespace: DataNamespace, data: BaseItemData, game: Game);
    applyDataModification(modData: BaseItemModificationData, game: Game): void;
    overrideMedia(media: string): void;
}
/** Dummy items used for placeholders for official game content that is not registered */
declare class DummyItem extends Item {
    get name(): string;
    get description(): string;
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface ItemQuantity<T> {
    item: T;
    quantity: number;
}
interface ItemQuantityRarity<T> extends ItemQuantity<T> {
    rarity: number;
}
declare type AnyItemQuantity = ItemQuantity<AnyItem>;
declare type EquipmentQuantity = ItemQuantity<EquipmentItem>;
declare type RuneQuantity = ItemQuantity<RuneItem>;
interface IDQuantity {
    id: string;
    quantity: number;
}
interface ItemQuantitiesModificationData {
    add?: IDQuantity[];
    remove?: string[];
}
interface ItemChanceData {
    itemID: string;
    chance: number;
}
interface ItemChance {
    item: Item;
    chance: number;
}
declare type AmmoType = 'Arrows' | 'Bolts' | 'Javelins' | 'ThrowingKnives' | 'None' | 'AbyssalArrows' | 'AbyssalBolts';
interface BaseEquipmentItemData extends BaseItemData, IStatObjectData {
    tier: string;
    /** The IDs of the EquipmentSlots this item can be equipped to */
    validSlots: string[];
    /** The IDs of the EquipmentSlots this item occupies when it is equipped */
    occupiesSlots: string[];
    /** Optional. The IDs of Equipment Items that this item cannot be equipped with at the same time */
    cantEquipWith?: string[];
    equipRequirements: AnyRequirementData[];
    equipmentStats: AnyEquipStatData[];
    specialAttacks?: string[];
    overrideSpecialChances?: number[];
    providedRunes?: IDQuantity[];
    ammoType?: AmmoType;
    consumesChargesOn?: GameEventMatcherData[];
    consumesOn?: GameEventMatcherData[];
    consumesItemOn?: {
        itemID: string;
        chance: number;
        matchers: GameEventMatcherData[];
    };
    /** Optional. If present sets the priority of losing this item when dying. Lower priority indicates the item will be lost sooner. Defaults to 0. */
    deathPenaltyPriority?: number;
}
interface BaseEquipmentItemModificationData extends BaseItemModificationData, IStatObjectModificationData {
    ammoType?: AmmoType | null;
    equipRequirements?: {
        add?: AnyRequirementData[];
        remove?: string[];
    };
    equipmentStats?: EquipStatsModificationData;
    occupiesSlots?: {
        add?: string[];
        remove?: string[];
    };
    overrideSpecialChances?: number[] | null;
    providedRunes?: ItemQuantitiesModificationData;
    specialAttacks?: {
        add?: string[];
        remove?: string[];
    };
    tier?: string;
    validSlots?: {
        add?: string[];
        remove?: string[];
    };
    consumesOn?: {
        add?: GameEventMatcherData[];
        remove?: string[];
    };
}
interface EquipmentItemData extends BaseEquipmentItemData {
    itemType: 'Equipment';
}
declare type BankItemConsumption = {
    item: AnyItem;
    chance: number;
    matchers: AnyGameEventMatcher[];
};
/** Item which can be equipped to the player */
declare class EquipmentItem extends Item implements SoftDataDependant<EquipmentItemData>, IStatObject {
    /** Used to classify the item */
    tier: string;
    /** Valid slots the equipment can go in. First element is the default slot to use. */
    validSlots: EquipmentSlot[];
    /** Additional equipment slots that are also taken up */
    occupiesSlots: EquipmentSlot[];
    /** Items that this item is not allowed to be equipped with. */
    cantEquipWith: EquipmentItem[];
    /** Requirements for equipping the item */
    equipRequirements: AnyRequirement[];
    /** Equipment stats provided by item */
    equipmentStats: AnyEquipStat[];
    /** Modifiers provided by the item */
    modifiers?: ModifierValue[];
    /** Enemy modifiers provided by the item */
    enemyModifiers?: ModifierValue[];
    /** Conditional modifiers provided by the item */
    conditionalModifiers: ConditionalModifier[];
    /** If present, this item will provide CombatEffects */
    combatEffects?: CombatEffectApplicator[];
    /** Special attacks provided by the item */
    specialAttacks: SpecialAttack[];
    /** If present with specialAttacks, will override their default chances */
    overrideSpecialChances?: number[];
    /** Runes that are provided by the item */
    providedRunes: AnyItemQuantity[];
    /** Property exclusive to ammo */
    ammoType?: AmmoTypeID;
    /** Determines when a single quantity of the item should be consumed */
    consumesOn?: AnyGameEventMatcher[];
    /** Determines when a single item charge of the item should be consumed */
    consumesChargesOn?: AnyGameEventMatcher[];
    /** Determines when a single of the specified item should be consumed from the bank */
    consumesItemOn?: BankItemConsumption;
    /** Determines the priority of losing this item to the death penalty. Lower priority is lost before other items. */
    deathPenaltyPriority: number;
    get hasDescription(): boolean;
    get description(): string;
    get modifiedDescription(): string;
    constructor(namespace: DataNamespace, data: BaseEquipmentItemData, game: Game);
    registerSoftDependencies(data: EquipmentItemData, game: Game): void;
    applyDataModification(modData: BaseEquipmentItemModificationData, game: Game): void;
    /** If this item fits in an equipment slot with the given ID */
    fitsInSlot(slotID: string): boolean;
    /** If this item occupies an equipment slot with the given ID */
    occupiesSlot(slotID: string): boolean;
}
declare class DummyEquipmentItem extends EquipmentItem {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface WeaponItemData extends BaseEquipmentItemData {
    itemType: 'Weapon';
    attackType: AttackType;
    ammoTypeRequired?: AmmoType;
    damageType?: string;
}
interface WeaponItemModificationData extends BaseEquipmentItemModificationData {
    attackType?: AttackType;
    ammoTypeRequired?: AmmoType | null;
}
declare class WeaponItem extends EquipmentItem {
    /** The attack type of this weapon */
    attackType: AttackType;
    /** The ammo type this weapon requires for each attack */
    ammoTypeRequired?: AmmoTypeID;
    /** The type of damage this weapon deals. Defaults to Normal if not set */
    damageType: DamageType;
    constructor(namespace: DataNamespace, itemData: WeaponItemData, game: Game);
    applyDataModification(modData: WeaponItemModificationData, game: Game): void;
}
interface FoodItemData extends BaseItemData, IStatObjectData {
    itemType: 'Food';
    healsFor: number;
}
interface FoodItemModificationData extends BaseItemModificationData, IStatObjectModificationData {
    healsFor?: number;
}
declare class FoodItem extends Item {
    healsFor: number;
    /** Stats that are applied when this item is equipped and selected */
    stats: StatObject;
    get hasDescription(): boolean;
    get description(): string;
    get modifiedDescription(): string;
    constructor(namespace: DataNamespace, data: FoodItemData, game: Game);
    applyDataModification(modData: FoodItemModificationData, game: Game): void;
}
interface BoneItemData extends BaseItemData {
    itemType: 'Bone';
    prayerPoints: number;
}
interface BoneItemModificationData extends BaseItemModificationData {
    prayerPoints?: number;
}
declare class BoneItem extends Item {
    prayerPoints: number;
    constructor(namespace: DataNamespace, itemData: BoneItemData, game: Game);
    applyDataModification(modData: BoneItemModificationData, game: Game): void;
}
interface SoulItemData extends BaseItemData {
    itemType: 'Soul';
    soulPoints: number;
}
interface SoulItemModificationData extends BaseItemModificationData {
    soulPoints?: number;
}
/** Item that provides soul points that can be claimed in the bank. Functions similarly to bones. */
declare class SoulItem extends Item {
    soulPoints: number;
    constructor(namespace: DataNamespace, itemData: SoulItemData, game: Game);
    applyDataModification(modData: SoulItemModificationData, game: Game): void;
}
interface PotionItemData extends BaseItemData, IStatObjectData {
    itemType: 'Potion';
    charges: number;
    tier: HerbloreTier;
    action: string;
    consumesOn: GameEventMatcherData[];
}
interface PotionItemModificationData extends BaseItemModificationData, IStatObjectModificationData {
    charges?: number;
}
declare class PotionItem extends Item implements SoftDataDependant<PotionItemData> {
    /** Stat provided by this potion */
    stats: StatObject;
    /** Base charges the potion has */
    charges: number;
    /** Action the potion applies to */
    action: Action;
    tier: HerbloreTier;
    /** The recipe this potion can be made from. Undefined if none */
    get recipe(): HerbloreRecipe | undefined;
    set recipe(value: HerbloreRecipe | undefined);
    _recipe?: HerbloreRecipe;
    /** When a single charge of the potion should be consumed */
    consumesOn: AnyGameEventMatcher[];
    get hasDescription(): boolean;
    get description(): string;
    get modifiedDescription(): string;
    constructor(namespace: DataNamespace, data: PotionItemData, game: Game);
    registerSoftDependencies(data: PotionItemData, game: Game): void;
    applyDataModification(modData: PotionItemModificationData, game: Game): void;
}
declare type ReadableItemSwalData = {
    title: string;
    htmlTemplateID: string;
};
interface ReadableItemData extends BaseItemData {
    itemType: 'Readable';
    modalID?: string;
    swalData?: ReadableItemSwalData;
}
declare class ReadableItem extends Item {
    modalID?: string;
    swalData?: ReadableItemSwalData;
    constructor(namespace: DataNamespace, itemData: ReadableItemData, game: Game);
    /** Fire the modal for reading the item */
    showContents(): void;
}
interface OpenableItemData extends BaseItemData {
    itemType: 'Openable';
    dropTable: DropTableData[];
    keyItem?: IDQuantity;
}
interface OpenableItemModificationData extends BaseItemModificationData {
    dropTable?: {
        add?: DropTableData[];
        remove?: string[];
    };
    keyItem?: IDQuantity | null;
}
declare class OpenableItem extends Item {
    dropTable: DropTable;
    keyItem?: AnyItemQuantity;
    constructor(namespace: DataNamespace, itemData: OpenableItemData, game: Game);
    applyDataModification(modData: OpenableItemModificationData, game: Game): void;
}
interface TokenItemData extends BaseItemData, IStatObjectData {
    itemType: 'Token';
}
declare type TokenItemModificationData = BaseItemModificationData & IStatObjectModificationData;
declare class TokenItem extends Item {
    game: Game;
    /** Stats provided based on the amount of tokens claimed */
    stats: StatObject;
    get hasDescription(): boolean;
    get description(): string;
    constructor(namespace: DataNamespace, data: TokenItemData, game: Game);
    /** Computes the number of times the player has claimed this token */
    getTimesClaimed(): number;
    applyDataModification(modData: TokenItemModificationData, game: Game): void;
}
interface MasteryTokenItemData extends BaseItemData {
    itemType: 'MasteryToken';
    /** The skill to provide mastery XP for */
    skill: string;
    /** The realm that mastery XP is provided to */
    realm: string;
    /** The percentage of the mastery pool this item fills */
    percent: number;
    /** Optional. If this item should be rolled for when the corresponding skill completes an action. Defaults to true. */
    rollInSkill?: boolean;
}
declare class MasteryTokenItem extends Item {
    skill: SkillWithMastery<MasteryAction, MasterySkillData>;
    realm: Realm;
    percent: number;
    /** If this item should be rolled for when a skill action is completed */
    rollInSkill: boolean;
    get hasDescription(): boolean;
    get description(): string;
    constructor(namespace: DataNamespace, data: MasteryTokenItemData, game: Game);
}
interface CompostItemData extends BaseItemData {
    itemType: 'Compost';
    compostValue: number;
    harvestBonus: number;
    buttonStyle: string;
    barStyle: string;
    disableSeedRefund?: boolean;
}
interface CompostItemModificationData extends BaseItemModificationData {
    barStyle?: string;
    buttonStyle?: string;
    compostValue?: number;
    harvestBonus?: number;
    disableSeedRefund?: boolean;
}
declare class CompostItem extends Item {
    compostValue: number;
    harvestBonus: number;
    disableSeedRefund: boolean;
    buttonStyle: string;
    barStyle: string;
    constructor(namespace: DataNamespace, itemData: CompostItemData, game: Game);
    applyDataModification(modData: CompostItemModificationData, game: Game): void;
}
interface RuneItemData extends BaseItemData {
    itemType: 'Rune';
    subRunes?: string[];
    realm?: string;
}
declare class RuneItem extends Item {
    get isComboRune(): boolean;
    subRunes: RuneItem[];
    realm: Realm;
    constructor(namespace: DataNamespace, data: RuneItemData, game: Game);
}
interface FiremakingOilItemData extends BaseItemData {
    itemType: 'FiremakingOil';
    oilInterval: number;
    modifiers: ModifierValuesRecordData;
}
declare class FiremakingOilItem extends Item {
    /** Modifiers provided by the Oil for Firemaking */
    oilInterval: number;
    modifiers: ModifierValue[];
    constructor(namespace: DataNamespace, data: FiremakingOilItemData, game: Game);
    registerSoftDependencies(data: FiremakingOilItemData, game: Game): void;
    get description(): string;
    get hasDescription(): boolean;
}
/** Returns the HTML that describes an items special attacks if it has any, else returns an empty string */
declare function getItemSpecialAttackInformation(item: EquipmentItem): string;
/** Returns the HTML for a tooltip that provides information on an item */
declare function createItemInformationTooltip(item: AnyItem, showStats?: boolean): string;
declare function getAmmoTypeDescription(item: EquipmentItem): string;
declare function getAmmoTypeRequiredDescription(item: WeaponItem): string;
declare function getItemBaseStatsBreakdown(item: EquipmentItem): string;
