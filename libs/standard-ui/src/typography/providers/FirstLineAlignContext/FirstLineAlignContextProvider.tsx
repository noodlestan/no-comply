import { type ParentComponent } from 'solid-js';

import type { ComposableTypeMixinProps } from '../../mixins';

import { FirstLineAlignContextCTX } from './private';

type FirstLineAlignContextProviderProps = {
    props: ComposableTypeMixinProps;
};

export const FirstLineAlignContextProvider: ParentComponent<
    FirstLineAlignContextProviderProps
> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FirstLineAlignContextCTX.Provider value={props.props}>
            {props.children}
        </FirstLineAlignContextCTX.Provider>
    );
};
