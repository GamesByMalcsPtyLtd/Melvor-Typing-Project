declare function timeFunctionCall(func: VoidFunction, numCalls?: number): number;
declare function deleteAllSaves(): void;
declare function testModifierDataDescriptions(): void;
declare function allItems(qty: number): void;
/** Tests each attack description to see if it contains template values */
declare function testSpecialAttackDescriptions(): void;
/** Test all registered data object translations */
declare function testDataTranslations(): void;
declare function validateSkillcapeStats(superior?: boolean): void;
/** Checks all items to make sure they are obtainable */
declare function testItemObtainability(): void;
declare function getPotentialPassiveItems(namespace: string): EquipmentItem[];
declare function generateProductGPBreakdown(costReduction?: number, increasedQuantity?: number, preservation?: number): void;
declare function getModifiersForSkill(skill: AnySkill, useBase: boolean): {
    intervalReduction: number;
    intervalReductionFlat: number;
    doubleChance: number;
    presChance: number;
    costReduction: number;
    increasedQuant: number;
};
declare class TrueRecipeInterval {
    headers: string[];
    getProgression(level: number): string;
    skillBonuses: Map<AnySkill, TrueRecipeIntervalBonuses>;
    baseSkillIntervals: Map<AnySkill, number>;
    get baseSkillBonuses(): TrueRecipeIntervalBonuses;
    getTodoRecipe(skill: AnySkill, action: any): string[];
    constructor();
    setSkillBonuses(skill: AnySkill, intervalReduction: number, intervalReductionFlat: number, doubleChance: number, presChance: number, costReduction: number, increasedQuant: number, additionalResourceChance: number, extraDoubleChance: number): void;
    isProductFromShop(cost: AnyItemQuantity): boolean;
    isProductFromCombat(cost: AnyItemQuantity): boolean;
    getCombatTrueBaseInterval(cost: AnyItemQuantity, useBase: boolean): number;
    isProductFromMining(cost: AnyItemQuantity): boolean;
    getMiningTrueBaseInterval(cost: AnyItemQuantity, useBase: boolean): number;
    productFromThieving(cost: AnyItemQuantity): ThievingNPC | ThievingArea | undefined;
    productFromThievingLootTable(cost: AnyItemQuantity): ThievingNPC | undefined;
    productFromThievingNPCUniqueDrop(cost: AnyItemQuantity): ThievingNPC | undefined;
    productFromThievingAreaUniqueDrop(cost: AnyItemQuantity): ThievingArea | undefined;
    getThievingTrueBaseInterval(skill: AnySkill, cost: AnyItemQuantity, useBase: boolean): number;
    getHarvestingTrueBaseInterval(cost: AnyItemQuantity, useBase: boolean): number;
    getItemCostInterval(skill: AnySkill, cost: AnyItemQuantity, useBase: boolean): number;
    getCostQuantity(skill: AnySkill, baseQuant: number, useBase: boolean): number;
    getProductQuantity(skill: AnySkill, baseQuant: number, useBase: boolean): number;
    getAbyssalGemVeinAverageProductQty(rock: MiningRock, useBase: boolean): number;
    getActionInterval(skill: AnySkill, action: any, baseInterval: number, useBase: boolean): number;
    getExtraDouble(skill: AnySkill, useBase: boolean): number;
    getAdditional(skill: AnySkill, useBase: boolean): number;
    getModifiersForSkill(skill: AnySkill, useBase: boolean): TrueRecipeIntervalBonuses;
    shouldGetAction(action: any, baseGame?: boolean, TotH?: boolean, AoD?: boolean, ItA?: boolean, levelLimit?: number): boolean;
    getArtisanSkillTrueBaseInterval(skill: AnySkill, action: any, useBase: boolean): number;
    getTrueIntervalsForSkill(skill: AnySkill, baseGame?: boolean, TotH?: boolean, AoD?: boolean, ItA?: boolean, levelLimit?: number): string[][];
    getGPPerAction(action: any, trueTime: number): '???' | number;
    getActionGPPerHour(action: any, trueTime: number): string | number;
    generateBreakdown: (action: any, skill: AnySkill, baseTime: number, trueTime: number) => string[];
    generateBlankRows(count: number): string[][];
    generateTrueIntervalCSV(baseGame?: boolean, TotH?: boolean, AoD?: boolean, ItA?: boolean): void;
    changeSkillBonuses(skill: AnySkill, costReduction: number, increasedQuant: number): void;
    generateCSVsForItA(baseGame?: boolean, TotH?: boolean, AoD?: boolean, ItA?: boolean): void;
    generateMaxDataCSV(baseGame?: boolean, TotH?: boolean, AoD?: boolean, ItA?: boolean): void;
    generateTrueIntervalBreakdownForItemsCSV(baseGame?: boolean, TotH?: boolean, AoD?: boolean, ItA?: boolean): void;
    generateMonsterAPRates(): void;
    generateDungeonAPRates(): void;
    itaTTK: {
        id: string;
        ttk: number;
    }[];
}
declare class TrueRecipeIntervalBonuses {
    get intervalReduction(): number;
    set intervalReduction(value: number);
    get intervalReductionFlat(): number;
    set intervalReductionFlat(value: number);
    get doubleChance(): number;
    set doubleChance(value: number);
    get presChance(): number;
    set presChance(value: number);
    get costReduction(): number;
    set costReduction(value: number);
    get increasedQuant(): number;
    set increasedQuant(value: number);
    get additionalResourceChance(): number;
    set additionalResourceChance(value: number);
    get extraDoubleChance(): number;
    set extraDoubleChance(value: number);
    _intervalReduction: number;
    _intervalReductionFlat: number;
    _doubleChance: number;
    _presChance: number;
    _costReduction: number;
    _increasedQuant: number;
    _additionalResourceChance: number;
    _extraDoubleChance: number;
    constructor();
    setAllBonuses(intervalReduction: number, intervalReductionFlat: number, doubleChance: number, presChance: number, costReduction: number, increasedQuant: number, additionalResourceChance: number, extraDoubleChance: number): void;
}
