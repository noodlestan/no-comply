import { type ParentComponent } from 'solid-js';

import type { ComposableTypeMixinProps } from '../../mixins';

import { AlignFirstLineContextProviderCTX } from './private';

type AlignFirstLineContextProviderProps = {
    props: ComposableTypeMixinProps;
};

export const AlignFirstLineContextProvider: ParentComponent<
    AlignFirstLineContextProviderProps
> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <AlignFirstLineContextProviderCTX.Provider value={props.props}>
            {props.children}
        </AlignFirstLineContextProviderCTX.Provider>
    );
};
