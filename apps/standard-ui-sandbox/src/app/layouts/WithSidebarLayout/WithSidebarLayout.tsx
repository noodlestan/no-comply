import { createClassList, staticClassList } from '@noodlestan/context-ui-primitives';
import { createContainerQuery, createDismissible } from '@noodlestan/headless-ui';
import type { Accessor, JSX, ParentComponent } from 'solid-js';

import styles from './WithSidebarLayout.module.css';

type Props = {
    contain?: boolean;
    sidebar: JSX.Element;
    sidebarExpanded: boolean;
    onSideBarDismiss?: () => void;
    exclude?: Accessor<HTMLElement[]>;
};

export const WithSidebarLayout: ParentComponent<Props> = props => {
    const { $root, isMatch } = createContainerQuery({ query: 'min-width: 600px' });

    const { $root: $dismissible } = createDismissible({
        onDismiss: () => props.onSideBarDismiss?.(),
        exclude: () => props.exclude?.() || [],
    });

    const contain = () => props.contain ?? true;

    const classList = createClassList(styles, () => ({
        WithSidebarLayout: true,
        'WithSidebarLayout-contain': contain(),
        'WithSidebarLayout-is-expanded': props.sidebarExpanded,
    }));

    return (
        <div classList={classList()} {...$root}>
            <div classList={staticClassList(styles, 'WithSidebarLayoutWrapper')}>
                <div
                    classList={staticClassList(styles, 'WithSidebarLayout--Sidebar')}
                    {...$dismissible}
                    inert={!isMatch() && !props.sidebarExpanded}
                >
                    {props.sidebar}
                </div>
                <div classList={staticClassList(styles, 'WithSidebarLayout--Contents')}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};
