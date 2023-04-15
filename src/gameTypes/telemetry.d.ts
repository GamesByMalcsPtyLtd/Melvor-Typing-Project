declare class Telemetry {
    readonly ENABLE_TELEMETRY = true;
    enableTelemetryFromCloud: boolean;
    telemetryPayloadsToProcess: TelemetryEvent;
    constructor();
    get isTelemetryEnabled(): boolean;
    setEnableTelemetryFromCloud: () => void;
    /** Create a new Monster kill telemetry event.
     * Will automatically update the count if this event is already queued to process.
     * @param monster The monster that was killed
     * @param count The number of monsters killed. Defaults to 1. Override for offline session.
     */
    createMonsterKillEvent(monster: Monster, count?: number): void;
    /** Create a new player death event
     * Will automatically update the count if this event is already queued to process.
     * This one should always send immediately.
     * @param cause The cause of the player's death. Defaults to 'Unknown'.
     * @param itemLost The item that was lost when the player died. Defaults to 'None'.
     */
    createPlayerDeathEvent(cause?: PlayerDeathTelemetryEventCause, itemLost?: AnyItem | 'None'): void;
    /** Updates existing Player Death event with Item Lost data
     * @param itemLost The item that was lost when the player died.
     * @param count The number of items lost. Defaults to 0.
     */
    updatePlayerDeathEventItemLost(itemLost: AnyItem | 'None', count?: number): void;
    /** Updates existing Player Death event with the cause
     * @param cause The cause of the player's death.
     */
    updatePlayerDeathEventCause(cause: PlayerDeathTelemetryEventCause): void;
    /** Create a new player death event
     * Will automatically update the count if this event is already queued to process.
     * This one should always send immediately.
     * @param skill The skill that gained xp
     */
    createOfflineXPGainEvent(skill: AnySkill, offlineTime: number, xpBefore: number, xpAfter: number, levelBefore: number, levelAfter: number): void;
    /** Create a new item gained event.
     * Adds volume the existing event if it already exists (Same Item & source)
     * @param item The item that was gained
     * @param volume The number of items gained.
     * @param source Where the item came from
     */
    createItemGainedEvent(item: AnyItem, volume: number, source: string): void;
    /** Create a new item removed from bank event.
     * Adds volume the existing event if it already exists (Same Item & source)
     * @param item The item that was gained
     * @param volume The number of items gained.
     * @param movedTo Where the item went to (from bank)
     */
    createItemRemovedFromBankEvent(item: AnyItem, volume: number, movedTo: string): void;
    removeTelemetryEvent(eventType: TelemetryEventID, eventID: string): void;
    /** Returns existing the existing Telemetry Event that is scheduled to send */
    getExistingTelemetryEvent(eventType: TelemetryEventID, eventID: string): TelemetryEvents | undefined;
    /** Returns the Event Body required to send a Telemetry Event via PlayFab API Call */
    getTelemetryEventBody(event: TelemetryEvents): TelemetryData;
    /** Fire a single telemetry event immediately
     * @param event The event to fire
     */
    fireSingle(event: TelemetryEvents): void;
    /** Fires all events within an Event Type
     * @param eventType The type of event to fire
     */
    fireEventType(eventType: TelemetryEventID): void;
    /** Schedules a Telemtry Event for processing
     * @param eventType The type of event to fire
     * @param eventID The ID of the event to fire
     * @param event The event data to fire
     */
    scheduleTelemetryEvent(eventType: TelemetryEventID, eventID: string, event: TelemetryEvents): void;
    /** Perform functions when a Telemetry event is created */
    onTelemetryEventCreation(): void;
    /** Fire events prior to the event size limit being reached */
    fireEventsIfLimitsReached(): void;
    /** Returns the total amount of Telemetry events queued */
    getTelemetryEventSize(): number;
    /** Process all scheduled Telemetry Events */
    processScheduledTelemetryData(): void;
    /** Processes Telemetry events of the specified event type
     * @param eventType The type of event to process
     * @param event The event data to process
     */
    processTelemetryPayload(eventType: TelemetryEventID, event: TelemetryEventData): TelemetryData[];
    /** Fires a Telemetry Event via PlayFab API Call */
    fireTelemetryEvents(events: TelemetryData[]): void;
}
declare abstract class GenericTelemetryEvent {
    abstract get payload(): TelemetryEventPayload;
    type: TelemetryEventID;
    character: string;
    gamemode: string;
    saveSlot: number;
    gameVersion: string;
    platform: string;
    constructor(type: TelemetryEventID);
}
declare class MonsterKilledTelemetryEvent extends GenericTelemetryEvent {
    monster: Monster;
    count: number;
    _killCount: number;
    constructor(monster: Monster, count: number);
    get payload(): MonsterKilledTelemetryEventPayload;
}
declare class PlayerDeathTelemetryEvent extends GenericTelemetryEvent {
    isHardcore: boolean;
    deathCause: string;
    deathNumber: number;
    itemLost: string;
    itemLostCount: number;
    constructor(cause: PlayerDeathTelemetryEventCause, itemLost: AnyItem | 'None');
    get payload(): PlayerDeathTelemetryEventPayload;
    setItemLost(itemLost: AnyItem | 'None', count?: number): void;
    setCause(cause: PlayerDeathTelemetryEventCause): void;
}
declare class OfflineXPGainTelemetryEvent extends GenericTelemetryEvent {
    _skill: AnySkill;
    _xpBefore: number;
    _xpAfter: number;
    _levelBefore: number;
    _levelAfter: number;
    _offlineTime: number;
    constructor(skill: AnySkill, offlineTime: number, xpBefore: number, xpAfter: number, levelBefore: number, levelAfter: number);
    get payload(): OfflineXPGainTelemetryEventPayload;
    updateValues(level: number, xp: number): void;
    get requiresPurge(): boolean;
}
declare class ItemGainedTelemetryEvent extends GenericTelemetryEvent {
    _item: AnyItem;
    itemVolume: number;
    _source: string;
    constructor(item: AnyItem, itemVolume: number, source: string);
    get payload(): ItemGainedEventPayload;
}
declare class ItemRemovedFromBankTelemetryEvent extends GenericTelemetryEvent {
    _item: AnyItem;
    itemVolume: number;
    _source: string;
    _movedTo: string;
    constructor(item: AnyItem, itemVolume: number, movedTo: string);
    get payload(): ItemRemovedFromBankEventPayload;
}
interface GenericTelemetryEventPayload {
    character: string;
    gamemode: string;
    save_slot: number;
    game_version: string;
    language: string;
    platform: string;
    mods_enabled: boolean;
    active_mods: string[];
}
interface MonsterKilledTelemetryEventPayload extends GenericTelemetryEventPayload {
    monster_id: string;
    count: number;
    kill_count: number;
}
interface PlayerDeathTelemetryEventPayload extends GenericTelemetryEventPayload {
    death_cause: string;
    is_hardcore: boolean;
    death_number: number;
    item_lost: string;
    item_lost_count: number;
}
interface OfflineXPGainTelemetryEventPayload extends GenericTelemetryEventPayload {
    skill_id: string;
    xp_before: number;
    xp_after: number;
    level_before: number;
    level_after: number;
    offline_time: number;
}
interface ItemMovementEventPayload extends GenericTelemetryEventPayload {
    item_id: string;
    item_volume: number;
    source: string;
}
interface ItemGainedEventPayload extends ItemMovementEventPayload {
    moved_to: 'Bank';
}
interface ItemRemovedFromBankEventPayload extends ItemMovementEventPayload {
    moved_to: string;
}
declare type TelemetryEvent = Map<TelemetryEventID, TelemetryEventData>;
declare type TelemetryEventData = Map<string, TelemetryEvents>;
declare type TelemetryEventID = 'monster_killed' | 'player_death' | 'offline_xp_gain' | 'item_gained' | 'item_removed_from_bank';
interface TelemetryData {
    EventNamespace: 'custom';
    Name: TelemetryEventID;
    Payload: TelemetryEventPayload;
}
declare type TelemetryEvents = MonsterKilledTelemetryEvent | PlayerDeathTelemetryEvent | OfflineXPGainTelemetryEvent | ItemGainedTelemetryEvent | ItemRemovedFromBankTelemetryEvent;
declare type TelemetryEventPayload = MonsterKilledTelemetryEventPayload | PlayerDeathTelemetryEventPayload | OfflineXPGainTelemetryEventPayload | ItemGainedEventPayload | ItemRemovedFromBankEventPayload;
declare type PlayerDeathTelemetryEventCause = Monster | 'Thieving' | 'GolbinRaid' | 'Unknown';
