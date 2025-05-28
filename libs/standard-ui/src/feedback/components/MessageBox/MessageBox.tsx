import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, type JSX, splitProps } from 'solid-js';

import { ContentMessageTemplate } from '../../../content';

import { MESSAGE_BOX_PROPS } from './constants';
import { createMessageBox } from './createMessageBox';
import type { MessageBoxProps } from './types';

type Props = ClosedTagProps &
    MessageBoxProps & {
        children?: JSX.Element;
    };

export const MessageBox: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...MESSAGE_BOX_PROPS, 'children']);

    const { $root, ...rest } = createMessageBox(locals);
    const $ = mergeProps($root, $others);

    return (
        <ContentMessageTemplate {...props} $root={$} {...rest}>
            {locals.children}
        </ContentMessageTemplate>
    );
};
