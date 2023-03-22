// Interface for defining the structure of game data.
// TODO: Write a JSON Schema that reflects this
interface GameDataPackage {
  $schema: string;
  namespace?: string;
  data?: GameData;
  modifications?: GameDataModifications;
  /** Indicates data that used to be part of this package that must be migrated to a new namespace on load */
  namespaceChange?: GameDataNamespaceChange;
}

interface GameData {
  gamemodes?: GamemodeData[];
  itemEffects?: ItemEffectData[];
  items?: AnyItemData[];
  attackStyles?: AttackStyleData[];
  stackingEffects?: StackingEffectData[];
  attacks?: AttackData[];
  combatPassives?: CombatPassiveData[];
  monsters?: MonsterData[];
  combatAreas?: CombatAreaData[];
  combatAreaDisplayOrder?: InsertOrder[];
  slayerAreas?: SlayerAreaData[];
  slayerAreaDisplayOrder?: InsertOrder[];
  dungeons?: DungeonData[];
  dungeonDisplayOrder?: InsertOrder[];
  combatEvents?: CombatEventData[];
  prayers?: PrayerData[];
  standardSpells?: StandardSpellData[];
  curseSpells?: CurseSpellData[];
  auroraSpells?: AuroraSpellData[];
  ancientSpells?: AncientSpellData[];
  archaicSpells?: ArchaicSpellData[];
  pets?: PetData[];
  shopCategories?: ShopCategoryData[];
  shopCategoryOrder?: InsertOrder[];
  shopPurchases?: ShopPurchaseData[];
  shopDisplayOrder?: InsertOrder[];
  shopUpgradeChains?: ShopUpgradeChainData[];
  itemUpgrades?: ItemUpgradeData[];
  itemSynergies?: ItemSynergyData[];
  golbinRaid?: GolbinRaidData;
  /** Register stream achievements. Should not be modded */
  steamAchievements?: SteamAchievementData[];
  /** Register stages for the tutorial. Should not be modded. */
  tutorialStages?: TutorialStageData[];
  /** Register order of stages for the tutorial. Should not be modded */
  tutorialStageOrder?: InsertOrder[];
  skillData?: ToSkillData<keyof SkillIDDataMap>[];
  /** Register drops for the random gems table */
  randomGems?: DropTableData[];
  /** Register drops for the random Superior gems table */
  randomSuperiorGems?: DropTableData[];
  /** Register monsters for the Into the Mist Monster List */
  itmMonsters?: string[];
  /** Register monsters for the Random Spider Lair Monster list */
  spiderLairMonsters?: string[];
  pages?: PageData[];
  bankSortOrder?: InsertOrder[];
  lore?: LoreBookData[];
}

interface GameDataModifications {
  combatAreas?: CombatAreaModificationData[];
  cookingCategories?: CookingCategoryModificationData[];
  dungeons?: DungeonModificationData[];
  items?: AnyItemModificationData[];
  fletchingRecipes?: FletchingRecipeModificationData[];
  monsters?: MonsterModificationData[];
  shopPurchases?: ShopPurchaseModificationData[];
  shopUpgradeChains?: ShopUpgradeChainModificationData[];
  slayerAreas?: SlayerAreaModificationData[];
}

interface GameDataNamespaceChange {
  items?: ItemNamespaceChangeData[];
}
interface NamespaceChangeData {
  newNamespace: string;
  ids: string[];
}

interface ItemNamespaceChangeData extends NamespaceChangeData {
  itemType: 'Item'|'Equipment'|'Weapon'|'Food'|'Bone'|'Potion'|'Readable'|'Openable'|'Token'|'Compost';
}

interface SkillIDDataMap {
  'melvorD:Attack': BaseSkillData;
  'melvorD:Strength': BaseSkillData;
  'melvorD:Defence': BaseSkillData;
  'melvorD:Hitpoints': BaseSkillData;
  'melvorD:Ranged': BaseSkillData;
  'melvorD:Magic': MagicSkillData;
  'melvorD:Prayer': BaseSkillData;
  'melvorD:Slayer': BaseSkillData;
  'melvorD:Woodcutting': WoodcuttingSkillData;
  'melvorD:Fishing': FishingSkillData;
  'melvorD:Firemaking': FiremakingSkillData;
  'melvorD:Cooking': CookingSkillData;
  'melvorD:Mining': MiningSkillData;
  'melvorD:Smithing': SmithingSkillData;
  'melvorD:Thieving': ThievingSkillData;
  'melvorD:Farming': FarmingSkillData;
  'melvorD:Fletching': FletchingSkillData;
  'melvorD:Crafting': CraftingSkillData;
  'melvorD:Runecrafting': RunecraftingSkillData;
  'melvorD:Herblore': HerbloreSkillData;
  'melvorD:Agility': AgilitySkillData;
  'melvorD:Summoning': SummoningSkillData;
  'melvorD:Astrology': AstrologySkillData;
  'melvorD:Township': TownshipSkillData;
}
type ToSkillData<Type> = Type extends keyof SkillIDDataMap ? {
  skillID: Type,
  data: SkillIDDataMap[Type],
} : never;

