import { useFocusTarget } from '@noodlestan/context-ui';
import { Display, Flex, NavLink } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { $ID_SCREEN_MAIN, SCREEN_MAIN_TARGET } from '../../../../templates';
import type { SidebarItemGroup } from '../types';

export const NavLinkItemGroup: Component<SidebarItemGroup> = props => {
    const [setMainFocus] = useFocusTarget(SCREEN_MAIN_TARGET);

    const handleNavLink = () => {
        setTimeout(() => {
            setMainFocus();
        });
    };

    return (
        <Flex direction="column" gap="xs">
            <Display level={3} variant="s">
                {props.title}
            </Display>

            <For each={props.items}>
                {item => (
                    <NavLink
                        href={item.route + `#${$ID_SCREEN_MAIN}`}
                        onPress={handleNavLink}
                        layout="v"
                        size="small"
                    >
                        {item.title}
                    </NavLink>
                )}
            </For>
        </Flex>
    );
};
