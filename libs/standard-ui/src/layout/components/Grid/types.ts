import type { GridMixinAPI, GridMixinProps } from '../../mixins';
import { type LayoutAPI, type LayoutProps } from '../Layout';

export type GridProps = LayoutProps & GridMixinProps;

export type GridAPI = {
	$root: GridMixinAPI['$root'] & LayoutAPI['$root'];
};
