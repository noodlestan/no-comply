import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { FLEX_BASE_PROPS } from './constants';
import { createFlexBase } from './createFlexBase';
import { type FlexBaseProps } from './types';

type Props = ClosedTagProps & FlexBaseProps;

export const FlexBase: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, FLEX_BASE_PROPS);

    const { $root } = createFlexBase(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
