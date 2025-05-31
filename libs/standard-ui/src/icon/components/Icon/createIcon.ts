import { createIcon as createHeadlessIcon, createIconMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import styles from './Icon.module.scss';
import { $ICON } from './constants';
import type { IconAPI, IconProps } from './types';

const defaultProps: PickRequired<IconProps, 'size'> = {
    size: 'normal',
};

export const createIcon = (props: IconProps): IconAPI => {
    const [locals, expose, compose] = createExposable($ICON, props);

    const { $root: $iconRoot } = compose(createHeadlessIcon(locals));
    const { $root: $iconMixinRoot } = compose(createIconMixin(locals));

    const size = () => locals.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [`size-${size()}`]);

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root: combineProps($iconRoot, $iconMixinRoot, $root),
    });
};
