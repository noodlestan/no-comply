import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type Component, createSignal, onMount } from 'solid-js';

import styles from './ShowColor.module.css';

type Props = {
    p: string;
    l: number;
};

export const ShowColor: Component<Props> = props => {
    let element: HTMLElement;

    const [color, setColor] = createSignal('');

    const setElementRef = (el: HTMLElement) => {
        element = el;
    };

    onMount(() => {
        if (props.p !== 'labels') {
            setColor(getComputedStyle(element).backgroundColor);
        } else {
            setColor(String(props.l));
        }
    });

    const style = () => ({
        '--__show-color-p': `var(--p-${props.p})`,
        '--__show-color-l': props.l,
    });
    return (
        <Flex classList={staticClassList(styles, 'ShowColor')} style={style()} ref={setElementRef}>
            {color()}
        </Flex>
    );
};
