import type { LabelValue } from '@noodlestan/context-ui';
import type { ClassList, DataAttributes } from '@noodlestan/context-ui-primitives';

import type { FocusableProps } from '../../controllers';

type FocusableLabels = {
    region: LabelValue;
};

export type FocusableBaseProps = FocusableProps & {
    labels?: Partial<FocusableLabels>;
    classList?: ClassList;
} & DataAttributes;
