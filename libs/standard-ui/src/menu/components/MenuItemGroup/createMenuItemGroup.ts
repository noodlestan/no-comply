import { createMenuItemGroup as createHeadlessMenuItemGroup } from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createMenuItemGroupMixin } from '../../mixins';

import type { MenuItemGroupAPI, MenuItemGroupProps } from './types';

export const createMenuItemGroup = (props: MenuItemGroupProps): MenuItemGroupAPI => {
    const {
        $root: $headlessRoot,
        $label: $headlessLabel,
        $description: $headlessDescription,
        ...rest
    } = createHeadlessMenuItemGroup(props);

    const {
        $root: $groupMixinRoot,
        $label: $groupMixinLabel,
        $description: $groupMixinDescription,
    } = createMenuItemGroupMixin();

    const labelProps = {
        variant: 'normal',
    } as const;

    const descriptionProps = {
        variant: 'small',
    } as const;

    return {
        ...rest,
        $root: combineProps($headlessRoot, $groupMixinRoot),
        labelProps: combineProps($headlessLabel, $groupMixinLabel, labelProps),
        descriptionProps: combineProps(
            $headlessDescription,
            $groupMixinDescription,
            descriptionProps,
        ),
    };
};
