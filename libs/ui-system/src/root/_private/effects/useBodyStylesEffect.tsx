import { createEffect } from 'solid-js';

import { contextVars } from '../../helpers';

export const useBodyStylesEffect = (): void => {
    const updateStyle = () => {
        const styles = contextVars();
        Object.entries(styles).forEach(([key, value]) => {
            document.body.style.setProperty(key, value || null);
        });
    };

    createEffect(updateStyle);
};
