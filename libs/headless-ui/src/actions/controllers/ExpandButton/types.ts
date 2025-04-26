import type { IconValue, LabelValue } from '@noodlestan/context-ui';

import type { IconButtonProps } from '../IconButton';

export type ExpandButtonProps = {
    expanded: boolean;
    labels: ExpandButtonLabels;
    icons: ExpandButtonIcons;
};

export type ExpandButtonLabels = {
    expanded: LabelValue;
    collapsed: LabelValue;
};

export type ExpandButtonIcons = {
    expanded: IconValue;
    collapsed: IconValue;
};

export type ExpandButtonAPI = {
    iconButtonProps: Pick<IconButtonProps, 'label' | 'icon'>;
};
