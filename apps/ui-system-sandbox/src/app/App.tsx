import { Flex } from '@noodlestan/ui-system';
import { Router } from '@solidjs/router';
import { Component, JSX, Show } from 'solid-js';

import { AppServicesProvider, createAppServices, useAppServices } from '../providers';

import { Routes } from './navigation';
import { ErrorBoundaryScreen } from './screens';
import { AppSplash } from './splash';

import './App.css';

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

    return (
        <Flex tag="main" direction="column" classList={{ AppMain: true }}>
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
            <AppServicesProvider value={appServices}>
                <Main>{props.children}</Main>
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
