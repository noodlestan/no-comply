import type { ClosedTagProps, LinkMixinAPI, LinkMixinProps } from '@noodlestan/headless-ui';

export type LinkProps = Omit<ClosedTagProps, 'component'> & LinkMixinProps;

export type LinkAPI = {
    elProps: Omit<ClosedTagProps, 'component'> & LinkMixinAPI['elProps'];
};
