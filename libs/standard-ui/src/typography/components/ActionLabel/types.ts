import type { ActionLabelTagName } from '@noodlestan/context-ui-aria';

import type { ActionLabelMixinAPI, ActionLabelMixinProps } from '../..';

export type ActionLabelOwnProps = {
    tag?: ActionLabelTagName;
};

export type ActionLabelProps = ActionLabelMixinProps & ActionLabelOwnProps;

export type ActionLabelAPI = {
    $root: ActionLabelMixinAPI['$root'] & {
        component: ActionLabelTagName;
    };
};
