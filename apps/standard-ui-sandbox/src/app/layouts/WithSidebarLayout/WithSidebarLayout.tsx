import {
    createClassList,
    createComputedProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';
import {
    type ClosedTagProps,
    createContainerQuery,
    createDismissible,
} from '@noodlestan/headless-ui';
import { Layout } from '@noodlestan/standard-ui';
import { type Accessor, type JSX, type ParentComponent, splitProps } from 'solid-js';

import styles from './WithSidebarLayout.module.css';

type Props = ClosedTagProps & {
    contain?: boolean;
    sidebar: JSX.Element;
    sidebarExpanded: boolean;
    onSidebarDismiss?: () => void;
    exclude?: Accessor<HTMLElement[]>;
};

export const WithSidebarLayout: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [
        'children',
        'contain',
        'sidebar',
        'sidebarExpanded',
        'onSidebarDismiss',
        'exclude',
    ]);

    const { $root: $queryRoot, isMatch: isDesktop } = createContainerQuery({
        query: { minWidth: 600 },
    });

    const { $root: $dismissible } = createDismissible({
        onDismiss: () => locals.onSidebarDismiss?.(),
        exclude: () => locals.exclude?.() || [],
    });

    const contain = () => locals.contain ?? true;
    const classList = createClassList(styles, () => ({
        WithSidebarLayout: true,
        'WithSidebarLayout-contain': contain(),
        'WithSidebarLayout-is-expanded': props.sidebarExpanded,
    }));
    const $localRoot = createComputedProps({
        classList,
    });

    const $ = mergeProps($others, $queryRoot, $localRoot);

    return (
        <Layout stretch="full" {...$}>
            <div classList={staticClassList(styles, 'WithSidebarLayoutWrapper')}>
                <div
                    classList={staticClassList(styles, 'WithSidebarLayout--Sidebar')}
                    {...$dismissible}
                    inert={!isDesktop() && !props.sidebarExpanded}
                    aria-hidden={!isDesktop() && !props.sidebarExpanded}
                >
                    {props.sidebar}
                </div>
                <div classList={staticClassList(styles, 'WithSidebarLayout--Contents')}>
                    {props.children}
                </div>
            </div>
        </Layout>
    );
};
