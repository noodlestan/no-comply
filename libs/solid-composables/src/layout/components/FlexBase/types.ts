import type { LayoutTagName } from '@no-comply/solid-accessibility';

import type { FlexMixinAPI, FlexMixinProps } from '../../mixins';
import type { LayoutBaseAPI, LayoutBaseProps } from '../LayoutBase';

export type FlexBaseProps = LayoutBaseProps &
    FlexMixinProps & {
        tag?: LayoutTagName;
    };

export type FlexBaseAPI = {
    $root: LayoutBaseAPI['$root'] & FlexMixinAPI['$root'];
};
