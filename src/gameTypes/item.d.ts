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
declare type AnyItemData = ItemData | EquipmentItemData | WeaponItemData | FoodItemData | BoneItemData | PotionItemData | ReadableItemData | OpenableItemData | TokenItemData | CompostItemData;
declare type AnyItemModificationData = BaseItemModificationData | BaseEquipmentItemModificationData | WeaponItemModificationData | FoodItemModificationData | BoneItemModificationData | PotionItemModificationData | OpenableItemModificationData | TokenItemModificationData | CompostItemModificationData;
declare type AnyItem = Item | EquipmentItem | WeaponItem | FoodItem | BoneItem | PotionItem | ReadableItem | OpenableItem | TokenItem | CompostItem;
/** Base class for items in the game */
declare class Item extends NamespacedObject {
    category: string;
    type: string;
    get name(): string;
    /** Image URL*/
    get media(): string;
    /** Alternative image URL, if one is present, otherwise defaults to media */
    get altMedia(): string;
    get description(): string;
    sellsFor: number;
    _name: string;
    _media: string;
    get hasDescription(): boolean;
    ignoreCompletion: boolean;
    obtainFromItemLog: boolean;
    golbinRaidExclusive: boolean;
    _customDescription?: string;
    _mediaAnimation?: string;
    _altMedia?: string;
    constructor(namespace: DataNamespace, data: BaseItemData);
    applyDataModification(modData: BaseItemModificationData, game: Game): void;
    overrideMedia(media: string): void;
}
/** Dummy items used for placeholders for official game content that is not registered */
declare class DummyItem extends Item {
    get name(): string;
    get description(): string;
    constructor(namespace: DataNamespace, id: string);
}
interface ItemQuantity<T> {
    item: T;
    quantity: number;
}
declare type AnyItemQuantity = ItemQuantity<AnyItem>;
declare type EquipmentQuantity = ItemQuantity<EquipmentItem>;
interface IDQuantity {
    id: string;
    quantity: number;
}
declare type AmmoType = 'Arrows' | 'Bolts' | 'Javelins' | 'ThrowingKnives' | 'None';
interface BaseEquipmentItemData extends BaseItemData {
    tier: string;
    validSlots: SlotTypes[];
    occupiesSlots: SlotTypes[];
    equipRequirements: AnyRequirementData[];
    equipmentStats: EquipStatPair[];
    modifiers?: PlayerModifierData;
    enemyModifiers?: CombatModifierData;
    conditionalModifiers?: ConditionalModifierData[];
    specialAttacks?: string[];
    overrideSpecialChances?: number[];
    fightEffects?: string[];
    providedRunes?: IDQuantity[];
    ammoType?: AmmoType;
    consumesChargesOn?: GameEventMatcherData[];
    consumesOn?: GameEventMatcherData[];
    consumesItemOn?: {
        itemID: string;
        chance: number;
        matchers: GameEventMatcherData[];
    };
}
interface BaseEquipmentItemModificationData extends BaseItemModificationData {
    ammoType?: AmmoType | null;
    conditionalModifiers?: {
        add?: ConditionalModifierData[];
        remove?: string[];
    };
    enemyModifiers?: {
        add?: CombatModifierData;
        remove?: (keyof CombatModifierData)[];
    };
    equipRequirements?: {
        add?: AnyRequirementData[];
        remove?: string[];
    };
    equipmentStats?: {
        add?: EquipStatPair[];
        remove?: EquipStatKey[];
    };
    fightEffects?: {
        add?: string[];
        remove?: string[];
    };
    modifiers?: {
        add?: PlayerModifierData;
        remove?: (keyof PlayerModifierData)[];
    };
    occupiesSlots?: {
        add?: SlotTypes[];
        remove?: SlotTypes[];
    };
    overrideSpecialChances?: number[] | null;
    providedRunes?: {
        add?: IDQuantity[];
        remove?: string[];
    };
    specialAttacks?: {
        add?: string[];
        remove?: string[];
    };
    tier?: string;
    validSlots?: {
        add?: SlotTypes[];
        remove?: SlotTypes[];
    };
}
interface EquipmentItemData extends BaseEquipmentItemData {
    itemType: 'Equipment';
}
/** Item which can be equipped to the player */
declare class EquipmentItem extends Item implements SoftDataDependant<EquipmentItemData> {
    /** Used to classify the item */
    tier: string;
    /** Valid slots the equipment can go in. First element is the default slot to use. */
    validSlots: SlotTypes[];
    /** Additional equipment slots that are also taken up */
    occupiesSlots: SlotTypes[];
    /** Requirements for equipping the item */
    equipRequirements: AnyRequirement[];
    /** Equipment stats provided by item */
    equipmentStats: EquipStatPair[];
    /** Modifiers provided by the item */
    modifiers?: PlayerModifierObject;
    /** Enemy modifiers provided by the item */
    enemyModifiers?: CombatModifierData;
    /** Conditional modifiers provided by the item */
    conditionalModifiers: ConditionalModifier[];
    /** Special attacks provided by the item */
    specialAttacks: SpecialAttack[];
    /** If present with specialAttacks, will override their default chances */
    overrideSpecialChances?: number[];
    /** Effects that apply at the start of a fight */
    fightEffects: ItemEffect[];
    /** Runes that are provided by the item */
    providedRunes: AnyItemQuantity[];
    /** Property exclusive to ammo */
    ammoType?: AmmoTypeID;
    /** Determines when a single quantity of the item should be consumed */
    consumesOn?: GameEventMatcher[];
    /** Determines when a single item charge of the item should be consumed */
    consumesChargesOn?: GameEventMatcher[];
    /** Determines when a single of the specified item should be consumed from the bank */
    consumesItemOn?: {
        item: AnyItem;
        chance: number;
        matchers: GameEventMatcher[];
    };
    get hasDescription(): boolean;
    get description(): string;
    constructor(namespace: DataNamespace, data: BaseEquipmentItemData, game: Game);
    registerSoftDependencies(data: EquipmentItemData, game: Game): void;
    applyDataModification(modData: BaseEquipmentItemModificationData, game: Game): void;
}
declare class DummyEquipmentItem extends EquipmentItem {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
interface WeaponItemData extends BaseEquipmentItemData {
    itemType: 'Weapon';
    attackType: AttackType;
    ammoTypeRequired?: AmmoType;
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
    constructor(namespace: DataNamespace, itemData: WeaponItemData, game: Game);
    applyDataModification(modData: WeaponItemModificationData, game: Game): void;
}
interface FoodItemData extends BaseItemData {
    itemType: 'Food';
    healsFor: number;
}
interface FoodItemModificationData extends BaseItemModificationData {
    healsFor?: number;
}
declare class FoodItem extends Item {
    healsFor: number;
    constructor(namespace: DataNamespace, itemData: FoodItemData);
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
    constructor(namespace: DataNamespace, itemData: BoneItemData);
    applyDataModification(modData: BoneItemModificationData, game: Game): void;
}
interface PotionItemData extends BaseItemData {
    itemType: 'Potion';
    modifiers: PlayerModifierData;
    charges: number;
    tier: HerbloreTier;
    action: string;
    consumesOn: GameEventMatcherData[];
}
interface PotionItemModificationData extends BaseItemModificationData {
    charges?: number;
    modifiers?: {
        add?: PlayerModifierData;
        remove?: (keyof PlayerModifierData)[];
    };
}
declare class PotionItem extends Item implements SoftDataDependant<PotionItemData> {
    /** Modifiers for the potion */
    modifiers: PlayerModifierObject;
    /** Base charges the potion has */
    charges: number;
    /** Action the potion applies to */
    action: Action;
    tier: HerbloreTier;
    /** When a single charge of the potion should be consumed */
    consumesOn: GameEventMatcher[];
    get hasDescription(): boolean;
    get description(): string;
    constructor(namespace: DataNamespace, data: PotionItemData, game: Game);
    registerSoftDependencies(data: PotionItemData, game: Game): void;
    applyDataModification(modData: PotionItemModificationData, game: Game): void;
}
declare type ReadableItemSwalData = {
    title: LangStringData;
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
    constructor(namespace: DataNamespace, itemData: ReadableItemData);
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
interface TokenItemData extends BaseItemData {
    itemType: 'Token';
    /** Modifiers provided by claiming the token */
    modifiers: PlayerModifierData;
}
interface TokenItemModificationData extends BaseItemModificationData {
    modifiers?: {
        add?: PlayerModifierData;
        remove?: (keyof PlayerModifierData)[];
    };
}
declare class TokenItem extends Item {
    /** Modifiers that are given to the player based on amount of tokens claimed */
    modifiers: PlayerModifierObject;
    get hasDescription(): boolean;
    get description(): string;
    constructor(namespace: DataNamespace, itemData: TokenItemData, game: Game);
    applyDataModification(modData: TokenItemModificationData, game: Game): void;
}
interface CompostItemData extends BaseItemData {
    itemType: 'Compost';
    compostValue: number;
    harvestBonus: number;
    buttonStyle: string;
    barStyle: string;
}
interface CompostItemModificationData extends BaseItemModificationData {
    barStyle?: string;
    buttonStyle?: string;
    compostValue?: number;
    harvestBonus?: number;
}
declare class CompostItem extends Item {
    compostValue: number;
    harvestBonus: number;
    buttonStyle: string;
    barStyle: string;
    constructor(namespace: DataNamespace, itemData: CompostItemData);
    applyDataModification(modData: CompostItemModificationData, game: Game): void;
}
/** Returns the HTML that describes an items special attacks if it has any, else returns an empty string */
declare function getItemSpecialAttackInformation(item: EquipmentItem): string;
/** Returns the HTML for a tooltip that provides information on an item */
declare function createItemInformationTooltip(item: AnyItem, showStats?: boolean): string;
