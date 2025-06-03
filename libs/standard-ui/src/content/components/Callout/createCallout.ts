import { createStaticMessage } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { splitProps } from 'solid-js';

import { $CALLOUT } from './constants';
import type { CalloutAPI, CalloutProps } from './types';

export const createCallout = (props: CalloutProps): CalloutAPI => {
    const [locals, expose, compose] = createExposable($CALLOUT, props);

    const message = compose(createStaticMessage(locals));

    const [_template] = splitProps(props, ['size', 'length']);

    return exposeAPI(expose, '_template', {
        ...message,
        _template,
    });
};
