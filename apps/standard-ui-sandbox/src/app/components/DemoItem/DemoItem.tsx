import { shortId, staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Label, Surface, type SurfaceVariant, Text } from '@noodlestan/standard-ui';
import { type ParentComponent, Show } from 'solid-js';

import styles from './DemoItem.module.css';

type DemoItemProps = {
    surface?: SurfaceVariant;
    title?: string;
    note?: string;
    row?: boolean;
    width?: string;
};

export const DemoItem: ParentComponent<DemoItemProps> = props => {
    const labelId = () => (props.title ? shortId() : undefined);

    const style = () => (props.width ? { width: props.width } : {});

    const surface = () => props.surface ?? 'card';

    return (
        <Surface
            variant={surface()}
            classList={staticClassList(styles, 'DemoItem')}
            style={style()}
            labelledby={labelId()}
        >
            <Flex gap="m" padding="m">
                <Show when={props.title}>
                    <Label id={labelId()}>{props.title}</Label>
                </Show>
                <Flex gap="m" direction={props.row ? 'row' : 'column'}>
                    {props.children}
                </Flex>
                <Show when={props.note}>
                    <Text variant="small">{props.note}</Text>
                </Show>
            </Flex>
        </Surface>
    );
};
