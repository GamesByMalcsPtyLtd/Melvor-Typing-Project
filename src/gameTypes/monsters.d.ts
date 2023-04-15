interface DropTableData {
    itemID: string;
    minQuantity: number;
    maxQuantity: number;
    weight: number;
}
interface MonsterData extends IDData {
    name: string;
    description?: string;
    media: string;
    mediaAnimation?: string;
    levels: Omit<CombatLevels, 'Prayer'>;
    equipmentStats: EquipStatPair[];
    ignoreCompletion: boolean;
    attackType: AttackType | 'random';
    specialAttacks: string[];
    overrideSpecialChances?: number[];
    passives: string[];
    lootChance: number;
    lootTable: DropTableData[];
    gpDrops: {
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
}
interface MonsterModificationData extends IDData {
    attackType?: AttackType | 'random';
    bones?: {
        itemID: string;
        quantity: number;
    } | null;
    canSlayer?: boolean;
    equipmentStats?: {
        add?: EquipStatPair[];
        remove?: string[];
    };
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
}
declare class Monster extends NamespacedObject {
    get media(): string;
    get name(): string;
    get description(): string;
    get combatLevel(): number;
    levels: Omit<CombatLevels, 'Prayer'>;
    equipmentStats: EquipStatPair[];
    ignoreCompletion: boolean;
    attackType: AttackType | 'random';
    specialAttacks: AttackSelection[];
    passives: CombatPassive[];
    lootChance: number;
    lootTable: DropTable;
    gpDrops: {
        min: number;
        max: number;
    };
    /** Bones that the monster drops. If undefined, monster does not drop bones. */
    bones?: {
        item: AnyItem;
        quantity: number;
    };
    canSlayer: boolean;
    isBoss: boolean;
    selectedSpell: StandardSpell;
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
