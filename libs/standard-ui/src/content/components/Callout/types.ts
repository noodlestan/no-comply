import type { StaticMessageAPI, StaticMessageProps } from '@no-comply/solid-composables';

import type { ContentMessageTemplateOwnProps } from '../../templates';

export type CalloutProps = Omit<StaticMessageProps, 'aria-describedby'> &
	Omit<ContentMessageTemplateOwnProps, 'onClose'>;

export type CalloutAPI = StaticMessageAPI & {
	_template: ContentMessageTemplateOwnProps;
};
