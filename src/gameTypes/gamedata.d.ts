// Interface for defining the structure of game data.
interface GameDataPackage {
  $schema: string;
  namespace?: string;
  data?: GameData;
  modifications?: GameDataModifications;
  /** Indicates data that used to be part of this package that must be migrated to a new namespace on load */
  namespaceChange?: GameDataNamespaceChange;
  /** Data/Modifications that will only be registered, if the namespace specified is also registered */
  dependentData?: {
    namespace: string,
    data?: GameData,
    modifications?: GameDataModifications;
  }[];
}

interface GameData {
  skillLevelCapIncreases?: SkillLevelCapIncreaseData[];
  gamemodes?: GamemodeData[];
  items?: AnyItemData[];
  attackStyles?: AttackStyleData[];
  combatEffectGroups?: CombatEffectGroupData[];
  combatEffectTemplates?: CombatEffectTemplateData[];
  combatEffects?: AnyCombatEffectData[];
  combatEffectTables?: CombatEffectTableData[];
  attacks?: AttackData[];
  combatPassives?: CombatPassiveData[];
  monsters?: MonsterData[];
  combatAreaCategories?: CombatAreaCategoryData[];
  combatAreaCategoryOrder?: InsertOrder[];
  combatAreas?: CombatAreaData[];
  /** @deprecated */
  combatAreaDisplayOrder?: InsertOrder[];
  slayerAreas?: SlayerAreaData[];
  /** @deprecated */
  slayerAreaDisplayOrder?: InsertOrder[];
  dungeons?: DungeonData[];
  /** @deprecated */
  dungeonDisplayOrder?: InsertOrder[];
  abyssDepths?: DungeonData[];
  strongholds?: StrongholdData[];
  combatEvents?: CombatEventData[];
  slayerTaskCategories?: SlayerTaskCategoryData[];
  prayers?: PrayerData[];
  attackSpellbooks?: AttackSpellbookData[];
  attackSpells?: AttackSpellData[];
  /** @deprecated Use attackSpells instead */
  standardSpells?: OldAttackSpellData[];
  /** @deprecated Use attackSpells instead */
  ancientSpells?: OldAttackSpellData[];
  /** @deprecated Use attackSpells instead */
  archaicSpells?: OldAttackSpellData[];
  curseSpells?: CurseSpellData[];
  auroraSpells?: AuroraSpellData[];
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
  skillData?: AnySkillData[];
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
  ancientRelics?: AncientRelicData[];
  realms?: RealmData[];
  combatTriangleSets?: CombatTriangleSetData[];
  equipmentSlots?: EquipmentSlotData[];
  /** Register drops for the random Abyssal gems table */
  randomAbyssalGems?: DropTableData[];
  damageTypes?: DamageTypeData[];
  /** Modifiers defined by this data package */
  modifiers?: ModifierData[];
  /** Register drops for the random Fragments table */
  randomFragments?: DropTableData[];
  /** Register drops for the random Firemaking Oils table */
  randomFiremakingOils?: DropTableData[];
  skillTreesDisplayOrder?: InsertOrder[];
  ancientRelicsDisplayOrder?: InsertOrder[];
}

interface GameDataModifications {
  gamemodes?: GamemodeModificationData[];
  combatAreas?: CombatAreaModificationData[];
  cookingCategories?: CookingCategoryModificationData[];
  combatAreaCategories?: CombatAreaCategoryModificationData[];
  dungeons?: DungeonModificationData[];
  abyssDepths?: DungeonModificationData[];
  items?: AnyItemModificationData[];
  fletchingRecipes?: FletchingRecipeModificationData[];
  monsters?: MonsterModificationData[];
  shopPurchases?: ShopPurchaseModificationData[];
  shopUpgradeChains?: ShopUpgradeChainModificationData[];
  slayerAreas?: SlayerAreaModificationData[];
  pages?: PageModificationData[];
  equipmentSlots?: EquipmentSlotModificationData[];
  damageTypes?: DamageTypeModificationData[];
  modifiers?: ModifierModificationData[];
  skillData?: AnySkillModificationData[];
  skillLevelCapIncreases?: SkillLevelCapIncreaseModificationData[];
}

interface GameDataNamespaceChange {
  items?: ItemNamespaceChangeData[];
}
interface NamespaceChangeData {
  newNamespace: string;
  ids: string[];
}

interface ItemNamespaceChangeData extends NamespaceChangeData {
  itemType: 'Item'|'Equipment'|'Weapon'|'Food'|'Bone'|'Potion'|'Readable'|'Openable'|'Token'|'Compost'|'Soul'|'Rune'|'FiremakingOil';
}

