/** Global Game Object */
declare let game: Game;
declare let showCombatArea: (areaType: 'Combat' | 'Slayer' | 'Dungeon') => void;
declare let skillNav: SkillNav;
declare let skillProgressDisplay: SkillProgressDisplay;
declare let spendMasteryMenu: SpendMasteryMenu;
/** Cache of elements required to render the enemy */
declare let enemyHTMLElements: EnemyRenderHTMLElements;
/** Cache of elements required to render the player */
declare let playerHTMLElements: PlayerHTMLElements;
declare let thievingMenu: ThievingMenu;
declare let firemakingMenu: FiremakingMenu;
declare let woodcuttingMenu: WoodcuttingMenu;
declare let eventManager: EventManager;
declare let herbloreArtisanMenu: HerbloreArtisanMenu;
declare let herbloreCategoryMenu: CategoryMenu<SkillCategory>;
declare const herbloreSelectionTabs: Map<SkillCategory, HerbloreSelectionTab>;
declare let potionSelectMenu: PotionSelectMenu;
declare let smithingArtisanMenu: ArtisanMenu<AnyItem>;
declare const smithingSelectionTabs: Map<SkillCategory, SmithingSelectionTab>;
declare let smithingCategoryMenu: CategoryMenu<SkillCategory>;
declare let altMagicMenu: AltMagicMenu;
declare let altMagicItemMenu: AltMagicItemMenu;
declare let altMagicSelection: AltMagicSelectionTab;
declare let runecraftingCategoryMenu: CategoryMenu<SkillCategory>;
declare let runecraftingArtisanMenu: ArtisanMenu<AnyItem>;
declare const runecraftingSelectionTabs: Map<SkillCategory, RunecraftingSelectionTab>;
declare let craftingCategoryMenu: CategoryMenu<SkillCategory>;
declare let craftingArtisanMenu: ArtisanMenu<AnyItem>;
declare const craftingSelectionTabs: Map<SkillCategory, CraftingSelectionTab>;
declare let fletchingCategoryMenu: CategoryMenu<SkillCategory>;
declare let fletchingArtisanMenu: ArtisanMenu<AnyItem>;
declare const fletchingSelectionTabs: Map<SkillCategory, FletchingSelectionTab>;
declare let summoningArtisanMenu: ArtisanMenu<AnyItem>;
declare const summoningSelectionTabs: Map<SkillCategory, SummoningSelectionTab>;
declare let summoningCategoryMenu: CategoryMenu<SkillCategory>;
declare const markDiscoveryMenus: Map<SummoningRecipe, SummoningMarkDiscovery>;
declare let summoningSearchMenu: SynergySearchMenu;
declare const fishingAreaMenus: Map<FishingArea, FishingAreaMenu>;
declare const cookingMenus: Map<CookingCategory, CookingMenu>;
declare const agilityObstacleMenus: BuiltAgilityObstacle[];
declare let agilityPassivePillarMenu: PassivePillarMenu;
declare let agilityElitePassivePillarMenu: ElitePassivePillarMenu;
declare const agilityObstacleSelectMenus: AgilityObstacleSelection[];
declare let astrologyMenus: {
    constellations: Map<AstrologyRecipe, ConstellationMenu>;
    infoPanel: AstrologyInformationPanel;
    explorePanel: AstrologyExplorationPanel;
};
declare let farmingMenus: {
    categoryOptions: FarmingCategoryOptionsElement;
    categoryButtons: Map<FarmingCategory, FarmingCategoryButtonElement>;
    plotContainer: HTMLDivElement;
    plots: FarmingPlotElement[];
    plotMap: Map<FarmingPlot, FarmingPlotElement>;
    lockedPlots: LockedFarmingPlotElement[];
    seedSelect: FarmingSeedSelectElement;
    compostIcons: ItemCurrentIcon[];
};
declare let townshipUI: TownshipUI;
declare let bankTabMenu: BankTabMenu;
declare let bankOptionsMenu: BankOptionsMenu;
declare let bankMoveModeMenu: BankMoveModeMenu;
declare let bankSellModeMenu: BankSellModeMenu;
declare let bankSideBarMenu: BankSideBarMenu;
declare let bankItemSettingsMenu: BankItemSettingsMenu;
declare const combatSkills: (keyof CombatLevels)[];
declare let shopMenu: ShopMenu;
declare const synergyElements: SynergyElements;
declare let tutorialMenus: {
    headerStage: TutorialStageDisplayElement;
    progress: TutorialProgressDisplayElement;
    stageContainer: HTMLDivElement;
    stages: TutorialStageDisplayElement[];
};
interface SynergyElements {
    icons: HTMLImageElement[];
    tooltips: TippyTooltip[];
}
declare let combatMenus: CombatMenus;
interface CombatMenus {
    progressBars: ProgressBars;
    playerEffectRenderer: EffectRenderer;
    enemyEffectRenderer: EffectRenderer;
    playerSplashManager: SplashManager;
    enemySplashManager: SplashManager;
    spells: SpellMenus;
    prayer: PrayerMenu;
    runes: RuneMenu;
    equipSets: EquipmentSetMenu[];
    combatFood: FoodMenu;
    thievingFood: FoodMenu;
    enemyAttackPassive: EnemyAttackPassiveMenu;
    eventMenu: CombatEventMenu;
    loot: CombatLootMenuElement;
    slayerTask: SlayerTaskMenuElement;
    runButton: HTMLButtonElement;
    minibarRunButton: HTMLButtonElement;
    minibarEatButton: HTMLButtonElement;
    viewDropsButton: HTMLButtonElement;
    locationElements: {
        image: HTMLImageElement;
        name: HTMLSpanElement;
        floorCount: HTMLSpanElement;
        count: HTMLSpanElement;
        areaEffect: HTMLSpanElement;
    };
    equipmentMenuIcons: HTMLImageElement[];
}
interface SpellMenus {
    standard: StandardSpellMenu;
    curse: CurseSpellMenu;
    aurora: AuroraSpellMenu;
    ancient: AncientSpellMenu;
    archaic: ArchaicSpellMenu;
}
interface ProgressBars {
    playerAttack: ProgressBar;
    playerAttackMinibar: ProgressBar;
    playerSummon: ProgressBar;
    enemyAttack: ProgressBar;
    enemyAttackMinibar: ProgressBar;
}
declare let areaMenus: AreaMenus;
interface AreaMenus {
    combat: CombatAreaMenu;
    slayer: CombatAreaMenu;
    dungeon: CombatAreaMenu;
}
/** Constructs game object, sets global callbacks + references derived from it */
declare function initGameClass(): void;
/** Constructs menus after game data registration */
declare function initMenus(): void;
