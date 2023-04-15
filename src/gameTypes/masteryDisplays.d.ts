/** Contains Mastery Icon with Level, Progress bar for % progress to next level and experience progress */
declare class MasteryDisplay extends HTMLElement {
    _content: DocumentFragment;
    icon: HTMLImageElement;
    level: HTMLSpanElement;
    xpProgress: HTMLElement;
    progressBar: HTMLDivElement;
    iconTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setNoMastery(): void;
    setMastery(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): void;
    updateValues(progress: MasteryProgress): void;
}
/** Contains Mastery Icon with Level, and percentage to next mastery level */
declare class CompactMasteryDisplay extends HTMLElement {
    _content: DocumentFragment;
    icon: HTMLImageElement;
    level: HTMLSpanElement;
    progressPercent: HTMLElement;
    iconTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setMastery(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): void;
    updateValues(progress: MasteryProgress): void;
}
declare class MasteryPoolDisplay extends HTMLElement {
    _content: DocumentFragment;
    poolIcon: HTMLImageElement;
    poolProgress: HTMLDivElement;
    currentXP: HTMLSpanElement;
    totalXP: HTMLSpanElement;
    percentXP: HTMLSpanElement;
    poolTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
    updateProgress(skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
}
declare class SpendMasteryMenuItem extends HTMLElement {
    _content: DocumentFragment;
    actionImage: HTMLImageElement;
    level: HTMLElement;
    xpRequired: HTMLSpanElement;
    progressBar: HTMLDivElement;
    levelUpButton: HTMLButtonElement;
    masteryName: HTMLSpanElement;
    actionTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setAction(action: MasteryAction): void;
    updateProgress(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction, spendAmount: number): void;
}
declare class SpendMasteryMenu extends HTMLElement {
    _content: DocumentFragment;
    masteryItemContainer: HTMLDivElement;
    poolDisplay: MasteryPoolDisplay;
    claimTokenButton: HTMLButtonElement;
    tokenImage: HTMLImageElement;
    tokenQuantity: HTMLSpanElement;
    setLevel1Button: HTMLButtonElement;
    setLevel5Button: HTMLButtonElement;
    setLevel10Button: HTMLButtonElement;
    get curentSkill(): SkillWithMastery<MasteryAction, MasterySkillData> | undefined;
    get currentToken(): TokenItem | undefined;
    _currentSkill?: SkillWithMastery<MasteryAction, MasterySkillData>;
    masteryItems: SpendMasteryMenuItem[];
    itemsByAction: Map<MasteryAction, SpendMasteryMenuItem>;
    levelUpAmount: number;
    constructor();
    connectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>, game: Game): void;
    unsetSkill(): void;
    updateAllActions(): void;
    toggleHideLevel99(): void;
    updateAction(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): void;
    updateTokenQuantity(amount: number): void;
    changeLevelUpAmount(newAmount: number): void;
}
declare class MasterySkillOptionsElement extends HTMLElement {
    _content: DocumentFragment;
    poolDisplay: MasteryPoolDisplay;
    viewCheckpointsButton: HTMLButtonElement;
    spendMasteryButton: HTMLButtonElement;
    masteryImage: HTMLImageElement;
    masteryTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
}
