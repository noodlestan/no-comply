import type { Accessor } from 'solid-js';

import type { AriaLabelProps, AriaTreeProps } from '../../../../aria';
import type { TreeKeyboardControllerContainerProps } from '../TreeKeyboardController';

export type TreeListContainerProps = AriaTreeProps & TreeKeyboardControllerContainerProps;

export type TreeListAPI = {
    containerProps: Accessor<TreeListContainerProps>;
    labelProps: Accessor<AriaLabelProps>;
    expand: Accessor<boolean | number | undefined>;
};
