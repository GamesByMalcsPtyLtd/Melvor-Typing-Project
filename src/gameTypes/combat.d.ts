/** Global Game Object */
declare let game: Game;
declare let skillNav: SkillNav;
declare let skillProgressDisplay: SkillProgressDisplay;
declare let combatSkillProgressTable: CombatSkillProgressTableElement;
declare let spendMasteryMenu: SpendMasteryMenuElement;
declare let skillMilestoneDisplay: SkillMilestoneDisplayElement;
declare let skillTreeMenu: SkillTreeMenuElement;
/** Cache of elements required to render the enemy */
declare let enemyHTMLElements: EnemyRenderHTMLElements;
/** Cache of elements required to render the player */
declare let playerHTMLElements: PlayerHTMLElements;
declare let thievingMenu: ThievingMenu;
declare let firemakingMenu: FiremakingMenu;
declare let woodcuttingMenu: WoodcuttingMenu;
declare let eventManager: EventManager;
declare let herbloreArtisanMenu: HerbloreArtisanMenuElement;
declare let herbloreCategoryMenu: RealmedCategoryMenuElement;
declare const herbloreSelectionTabs: Map<SkillCategory, RecipeSelectionTabElement<HerbloreRecipe, HerbloreRecipeOptionElement>>;
declare let potionSelectMenu: PotionSelectMenuElement;
declare let smithingArtisanMenu: ArtisanMenuElement;
declare const smithingSelectionTabs: Map<SkillCategory, RecipeSelectionTabElement<SmithingRecipe, SmithingRecipeOptionElement>>;
declare let smithingCategoryMenu: RealmedCategoryMenuElement;
declare let altMagicMenu: AltMagicMenuElement;
declare let altMagicItemMenu: AltMagicItemMenuElement;
declare let altMagicSelection: RecipeSelectionTabElement<AltMagicSpell, AltMagicSpellOptionElement>;
declare let runecraftingCategoryMenu: RealmedCategoryMenuElement;
declare let runecraftingArtisanMenu: ArtisanMenuElement;
declare const runecraftingSelectionTabs: Map<SkillCategory, RecipeSelectionTabElement<RunecraftingRecipe, RunecraftingRecipeOptionElement>>;
declare let craftingCategoryMenu: RealmedCategoryMenuElement;
declare let craftingArtisanMenu: ArtisanMenuElement;
declare const craftingSelectionTabs: Map<SkillCategory, RecipeSelectionTabElement<CraftingRecipe, CraftingRecipeOptionElement>>;
declare let fletchingCategoryMenu: RealmedCategoryMenuElement;
declare let fletchingArtisanMenu: ArtisanMenuElement;
declare const fletchingSelectionTabs: Map<SkillCategory, RecipeSelectionTabElement<FletchingRecipe, FletchingRecipeOptionElement>>;
declare let summoningArtisanMenu: ArtisanMenuElement;
declare const summoningSelectionTabs: Map<SkillCategory, SummoningSelectionTabElement>;
declare let summoningCategoryMenu: RealmedCategoryMenuElement;
declare let summoningMarkMenu: SummoningMarkMenuElement;
declare let summoningSearchMenu: SynergySearchMenuElement;
declare const fishingAreaMenus: Map<FishingArea, FishingAreaMenuElement>;
declare const cookingMenus: Map<CookingCategory, CookingMenuElement>;
declare const agilityObstacleMenus: BuiltAgilityObstacleElement[];
declare const agilityPillarMenus: PassivePillarMenuElement[];
declare const agilityObstacleSelectMenus: AgilityObstacleSelectionElement[];
declare let agilityBreakdownMenu: AgilityBreakdownElement;
declare let astrologyMenus: {
    constellations: Map<AstrologyRecipe, ConstellationMenuElement>;
    locked: LockedConstellationMenuElement;
    infoPanel: AstrologyInformationPanelElement;
    explorePanel: AstrologyExplorationPanelElement;
};
declare let farmingMenus: {
    categoryOptions: FarmingCategoryOptionsElement;
    categoryButtons: Map<FarmingCategory, FarmingCategoryButtonElement>;
    plotContainer: HTMLDivElement;
    plots: FarmingPlotElement[];
    plotMap: Map<FarmingPlot, FarmingPlotElement>;
    lockedPlotMap: Map<FarmingPlot, LockedFarmingPlotElement>;
    lockedPlots: LockedFarmingPlotElement[];
    seedSelect: FarmingSeedSelectElement;
    compostIcons: ItemCurrentIconElement[];
};
declare let townshipUI: TownshipUI;
declare let archaeologyMenus: {
    digSites: Map<ArchaeologyDigSite, ArchaeologyDigSiteContainerElement>;
};
declare let archaeologyUI: ArchaeologyUI;
declare let ancientRelicsMenu: AncientRelicsMenuElement;
declare let bankTabMenu: BankTabMenuElement;
declare let bankOptionsMenu: BankOptionsMenuElement;
declare let bankMoveModeMenu: BankMoveModeMenuElement;
declare let bankSellModeMenu: BankSellModeMenuElement;
declare let bankSideBarMenu: BankSidebarMenuElement;
declare let bankItemSettingsMenu: BankItemSettingsMenuElement;
declare let itemUpgradeMenu: ItemUpgradeMenuElement;
declare let cartographyMap: WorldMapDisplayElement;
declare let cartographyMapCreateMenu: CreateMapMenuElement;
declare let cartographyMapMasteryMenu: MapMasteryMenuElement;
declare let browseCorruptionMenu: CorruptionMenuElement;
declare let levelCapIncreaseModal: SkillCapIncreaseModalElement;
/** Monster Stats Component used in the view stats modal */
declare let monsterStatsModal: MonsterStatsElement;
declare const COMBAT_LEVEL_KEYS: CombatLevelKey[];
declare let shopMenu: ShopMenu;
declare let tutorialMenus: {
    headerStage: TutorialStageDisplayElement;
    progress: TutorialProgressDisplayElement;
    stageContainer: HTMLDivElement;
    stages: TutorialStageDisplayElement[];
};
declare let combatMenus: CombatMenus;
interface CombatMenus {
    progressBars: ProgressBars;
    playerEffectRenderer: EffectRenderer;
    enemyEffectRenderer: EffectRenderer;
    playerSplashManager: SplashManager;
    enemySplashManager: SplashManager;
    spells: SpellbookMenuElement;
    prayer: PrayerBookMenuElement;
    runes: RuneMenuElement;
    equipSets: EquipmentSetMenu[];
    combatFood: FoodSelectMenuElement;
    thievingFood: FoodSelectMenuElement;
    equipment: EquipmentGridElement[];
    eventMenu: CombatEventMenuElement;
    loot: CombatLootMenuElement;
    slayerTask: SlayerTaskMenuElement;
    runButton: HTMLButtonElement;
    minibarRunButton: HTMLButtonElement;
    minibarEatButton: HTMLButtonElement;
    viewDropsButton: HTMLButtonElement;
    attackMonsterButton: HTMLButtonElement;
    locationElements: {
        image: HTMLImageElement;
        name: HTMLSpanElement;
        floorCount: HTMLSpanElement;
        count: HTMLSpanElement;
        areaEffect: HTMLSpanElement;
    };
    equipmentMenuIcons: HTMLImageElement[];
    corruptionSettings: HTMLDivElement;
    menuTabs: HTMLImageElement[];
    menuPanels: HTMLElement[];
    enemyOffensiveStats: OffensiveStatsElement;
    enemyDefensiveStats: DefensiveStatsElement;
    playerStats: PlayerStatsElement;
    enemyPassives: EnemyPassivesElement;
    enemySpecialAttacks: EnemySpecialAttacksElement;
    enemyLevels: CombatLevelsElement;
}
interface ProgressBars {
    playerAttack: ProgressBarElement;
    playerAttackMinibar: ProgressBarElement;
    playerSummon: ProgressBarElement;
    playerSummonMinibar: ProgressBarElement;
    enemyAttack: ProgressBarElement;
    enemyAttackMinibar: ProgressBarElement;
}
declare const combatAreaMenus: CombatAreaMenuManager;
declare const resistanceMenus: ResistanceMenus;
interface ResistanceMenus {
    viewItemStats: Map<DamageType, CharacterResistanceElement>;
    viewEquipmentStats: Map<DamageType, CharacterResistanceElement>;
    itemUpgrade: Map<DamageType, CharacterResistanceElement>;
}
/** Constructs game object, sets global callbacks + references derived from it */
declare function initGameClass(): void;
/** Constructs menus after game data registration */
declare function initMenus(): void;
