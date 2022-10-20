declare class MelvorDatabase extends Dexie {
    mods: Dexie.Table<Modding.Mod, Modding.ModId>;
    constructor();
}
