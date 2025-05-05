import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Icon, NavLink, Text } from '@noodlestan/standard-ui';
import { CoffeeIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { ROUTES } from '../../../../constants';
import { $ID_APP_TITLE } from '../../private/constants';

import styles from './HomeButton.module.css';

export const HomeButton: Component = () => {
    return (
        <h1 classList={staticClassList(styles, 'HomeButton')} id={$ID_APP_TITLE}>
            <NavLink size="s" href={ROUTES.home()}>
                <Icon icon={CoffeeIcon} size="medium" aria-hidden />
                <Text variant="medium">Context UI</Text>
            </NavLink>
        </h1>
    );
};
