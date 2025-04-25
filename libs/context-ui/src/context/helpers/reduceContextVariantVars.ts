import type { Styles } from '@noodlestan/context-ui-primitives';

import type { ContextVariant } from '../types';

export const reduceContextVariantVars = <T extends ContextVariant>(
    resolved: T[],
    extractVars: (node: T) => Styles | undefined,
): Styles => {
    return resolved.reduce((acc, node) => ({ ...acc, ...extractVars(node) }), {});
};
