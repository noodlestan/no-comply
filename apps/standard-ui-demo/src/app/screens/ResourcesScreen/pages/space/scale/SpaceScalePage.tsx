import { DataItem, Display, Flex, Layout, Surface } from '@no-comply/standard-ui';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { type Component, createSignal, onMount } from 'solid-js';

import { Ruler } from '../../../../../../studio';
import { ShowSpace } from '../../../components';
import { ResourcesPage } from '../../../private';

export const SpaceScalePage: Component = () => {
	let container: HTMLElement;

	const [screenWidth, setScreenWidth] = createSignal<number>(0);
	const [containerWidth, setContainerWidth] = createSignal<number>(0);

	const setContainerRef = (el: HTMLElement) => (container = el);

	onMount(() => {
		createResizeObserver(window.document.documentElement, () => setScreenWidth(window.innerWidth));
		createResizeObserver(container, () => setContainerWidth(container.clientWidth));
	});

	return (
		<ResourcesPage title="Space Scales">
			<Layout uncontained ref={setContainerRef}>
				<Layout padding="l">
					<Surface variant="panel" padding="s">
						<Flex direction="row">
							<DataItem units="px" label="Container Width" value={containerWidth()} />
						</Flex>
						<Flex direction="row">
							<DataItem units="px" label="Screen Width" value={screenWidth()} />
						</Flex>
					</Surface>
				</Layout>
				<Ruler offset={screenWidth() - containerWidth()} />
			</Layout>

			<Display level={3}>Size</Display>

			<Flex direction="column" gap="l" justify="start">
				<ShowSpace size="2xs" />
				<ShowSpace size="xs" />
				<ShowSpace size="s" />
				<ShowSpace size="m" />
				<ShowSpace size="l" />
				<ShowSpace size="xl" />
			</Flex>
		</ResourcesPage>
	);
};
