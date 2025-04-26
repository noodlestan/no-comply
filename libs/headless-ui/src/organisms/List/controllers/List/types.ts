import type { AriaListAPI, AriaListProps } from '@noodlestan/context-ui-aria';
import type { PropsWithComponent } from '@noodlestan/context-ui-primitives';

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
