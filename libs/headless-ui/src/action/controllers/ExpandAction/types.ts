import type { IconValue, LabelValue } from '@noodlestan/context-ui';
import type { AriaAttributes } from '@noodlestan/context-ui-aria';

import type { IconActionProps } from '../IconAction';

export type ExpandActionProps = {
    controls: string;
    expanded: boolean;
    labels: ExpandActionLabels;
    icons: ExpandActionIcons;
};

export type ExpandActionLabels = {
    expanded: LabelValue;
    collapsed: LabelValue;
};

export type ExpandActionIcons = {
    expanded: IconValue;
    collapsed: IconValue;
};

export type ExpandActionAPI = {
    iconActionProps: Pick<IconActionProps, 'label' | 'icon'> & {
        'aria-expanded': AriaAttributes['aria-expanded'];
        'aria-controls': AriaAttributes['aria-controls'];
    };
};
