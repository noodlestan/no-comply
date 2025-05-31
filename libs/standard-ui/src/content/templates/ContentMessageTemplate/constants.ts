import type { ContentMessageAPI } from '@no-comply/solid-composables';
import { EXPOSED_DATA_PROPS } from '@no-comply/solid-contexts';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentMessageTemplateOwnProps, ContentMessageTemplateProps } from './types';

export const $CONTENT_MESSAGE_TEMPLATE = 'template:content:message';

export const CONTENT_MESSAGE_API_PROPS = definePropKeys<ContentMessageAPI>()([
    '$root',
    '$title',
    '$description',
    '_icon',
]);

export const CONTENT_MESSAGE_TEMPLATE_OWN_PROPS = definePropKeys<ContentMessageTemplateOwnProps>()([
    'onClose',
    'size',
    'length',
]);

export const CONTENT_MESSAGE_TEMPLATE_PROPS = definePropKeys<ContentMessageTemplateProps>()([
    ...EXPOSED_DATA_PROPS,
    ...CONTENT_MESSAGE_API_PROPS,
    ...CONTENT_MESSAGE_TEMPLATE_OWN_PROPS,
]);
