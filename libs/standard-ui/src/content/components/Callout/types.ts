import type { AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { ClosedTagProps, StaticMessageAPI, StaticMessageProps } from '@noodlestan/headless-ui';

import type { IconSize } from '../../../icon';

export type CalloutProps = Omit<ClosedTagProps, 'component'> &
    Omit<StaticMessageProps, keyof AriaLabelledProps> & {
        size?: CalloutSize;
        length?: CalloutLength;
    };

export type CalloutSize = 's' | 'm';
export type CalloutLength = 'compact' | 'full';

export type CalloutAPI = {
    elProps: Omit<ClosedTagProps, 'component'> & StaticMessageAPI['elProps'];
    labelProps: StaticMessageAPI['labelProps'];
    iconProps: StaticMessageAPI['iconProps'] & {
        size: IconSize;
    };
};
