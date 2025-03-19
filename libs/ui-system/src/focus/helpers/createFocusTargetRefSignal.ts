import { Accessor, createSignal } from 'solid-js';

import { FocusTarget } from '../providers';

type RefSignal = [Accessor<FocusTarget | undefined>, (el: HTMLElement) => void];

export const createFocusTargetRefSignal = (): RefSignal => {
    const [target, setTarget] = createSignal<FocusTarget>();

    const setFocusTargetRef = (el: HTMLElement) => {
        const target = () => el.focus();
        setTarget(() => target);
    };

    return [target, setFocusTargetRef];
};
