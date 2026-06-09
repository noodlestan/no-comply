import { useFocusTargetConsumer } from '@no-comply/solid-contexts';
import { Display, Flex, NavLink } from '@no-comply/standard-ui';
import { type Component, For } from 'solid-js';

import { $ID_SCREEN_MAIN, SCREEN_MAIN_TARGET } from '../../../../templates';
import type { SidebarNavGroup } from '../types';

export const NavLinkItemGroup: Component<SidebarNavGroup> = props => {
	const [setMainFocus] = useFocusTargetConsumer(SCREEN_MAIN_TARGET);

	const handleNavLink = () => {
		setTimeout(() => {
			setMainFocus();
		});
	};

	return (
		<Flex direction="column" gap="xs">
			<Display level={3} variant="s">
				{props.title}
			</Display>

			<For each={props.items}>
				{item => (
					<NavLink
						href={item.href + `#${$ID_SCREEN_MAIN}`}
						onPress={handleNavLink}
						layout="v"
						size="small"
					>
						{item.title}
					</NavLink>
				)}
			</For>
		</Flex>
	);
};
