interface PointData {
    x: number;
    y: number;
}
declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static fromData(data: PointData): Point;
    static add(a: Point, b: Point): Point;
    static sub(a: Point, b: Point): Point;
    static divide(a: Point, k: number): Point;
    static mult(a: Point, k: number): Point;
    static average(a: Point, b: Point): Point;
    static distance(a: Point, b: Point): number;
    static originDistance(a: Point): number;
    /** Tests if the coordinates of the points match */
    static isEqual(a: Point, b: Point): boolean;
    /**
     * Returns the angle of the vector formed between a and b in radians
     * @param a Starting point of the vector
     * @param b End point of the vector
     */
    static vecAngle(a: Point, b: Point): number;
    static toPIXI(a: Point): PIXI.Point;
}
interface HexCoordData {
    q: number;
    r: number;
}
/** Indexes for HexCoords.axialDirVectors */
declare const enum HexDirVec {
    SouthEast = 0,
    NorthEast = 1,
    North = 2,
    NorthWest = 3,
    SouthWest = 4,
    South = 5
}
/** Angle ratios for Flat Hex Vertices */
declare const enum HexVertex {
    East = 0,
    SouthEast = 1,
    SouthWest = 2,
    West = 3,
    NorthWest = 4,
    NorthEast = 5
}
declare class OffSetHexCoords {
    get col(): number;
    get row(): number;
    _col: number;
    _row: number;
    constructor(col: number, row: number);
    /** Formats these coordinates as Alphabetic coordinates */
    toAlphaCoords(): string;
    /** Converts to axial coords as if this were odd-q */
    oddq_to_axial(): HexCoords;
    /** Converts to axial coords as if this were even-q */
    evenq_to_axial(): HexCoords;
    static fromAlphaCoords(alphaCoords: string): OffSetHexCoords;
}
declare class HexCoords {
    get q(): number;
    get r(): number;
    get s(): number;
    _q: number;
    _r: number;
    constructor(q: number, r: number);
    isEqual(a: HexCoords): boolean;
    /** Converts to Odd Q Offset Coordinates */
    to_oddq(): OffSetHexCoords;
    /** Converts to Even Q Offset Coordinates */
    to_evenq(): OffSetHexCoords;
    static add(a: HexCoords, b: HexCoords): HexCoords;
    static subtract(a: HexCoords, b: HexCoords): HexCoords;
    static multiply(a: HexCoords, k: number): HexCoords;
    /** Returns the hex distance between two coordinates */
    static distance(a: HexCoords, b: HexCoords): number;
    /** Rounds fractional hex coordinates to integer coordinates */
    static round(fract: HexCoords): HexCoords;
    static fromData(data: HexCoordData): HexCoords;
    static axialDirVectors: HexCoords[];
    static axialNeighbor(hex: HexCoords, dir: number): HexCoords;
    static getNextInSpiral(current: HexCoords, center: HexCoords): HexCoords;
    static readonly PI_3: number;
    static readonly SQRT3: number;
}
interface PointOfInterestData extends IDData {
    /** Coordinate location of POI */
    coords: HexCoordData;
    /** English display name of POI */
    name: string;
    /** English description of POI */
    description: string;
    /** URI of POIs image (unsure if this is to be displayed on the map, or the hex overview) */
    media: string;
    /** Modifiers provided to the player if they are currently located at the hex */
    activeModifiers?: PlayerModifierData;
    /** Determines if the hex can be fast travelled to */
    fastTravel?: {
        groupID: string;
        unlockCosts?: FixedCostsData;
    };
    /** Optional. GP, Slayer Coins or Items given when the POI is discovered */
    discoveryRewards?: FixedCostsData;
    /** Optional. Temporary modifiers given to the player, that last a number of moves on the world map, when the POI is discovered */
    discoveryModifiers?: {
        /** The number of moves on the world map the player must make until these modifiers expire */
        moves: number;
        /** The modifiers that are temporarily given to the player */
        modifiers: PlayerModifierData;
    };
    /** Optional. If present, the POI will be hidden from the player until they meet the requirements and are located at the hex and are wearing the specified items. */
    hidden?: {
        /** Requirements the player must meet before discovering this hidden POI */
        requirements: AnyRequirementData[];
        /** IDs of the equipment items the player must wear to discover this hidden POI */
        itemsWorn: string[];
        /** If a marker should be shown on the map when the requirements are met */
        showMarker: boolean;
    };
}
interface FastTravelGroupData extends IDData {
    name: string;
    media: string;
}
declare class FastTravelGroup extends NamespacedObject {
    map: WorldMap;
    get name(): string;
    get media(): string;
    get assetURL(): string;
    _name: string;
    _media: string;
    readonly pois: [PointOfInterest, POIFastTravel][];
    constructor(namespace: DataNamespace, data: FastTravelGroupData, map: WorldMap);
}
declare type POIFastTravel = {
    group: FastTravelGroup;
    unlockCosts?: FixedCosts;
    isUnlocked: boolean;
};
interface POIDiscoveryModifiers {
    moves: number;
    modifiers: PlayerModifierObject;
    /** Save State Property. Stores the number of moves remaining until these modifiers expire */
    movesLeft: number;
}
interface POIHidden {
    /** Requirements the player must meet to discover this POI */
    requirements: AnyRequirement[];
    /** Equipment the player must wear to discover this POI */
    itemsWorn: EquipmentItem[];
    /** If a marker should be shown on the map when the requirements are met */
    showMarker: boolean;
}
declare class PointOfInterest extends NamespacedObject implements SoftDataDependant<PointOfInterestData> {
    /** Localized name of POI */
    get name(): string;
    /** Localized text that should be indexed when searching for this POI */
    get searchText(): string;
    /** Localized description of POI */
    get description(): string;
    /** Full URI for POI's image */
    get media(): string;
    /** English name */
    _name: string;
    /** English description */
    _description: string;
    /** Base URI for POI */
    _media: string;
    /** Optional. If present the player gains these modifiers when they are located at the hex */
    activeModifiers?: PlayerModifierObject;
    /** Optional. If present the player may travel between other POIs with the same fast travel group for free */
    fastTravel?: POIFastTravel;
    /** Optional. If present the player is given these when the POI is discovered */
    discoveryRewards?: FixedCosts;
    /** Optional. If present the player is given "modifiers" until they move "moves" times on the map when the POI is discovered */
    discoveryModifiers?: POIDiscoveryModifiers;
    hidden?: POIHidden;
    /** Save state property. If the point of interest has been discovered. */
    isDiscovered: boolean;
    /** Save state property. The order in which this POI was fully surveyed, used to assemble the queue of discovery modals. -1 indicates the poi should not be queued. */
    surveyOrder: number;
    /** Hex that this POI is located at. */
    hex: Hex;
    constructor(namespace: DataNamespace, data: PointOfInterestData, game: Game, map: WorldMap);
    registerSoftDependencies(data: PointOfInterestData, game: Game): void;
}
interface OtherPOIData extends PointOfInterestData {
    type: 'Other';
}
interface DigSitePOIData extends PointOfInterestData {
    type: 'DigSite';
    /** ID of DigSite object from archaeology */
    digSiteID: string;
}
declare class DigSitePOI extends PointOfInterest {
    get searchText(): string;
    /** Digsite from archaeology associated with this POI */
    digSite: ArchaeologyDigSite;
    constructor(namespace: DataNamespace, data: DigSitePOIData, game: Game, map: WorldMap);
}
interface WatchtowerData extends PointOfInterestData {
    type: 'Watchtower';
    towerRange: number;
}
declare class Watchtower extends PointOfInterest {
    get searchText(): string;
    towerRange: number;
    constructor(namespace: DataNamespace, data: WatchtowerData, game: Game, map: WorldMap);
}
interface WorldMapPortalData {
    portalA: PortalPOIData;
    portalB: PortalPOIData;
}
interface PortalPOIData extends PointOfInterestData {
    originWorldMap: string;
}
declare class PortalPOI extends PointOfInterest {
    /** Hex in a different world map the portal travels to */
    destination: Hex;
    constructor(namespace: DataNamespace, data: PortalPOIData, game: Game, map: WorldMap, destination: Hex);
}
declare type AnyPOIData = OtherPOIData | DigSitePOIData | WatchtowerData;
interface HexData {
    /** Axial coordinates of the hex */
    coordinates: HexCoordData;
    /** Maximum surveying level of the hex */
    maxSurveyLevel: number;
    /** Maximum mastery level of the hex */
    maxMasteryLevel: number;
    /** Requirements to survey the hex */
    requirements: AnyRequirementData[];
    /** Costs required to travel to the hex */
    travelCost: FixedCostsData;
    /** If the hex is considered to be water */
    isWater: boolean;
}
/** Realized hex in map, this class will eventually contain state data for each hex */
declare class Hex extends HexCoords implements EncodableObject, SoftDataDependant<HexData> {
    _map: WorldMap;
    /** The maximum survey level this hex can reach */
    maxSurveyLevel: number;
    /** The maximum mastery level this hex can reach */
    maxMasteryLevel: number;
    /** Requirements that must be met to survey the hex */
    requirements: AnyRequirement[];
    /** Cartography level required to survey this hex. Derived from requirements. */
    cartographyLevel: number;
    /** Costs required to travel to this hex */
    travelCost: FixedCosts;
    /** If this hex is water */
    isWater: boolean;
    /** Point of interest that is located at this hex */
    pointOfInterest?: PointOfInterest;
    /** Returns the WorldMap this hex belongs to */
    get map(): WorldMap;
    /** Returns the current survey level of the hex */
    get surveyLevel(): number;
    /** Returns the current xp the hex has */
    get surveyXP(): number;
    /** If this hex is in survey range of the player */
    get inSurveyRange(): boolean;
    /** If this hex is in sight range of the player */
    get inSightRange(): boolean;
    /** If this hex has been fully surveyed */
    get isFullySurveyed(): boolean;
    /** If this hex has been mastered */
    get isMastered(): boolean;
    /** Returns if the hex is currently at the max level possible. Accounts for Mastery system being enabled */
    get isMaxLevel(): boolean;
    /** Returns the maximum survey level this hex can reach. Accounts for mastery system being enabled */
    get maxLevel(): number;
    /** If the player is located at this hex */
    get isPlayerHere(): boolean;
    /** If this hex is currently selected in it's map */
    get isSelected(): boolean;
    /** If this hex has a point of interest */
    get hasPOI(): boolean;
    get accessibleDescription(): string;
    _lastCostMultiplier: number;
    _combinedCost: number;
    getCombinedCost(multiplier: number): number;
    /** Current survey xp that the hex has */
    _surveyXP: number;
    /** Current survey level the hex has */
    _surveyLevel: number;
    /** Returns the height of the hex */
    get height(): number;
    /** Returns the width of the hex */
    get width(): number;
    /** Returns the cartesian coordinates of this hexes global origin */
    get origin(): Point;
    /** Holes that this hex is on the edge of */
    holes: WorldMapHole[];
    constructor(data: HexData, game: Game, _map: WorldMap);
    registerSoftDependencies(data: HexData, game: Game): void;
    /**
     * Add survey XP to the hex
     * @param amount The amount of XP to add
     * @returns If the survey level of the hex changed
     */
    addSurveyXP(amount: number): boolean;
    /**
     * Sets ths survey level of the hex to the specified value. Clamps to expected values
     * @param level Positive Integer, level to set to
     */
    setSurveyLevel(level: number): void;
    /** Recomputes the survey level for this hex starting from level */
    computeSurveyLevel(level?: number): void;
    /** Recomputes the survey level of this hex starting from level, does not clamp to maximum */
    computeUnclampedLevel(level?: number): void;
    /** Clamps the current survey level of this hex to the maximum possible level */
    clampSurveyLevel(): void;
    canFastTravelTo(hex: Hex): boolean | undefined;
    /** Returns true if this hex has a neighbour that is fully surveyed */
    get hasSurveyedNeighbour(): boolean;
    /** Returns true if this hex has a neighbour that is fully surveyed or in the cartography queue */
    hasSurveyedOrQueuedNeighbour(cartography: Cartography): boolean;
    /** Iterates over each neighbour hex and returns true if predicate is true for any of them */
    someNeighbour(predicate: (hex: Hex) => boolean): boolean;
    /** Returns the cartesian coordinates of a specific vertex, local to this hex's origin */
    getLocalVertex(vertex: HexVertex): Point;
    /** Returns the cartesian coordinates of a specific vertex, relative to the map's origin */
    getGlobalVertex(vertex: HexVertex): Point;
    /** Returns the cartesian coordinates of all vertices of this hex, local to this hex's origin */
    getLocalVertices(): Point[];
    /** Returns the cartesian coordinates of all vertices of this hex, relative to the map's origin */
    getGlobalVertices(): Point[];
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    /**
     *
     * @param xp The XP required per level
     * @param level The level to start the search from
     * @returns The level corresponding to the amount of xp
     */
    static getLevelFromXP(xp: number, level?: number): number;
    static getXPFromLevel(level: number): number;
}
/** Dummy hex class, used for dumping save data for unregistered hexes */
declare class DummyHex extends Hex {
    constructor(game: Game, map: WorldMap);
}
interface HexOrientation {
    readonly forward: readonly number[][];
    readonly inverse: readonly number[][];
}
declare const flatHexOrient: HexOrientation;
interface WorldMapTileData {
    /** Defines the number of tiles in the x and y direction */
    dimensions: PointData;
    /** The size in pixels of an individual tile */
    tileSize: PointData;
    /** The path to the root folder that contains each map tile. Files should be .png, and named as tile_${i}_${j}@1x.png for full resolution tiles and tile_${i}_${j}@0.5x.png for half resolution tiles */
    tilePath: string;
}
interface WorldMapMasteryBonusData extends IDData {
    /** The number of hexes that must be mastered to receive the bonus */
    masteredHexes: number;
    /** Optional. Permanent modifiers granted to the player when reaching this bonus */
    modifiers?: PlayerModifierData;
    /** Optional. The IDs of pets that are unlocked when reaching this bonus */
    pets?: string[];
    /** Optional. GP to give to the player when reaching this bonus */
    gp?: number;
    /** Optional. Slayer Coins to give to the player when reaching this bonus */
    sc?: number;
    /** Optional. Items to give to the player when reaching this bonus */
    items?: IDQuantity[];
}
declare class WorldMapMasteryBonus extends NamespacedObject {
    /** Save State property. Determines if this bonus has been awarded to the player. */
    awarded: boolean;
    /** The number of hexes that must be mastered to receive this bonus */
    masteredHexes: number;
    /** Modifiers given to the player when this bonus is active */
    modifiers?: PlayerModifierObject;
    /** Pets unlocked when this bonus is unlocked */
    pets?: Pet[];
    gp?: number;
    sc?: number;
    items?: AnyItemQuantity[];
    constructor(namepsace: DataNamespace, data: WorldMapMasteryBonusData, game: Game);
}
interface WorldMapData extends IDData {
    name: string;
    bgTiles: WorldMapTileData;
    worldSize: PointData;
    hexScale: PointData;
    hexBorderColour: string;
    activePOIBorderColour: string;
    origin: PointData;
    startingLocation: HexCoordData;
    fastTravelGroups: FastTravelGroupData[];
    pointsOfInterest: AnyPOIData[];
    hexes: HexData[];
    masteryBonuses: WorldMapMasteryBonusData[];
}
declare const enum MapFilterType {
    PlayerMarker = 0,
    UndiscoveredDigsite = 1,
    UndiscoveredPOI = 2,
    Digsites = 3,
    Watchtowers = 4,
    OtherPOIs = 5,
    HexGrid = 6,
    MasteryMarkers = 7,
    HexProgress = 8,
    ActivePOIs = 9,
    MaxLength = 10
}
interface MapFilter {
    readonly name: string;
    readonly media: string;
}
/** Utility class for managing world map filter settings */
declare class MapFilterSettings implements EncodableObject {
    map: WorldMap;
    /** Settings of each marker type */
    markerSettings: boolean[];
    /** Set of FastTravelGroups that should not be shown on the map */
    hiddenFastTravelGroups: Set<FastTravelGroup>;
    constructor(map: WorldMap);
    /** Sets a standard filter to be visible */
    set(type: MapFilterType, value: boolean): void;
    /** Gets if a standard filter should be visible */
    get(type: MapFilterType): boolean;
    /** Sets if a fast travel group should be visible */
    setGroup(group: FastTravelGroup, value: boolean): void;
    /** Returns if the icons of a fast travel group should be visible */
    getGroup(group: FastTravelGroup): boolean;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    static filters: MapFilter[];
    /** Determines the display order of map filters in the dropdown menu */
    static filterDisplayOrder: MapFilterType[];
}
interface WorldMapEdge {
    hexes: Hex[];
    polygon: PIXI.Polygon;
}
interface MapEdgeNode {
    edge: WorldMapEdge;
    parent?: MapEdgeNode;
    leftChild?: MapEdgeNode;
    rightSibling?: MapEdgeNode;
}
interface WorldMapHole {
    /** Polygon that should make up the exterior shape of the hole */
    exterior: PIXI.Polygon;
    /** Polygons that should be cut as holes in the exterior */
    holes: PIXI.Polygon[];
    /** All hexes that are on the edge of the hole */
    hexes: Hex[];
    /** Hexes on the edge of the hole that are fully surveyed */
    surveyedHexes: Hex[];
}
interface WorldMapTiles {
    dimensions: Point;
    tileSize: Point;
    tilePath: string;
}
declare class WorldMap extends NamespacedObject implements EncodableObject {
    game: Game;
    cartography: Cartography;
    get name(): string;
    _name: string;
    /** Defines the tiles that make up the background image of the map */
    tiles: WorldMapTiles;
    /** Width and Height of the world map in pixels */
    worldSize: Point;
    /** x and y scaling of the hexes. Note that hex width is given by 2*xScale and height by sqrt(3)*yScale */
    hexScale: Point;
    /** The colour to use for the hex borders */
    hexBorderColour: number;
    /** The colour to use for active point of interest borders */
    activePOIBorderColour: number;
    /** Cartesian coordinates of the center of the 0,0,0 hex */
    origin: Point;
    /** Starting position of the player in Axial hex coordinates */
    startingLocation: Hex;
    /** The base sight range the player has on this map */
    baseSightRange: number;
    /** The base survey range the player has on this map */
    baseSurveyRange: number;
    /** The range that the player can see hexes */
    get sightRange(): number;
    /** The range that the player can survey hexes*/
    get surveyRange(): number;
    /** Returns the total number of hexes that exist in this map */
    get numberOfHexes(): number;
    /** Internal counter for the total number of hexes in this map */
    _totalHexCount: number;
    /** Registry of all Fast travel groups on the map */
    fastTravelGroups: NamespaceRegistry<FastTravelGroup>;
    /** Registry of all Points of interest on the map */
    pointsOfInterest: NamespaceRegistry<PointOfInterest>;
    /** Map of q to map of r to Hex */
    hexes: Map<number, Map<number, Hex>>;
    /** Holes in the map, computed after data is registered */
    holes: WorldMapHole[];
    masteryBonuses: NamespaceRegistry<WorldMapMasteryBonus>;
    /** Array of mastery bonuses this map gives. Sorted in order of lowest number of mastered hexes to highest number. */
    sortedMasteryBonuses: WorldMapMasteryBonus[];
    /** Returns The hex that the player is currently located at */
    get playerPosition(): Hex;
    /** The hex that the player is currently located at */
    _playerPosition: Hex;
    /** Returns The hex that the player has currently selected */
    get selectedHex(): Hex | undefined;
    /** Returns the Path to the currently selected hex. Undefined if no path exists. */
    get selectedHexPath(): Hex[] | undefined;
    /** The hex that the player has currently selected */
    _selectedHex?: Hex;
    /** Path to the currently selected hex. Undefined if no path exists. */
    _pathToSelected?: Hex[];
    /** The lowest cost in the map to travel to another hex. Used to scale the heuristic function in the A* algorithm. */
    _lowestTravelCost: number;
    /** List of points of interest that have been discovered */
    discoveredPOIs: PointOfInterest[];
    /** Set of POIs that are undiscovered, hidden and should show a marker */
    markedUndiscoveredHiddenPOIs: Set<PointOfInterest>;
    /** Queue of points of interest that have been surveyed, but are undiscovered */
    undiscoveredPOIs: PointOfInterest[];
    /** Current marker/grid settings for this map */
    filterSettings: MapFilterSettings;
    /** Total number of hexes in the map that are fully surveyed */
    fullySurveyedHexes: number;
    /** Total number of hexes in the map that are mastered */
    masteredHexes: number;
    /** Total number of mastery bonuses that have been unlocked */
    unlockedMasteryBonuses: number;
    /** Returns if every hex in the map has been fully surveyed */
    get isFullySurveyed(): boolean;
    /** Returns if every hex in the map has been mastered */
    get isMastered(): boolean;
    /** If there are any dig site POIs on the map */
    hasDigSites: boolean;
    /** If there are any watchtower POIs on the map */
    hasWatchtowers: boolean;
    /** If there are any POIs with active modifiers on the map */
    hasActivePOIs: boolean;
    /** Loaded assets for the map */
    assets?: Record<string, PIXI.Texture>;
    constructor(namespace: DataNamespace, data: WorldMapData, game: Game, cartography: Cartography);
    /** Gets the hex at the given hex coordinates */
    getHex(coords: HexCoords): Hex | undefined;
    /**
     * Gets the hexes that are in range of another hex
     * @param center The coordinates of the center hex
     * @param range The int range from the center hex
     * @returns The hexes that are in range and exist in the map
     */
    getHexesInRange(center: HexCoords, range: number): Hex[];
    /**
     * Gets the hexes that are in a ring around another hex
     * @param center The center hex of the ring
     * @param radius The radius of the ring
     * @returns The hexes in the ring that exist in the map
     */
    getHexesInRing(center: HexCoords, radius: number): Hex[];
    /**
     * Gets the hexes that are within a rectangle
     * @param rect Rectangle that hexes should overlap with
     */
    getHexesInRectangle(rect: PIXI.Rectangle): Hex[];
    /** Computes the edges in the map, returning the polygon they form and the hexes that border them */
    computeEdges(): WorldMapEdge[];
    /** Gets a polygon representing the exterior rectangle of the map boundary */
    getExteriorRect(): PIXI.Polygon;
    /** Sorts the edges of the map into a left-child, right-sibling tree, where child polygons are contained by their parent polygons, but their siblings have no intersection */
    sortEdges(edges: WorldMapEdge[]): MapEdgeNode;
    /** Converts the left-child, right-sibling tree into an array of hole objects for use in rendering */
    convertEdgeNodesToHoles(root: MapEdgeNode): WorldMapHole[];
    /** Computes the hole objects for this map */
    computeHoles(): WorldMapHole[];
    /** Returns the cartesian coordinates of a hex's center */
    getHexOrigin(coords: HexCoords): Point;
    /** Returns the local coordinates of a hex vertex */
    getLocalHexVertex(vertex: HexVertex): Point;
    /** Returns the global coordinates of a hex vertex */
    getGlobalHexVertex(coords: HexCoords, vertex: HexVertex): Point;
    /** Gets fractional coordinates from a point on the map */
    getFractionalCoordsFromPoint(point: Point): HexCoords;
    /** Gets hex coordinates from a point on the map */
    getCoordsFromPoint(point: Point): HexCoords;
    /** Gets the local coordinates of the vertices of a hex */
    getHexVertices(): Point[];
    /** Returns the rectangular width and height of a hex */
    getHexDimensions(): {
        width: number;
        height: number;
    };
    /** Iterates through each hex in the map. */
    forEach(callbackfn: (value: Hex) => void): void;
    setPlayerPosition(hex: Hex): void;
    /** Deselects the currently selected hex */
    deselectHex(): void;
    /** Sets the hex that is currently selected */
    selectHex(hex: Hex): void;
    /** Recomputes the path to the selected hex */
    updateSelectedPath(): void;
    getHexNeighboursAndCosts(hex: Hex, costModifier: number): [Hex, number][];
    /**
     * Computes a cost minimized path from one hex to another, using the A* algorithm
     * @param start The starting Hex
     * @param goal The end Hex
     * @returns an array of hexes to traverse, or undefined if no path was found
     */
    computePath(start: Hex, goal: Hex): Hex[] | undefined;
    /** Tests path finding and draws a path between two hexes */
    testPathCoords(startCoords: HexCoordData, goalCoords: HexCoordData): void;
    _pathHeuristic(a: Hex, b: Hex, scaling: number): number;
    _reconstructPath(cameFrom: Map<Hex, Hex | undefined>, current: Hex): Hex[];
    /** Precomputes the lowest cost to travel to a hex with no cost multiplier */
    _computeLowestTravelCost(): void;
    /** Method called once after all game data has been registered */
    postDataRegistration(): void;
    /** Recomputes the total number of hexes in this map */
    computeTotalHexes(): void;
    getTileTexturePath(i: number, j: number, quality: MapTextureQuality): string;
    /** Returns the URI for the .basis file representing the tile at [i,j] */
    getTileTexture(i: number, j: number, quality: MapTextureQuality): string;
    /** Returns if a border should be shown for the given hex */
    shouldHexHaveBorder(hex: Hex): boolean;
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    encodeHexCoords(writer: SaveWriter, hex: HexCoords): void;
    decodeHexCoords(reader: SaveWriter, version: number): HexCoords;
}
declare const enum FastTravelSaveState {
    None = 0,
    Unlocked = 1,
    Locked = 2
}
declare class DummyWorldMap extends WorldMap {
    constructor(namespace: DataNamespace, localID: string, game: Game);
}
declare function generateWorldMapData(): WorldMapData;
/** Generates a rectangular hex grid in data form */
declare function generateHexData(top: number, bottom: number, left: number, right: number): HexData[];
