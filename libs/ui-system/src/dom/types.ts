export type ClassList = Record<string, boolean>;

export type ClassListInput = string | (string | ClassList)[] | ClassList;

export type Styles = { [key: string]: string | number | undefined };

export type DataAttributeName<T extends string = string> = `data-${T}`;

export type DataAttributes<T extends string = string> = {
    [key in DataAttributeName<T>]: string;
};

export type RawDataAttributes<T extends string = string> = {
    [key in T]?: string | boolean;
};

export type RawDataAttributesInput<T extends string = string> =
    | RawDataAttributes<T>
    | (string | RawDataAttributes<T>)[]
    | string;
