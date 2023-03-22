declare class MelvorDatabase extends Dexie {
    mods: Dexie.Table<Modding.Mod, Modding.ModId>;
    localMods: Dexie.Table<Modding.LocalMod, Modding.ModId>;
    constructor();
}
