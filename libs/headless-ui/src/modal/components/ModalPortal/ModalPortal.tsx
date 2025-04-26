/* eslint-disable solid/reactivity */
import { ModalContextProvider } from '@noodlestan/context-ui';
import { type ParentComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

import type { ModalPortalProps } from './types';

export const ModalPortal: ParentComponent<ModalPortalProps> = props => {
    return (
        <Portal>
            <ModalContextProvider context={props.context}>{props.children}</ModalContextProvider>
        </Portal>
    );
};
