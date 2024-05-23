interface MilestoneLike {
    level: number;
    name: string;
    media: string;
}
interface AbyssalMilestoneLike {
    abyssalLevel: number;
    name: string;
    media: string;
}
declare type MilestoneData = CustomSkillMilestoneData | EquipItemMilestoneData;
interface CustomSkillMilestoneData extends MilestoneLike {
    type: 'Custom';
    abyssalLevel?: number;
    milestoneID?: string;
}
declare class CustomSkillMilestone {
    level: number;
    abyssalLevel: number;
    get name(): string;
    get media(): string;
    _name: string;
    _milestoneID?: string;
    _media: string;
    constructor(data: CustomSkillMilestoneData);
}
interface EquipItemMilestoneData {
    type: 'EquipItem';
    itemID: string;
}
declare class EquipItemMilestone {
    level: number;
    abyssalLevel: number;
    get name(): string;
    get media(): string;
    item: EquipmentItem;
    constructor(data: EquipItemMilestoneData, game: Game, skill: AnySkill);
    setLevel(skill: AnySkill): void;
}
declare class SkillMasteryMilestone implements MilestoneLike {
    skill: AnySkill;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(skill: AnySkill);
}
declare class AgilityObstacleMilestone implements MilestoneLike, AbyssalMilestoneLike {
    tier: number;
    course: AgilityCourse;
    get media(): string;
    get name(): string;
    get level(): number;
    get abyssalLevel(): number;
    constructor(tier: number, course: AgilityCourse);
}
declare class AgilityPillarMilestone implements MilestoneLike, AbyssalMilestoneLike {
    agility: Agility;
    tier: number;
    course: AgilityCourse;
    get level(): number;
    get abyssalLevel(): number;
    get media(): string;
    get name(): string;
    constructor(agility: Agility, tier: number, course: AgilityCourse);
}
declare class SlayerAreaMilestone implements MilestoneLike, AbyssalMilestoneLike {
    area: SlayerArea;
    level: number;
    abyssalLevel: number;
    get name(): string;
    get media(): string;
    constructor(area: SlayerArea, level: number, abyssalLevel?: number);
}
