import type { ClassList, ObjectWithId, RenderProp } from '@noodlestan/context-ui-primitives';

import type {
    OverflowItemsContext,
    OverflowItemsContextOptions,
    OverflowItemsContextValue,
} from '../../private';

type OverflowItemsProps = {
    items: ObjectWithId[];
};

export type OverflowItemsProps<T extends ObjectWithId = ObjectWithId> =
    OverflowItemsContextOptions<T> & {
        renderOverflow: RenderProp<OverflowItemsProps>;
    };

export type OverflowItemsAPI = {
    $root: {
        classList: ClassList;
        ref: (el: HTMLElement) => void;
        'data-responsive-items-is-reflowing': string | undefined;
    };
    $measure: {
        classList: ClassList;
        inert: boolean;
        ref: (el: HTMLElement) => void;
    };
    $render: {
        'data-responsive-items-container': string | undefined;
    };
    context: OverflowItemsContext;
    contextValue: OverflowItemsContextValue;
};
