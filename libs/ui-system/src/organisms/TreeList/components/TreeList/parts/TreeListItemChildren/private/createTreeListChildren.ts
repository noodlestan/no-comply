import { createAriaGroup } from '../../../../../../../aria';
import { l } from '../../../../../../../labels';
import { useTreeListContext } from '../../../../../providers';

import type {
    TreeListChildrenContainerProps,
    TreeListChildrenOptions,
    TreeListNodeAPI,
} from './types';

export const createTreeListChildren = (options: TreeListChildrenOptions): TreeListNodeAPI => {
    const { state, labels } = useTreeListContext();
    const { node } = options;

    const expanded = () => Boolean(options.expand() || state.isExpanded(node().id));
    const setSize = () => options.node().children?.length || 0;

    const ariaTreeGroup = createAriaGroup({
        label: l(labels.group, node()),
        expanded,
        setSize,
    });

    const containerProps = (): TreeListChildrenContainerProps => ({
        ...ariaTreeGroup.elProps(),
        style: { '--tree-list-indent-level': options.level() + 1 },
    });

    return {
        containerProps,
    };
};
