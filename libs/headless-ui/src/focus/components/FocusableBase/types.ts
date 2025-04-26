import type { LabelValue } from '@noodlestan/context-ui';

import type { FocusableAPI, FocusableProps } from '../../controllers';

type FocusableLabels = {
    region: LabelValue;
};

export type FocusableBaseProps = FocusableProps & {
    labels?: Partial<FocusableLabels>;
};

export type FocusableBaseAPI = FocusableAPI;
