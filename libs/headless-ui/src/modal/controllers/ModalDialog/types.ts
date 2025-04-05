import type { ModalContext, ModalContextOptions } from '@noodlestan/context-ui';
import type {
    AriaDialogElementProps,
    AriaDialogProps,
    AriaLabelElementProps,
} from '@noodlestan/context-ui-aria';

import type { FocusTrapContainerProps } from '../../../focus';
import type { ModalDialogMixinElementProps, ModalDialogMixinProps } from '../../mixins';

export type ModalDialogProps = AriaDialogProps &
    ModalDialogMixinProps &
    ModalContextOptions & {
        onDiscard?: () => void;
    };

export type ModalDialogContainerProps = AriaDialogElementProps &
    ModalDialogMixinElementProps &
    FocusTrapContainerProps & {
        ref: (el: HTMLDialogElement | null) => void;
        component: 'dialog';
    };

export type ModalDialogAPI = {
    containerProps: ModalDialogContainerProps;
    labelProps: AriaLabelElementProps;
    modalContext: ModalContext;
    closeDialog: () => Promise<void>;
};
