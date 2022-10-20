declare type StatsTableRow = {
    readonly name: HTMLTableCellElement;
    readonly value: HTMLTableCellElement;
};
declare type StatsRowData = {
    /** Value of the rows name. Should be a getter with translation. */
    readonly name: string;
    /** Value of the table row. Should be a getter. */
    readonly value: number;
    readonly isTime?: boolean;
    /** Optional. If present, this row only shows if the given namespace is registered */
    readonly namespace?: Namespaces;
};
declare type StatsTableData = {
    /** Element ID of the table */
    readonly tableID: string;
    /** Value of the tables title. Should be a getter with translation. */
    readonly title: string;
    /** Border class of table */
    readonly borderClass: string;
    readonly rows: StatsRowData[];
    readonly trackerKey: KeysMatching<Statistics, StatTracker>;
};
/** Tables for displaying statistics. Must be initialized with setData method. */
declare class StatsTable extends HTMLElement {
    private _content;
    private _title;
    private _body;
    private _rows;
    private _data;
    private _border;
    constructor();
    connectedCallback(): void;
    private removeRows;
    setData(data: StatsTableData): void;
    private addRow;
    updateRowValues(): void;
    private formatRowData;
    localize(): void;
}
