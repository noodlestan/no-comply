import { type PickRequired, createClassList } from '@noodlestan/context-ui-types';
import { createFeedbackMessage } from '@noodlestan/headless-ui';
import type { ParentComponent } from 'solid-js';

import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';

import styles from './MessageBox.module.css';
import type { MessageBoxProps } from './types';

const defaultProps: PickRequired<MessageBoxProps, 'size' | 'length'> = {
    size: 'm',
    length: 'full',
};

export const MessageBox: ParentComponent<MessageBoxProps> = props => {
    const { elProps, labelProps, iconProps } = createFeedbackMessage(props);

    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;

    const classList = createClassList(styles, () => [
        'MessageBox',
        `MessageBox-size-${size()}`,
        `MessageBox-length-${length()}`,
    ]);

    return (
        <Surface variant="message" classList={classList()} {...elProps}>
            <Flex align="center" padding="s" gap="m" justify="between">
                <Flex align="center" padding="s" gap="m">
                    <Icon size={size()} {...iconProps} />
                    <div {...labelProps}>{props.children}</div>
                </Flex>
                {/* TODO close button */}
                <button>Close</button>
            </Flex>
        </Surface>
    );
};
