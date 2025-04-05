import type { Styles } from '@noodlestan/context-ui-types';

import type { ContextValue } from '../../context/private';

export const reduceContextVars = <T extends ContextValue>(
    resolved: T[],
    extractVars: (node: T) => Styles | undefined,
): Styles => {
    return resolved.reduce((acc, node) => ({ ...acc, ...extractVars(node) }), {});
};
