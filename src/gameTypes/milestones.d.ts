interface MilestoneLike {
    level: number;
    name: string;
    media: string;
}
declare type MilestoneData = CustomSkillMilestoneData | EquipItemMilestoneData;
interface CustomSkillMilestoneData extends MilestoneLike {
    type: 'Custom';
    milestoneID?: string;
}
declare class CustomSkillMilestone {
    level: number;
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
declare class AgilityObstacleMilestone implements MilestoneLike {
    tier: number;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(tier: number);
}
declare class AgilityPillarMilestone implements MilestoneLike {
    agility: Agility;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(agility: Agility);
}
declare class AgilityElitePillarMilestone implements MilestoneLike {
    agility: Agility;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(agility: Agility);
}
declare class SlayerAreaMilestone implements MilestoneLike {
    area: SlayerArea;
    level: number;
    get name(): string;
    get media(): string;
    constructor(area: SlayerArea, level: number);
}
