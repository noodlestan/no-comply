/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-autofocus */
import { Component, JSX, Show, createUniqueId, untrack } from 'solid-js';
import { Portal } from 'solid-js/web';

import { inject } from '../../../providers';
import { useModalShowEffect, useTransitionClassList } from '../../hooks';
import { MODAL_Z_INDEX, ModalProvider } from '../../private';
import { ModalsService } from '../../services';
import { FocusTrap } from '../FocusTrap';
import { Overlay } from '../Overlay';

import './Modal.css';

export type ModalProps = {
    show: boolean;
    sticky?: boolean;
    children?: JSX.Element;
    onClose: () => void;
};

export const Modal: Component<ModalProps> = props => {
    const { getModalIndex, getModalTransition, isModalCurrent, isModalDimmed, isModalVisible } =
        // TODO replace by useModals()
        inject(ModalsService);

    const id = createUniqueId();

    const getIndex = () => getModalIndex(id);
    const isCurrent = () => isModalCurrent(id);
    const getTransition = () => getModalTransition(id);
    const isTransition = () => !!getTransition();
    const isVisible = () => isModalVisible(id) || !!isTransition();

    const classList = () => ({ Modal: true, 'Modal-is-current': isCurrent() });
    const transitionClassList = useTransitionClassList('Modal', getTransition);

    const options = untrack(() => ({ sticky: !!props.sticky }));
    useModalShowEffect(() => props.show, id, options);

    const stopPropagation = (ev: Event) => ev.stopImmediatePropagation();
    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
        if (ev.code === 'Escape') {
            props.onClose();
        }
    };

    return (
        <Show when={isVisible()}>
            <Portal>
                <div
                    classList={classList()}
                    style={{ 'z-index': getIndex() + MODAL_Z_INDEX }}
                    onKeyDown={handleKeyDown}
                    onKeyUp={stopPropagation}
                    onKeyPress={stopPropagation}
                >
                    <ModalProvider
                        id={id}
                        options={options}
                        current={isCurrent}
                        transition={getTransition}
                    >
                        <FocusTrap show={isModalVisible(id) && !isTransition()} autoFocus={true}>
                            <div classList={transitionClassList()}>{props.children}</div>
                        </FocusTrap>
                        <Show when={isModalDimmed(id)}>
                            <Overlay />
                        </Show>
                    </ModalProvider>
                </div>
            </Portal>
        </Show>
    );
};
