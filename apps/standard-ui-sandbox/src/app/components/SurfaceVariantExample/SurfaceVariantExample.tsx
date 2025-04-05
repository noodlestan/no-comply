import { Label } from '@noodlestan/context-ui';
import { staticClassList } from '@noodlestan/context-ui-types';
import {
    Flex,
    Surface,
    type SurfaceProps,
    type SurfaceVariant,
    Text,
} from '@noodlestan/standard-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import styles from './SurfaceVariantExample.module.css';

type SurfaceVariantProps = SurfaceProps & {
    onVariant: SurfaceVariant;
};

export const SurfaceVariantExample: ParentComponent<SurfaceVariantProps> = props => {
    const [locals, surfaceProps] = splitProps(props, ['onVariant', 'children']);
    return (
        <Flex gap="s" classList={staticClassList(styles, 'SurfaceVariantExample')}>
            <Label>{surfaceProps.variant}</Label>
            <Surface variant={locals.onVariant}>
                <Flex padding="l" gap="m">
                    <Surface {...surfaceProps}>
                        <Flex>{locals.children}</Flex>
                    </Surface>
                    <Text variant="small">(on {locals.onVariant})</Text>
                </Flex>
            </Surface>
        </Flex>
    );
};
