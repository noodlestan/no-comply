import { createClassList, staticClassList } from '@no-comply/solid-primitives';
import { Flex, Label } from '@no-comply/standard-ui';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { type Component, For, Show, createSignal, onMount } from 'solid-js';

import styles from './Ruler.module.scss';

export type RulerMarker = {
    at: number;
    name: string;
};

export type RulerProps = {
    size?: 10 | 50 | 100;
    offset?: number;
    markers?: RulerMarker[];
};

export const Ruler: Component<RulerProps> = props => {
    let element: HTMLElement;

    const [elementWidth, setElementWidth] = createSignal<number>();

    const size = () => props.size ?? 50;

    const count = () => {
        const width = elementWidth();
        return width ? Math.floor(width / size()) + 2 : 0;
    };

    const offset = () => props.offset ?? 0;

    const ticks = () => {
        const s = size();
        const o = offset();
        return Array.from({ length: count() }, (_, i) => i * s + o);
    };

    const setContainerRef = (el: HTMLElement) => {
        element = el;
    };

    onMount(() => {
        createResizeObserver(element, () => setElementWidth(element.clientWidth));
    });

    const style = () => ({
        '--__ruler-size': `${size()}px`,
    });

    const classList = createClassList(styles, () => ({
        Ruler: true,
    }));

    const markerStyle = (marker: RulerMarker) => {
        return {
            left: `${marker.at - offset()}px`,
        };
    };

    return (
        <Flex ref={setContainerRef} style={style()} classList={classList()}>
            <Flex direction="row" classList={staticClassList(styles, 'ticks')}>
                <For each={ticks()}>
                    {tick => (
                        <Label
                            tag="span"
                            variant="small"
                            classList={staticClassList(styles, 'tick')}
                        >
                            <span>{tick}</span>
                        </Label>
                    )}
                </For>
            </Flex>
            <Show when={props.markers?.length}>
                <Flex direction="row" classList={staticClassList(styles, 'markers')}>
                    <For each={props.markers}>
                        {marker => (
                            <Label
                                tag="span"
                                variant="small"
                                classList={staticClassList(styles, 'marker')}
                                style={markerStyle(marker)}
                            >
                                <span>{marker.name}</span>
                            </Label>
                        )}
                    </For>
                </Flex>
            </Show>
        </Flex>
    );
};
