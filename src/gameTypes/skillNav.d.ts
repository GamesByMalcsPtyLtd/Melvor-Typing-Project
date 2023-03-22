declare class SkillProgressDisplay {
    game: Game;
    elems: Map<AnySkill, SkillProgressElems>;
    constructor(game: Game);
    updateXP(skill: AnySkill): void;
    updateLevel(skill: AnySkill): void;
    getSkillElements(skill: AnySkill): SkillProgressElems;
    createTooltip(element: HTMLElement, content: string): TippyTooltip;
    createTooltipHTML(skill: AnySkill): string;
}
declare type SkillProgressElems = {
    level: HTMLElement[];
    percent: HTMLElement[];
    xp: HTMLElement[];
    progress: HTMLElement[];
    tooltip: TippyTooltip[];
};
declare class SkillNav {
    game: Game;
    navs: Map<AnySkill, SkillNavElem[]>;
    active: Set<AnySkill>;
    glowing: Set<AnySkill>;
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
    setLocked(nav: SkillNavElem): void;
    setUnlocked(nav: SkillNavElem, levelCap: number): void;
    setLevel(nav: SkillNavElem, level: number, levelCap: number): void;
    getNavs(skill: AnySkill): SkillNavElem[];
}
declare type SkillNavElem = {
    item: SidebarItemWrapper;
    name: HTMLElement;
    levelAll: HTMLElement;
    level: HTMLElement;
    lock?: HTMLElement;
};
