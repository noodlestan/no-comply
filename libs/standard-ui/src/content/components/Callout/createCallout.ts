import { createStaticMessage } from '@noodlestan/headless-ui';

import type { CalloutAPI, CalloutProps } from './types';

export const createCallout = (props: CalloutProps): CalloutAPI => {
    return createStaticMessage(props);
};
