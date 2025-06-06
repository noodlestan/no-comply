import type { ActionLabelTagName } from '@no-comply/solid-accessibility';

import type { ActionLabelMixinAPI, ActionLabelMixinProps } from '../../mixins';

export type ActionLabelOwnProps = {
    tag?: ActionLabelTagName;
};

export type ActionLabelProps = ActionLabelMixinProps & ActionLabelOwnProps;

export type ActionLabelAPI = {
    $root: ActionLabelMixinAPI['$root'] & {
        component: ActionLabelTagName;
    };
};
