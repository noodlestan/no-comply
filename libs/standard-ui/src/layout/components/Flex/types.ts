import type { FlexMixinAPI, FlexMixinProps } from '@noodlestan/headless-ui';

import type { LayoutAPI, LayoutProps } from '../Layout';

export type FlexProps = LayoutProps &
    FlexMixinProps & {
        gap?: FlexGap;
    };

export type FlexGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export type FlexElementProps = FlexMixinAPI['elProps'] & LayoutAPI['elProps'];

export type FlexAPI = {
    elProps: FlexElementProps;
};
