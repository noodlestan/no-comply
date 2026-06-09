import { createFocusRing } from '@no-comply/solid-composables';
import { createFocusTargetRef } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';
import { Flex, Surface, createFocusRingMixin } from '@no-comply/standard-ui';
import { type Component, For } from 'solid-js';

import { $ID_SIDEBAR_NAV } from '../private';

import { SIDEBAR_NAV_TARGET } from './constant';
import { NavLinkItemGroup } from './parts';
import type { SidebarNavGroup } from './types';

type Props = {
	items: SidebarNavGroup[];
};

export const SidebarNav: Component<Props> = props => {
	const [setNavRef] = createFocusTargetRef(SIDEBAR_NAV_TARGET, { transient: true });

	const { $root: $focusRing } = createFocusRing({ passive: true });
	const { $root: $focusRingMixin } = createFocusRingMixin({ inset: true });

	const $ = combineProps($focusRing, $focusRingMixin);

	return (
		<Surface
			tag="nav"
			variant="panel"
			stretch="height"
			overflow="y-auto"
			id={$ID_SIDEBAR_NAV}
			aria-label="Main menu"
			ref={setNavRef}
			{...$}
		>
			<Flex direction="column" padding="m" gap="m">
				<For each={props.items}>
					{item => <NavLinkItemGroup title={item.title} items={item.items} />}
				</For>
			</Flex>
		</Surface>
	);
};
