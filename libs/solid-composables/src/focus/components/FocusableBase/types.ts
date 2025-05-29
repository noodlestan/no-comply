import type { LabelValue } from '@no-comply/solid-contexts';

import type { FocusableAPI, FocusableProps } from '../../controllers';

type FocusableLabels = {
    region: LabelValue;
};

export type FocusableBaseProps = FocusableProps & {
    labels?: Partial<FocusableLabels>;
};

export type FocusableBaseAPI = FocusableAPI;
