import type { IconComponent } from '@noodlestan/context-ui';
import type { ClassList } from '@noodlestan/context-ui-types';
import type { JSX } from 'solid-js';

export type IconMixinProps = {
    icon: IconComponent;
};

export type IconMixinElementProps = {
    component: 'span';
    children: JSX.Element;
    classList: ClassList;
};

export type IconMixinAPI = {
    elProps: IconMixinElementProps;
};
