declare type CombatPassive = {
    /** Index of passive in combatPassive */
    id: number;
    /** Display name of passive */
    name: string;
    /** Description of passive */
    description: string;
    /** Modifiers to apply to monster */
    modifiers: CombatModifierData;
};
declare const combatPassives: CombatPassive[];
