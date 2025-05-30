import { shortId, staticClassList } from '@no-comply/solid-primitives';
import {
    Flex,
    Label,
    Surface,
    type SurfaceProps,
    type SurfaceVariant,
    Text,
} from '@no-comply/standard-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import styles from './SurfaceVariantExample.module.scss';

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
