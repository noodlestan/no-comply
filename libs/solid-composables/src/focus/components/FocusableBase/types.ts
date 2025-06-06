import type { LabelValue } from '@no-comply/solid-contexts';

import type { FocusableAPI, FocusableProps } from '../../controllers';
import type { FocusableMixinAPI } from '../../mixins';

type FocusableLabels = {
	region: LabelValue;
};

export type FocusableBaseProps = FocusableProps & {
	labels?: Partial<FocusableLabels>;
};

export type FocusableBaseAPI = Omit<FocusableAPI, '$root'> & {
	$root: FocusableAPI['$root'] & FocusableMixinAPI['$root'];
};
