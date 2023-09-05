declare type ViewportZoomedEvent = import('pixi-viewport/dist/types').ZoomedEvent;
declare type ViewportMovedEvent = import('pixi-viewport/dist/types').MovedEvent;
declare const MAP_ASSET_VERSION = 14;
declare class WorldMapDisplayElement extends HTMLElement {
    _content: DocumentFragment;
    canvas: HTMLCanvasElement;
    topOverlay: HTMLDivElement;
    locationSearchBar: HTMLInputElement;
    clearLocationSearchBtn: HTMLButtonElement;
    searchResultsCont: HTMLDivElement;
    noSearchResult: HTMLParagraphElement;
    searchResults: HTMLUListElement;
    createMapBtn: HTMLButtonElement;
    createMapBtnText: HTMLSpanElement;
    createMapSpinner: HTMLDivElement;
    createMapInfo: HTMLSpanElement;
    poiDiscoveryBtn: HTMLButtonElement;
    poiDiscoveryImg: HTMLImageElement;
    mapFilterBtn: HTMLButtonElement;
    mapFilterCont: HTMLDivElement;
    mapFilters: WorldMapFilterElement[];
    bottomLeftOverlay: HTMLDivElement;
    loadScreen: HTMLDivElement;
    loadMessage: HTMLSpanElement;
    surveyOverview: SurveyOverviewElement;
    hexOverview: HexOverviewElement;
    zoomInButton: HTMLButtonElement;
    zoomOutButton: HTMLButtonElement;
    homeButton: HTMLButtonElement;
    accessibleOverlay: HTMLDivElement;
    accessibleInfo: HTMLDivElement;
    accessibleOptions: HTMLDivElement[];
    accessibleOptionsText: HTMLSpanElement[];
    get initialized(): boolean;
    /** If this menu has been initialized */
    _initialized: boolean;
    /** Loaded assets for use in the map */
    spriteSheets: Record<string, PIXI.Spritesheet>;
    /** Loaded assets from the currently visible map */
    mapAssets: Record<string, PIXI.Texture>;
    app: PIXI.Application;
    get ticker(): PIXI.Ticker;
    viewport: pixi_viewport.Viewport;
    readonly updateViewCoords: VoidFunction;
    /** Container for the layer underneath the HexDisplays */
    bgLayer: PIXI.Container;
    /** Container for the layer in the viewport containing HexDisplays, and Holes */
    hexLayer: PIXI.Container;
    /** Container for the layer in the viewport that draws player paths */
    pathLayer: PIXI.Container;
    /** Container for map markers, exists over the path layer */
    markerLayer: PIXI.Container;
    /** Stores the last coordinate that the viewport was moused down at */
    lastViewportCoords?: Point;
    /** The unscaled size that the viewport border should be in pixels. Updated on canvas resize */
    viewportBorderSize: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    /** Cache of Graphics of various hexes. Indexed by [borderColour, borderAlpha, bgColour, bgAlpha]*/
    hexGraphicCache: MultiMap<number, PIXI.Graphics>;
    playerPin: PIXI.Sprite;
    keyboardPanning: KeyboardPanning;
    hexPolygon: PIXI.Polygon;
    /** Map of q, r coords to HexDisplays */
    hexDisplays: Map<number, Map<number, HexDisplay>>;
    /** Graphics that show the holes in the map */
    holeGraphics: Map<WorldMapHole, PIXI.Graphics>;
    /** MultiMap of q, r coords to HexTooltipElements */
    hexTooltips: MultiMap<number, HexTooltipElement>;
    /** Point of interest markers */
    poiMarkers: Map<PointOfInterest, PIXI.Sprite>;
    /** Hexes that have queue markers in them */
    queueMarked: Set<HexDisplay>;
    /** All tooltips that have been assigned to display objects */
    tooltips: Map<PIXI.DisplayObject, MapTooltip>;
    /** The set of tooltips that are visible on the map. */
    visibleTooltips: Set<MapTooltip>;
    /** Readonly. Gets if tooltips are currently enabled. */
    get tooltipsEnabled(): boolean;
    /** If tooltips are enabled and should show when hovering over display objects */
    _tooltipsEnabled: boolean;
    /** Last hex that had a survey marker */
    lastSurveyedHex?: Hex;
    /** The last position the player was rendered on in the map */
    lastPlayerPosition: HexCoords;
    /** The last sight range that was rendered on the map */
    lastSightRange: number;
    /** The last survey range that was rendered on the map */
    lastSurveyRange: number;
    get lastDrawnMap(): WorldMap | undefined;
    _lastDrawnMap?: WorldMap;
    accessibleRect: PIXI.Graphics;
    accessibleModeActive: boolean;
    constructor();
    connectedCallback(): void;
    /** Initializes this menu, loading assets */
    init(): Promise<void>;
    getStandardTexture(name: SpriteNames): PIXI.Texture;
    checkInit(): void;
    viewportEventRemover?: VoidFunction;
    /** Computes the distance the viewport is from a point */
    getViewportDistance(point: PIXI.Point): Point;
    configureViewport(map: WorldMap): void;
    setViewportSize(): void;
    /** Computes the unscaled border region that the viewport should have */
    computeViewportBorders(): void;
    /** Configures the clamping of the viewport, based on scaling */
    setViewportClamp(): void;
    setAccessibleRectPos(): void;
    resizeListener?: VoidFunction;
    configureResizeListener(map: WorldMap): void;
    _currentLOD: WorldMapDisplayZoomLevel;
    onZoomChange(map: WorldMap): void;
    onShow(): Promise<void>;
    onHide(): void;
    showLoading(): void;
    hideLoading(): void;
    downloadAsJPEG(fileName: string): Promise<void>;
    showOverview(): void;
    hideOverview(): void;
    updateOverview(map: WorldMap, game: Game, cartography: Cartography): void;
    /** Updates the survey options on the hex-overview */
    updateOverviewSurvey(map: WorldMap, game: Game, cartography: Cartography): void;
    updateOverviewQuantities(): void;
    highlightHex(hex: Hex): void;
    unHighlightHex(hex: Hex): void;
    loadMapAssets(map: WorldMap): Promise<void>;
    /** The last range of tiles that were drawn */
    lastTileRange: {
        start: Point;
        end: Point;
    };
    bgTiles: Map<string, PIXI.Sprite>;
    computeTileRange(map: WorldMap): {
        start: Point;
        end: Point;
    };
    initBackgroundTiles(map: WorldMap): void;
    /** Redraws the Background tiles if the tile range changes */
    updateBackgroundTiles(map: WorldMap): void;
    /** Draws Background tiles that aren't currently visible */
    drawBackgroundTiles(map: WorldMap, tileRange: {
        start: Point;
        end: Point;
    }): void;
    /** Redraws the hex overlay */
    drawHexOverlay(map: WorldMap, cartography: Cartography): void;
    getHoleGraphic(hole: WorldMapHole): PIXI.Graphics;
    updatePOIMarkers(map: WorldMap, cartography: Cartography): void;
    updateQueueMarkers(queue: LinkQueue<Hex>): void;
    updateAutoSurveyMarkers(nextHexes: Hex[]): void;
    updateSurveyMarker(hex: Hex | undefined, timer: Timer, cartography: Cartography): void;
    updateSurveyRates(cartography: Cartography, hex: Hex): void;
    updateMasteryMarker(hex: Hex): void;
    updateAllMasteryMarkers(map: WorldMap): void;
    /** Loads the assets for a worldMap, then draws it */
    loadWorldMap(map: WorldMap, cartography: Cartography): Promise<void>;
    setCreateMapBtn(cartography: Cartography): void;
    /** Configures the size of the player pin based on map hex scaling */
    configurePlayerPin(map: WorldMap): void;
    /** Moves the player marker to the specified hex */
    movePlayerMarker(hex: Hex): void;
    /** Toggles the visibility of the player location pin */
    togglePlayerMarker(visible: boolean): void;
    /** Toggles the visibility of the hex grid (only the lines) */
    updateAllHexBackgrounds(map: WorldMap): void;
    /** Updates the hex progress of all the hexes currently in sight range */
    updateAllHexProgress(map: WorldMap, cartography: Cartography): void;
    /**
     * Instantly moves the viewport to the center of a hex at given zoom level
     * @param hex The hex to move the center of the viewport to
     * @param zoom The new zoom level
     */
    moveToHex(hex: Hex, zoom?: number): void;
    /**
     * Animates the viewport to move to the center of a hex at a given zoom level
     * @param hex The hex to move the viewport to
     * @param newZoom The zoomlevel to have after moving
     * @param travelSpeed World Units to travel per second
     * @param zoomDoubleTime Time in [s] for each zoom doubling
     */
    animateMoveToHex(hex: Hex, newZoom: number, travelSpeed?: number, zoomDoubleTime?: number): void;
    updateHexPath(map: WorldMap): void;
    removeHexPath(): void;
    drawHexPath(map: WorldMap, path: Hex[]): void;
    drawPathArrow(next: Hex, prev: Hex): void;
    drawFastTravelPath(next: Hex, prev: Hex): void;
    updateVision(map: WorldMap, cartography: Cartography): void;
    updateHexBackground(map: WorldMap, hex: Hex): void;
    /** Updates the visibility of a hole based on the hexes around it */
    updateHole(hole: WorldMapHole): void;
    updateHexProgress(hex: Hex, cartography: Cartography): void;
    clearPOIMarkers(): void;
    updatePOIMarker(map: WorldMap, poi: PointOfInterest, cartography: Cartography): void;
    drawPOIMarker(poi: PointOfInterest, texture: PIXI.Texture): void;
    changePoiMarkerTexture(marker: PIXI.Sprite, poi: PointOfInterest, texture: PIXI.Texture): void;
    removePOIMarker(poi: PointOfInterest): void;
    getHexBorderColour(map: WorldMap, hex: Hex): number;
    getHexBorderAlpha(hex: Hex): number;
    getHexBgAlpha(hex: Hex): number;
    getHexBGColour(map: WorldMap, hex: Hex): number;
    getHexDisplay(coords: HexCoords): HexDisplay | undefined;
    /**
     * Gets a hex graphics with specified style
     * @param border Hex colour of border
     * @param bg Hex colour of background
     * @param bgAlpha Alpha value of background
     * @returns
     */
    getHexGraphics(border: number, borderAlpha: number, bg: number, bgAlpha: number): PIXI.Graphics;
    createHexGraphics(border: number, borderAlpha: number, bg: number, bgAlpha: number): PIXI.Graphics;
    /**
     * Binds a tooltip to a display object
     * @param displayObj The object to bind a tooltip to.
     * @param props Standard Tippy properties for the tooltip
     * @param rectCalculator Optional. Custom global bounds calculator for the display object. Used to determine the bounding rectangle for the tooltip. If unset bounds of display object will be used
     * @returns
     */
    bindTooltip(displayObj: PIXI.DisplayObject, props: Partial<Omit<TippyProps, 'getReferenceClientRect' | 'trigger'>>, rectCalculator?: () => PIXI.Rectangle): MapTooltip;
    showTooltip(mapTooltip: MapTooltip): void;
    hideTooltip(mapTooltip: MapTooltip): void;
    /** Unbinds a tooltip from a display object */
    unbindTooltip(displayObj: PIXI.DisplayObject): void;
    getTooltipUnderPointer(): MapTooltip | undefined;
    showTooltipsOnMove(): void;
    /** Performs hit detection, and shows the tooltip for the DisplayObject currently under the cursor (if any) */
    showTooltipUnderPointer(): void;
    /** Disables tooltips, and hides the currently open one (if any) */
    disableTooltips(): void;
    /** Enables tooltips, and performs hit detection to show the appropriate tooltip the pointer is over (if any) */
    enableTooltips(): void;
    viewCoordsChanged(): boolean;
    /** Binds a tap event to a display object. Prevents accidental taps that result from dragging the viewport */
    bindTapEvent(displayObj: PIXI.DisplayObject, callback: VoidFunction): void;
    getTooltipClientRect(mapTooltip: MapTooltip): DOMRect;
    setTooltipClientRect(mapTooltip: MapTooltip): void;
    onPanKeyDown(dir: MovementDirection): void;
    onPanKeyUp(dir: MovementDirection): void;
    onZoomInDown(map: WorldMap): void;
    onZoomOutDown(map: WorldMap): void;
    clearLocationSearch(): void;
    onLocationSearchChange(map: WorldMap, cartography: Cartography): void;
    populateFilterSettings(map: WorldMap, cartography: Cartography): void;
    /** Updates the spinner and progress in the world map spinner */
    updateSpinner(cartography: Cartography): void;
    /** Gets the hexes that are within the accessibility rectangle */
    getAccessibleHexes(map: WorldMap): Hex[];
    visibleAccessibleHexes: Hex[];
    accessibleHexPage: number;
    showAccessibleInfo(message: string): void;
    updateAccessibleMoveAlert(originalPos: PIXI.Point): void;
    updateAccessibleZoomAlert(originalScale: PIXI.Point): void;
    updateAccessibleMenu(map: WorldMap): void;
    hasNextAccessiblePage(currentPage: number): boolean;
    showAccessibleHexPage(page: number): void;
    onCanvasKeydown(e: KeyboardEvent, cartography: Cartography): void;
    /** Updates the visibility and image of the POI discovery button */
    updatePOIDiscoveryBtn(nextPOI: PointOfInterest | undefined): void;
    static readonly zoomLevels: WorldMapDisplayZoomLevel[];
    /** Configures the dimensions of the region in which accessibility should be enabled */
    readonly accessibilityRectSize: {
        width: number;
        height: number;
    };
}
interface WorldMapDisplayZoomLevel {
    /** If the XP Progress displays should show their text at this zoom level */
    xpProgressText: boolean;
    /** Width in [px] of the hex display borders at this zoom level */
    hexBorderWidth: number;
    /** Minimum viewport scaling this zoomLevel is active on, before it transitions to the next */
    minScale: number;
}
declare let soonTM: boolean;
declare function onYouTubeIframeAPIReady(): void;
interface MapTooltip {
    eventUnbinder: VoidFunction;
    rectCalculator?: () => PIXI.Rectangle;
    clientRect: DOMRect;
    /** DisplayObject that the tooltip is bound to */
    readonly displayObj: PIXI.DisplayObject;
    /** tippy instance */
    readonly tooltip: TippyTooltip;
}
declare const enum HexDisplayZIndex {
    AnimatedBorder = 0,
    XPProgress = 1,
    QueueMarker = 2,
    SurveyMarker = 3,
    MasteryMarker = 4,
    CoordText = 5
}
declare class HexDisplay extends PIXI.Container {
    worldMap: WorldMapDisplayElement;
    xpProgress?: XPProgressDisplay;
    queueMarker?: QueueMarker;
    surveyMarker?: ImageProgressBar;
    animatedBorder?: HexAnimatedBorder;
    masteryMarker?: PIXI.Sprite;
    get hasAnimatedBorder(): boolean;
    constructor(worldMap: WorldMapDisplayElement, origin: Point, template: PIXI.Graphics);
    /** Swaps the hex graphics with the provided */
    swapHex(template: PIXI.Graphics): void;
    setHexColour(border: number, borderAlpha: number, bg: number, bgAlpha: number): void;
    addCoords(hex: Hex, style: PIXI.TextStyle): void;
    updateXPProgress(hex: Hex): void;
    addXPProgress(hex: Hex): void;
    removeXPProgress(): void;
    toggleXPProgressText(visible: boolean): void;
    addUpdateQueueMark(hex: Hex, position: number): void;
    removeQueueMarker(): void;
    addUpdateSurveyMarker(hex: Hex, timer: Timer): void;
    removeSurveyMarker(): void;
    addAnimatedBorder(hex: Hex, colour: number): void;
    removeAnimatedBorder(): void;
    addMasteryMarker(hex: Hex): void;
    removeMasteryMarker(): void;
}
declare type HexAnimatedBorderOptions = {
    /** Colour of the border */
    borderColour: number;
    /** Ratio of border thickness from center of hex. Defaults to 0.05 */
    thicknessRatio: number;
    /** Time in [ms] to complete a single animation. Defaults to 1500 */
    animationTime: number;
};
declare class HexAnimatedBorder extends PIXI.Container {
    borderSegments: PIXI.Graphics[];
    spriteMasks: PIXI.Graphics[];
    segmentSprites: PIXI.Sprite[];
    segTimes: {
        start: number;
        end: number;
        total: number;
        between: boolean;
    }[];
    spriteVectors: {
        origin: Point;
        dir: Point;
    }[];
    borderDistance: number;
    /** Position of the center of the animation around the border */
    progress: number;
    ticker: PIXI.Ticker;
    updateFn: (dt: number) => void;
    opts: HexAnimatedBorderOptions;
    constructor(map: WorldMapDisplayElement, hex: Hex, options: Partial<HexAnimatedBorderOptions>);
    update(dT: number): void;
    destroy(options?: boolean | PIXI.IDestroyOptions | undefined): void;
    static readonly DEFAULT_OPTIONS: HexAnimatedBorderOptions;
}
declare type XPProgressOptions = {
    /** Width of the progress element */
    width: number;
    /** Height of the progress element (including text) */
    height: number;
    /** Colour of the progress bar's outline */
    outlineColour: number;
    /** Colour of the progress bar's outline bg */
    bgColour: number;
    /** Colour of the progress bar fill bg */
    fillColour: number;
    /** Percent progress of bar */
    progressPercent: number;
};
declare class XPProgressDisplay extends PIXI.Container {
    /** Container for the whole progress bar */
    _barCont: PIXI.Container;
    /** Background rectangle of progress */
    _background: PIXI.Graphics;
    /** Background rectangle of progress top text */
    _topTextBackground: PIXI.Graphics;
    _topText: PIXI.Text;
    /** Background rectangle of progress bottom text */
    _botTextBackground: PIXI.Graphics;
    _botText: PIXI.Text;
    /** Progress bar outline, bar is overlaid on top */
    _outline: PIXI.Graphics;
    /** Progress bar rectangle */
    _progressBar: PIXI.Graphics;
    set outlineColour(colour: number);
    get outlineColour(): number;
    _outlineColour: number;
    set bgColour(colour: number);
    get bgColour(): number;
    _bgColour: number;
    set fillColour(colour: number);
    get fillColour(): number;
    _fillColour: number;
    _barWidth: number;
    _barHeight: number;
    set progressPercent(percent: number);
    get progressPercent(): number;
    _progressPerc: number;
    set topText(text: string);
    set botText(text: string);
    _thirdHeight: number;
    constructor(options: Partial<XPProgressOptions>);
    toggleText(visible: boolean): void;
    /** Adjusts the scaling of the top text size and background */
    scaleTopText(): void;
    /** Adjusts the scaling of the top text size and background */
    scaleBotText(): void;
    scaleText(text: PIXI.Text, bg: PIXI.Graphics): void;
    drawBackground(): void;
    drawOutline(): void;
    drawProgress(): void;
    updateProgress(): void;
    static readonly CONFIG: {
        /** Ratio between 1/3rd of the displays height and text height */
        textHeightRatio: number;
        /** Ratio between the text background width vs the text width */
        bgWidthRatio: number;
        /** Ratio between the text background height vs the text height */
        bgHeightRatio: number;
        /** Configures the width of the text background geometry */
        bgWidth: number;
        /** Configures the height of the text background geometry */
        bgHeight: number;
        /** Configures the border radius of the text background geometry */
        bgRadius: number;
    };
    static DEFAULT_OPTIONS: Readonly<XPProgressOptions>;
    static drawTextBG(): PIXI.Graphics;
    static TEXT_BG_GRAPHICS: PIXI.Graphics;
}
declare class QueueMarker extends PIXI.Container {
    icon: PIXI.Sprite;
    circle: PIXI.Graphics;
    text: PIXI.Text;
    constructor(hex: Hex, position: number, texture: PIXI.Texture);
    updatePosition(position: number): void;
    static CONFIG: {
        imageFilters: PIXI.ColorMatrixFilter[];
        iconSizeRatio: number;
        fontSizeRatio: number;
        circleRadiusRatio: number;
        numberYOffsetRatio: number;
        numberXOffsetRatio: number;
    };
}
declare const enum RectVertex {
    BottomRight = 0,
    BottomLeft = 1,
    TopLeft = 2,
    TopRight = 3
}
interface ImageProgressBarOpts {
    /** Filters applied to the background image of the progress bar. Defaults to desaturated version of provided texture. */
    bgFilters: PIXI.Filter[];
    /** Fill angle of the background image in degrees, defaults to 0 */
    fillAngle: number;
    /** Starting ratio of the fill, defaults to 0. [0,1) */
    startRatio: number;
    /** Ending ratio of the fill, defaults to 1. (0,1] */
    endRatio: number;
}
declare class ImageProgressBar extends PIXI.Container {
    texture: PIXI.Texture;
    ticker: PIXI.Ticker;
    bgSprite: PIXI.Sprite;
    fillSprite: PIXI.Sprite;
    fillMask: PIXI.Graphics;
    tickerFn?: (dt: number) => void;
    fillOrigin: Point;
    fillType: 'vertical' | 'horizontal' | 'triangle';
    fillWidth: number;
    fillHeight: number;
    startRatio: number;
    ratioSlope: number;
    constructor(texture: PIXI.Texture, ticker: PIXI.Ticker, options: Partial<ImageProgressBarOpts>);
    destroy(options?: boolean | PIXI.IDestroyOptions | undefined): void;
    updateFill(ratio: number): void;
    toggleMask(): void;
    /**
     *
     * @param interval Interval of progress in ms
     * @param startRatio Starting percent of the progress
     */
    animateOnce(interval: number, startRatio?: number): void;
    animateLoop(interval: number, startRatio?: number): void;
    stopAnimation(): void;
    animateFromTimer(timer: Timer): void;
    static DEFAULT_OPTIONS: Readonly<ImageProgressBarOpts>;
}
interface IModTextureOptions extends PIXI.IBaseTextureOptions {
    modContext: Modding.ModContext;
}
declare const imageExtensions: string[];
declare const basisExtensions: string[];
declare const modAssetPath: string;
/** Custom LoaderParser for modded PIXI.js assets. Instantiates them directly from Blob */
declare const loadModAssets: PIXI.LoaderParser<PIXI.Texture<PIXI.Resource> | PIXI.Texture<PIXI.Resource>[], IModTextureOptions, Record<string, any>>;
declare function drawBoundingBox(object: PIXI.DisplayObject, colour: number): PIXI.Graphics | undefined;
declare type MovementDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
interface KeyboardPanningOptions {
    /** Initial velocity given on the first press of a movement direction in pix/s
     *  @default 500
     */
    impulseVelocity?: number;
    /** Max Velocity of the follower in pix/s
     *  @default 2000
     */
    maxVelocity?: number;
    /** Acceleration of the follower in pix/s^2
     * @default 1000
     */
    acceleration?: number;
    /** Decceleration of the follower in pix/s^2
     * @default 2000
     */
    deceleration?: number;
}
/** pixi_viewport Plugin used to implement keyboard panning */
declare class KeyboardPanning extends pixi_viewport.Plugin {
    /** Velocity of the follower in pix/s */
    _velocity: Point;
    _options: Required<KeyboardPanningOptions>;
    get isMoving(): boolean;
    get isAccelerating(): boolean;
    _moveCount: number;
    _accelDirections: Record<MovementDirection, boolean>;
    constructor(parent: pixi_viewport.Viewport, options?: KeyboardPanningOptions);
    setMove(dir: MovementDirection): void;
    removeMove(dir: MovementDirection): void;
    update(elapsed: number): void;
    static DEFAULT_OPTIONS: Required<KeyboardPanningOptions>;
}
declare class TooltipDisabler extends pixi_viewport.Plugin {
    mapDisplay: WorldMapDisplayElement;
    _isDragging: boolean;
    constructor(parent: pixi_viewport.Viewport, mapDisplay: WorldMapDisplayElement);
    up(event: PIXI.FederatedPointerEvent): boolean;
}
declare class HexOverviewElement extends HTMLElement {
    _content: DocumentFragment;
    hexCoords: HTMLSpanElement;
    closeBtn: HTMLButtonElement;
    poiInfo: HTMLDivElement;
    poiName: HTMLHeadingElement;
    poiImage: HTMLImageElement;
    poiDiscoveryBtn: HTMLButtonElement;
    activeModifiersCont: HTMLDivElement;
    activeModifiersList: HTMLDivElement;
    requirements: HTMLDivElement;
    requirementList: HTMLUListElement;
    fastTravel: HTMLDivElement;
    fastTravelInfo: HTMLParagraphElement;
    fastTravelUnlockCost: HTMLDivElement;
    fastTravelUnlockIcons: QtyIcon[];
    fastTravelUnlockBtn: HTMLButtonElement;
    travelCost: HTMLDivElement;
    travelCostList: HTMLDivElement;
    travelCostIcons: QtyIcon[];
    interactions: HTMLDivElement;
    queueSurveyBtn: HTMLButtonElement;
    autoSurveyBtn: HTMLButtonElement;
    travelBtn: HTMLButtonElement;
    portalBtn: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    displayHex(hex: Hex, game: Game, cartography: Cartography): void;
    updateTravelCosts(costs: Costs, game: Game): void;
    updateFastTravel(hex: Hex, game: Game, cartography: Cartography): void;
    /** Updates the survey buttons, depending on cartography state */
    updateSurveyButtons(hex: Hex, game: Game, cartography: Cartography): void;
    /** Updates the text and colour of the queue button depending on current cartography state */
    updateQueueButtonText(hex: Hex, cartography: Cartography): void;
    /** Updates the text and colour of the auto-survey button based on cartography state */
    updateAutoSurveyButtonText(hex: Hex, cartography: Cartography): void;
    /** Updates the quantites of bank items and currencies */
    updateQuantities(): void;
    showPoiInfo(poi: PointOfInterest, cartography: Cartography): void;
    showUnknownPoi(): void;
}
declare class SurveyOverviewElement extends HTMLElement {
    _content: DocumentFragment;
    goToHexButton: HTMLButtonElement;
    hexName: HTMLSpanElement;
    progressBar: ProgressBar;
    xpIcon: XPIcon;
    intervalIcon: IntervalIcon;
    constructor();
    connectedCallback(): void;
    setHex(cartography: Cartography, hex: Hex): void;
    /** Updates the xp and interval for surveying a hex */
    updateRates(cartography: Cartography, hex: Hex): void;
}
declare class WorldMapFilterElement extends HTMLElement {
    _content: DocumentFragment;
    checkbox: HTMLInputElement;
    icon: HTMLImageElement;
    name: HTMLSpanElement;
    label: HTMLLabelElement;
    constructor();
    connectedCallback(): void;
    /**
     *
     * @param icon URI of icon to display
     * @param text Text of icon to display, should be localized
     * @param callback Callback function when checkbox value changes
     * @param id ID to use for the checkbox and label
     */
    setFilter(icon: string, text: string, callback: (newValue: boolean) => void, id: string): void;
    /** Updates if the checkbox should be currently checked */
    updateChecked(isChecked: boolean): void;
}
declare class ImageSearchResultElement extends HTMLElement {
    _content: DocumentFragment;
    /** LI element to bind click events to */
    item: HTMLLIElement;
    /** Image displayed in the search result */
    image: HTMLImageElement;
    /** Text displayed next to the image */
    text: HTMLSpanElement;
    constructor();
    connectedCallback(): void;
    setActive(): void;
    setInactive(): void;
}
declare class PoiSearchResultElement extends HTMLElement {
    _content: DocumentFragment;
    item: HTMLLIElement;
    image: HTMLImageElement;
    text: HTMLSpanElement;
    poiName: HTMLDivElement;
    activeModifiers: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setCallback(callback: VoidFunction): void;
    setPoi(poi: PointOfInterest, cartography: Cartography): void;
}
declare class CreateMapMenuElement extends HTMLElement {
    _content: DocumentFragment;
    digSiteSelectToggle: HTMLButtonElement;
    digSiteSelect: DigSiteSelectMenuElement;
    paperMakingMenu: PaperMakingMenuElement;
    mapUpgradeMenu: MapUpgradeMenuElement;
    mapRefinementMenu: MapRefinementMenuElement;
    constructor();
    connectedCallback(): void;
    toggleDigSiteSelect(): void;
    /** Initializes the menu, assigning callbacks and generating menu elements */
    init(archaeology: Archaeology, cartography: Cartography): void;
    updateUpgradeProgress(map: DigSiteMap): void;
}
declare class DigSiteSelectMenuElement extends HTMLElement {
    _content: DocumentFragment;
    digSiteSearchBar: HTMLInputElement;
    clearDigSiteSearchBtn: HTMLButtonElement;
    noDigSiteMessage: HTMLParagraphElement;
    digSiteContainer: HTMLUListElement;
    digSiteOptions: Map<ArchaeologyDigSite, ImageSearchResultElement>;
    /** Currently selected image search result */
    active?: ImageSearchResultElement;
    constructor();
    connectedCallback(): void;
    /** Initializes the menu, assigning callbacks and generating digsites */
    init(archaeology: Archaeology, cartography: Cartography): void;
    /** Callback function for when the clear search button is clicked */
    clearSearch(): void;
    /** Updates the dig sites that are currently displayed based on the current search query and if they are discovered */
    updateDigSites(): void;
    /** Sets the digsite to being currently selected */
    setActiveDigSite(digSite: ArchaeologyDigSite): void;
    /** Sets the menu to no digsite being selected */
    setInactiveDigSite(): void;
}
declare class PaperMakingMenuElement extends HTMLElement {
    _content: DocumentFragment;
    recipeSelectButton: HTMLButtonElement;
    recipeOptions: HTMLDivElement;
    recipeInfo: HTMLDivElement;
    requires: RequiresBox;
    haves: HavesBox;
    produces: ProducesBox;
    producesHaves: HavesBox;
    grants: GrantsBox;
    createButton: HTMLButtonElement;
    intervalIcon: IntervalIcon;
    doublingIcon: DoublingIcon;
    preserveIcon: PreservationIcon;
    progressBar: ProgressBar;
    recipeCostIcons: QtyIcon[];
    constructor();
    connectedCallback(): void;
    /** Initializes the menu, assigning callbacks and generating recipe select */
    init(cartography: Cartography): void;
    /** Adjust UI based on language and device */
    setLangOverrides(): void;
    /** Sets the currently selected recipe */
    setSelectedRecipe(cartography: Cartography, recipe: PaperMakingRecipe): void;
    unsetRecipe(): void;
    updateQuantities(): void;
    updateRates(cartography: Cartography, recipe: PaperMakingRecipe): void;
    updateRecipeOptions(): void;
}
declare class DigSiteMapInfoElement extends HTMLElement {
    _content: DocumentFragment;
    noMapContainer: HTMLDivElement;
    infoContainer: HTMLDivElement;
    mapTier: HTMLSpanElement;
    mapUpgradeProgress: HTMLSpanElement;
    mapCharges: HTMLSpanElement;
    artefactValueTiny: HTMLTableCellElement;
    artefactValueSmall: HTMLTableCellElement;
    artefactValueMedium: HTMLTableCellElement;
    artefactValueLarge: HTMLTableCellElement;
    constructor();
    connectedCallback(): void;
    setMap(map: DigSiteMap): void;
    /** Sets the map level, charges and artefact values */
    updateValues(map: DigSiteMap): void;
    /** Updates the current progress of a maps upgrade actions */
    updateUpgradeProgress(map: DigSiteMap): void;
    setUnselected(): void;
}
declare class MapUpgradeMenuElement extends HTMLElement {
    _content: DocumentFragment;
    digSiteName: HTMLHeadingElement;
    digSiteImage: HTMLImageElement;
    selectMapIcons: {
        img: HTMLImageElement;
        tooltip: TippyTooltip;
    }[];
    createMapButton: HTMLButtonElement;
    mapCreationCosts: HTMLDivElement;
    creationCostIcons: QtyIcon[];
    mapInfo: DigSiteMapInfoElement;
    upgradeRequires: RequiresBox;
    upgradeHaves: HavesBox;
    grants: GrantsBox;
    upgradeButton: HTMLButtonElement;
    intervalIcon: IntervalIcon;
    preserveIcon: PreservationIcon;
    progressBar: ProgressBar;
    constructor();
    connectedCallback(): void;
    /** Initializes the menu, assigning callback functions */
    init(cartography: Cartography): void;
    unsetDigSite(): void;
    setDigSite(digSite: ArchaeologyDigSite, cartography: Cartography): void;
    unsetDigSiteMap(): void;
    /** Sets the menu for a given map */
    setDigSiteMap(map: DigSiteMap, cartography: Cartography): void;
    updateMapSelectButtons(digSite: ArchaeologyDigSite, cartography: Cartography): void;
    /** Updates the cost to perform a single upgrade action */
    updateUpgradeCosts(map: DigSiteMap, cartography: Cartography): void;
    /** Updates the cost to create a new map */
    updateMapCreationCost(digSite: ArchaeologyDigSite): void;
    updateQuantities(): void;
    /** Updates the interval and preservation chance when modifiers change */
    updateRates(cartography: Cartography, map: DigSiteMap): void;
}
declare class MapRefinementMenuElement extends HTMLElement {
    _content: DocumentFragment;
    digSiteName: HTMLHeadingElement;
    digSiteImage: HTMLImageElement;
    selectMapContainer: HTMLDivElement;
    refinementInfoContainer: HTMLDivElement;
    selectMapImages: HTMLImageElement[];
    mapInfo: DigSiteMapInfoElement;
    refinementCount: HTMLSpanElement;
    refinementContainer: HTMLUListElement;
    refinements: HTMLLIElement[];
    newContainer: HTMLDivElement;
    costsContainer: HTMLDivElement;
    refinementCostIcons: QtyIcon[];
    refinementSelectContainer: HTMLDivElement;
    refinementSelects: HTMLButtonElement[];
    constructor();
    connectedCallback(): void;
    /** Sets the menu to display no dig site */
    unsetDigSite(): void;
    /** Updates the map selection for a given digsite */
    setDigSite(digSite: ArchaeologyDigSite, cartography: Cartography): void;
    unsetDigSiteMap(): void;
    setDigSiteMap(map: DigSiteMap, cartography: Cartography): void;
    /** Updates the current refinements for the selected map */
    updateRefinements(map: DigSiteMap): void;
    /** Updates the refinement selection for the given map */
    updateNewRefinement(map: DigSiteMap, cartography: Cartography): void;
    updateQuantities(): void;
}
declare class HexTooltipElement extends HTMLElement {
    _content: DocumentFragment;
    coords: HTMLSpanElement;
    xp: HTMLSpanElement;
    level: HTMLSpanElement;
    skillXP: HTMLSpanElement;
    poiContainer: HTMLDivElement;
    reqsContainer: HTMLDivElement;
    poiMedia: HTMLImageElement;
    poiTitle: HTMLSpanElement;
    poiName: HTMLSpanElement;
    travelContainer: HTMLDivElement;
    travelInfo: HTMLHeadingElement;
    travelCosts: HTMLDivElement;
    costElements: {
        cont: HTMLDivElement;
        img: HTMLImageElement;
        text: HTMLSpanElement;
    }[];
    constructor();
    connectedCallback(): void;
    updateContents(hex: Hex, cartography: Cartography): void;
    setHex(hex: Hex, cartography: Cartography): void;
    setRequirements(hex: Hex): void;
    setPOI(poi: PointOfInterest): void;
    hidePOI(): void;
    showTravelHere(): void;
    showTravelNoPath(): void;
    showTravelCosts(costs: Costs): void;
    addCostElement(media: string, text: string, met: boolean, i: number): void;
    hideTravelCosts(): void;
    setTitle(text: string): void;
    static showAxialCoords: boolean;
}
declare class MapMasteryMenuElement extends HTMLElement {
    _content: DocumentFragment;
    mapTitle: HTMLHeadingElement;
    masteryContainer: HTMLDivElement;
    masteryBonuses: MapMasteryBonusElement[];
    constructor();
    connectedCallback(): void;
    setMap(map: WorldMap): void;
}
declare class MapMasteryBonusElement extends HTMLElement {
    _content: DocumentFragment;
    hexCount: HTMLHeadingElement;
    modifierContainer: HTMLDivElement;
    modifierList: HTMLDivElement;
    rewardContainer: HTMLDivElement;
    rewardList: HTMLDivElement;
    constructor();
    connectedCallback(): void;
    setBonus(bonus: WorldMapMasteryBonus): void;
    createReward(media: string, quantity: string, name: string): void;
}
declare class PoiDiscoveryCostsElement extends HTMLElement {
    _content: DocumentFragment;
    infoText: HTMLHeadingElement;
    costsBox: RequiresBox;
    havesBox: HavesBox;
    constructor();
    connectedCallback(): void;
    setCosts(costs: Costs): void;
    setInfoText(modalState: DiscoveryModalState, isDigSite: boolean): void;
    destroyIcons(): void;
    disconnectedCallback(): void;
}
