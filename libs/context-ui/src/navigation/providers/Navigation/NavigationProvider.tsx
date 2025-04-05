import type { ParentComponent } from 'solid-js';

import type { NavigationServiceAPI } from '../../services';

import { NavigationContext } from './private';

type NavigationProviderProps = {
    navigation: NavigationServiceAPI;
};

export const NavigationProvider: ParentComponent<NavigationProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <NavigationContext.Provider value={props.navigation}>
            {props.children}
        </NavigationContext.Provider>
    );
};