interface NumericIDMap {
  skills: NumberDictionary<string>; // Done
  attackStyles: NumberDictionary<string>;
  stackingEffects: NumberDictionary<string>; // Done
  attacks: NumberDictionary<string>; // Done
  combatPassives: NumberDictionary<string>;
  itemEffects: NumberDictionary<string>;
  items: NumberDictionary<string>; // Done
  monsters: NumberDictionary<string>; // Done
  combatAreas: NumberDictionary<string>; // Done
  slayerAreas: NumberDictionary<string>; // Done
  dungeons: NumberDictionary<string>; // Done
  combatEvents: NumberDictionary<string>;
  pets: NumberDictionary<string>; // Done
  shopPurchase: StringDictionary<string>; // Done
  // Skill Specific Data
  magicStandardSpells: NumberDictionary<string>; // Done
  magicCurses: NumberDictionary<string>; // Done
  magicAuroras: NumberDictionary<string>; // Done
  magicAncients: NumberDictionary<string>; // Done
  magicArchaics: NumberDictionary<string>; // Done
  magicAltSpells: NumberDictionary<string>; // Done
  prayers: NumberDictionary<string>; // Done
  woodcuttingTrees: NumberDictionary<string>; // Done
  fishingFish: NumberDictionary<string>; // Done
  fishingAreas: NumberDictionary<string>; // Done
  firemakingRecipes: NumberDictionary<string>; // Done
  cookingCategories: NumberDictionary<string>; // Done
  cookingRecipes: NumberDictionary<string>; // Done
  miningOres: NumberDictionary<string>; // Done
  smithingCategories: NumberDictionary<string>; // Done
  smithingRecipes: NumberDictionary<string>; // Done
  /** Maps offline.action to recipe ID */
  smithingOldOffline: NumberDictionary<string>;
  thievingNPCs: NumberDictionary<string>; // Done
  thievingAreas: NumberDictionary<string>; // Done
  farmingRecipes: NumberDictionary<string>; // Done
  farmingPlots: StringDictionary<string>; // Done
  farmingSeedToRecipe: NumberDictionary<string>;
  fletchingCategories: NumberDictionary<string>; // Done
  fletchingRecipes: NumberDictionary<string>; // Done
  fletchingOldOffline: NumberDictionary<string>;
  craftingCategories: NumberDictionary<string>; // Done
  craftingRecipes: NumberDictionary<string>; // Done
  runecraftingCategories: NumberDictionary<string>; // Done
  runecraftingRecipes: NumberDictionary<string>; // Done
  /** Maps offline.action to runecrafting recipe ID */
  runecraftingOldOffline: NumberDictionary<string>;
  herbloreCategories: NumberDictionary<string>; // Done
  herbloreRecipes: NumberDictionary<string>; // Done
  agilityObstacles: NumberDictionary<string>; // Done
  agilityPillars: NumberDictionary<string>; // Done
  agilityElitePillars: NumberDictionary<string>; // Done
  summoningMarks: NumberDictionary<string>; // Done
  summoningCategories: NumberDictionary<string>; // Done
  astrologyConstellations: NumberDictionary<string>; // Done
  gameModes: NumberDictionary<string>;
  skillGloves: NumberDictionary<string>;
  activeActions: NumberDictionary<string>;
  pages: NumberDictionary<string>;
  pageToAction: NumberDictionary<string>;
  offlineSkillToAction: NumberDictionary<string>;
  // Start of Township Mapping
  townshipBiomes: NumberDictionary<string>; // Done
  townshipBuildings: NumberDictionary<string>; // Done
  townshipWorships: NumberDictionary<string>; // Done
  townshipMaps: NumberDictionary<string>; // Done
  townshipJobs: NumberDictionary<string>; // Done
  townshipJobKeys: StringDictionary<string>;
  townshipResources: NumberDictionary<string>;
  townshipResourceDecode: NumberDictionary<string>;
  townshipJobDecode: NumberDictionary<string>;
  loreBooks: NumberDictionary<string>;
  tutorialStages: NumberDictionary<string>;
  itemStatsData: Record<OldItemStatType, { stats: ItemStats[]; items: number[]; removed: NumberDictionary<number[]> }>;
}