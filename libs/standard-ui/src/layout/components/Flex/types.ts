import type { FlexMixinElementProps, FlexMixinProps } from '@noodlestan/headless-ui';

import type { LayoutElementProps, LayoutProps } from '../Layout';

export type FlexProps = LayoutProps &
    FlexMixinProps & {
        gap?: FlexGap;
    };

export type FlexGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export type FlexElementProps = FlexMixinElementProps & LayoutElementProps;

export type FlexAPI = {
    elProps: FlexElementProps;
};
