declare abstract class CombatSkill extends Skill<BaseSkillData> {
    get isCombat(): boolean;
    get hasMinibar(): boolean;
    onLevelUp(oldLevel: number, newLevel: number): void;
}
declare class Attack extends CombatSkill {
    readonly _media = Assets.Attack;
    renderQueue: SkillRenderQueue;
    postDataRegistration(): void;
    constructor(namespace: DataNamespace, game: Game);
}
declare class Strength extends CombatSkill {
    readonly _media = Assets.Strength;
    renderQueue: SkillRenderQueue;
    postDataRegistration(): void;
    constructor(namespace: DataNamespace, game: Game);
}
declare class Defence extends CombatSkill {
    readonly _media = Assets.Defence;
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
declare class Hitpoints extends CombatSkill {
    readonly _media = Assets.Hitpoints;
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    get tutorialLevelCap(): number;
    postDataRegistration(): void;
    get startingLevel(): number;
    onLevelUp(oldLevel: number, newLevel: number): void;
}
declare class Ranged extends CombatSkill {
    readonly _media = Assets.Ranged;
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
declare class PrayerRenderQueue extends SkillRenderQueue {
    prayerMenu: boolean;
}
declare class Prayer extends CombatSkill {
    readonly _media = Assets.Prayer;
    /** Renders required for the skill */
    renderQueue: PrayerRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
    render(): void;
    renderPrayerMenu(): void;
    onLevelUp(oldLevel: number, newLevel: number): void;
}
declare class Slayer extends CombatSkill {
    readonly _media = Assets.Slayer;
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
