declare class SkillProgressDisplay {
    private elems;
    constructor();
    updateAll(): void;
    updateSkill(skillID: SkillID): void;
    static skills: SkillID[];
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
    private navs;
    private active;
    constructor();
    updateNav(skillID: number): void;
    setActive(skillID: number): void;
    setInactive(skillID: number): void;
    setAllInactive(): void;
    private setLocked;
    private setUnlocked;
    private setLevel;
    private getNavs;
}
declare type SkillNavElem = {
    name: HTMLElement;
    levelAll: HTMLElement;
    level: HTMLElement;
    lock?: HTMLElement;
};
