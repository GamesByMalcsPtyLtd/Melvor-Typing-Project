declare type ValFcnForInput = (() => string) & ((value: string) => void);
interface JQueryStatic {
    (selector: '#username-set-main'): JQueryInputElement;
    (selector: '#username-set'): JQueryInputElement;
    (selector: '#searchTextbox'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount-1'): JQueryInputElement;
    (selector: '#import-save-character-selection'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount-2'): JQueryInputElement;
    (selector: "#searchTextbox-items"): JQueryInputElement;
    (selector: "#import-save-link-character-selection"): JQueryInputElement;
}
interface JQueryInputElement extends Omit<JQuery<HTMLElement>, 'val'> {
    val: ValFcnForInput;
}
interface Document {
    getElementById(elementID: 'username-change'): HTMLInputElement;
    getElementById(elementID: 'game-broke-error-msg'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveField'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveField2'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveFieldUpdate'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveFieldUpdate2'): HTMLTextAreaElement;
    getElementById(elementID: 'importSaveField'): HTMLTextAreaElement;
}
interface ObjectConstructor {
    keys(obj: Partial<StandardModifierObject<number>>): StandardModifierKeys[];
    keys(obj: OldPlayerModifierData): ModifierKeys[];
    keys(obj: OldSettingsData): (keyof OldSettingsData)[];
    keys(obj: LanguageData): LanguageCategory[];
    keys(obj: LangJsonData): Exclude<SupportedLanguage,"lemon">[];
    keys(obj: NewSaveGame): NewSaveKey[];
    entries(obj: PlayerModifierData): ModifierEntry<SkillModifierData[],number>[];
    entries(obj: PlayerModifierObject): ModifierEntry<SkillModifier[],number>[];
    entries(obj: OldPlayerModifierData): ModifierDataEntry[];
    entries(obj: ModifierObject<SkillModifierTemplate, StandardModifierTemplate>): ModifierEntry<SkillModifierTemplate, StandardModifierTemplate>[];
    entries(obj: CombatModifierData): [keyof CombatModifierObject<number>, number][];
    entries<T>(obj: EquipmentObject<T>): [keyof EquipmentObject<T>, T][];
    entries<T>(obj: NumberDictionary<T>): [string, T][];
}
interface HTMLElementTagNameMap {
  "lang-string": LangString;
  "stat-table": StatsTable;
  "combat-event-menu": CombatEventMenu;
  "mining-rock": MiningRockMenu;
  "inline-requirement": InlineRequirement;
  'constellation-menu': ConstellationMenu;
  "astrology-modifier-display": AstrologyModifierDisplay;
  'astrology-exploration-panel': AstrologyExplorationPanel;
  'astrology-information-panel': AstrologyInformationPanel;
  'bank-tab-menu': BankTabMenu;
  'bank-item-icon': BankItemIcon;
  'bank-options-menu': BankOptionsMenu;
  'bank-tab-dropdown-menu': BankTabDropdownMenu;
  'bank-move-mode-menu': BankMoveModeMenu;
  'bank-sell-mode-menu': BankSellModeMenu;
  'bank-selected-item-menu': BankSelectedItemMenu;
  'bank-item-stats-menu': BankItemStatsMenu;
  'bank-item-settings-menu': BankItemSettingsMenu;
  'bank-sidebar-menu': BankSideBarMenu;
  'bank-minibar-toggle': BankMinibarToggle;
  'mastery-display': MasteryDisplay;
  'compact-mastery-display': CompactMasteryDisplay;
  'potion-select-menu-item': PotionSelectMenuItem;
  'potion-select-menu':PotionSelectMenu;
  'item-charge-display': ItemChargeDisplay;
  'mastery-pool-display': MasteryPoolDisplay;
  'spend-mastery-menu-item': SpendMasteryMenuItem;
  'spend-mastery-menu': SpendMasteryMenu;
  'settings-checkbox': SettingsCheckboxElement;
  'settings-switch': SettingsSwitchElement;
  'settings-dropdown': SettingsDropdownElement;
  'upgrade-chain-display': UpgradeChainDisplayElement;
  'combat-loot-menu': CombatLootMenuElement;
  'slayer-task-menu': SlayerTaskMenuElement;
  'farming-category-button': FarmingCategoryButtonElement;
  'farming-category-options': FarmingCategoryOptionsElement;
  'farming-plot': FarmingPlotElement;
  'locked-farming-plot': LockedFarmingPlotElement;
  'farming-seed-select': FarmingSeedSelectElement;
  'mastery-skill-options': MasterySkillOptionsElement;
  'tutorial-stage-display': TutorialStageDisplayElement;
  'character-display': CharacterDisplayElement;
  'save-slot-display': SaveSlotDisplayElement;
  'gamemode-selection': GamemodeSelectionElement;
  'township-resource-display': TownshipResourceDisplayElement;
  'township-town-biome-select': TownshipTownBiomeSelectElement
  'township-building-summary': TownshipBuildingSummaryElement;
  'building-in-town': BuildingInTownElement;
}