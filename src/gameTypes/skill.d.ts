declare abstract class CraftingSkill implements Tickable, Serializable {
    protected actionTimer: Timer;
    protected renderQueue: SkillRenderQueue;
    isActive: boolean;
    protected abstract readonly id: 0 | 10 | 13 | 14 | 15 | 16 | 19 | 20 | 21 | 2 | 3 | 9 | 4 | 5 | 1;
    protected abstract readonly activeID: ActiveSkills;
    protected abstract readonly pageID: PageID;
    protected abstract readonly skillPetID: number;
    protected abstract readonly failureMessage: string;
    protected abstract readonly itemCosts: ItemQuantity2[];
    protected abstract readonly gpCost: number;
    protected abstract readonly slayercoinCost: number;
    protected abstract readonly actionRewards: Rewards;
    protected abstract readonly actionInterval: number;
    protected abstract readonly actionLevel: number;
    /** Mastery ID for the currently running action */
    protected abstract readonly masteryID: number;
    protected get level(): number;
    protected get currentActionInterval(): number;
    protected get masteryPoolProgress(): number;
    isPoolTierActive(tier: number): boolean;
    tick(): void;
    render(): void;
    /** Starts up the skill with whatever selections have been made */
    start(): void;
    /** Returns true if action stopped successfully */
    stop(): boolean;
    protected startActionTimer(): void;
    /** Hook for state mutatations at start of action */
    protected abstract preAction(): void;
    /** Hook for state mutatations at end of action */
    protected abstract postAction(): void;
    protected action(): void;
    protected consumePotionCharge(): void;
    protected checkForActionCosts(): boolean;
    protected subtractActionCosts(): void;
    protected addActionRewards(): void;
    protected addMasteryToken(rewards: Rewards): void;
    /** Adds rewards that are common to all skills for a successful action */
    protected addCommonRewards(rewards: Rewards): void;
    /** Adds mastery XP for the current action */
    protected addMasteryXP(): boolean;
    protected rollForSkillPet(): void;
    protected rollForMasteryPet(): void;
    /** Checks if a synergy is active, consuming charges if it is. Adds xp to rewards object */
    protected checkSynergyAndConsumeCharges(summon1: Summons, summon2: Summons, rewards: Rewards): boolean;
    /** Uses a summon charge of the specified type and adds the xp gain to a rewards object */
    protected useSummonCharge(summon: Summons, rewards: Rewards): void;
    protected useGloveCharge(gloveID: number): void;
    protected renderSkillMastery(): void;
    protected renderActionMastery(): void;
    protected renderSkillNav(): void;
    protected renderSkillGloves(): void;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
}
declare type XPQuantity = {
    skill: SkillID;
    amount: number;
};
declare type SkillRenderQueue = {
    actionMastery: Set<number>;
    skillMastery: boolean;
    progressBar: boolean;
    skillNav: boolean;
    gloves: Set<number>;
};
/** Class to manage the gain of rewards from crafting skills */
declare class Rewards {
    private _items;
    private _gp;
    private _sc;
    private _xp;
    get items(): Map<number, number>;
    get gp(): number;
    get slayerCoins(): number;
    get xp(): Map<number, number>;
    addItem(itemID: ItemID, quantity: number): void;
    addGP(amount: number): void;
    addXP(skill: number, amount: number): void;
    addSlayerCoins(amount: number): void;
    /** Gives the currently set rewards to the player, returns true if not all items were given */
    giveRewards(): boolean;
}
declare enum Summons {
    GolbinThief = 0,
    Occultist = 1,
    Wolf = 2,
    Ent = 3,
    Mole = 4,
    Octopus = 5,
    Minotaur = 6,
    Centaur = 7,
    Witch = 8,
    Pig = 9,
    Crow = 10,
    Leprechaun = 11,
    Cyclops = 12,
    Yak = 13,
    Unicorn = 14,
    Dragon = 15,
    Monkey = 16,
    Salamander = 17,
    Bear = 18,
    Devil = 19
}
