import type { ModalContext } from '@no-comply/solid-contexts';
import { Button, Display, ModalDialog } from '@no-comply/standard-ui';
import { Show } from 'solid-js';
import type { Component } from 'solid-js';

type QuitAppModalDialogProps = {
    show: boolean;
    onCancel: () => void;
    onConfirm: () => void;
};

export const QuitAppModalDialog: Component<QuitAppModalDialogProps> = props => {
    const handleConfirm = async (context: ModalContext) => {
        await context.close();
        props.onConfirm();
    };

    const handleDiscard = async (context: ModalContext) => {
        await context.close();
        props.onCancel();
    };

    return (
        <Show when={props.show}>
            <ModalDialog size="s" focusable onDiscard={handleDiscard}>
                {({ dialog }) => (
                    <>
                        <Display level={2} {...dialog.$label}>
                            Are you sure you want to quit?
                        </Display>
                        <Button
                            variant="primary"
                            intent="negative"
                            onPress={() => handleConfirm(dialog.context)}
                        >
                            Quit
                        </Button>
                        <Button variant="secondary" onPress={() => handleDiscard(dialog.context)}>
                            Cancel
                        </Button>
                    </>
                )}
            </ModalDialog>
        </Show>
    );
};
