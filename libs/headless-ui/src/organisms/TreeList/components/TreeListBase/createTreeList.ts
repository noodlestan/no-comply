import { createAriaTree } from '@noodlestan/context-ui-aria';
import { mergeProps, resolveValue } from '@noodlestan/context-ui-primitives';

import type { TreeListAPI } from '../../components/TreeListBase/types';
import { useTreeListContext } from '../../providers';
import type { TreeListProps } from '../../types';

export const createTreeList = (props: TreeListProps): TreeListAPI => {
    const { keyboard } = useTreeListContext();

    const { elProps: ariaTreeElProps, labelProps, descriptionProps } = createAriaTree(props);

    const containerProps = mergeProps(ariaTreeElProps, keyboard.elProps);

    const expand = () => resolveValue(props.expand);

    return {
        containerProps,
        labelProps,
        descriptionProps,
        expand,
    };
};
