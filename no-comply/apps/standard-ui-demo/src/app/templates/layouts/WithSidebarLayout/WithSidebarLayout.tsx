import { createContainerQuery, createDismissible } from '@no-comply/solid-composables';
import {
	type ClosedTagProps,
	combineProps,
	computedProps,
	createClassList,
	dataBoolean,
	staticClassList,
} from '@no-comply/solid-primitives';
import { Layout } from '@no-comply/standard-ui';
import { type Accessor, type JSX, type ParentComponent, splitProps } from 'solid-js';

import styles from './WithSidebarLayout.module.scss';

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
		query: { minWidth: 960 },
	});

	const { $root: $dismissible } = createDismissible({
		onDismiss: () => locals.onSidebarDismiss?.(),
		exclude: () => locals.exclude?.() || [],
	});

	const contain = () => locals.contain ?? true;
	const classList = createClassList(styles, () => ({
		WithSidebarLayout: true,
		contain: contain(),
		'is-expanded': props.sidebarExpanded,
	}));
	const $root = computedProps({
		'data-layout-large': () => dataBoolean(isDesktop()),
		classList,
	});

	const $ = combineProps($others, $queryRoot, $root);

	return (
		<Layout stretch="full" {...$}>
			<div classList={staticClassList(styles, '-Wrapper')}>
				<div
					classList={staticClassList(styles, '-Sidebar')}
					{...$dismissible}
					inert={!isDesktop() && !props.sidebarExpanded}
					aria-hidden={!isDesktop() && !props.sidebarExpanded}
				>
					{props.sidebar}
				</div>
				<div classList={staticClassList(styles, '-Contents')}>{props.children}</div>
			</div>
		</Layout>
	);
};
