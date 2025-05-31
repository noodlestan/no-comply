import { createMenuItemGroup as createHeadlessMenuItemGroup } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createMenuItemGroupMixin } from '../../mixins';

import { $MENU_ITEM_GROUP } from './constants';
import type { MenuItemGroupAPI, MenuItemGroupProps } from './types';

export const createMenuItemGroup = (props: MenuItemGroupProps): MenuItemGroupAPI => {
    const [locals, expose, compose] = createExposable($MENU_ITEM_GROUP, props);

    const {
        $root: $headlessRoot,
        $label: $headlessLabel,
        $description: $headlessDescription,
        ...rest
    } = compose(createHeadlessMenuItemGroup(locals));

    const {
        $root: $groupMixinRoot,
        $label: $groupMixinLabel,
        $description: $groupMixinDescription,
    } = compose(createMenuItemGroupMixin());

    const _label = {
        variant: 'normal',
    } as const;

    const _textDescription = {
        variant: 'small',
    } as const;

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($headlessRoot, $groupMixinRoot),
        _label: combineProps($headlessLabel, $groupMixinLabel, _label),
        _textDescription: combineProps(
            $headlessDescription,
            $groupMixinDescription,
            _textDescription,
        ),
    });
};
