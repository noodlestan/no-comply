import { useFocusTarget, useNavigation } from '@noodlestan/context-ui';
import { createClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Surface } from '@noodlestan/standard-ui';
import { type ParentComponent, createEffect, createSignal } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';

import { WithSidebarLayout } from '../../../layouts';
import { MainHeader, SIDEBAR_NAV_TARGET } from '../../../navigation';

import styles from './ScreenTemplateWithSidebar.module.css';

type Props = {
    sidebar: JSX.Element;
};

export const ScreenTemplateWithSidebar: ParentComponent<Props> = props => {
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

    const handleToggleSidebar = () => {
        const wasExpanded = sidebarExpanded();
        setSidebarExpanded(!wasExpanded);
        if (!wasExpanded) {
            setSidebarFocus();
        }
    };

    const handleDismiss = () => setSidebarExpanded(false);

    const classList = createClassList(styles, () => ({
        'ScreenTemplateWithSidebar--Layout': !sidebarExpanded(),
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
                    contain={true}
                    sidebar={props.sidebar}
                    sidebarExpanded={sidebarExpanded()}
                    onSidebarDismiss={handleDismiss}
                    exclude={() => (toggleButtonEl ? [toggleButtonEl] : [])}
                    classList={classList()}
                >
                    {props.children}
                </WithSidebarLayout>
            </Flex>
        </Surface>
    );
};
