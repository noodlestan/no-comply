import type { ClassList } from '@noodlestan/context-ui-primitives';

export type ModalDialogMixinProps = {
    focusable?: boolean;
    active?: boolean;
};

export type ModalDialogMixinAPI = {
    elProps: {
        tabIndex: number | undefined;
        classList: ClassList;
        'data-modal-dialog-is-active': '' | undefined;
        'data-modal-dialog-focusable': '' | undefined;
    };
    closeDialog: () => Promise<void>;
};
