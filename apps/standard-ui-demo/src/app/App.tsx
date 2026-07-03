import { useFocusTargetConsumer, useSystemContext } from '@no-comply/solid-contexts';
import { createClassList } from '@no-comply/solid-primitives';
import { Flex, SkipLink } from '@no-comply/standard-ui';
import { Router } from '@solidjs/router';
import { type Component, type ParentComponent, Show } from 'solid-js';

import {
	AppServicesProvider,
	CodeBlockProvider,
	MetaProvider,
	RenderingProvider,
	UIRootProvider,
	useAppServices,
} from '../providers';

import styles from './App.module.scss';
import { AppSplash, CodeLink } from './components';
import { APP } from './constants';
import { Routes } from './navigation';
import { ErrorBoundaryScreen } from './screens';
import { $ID_SCREEN_MAIN, SCREEN_MAIN_TARGET } from './templates';

const Main: ParentComponent = props => {
	const [setMainFocus] = useFocusTargetConsumer(SCREEN_MAIN_TARGET);

	const handleSkipLink = () => {
		setTimeout(() => {
			setMainFocus();
		});
	};

	const { status } = useAppServices();
	const { hasFocus } = useSystemContext();

	const classList = createClassList(styles, () => {
		return {
			AppMain: true,
			'has-focus': hasFocus(),
		};
	});

	return (
		<Flex direction="column" stretch="full" classList={classList()} aria-busy={!status.isReady()}>
			<Show when={!status.isReady()}>
				<AppSplash />
			</Show>
			<Show when={status.isReady()}>
				<SkipLink floating href={`#${$ID_SCREEN_MAIN}`} onPress={handleSkipLink}>
					Skip to main content
				</SkipLink>
				{props.children}
			</Show>
		</Flex>
	);
};

const Root: ParentComponent = props => {
	return (
		<ErrorBoundaryScreen>
			<AppServicesProvider>
				<MetaProvider>
					<RenderingProvider>
						<CodeBlockProvider link={CodeLink}>
							<UIRootProvider defaultCtxId={APP.id}>
								<Main>{props.children}</Main>
								{/* <DebugDrawer /> */}
							</UIRootProvider>
						</CodeBlockProvider>
					</RenderingProvider>
				</MetaProvider>
			</AppServicesProvider>
		</ErrorBoundaryScreen>
	);
};

export const App: Component = () => {
	return (
		<Router root={Root}>
			<Routes />
		</Router>
	);
};
