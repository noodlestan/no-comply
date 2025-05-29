import { createClassList, staticClassList } from '@no-comply/solid-primitives';
import { Flex, type SizeScale, Text } from '@no-comply/standard-ui';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { type Component, createSignal, onMount } from 'solid-js';

import styles from './ShowSpace.module.scss';

type Props = {
    size: SizeScale;
    mode?: 'h' | 'v' | 'square';
};

export const ShowSpace: Component<Props> = props => {
    let element: HTMLElement;

    const [size, setSize] = createSignal('');

    const setElementRef = (el: HTMLElement) => {
        element = el;
    };

    onMount(() => {
        createResizeObserver(element, () => setSize(getComputedStyle(element).width));
    });

    const mode = () => props.mode || 'h';

    const classList = createClassList(styles, () => ({
        ShowSpace: true,
        [`mode-${mode()}`]: true,
    }));

    const style = () => ({
        '--__size': `var(--scale-${props.size})`,
    });

    return (
        <Flex
            direction="column"
            align="start"
            padding="s"
            gap="s"
            classList={classList()}
            style={style()}
        >
            <Text variant="large">{props.size}</Text>
            <Flex direction="row" align="start" gap="m">
                <div classList={staticClassList(styles, 'viz')} ref={setElementRef} />
                <Text variant="small">{size()}</Text>
            </Flex>
        </Flex>
    );
};
