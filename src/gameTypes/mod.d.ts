/**
 * Melvor Idle mod support module
 * typedefs found in mod.d.ts
 */
declare const mod: {
    manager: {
        init: () => Promise<void>;
        isHidden: () => boolean;
        isEnabled: () => boolean;
        open: (goToMyMods?: boolean, query?: string) => Promise<void>;
        isProcessing: () => boolean;
        hasChanges: () => boolean;
        promptToEnable: () => Promise<boolean>;
        promptToDisable: () => Promise<boolean>;
        showPromptForReload: (canDefer?: boolean) => Promise<void>;
        showPromptForInProgress: () => Promise<void>;
        getLoadedModList: () => string[];
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
