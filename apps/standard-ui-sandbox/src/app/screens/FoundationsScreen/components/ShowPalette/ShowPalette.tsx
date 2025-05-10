import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Display, Flex } from '@noodlestan/standard-ui';
import { type Component, For, Show } from 'solid-js';

import { ShowColor } from '../ShowColor';

import styles from './ShowPalette.module.css';

type Props = {
    p: string;
};

export const ShowPalette: Component<Props> = props => {
    const levels = () => {
        return [50, 100, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000];
    };

    return (
        <Flex direction="row" gap="m" classList={staticClassList(styles, 'ShowPalette')}>
            <Flex direction="row">
                <For each={levels()}>{level => <ShowColor p={props.p} l={level} />}</For>
            </Flex>
            <Show when={props.p !== 'labels'}>
                <Display>{props.p}</Display>
            </Show>
        </Flex>
    );
};
