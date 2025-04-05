import type { ObjectWithId } from '@noodlestan/context-ui-types';

import type { TreeNode } from '../types';

const flatten = (root: TreeNode): TreeNode[] => {
    return root.children?.reduce((acc, item) => [...acc, ...flatten(item)], [root]) ?? [root];
};

export const getTreeSelectionUntil = (
    root: TreeNode,
    fromObject: ObjectWithId,
    untilObject: ObjectWithId,
): ObjectWithId[] => {
    const nodes = flatten(root);

    let firstSelectedIndex = -1;
    let untilSelectedIndex = -1;
    for (let ix = 0; ix < nodes.length; ix++) {
        if (firstSelectedIndex === -1 && nodes[ix]?.object.id === fromObject.id) {
            firstSelectedIndex = ix;
        }
        if (untilSelectedIndex === -1 && nodes[ix]?.object.id === untilObject.id) {
            untilSelectedIndex = ix;
        }
    }

    if (firstSelectedIndex < untilSelectedIndex) {
        return nodes.slice(firstSelectedIndex, untilSelectedIndex + 1).map(n => n.object);
    }

    if (firstSelectedIndex > untilSelectedIndex) {
        return nodes.slice(untilSelectedIndex, firstSelectedIndex + 1).map(n => n.object);
    }

    return [untilObject];
};
