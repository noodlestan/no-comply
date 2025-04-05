/* eslint-disable jsx-a11y/no-autofocus */
import { ContextProvider, createContextNode, ctx } from '@noodlestan/context-ui';
import { type ParentComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

import type { ModalBaseProps } from './types';

export const ModalBase: ParentComponent<ModalBaseProps> = props => {
    // eslint-disable-next-line solid/reactivity
    const contexts = () => [ctx(() => props.modalContext)];
    const context = createContextNode(contexts);

    return (
        <Portal>
            <ContextProvider value={context}>{props.children}</ContextProvider>
        </Portal>
    );
};
