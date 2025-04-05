import { staticClassList } from '@noodlestan/context-ui-types';
import { Divider, Flex, Icon, NavLink } from '@noodlestan/standard-ui';
import { HomeIcon } from 'lucide-solid';
import { type Component, For } from 'solid-js';

import { ROUTES } from '../../constants';

import styles from './MainNav.module.css';
import { NavLinkItemGroup } from './components/NavLinkItemGroup';
import { navList } from './constants';

export const MainNav: Component = () => {
    return (
        <Flex component="nav" direction="column" padding="m" gap="m" aria-label="main navigation">
            <Flex
                component="header"
                direction="column"
                gap="m"
                classList={staticClassList(styles, 'MainNavHeader')}
            >
                <Flex direction="row" gap="s">
                    <NavLink size="s" href={ROUTES.home()}>
                        <Icon icon={HomeIcon} size="s" />
                        <>Context UI</>
                    </NavLink>
                </Flex>
            </Flex>
            <Divider variant="base" />
            <For each={navList}>
                {item => <NavLinkItemGroup title={item.title} items={item.items} />}
            </For>
        </Flex>
    );
};
