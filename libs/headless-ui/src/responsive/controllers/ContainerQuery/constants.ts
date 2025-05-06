import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ContainerQueryProps } from './types';

export const CONTAINER_QUERY_PROPS = definePropKeys<ContainerQueryProps>()(['query']);
