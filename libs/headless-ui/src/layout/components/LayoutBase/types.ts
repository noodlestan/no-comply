import type { LayoutMixinAPI, LayoutMixinProps } from '../../mixins';

export type LayoutBaseProps = LayoutMixinProps;

export type LayoutBaseAPI = {
    $root: LayoutMixinAPI['$root'];
};
