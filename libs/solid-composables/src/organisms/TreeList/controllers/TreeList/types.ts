import type { AriaLabelledAPI, AriaTreeAPI, AriaTreeProps } from '@no-comply/solid-accessibility';
import type { PropsWithComponent } from '@no-comply/solid-primitives';

import type { TreeListContext, TreeListContextOptions, TreeListContextValue } from '../../contexts';
import type { TreeListIcons, TreeListLabels } from '../../types';
import type { TreeListItemProps } from '../TreeListItem';
import type { TreeListKeyboardControllerAPI } from '../TreeListKeyboard';

export type TreeListProps = Omit<TreeListContextOptions, 'labels' | 'icons'> &
    AriaTreeProps & {
        keyboard?: TreeListKeyboardControllerAPI;
        expand?: boolean | number;
        labels?: Partial<TreeListLabels>;
        icons?: Partial<TreeListIcons>;
    };

type TreeListItemComputedProps = Pick<TreeListItemProps, 'node' | 'expand'>;

export type TreeListAPI = {
    $root: AriaTreeAPI['$root'] & TreeListKeyboardControllerAPI['$root'];
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    itemProps: PropsWithComponent<TreeListItemProps, TreeListItemComputedProps>;
    context: TreeListContext;
    contextValue: TreeListContextValue;
};
