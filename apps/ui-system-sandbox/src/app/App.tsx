import { DebugDrawer } from '@noodlestan/context-ui-dev';
import { Flex, createClassList } from '@noodlestan/ui-system';
import { Router } from '@solidjs/router';
import { type Component, type JSX, Show } from 'solid-js';

import {
    AppServicesProvider,
    UIRootProvider,
    createAppServices,
    useAppServices,
} from '../providers';

import styles from './App.module.css';
import { APP } from './constants';
import { Routes } from './navigation';
import { ErrorBoundaryScreen } from './screens';
import { AppSplash } from './splash';

type RootProps = {
    children?: JSX.Element;
};

const Main: Component<RootProps> = props => {
    // let mainRef: HTMLDivElement | undefined;

    const { ready } = useAppServices();

    // createEffect(() => {
    //     if (errors().length) {
    //         console.error(errors());
    //     }
    // });

    // const setMainRef = (ref: HTMLDivElement) => {
    //     mainRef = ref;
    // };

    const classList = () => createClassList(styles, { AppMain: true });

    return (
        <Flex direction="column" classList={classList()}>
            <Show when={!ready()}>
                <AppSplash />
            </Show>
            <Show when={ready()}>{props.children}</Show>
        </Flex>
    );
};

const Root: Component<RootProps> = props => {
    const appServices = createAppServices();
    return (
        <ErrorBoundaryScreen>
            <AppServicesProvider appServices={appServices}>
                <UIRootProvider defaultCtxId={APP.id}>
                    <Main>{props.children}</Main>
                    <DebugDrawer />
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
