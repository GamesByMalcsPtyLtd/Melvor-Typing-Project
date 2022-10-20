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
    private _name;
    private _milestoneID?;
    private _media;
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
    private item;
    constructor(data: EquipItemMilestoneData, game: Game, skill: AnySkill);
    setLevel(skill: AnySkill): void;
}
declare class SkillMasteryMilestone implements MilestoneLike {
    private skill;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(skill: AnySkill);
}
declare class AgilityObstacleMilestone implements MilestoneLike {
    private tier;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(tier: number);
}
declare class AgilityPillarMilestone implements MilestoneLike {
    private agility;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(agility: Agility);
}
declare class AgilityElitePillarMilestone implements MilestoneLike {
    private agility;
    get level(): number;
    get media(): string;
    get name(): string;
    constructor(agility: Agility);
}
declare class SlayerAreaMilestone implements MilestoneLike {
    private area;
    level: number;
    get name(): string;
    get media(): string;
    constructor(area: SlayerArea, level: number);
}
