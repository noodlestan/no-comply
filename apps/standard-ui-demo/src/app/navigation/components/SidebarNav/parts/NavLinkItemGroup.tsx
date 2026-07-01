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
			<Display level={3} variant="xs">
				{props.title}
			</Display>

			<For each={props.items}>
				{item =>
					'href' in item ? (
						<NavLink
							href={item.href + `#${$ID_SCREEN_MAIN}`}
							onPress={handleNavLink}
							layout="v"
							highlight="before"
						>
							{item.title}
						</NavLink>
					) : (
						<NavLinkItemGroup title={item.title} items={item.items} />
					)
				}
			</For>
		</Flex>
	);
};
