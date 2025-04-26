import type { AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { StaticMessageAPI, StaticMessageProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type CalloutProps = Omit<StaticMessageProps, keyof AriaLabelledProps> & {
    size?: CalloutSize;
    length?: CalloutLength;
};

export type CalloutSize = 'small' | 'normal';
export type CalloutLength = 'compact' | 'full';

export type CalloutAPI = {
    $root: StaticMessageAPI['$root'] & {
        classList: ClassList;
    };
    $label: StaticMessageAPI['$label'];
    $icon: StaticMessageAPI['$icon'] & {
        size: ContentSize;
    };
};
