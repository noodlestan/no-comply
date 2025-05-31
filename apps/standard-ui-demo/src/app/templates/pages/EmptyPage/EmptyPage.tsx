import { createFocusRing } from '@no-comply/solid-composables';
import { createFocusTargetRef } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';
import { Surface, createFocusRingMixin } from '@no-comply/standard-ui';
import { type ParentComponent } from 'solid-js';

import { SCREEN_MAIN_TARGET } from '../../constants';

type Props = {
    ['aria-labelledby']: string;
};

export const EmptyPage: ParentComponent<Props> = props => {
    const [setMainRef] = createFocusTargetRef(SCREEN_MAIN_TARGET, { transient: true });

    const { $root: $focusRing } = createFocusRing({ passive: true });
    const { $root: $focusRingMixin } = createFocusRingMixin({ inset: true });

    const $ = combineProps($focusRing, $focusRingMixin);

    return (
        <Surface
            tag="main"
            variant={'page'}
            aria-labelledby={props['aria-labelledby']}
            stretch="height"
            overflow="y-auto"
            ref={setMainRef}
            {...$}
        >
            {props.children}
        </Surface>
    );
};