interface PackageSkillData<SkillID extends string, T> {
  skillID: SkillID;
  data: T;
}

type AnySkillData =
| PackageSkillData<'melvorD:Attack',BaseSkillData>
| PackageSkillData<'melvorD:Strength',BaseSkillData>
| PackageSkillData<'melvorD:Defence',BaseSkillData>
| PackageSkillData<'melvorD:Hitpoints',BaseSkillData>
| PackageSkillData<'melvorD:Ranged',BaseSkillData>
| PackageSkillData<'melvorD:Magic',MagicSkillData>
| PackageSkillData<'melvorD:Prayer',BaseSkillData>
| PackageSkillData<'melvorD:Slayer',BaseSkillData>
| PackageSkillData<'melvorD:Woodcutting',WoodcuttingSkillData>
| PackageSkillData<'melvorD:Fishing',FishingSkillData>
| PackageSkillData<'melvorD:Firemaking',FiremakingSkillData>
| PackageSkillData<'melvorD:Cooking',CookingSkillData>
| PackageSkillData<'melvorD:Mining',MiningSkillData>
| PackageSkillData<'melvorD:Smithing',SmithingSkillData>
| PackageSkillData<'melvorD:Thieving',ThievingSkillData>
| PackageSkillData<'melvorD:Farming',FarmingSkillData>
| PackageSkillData<'melvorD:Fletching',FletchingSkillData>
| PackageSkillData<'melvorD:Crafting',CraftingSkillData>
| PackageSkillData<'melvorD:Runecrafting',RunecraftingSkillData>
| PackageSkillData<'melvorD:Herblore',HerbloreSkillData>
| PackageSkillData<'melvorD:Agility',AgilitySkillData>
| PackageSkillData<'melvorD:Summoning',SummoningSkillData>
| PackageSkillData<'melvorD:Astrology',AstrologySkillData>
| PackageSkillData<'melvorD:Township',TownshipSkillData>
| PackageSkillData<'melvorAoD:Cartography',CartographySkillData>
| PackageSkillData<'melvorAoD:Archaeology',ArchaeologySkillData>
| PackageSkillData<'melvorItA:Harvesting',HarvestingSkillData>
| PackageSkillData<'melvorItA:Corruption',CorruptionSkillData>;

type AnySkillModificationData = 
| PackageSkillData<'melvorD:Attack',BaseSkillModificationData>
| PackageSkillData<'melvorD:Strength',BaseSkillModificationData>
| PackageSkillData<'melvorD:Defence',BaseSkillModificationData>
| PackageSkillData<'melvorD:Hitpoints',BaseSkillModificationData>
| PackageSkillData<'melvorD:Ranged',BaseSkillModificationData>
| PackageSkillData<'melvorD:Magic',MagicModificationData>
| PackageSkillData<'melvorD:Prayer',BaseSkillModificationData>
| PackageSkillData<'melvorD:Slayer',BaseSkillModificationData>
| PackageSkillData<'melvorD:Woodcutting',WoodcuttingModificationData>
| PackageSkillData<'melvorD:Fishing',FishingModificationData>
| PackageSkillData<'melvorD:Firemaking',FiremakingModificationData>
| PackageSkillData<'melvorD:Cooking',CookingModificationData>
| PackageSkillData<'melvorD:Mining',MiningModificationData>
| PackageSkillData<'melvorD:Smithing',SmithingModificationData>
| PackageSkillData<'melvorD:Thieving',ThievingModificationData>
| PackageSkillData<'melvorD:Farming',FarmingModificationData>
| PackageSkillData<'melvorD:Fletching',FletchingModificationData>
| PackageSkillData<'melvorD:Crafting',CraftingModificationData>
| PackageSkillData<'melvorD:Runecrafting',RunecraftingModificationData>
| PackageSkillData<'melvorD:Herblore',HerbloreModificationData>
| PackageSkillData<'melvorD:Agility',AgilityModificationData>
| PackageSkillData<'melvorD:Summoning',SummoningModificationData>
| PackageSkillData<'melvorD:Astrology',AstrologyModificationData>
| PackageSkillData<'melvorD:Township',TownshipModificationData>
| PackageSkillData<'melvorAoD:Cartography',CartographyModificationData>
| PackageSkillData<'melvorAoD:Archaeology',ArchaeologyModificationData>
| PackageSkillData<'melvorItA:Harvesting',HarvestingModificationData>
| PackageSkillData<'melvorItA:Corruption',CorruptionModificationData>;

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