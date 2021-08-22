/** Enemy Class for Golbin Raid */
declare class Golbin extends Enemy {
    protected manager: RaidManager;
    /** Constructs an enemy for golbin raid */
    constructor(wave: number, isBoss: boolean, manager: RaidManager);
    protected modifyAttackInterval(interval: number): number;
    protected computeMagicMaxHit(): number;
    private static getMonster;
    private static getName;
    private static getLevel;
    private static getAttackType;
    private static getMedia;
    private static getStats;
    private static getStatValue;
}
