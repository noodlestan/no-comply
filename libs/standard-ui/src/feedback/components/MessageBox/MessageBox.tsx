import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';

import { MESSAGE_BOX_PROPS } from './constants';
import { createMessageBox } from './createMessageBox';
import type { MessageBoxProps } from './types';

export const MessageBox: ParentComponent<MessageBoxProps> = props => {
    const [locals, $others] = splitProps(props, [...MESSAGE_BOX_PROPS, 'children']);

    const { $root, $label, $icon } = createMessageBox(locals);
    const $ = mergeProps($root, $others);

    return (
        <Surface variant="message" {...$}>
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
