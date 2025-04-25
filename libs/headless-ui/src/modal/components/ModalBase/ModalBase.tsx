/* eslint-disable solid/reactivity */
import { ModalContextProvider } from '@noodlestan/context-ui';
import { type ParentComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

import type { ModalBaseProps } from './types';

export const ModalBase: ParentComponent<ModalBaseProps> = props => {
    return (
        <Portal>
            <ModalContextProvider context={props.context}>{props.children}</ModalContextProvider>
        </Portal>
    );
};
