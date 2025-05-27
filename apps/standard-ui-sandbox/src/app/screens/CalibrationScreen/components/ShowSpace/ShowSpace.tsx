import { createClassList } from '@noodlestan/context-ui-primitives';
import { Flex, type SizeScale } from '@noodlestan/standard-ui';
import { type Component, createSignal, onMount } from 'solid-js';

import styles from './ShowSpace.module.scss';

type Props = {
    size: SizeScale;
};

export const ShowSpace: Component<Props> = props => {
    let element: HTMLElement;

    const [size, setSize] = createSignal('');

    const setElementRef = (el: HTMLElement) => {
        element = el;
    };

    onMount(() => {
        setSize(getComputedStyle(element).backgroundColor);
    });

    const classList = createClassList(styles, () => ({
        ShowSpace: true,
    }));

    const style = () => ({
        '--__show-space': `var(--space-${props.size})`,
    });

    return (
        <Flex classList={classList()} style={style()} ref={setElementRef}>
            {size()}
        </Flex>
    );
};
