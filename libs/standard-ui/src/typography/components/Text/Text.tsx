import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { TEXT_PROPS } from './constants';
import { createText } from './createText';
import type { TextProps } from './types';

type Props = ClosedTagProps & TextProps;

export const Text: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, TEXT_PROPS);

    const { $root } = createText(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
