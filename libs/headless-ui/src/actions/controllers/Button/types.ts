import type { OwnFocusEventHandlers } from '@noodlestan/context-ui-primitives';

import type { PressableAPI, PressableProps } from '../Pressable';

export type ButtonProps = PressableProps & OwnFocusEventHandlers;

export type ButtonAPI = {
    $root: PressableAPI['$root'] & OwnFocusEventHandlers;
};
