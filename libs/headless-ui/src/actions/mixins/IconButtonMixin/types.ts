import type { IconComponent } from '@noodlestan/context-ui';
import type { ClassList } from '@noodlestan/context-ui-types';

export type IconButtonMixinProps = {
    icon: IconComponent;
};

export type IconButtonMixinElementProps = {
    classList: ClassList;
};

export type IconButtonMixinIconProps = {
    classList: ClassList;
    icon: IconComponent;
};

export type IconButtonMixinAPI = {
    elProps: IconButtonMixinElementProps;
    iconProps: IconButtonMixinIconProps;
};
