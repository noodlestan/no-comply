import type { IconComponent } from '@noodlestan/context-ui';
import type { ClassList } from '@noodlestan/context-ui-primitives';

export type IconButtonMixinProps = {
    icon: IconComponent;
};

export type IconButtonMixinAPI = {
    elProps: {
        classList: ClassList;
    };
    iconProps: {
        classList: ClassList;
        icon: IconComponent;
    };
};
