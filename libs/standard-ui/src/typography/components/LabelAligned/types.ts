import type { LabelMixinProps } from '../../mixins';
import type { LabelAPI, LabelProps } from '../Label';

export type LabelAlignedProps = Omit<LabelProps, keyof LabelMixinProps>;

export type LabelAlignedAPI = {
	$root: LabelAPI['$root'];
};
