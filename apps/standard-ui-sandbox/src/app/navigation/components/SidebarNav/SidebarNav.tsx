import { createFocusTargetRef } from '@noodlestan/context-ui';
import { mergeProps } from '@noodlestan/context-ui-primitives';
import { createFocusRing } from '@noodlestan/headless-ui';
import { Flex, Surface, createFocusRingMixin } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { $ID_SIDEBAR_NAV } from '../private';

import { SIDEBAR_NAV_TARGET } from './constant';
import { NavLinkItemGroup } from './parts';
import type { SidebarItemGroup } from './types';

type Props = {
    items: SidebarItemGroup[];
};

export const SidebarNav: Component<Props> = props => {
    const [setNavRef] = createFocusTargetRef(SIDEBAR_NAV_TARGET, { transient: true });

    const { $root: $focusRing } = createFocusRing({ passive: true });
    const { $root: $focusRingMixin } = createFocusRingMixin({ inset: true });

    const $ = mergeProps($focusRing, $focusRingMixin);

    return (
        <Surface
            tag="nav"
            variant="panel"
            stretch="height"
            overflow="y-auto"
            id={$ID_SIDEBAR_NAV}
            aria-label="Main menu"
            ref={setNavRef}
            {...$}
        >
            <Flex direction="column" padding="m" gap="m">
                <For each={props.items}>
                    {item => <NavLinkItemGroup title={item.title} items={item.items} />}
                </For>
            </Flex>
        </Surface>
    );
};
