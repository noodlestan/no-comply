import { onCleanup } from 'solid-js';

import { useShortcuts } from './useShortcuts';

export const useShortcutsKeyDownListener = (el: Document | HTMLElement): void => {
    const { handleKeyDown } = useShortcuts();

    el.addEventListener('keydown', handleKeyDown as EventListenerOrEventListenerObject);

    onCleanup(() => {
        el.removeEventListener('keydown', handleKeyDown as EventListenerOrEventListenerObject);
    });
};
