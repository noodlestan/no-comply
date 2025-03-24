export type ClassList = Record<string, boolean>;

export type Styles = { [key: string]: string | number | undefined };

export type DataAttributes = {
    [key in `data-${string}`]?: string | number | boolean;
};

export type RawDataAttributes = {
    [key: string]: string | number | boolean | undefined;
};
