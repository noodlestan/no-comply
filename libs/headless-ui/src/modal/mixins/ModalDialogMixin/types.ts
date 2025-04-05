import type { ClassList } from '@noodlestan/context-ui-types';

export type ModalDialogMixinProps = {
    focusable?: boolean;
    active?: boolean;
};

export type ModalDialogMixinElementProps = {
    tabIndex: number | undefined;
    classList: ClassList;
    'data-modal-dialog-is-active': '' | undefined;
    'data-modal-dialog-focusable': '' | undefined;
};

export type ModalDialogMixinAPI = {
    elProps: ModalDialogMixinElementProps;
    closeDialog: () => Promise<void>;
};
