import type { AriaAttributes } from '@noodlestan/context-ui-aria';
import type { PressEventHandlers } from '@noodlestan/context-ui-primitives';

import type { PressableProps } from '../../../actions';

export type LinkProps = PressableProps &
    PressEventHandlers & {
        href: string;
        label?: string;
        target?: '_self' | '_blank' | '_parent' | '_top';
        disabled?: boolean;
        rel?: string;
    };

export type LinkAPI = {
    $root: {
        href: string | undefined;
        target: string | undefined;
        rel: string | undefined;
        tabIndex: number | undefined;
        'aria-label': AriaAttributes['aria-label'];
        'aria-disabled': AriaAttributes['aria-disabled'];
        'data-disabled': '' | undefined;
        'data-external': '' | undefined;
        onClick: (ev: MouseEvent) => void;
    };
};
