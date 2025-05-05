import { useSystemContext } from '@noodlestan/context-ui';
import { createClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { Router } from '@solidjs/router';
import { type Component, type ParentComponent, Show } from 'solid-js';

import { AppServicesProvider, UIRootProvider, useAppServices } from '../providers';

import styles from './App.module.css';
import { APP } from './constants';
import { Routes } from './navigation';
import { ErrorBoundaryScreen } from './screens';
import { AppSplash } from './splash';

const Main: ParentComponent = props => {
    const { status } = useAppServices();
    const { hasFocus } = useSystemContext();

    const classList = createClassList(styles, () => {
        return {
            AppMain: true,
            'has-focus': hasFocus(),
        };
    });

    return (
        <Flex stretch="full" classList={classList()} aria-busy={!status.isReady()}>
            <Show when={!status.isReady()}>
                <AppSplash />
            </Show>
            <Show when={status.isReady()}>{props.children}</Show>
        </Flex>
    );
};

const Root: ParentComponent = props => {
    return (
        <ErrorBoundaryScreen>
            <AppServicesProvider>
                <UIRootProvider defaultCtxId={APP.id}>
                    {/* {props.children} */}
                    <Main>{props.children}</Main>
                    {/* <DebugDrawer /> */}
                </UIRootProvider>
            </AppServicesProvider>
        </ErrorBoundaryScreen>
    );
};

export const App: Component = () => {
    return (
        <Router root={Root}>
            <Routes />
        </Router>
    );
};
