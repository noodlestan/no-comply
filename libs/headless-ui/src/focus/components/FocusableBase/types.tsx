import type { LabelValue } from '@noodlestan/context-ui';
import type { ClassList, DataAttributes } from '@noodlestan/context-ui-types';

import type { FocusableAPI, FocusableProps } from '../../controllers';

type FocusableLabels = {
    region: LabelValue;
};
export type FocusableBaseProps = FocusableProps & {
    focusable?: FocusableAPI;
    labels?: Partial<FocusableLabels>;
    classList?: ClassList;
} & DataAttributes;
