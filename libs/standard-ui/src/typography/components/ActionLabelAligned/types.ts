import type { ActionLabelMixinProps } from '../..';
import type { ActionLabelAPI, ActionLabelProps } from '../ActionLabel';

export type ActionLabelAlignedProps = Omit<ActionLabelProps, keyof ActionLabelMixinProps>;

export type ActionLabelAlignedAPI = {
    $root: ActionLabelAPI['$root'];
};
