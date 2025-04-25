import { ModalBase, createModalDialog } from '@noodlestan/headless-ui';
import { Button, Dialog, Display } from '@noodlestan/standard-ui';
import { Show } from 'solid-js';
import type { Component } from 'solid-js';

type QuitAppModalDialogProps = {
    show: boolean;
    onCancel: () => void;
    onConfirm: () => void;
};

export const QuitAppModalDialog: Component<QuitAppModalDialogProps> = props => {
    const dialog = createModalDialog({
        focusable: true,
        onDiscard: () => props.onCancel(),
    });

    const handleConfirm = async () => {
        await dialog.closeDialog();
        props.onConfirm();
    };

    const handleDiscard = async () => {
        await dialog.closeDialog();
        props.onCancel();
    };

    return (
        <Show when={props.show}>
            <ModalBase context={dialog.modalContext}>
                <Dialog size="s" dialog={dialog}>
                    <Display level={2}>Are you sure you want to quit?</Display>
                    <Button variant="primary" onPress={handleConfirm}>
                        Quit
                    </Button>
                    <Button variant="secondary" onPress={handleDiscard}>
                        Cancel
                    </Button>
                </Dialog>
            </ModalBase>
        </Show>
    );
};
