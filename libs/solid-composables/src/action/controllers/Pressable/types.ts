import type {
    AriaGenericPressableAPI,
    AriaPressableAPI,
    AriaPressableProps,
    PressableRoleName,
} from '@no-comply/solid-accessibility';
import type { PressEventHandlers } from '@no-comply/solid-primitives';

export type PressableProps = AriaPressableProps & PressEventHandlers;

type PressableRoot = {
    onClick: (ev: MouseEvent) => void;
    onKeyDown: (ev: KeyboardEvent) => void;
};

export type PressableAPI<T extends PressableRoleName = PressableRoleName> = {
    $root: AriaPressableAPI<T>['$root'] & PressableRoot;
};

export type GenericPressableAPI = {
    $root: AriaGenericPressableAPI['$root'] & PressableRoot;
};
