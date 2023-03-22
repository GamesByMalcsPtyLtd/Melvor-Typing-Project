interface AttackStyleData extends IDData {
    modifiers: PlayerModifierData;
    experienceGain: {
        skillID: string;
        ratio: number;
    }[];
    attackType: AttackType;
    name: string;
}
declare class AttackStyle extends NamespacedObject {
    modifiers: PlayerModifierObject;
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
