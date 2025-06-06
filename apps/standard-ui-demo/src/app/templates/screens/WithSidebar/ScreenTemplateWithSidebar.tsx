import { useFocusTarget, useNavigation } from '@no-comply/solid-contexts';
import { createClassList, staticClassList } from '@no-comply/solid-primitives';
import { Flex, Surface } from '@no-comply/standard-ui';
import { type JSX, type ParentComponent, createEffect, createSignal } from 'solid-js';

import { MainHeader, SIDEBAR_NAV_TARGET } from '../../../navigation';
import { WithSidebarLayout } from '../../layouts';

import styles from './ScreenTemplateWithSidebar.module.scss';

type Props = {
	id: string;
	sidebar: JSX.Element;
};

export const ScreenTemplateWithSidebar: ParentComponent<Props> = props => {
	const [setSidebarFocus] = useFocusTarget(SIDEBAR_NAV_TARGET);
	let toggleButtonEl: HTMLElement | undefined;

	const setToggleButtonRef = (el: HTMLElement) => {
		toggleButtonEl = el;
	};

	const { current } = useNavigation();
	const [sidebarExpanded, setSidebarExpanded] = createSignal(false);

	createEffect(() => {
		current();
		setSidebarExpanded(false);
	});

	const handleToggleSidebar = () => {
		const wasExpanded = sidebarExpanded();
		setSidebarExpanded(!wasExpanded);
		if (!wasExpanded) {
			setSidebarFocus();
		}
	};

	const handleDismiss = () => setSidebarExpanded(false);

	const classList = staticClassList(styles, 'ScreenTemplateWithSidebar');

	const layoutClassList = createClassList(styles, () => ({
		'-Layout': !sidebarExpanded(),
	}));

	return (
		<Surface
			variant="stage"
			stretch="full"
			overflow="auto"
			classList={classList}
			data-screen={props.id}
		>
			<Flex direction="column" stretch="full">
				<MainHeader
					setMenuButtonRef={setToggleButtonRef}
					toggleSidebar={handleToggleSidebar}
					sidebarExpanded={sidebarExpanded()}
				/>
				<WithSidebarLayout
					contain={true}
					sidebar={props.sidebar}
					sidebarExpanded={sidebarExpanded()}
					onSidebarDismiss={handleDismiss}
					exclude={() => (toggleButtonEl ? [toggleButtonEl] : [])}
					classList={layoutClassList()}
				>
					{props.children}
				</WithSidebarLayout>
			</Flex>
		</Surface>
	);
};
