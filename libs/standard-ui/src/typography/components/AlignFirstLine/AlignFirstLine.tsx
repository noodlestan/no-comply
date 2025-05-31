import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { AlignFirstLineContextProvider } from '../../providers';

import { ALIGN_FIRST_LINE_PROPS } from './constants';
import { createAlignFirstLine } from './createAlignFirstLine';
import type { AlignFirstLineAllProps, AlignFirstLineProps } from './types';

type Props = ClosedTagProps & AlignFirstLineProps;

export const AlignFirstLine: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props as AlignFirstLineAllProps, ALIGN_FIRST_LINE_PROPS);

    const { $root, composableTypeProps } = createAlignFirstLine(locals as AlignFirstLineProps);
    const $ = combineProps($others, $root);

    return (
        <AlignFirstLineContextProvider props={composableTypeProps}>
            <div {...$}>{props.children}</div>
        </AlignFirstLineContextProvider>
    );
};
