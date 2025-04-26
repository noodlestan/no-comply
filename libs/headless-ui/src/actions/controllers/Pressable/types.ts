import type { AriaPressableAPI, AriaPressableProps } from '@noodlestan/context-ui-aria';
import type { PressEventHandlers } from '@noodlestan/context-ui-primitives';

export type PressableProps = AriaPressableProps & PressEventHandlers;

export type PressableAPI = {
    $root: AriaPressableAPI['$root'] & {
        onClick: (ev: MouseEvent) => void;
        onKeyDown: (ev: KeyboardEvent) => void;
    };
};
