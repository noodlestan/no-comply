import { createFocusTargetRef } from '@noodlestan/context-ui';
import { Surface, createFocusRingMixin } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

import { SCREEN_MAIN_TARGET } from '../../constants';

type Props = {
    labelledby: string;
};

export const PageMain: ParentComponent<Props> = props => {
    const [setMainRef] = createFocusTargetRef(SCREEN_MAIN_TARGET, { transient: true });

    const { $root } = createFocusRingMixin({ inset: true });

    return (
        <Surface
            tag="main"
            variant={'page'}
            labelledby={props.labelledby}
            stretch="height"
            overflow="y-auto"
            ref={setMainRef}
            {...$root}
        >
            {props.children}
        </Surface>
    );
};
