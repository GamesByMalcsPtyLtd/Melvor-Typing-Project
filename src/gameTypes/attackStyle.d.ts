/** Contains data on the different attackstyles present */
declare const attackStyles: StringDictionary<AttackStyleData>;
declare type AttackStyleData = {
    id: number;
    name: AttackStyle;
    modifiers: ModifierData;
    experienceGain: {
        skill: SkillID;
        ratio: number;
    }[];
    buttonID: string;
    attackType: AttackType;
    pets: PetID[];
    tooltipContent: string;
};
