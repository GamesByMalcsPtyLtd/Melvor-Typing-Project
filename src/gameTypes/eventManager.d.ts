declare class EventManager {
    activeEvents: EventsData[];
    getEventData(id: Events): EventsData | undefined;
    isEventActive(event: EventsData): boolean;
    getActiveEvents(): EventsData[];
    createEventContainerElement(event: EventsData): HTMLElement;
    loadEventSidebarElements(event: EventsData): void;
    loadEventContainerElements(event: EventsData): void;
    populateEventContainerElement(event: EventsData): void;
    loadSavedEventData(event: EventsData): void;
    loadEvents(): void;
    updateGameLogo(event: EventsData): void;
    rollForEventRewards(actionInterval: number, skill: AnySkill, rewards: Rewards): void;
    rollForEventRewardsOffline(actionInterval: number, skill: AnySkill): number;
    updateEventUI(id: number): void;
}
declare const EVENTS: EventsData[];
interface EventsData {
    id: number;
    name: string;
    media: string;
    startDate: number;
    endDate: number;
    pageId: number;
    sidebarColour: string;
    borderClass: string;
    bgClass: string;
    containerId: string;
    logo: string;
}
