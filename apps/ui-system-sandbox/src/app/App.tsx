import { DebugDrawer } from '@noodlestan/context-ui-dev';
import {
    Button,
    Flex,
    type FocusContext,
    createClassList,
    createFocusable,
    useContextNode,
} from '@noodlestan/ui-system';
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
    const { ready } = useAppServices();

    const context = useContextNode();

    const focus = context.valueFor<FocusContext>('focus');
    const focusable = createFocusable(focus);

    const classList = createClassList(styles, () => [
        'AppMain',
        { 'has-focus': focus.hasFocusWithin() },
    ]);

    return (
        <Flex
            tag="div"
            stretch="full"
            classList={classList()}
            {...focusable.containerProps()}
            aria-busy={!ready()}
        >
            <Show when={!ready()}>
                <AppSplash />
            </Show>
            <Show when={ready()}>
                <Button variant="transparent" {...focusable.targetProps()} />
                {props.children}
            </Show>
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
