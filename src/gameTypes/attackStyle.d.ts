interface AttackStyleData extends IDData, IStatObjectData {
    experienceGain: {
        skillID: string;
        ratio: number;
    }[];
    attackType: AttackType;
    name: string;
}
declare class AttackStyle extends NamespacedObject {
    stats: StatObject;
    experienceGain: {
        skill: AnySkill;
        ratio: number;
    }[];
    attackType: AttackType;
    get name(): string;
    get toolTipContent(): string;
    get buttonID(): string;
    _name: string;
    constructor(namespace: DataNamespace, data: AttackStyleData, game: Game);
}
