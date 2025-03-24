import type { JSX } from 'solid-js';

import {
    type AriaRegionAttributes,
    type AriaRegionOptions,
    createAriaRegionAttributes,
} from '../../aria';
import { type FocusContext } from '../providers';

type FocusElementProps = AriaRegionAttributes & {
    onFocusIn: JSX.FocusEventHandlerUnion<HTMLElement, FocusEvent>;
    onFocusOut: JSX.FocusEventHandlerUnion<HTMLElement, FocusEvent>;
    'data-context-id': string;
    'data-context-focus': string;
};

type FocusHandlerOptions = AriaRegionOptions;

export const createFocusElementProps = (
    context: FocusContext,
    options: FocusHandlerOptions = {},
): FocusElementProps => {
    return {
        'data-context-id': context.node?.id || '<none>',
        'data-context-focus': '',
        onFocusIn: context.handlers.onFocusIn,
        onFocusOut: context.handlers.onFocusOut,
        ...createAriaRegionAttributes(options),
    };
};
