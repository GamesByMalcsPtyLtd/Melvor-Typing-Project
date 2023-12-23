/**
 * Melvor Idle mod support module
 * typedefs found in mod.d.ts
 */
declare const mod: {
    manager: {
        readonly activeProfile: Modding.Profile | null;
        hasProfile(id: string): boolean;
        currentProfileName(id: string): string | null;
        init: () => Promise<void>;
        isLoggedIn: () => boolean;
        isEnabled: () => boolean;
        open: (openToMyMods?: boolean, query?: string) => Promise<void>;
        isProcessing(): any;
        hasChanges(): boolean;
        showPromptForProfileMismatch: (profile: Omit<Modding.Profile, 'autoEnable'> | null) => Promise<boolean>;
        showPromptForProfileButNotLoggedIn: () => Promise<boolean>;
        showPromptForReload: (canDefer?: boolean) => Promise<void>;
        showPromptForInProgress: () => Promise<void>;
        getLoadedModList(): string[];
    };
    register: (setup: (ctx: Modding.ModContext) => Promise<unknown>) => Promise<unknown>;
    trigger: {
        modsLoaded: () => Promise<void>;
        characterSelectionLoaded: () => Promise<void>;
        interfaceAvailable: () => Promise<void>;
        characterLoaded: () => Promise<void>;
        interfaceReady: () => Promise<void>;
        creatorToolkitOpen: () => Promise<void>;
    };
    api: Modding.ModApi;
    getContext: (namespaceOrResource: string | HTMLScriptElement | ImportMeta) => Modding.ModContext;
    getDevContext: () => Modding.ModContext;
    getModErrorFromError: (error: unknown) => Modding.ModError;
    encode: (writer: SaveWriter) => SaveWriter;
    decode: (reader: SaveWriter, version: number) => void;
    persist: () => Promise<void> | undefined;
};
