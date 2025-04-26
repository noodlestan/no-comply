import type { RenderProp } from '@noodlestan/context-ui-primitives';
import { type ClosedTagProps, ModalPortal, type SurfaceAPI } from '@noodlestan/headless-ui';
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
