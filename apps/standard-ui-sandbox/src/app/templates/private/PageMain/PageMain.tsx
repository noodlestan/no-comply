import { createFocusTargetRef } from '@noodlestan/context-ui';
import { mergeProps } from '@noodlestan/context-ui-primitives';
import { createFocusRing } from '@noodlestan/headless-ui';
import { Surface, createFocusRingMixin } from '@noodlestan/standard-ui';
import { type ParentComponent } from 'solid-js';

import { SCREEN_MAIN_TARGET } from '../../constants';

type Props = {
    labelledby: string;
};

export const PageMain: ParentComponent<Props> = props => {
    const [setMainRef] = createFocusTargetRef(SCREEN_MAIN_TARGET, { transient: true });

    const { $root: $focusRing } = createFocusRing({ passive: true });
    const { $root: $focusRingMixin } = createFocusRingMixin({ inset: true });

    const $ = mergeProps($focusRing, $focusRingMixin);

    return (
        <Surface
            tag="main"
            variant={'page'}
            labelledby={props.labelledby}
            stretch="height"
            overflow="y-auto"
            ref={setMainRef}
            {...$}
        >
            {props.children}
        </Surface>
    );
};
