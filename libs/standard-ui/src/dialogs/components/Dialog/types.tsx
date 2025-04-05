import type { ModalDialogAPI } from '@noodlestan/headless-ui';

export type DialogSize = 's' | 'm' | 'l';

export type DialogProps = {
    dialog: ModalDialogAPI;
    size?: DialogSize;
};
