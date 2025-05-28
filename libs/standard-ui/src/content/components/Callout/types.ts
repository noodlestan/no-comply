import type { StaticMessageAPI, StaticMessageProps } from '@noodlestan/headless-ui';

import type { ContentMessageTemplateOwnProps } from '../../templates';

export type CalloutProps = Omit<StaticMessageProps, 'aria-describedby'> &
    Omit<ContentMessageTemplateOwnProps, 'onClose'>;

export type CalloutAPI = StaticMessageAPI;
