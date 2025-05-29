import { ModalPortal, type SurfaceAPI } from '@no-comply/solid-composables';
import type { ClosedTagProps, RenderProp } from '@no-comply/solid-primitives';
import { type Component } from 'solid-js';

import { Surface } from '../../../surface';

import { createModalDialog } from './createModalDialog';
import type { ModalDialogAPI, ModalDialogProps } from './types';

type ChildrenProps = {
    dialog: ModalDialogAPI;
    surface: SurfaceAPI;
};

type Props = ClosedTagProps &
    ModalDialogProps & {
        children: RenderProp<ChildrenProps>;
    };

export const ModalDialog: Component<Props> = props => {
    const dialog = createModalDialog(props);
    const { surfaceProps, contextValue } = dialog;

    return (
        <ModalPortal context={contextValue}>
            <Surface {...surfaceProps}>
                {({ surface }) => props.children({ dialog, surface })}
            </Surface>
        </ModalPortal>
    );
};
