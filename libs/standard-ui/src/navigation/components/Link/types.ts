import type {
    ClosedTagProps,
    LinkMixinElementProps,
    LinkMixinProps,
} from '@noodlestan/headless-ui';

export type LinkProps = Omit<ClosedTagProps, 'component'> & LinkMixinProps;

export type LinkElementProps = Omit<ClosedTagProps, 'component'> & LinkMixinElementProps;

export type LinkAPI = {
    elProps: LinkElementProps;
};
