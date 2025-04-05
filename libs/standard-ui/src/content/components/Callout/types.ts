import type { ClosedTagProps, StaticMessageAPI, StaticMessageProps } from '@noodlestan/headless-ui';

import type { IconSize } from '../../../icon';

export type CalloutProps = Omit<ClosedTagProps, 'component'> &
    StaticMessageProps & {
        size?: CalloutSize;
        length?: CalloutLength;
    };

export type CalloutSize = 's' | 'm';
export type CalloutLength = 'compact' | 'full';

export type CalloutElementProps = Omit<ClosedTagProps, 'component'> & StaticMessageAPI['elProps'];

export type CalloutIconProps = StaticMessageAPI['iconProps'] & {
    size: IconSize;
};

export type CalloutAPI = {
    elProps: CalloutElementProps;
    labelProps: StaticMessageAPI['labelProps'];
    iconProps: CalloutIconProps;
};
