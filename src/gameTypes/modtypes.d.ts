declare namespace Modding {
  type ModId = number;

  /** mod.io typedefs */
  namespace Io {
    /** mod.io Access Token Object {@link | https://docs.mod.io/#access-token-object} */
    interface AccessToken {
      access_token: string;
      date_expires: number;
    }

    /** mod.io User Object {@link | https://docs.mod.io/#user-object} */
    interface User {
      /** Unique id of the user. */
      id: number;
      /** Path for the user on mod.io For example: https://modio/members/name-id-here */
      name_id: string;
      /** Username of the user. */
      username: string;
      /** Unix timestamp of the date the user was last online. */
      date_online: number;
      /** Unix timestamp of the date the user joined. */
      date_joined: number;
      /** URL to the user's mod.io profile. */
      profile_url: string;
    }

    /** mod.io Game Object {@link | https://docs.mod.io/#game-object} */
    interface Game {
      /** Unique game id. */
      id: number;
      /** Word used to describe user-generated content (mods, items, addons, etc.). */
      ugc_name: string;
      /** Name of the game. Hopefully it's Melvor Idle? */
      name: string;
      /** Summary of the games mod support. */
      summary: string;
      /** Link to a mod.io guide, your modding wiki or a page where modders can learn how to make and submit mods to your games profile. */
      instructions_url: string;
      /** Link to the game's mod.io page. */
      profile_url: string;
      /** Groups of tags configured by the game developer, that mods can select. */
      tag_options: Io.TagOption[];
    }

    /** mod.io Tag Option Object {@link | https://docs.mod.io/#game-tag-option-object} */
    interface TagOption {
      /** Name of the tag group. */
      name: string;
      /** Can multiple tags be selected via `checkboxes` or should only a single tag be selected via a `dropdown`. */
      type: string;
      /** List of tag names and the count of mods with these tags. */
      tag_count_map: Record<string, number>;
      /** Groups of tags flagged as `locked` should not be editable but can be shown to users. */
      locked: boolean;
      /** Array of tags in this group. */
      tags: string[];
    }

    /** mod.io Get Mods Object {@link | https://docs.mod.io/#get-mods-2} */
    interface GetMods {
      /** Array containing mod objects. */
      data: Mod[];
      /** Number of results returned in this request. */
      result_count: number;
      /** Number of results skipped over. */
      result_offset: number;
      /** Maximum number of results returned in the request. */
      result_limit: number;
      /** Total number of results found. */
      result_total: number;
    }

    /** mod.io Mod Object {@link | https://docs.mod.io/#mod-object} */
    interface Mod {
      /** Unique mod id. */
      id: ModId;
      /** The user who published the mod. */
      submitted_by: User;
      /** Unix timestamp of date mod was registered. */
      date_added: number;
      /** Unix timestamp of date mod was updated. */
      date_updated: number;
      /** Unix timestamp of date mod was set live. */
      date_live: number;
      /** Contains media URLs to the logo for the mod. */
      logo: Logo;
      /** Official homepage of the mod. */
      homepage_url: string;
      /** Name of the mod. */
      name: string;
      /** Path for the mod on mod.io. For example: https://melvoridle.mod.io/mod-name-id-here */
      name_id: string;
      /** Summary of the mod. */
      summary: string;
      /** Detailed description of the mod which allows HTML. */
      description: string;
      /** {@link Mod.description} field converted into plaintext. */
      description_plaintext: string;
      /** Metadata stored by the game developer. Metadata can also be stored as searchable key value pairs, and to individual mod files. */
      metadata_blob: string;
      /** URL to the mod's mod.io profile. */
      profile_url: string;
      /** Contains YouTube & Sketchfab links, as well as media URLs of images for the mod. */
      media: ModMedia;
      /** The primary modfile for the mod. */
      modfile: Modfile;
      /** Numerous aggregate stats for the mod. */
      stats: ModStats;
      /** Contains key-value metadata. */
      metadata_kvp: MetadataKVP[];
      /** Contains mod tag data. */
      tags: ModTag[];
      /** Contains categorized mod tag data. Not a native mod.io property, and instead generated when caching a mod. */
      categorized_tags: ModTags;
    }

    /** mod.io Mod Media Object {@link | https://docs.mod.io/#mod-media-object} */
    interface ModMedia {
      /** Array of YouTube links. */
      youtube: string[];
      /** Array of SketchFab links. */
      sketchfab: string[];
      /** Array of image objects (a gallery). */
      images: Image[];
    }

    /** mod.io Logo Object {@link | https://docs.mod.io/#logo-object} */
    interface Logo {
      /** Logo filename including extension. */
      filename: string;
      /** URL to the full-sized logo. */
      original: string;
      /** URL to the small logo thumbnail. */
      thumb_320x180: string;
      /** URL to the medium logo thumbnail. */
      thumb_640x360: string;
      /** URL to the large logo thumbnail. */
      thumb_1280x720: string;
    }

    /** mod.io Image Object {@link | https://docs.mod.io/#image-object} */
    interface Image {
      /** Image filename including extension. */
      filename: string;
      /** URL to the full-sized image. */
      original: string;
      /** URL to the small image thumbnail. */
      thumb_320x180: string;
      /** URL to the large image thumbnail */
      thumb_1280x720: string;
    }

    /** mod.io Get Modfiles Object {@link | https://docs.mod.io/#get-modfiles} */
    interface GetModfiles {
      /** Array containing modfile objects. */
      data: Modfile[];
      /** Number of results returned in this request */
      result_count: number;
      /** Number of results skipped over. */
      result_offset: number;
      /** Maximum number of results returned in this request. */
      result_limit: number;
      /** Total number of results found. */
      result_total: number;
    }

    /** mod.io Modfile Object {@link | https://docs.mod.io/#modfile-object} */
    interface Modfile {
      /** Unique modfile id. */
      id: number;
      /** Unique mod id. */
      mod_id: ModId;
      /** Unix timestamp of date file was added. */
      date_added: number;
      /** Unix timestamp of date file was virus scanned. */
      date_scanned: number;
      /** Current virus scan status of the file. (0 = Not scanned, 1 = Scan complete, 2 = In progress, 3 = Too large to scan, 4 = File not found, 5 = Error scanning) */
      virus_status: number;
      /** Was a virus detected: (0 = No threats detected, 1 = Flagged as malicious) */
      virus_positive: number;
      /** VirusTotal proprietary hash to view the scan results. */
      virustotal_hash: string;
      /** Size of the file in bytes. */
      filesize: number;
      /** Contains a dictionary of filehashes for the contents of the download. */
      filehash: Filehash;
      /** Filename including extension. */
      filename: string;
      /** Release version this file represents. */
      version: string;
      /** Changelog for the file. */
      changelog: string;
      /** Metadata stored by the game developer for this file. */
      metadata_blob: string;
      /** Contains download data. */
      download: Download;
    }

    /** mod.io Filehash Object {@link | https://docs.mod.io/#filehash-object} */
    interface Filehash {
      md5: string;
    }

    /** mod.io Download Object {@link | https://docs.mod.io/#download-object} */
    interface Download {
      /** URL to download the file from the mod.io CDN. */
      binary_url: string;
      /** Unix timestamp of when the `binary_url` will expire. */
      date_expires: number;
    }

    /** mod.io Get Mod Dependencies Object {@link | https://docs.mod.io/#get-mod-dependencies-2} */
    interface GetModDependencies {
      /** Array containing modfile objects. */
      data: ModDependency[];
      /** Number of results returned in this request */
      result_count: number;
      /** Number of results skipped over. */
      result_offset: number;
      /** Maximum number of results returned in this request. */
      result_limit: number;
      /** Total number of results found. */
      result_total: number;
    }

    /** mod.io Mod Dependency Object {@link | https://docs.mod.io/#mod-dependencies-object} */
    interface ModDependency {
      /** Unique id of the mod that is the dependency. */
      mod_id: number;
      /** The name of the dependency (mod name). */
      name: string;
      /** Unix timestamp of the date the dependency was added. */
      date_added: number;
    }

    /** mod.io Mod Stats Object {@link | https://docs.mod.io/#mod-stats-object} */
    interface ModStats {
      /** Unique mod id. */
      mod_id: ModId;
      /** Current rank of the mod. */
      popularity_rank_position: number;
      /** Number of ranking spots the current rank is measured against. */
      popularity_rank_total_mods: number;
      /** Number of total mod downloads. Count resets around 11:00 UTC+11 daily. */
      downloads_today: number;
      /** Number of total mod downloads. */
      downloads_total: number;
      /** Number of total users who have subscribed to the mod. */
      subscribers_total: number;
      /** Number of times this mod has been rated. */
      ratings_total: number;
      /** Number of positive ratings. */
      ratings_positive: number;
      /** Number of negative ratings. */
      ratings_negative: number;
      /** Number of positive ratings, divided by the total ratings to determine its percentage score. */
      ratings_percentage_positive: number;
      /** Overall rating of this item calculated using the Wilson score confidence interval. */
      ratings_weighted_aggregate: number;
      /** Textual representation of the rating in format: (Overwhelmingly Positive/Very Positive/Positive/Mostly Positive/Mixed/Negative/Mostly Negative/Very Negative/Overwhelmingly Negative/Unrated) */
      ratings_display_text: string;
      /** Unix timestamp until this mod's statistics are considered stale. */
      date_expires: number;
    }

    /** mod.io Metadata KVP Object {@link | https://docs.mod.io/#metadata-kvp-object} */
    interface MetadataKVP {
      /** The key of the key-value pair. */
      metakey: string;
      /** The value of the key-value pair. */
      metavalue: string;
    }

    /** mod.io Mod Tag Object {@link | https://docs.mod.io/#mod-tag-object} */
    interface ModTag {
      /** Tag name. */
      name: string;
      /** Unix timestamp of date tag was applied. */
      date_added: number;
    }

    /** Pagination parameters used for mod.io queries */
    interface PaginationParams {
      /** Current page being requested. */
      page: number;
      /** The number of results per page. */
      pageSize: number;
    }

    /** mod.io Get User Ratings Object {@link | https://docs.mod.io/#get-user-ratings-2} */
    interface GetUserRatings {
      /** Array containing rating objects. */
      data: Rating[];
      /** Number of results returned in this request. */
      result_count: number;
      /** Number of results skipped over. */
      result_offset: number;
      /** Maximum number of results returned in the request. */
      result_limit: number;
      /** Total number of results found. */
      result_total: number;
    }

    /** mod.io Rating Object {@link | https://docs.mod.io/#rating-object} */
    interface Rating {
      /** Unique id of the mod. */
      mod_id: ModId;
      /** Type of rating applied. (-1 = Negative Rating, 1 = Positive Rating) */
      rating: RatingNumber;
      /** Unix timestamp of date rating was submitted. */
      date_added: number;
    }

    type RatingNumber = -1 | 0 | 1;

    /** Callback method used for receiving a modfile's current download progress */
    type DownloadProgressCallback = (bytesDownloaded: number, byteTotal: number, bytesPerSecond: number) => void;
  }

  namespace Manager {
    type Tab = 'browse' | 'my-mods';

    type View = 'grid' | 'list';

    type ModStatus = '' | 'downloadQueued' | 'downloadBegin' | 'downloadComplete' | 'installQueued' | 'installBegin' | 'installComplete' | 'uninstallQueued' | 'uninstallBegin' | 'error';
  }

  /** Mod settings typedefs */
  namespace Settings {
    /** Mod settings section */
    interface Section {
      /** Name of the section. */
      name: string;
      /** Array of all settings contained within this section. */
      settings: Setting[];
    }

    /** Mod setting */
    interface Setting {
      /** The mod that registered the setting. */
      mod: Mod,
      /** The configuration object for the setting. */
      config: SettingConfig;
      /** HTML root for the setting, generated by `render()`. */
      root: HTMLElement;
      /** Method to get the current setting's value from the rendered HTML. */
      get: () => unknown;
      /** Method to set the current setting's value in the rendered HTML. */
      set: (value: unknown, options?: { isRestoringValue?: boolean }) => void;
    }

    interface SettingMap {
      [type: string]: Function;
    }

    /** Base configuration object for mod settings. */
    interface SettingConfig {
      /** Type of the setting. */
      type: string;
      /** Name of the setting. This is the value used for the HTML `id` attribute. */
      name: string;
      /** The default value, used for initial values and upon resetting defaults. */
      default: primitive | primitive[];
      /** Text label for the input. */
      label: string;
      /** Extra text to be displayed below the label in a smaller font. */
      hint: string;
      /** Stub for settings with dropdowns. */
      options?: unknown;
      /** Method responsible for generating the HTML for the input. */
      render(name: string, onChange: () => void, config: SettingConfig): HTMLElement;
      /** Method that handles user input. Return `false` to prevent the value from changing. Return a string to prevent the value from changing and display a validation error. */
      onChange(value: unknown, previousValue: unknown): void | boolean | string;
      /** Method responsible for retrieving the current value from the setting's HTML. Must return a value that can be converted to JSON. */
      get(root: HTMLElement): unknown;
      /** Method responsible for handling how data is inserted into the setting's HTML. */
      set(root: HTMLElement, value: unknown): void;
    }

    /** Configuration object for text input setting type. */
    interface TextConfig extends SettingConfig {
      default: string;
      /** The max length the setting will allow. */
      maxLength: number;
    }

    /** Configuration object for number input setting type. */
    interface NumberConfig extends SettingConfig {
      default: number;
      /** Minimum value of the setting. */
      min: number;
      /** Maximum value of the setting. */
      max: number;
    }

    /** Configuration object for switch input setting type. */
    interface SwitchConfig extends SettingConfig {
      default: boolean;
    }

    /** Configuration object for dropdown input setting type. */
    interface DropdownConfig extends SettingConfig {
      default: primitive;
      /** The color of the dropdown button. */
      color: string;
      /** Dropdown options. */
      options: DropdownOption[];
    }

    /** A dropdown option. */
    interface DropdownOption {
      /** The value to be passed to the setting. */
      value: primitive;
      /** The value to be displayed in the dropdown. */
      display: string | HTMLElement;
    }

    /** Configuration object for button input setting type. */
    interface ButtonConfig extends SettingConfig {
      /** The value to be displayed within the button. */
      display: string | HTMLElement;
      /** The color of the button. */
      color: string;
      /** The callback to take place when the button is clicked. */
      onClick(): void;
    }

    /** Configuration object for checkbox group setting type. */
    interface CheckboxGroupConfig extends SettingConfig {
      default: primitive[];
      /** Checkbox options. */
      options: CheckboxOption[];
    }

    /** A checkbox option. */
    interface CheckboxOption {
      /** The value to be passed to the setting. */
      value: primitive;
      /** The primary text to be displayed next to the option. */
      label: string;
      /** The secondary text to be displayed next to the option. */
      hint?: string;
    }

    /** Configuration object for radio group setting type. */
    interface RadioGroupConfig extends CheckboxGroupConfig {
      default: primitive;
    }

    type SerializedSetting = [string, unknown];

    type SerializedSection = [string, SerializedSetting[]];
  }

  /** Mod Profile used to determine what mods to enable for what character slot */
  interface Profile {
    id: string;
    name: string;
    mods: Modding.ModId[];
    autoEnable: boolean;
  }

  /** The accepted manifest.json format */
  interface ModManifest {
    /** The mod's namespace used for data registration & saving. */
    namespace?: string;
    /** Resource to be used as the mod's icon. */
    icon?: string;
    /** Resource to be used as the mod's setup function. Only JavaScript modules (.js or .mjs) are supported. */
    setup?: string;
    /** Resource(s) to load on the character select screen. JavaScript (.js or .mjs) and stylesheets (.css) are supported. */
    load?: string | string[];
  }

  /** A mod's primary data structure. */
  interface Mod {
    /** The mod's id property on mod.io. */
    id: ModId;
    /** The mod's user-friendly display name. */
    name: string;
    /** The mod's current version. */
    version: string;
    /** The mod's namespace used for data registration. */
    namespace?: string;
    /** The mod's categorized tags. */
    tags: ModTags;
    /** The mod's author. */
    author: string;
    /** A short but useful description of the mod. */
    description: string;
    /** Resource to be used as the mod's logo. */
    icon?: string;
    /** Resource to be used as the mod's setup function. Only JavaScript modules (.js or .mjs) are supported. */
    setup?: string;
    /** Resource(s) to load on the character select screen. JavaScript (.js) and stylesheets (.css) are supported. */
    load?: string | string[];
    /** The mod's resource files. */
    resources: Record<string, Blob>;
    /** URL to the mod's mod.io profile. */
    modioUrl: string;
    /** Official homepage of the mod. */
    homepageUrl: string;
    /** Mod dependencies */
    dependencies?: Io.ModDependency[];
    /** Unix timestamp of when this mod was installed locally */
    installed?: number;
    /** Unix timestamp of this mod's version being added */
    updated?: number;
    /** Changelog for the currently installed version */
    changelog?: string;
  }

  interface ModCache {
    id: Modding.ModId;
    io: Modding.Io.Mod | null;
    local: Modding.Mod | null;
    loaded: Modding.Mod | null;
  }

  interface LocalMod {
    /** Auto-incremented id specifically for local mods */
    id: number;
    /** Name for the mod, only used when unlinked from mod.io */
    name: string;
    /** The .zip file used to install the mod */
    package: File;
    /** The {@link Mod} object */
    mod: Mod;
    /** The priority in which to load the mod */
    loadPriority: number;
    /** Whether or not to load the mod */
    disabled: boolean;
  }

  interface ModCache {
    id: Modding.ModId;
    io: Modding.Io.Mod | null;
    local: Modding.Mod | null;
    loaded: Modding.Mod | null;
    latest: Modding.Io.Modfile | null;
  }

  type ModBasic = Pick<Mod,'id'|'name'|'version'>;

  type ModError = {
    /** An array of basic information on the mods causing the error. Array is empty if no mods are detected, the exception is not an error, or stack traces are not available. */
    mods: ModBasic[],
    /** A modified stack trace from the original error, with resource URLs replaced with the mod url */
    stack: string
  }
  
  interface TagGroup {
    name: string;
    tags: Modding.Tag[];
  }

  interface Tag {
    name: string;
    count: number;
  }

  /** A mod's categorized tags. */
  interface ModTags {
    /** The mod's supported platforms (Steam, Browser, iOS, Android). */
    platforms: string[];
    /** The mod's supported game version. */
    supportedGameVersion: string;
    /** The mod's categories (Script, UI, QoL, Automation, Content). */
    types: string[];
  }

  /** Config options for an eventing process queue. */
  interface EventingProcessQueueConfig<TInput, TOutput, TMappedType> {
    /** The queue's name to use for events. */
    name: string;
    /** Function used to process items in the queue. */
    processor: (input: TInput, progress?: (...args: unknown[]) => void) => Promise<TOutput>;
    /** Function used to return the current queue representation via the items() method. */
    itemsMap: (input: TInput) => TMappedType;
    /** Function used to find an item's index in the queue, returning -1 if not found. */
    findIndex: (q: TInput[], input: TInput) => number
  }

  type BusEventCallback = (e: unknown) => void;

  /** Mod browser cache object. */
  interface BrowserCache {
    /** The number of total results with these parameters. */
    totalResults: number;
    /** Cached pages. */
    pages: (BrowserCachedPage | null)[];
  }

  /** Mod browser cached page object. */
  interface BrowserCachedPage {
    /** The mod ids from cached mod.io response. */
    mods: ModId[];
    /** Expiration time for this cache object. */
    expires: Date;
  }

  type ClassPatches<C extends ClassHandle> = Map<ClassMethod<C>|ClassProperty<C>, {
    mods: Set<Mod>,
    patcher: MethodPatch<C, ClassMethod<C>> | PropertyPatch<C, ClassProperty<C>>
  }>
  interface PatchMap extends Map<ClassHandle, ClassPatches<ClassHandle>> {
    get<C extends ClassHandle>(key: C): ClassPatches<C>;
  }

  interface MethodPatch<C extends ClassHandle, M extends ClassMethod<C>> {
    before(patch: BeforePatch<C, C['prototype'][M]>): void;
    replace(patch: ReplacePatch<C,C['prototype'][M]>): void;
    after(patch: AfterPatch<C, C['prototype'][M]>): void;
  }

  interface PropertyPatch<C extends ClassHandle, P extends ClassProperty<C>> {
    get(getter: GetterPatch<C,P>): void;
    set(setter: SetterPatch<C,P>): void;
    replace(getter: GetterPatch<C,P>, setter: SetterPatch<C,P>): void;
  }
  type GetterPatch<C extends ClassHandle, P extends ClassProperty<C>> = (this: InstanceType<C>, o: () => C['prototype'][P]) => C['prototype'][P];
  type SetterPatch<C extends ClassHandle, P extends ClassProperty<C>> = (this: InstanceType<C>, o: (val: C['prototype'][P]) => void, val: C['prototype'][P]) => void;

  type AnyFunction = (...args: any) => any;
  type BeforePatch<C extends ClassHandle, M extends AnyFunction> = (this: InstanceType<C>, ...args: Parameters<M>) => Parameters<M> | void;
  type AfterPatch<C extends ClassHandle, M extends AnyFunction> = (this: InstanceType<C>, returnValue: ReturnType<M>, ...args: Parameters<M>) => ReturnType<M> | void;
  type ReplacePatch<C extends ClassHandle, M extends AnyFunction> = (this: InstanceType<C>, replacedMethod: (...args: Parameters<M>) => ReturnType<M>, ...args: Parameters<M>) => ReturnType<M>;

  type MethodOrPropertyPatch<C extends ClassHandle, T extends ClassMethod<C>|ClassProperty<C>> = T extends ClassMethod<C> ? MethodPatch<C, T> : T extends ClassProperty<C> ? PropertyPatch<C,T> : never;

  interface ModContext {
    name: string;
    namespace?: string;
    namespaceData?: DataNamespace;
    version: string;
    gameData: {
      addPackage: (data: string | GameDataPackage) => Promise<void>;
      buildPackage: (builder: (packageBuilder: Modding.GameDataPackageBuilder) => void) => { package: GameDataPackage; add: () => Promise<void>; };
    };
    characterStorage: {
      setItem: (key: string, data: any) => void;
      getItem: (key: string) => any;
      removeItem: (key: string) => void;
      clear: () => void;
    };
    accountStorage: {
      setItem: (key: string, data: any) => void;
      getItem: (key: string) => any;
      removeItem: (key: string) => void;
      clear: () => void;
    };
    settings: {
      section: (name: string) => {
        get: (name: string) => unknown;
        set: (name: string, value: any) => void;
        add: (config: Modding.Settings.SettingConfig | Modding.Settings.SettingConfig[]) => void;
      };
      type: (name: string, config: Modding.Settings.SettingConfig) => void;
    };
    getResourceBlob: (resourcePath: string) => Blob;
    getResourceUrl: (resourcePath: string) => string;
    loadTemplates: (resourcePath: string) => void;
    loadStylesheet: (resourcePath: string) => void;
    loadScript: (resourcePath: string) => Promise<void>;
    loadModule: (resourcePath: string) => Promise<any>;
    loadData: (resourcePath: string) => Promise<any>;
    onModsLoaded: (callback: Modding.LifecycleCallback) => void;
    onCharacterSelectionLoaded: (callback: Modding.LifecycleCallback) => void;
    onInterfaceAvailable: (callback: Modding.LifecycleCallback) => void;
    onCharacterLoaded: (callback: Modding.LifecycleCallback) => void;
    onInterfaceReady: (callback: Modding.LifecycleCallback) => void;
    share: (resourcePath: string) => void;
    api: (endpoints: Record<string, unknown>) => any;
    patch: <C extends ClassHandle, MorP extends ClassMethod<C>|ClassProperty<C>>(_class: C, methodOrPropertyName: MorP) => MethodOrPropertyPatch<C,MorP>;
    isPatched: <C extends ClassHandle>(_class: C, methodOrPropertyName: ClassMethod<C>|ClassProperty<C>) => boolean;
  }

  interface CreatorToolkitContext extends ModContext {
    isAuthenticated(): boolean;
    request(method: string, endpoint: string, data?: Record<string, string>): Promise<any>;
    binaryPost(endpoint: string, data?: Record<string, string>): Promise<any>;
    zip(name: string, dir: string): Promise<File>;
    parse(modIoData: Modding.Io.Mod, modfile: Modding.Io.Modfile, file: Blob): Promise<Modding.Mod>;
    parseLocal(name: string, file: File): Promise<Modding.Mod>;
    getModResourceUrl(mod: Modding.Mod, resourcePath: string): string;
    load(mod: Modding.Mod): Promise<void>;
    onOpen(callback: Modding.LifecycleCallback): void;
    db: {
      count(): Promise<number>;
      getAll(): Promise<Modding.LocalMod[]>;
      get(id: number): Promise<Modding.LocalMod | undefined>;
      put(mod: Modding.LocalMod): Promise<void>;
      delete(id: number): Promise<void>;
      deleteAll(): Promise<void>;
    }
  }

  type LifecycleCallback = (ctx: ModContext) => void | Promise<void>;
  type CreatorToolkitCallback = (ctx: CreatorToolkitContext) => void | Promise<void>;

  interface ModApi {
    [key: string]: any;
  }

  type SerializedCharacterStorageData = [string, unknown];
  
  type SerializedCharacterData = [ModId, Settings.SerializedSection[] | null, SerializedCharacterStorageData[] | null];

  type SerializedAccountStorageData = [number, [string, any][]];

  type GameDataAdder<T> = {
    add: (val: T) => void;
  };

  type GameDataModifier<T> = {
    modify: (val: T) => void
  };

  /** Changes the array properties of type T to their element types  */
  type FlattenProps<T> = {
    [Property in keyof T]: T[Property] extends Array<infer U> ? U : T[Property];
  }

  /** Maps each property of T to a GameDataAdder */
  type ToGameDataAdders<T> = {
    [Property in keyof T]: GameDataAdder<T[Property]>;
  }
  
  /** Maps each property of T to a GameDataModifier */
  type ToGameDataModifiers<T> = {
    [Property in keyof T]: GameDataModifier<T[Property]>;
  }

  type GameDataPackageBuilderProperties = ToGameDataAdders<FlattenProps<Required<GameData>>> & ToGameDataModifiers<FlattenProps<Required<GameDataModifications>>>;

  interface GameDataPackageBuilder extends GameDataPackageBuilderProperties {
    skills: {
      add(_class: new (namespace: DataNamespace, game: Game) => T &
      Partial<PassiveAction> &
      Partial<ActiveAction>): void;
    }
  }
}

interface ClassHandle {
  new(...args: any[]): any;
  prototype: Record<string | number | symbol, any>;
}

type ClassMethod<C extends ClassHandle> = {[M in keyof C['prototype']]-?: C['prototype'][M] extends Function ? M : never}[keyof C['prototype']];

type ClassProperty<C extends ClassHandle> = {[P in keyof C['prototype']]-?: C['prototype'][P] extends Function ? never : P}[keyof C['prototype']];

type primitive = undefined | null | boolean | number | string | void;

declare function require(path: string): any;
