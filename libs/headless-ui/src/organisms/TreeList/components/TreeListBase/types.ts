import type { AriaLabelElementProps, AriaTreeElementProps } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';
import type { Accessor } from 'solid-js';

import type { TreeKeyboardControllerContainerProps } from '../../controllers/TreeKeyboardController';
import type { TreeListProps } from '../../types';

export type TreeListBaseProps = TreeListProps & {
    classList?: ClassList;
};

export type TreeListContainerProps = AriaTreeElementProps & TreeKeyboardControllerContainerProps;

export type TreeListAPI = {
    containerProps: TreeListContainerProps;
    labelProps: AriaLabelElementProps;
    expand: Accessor<boolean | number | undefined>;
};
