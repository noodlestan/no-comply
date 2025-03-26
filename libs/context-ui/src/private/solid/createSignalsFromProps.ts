import type { Accessor } from 'solid-js';

type SignalsObject<T extends Record<string, unknown>, K extends (keyof T)[]> = {
    [P in K[number]]: Accessor<T[P]>;
};

export const createSignalsFromProps = <T extends Record<string, unknown>, K extends (keyof T)[]>(
    props: T,
    keys: K,
): SignalsObject<T, K> => {
    return Object.fromEntries(keys.map(key => [key, () => props[key]])) as SignalsObject<T, K>;
};
