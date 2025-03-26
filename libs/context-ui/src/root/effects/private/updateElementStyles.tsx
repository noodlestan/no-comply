import type { Styles } from '../../../dom';

export const updateElementStyles = (
    targetElement?: HTMLElement,
    styles: Styles = {},
    previousStyles?: Styles,
): Styles => {
    console.info('updateElementStyles()');

    if (!targetElement) {
        return {};
    }

    if (previousStyles) {
        Object.entries(previousStyles).forEach(([key]) => {
            if (!(key in styles)) {
                targetElement.style.removeProperty(key);
            }
        });
    }

    Object.entries(styles).forEach(([key, value]) => {
        targetElement.style.setProperty(key, value ? String(value) : null);
    });

    return styles;
};
