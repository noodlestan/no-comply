import type { LayoutTagName } from '@noodlestan/context-ui-aria';

import type { FlexMixinAPI, FlexMixinProps } from '../../mixins';
import type { LayoutBaseAPI, LayoutBaseProps } from '../LayoutBase';

export type FlexBaseProps = LayoutBaseProps &
    FlexMixinProps & {
        tag?: LayoutTagName;
    };

export type FlexBaseAPI = {
    $root: LayoutBaseAPI['$root'] & FlexMixinAPI['$root'];
};
