import type { FlexMixinAPI, FlexMixinProps } from '../../mixins';
import type { LayoutBaseAPI, LayoutBaseProps } from '../LayoutBase';

export type FlexBaseProps = LayoutBaseProps & FlexMixinProps;

export type FlexBaseAPI = {
    $root: LayoutBaseAPI['$root'] & FlexMixinAPI['$root'];
};
