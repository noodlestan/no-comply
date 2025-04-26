import type { AriaListItemAPI, AriaListItemProps } from '@noodlestan/context-ui-aria';
import type { ObjectWithId, PropsWithComponent } from '@noodlestan/context-ui-primitives';

import type { ListItemContentsProps } from '../../types';

export type ListItemProps = Omit<AriaListItemProps, 'component' | 'selected'> & {
    item: ObjectWithId;
};

export type ListItemAPI = {
    $root: AriaListItemAPI['$root'];
    $label: AriaListItemAPI['$label'];
    $description: AriaListItemAPI['$description'];
    itemContentsProps: PropsWithComponent<ListItemContentsProps>;
};
