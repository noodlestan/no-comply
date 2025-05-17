import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Surface } from '@noodlestan/standard-ui';
import { type Component, Show } from 'solid-js';

import styles from './MainHeader.module.css';
import { HomeButton, MainMenuButton, MainNav } from './parts';
import { HEADER_LABEL } from './private';

interface Props {
    setMenuButtonRef?: (el: HTMLElement) => void;
    sidebarExpanded?: boolean;
    toggleSidebar?: () => void;
    sidebarHidden?: boolean;
}

export const MainHeader: Component<Props> = props => {
    const handleMainMenuButtonPress = () => props.toggleSidebar?.();

    return (
        <Surface
            variant="panel"
            tag="header"
            label={HEADER_LABEL}
            classList={staticClassList(styles, 'MainHeader')}
        >
            <Flex direction="row" justify="start" align="center" padding="s" gap="m">
                <Show when={!props.sidebarHidden}>
                    <MainMenuButton
                        ref={props.setMenuButtonRef}
                        onPress={handleMainMenuButtonPress}
                        expanded={props.sidebarExpanded ?? true}
                    />
                </Show>
                <HomeButton />
                <MainNav />
            </Flex>
        </Surface>
    );
};
