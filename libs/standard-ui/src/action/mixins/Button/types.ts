import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';
import type { ActionLabelMixinAPI } from '../../../typography';
import type { ActionMixinAPI, ActionMixinProps } from '../Action';
import type { SizedActionMixinAPI, SizedActionMixinProps } from '../SizedAction';

export type ButtonMixinProps = ActionMixinProps & Pick<SizedActionMixinProps, 'size' | 'aligned'>;

export type ButtonMixinAPI = {
	$root: ActionMixinAPI['$root'] & SizedActionMixinAPI['$root'] & ActionLabelMixinAPI['$root'];
	size: Accessor<ContentSize>;
};
