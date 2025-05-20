import { mergeProps, shortId, staticClassList } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps } from '@noodlestan/headless-ui';
import { Flex, Label, Surface, type SurfaceVariant, Text } from '@noodlestan/standard-ui';
import { type ParentComponent, Show, splitProps } from 'solid-js';

import styles from './DemoItem.module.css';

export type DemoItemProps = ClosedTagProps & {
    surface?: SurfaceVariant;
    title?: string;
    note?: string;
    row?: boolean;
    width?: string;
};

export const DemoItem: ParentComponent<DemoItemProps> = props => {
    const [locals, $others] = splitProps(props, [
        'surface',
        'title',
        'note',
        'row',
        'width',
        'children',
    ]);

    const labelId = () => (locals.title ? shortId() : undefined);
    const style = () => (locals.width ? { width: locals.width } : {});
    const surface = () => locals.surface ?? 'card';

    const $root = {
        classList: staticClassList(styles, 'DemoItem'),
    };

    const $ = mergeProps($others, $root);

    return (
        <Surface variant={surface()} style={style()} labelledby={labelId()} {...$}>
            <Flex gap="m" padding="m">
                <Show when={locals.title}>
                    <Label id={labelId()}>{locals.title}</Label>
                </Show>
                <Flex gap="m" direction={locals.row ? 'row' : 'column'} data-demo-item-contents>
                    {locals.children}
                </Flex>
                <Show when={locals.note}>
                    <Text variant="small">{locals.note}</Text>
                </Show>
            </Flex>
        </Surface>
    );
};
