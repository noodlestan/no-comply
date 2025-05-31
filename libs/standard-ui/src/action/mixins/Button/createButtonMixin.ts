import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import { createActionLabelMixin } from '../../../typography';
import { createActionMixin } from '../Action';
import { createSizedActionMixin } from '../SizedAction';

import styles from './ButtonMixin.module.scss';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
    const { $root: $actionMixinRoot } = createActionMixin(props);
    const { $root: $sizedActionMixinRoot, size } = createSizedActionMixin(props);

    const actionLabelStaticProps = { nowrap: true };
    const actionLabelProps = computedProps(actionLabelStaticProps, {
        variant: size,
    });
    const { $root: $actionLabelMixinRoot } = createActionLabelMixin(actionLabelProps);

    const classList = createClassList(styles, () => [`Button`, `size-${size()}`]);
    const $root = {
        classList,
    };

    return {
        $root: combineProps($actionMixinRoot, $sizedActionMixinRoot, $actionLabelMixinRoot, $root),
        size,
    };
};
