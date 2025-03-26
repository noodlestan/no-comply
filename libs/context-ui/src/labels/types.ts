export type LabelValue<A extends unknown[] = []> = string | ((...args: A) => string);

export type LabelMap = Record<string, LabelValue<never[]>>;
