import { createStaticMessage } from '@no-comply/solid-composables';

import type { CalloutAPI, CalloutProps } from './types';

export const createCallout = (props: CalloutProps): CalloutAPI => {
    return createStaticMessage(props);
};
