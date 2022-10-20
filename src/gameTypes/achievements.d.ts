interface SteamAchievementData {
    id: string;
    requirements: AnyRequirementData[];
    requiredGamemodeID?: string;
}
declare class SteamAchievement {
    id: string;
    requirements: AnyRequirement[];
    requiredGamemode?: Gamemode;
    constructor(data: SteamAchievementData, game: Game);
}
