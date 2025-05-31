import {
    type ClosedTagProps,
    type PopoverTriggerTagProps,
    combineProps,
} from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { BUTTON_PROPS } from './constants';
import { createButton } from './createButton';
import type { ButtonProps } from './types';

type Props = ClosedTagProps & PopoverTriggerTagProps & ButtonProps;

export const Button: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, BUTTON_PROPS);

    const { $root } = createButton(locals);
    const $ = combineProps($others, $root);

    return <Dynamic {...$} />;
};
