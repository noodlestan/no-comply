import type { Accessor } from 'solid-js';

import type { BaseContext } from '../../../context';

export type ModalContextOptions = {
    sticky?: boolean;
};

export type ModalContext = BaseContext & {
    type: 'modal';
    id: string;
    setTargetRef: (el: HTMLDialogElement) => void;
    sticky: Accessor<boolean>;
    index: Accessor<number>;
    isActive: Accessor<boolean>;
    close: () => Promise<void>;
};

export type ModalContextValue = [ModalContext];
