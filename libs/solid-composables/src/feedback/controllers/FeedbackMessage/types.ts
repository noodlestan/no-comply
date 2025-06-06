import type { AriaRegionAPI } from '@no-comply/solid-accessibility';
import type { ExposedDataProps } from '@no-comply/solid-contexts';

import type { ContentMessageAPI, ContentMessageProps } from '../../../content';

export type FeedbackMessageVariant = 'busy' | 'success' | 'error';

export type FeedbackMessageProps = Omit<ContentMessageProps, 'variant' | 'icon'> & {
	variant?: FeedbackMessageVariant;
};

export type FeedbackMessageAPI = Omit<ContentMessageAPI, '$root'> & {
	$root: AriaRegionAPI<'status' | 'alert'>['$root'] &
		ExposedDataProps & {
			'aria-live': 'polite' | 'assertive';
			'data-message': FeedbackMessageVariant;
		};
};
