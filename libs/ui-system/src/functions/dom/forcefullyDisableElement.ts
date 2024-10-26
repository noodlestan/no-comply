const disableChild = (el: Element): void => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    if (
        el instanceof HTMLButtonElement ||
        el instanceof HTMLInputElement ||
        el instanceof HTMLSelectElement ||
        el instanceof HTMLTextAreaElement
    ) {
        el.disabled = true;
        return;
    }

    if (
        el instanceof HTMLAnchorElement ||
        el instanceof HTMLIFrameElement ||
        el instanceof HTMLAudioElement ||
        el instanceof HTMLVideoElement ||
        el instanceof HTMLEmbedElement ||
        el instanceof HTMLObjectElement ||
        el instanceof HTMLLabelElement ||
        el instanceof HTMLDetailsElement
    ) {
        el.tabIndex = -1;
        el.setAttribute('aria-hidden', 'true');

        if (document.activeElement === el) {
            el.blur();
        }

        el.addEventListener('keydown', (ev: Event) => {
            const event = ev as KeyboardEvent;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
            }
        });
    }

    if (el.hasAttribute('contenteditable')) {
        el.setAttribute('contenteditable', 'false');
        el.tabIndex = -1;
    }
};

export const forcefullyDisableElement = (el: Element): void => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    el.style.pointerEvents = 'none';
    el.setAttribute('aria-hidden', 'true');

    el.querySelectorAll('*').forEach(disableChild);
};
