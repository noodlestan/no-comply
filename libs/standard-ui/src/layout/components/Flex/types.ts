import type { FlexMixinAPI, FlexMixinProps } from '../../mixins';
import { type LayoutAPI, type LayoutProps } from '../Layout';

export type FlexProps = LayoutProps & FlexMixinProps;

export type FlexAPI = {
    $root: FlexMixinAPI['$root'] & LayoutAPI['$root'];
};
