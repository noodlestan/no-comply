import type {
    AlignFirstLineMixinAPI,
    AlignFirstLineMixinProps,
    ComposableTypeMixinAPI,
    ComposableTypeMixinAllProps,
    ComposableTypeMixinProps,
} from '../../mixins';

type CommonProps = AlignFirstLineMixinProps & {
    tag?: 'div';
};

export type AlignFirstLineAllProps = CommonProps & ComposableTypeMixinAllProps;

export type AlignFirstLineProps = CommonProps & ComposableTypeMixinProps;

export type AlignFirstLineAPI = {
    $root: AlignFirstLineMixinAPI['$root'] &
        ComposableTypeMixinAPI['$root'] & {
            component: 'div';
        };
    composableTypeProps: ComposableTypeMixinProps;
};
