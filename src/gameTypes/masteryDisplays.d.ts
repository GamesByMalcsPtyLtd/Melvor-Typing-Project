/** Contains Mastery Icon with Level, Progress bar for % progress to next level and experience progress */
declare class MasteryDisplay extends HTMLElement {
    private _content;
    private icon;
    private level;
    private xpProgress;
    private progressBar;
    private iconTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setNoMastery(): void;
    setMastery(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): void;
    updateValues(progress: MasteryProgress): void;
}
/** Contains Mastery Icon with Level, and percentage to next mastery level */
declare class CompactMasteryDisplay extends HTMLElement {
    private _content;
    private icon;
    private level;
    private progressPercent;
    private iconTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setMastery(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): void;
    updateValues(progress: MasteryProgress): void;
}
declare class MasteryPoolDisplay extends HTMLElement {
    private _content;
    private poolIcon;
    private poolProgress;
    private currentXP;
    private totalXP;
    private percentXP;
    private poolTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
    updateProgress(skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
}
declare class SpendMasteryMenuItem extends HTMLElement {
    private _content;
    private actionImage;
    private level;
    private xpRequired;
    private progressBar;
    private levelUpButton;
    private actionTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setAction(action: MasteryAction): void;
    updateProgress(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction, spendAmount: number): void;
}
declare class SpendMasteryMenu extends HTMLElement {
    private _content;
    private masteryItemContainer;
    private poolDisplay;
    private claimTokenButton;
    private tokenImage;
    private tokenQuantity;
    private setLevel1Button;
    private setLevel5Button;
    private setLevel10Button;
    get curentSkill(): SkillWithMastery<MasteryAction, MasterySkillData> | undefined;
    get currentToken(): TokenItem | undefined;
    private _currentSkill?;
    private masteryItems;
    private itemsByAction;
    private levelUpAmount;
    constructor();
    connectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>, game: Game): void;
    unsetSkill(): void;
    updateAllActions(): void;
    toggleHideLevel99(): void;
    updateAction(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): void;
    updateTokenQuantity(amount: number): void;
    private changeLevelUpAmount;
}
declare class MasterySkillOptionsElement extends HTMLElement {
    private _content;
    private poolDisplay;
    private viewCheckpointsButton;
    private spendMasteryButton;
    private masteryImage;
    private masteryTooltip?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
}
