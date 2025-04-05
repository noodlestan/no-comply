import { staticClassList } from '@noodlestan/context-ui-types';
import { createFeedbackMessage } from '@noodlestan/headless-ui';
import type { ParentComponent } from 'solid-js';

import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';

import styles from './MessageToast.module.css';
import type { MessageToastProps } from './types';

export const MessageToast: ParentComponent<MessageToastProps> = props => {
    const message = createFeedbackMessage(props);

    return (
        <Surface variant="toast" classList={staticClassList(styles, 'Toast')}>
            <Flex align="center" padding="s" gap="m" justify="between">
                <Flex align="center" padding="s" gap="m">
                    <Icon size="s" {...message.iconProps} />
                    <div {...message.labelProps}>{props.children}</div>
                </Flex>
                {/* TODO close button */}
                <button>Close</button>
            </Flex>
        </Surface>
    );
};
