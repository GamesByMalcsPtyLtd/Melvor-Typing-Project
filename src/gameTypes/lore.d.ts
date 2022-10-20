interface LoreText {
    title: string;
    paragraphs: string;
}
interface LoreBookData extends IDData {
    title: string;
    media: string;
    unlockRequirements: AnyRequirementData[];
}
declare class LoreBook extends NamespacedObject {
    get title(): string;
    get media(): string;
    unlockRequirements: AnyRequirement[];
    private _title;
    private _media;
    constructor(namespace: DataNamespace, data: LoreBookData, game: Game);
}
declare class Lore {
    private game;
    books: NamespaceRegistry<LoreBook>;
    renderUnlocks: boolean;
    private bookButtons;
    constructor(game: Game);
    registerLore(namespace: DataNamespace, loreData: LoreBookData[]): void;
    loadLoreButtons(): void;
    onLoad(): void;
    render(): void;
    private updateLoreBookUnlocks;
    readLore(book: LoreBook): void;
    static readonly LORE: LoreText[];
}
declare class LoreBookButtonElement extends HTMLElement {
    private _content;
    private bookImage;
    private bookTitle;
    private readButton;
    constructor();
    connectedCallback(): void;
    setImage(book: LoreBook): void;
    updateForUnlock(book: LoreBook, game: Game): void;
    private createUnlockElement;
    private createUnlockElements;
    private getTextClass;
}
