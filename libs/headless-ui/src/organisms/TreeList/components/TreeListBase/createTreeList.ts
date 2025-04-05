import { createAriaTree } from '@noodlestan/context-ui-aria';
import { mergeProps, resolveValue } from '@noodlestan/context-ui-types';

import type { TreeListAPI } from '../../components/TreeListBase/types';
import type { TreeListProps } from '../../types';

export const createTreeList = (props: TreeListProps): TreeListAPI => {
    const aria = createAriaTree(props);

    const containerProps = mergeProps(aria.elProps, props.keyboard.containerProps);

    const expand = () => resolveValue(props.expand);

    return {
        containerProps,
        labelProps: aria.labelProps,
        expand,
    };
};
