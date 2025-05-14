import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Surface } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import styles from './MainHeader.module.css';
import { HomeButton, MainMenuButton } from './parts';
import { HEADER_LABEL } from './private';

interface Props {
    setMenuButtonRef: (el: HTMLElement) => void;
    sidebarExpanded: boolean;
    toggleSidebar: () => void;
}

export const MainHeader: Component<Props> = props => {
    const handleMainMenuButtonPress = () => props.toggleSidebar();

    return (
        <Surface
            variant="panel"
            tag="header"
            label={HEADER_LABEL}
            classList={staticClassList(styles, 'MainHeader')}
        >
            <Flex direction="row" justify="start" align="center" padding="s" gap="m">
                <MainMenuButton
                    setButtonRef={props.setMenuButtonRef}
                    onPress={handleMainMenuButtonPress}
                    expanded={props.sidebarExpanded}
                />
                <HomeButton />
                <Flex
                    tag="nav"
                    direction="row"
                    justify="start"
                    align="center"
                    gap="m"
                    aria-label="Main navigation"
                >
                    {''}
                </Flex>
            </Flex>
        </Surface>
    );
};
