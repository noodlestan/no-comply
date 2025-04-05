import type { TreeNode } from '../types';

export const getTreeNodesToExpand = (node: TreeNode, level?: number): string[] => {
    const nodes: string[] = [node.id];
    if (node.children) {
        const isUndefined = typeof level === 'undefined';
        const nextLevel = (level ?? 0) - 1;
        if (isUndefined || nextLevel >= 0) {
            const childNodes = node.children.flatMap(child =>
                getTreeNodesToExpand(child, nextLevel),
            );
            nodes.push(...childNodes);
        }
    }
    return nodes;
};
