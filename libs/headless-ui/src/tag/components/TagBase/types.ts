import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { TagComponentName } from '../../types';

export type TagBaseProps = {
    tag: TagComponentName;
};

export const TAG_BASE_PROPS = definePropKeys<TagBaseProps>()(['tag']);
