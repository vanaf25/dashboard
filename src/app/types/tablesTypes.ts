export type TableData<T>= {
    tableName: string;
    id:number,
    rows: T[];
}