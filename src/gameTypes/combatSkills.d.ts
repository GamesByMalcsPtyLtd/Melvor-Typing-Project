declare abstract class CombatSkill extends Skill<BaseSkillData> {
    get isCombat(): boolean;
    get hasMinibar(): boolean;
    onLevelUp(oldLevel: number, newLevel: number): void;
}
declare class Attack extends CombatSkill {
    readonly _media = "assets/media/skills/attack/attack.svg";
    renderQueue: SkillRenderQueue;
    postDataRegistration(): void;
    constructor(namespace: DataNamespace, game: Game);
}
declare class Strength extends CombatSkill {
    readonly _media = "assets/media/skills/strength/strength.svg";
    renderQueue: SkillRenderQueue;
    postDataRegistration(): void;
    constructor(namespace: DataNamespace, game: Game);
}
declare class Defence extends CombatSkill {
    readonly _media = "assets/media/skills/defence/defence.svg";
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
declare class Hitpoints extends CombatSkill {
    readonly _media = "assets/media/skills/hitpoints/hitpoints.svg";
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    get tutorialLevelCap(): number;
    postDataRegistration(): void;
    get startingLevel(): number;
    onLevelUp(oldLevel: number, newLevel: number): void;
}
declare class Ranged extends CombatSkill {
    readonly _media = "assets/media/skills/ranged/ranged.svg";
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
declare class PrayerRenderQueue extends SkillRenderQueue {
    prayerMenu: boolean;
}
declare class Prayer extends CombatSkill {
    readonly _media = "assets/media/skills/prayer/prayer.svg";
    /** Renders required for the skill */
    renderQueue: PrayerRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
    render(): void;
    renderPrayerMenu(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
}
declare class Slayer extends CombatSkill {
    readonly _media = "assets/media/skills/slayer/slayer.svg";
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
