export type ComputedProps<T extends Record<string, () => unknown>> = {
    [K in keyof T]: ReturnType<T[K]>;
};

export function createComputedProps<T extends Record<string, () => unknown>>(
    getters: T,
): ComputedProps<T>;

export function createComputedProps<
    U extends Record<string, unknown>,
    T extends Record<string, () => unknown>,
>(baseProps: U, getters: T): U & ComputedProps<T>;

export function createComputedProps<
    U extends Record<string, unknown>,
    T extends Record<string, () => unknown>,
>(baseOrGetters: U | T, maybeGetters?: T): U & ComputedProps<T> {
    const baseProps = maybeGetters ? (baseOrGetters as U) : ({} as U);
    const getters = maybeGetters ?? (baseOrGetters as T);

    const obj = baseProps as U & ComputedProps<T>;
    const entries = Object.entries(getters);
    const descriptors = entries.map(([key, getter]) => [key, { get: getter, enumerable: true }]);

    Object.defineProperties(obj, Object.fromEntries(descriptors));

    return obj;
}
