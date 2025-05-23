import { shortId, staticClassList } from '@noodlestan/context-ui-primitives';
import {
    Flex,
    Label,
    Surface,
    type SurfaceProps,
    type SurfaceVariant,
    Text,
} from '@noodlestan/standard-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import styles from './SurfaceVariantExample.module.css';

type Props = SurfaceProps & {
    onVariant: SurfaceVariant;
};

export const SurfaceVariantExample: ParentComponent<Props> = props => {
    const [locals, surfaceProps] = splitProps(props, ['onVariant', 'children']);

    const labelId = shortId();

    return (
        <Flex gap="s" classList={staticClassList(styles, 'SurfaceVariantExample')}>
            <Surface variant={locals.onVariant}>
                <Label id={labelId}>{surfaceProps.variant}</Label>
                <Flex padding="l" gap="m">
                    <Surface {...surfaceProps} aria-labelledby={labelId}>
                        <Flex>{locals.children}</Flex>
                    </Surface>
                    <Text variant="small">(on {locals.onVariant})</Text>
                </Flex>
            </Surface>
        </Flex>
    );
};
