import { createFocusTargetRef, useFocusTarget, useNavigation } from '@noodlestan/context-ui';
import { createClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Surface, createFocusRingMixin } from '@noodlestan/standard-ui';
import { type ParentComponent, createEffect, createSignal } from 'solid-js';

import { WithSidebarLayout } from '../../layouts';
import { MainHeader, SIDEBAR_NAV_TARGET, SidebarNav } from '../../navigation';
import { $ID_SCREEN_TITLE, SCREEN_MAIN_TARGET } from '../constants';

import styles from './ScreenWithSidebar.module.css';

export const ScreenWithSidebar: ParentComponent = props => {
    const [setMainRef] = createFocusTargetRef(SCREEN_MAIN_TARGET, { transient: true });
    const [setSidebarFocus] = useFocusTarget(SIDEBAR_NAV_TARGET);
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

    const { $root } = createFocusRingMixin({ inset: true });

    const handleToggleSidebar = () => {
        const wasExpanded = sidebarExpanded();
        setSidebarExpanded(!wasExpanded);
        if (!wasExpanded) {
            setSidebarFocus();
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
                        ref={setMainRef}
                        {...$root}
                    >
                        {props.children}
                    </Surface>
                </WithSidebarLayout>
            </Flex>
        </Surface>
    );
};
