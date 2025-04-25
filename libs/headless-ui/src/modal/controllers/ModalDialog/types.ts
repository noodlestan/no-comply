import type { ModalContextOptions, ModalContextValue } from '@noodlestan/context-ui';
import type {
    AriaDialogElementProps,
    AriaDialogProps,
    AriaLabelledAPI,
} from '@noodlestan/context-ui-aria';

import type { FocusTrapAPI } from '../../../focus';
import type { ModalDialogMixinElementProps, ModalDialogMixinProps } from '../../mixins';

export type ModalDialogProps = AriaDialogProps &
    ModalDialogMixinProps &
    ModalContextOptions & {
        onDiscard?: () => void;
    };

export type ModalDialogAPI = {
    elProps: AriaDialogElementProps &
        ModalDialogMixinElementProps &
        FocusTrapAPI['elProps'] & {
            ref: (el: HTMLDialogElement | null) => void;
            component: 'dialog';
        };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
    modalContext: ModalContextValue;
    closeDialog: () => Promise<void>;
};
