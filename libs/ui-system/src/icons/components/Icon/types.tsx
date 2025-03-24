import type { JSX } from 'solid-js';

import type { ClassList } from '../../../dom';
import type { IconComponent } from '../../types';

export type IconSize = 'xs' | 's' | 'm' | 'l';

export type IconProps = {
    icon: IconComponent | JSX.Element;
    size?: IconSize;
    classList?: ClassList;
};
