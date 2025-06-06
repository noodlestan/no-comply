import type { AriaRegionAPI } from '@no-comply/solid-accessibility';
import type { ExposedDataProps } from '@no-comply/solid-contexts';

import type { ContentMessageAPI, ContentMessageProps } from '../ContentMessage';

export type StaticMessageVariant = 'passive' | 'success' | 'info' | 'warning' | 'danger';

export type StaticMessageProps = Omit<ContentMessageProps, 'variant' | 'icon'> & {
	variant?: StaticMessageVariant;
};

export type StaticMessageAPI = Omit<ContentMessageAPI, '$root'> & {
	$root: AriaRegionAPI<'note'>['$root'] &
		ExposedDataProps & {
			'data-message': StaticMessageVariant;
		};
};
