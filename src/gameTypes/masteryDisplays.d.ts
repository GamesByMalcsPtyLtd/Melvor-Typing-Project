/** Contains Mastery Icon with Level, Progress bar for % progress to next level and experience progress */
declare class MasteryDisplayElement extends HTMLElement implements CustomElement {
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
declare class CompactMasteryDisplayElement extends HTMLElement implements CustomElement {
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
interface MasteryPoolRealmDisplay {
    progressContainer: HTMLDivElement;
    progress: HTMLDivElement;
    labelContainer: HTMLElement;
    realmImage: HTMLImageElement;
    realmTooltip: TippyTooltip;
    currentXP: HTMLSpanElement;
    totalXP: HTMLSpanElement;
    percentXP: HTMLSpanElement;
}
declare class MasteryPoolDisplayElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    poolIcon: HTMLImageElement;
    progressBarContainer: HTMLDivElement;
    labelContainer: HTMLDivElement;
    realmDisplays: MasteryPoolRealmDisplay[];
    realmDisplayMap: Map<Realm, MasteryPoolRealmDisplay>;
    poolTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>, realmsToShow?: Realm[]): void;
    updateProgress(skill: SkillWithMastery<MasteryAction, MasterySkillData>, realm: Realm): void;
    createRealmDisplay(): MasteryPoolRealmDisplay;
}
declare class SpendMasteryMenuItemElement extends HTMLElement implements CustomElement {
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
interface ClaimMasteryTokenButton {
    button: HTMLButtonElement;
    image: HTMLImageElement;
    quantity: HTMLSpanElement;
}
declare class SpendMasteryMenuElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    masteryItemContainer: HTMLDivElement;
    realmSelect: RealmTabSelectElement;
    poolDisplay: MasteryPoolDisplayElement;
    claimTokenContainer: HTMLDivElement;
    claimTokenButtons: ClaimMasteryTokenButton[];
    claimTokenButtonMap: Map<MasteryTokenItem, ClaimMasteryTokenButton>;
    setLevel1Button: HTMLButtonElement;
    setLevel5Button: HTMLButtonElement;
    setLevel10Button: HTMLButtonElement;
    filterContainer: HTMLDivElement;
    level99Filter: SettingsCheckboxElement;
    filterOptions: {
        container: HTMLDivElement;
        input: HTMLInputElement;
        label: HTMLLabelElement;
    }[];
    get curentSkill(): SkillWithMastery<MasteryAction, MasterySkillData, SkillWithMasteryEvents, MasterySkillModificationData> | undefined;
    get currentRealm(): Realm | undefined;
    _currentSkill?: SkillWithMastery<MasteryAction, MasterySkillData>;
    _currentRealm?: Realm;
    masteryItems: SpendMasteryMenuItemElement[];
    itemsByAction: Map<MasteryAction, SpendMasteryMenuItemElement>;
    levelUpAmount: number;
    constructor();
    connectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>, realm: Realm, game: Game): void;
    unsetSkill(): void;
    updateRealmUnlock(realm: Realm): void;
    createRealmOptions(skill: SkillWithMastery<MasteryAction, MasterySkillData>, game: Game): void;
    showMasteriesForRealm(skill: SkillWithMastery<MasteryAction, MasterySkillData>, realm: Realm, game: Game): void;
    shouldHideMastery(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): boolean;
    updateAllActions(): void;
    updateFilterOptions(namespaces: Set<string>): void;
    onFilterChange(): void;
    updateAction(skill: SkillWithMastery<MasteryAction, MasterySkillData>, action: MasteryAction): void;
    updateTokenQuantity(token: MasteryTokenItem, amount: number): void;
    changeLevelUpAmount(newAmount: number): void;
    createClaimTokenButton(): ClaimMasteryTokenButton;
    setClaimTokenButton(button: ClaimMasteryTokenButton, token: MasteryTokenItem, game: Game): void;
}
declare class MasterySkillOptionsElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    poolDisplay: MasteryPoolDisplayElement;
    viewCheckpointsButton: HTMLButtonElement;
    spendMasteryButton: HTMLButtonElement;
    masteryImage: HTMLImageElement;
    masteryTooltip?: TippyTooltip;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
}
declare class MasteryPoolBonusElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    percent: HTMLHeadingElement;
    description: HTMLDivElement;
    xpRequired: HTMLElement;
    constructor();
    connectedCallback(): void;
    setBonus(bonus: MasteryPoolBonus, skill: SkillWithMastery<MasteryAction, MasterySkillData>): void;
}
declare class MasteryPoolBonusesElement extends HTMLElement implements CustomElement {
    _content: DocumentFragment;
    realmSelect: RealmTabSelectElement;
    bonusContainer: HTMLDivElement;
    bonuses: MasteryPoolBonusElement[];
    constructor();
    connectedCallback(): void;
    setSkill(skill: SkillWithMastery<MasteryAction, MasterySkillData>, realm: Realm): void;
    setBonuses(skill: SkillWithMastery<MasteryAction, MasterySkillData>, realm: Realm): void;
}
