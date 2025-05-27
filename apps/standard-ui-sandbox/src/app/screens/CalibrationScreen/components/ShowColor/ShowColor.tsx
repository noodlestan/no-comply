import { createClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type Component, createSignal, onMount } from 'solid-js';

import styles from './ShowColor.module.scss';

type Props = {
    p: string;
    l: number;
    enablePalettes?: boolean;
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

    const classList = createClassList(styles, () => ({
        ShowColor: true,
        'palettes-enabled': Boolean(props.enablePalettes),
    }));

    const style = () => ({
        '--__show-color-palette': `var(--p-${props.p})`,
        '--__show-color-color': `var(--p-${props.p}-center)`,
        '--__show-color-level': props.l,
        '--__show-color-light': `var(--l-${props.l})`,
    });

    return (
        <Flex classList={classList()} style={style()} ref={setElementRef}>
            {color()}
        </Flex>
    );
};
