import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import { createActionLabelMixin } from '../../../typography';
import { createActionMixin } from '../Action';
import { createSizedActionMixin } from '../SizedAction';

import styles from './ButtonMixin.module.scss';
import { $BUTTON_MIXIN } from './constants';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
    const [locals, expose, compose] = createExposable($BUTTON_MIXIN, props);

    const { $root: $actionMixinRoot } = compose(createActionMixin(locals));
    const { $root: $sizedActionMixinRoot, size } = compose(createSizedActionMixin(locals));

    const actionLabelStaticProps = { nowrap: true };
    const actionLabelProps = computedProps(actionLabelStaticProps, {
        variant: size,
    });
    const { $root: $actionLabelMixinRoot } = compose(createActionLabelMixin(actionLabelProps));

    const classList = createClassList(styles, () => [`Button`, `size-${size()}`]);
    const $root = {
        classList,
    };

    return exposeAPI(expose, '$root', {
        $root: combineProps($actionMixinRoot, $sizedActionMixinRoot, $actionLabelMixinRoot, $root),
        size,
    });
};
