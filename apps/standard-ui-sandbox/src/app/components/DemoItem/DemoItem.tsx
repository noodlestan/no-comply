import { staticClassList } from '@noodlestan/context-ui-types';
import { Flex, Label, Surface, type SurfaceVariant, Text } from '@noodlestan/standard-ui';
import { type ParentComponent, Show } from 'solid-js';

import styles from './DemoItem.module.css';

type DemoItemProps = {
    surface?: SurfaceVariant;
    title?: string;
    note?: string;
    row?: boolean;
    maxWidth?: string;
};

export const DemoItem: ParentComponent<DemoItemProps> = props => {
    const style = () => (props.maxWidth ? { 'max-width': props.maxWidth } : {});

    const surface = () => props.surface ?? 'card';

    return (
        <Surface variant={surface()} classList={staticClassList(styles, 'DemoItem')}>
            <div style={style()}>
                <Flex gap="m" padding="m">
                    <Show when={props.title}>
                        <Label>{props.title}</Label>
                    </Show>
                    <Flex gap="m" direction={props.row ? 'row' : 'column'}>
                        {props.children}
                    </Flex>
                    <Show when={props.note}>
                        <Text variant="small">{props.note}</Text>
                    </Show>
                </Flex>
            </div>
        </Surface>
    );
};
