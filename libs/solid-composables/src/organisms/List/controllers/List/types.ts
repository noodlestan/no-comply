import type { AriaListAPI, AriaListProps } from '@no-comply/solid-accessibility';
import type { PropsWithComponent } from '@no-comply/solid-primitives';

import type { ListContext, ListContextOptions, ListContextValue } from '../../contexts';
import type { ListItemProps } from '../ListItem';
import type { ListKeyboardControllerAPI } from '../ListKeyboard';

export type ListProps = ListContextOptions &
    AriaListProps & {
        keyboard?: ListKeyboardControllerAPI;
    };

type ListItemComputedProps = Pick<ListItemProps, 'setSize'>;

export type ListAPI = {
    $root: AriaListAPI['$root'] & ListKeyboardControllerAPI['$root'];
    $label: AriaListAPI['$label'];
    $description: AriaListAPI['$description'];
    itemProps: PropsWithComponent<ListItemProps, ListItemComputedProps>;
    context: ListContext;
    contextValue: ListContextValue;
};
