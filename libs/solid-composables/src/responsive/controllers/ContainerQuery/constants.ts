import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContainerQueryProps } from './types';

export const CONTAINER_QUERY_PROPS = definePropKeys<ContainerQueryProps>()(['query']);
