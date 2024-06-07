interface DropTableData {
    itemID: string;
    minQuantity: number;
    maxQuantity: number;
    weight: number;
}
interface CurrencyDropData {
    currencyID: string;
    min: number;
    max: number;
}
interface CurrencyDrop {
    currency: Currency;
    min: number;
    max: number;
}
interface MonsterData extends IDData {
    name: string;
    description?: string;
    media: string;
    mediaAnimation?: string;
    levels: PickPartial<Omit<CombatLevels, 'Prayer'>, 'Corruption'>;
    equipmentStats: AnyEquipStatData[];
    ignoreCompletion: boolean;
    attackType: AttackType | 'random';
    specialAttacks: string[];
    combatEffects?: TriggeredCombatEffectApplicatorData[];
    overrideSpecialChances?: number[];
    passives: string[];
    lootChance: number;
    lootTable: DropTableData[];
    currencyDrops?: CurrencyDropData[];
    /** @deprecated Use currencyDrops instead */
    gpDrops?: {
        min: number;
        max: number;
    };
    bones?: {
        itemID: string;
        quantity: number;
    };
    canSlayer: boolean;
    isBoss: boolean;
    selectedSpell: string;
    pet?: IDQuantity;
    barrierPercent?: number;
    damageType?: string;
}
interface MonsterModificationData extends IDData {
    attackType?: AttackType | 'random';
    bones?: {
        itemID: string;
        quantity: number;
    } | null;
    canSlayer?: boolean;
    equipmentStats?: EquipStatsModificationData;
    currencyDrops?: {
        add?: {
            currencyID: string;
            min?: number;
            max?: number;
        }[];
        remove?: string[];
    };
    /** @deprecated Use currencyDrops instead */
    gpDrops?: {
        min?: number;
        max?: number;
    };
    isBoss?: boolean;
    levels?: Partial<Omit<CombatLevels, 'Prayer'>>;
    lootChance?: number;
    lootTable?: {
        add?: DropTableData[];
        remove?: string[];
    };
    passives?: {
        add?: string[];
        remove?: string[];
    };
    pet?: IDQuantity | null;
    selectedSpell?: string;
    specialAttacks?: {
        add?: {
            attackID: string;
            chance?: number;
        }[];
        remove?: string[];
    };
    combatEffects?: CombatEffectApplicatorModificationData;
}
declare type MonsterEvents = {
    killed: MonsterKilledEvent;
};
declare class Monster extends NamespacedObject implements IGameEventEmitter<MonsterEvents> {
    get media(): string;
    get corruptedMedia(): string;
    get name(): string;
    get englishName(): string;
    get wikiName(): string;
    get description(): string;
    get combatLevel(): number;
    levels: Omit<CombatLevels, 'Prayer'>;
    equipmentStats: AnyEquipStat[];
    ignoreCompletion: boolean;
    attackType: AttackType | 'random';
    specialAttacks: AttackSelection[];
    combatEffects: CombatEffectApplicator[];
    passives: CombatPassive[];
    lootChance: number;
    lootTable: DropTable;
    currencyDrops: CurrencyDrop[];
    /** Bones that the monster drops. If undefined, monster does not drop bones. */
    bones?: {
        item: AnyItem;
        quantity: number;
    };
    canSlayer: boolean;
    isBoss: boolean;
    selectedSpell: AttackSpell;
    _name: string;
    _description?: string;
    _media: string;
    _mediaAnimation?: string;
    hasDescription: boolean;
    /** Pet that is unlocked if the monster is killed kills times */
    pet?: {
        pet: Pet;
        kills: number;
    };
    get hasBarrier(): boolean;
    barrierPercent: number;
    /** The type of damage this Monster deals. Defaults to Normal if not set. */
    damageType: DamageType;
    _events: import("mitt").Emitter<MonsterEvents>;
    on: {
        <Key extends "killed">(type: Key, handler: import("mitt").Handler<MonsterEvents[Key]>): void;
        (type: "*", handler: import("mitt").WildcardHandler<MonsterEvents>): void;
    };
    off: {
        <Key extends "killed">(type: Key, handler?: import("mitt").Handler<MonsterEvents[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<MonsterEvents>): void;
    };
    emit: {
        <Key extends "killed">(type: Key, event: MonsterEvents[Key]): void;
        <Key_1 extends "killed">(type: undefined extends MonsterEvents[Key_1] ? Key_1 : never): void;
    };
    constructor(namespace: DataNamespace, data: MonsterData, game: Game);
    applyDataModification(modData: MonsterModificationData, game: Game): void;
    overrideMedia(media: string): void;
}
declare class DummyMonster extends Monster {
    constructor(namespace: DataNamespace, id: string, game: Game);
}
declare class GolbinMonster extends Monster {
    get name(): string;
}
