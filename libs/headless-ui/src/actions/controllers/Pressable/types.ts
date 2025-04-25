import type { AriaPressableAPI, AriaPressableProps } from '@noodlestan/context-ui-aria';
import type { PressEventHandlers } from '@noodlestan/context-ui-primitives';

export type PressableProps = AriaPressableProps & PressEventHandlers;

export type PressableAPI = {
    elProps: AriaPressableAPI['elProps'] & {
        onClick: (ev: MouseEvent) => void;
        onKeyDown: (ev: KeyboardEvent) => void;
    };
};
