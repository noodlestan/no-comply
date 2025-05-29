import {
    type ClosedTagProps,
    createClassList,
    createComputedProps,
    mergeProps,
    shortId,
} from '@noodlestan/context-ui-primitives';
import { Flex, type FlexGap, Label, type LayoutPadding, Text } from '@noodlestan/standard-ui';
import { type JSX, type ParentComponent, Show, splitProps } from 'solid-js';

import styles from './DemoItem.module.scss';

export type DemoItemProps = ClosedTagProps & {
    title?: string;
    defaultValue?: boolean;
    note?: string;
    row?: boolean;
    gap?: FlexGap;
    padding?: LayoutPadding;
    width?: string;
    height?: string;
    styled?: boolean;
    slot?: () => JSX.Element;
};

export const DemoItem: ParentComponent<DemoItemProps> = props => {
    const [locals, $others] = splitProps(props, [
        'title',
        'defaultValue',
        'note',
        'row',
        'gap',
        'padding',
        'width',
        'height',
        'slot',
        'children',
    ]);

    const labelId = () => (locals.title ? shortId() : undefined);

    const contentsStyle = () => ({
        'max-width': locals.width ?? 'unset',
        'max-height': locals.height ?? 'unset',
    });

    const $root = createComputedProps({
        classList: createClassList(styles, () => ({
            DemoItem: true,
            styled: Boolean(props.styled),
        })),
    });

    const $ = mergeProps($others, $root);

    return (
        <Flex gap="m" aria-labelledby={labelId()} {...$}>
            <Show when={locals.title}>
                <Label id={labelId()} size="medium">
                    {locals.title}
                    <Show when={props.defaultValue}>
                        <Label size="small" tag="span">
                            (default)
                        </Label>
                    </Show>
                </Label>
            </Show>

            <Show when={locals.slot}>{locals.slot?.()}</Show>

            <Flex
                gap={locals.gap}
                direction={locals.row ? 'row' : 'column'}
                padding={locals.padding}
                overflow="x-auto"
                style={contentsStyle()}
                data-demo-item-contents
            >
                {locals.children}
            </Flex>

            <Show when={locals.note}>
                <Text variant="small">{locals.note}</Text>
            </Show>
        </Flex>
    );
};
