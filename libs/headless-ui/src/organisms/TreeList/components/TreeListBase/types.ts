import type { AriaLabelledAPI, AriaTreeAPI } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { Accessor } from 'solid-js';

import type { TreeKeyboardControllerAPI } from '../../controllers/TreeKeyboardController';
import type { TreeListProps } from '../../types';

export type TreeListBaseProps = TreeListProps & {
    classList?: ClassList;
};

export type TreeListAPI = {
    elProps: AriaTreeAPI['elProps'] & TreeKeyboardControllerAPI['elProps'];
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
    expand: Accessor<boolean | number | undefined>;
};
