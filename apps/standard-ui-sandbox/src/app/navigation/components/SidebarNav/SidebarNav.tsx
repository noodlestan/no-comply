import { createFocusTarget } from '@noodlestan/context-ui';
import { staticClassList } from '@noodlestan/context-ui-primitives';
import { getFocusableElements } from '@noodlestan/headless-ui';
import { Flex, Surface } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { $ID_SIDEBAR_NAV } from '../private';

import styles from './SidebarNav.module.css';
import { SIDEBAR_NAV_TARGET } from './constant';
import { NavLinkItemGroup } from './parts';
import { NAV_LINK_GROUPS } from './private';

export const SidebarNav: Component = () => {
    const [setTarget] = createFocusTarget(SIDEBAR_NAV_TARGET);

    const setRootRef = (el: HTMLElement) => {
        setTarget(() => {
            const focusableChildren = getFocusableElements(el);
            focusableChildren[0]?.focus();
        });
    };

    return (
        <Surface
            variant="panel"
            stretch="height"
            overflow="y-auto"
            classList={staticClassList(styles, 'SidebarNav')}
            ref={setRootRef}
        >
            <Flex
                tag="nav"
                direction="column"
                padding="m"
                gap="m"
                id={$ID_SIDEBAR_NAV}
                aria-label="Main menu"
            >
                <For each={NAV_LINK_GROUPS}>
                    {item => <NavLinkItemGroup title={item.title} items={item.items} />}
                </For>
            </Flex>
        </Surface>
    );
};
