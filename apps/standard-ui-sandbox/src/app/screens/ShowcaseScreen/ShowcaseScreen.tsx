import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Surface } from '@noodlestan/standard-ui';
import { type ParentComponent, Show, createSignal, onCleanup } from 'solid-js';

import { Spinner } from '../../atoms';
import { PageLayout } from '../../layouts';
import { MainNav } from '../../navigation';

import styles from './ShowcaseScreen.module.css';

export const ShowcaseScreen: ParentComponent = props => {
    const [ready, setReady] = createSignal(true);

    const handlePointerDown = () => setReady(true);

    onCleanup(() => {});

    return (
        <Surface
            variant="stage"
            onPointerDown={handlePointerDown}
            classList={staticClassList(styles, 'ShowcaseScreen')}
        >
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
