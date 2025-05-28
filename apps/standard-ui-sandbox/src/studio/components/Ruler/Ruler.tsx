import { createClassList, staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Label } from '@noodlestan/standard-ui';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { type Component, For, createSignal, onMount } from 'solid-js';

import styles from './Ruler.module.scss';

export type RulerProps = {
    size?: 10 | 50 | 100;
    offset: number;
};

export const Ruler: Component<RulerProps> = props => {
    let element: HTMLElement;

    const [elementWidth, setElementWidth] = createSignal<number>();

    const size = () => props.size ?? 50;

    const count = () => {
        const width = elementWidth();
        return width ? Math.floor(width / size()) + 2 : 0;
    };

    const ticks = () => {
        const offset = props.offset ?? 0;
        const s = size();
        return Array.from({ length: count() }, (_, i) => i * s + offset);
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

    return (
        <Flex ref={setContainerRef} style={style()} classList={classList()}>
            <Flex direction="row" classList={staticClassList(styles, 'ticks')}>
                <For each={ticks()}>
                    {tick => (
                        <Label tag="span" size="small" classList={staticClassList(styles, 'tick')}>
                            <span>{tick}</span>
                        </Label>
                    )}
                </For>
            </Flex>
        </Flex>
    );
};
