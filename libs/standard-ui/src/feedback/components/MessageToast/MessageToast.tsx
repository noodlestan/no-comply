import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, type JSX, splitProps } from 'solid-js';

import { ContentMessageTemplate } from '../../../content';

import { MESSAGE_TOAST_PROPS } from './constants';
import { createMessageToast } from './createMessageToast';
import type { MessageToastProps } from './types';

type Props = ClosedTagProps &
    MessageToastProps & {
        children?: JSX.Element;
    };

export const MessageToast: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...MESSAGE_TOAST_PROPS, 'children']);

    const { $root, ...rest } = createMessageToast(locals);
    const $ = mergeProps($root, $others);

    return (
        <ContentMessageTemplate {...props} $root={$} {...rest}>
            {locals.children}
        </ContentMessageTemplate>
    );
};
