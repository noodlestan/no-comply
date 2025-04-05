import type { IconValue, LabelValue } from '@noodlestan/context-ui';

import type { IconButtonProps } from '../IconButton';

export type ExpandButtonProps = Omit<IconButtonProps, 'icon' | 'label'> & {
    expanded: boolean;
    round?: boolean;
    labels?: Partial<ExpandButtonLabels>;
    icons?: Partial<ExpandButtonIcons>;
};

export type ExpandButtonLabels = {
    expand: LabelValue;
    collapse: LabelValue;
};

export type ExpandButtonIcons = {
    expanded: IconValue;
    collapsed: IconValue;
};
