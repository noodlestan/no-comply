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
			<Display tag="p" variant="tiny" aria-hidden>
				{props.title}
			</Display>
			<Flex tag="ul" direction="column" gap="xs" aria-label={`Links for ${props.title}`}>
				<For each={props.items}>
					{item =>
						'href' in item ? (
							<li>
								<NavLink
									href={item.href + `#${$ID_SCREEN_MAIN}`}
									onPress={handleNavLink}
									layout="v"
									highlight="before"
									size="small"
								>
									{item.title}
								</NavLink>
							</li>
						) : (
							<li>
								<NavLinkItemGroup title={item.title} items={item.items} />
							</li>
						)
					}
				</For>
			</Flex>
		</Flex>
	);
};
