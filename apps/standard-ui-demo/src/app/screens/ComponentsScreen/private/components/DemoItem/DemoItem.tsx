import type { FlexMixinAlign } from '@no-comply/solid-composables';
import {
    type ClosedTagProps,
    createClassList,
    createComputedProps,
    mergeProps,
    shortId,
} from '@no-comply/solid-primitives';
import { Flex, type FlexGap, Label, type LayoutPadding, Text } from '@no-comply/standard-ui';
import { type JSX, type ParentComponent, Show, splitProps } from 'solid-js';

import styles from './DemoItem.module.scss';

export type DemoItemProps = ClosedTagProps & {
    title?: string;
    defaultValue?: boolean;
    note?: string;
    row?: boolean;
    gap?: FlexGap;
    padding?: LayoutPadding;
    align?: FlexMixinAlign;
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
        'align',
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
                <Label id={labelId()} variant="medium">
                    {locals.title}
                    <Show when={props.defaultValue}>
                        <Label variant="small" tag="span">
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
                align={locals.align}
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
