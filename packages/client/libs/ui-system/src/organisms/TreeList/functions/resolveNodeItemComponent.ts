import {
    TreeNodeComponentProps,
    TreeNodeItemComponent,
    TreeNodeItemComponentFn,
    TreeNodeItemComponentSolid,
} from '../types';

export const resolveNodeItemComponent = (
    cProps: TreeNodeComponentProps,
    component: TreeNodeItemComponent | undefined,
    fallback: TreeNodeItemComponent,
): TreeNodeItemComponentSolid => {
    const componentOrFn = cProps.node.component || component || fallback;
    if (componentOrFn.length === 4) {
        return (component as TreeNodeItemComponentFn)(cProps);
    }
    return componentOrFn as TreeNodeItemComponentSolid;
};
