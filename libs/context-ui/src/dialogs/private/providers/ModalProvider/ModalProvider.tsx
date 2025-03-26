import { type Accessor, type Component, type JSX, createContext } from 'solid-js';

import type { ModalOptions } from '../../../types';

export type ModalContextState = {
    id: string;
    options: ModalOptions;
    current: Accessor<boolean>;
};

export const ModalContext = createContext<ModalContextState>({
    id: '',
    options: {},
    current: () => false,
});

type ModalProviderProps = ModalContextState & {
    children?: JSX.Element;
};

export const ModalProvider: Component<ModalProviderProps> = props => {
    return <ModalContext.Provider value={props}>{props.children}</ModalContext.Provider>;
};
