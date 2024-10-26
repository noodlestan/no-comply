import { JSX } from 'solid-js';

import { IconComponent } from '../../types';

export type IconSize = 'xs' | 's' | 'm' | 'l';

export type IconProps = {
    icon: IconComponent | JSX.Element;
    size?: IconSize;
    classList?: { [key: string]: boolean };
};
