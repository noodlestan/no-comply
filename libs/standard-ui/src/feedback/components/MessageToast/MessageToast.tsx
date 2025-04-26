import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';

import { MESSAGE_TOAST_PROPS } from './constants';
import { createMessageToast } from './createMessageToast';
import type { MessageToastProps } from './types';

export const MessageToast: ParentComponent<MessageToastProps> = props => {
    const [locals, $others] = splitProps(props, [...MESSAGE_TOAST_PROPS, 'children']);

    const { $root, $label, iconProps: $icon } = createMessageToast(locals);
    const $ = mergeProps($root, $others);

    return (
        <Surface variant="toast" {...$}>
            <Flex align="center" padding="s" gap="m" justify="between">
                <Flex align="center" padding="s" gap="m">
                    <Icon {...$icon} />
                    <div {...$label}>{props.children}</div>
                </Flex>
                {/* TODO close button */}
                <button>Close</button>
            </Flex>
        </Surface>
    );
};
