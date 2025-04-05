import type { LayoutTagName } from '@noodlestan/context-ui-aria';

import type { TagProps } from '../../../tag';
import type { LayoutMixinProps } from '../../mixins';

export type LayoutBaseProps = Omit<TagProps, 'component'> &
    LayoutMixinProps & {
        component?: LayoutTagName;
    };
