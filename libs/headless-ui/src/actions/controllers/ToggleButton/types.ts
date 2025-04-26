import type { IconValue, LabelValue } from '@noodlestan/context-ui';

import type { IconButtonProps } from '../IconButton';

export type ToggleButtonProps = {
    value: boolean;
    labels: ToggleButtonLabels;
    icons: ToggleButtonIcons;
};

export type ToggleButtonLabels = {
    on: LabelValue;
    off: LabelValue;
};

export type ToggleButtonIcons = {
    on: IconValue;
    off: IconValue;
};

export type ToggleButtonAPI = {
    iconButtonProps: Pick<IconButtonProps, 'label' | 'icon'>;
};
