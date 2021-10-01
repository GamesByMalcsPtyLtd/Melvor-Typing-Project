interface BaseSpell {
    name: string;
    media: string;
    level: number;
    runesRequired: ItemQuantity[];
    runesRequiredAlt?: ItemQuantity[];
}
interface Spell extends BaseSpell {
    id: Spells;
    maxHit: number;
    spellType: number;
}
interface Curse extends BaseSpell {
    id: Curses;
    description: string;
    enemyModifiers: Partial<CombatModifierObject<number>>;
}
interface BaseAurora extends BaseSpell {
    id: Auroras;
    requiredItem: ItemID | -1;
    modifiers: ModifierData;
}
interface Ancient extends BaseSpell {
    id: Ancients;
    requiredDungeonCompletion: [DungeonID, number];
    specialAttack: Attack;
}
declare enum Spells {
    WindStrike = 0,
    WaterStrike = 1,
    EarthStrike = 2,
    FireStrike = 3,
    WindBolt = 4,
    WaterBolt = 5,
    EarthBolt = 6,
    FireBolt = 7,
    WindBlast = 8,
    WaterBlast = 9,
    EarthBlast = 10,
    FireBlast = 11,
    WindWave = 12,
    WaterWave = 13,
    EarthWave = 14,
    FireWave = 15,
    WindSurge = 16,
    WaterSurge = 17,
    EarthSurge = 18,
    FireSurge = 19
}
declare enum Curses {
    BlindingI = 0,
    SoulSplitI = 1,
    WeakeningI = 2,
    AnguishI = 3,
    BlindingII = 4,
    SoulSplitII = 5,
    WeakeningII = 6,
    Confusion = 7,
    AnguishII = 8,
    BlindingIII = 9,
    SoulSplitIII = 10,
    WeakeningIII = 11,
    AnguishIII = 12,
    Decay = 13
}
declare enum Auroras {
    SurgeI = 0,
    FuryI = 1,
    FervorI = 2,
    SurgeII = 3,
    ChargedI = 4,
    FuryII = 5,
    FervorII = 6,
    SurgeIII = 7,
    ChargedII = 8,
    FuryIII = 9,
    FervorIII = 10,
    ChargedIII = 11
}
declare enum Ancients {
    SlicingWinds = 0,
    IcicleVolley = 1,
    Ignite = 2,
    Gust = 3,
    Frostbite = 4,
    Quake = 5,
    Incinerate = 6
}
declare enum AltMagics {
    JustLearning = 0,
    SuperheatI = 1,
    ItemAlchemyI = 2,
    BoneOffering = 3,
    SuperheatII = 4,
    ItemAlchemyII = 5,
    RagstoRichesI = 6,
    BlessedOffering = 7,
    SuperheatIII = 8,
    RagstoRichesII = 9,
    ItemAlchemyIII = 10,
    SuperheatIV = 11
}
declare const SPELLS: Spell[];
declare const CURSES: Curse[];
declare const AURORAS: BaseAurora[];
declare const ANCIENT: Ancient[];
interface BaseAltMagic extends BaseSpell {
    description: string;
    magicXP: number;
    /** Items produced/Alchemy value multiplier */
    convertToQty: number;
    id: AltMagics;
}
interface CreationSpell extends BaseAltMagic {
    selectItem: -1;
    /** Spell creates this item */
    convertTo: ItemID;
    /** Spell Converts Coal to Gems */
    needCoal: false;
}
interface SuperheatSpell extends BaseAltMagic {
    selectItem: 0;
    /** Spell ignores coal costs */
    ignoreCoal: boolean;
}
interface ConversionSpell extends BaseAltMagic {
    selectItem: 1;
    isAlch: false;
    isJunk: false;
    /** Spell produces this item */
    convertTo: ItemID;
}
interface JunkConversionSpell extends BaseAltMagic {
    selectItem: 1;
    isAlch: false;
    /** Spell Converts Junk to Gems */
    isJunk: true;
}
interface AlchemySpell extends BaseAltMagic {
    selectItem: 1;
    /** Spell Converts Item to GP */
    isAlch: true;
    isJunk: false;
}
interface CoalConversionSpell extends BaseAltMagic {
    selectItem: -1;
    /** Spell Converts Coal to Gems */
    needCoal: true;
}
declare type Altmagic = CreationSpell | SuperheatSpell | ConversionSpell | AlchemySpell | JunkConversionSpell | CoalConversionSpell;
declare const ALTMAGIC: Altmagic[];
declare function describeAurora(aurora: BaseAurora): string;
declare let isMagic: boolean;
declare let selectedAltMagic: number;
declare let currentMagicSpell: number;
declare const selectedMagicItem: [number, number, number];
declare const magicInterval = 2000;
declare let magicTimeout: number;
declare let altMagicSelection: AltMagicSelectionTab;
declare function loadAltMagic(): void;
declare function castMagic(clicked?: boolean, offlineIsPaused?: boolean): void;
declare function selectMagic(altMagicID: number, update?: boolean): void;
declare function openMagicItemSelection(): void;
declare function selectItemForMagic(itemID: number): void;
declare function setMagicItemImg(itemID: number): void;
declare function checkRuneCount(spellbook: 0 | 1 | 2 | 3 | 4, spellID: number, useRunes?: boolean, isOffline?: boolean): boolean;
declare class RuneMenu {
    private container;
    private runes;
    private highlighted;
    constructor();
    init(): void;
    private createMenuElement;
    private createTooltip;
    updateCounts(): void;
    updateHighlights(spellSelection: SpellSelection): void;
    private addBordersForSpell;
    private removeBorder;
    private addBorder;
}
interface RuneMenuElement {
    tooltip: TippyTooltip;
    count: HTMLElement;
    border: HTMLElement;
}
declare abstract class SpellMenu {
    protected abstract menuContainer: HTMLDivElement;
    protected spellElements: CombatMenuElement[];
    protected abstract book: BaseSpell[];
    protected abstract bookData: BookData;
    protected abstract selectButton: HTMLAnchorElement;
    protected selection: number;
    updateForUnlock(level: number, player: Player): void;
    setMenuCallbacks(player: Player): void;
    protected abstract getMenuCallback(id: number, player: Player): VoidFunction;
    setSelection(id: number): void;
    protected createMenu(): void;
    private createSpell;
    private createTooltip;
    private getLockedTooltipHTML;
    protected getRuneHTML(spell: BaseSpell): string;
    private getRuneCostHTML;
    protected abstract getTooltipHTML(id: number): string;
    protected getUnlockHTML(id: number, player: Player): string;
    protected checkUnlocked(id: number, level: number, player: Player): boolean;
}
declare class StandardSpellMenu extends SpellMenu {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: Spell[];
    protected bookData: {
        name: string;
        description: string;
    };
    constructor();
    protected getMenuCallback(id: number, player: Player): VoidFunction;
    protected getTooltipHTML(id: number): string;
}
declare class CurseSpellMenu extends SpellMenu {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: Curse[];
    protected bookData: {
        name: string;
        description: string;
    };
    constructor();
    protected getMenuCallback(id: number, player: Player): VoidFunction;
    protected getTooltipHTML(id: number): string;
}
declare class AuroraSpellMenu extends SpellMenu {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: BaseAurora[];
    protected bookData: {
        name: string;
        description: string;
    };
    constructor();
    protected getMenuCallback(id: number, player: Player): VoidFunction;
    protected getTooltipHTML(id: number): string;
    protected getUnlockHTML(id: number, player: Player): string;
    private auroraRequirement;
    protected checkUnlocked(id: number, level: number, player: Player): boolean;
}
declare class AncientSpellMenu extends SpellMenu {
    protected menuContainer: HTMLDivElement;
    protected selectButton: HTMLAnchorElement;
    protected book: Ancient[];
    protected bookData: {
        name: string;
        description: string;
    };
    constructor();
    protected getMenuCallback(id: number, player: Player): VoidFunction;
    protected createMenu(): void;
    protected getTooltipHTML(id: number): string;
    protected getUnlockHTML(id: number, player: Player): string;
    protected checkUnlocked(id: number, level: number, player: Player): boolean;
}
declare type BookData = {
    name: string;
    description: string;
};
declare type SpellBookType = 'standard' | 'curse' | 'aurora' | 'ancient' | 'altMagic';
declare function updateSpellbook(book: SpellBookType | 'all'): void;
