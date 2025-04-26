import type { ModalContext, ModalContextOptions, ModalContextValue } from '@noodlestan/context-ui';
import type { AriaDialogAPI, AriaDialogProps, AriaLabelledAPI } from '@noodlestan/context-ui-aria';

import type { FocusTrapAPI, FocusTrapProps } from '../../../focus';

export type ModalDialogProps = AriaDialogProps &
    FocusTrapProps &
    ModalContextOptions & {
        onDiscard?: (context: ModalContext) => void;
    };

export type ModalDialogAPI = {
    $root: AriaDialogAPI['$root'] &
        FocusTrapAPI['$root'] & {
            ref: (el: HTMLDialogElement | null) => void;
            component: 'dialog';
            onKeyDown: (ev: KeyboardEvent) => void;
            onKeyUp: (ev: KeyboardEvent) => void;
            onKeyPress: (ev: KeyboardEvent) => void;
            'data-modal-dialog-is-active': '' | undefined;
        };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    context: ModalContext;
    contextValue: ModalContextValue;
};
