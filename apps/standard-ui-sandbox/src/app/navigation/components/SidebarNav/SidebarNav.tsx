import { createFocusTargetRef } from '@noodlestan/context-ui';
import { Flex, Surface, createFocusRingMixin } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { $ID_SIDEBAR_NAV } from '../private';

import { SIDEBAR_NAV_TARGET } from './constant';
import { NavLinkItemGroup } from './parts';
import { NAV_LINK_GROUPS } from './private';

export const SidebarNav: Component = () => {
    const [setNavRef] = createFocusTargetRef(SIDEBAR_NAV_TARGET, { transient: true });

    const { $root } = createFocusRingMixin({ inset: true });

    return (
        <Surface
            tag="nav"
            variant="panel"
            stretch="height"
            overflow="y-auto"
            id={$ID_SIDEBAR_NAV}
            aria-label="Main menu"
            ref={setNavRef}
            {...$root}
        >
            <Flex direction="column" padding="m" gap="m">
                <For each={NAV_LINK_GROUPS}>
                    {item => <NavLinkItemGroup title={item.title} items={item.items} />}
                </For>
            </Flex>
        </Surface>
    );
};
