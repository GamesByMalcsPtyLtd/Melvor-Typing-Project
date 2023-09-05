declare class ClueHunt {
    clueProgress: ({
        id: string;
        progress: number;
        required: number;
        complete: boolean;
        rewardItemID: string;
        monsterID?: undefined;
        equippedFoodItemId?: undefined;
        prayerID?: undefined;
        equippedItems?: undefined;
        skillIDs?: undefined;
        obstacleIDs?: undefined;
        monsterIDs?: undefined;
        constellationIDs?: undefined;
        dungeonIDs?: undefined;
        runecraftingIDs?: undefined;
    } | {
        progress: number;
        required: number;
        complete: boolean;
        rewardItemID: string;
        id?: undefined;
        monsterID?: undefined;
        equippedFoodItemId?: undefined;
        prayerID?: undefined;
        equippedItems?: undefined;
        skillIDs?: undefined;
        obstacleIDs?: undefined;
        monsterIDs?: undefined;
        constellationIDs?: undefined;
        dungeonIDs?: undefined;
        runecraftingIDs?: undefined;
    } | {
        progress: number;
        required: number;
        monsterID: string;
        equippedFoodItemId: string;
        complete: boolean;
        rewardItemID: string;
        id?: undefined;
        prayerID?: undefined;
        equippedItems?: undefined;
        skillIDs?: undefined;
        obstacleIDs?: undefined;
        monsterIDs?: undefined;
        constellationIDs?: undefined;
        dungeonIDs?: undefined;
        runecraftingIDs?: undefined;
    } | {
        progress: number;
        required: number;
        monsterID: string;
        prayerID: string;
        equippedItems: string[];
        complete: boolean;
        rewardItemID: string;
        id?: undefined;
        equippedFoodItemId?: undefined;
        skillIDs?: undefined;
        obstacleIDs?: undefined;
        monsterIDs?: undefined;
        constellationIDs?: undefined;
        dungeonIDs?: undefined;
        runecraftingIDs?: undefined;
    } | {
        progress: number;
        required: number;
        skillIDs: string[];
        obstacleIDs: string[];
        complete: boolean;
        rewardItemID: string;
        id?: undefined;
        monsterID?: undefined;
        equippedFoodItemId?: undefined;
        prayerID?: undefined;
        equippedItems?: undefined;
        monsterIDs?: undefined;
        constellationIDs?: undefined;
        dungeonIDs?: undefined;
        runecraftingIDs?: undefined;
    } | {
        progress: number;
        required: number;
        monsterIDs: string[];
        constellationIDs: string[];
        dungeonIDs: string[];
        runecraftingIDs: string[];
        complete: boolean;
        rewardItemID: string;
        id?: undefined;
        monsterID?: undefined;
        equippedFoodItemId?: undefined;
        prayerID?: undefined;
        equippedItems?: undefined;
        skillIDs?: undefined;
        obstacleIDs?: undefined;
    })[];
    currentStep: number;
    constructor();
    encode(writer: SaveWriter): SaveWriter;
    decode(reader: SaveWriter, version: number): void;
    onLoad(): void;
    startClueHunt(): void;
    clueCompletedSwal(): void;
    clueHuntCompletedSwal(): void;
    updateClueEventHandlers(): void;
    giveReward(id: number): void;
    updateClue1Progress: (event: GameEvent) => void;
    updateClue2Progress: (event: GameEvent) => void;
    updateClue3Progress: (event: GameEvent) => void;
    updateClue4Progress: (event: GameEvent) => void;
    updateClue5Progress: (event: GameEvent) => void;
    resetClue6(): void;
    updateClue6Progress: (event: GameEvent) => void;
    render(): void;
    renderArtwork(): void;
}
