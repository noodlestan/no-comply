import type {
    ComposableTypeMixinAPI,
    ComposableTypeMixinAllProps,
    ComposableTypeMixinProps,
    FirstLineAlignMixinAPI,
    FirstLineAlignMixinProps,
} from '../../mixins';

type CommonProps = FirstLineAlignMixinProps & {
    tag?: 'div';
};

export type FirstLineAlignAllProps = CommonProps & ComposableTypeMixinAllProps;

export type FirstLineAlignProps = CommonProps & ComposableTypeMixinProps;

export type FirstLineAlignAPI = {
    $root: FirstLineAlignMixinAPI['$root'] &
        ComposableTypeMixinAPI['$root'] & {
            component: 'div';
        };
    composableTypeProps: ComposableTypeMixinProps;
};
