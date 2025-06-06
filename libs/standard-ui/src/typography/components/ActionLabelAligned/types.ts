import type { ActionLabelMixinProps } from '../../mixins';
import type { ActionLabelAPI, ActionLabelProps } from '../ActionLabel';

export type ActionLabelAlignedProps = Omit<ActionLabelProps, keyof ActionLabelMixinProps>;

export type ActionLabelAlignedAPI = {
	$root: ActionLabelAPI['$root'];
};
