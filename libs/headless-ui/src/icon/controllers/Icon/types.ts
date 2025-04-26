import type { IconComponent } from '@noodlestan/context-ui';
import type { JSX } from 'solid-js';

export type IconProps = {
    icon: IconComponent;
};

export type IconAPI = {
    $root: {
        component: 'span';
        children: JSX.Element;
    };
};
