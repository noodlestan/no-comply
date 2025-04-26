import { type FlexMixinAPI, type FlexMixinProps } from '@noodlestan/headless-ui';

import { type LayoutAPI, type LayoutProps } from '../Layout';

export type FlexProps = LayoutProps &
    FlexMixinProps & {
        gap?: FlexGap;
    };

export type FlexGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export type FlexAPI = {
    $root: FlexMixinAPI['$root'] & LayoutAPI['$root'];
};
