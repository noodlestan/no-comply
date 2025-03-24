import { type Component, Show } from 'solid-js';
import { Portal } from 'solid-js/web';

import { modalsStore } from '../../private';
import { Overlay } from '../Overlay';

export const ModalOverlay: Component = () => {
    const { modals: dialogs } = modalsStore;

    return (
        <Show when={dialogs().length}>
            <Portal>
                <Overlay />
            </Portal>
        </Show>
    );
};
