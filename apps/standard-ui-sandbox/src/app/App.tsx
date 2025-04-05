import { type FocusContext, useContextNode } from '@noodlestan/context-ui';
import { DebugDrawer } from '@noodlestan/context-ui-dev';
import { createClassList } from '@noodlestan/context-ui-types';
import { createFocusable } from '@noodlestan/headless-ui';
import { Button, Flex } from '@noodlestan/standard-ui';
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

    const context = useContextNode();

    const focus = context.valueFor<FocusContext>('focus');
    const focusable = createFocusable(focus);

    const classList = createClassList(styles, () => ({
        AppMain: true,
        'has-focus': focus.hasFocusWithin(),
    }));

    return (
        <Flex
            stretch="full"
            classList={classList()}
            {...focusable.containerProps}
            aria-busy={!status.isReady()}
        >
            <Show when={!status.isReady()}>
                <AppSplash />
            </Show>
            <Show when={status.isReady()}>
                <Button variant="transparent" {...focusable.targetProps} />
                {props.children}
            </Show>
        </Flex>
    );
};

const Root: ParentComponent = props => {
    return (
        <ErrorBoundaryScreen>
            <AppServicesProvider>
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
