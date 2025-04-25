import { type ParentComponent, splitProps } from 'solid-js';

import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';

import { createCallout } from './createCallout';
import type { CalloutProps } from './types';

export const Callout: ParentComponent<CalloutProps> = props => {
    const [locals, others] = splitProps(props, ['children']);
    const { elProps, iconProps, labelProps } = createCallout(others);

    return (
        <Surface variant="message" {...elProps} labelledby={labelProps.id}>
            <Flex align="center" padding="s" gap="m" justify="between">
                <Flex align="center" padding="s" gap="m">
                    <Icon {...iconProps} />
                    <div {...labelProps}>{locals.children}</div>
                </Flex>
                {/* TODO close button */}
                <button>Close</button>
            </Flex>
        </Surface>
    );
};
