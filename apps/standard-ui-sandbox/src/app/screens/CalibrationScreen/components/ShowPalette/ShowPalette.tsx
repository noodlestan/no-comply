import { Flex, Label } from '@noodlestan/standard-ui';
import { type Component, For, Show } from 'solid-js';

import { ShowColor } from '../ShowColor';

type Props = {
    p: string;
    enablePalettes?: boolean;
};

export const ShowPalette: Component<Props> = props => {
    const levels = () => {
        return [50, 100, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000];
    };

    return (
        <Flex direction="row" gap="m">
            <Show when={props.p !== 'labels'}>
                <Label>{props.p}</Label>
            </Show>
            <Flex direction="row">
                <For each={levels()}>
                    {level => (
                        <ShowColor p={props.p} l={level} enablePalettes={props.enablePalettes} />
                    )}
                </For>
            </Flex>
        </Flex>
    );
};
