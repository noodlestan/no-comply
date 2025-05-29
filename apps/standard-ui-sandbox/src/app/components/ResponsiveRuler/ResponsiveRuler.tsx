import { GLOBAL_BP, type GlobalBreakpointName, Layout } from '@noodlestan/standard-ui';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { type Component, createSignal, onMount } from 'solid-js';

import { Ruler } from '../../../studio';

type Props = {
    variants?: Partial<Record<'_' | GlobalBreakpointName, string>>;
};

export const ResponsiveRuler: Component<Props> = props => {
    let container: HTMLElement;

    const [screenWidth, setScreenWidth] = createSignal<number>(0);
    const [containerWidth, setContainerWidth] = createSignal<number>(0);

    const setContainerRef = (el: HTMLElement) => (container = el);

    onMount(() => {
        createResizeObserver(window.document.documentElement, () =>
            setScreenWidth(window.innerWidth),
        );
        createResizeObserver(container, () => setContainerWidth(container.clientWidth));
    });

    const markers = () => {
        const m = Object.keys(props.variants || [])
            .filter(bp => bp !== '_')
            .map(bp => {
                const value = GLOBAL_BP[bp as GlobalBreakpointName];
                return { at: value, name: `${bp.toUpperCase()}: ${value}px` };
            });
        return m;
    };

    return (
        <Layout uncontained ref={setContainerRef}>
            <Layout padding="s">
                {' '}
                {/*    <Surface variant="panel" padding="s">
                    <Flex direction="row">
                        <DataItem units="px" label="Container Width" value={containerWidth()} />
                    </Flex>
                    <Flex direction="row">
                        <DataItem units="px" label="Screen Width" value={screenWidth()} />
                    </Flex>
                </Surface> */}
            </Layout>
            <Ruler offset={Math.max(0, screenWidth() - containerWidth())} markers={markers()} />
        </Layout>
    );
};
