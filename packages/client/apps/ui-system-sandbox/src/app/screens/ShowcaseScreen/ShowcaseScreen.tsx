import { Surface } from '@noodlestan/ui-system';
import { Component, JSX, Show, createSignal, onCleanup, onMount } from 'solid-js';

import { Spinner } from '../../atoms';
import { PageLayout } from '../../layouts';
import { MainNav } from '../../navigation/components/MainNav/MainNav';

import './ShowcaseScreen.css';

type Props = {
    children?: JSX.Element;
};

export const ShowcaseScreen: Component<Props> = props => {
    let mainRef: HTMLDivElement | undefined;

    const [ready, setReady] = createSignal(true);

    const handleClick = () => setReady(true);

    onMount(() => window.setTimeout(() => mainRef?.focus()));

    onCleanup(() => {});

    return (
        <Surface variant="stage" onClick={handleClick} classList={{ ShowcaseScreen: true }}>
            <Spinner speed="slow" size="l" when={!ready()} />
            <Show when={ready()}>
                <PageLayout>
                    <MainNav />
                    {props.children}
                </PageLayout>
            </Show>
        </Surface>
    );
};
