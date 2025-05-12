import { useFocusTarget, useNavigation } from '@noodlestan/context-ui';
import { createClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Surface } from '@noodlestan/standard-ui';
import { type ParentComponent, createEffect, createSignal } from 'solid-js';

import { WithSidebarLayout } from '../../layouts';
import { MainHeader, SIDEBAR_NAV_TARGET, SidebarNav } from '../../navigation';
import { $ID_SCREEN_TITLE } from '../constants';

import styles from './ScreenWithSidebar.module.css';

export const ScreenWithSidebar: ParentComponent = props => {
    const [setFocus] = useFocusTarget(SIDEBAR_NAV_TARGET);
    let toggleButtonEl: HTMLElement | undefined;

    const setToggleButtonRef = (el: HTMLElement) => {
        toggleButtonEl = el;
    };

    const { current } = useNavigation();
    const [sidebarExpanded, setSidebarExpanded] = createSignal(false);

    createEffect(() => {
        current();
        setSidebarExpanded(false);
    });

    const handleToggleSidebar = () => {
        const isExpanded = sidebarExpanded();
        setSidebarExpanded(!isExpanded);
        if (!isExpanded) {
            setFocus();
        }
    };

    const handleDismiss = () => setSidebarExpanded(false);

    const classList = createClassList(styles, () => ({
        'ScreenWithSidebar--Layout': !sidebarExpanded(),
    }));

    return (
        <Surface variant="stage" stretch="height">
            <Flex direction="column" stretch="full" justify="stretch">
                <MainHeader
                    setMenuButtonRef={setToggleButtonRef}
                    toggleSidebar={handleToggleSidebar}
                    sidebarExpanded={sidebarExpanded()}
                />
                <WithSidebarLayout
                    contain={false}
                    sidebar={<SidebarNav />}
                    sidebarExpanded={sidebarExpanded()}
                    onSidebarDismiss={handleDismiss}
                    exclude={() => (toggleButtonEl ? [toggleButtonEl] : [])}
                    classList={classList()}
                >
                    <Surface
                        tag="main"
                        variant={'page'}
                        labelledby={$ID_SCREEN_TITLE}
                        stretch="height"
                    >
                        {props.children}
                    </Surface>
                </WithSidebarLayout>
            </Flex>
        </Surface>
    );
};
