import { useFocusTarget } from '@noodlestan/context-ui';
import { staticClassList } from '@noodlestan/context-ui-primitives';
import { OverflowItems, OverflowItemsContent, OverflowItemsToggle } from '@noodlestan/headless-ui';
import { Flex, NavLink } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { SCREEN_MAIN_TARGET } from '../../../../../templates';

import styles from './MainNav.module.scss';

export const MainNav: Component = () => {
    const [setMainFocus] = useFocusTarget(SCREEN_MAIN_TARGET);

    const items = [
        { id: '1', href: '/app', label: 'Showcase' },
        { id: '2', href: '/features', label: 'Features' },
    ];

    const selectedItemId = () => '1';

    const handleNavLink = () => {
        setTimeout(() => {
            setMainFocus();
        });
    };

    return (
        <OverflowItems
            items={items}
            current={selectedItemId()}
            renderOverflow={({ items }) => <>{items.length}</>}
            renderItem={({ item, isCurrent }) => (
                <NavLink nowrap href={item.href} onPress={handleNavLink} current={isCurrent}>
                    {item.label}
                </NavLink>
            )}
            renderToggle={({ count }) => <>{count}</>}
            classList={staticClassList(styles, 'MainNav')}
        >
            <Flex
                tag="nav"
                direction="row"
                justify="start"
                stretch="full"
                align="center"
                gap="m"
                aria-label="Main navigation"
            >
                <OverflowItemsContent />
                <OverflowItemsToggle />
            </Flex>
        </OverflowItems>
    );
};
