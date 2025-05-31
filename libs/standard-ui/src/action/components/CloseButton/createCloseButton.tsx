import { combineProps } from '@no-comply/solid-primitives';
import { XIcon } from 'lucide-solid';

import type { ActionVariant } from '../../types';

import type { CloseButtonAPI, CloseButtonProps } from './types';

export const createCloseButton = (props: CloseButtonProps): CloseButtonAPI => {
    const staticIconButtonProps = {
        variant: 'plain' as ActionVariant,
        icon: XIcon,
    };

    return {
        iconButtonProps: combineProps(props, staticIconButtonProps),
    };
};
