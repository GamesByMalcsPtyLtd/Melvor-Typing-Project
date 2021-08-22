/** Base for Dungeons, slayer areas, and combat areas */
interface BaseArea {
    /** Display name of Area */
    name: string;
    /** URL to display image */
    media: string;
    /** Monsters contained in area */
    monsters: MonsterID[];
    /** Difficulty range of area */
    difficulty: number[];
    /** Requirements to enter area */
    entryRequirements: Requirement[];
    id: number;
}
interface CombatAreaData extends BaseArea {
    type: 'Combat';
}
declare type SlayerAreaData = SlayerAreaWithEffect | SlayerAreaWithoutEffect;
interface SlayerAreaWithEffect extends BaseArea {
    /** Area has modifiers to apply to player */
    areaEffect: true;
    /** Description of modifiers */
    areaEffectDescription: string;
    /** Value of modifier to apply to player */
    areaEffectValue: number;
    areaEffectModifier: StandardModifierKeys;
    type: 'Slayer';
}
interface SlayerAreaWithoutEffect extends BaseArea {
    areaEffect: false;
    type: 'Slayer';
}
interface DungeonData extends BaseArea {
    /** Items rewarded to player on dungeon completion */
    rewards: ItemID[];
    /** ID of boss pet rolled on completion of dungeon */
    petID: PetID;
    /** Requirement to unlock the dungeon */
    unlockRequirement?: DungeonRequirements;
    type: 'Dungeon';
    /** Dungeon monsters should drop bones */
    dropBones: boolean;
    floors?: number[];
}
declare type AreaData = CombatAreaData | SlayerAreaData | DungeonData;
declare const combatAreas: CombatAreaData[];
declare const unknownArea: CombatAreaData;
declare const slayerAreas: SlayerAreaData[];
declare const DUNGEONS: DungeonData[];
declare const combatAreaDisplayOrder: number[];
declare const slayerAreaDisplayOrder: number[];
declare const dungeonAreaDisplayOrder: number[];
declare class CombatAreaMenu<T extends AreaData> {
    private container;
    private menuElems;
    private areas;
    constructor(containerID: string, unsortedAreas: T[], areaDisplayOrder: number[]);
    updateRequirements(): void;
    private setReqStatus;
    private createMenuElement;
    private toggleTable;
    private createName;
    private createDifficultySpan;
    private createRequirements;
    private createReqImage;
    private createReqSpan;
    private idStart;
    private createDungeonInfo;
    private createRewardImage;
    private createEffectInfo;
    private createDungeonUnlock;
    private getUnlockMessage;
    private isDungeonUnlocked;
    private createMonsterTable;
    private createDungeonTable;
    static difficulty: AreaDifficulty[];
    static attackTypeMedia: {
        melee: string;
        ranged: string;
        magic: string;
    };
}
declare type AreaMenuElement = {
    table: HTMLElement;
    image: HTMLImageElement;
    requirements: HTMLElement[];
    fightButtons: HTMLButtonElement[];
    isOpen: boolean;
    lockedElems: HTMLElement[];
    unlockedElems: HTMLElement[];
};
declare type AreaDifficulty = {
    name: string;
    class: string;
};
declare function updateAreaRequirements(): void;
declare function getMonsterArea(mId: number): CombatAreaData | SlayerAreaData;
