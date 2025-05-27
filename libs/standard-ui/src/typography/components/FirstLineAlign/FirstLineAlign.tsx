import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { FirstLineAlignContextProvider } from '../../providers';

import { FIRST_LINE_ALIGN_PROPS } from './constants';
import { createFirstLineAlign } from './createFirstLineAlign';
import type { FirstLineAlignAllProps, FirstLineAlignProps } from './types';

type Props = ClosedTagProps & FirstLineAlignProps;

export const FirstLineAlign: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props as FirstLineAlignAllProps, FIRST_LINE_ALIGN_PROPS);

    const { $root, composableTypeProps } = createFirstLineAlign(locals as FirstLineAlignProps);
    const $ = mergeProps($others, $root);

    return (
        <FirstLineAlignContextProvider props={composableTypeProps}>
            <div {...$}>{props.children}</div>
        </FirstLineAlignContextProvider>
    );
};
