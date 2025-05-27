import type { TextMixinProps } from '../../mixins';
import type { TextAPI, TextProps } from '../Text';

export type TextAlignedProps = Omit<TextProps, keyof TextMixinProps>;

export type TextAlignedAPI = {
    $root: TextAPI['$root'];
};
