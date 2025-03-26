import { createAriaTree } from '../../../../aria';
import { resolveAccessorOrValue } from '../../../../private';
import type { TreeListContextValue } from '../../private';

import type { TreeListAPI, TreeListContainerProps } from './types';

export const createTreeList = (context: TreeListContextValue): TreeListAPI => {
    console.info('createTreeList()');

    const aria = createAriaTree(context.options);

    const containerProps = (): TreeListContainerProps => ({
        ...aria.elProps(),
        ...context.keyboard.containerProps(),
    });

    const expand = () => resolveAccessorOrValue(context.expand);

    return {
        containerProps,
        labelProps: aria.labelProps,
        expand,
    };
};
