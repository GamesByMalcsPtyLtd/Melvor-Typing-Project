declare class SkillProgressDisplay {
    private game;
    private elems;
    constructor(game: Game);
    updateXP(skill: AnySkill): void;
    updateLevel(skill: AnySkill): void;
    private getSkillElements;
    private createTooltip;
    private createTooltipHTML;
}
declare type SkillProgressElems = {
    level: HTMLElement[];
    percent: HTMLElement[];
    xp: HTMLElement[];
    progress: HTMLElement[];
    tooltip: TippyTooltip[];
};
declare class SkillNav {
    private game;
    private navs;
    private active;
    private glowing;
    constructor(game: Game);
    /** Updates the level of a skill */
    updateSkillLevel(skill: AnySkill): void;
    /** Updates the lock icon of a skill */
    updateSkillLock(skill: AnySkill): void;
    /** Sets a skill as active and highlights it green */
    setActive(skill: AnySkill): void;
    /** Sets a skill as inactive and removes its green highlights */
    setInactive(skill: AnySkill): void;
    setGlowing(skill: AnySkill, shouldGlow: boolean): void;
    /** Removes grene highlights from all skills */
    setAllInactive(): void;
    private setLocked;
    private setUnlocked;
    private setLevel;
    private getNavs;
}
declare type SkillNavElem = {
    item: SidebarItemWrapper;
    name: HTMLElement;
    levelAll: HTMLElement;
    level: HTMLElement;
    lock?: HTMLElement;
};
