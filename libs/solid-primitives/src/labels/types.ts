/**
 * @noresolve
 */
export type LabelValue<A extends unknown[] = []> = string | ((...args: A) => string);

/**
 * @noresolve
 */
export type LabelMap = Record<string, LabelValue<never[]>>;
