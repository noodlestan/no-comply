import { staticClassList } from '@no-comply/solid-primitives';
import { Icon, NavLink, Text } from '@no-comply/standard-ui';
import { SquareMousePointerIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { routeFor } from '../../../../navigateTo';
import { $ID_APP_TITLE } from '../../private/constants';

import styles from './HomeButton.module.scss';

export const HomeButton: Component = () => {
    return (
        <h1 classList={staticClassList(styles, 'HomeButton')} id={$ID_APP_TITLE}>
            <NavLink href={routeFor.home()} nowrap inset>
                <Icon icon={SquareMousePointerIcon} size="medium" aria-hidden />
                <Text tag="span" variant="medium">
                    Standard UI
                </Text>
            </NavLink>
        </h1>
    );
};
