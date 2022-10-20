declare class EventManager {
    activeEvents: EventsData[];
    getEventData(id: Events): EventsData | undefined;
    isEventActive(event: EventsData): boolean;
    private getActiveEvents;
    private createEventContainerElement;
    private loadEventSidebarElements;
    private loadEventContainerElements;
    private populateEventContainerElement;
    private loadSavedEventData;
    loadEvents(): void;
    private updateGameLogo;
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
