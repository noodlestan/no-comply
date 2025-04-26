import type { OwnFocusEventHandlers } from '@noodlestan/context-ui-primitives';

import type { PressableAPI, PressableProps } from '../Pressable';

export type ButtonProps = PressableProps &
    OwnFocusEventHandlers & {
        id?: string;
        rel?: string;
        href?: string;
        target?: string;
    };

export type ButtonAPI = {
    $root: PressableAPI['$root'] &
        OwnFocusEventHandlers & {
            href: string | undefined;
            target: string | undefined;
            rel: string | undefined;
        };
};
