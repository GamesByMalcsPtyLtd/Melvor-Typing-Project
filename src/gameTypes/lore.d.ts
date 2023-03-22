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
    _title: string;
    _media: string;
    constructor(namespace: DataNamespace, data: LoreBookData, game: Game);
}
declare class Lore {
    game: Game;
    books: NamespaceRegistry<LoreBook>;
    renderUnlocks: boolean;
    bookButtons: Map<LoreBook, LoreBookButtonElement>;
    constructor(game: Game);
    registerLore(namespace: DataNamespace, loreData: LoreBookData[]): void;
    loadLoreButtons(): void;
    onLoad(): void;
    render(): void;
    updateLoreBookUnlocks(): void;
    readLore(book: LoreBook): void;
    static readonly LORE: LoreText[];
}
declare class LoreBookButtonElement extends HTMLElement {
    _content: DocumentFragment;
    bookImage: HTMLImageElement;
    bookTitle: HTMLHeadingElement;
    readButton: HTMLButtonElement;
    constructor();
    connectedCallback(): void;
    setImage(book: LoreBook): void;
    updateForUnlock(book: LoreBook, game: Game): void;
    createUnlockElement(costNodes: (string | Node)[], met: boolean): HTMLDivElement;
    createUnlockElements(book: LoreBook, game: Game): HTMLDivElement[];
    getTextClass(met: boolean): "text-success" | "text-danger";
}
