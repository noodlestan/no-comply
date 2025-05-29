import type { ContentMessageAPI } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentMessageTemplateOwnProps, ContentMessageTemplateProps } from './types';

export const CONTENT_MESSAGE_API_PROPS = definePropKeys<ContentMessageAPI>()([
    '$root',
    '$title',
    'iconProps',
    '$description',
]);

export const CONTENT_MESSAGE_TEMPLATE_OWN_PROPS = definePropKeys<ContentMessageTemplateOwnProps>()([
    'onClose',
    'size',
    'length',
]);

export const CONTENT_MESSAGE_TEMPLATE_PROPS = definePropKeys<ContentMessageTemplateProps>()([
    ...CONTENT_MESSAGE_API_PROPS,
    ...CONTENT_MESSAGE_TEMPLATE_OWN_PROPS,
]);
