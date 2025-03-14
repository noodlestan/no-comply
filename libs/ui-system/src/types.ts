export type DataAttributes = {
    [key in `data-${string}`]?: string | number | boolean;
};

export type ObjectWithId<T extends object = object> = T & { id: string };
