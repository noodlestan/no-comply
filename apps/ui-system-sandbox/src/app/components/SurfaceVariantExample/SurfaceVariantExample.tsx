import type { SurfaceProps } from '@noodlestan/ui-system';
import { Flex, Label, Surface, Text } from '@noodlestan/ui-system';
import { type Component, type JSX, splitProps } from 'solid-js';

import './SurfaceVariantExample.css';

type SurfaceVariantProps = SurfaceProps & {
    onVariant: string;
    children: JSX.Element;
};

export const SurfaceVariant: Component<SurfaceVariantProps> = props => {
    const [locals, surfaceProps] = splitProps(props, ['onVariant', 'children']);

    return (
        <Flex gap="s" classList={{ SurfaceVariantExample: true }}>
            <Label>{surfaceProps.variant}</Label>
            <Surface variant={locals.onVariant}>
                <Flex padding="l" gap="m">
                    <Surface {...surfaceProps}>
                        <Flex>{locals.children}</Flex>
                    </Surface>
                    <Text size="xs">(on {locals.onVariant})</Text>
                </Flex>
            </Surface>
        </Flex>
    );
};
