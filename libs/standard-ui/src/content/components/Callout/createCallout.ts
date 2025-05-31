import { createStaticMessage } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { $CALLOUT } from './constants';
import type { CalloutAPI, CalloutProps } from './types';

export const createCallout = (props: CalloutProps): CalloutAPI => {
    const [locals, expose, compose] = createExposable($CALLOUT, props);

    const { $root: $staticMessageRoot, ...rest } = compose(createStaticMessage(locals));

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: $staticMessageRoot,
    });
};
