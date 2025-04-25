export type DataAttributeName<T extends string = string> = `data-${T}`;

export type DataAttributes<T extends string = string> = {
    [key in DataAttributeName<T>]: string | undefined;
};

export type RawDataAttributes<T extends string = string> = {
    [key in T]?: string | boolean | undefined;
};

export type RawDataAttributesInput<T extends string = string> =
    | RawDataAttributes<T>
    | (string | RawDataAttributes<T>)[]
    | string
    | undefined;
