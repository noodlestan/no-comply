import { mergeProps } from '@noodlestan/context-ui-primitives';
import { XIcon } from 'lucide-solid';

import type { ActionVariant } from '../../types';

import type { CloseButtonAPI, CloseButtonProps } from './types';

export const createCloseButton = (props: CloseButtonProps): CloseButtonAPI => {
    const staticIconButtonProps = {
        variant: 'plain' as ActionVariant,
        icon: XIcon,
    };

    return {
        iconButtonProps: mergeProps(props, staticIconButtonProps),
    };
};
