import type { UIContextKey, UIControllerName } from '../../../controllers';

export const createContextsMap = <T extends Record<UIContextKey, UIContextKey>>(
    controller: UIControllerName,
    contexts: T,
): T => {
    const result = {} as Record<UIContextKey, UIContextKey>;

    (Object.entries(contexts) as [UIContextKey, UIContextKey][]).forEach(([key, value]) => {
        result[key] = `${controller}:${value}` as UIContextKey;
    });

    return result as T;
};
