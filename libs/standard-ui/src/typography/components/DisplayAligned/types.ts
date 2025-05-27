import type { DisplayMixinProps } from '../../mixins';
import type { DisplayAPI, DisplayProps } from '../Display';

export type DisplayAlignedProps = Omit<DisplayProps, keyof DisplayMixinProps>;

export type DisplayAlignedAPI = {
    $root: DisplayAPI['$root'];
};
