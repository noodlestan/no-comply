import type { IconComponent, IconValue } from '../types';

export const resolveIconValue = <A extends unknown[]>(
    icon: IconValue<A>,
    ...args: A
): IconComponent => {
    if (typeof icon === 'function') {
        return icon(...args);
    }
    if (typeof icon === 'object' && 'component' in icon) {
        return icon.component;
    }
    throw new Error('IconValue should be "() => IconComponent" or "IconComponentValue".');
};
