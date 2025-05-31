import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createFlexMixin } from '../../mixins';
import { createLayoutBase } from '../LayoutBase';

import { $FLEX_BASE } from './constants';
import { type FlexBaseAPI, type FlexBaseProps } from './types';

export const createFlexBase = (props: FlexBaseProps): FlexBaseAPI => {
    const [locals, expose, compose] = createExposable($FLEX_BASE, props);

    const { $root: $layoutMixinRoot } = compose(createLayoutBase(locals));
    const { $root: $flexMixinRoot } = compose(createFlexMixin(locals));

    return exposeAPI(expose, '$root', {
        $root: combineProps($layoutMixinRoot, $flexMixinRoot),
    });
};
