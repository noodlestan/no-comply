import type { IconComponent } from '@noodlestan/context-ui';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { JSX } from 'solid-js';

export type IconMixinProps = {
    icon: IconComponent;
};

export type IconMixinAPI = {
    elProps: {
        component: 'span';
        children: JSX.Element;
        classList: ClassList;
    };
};
