import type { AriaListItemAPI, AriaListItemProps } from '@no-comply/solid-accessibility';
import type { ObjectWithId, PropsWithComponent } from '@no-comply/solid-primitives';

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
