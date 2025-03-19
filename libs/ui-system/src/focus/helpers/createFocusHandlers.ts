import { JSX } from 'solid-js';

import { FocusContextAPI } from '../providers';

type FocusContextAttributes = Pick<
    JSX.IntrinsicElements['div'],
    'onFocusIn' | 'onFocusOut' | 'tabIndex'
> & {
    'data-ui-focus': string;
};

export const createFocusHandlers = (context: FocusContextAPI): FocusContextAttributes => ({
    tabIndex: 0,
    'data-ui-focus': context.id?.ctxId || '',
    onFocusIn: context.handlers.onFocusIn,
    onFocusOut: context.handlers.onFocusOut,
});
