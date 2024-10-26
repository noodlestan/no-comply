import {
    ListItemComponent,
    ListItemComponentFn,
    ListItemComponentProps,
    ListItemComponentSolid,
} from '../types';

export const resolveListItemComponent = (
    cProps: ListItemComponentProps,
    component: ListItemComponent | undefined,
    fallback: ListItemComponent,
): ListItemComponentSolid => {
    const componentOrFn = component || fallback;
    if (componentOrFn.length === 4) {
        return (component as ListItemComponentFn)(cProps);
    }
    return componentOrFn as ListItemComponentSolid;
};
