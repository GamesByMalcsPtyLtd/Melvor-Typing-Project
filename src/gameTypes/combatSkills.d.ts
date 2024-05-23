declare abstract class CombatSkill<DataType extends BaseSkillData = BaseSkillData, ModificationDataType extends BaseSkillModificationData = BaseSkillModificationData> extends Skill<DataType, SkillEvents, ModificationDataType> {
    get isCombat(): boolean;
    get hasMinibar(): boolean;
    onAnyLevelUp(): void;
}
declare class Attack extends CombatSkill {
    readonly _media = Assets.Attack;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    renderQueue: SkillRenderQueue;
    postDataRegistration(): void;
    constructor(namespace: DataNamespace, game: Game);
}
declare class Strength extends CombatSkill {
    readonly _media = Assets.Strength;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    renderQueue: SkillRenderQueue;
    postDataRegistration(): void;
    constructor(namespace: DataNamespace, game: Game);
}
declare class Defence extends CombatSkill {
    readonly _media = Assets.Defence;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
declare class Hitpoints extends CombatSkill {
    readonly _media = Assets.Hitpoints;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    get tutorialLevelCap(): number;
    postDataRegistration(): void;
    get startingLevel(): number;
    onLevelUp(oldLevel: number, newLevel: number): void;
    onAbyssalLevelUp(oldLevel: number, newLevel: number): void;
}
declare class Ranged extends CombatSkill {
    readonly _media = Assets.Ranged;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
declare class PrayerRenderQueue extends SkillRenderQueue {
    prayerMenu: boolean;
}
declare class Prayer extends CombatSkill {
    readonly _media = Assets.Prayer;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    /** Renders required for the skill */
    renderQueue: PrayerRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
    render(): void;
    renderPrayerMenu(): void;
    onAnyLevelUp(): void;
}
declare class Slayer extends CombatSkill {
    readonly _media = Assets.Slayer;
    get levelCompletionBreakdown(): LevelCompletionBreakdown[];
    renderQueue: SkillRenderQueue;
    constructor(namespace: DataNamespace, game: Game);
    postDataRegistration(): void;
}
