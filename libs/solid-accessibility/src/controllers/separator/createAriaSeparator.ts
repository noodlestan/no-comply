import { computedProps } from '@no-comply/solid-primitives';

import type { AriaSeparatorAPI, AriaSeparatorProps } from './types';

export function createAriaSeparator(props: AriaSeparatorProps): AriaSeparatorAPI {
    const component = () => props.tag ?? 'hr';

    const role = () => {
        if (component() === 'hr') {
            return undefined;
        }
        return 'separator';
    };

    const $root = computedProps({
        component,
        role,
        'aria-orientation': () => props.orientation ?? 'horizontal',
    });

    return {
        $root,
    };
}
