import {
	OverflowItems,
	OverflowItemsContent,
	OverflowItemsToggle,
} from '@no-comply/solid-composables';
import { useFocusTargetConsumer, useNavigation } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, NavLink } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { SCREEN_MAIN_TARGET } from '../../../../../templates';
import { routeFor } from '../../../../routeFor';

import styles from './MainNav.module.scss';

export const MainNav: Component = () => {
	const [setMainFocus] = useFocusTargetConsumer(SCREEN_MAIN_TARGET);
	const { isCurrent } = useNavigation();

	const items = [
		{ id: '1', href: routeFor.showcase(), label: 'Showcase' },
		{ id: '2', href: routeFor.feature('components'), label: 'Features' },
		{ id: '3', href: routeFor.resources(), label: 'Resources' },
		{ id: '4', href: routeFor.api(), label: 'Api' },
	];

	const selectedItemId = () => items.find(item => isCurrent(item.href))?.id;

	const handleNavLink = () => {
		setTimeout(() => {
			setMainFocus();
		});
	};

	return (
		<OverflowItems
			items={items}
			currentItemId={selectedItemId()}
			renderOverflow={({ items }) => <>{items.length}</>}
			renderItem={({ item, isCurrent }) => (
				<NavLink href={item.href} onPress={handleNavLink} current={isCurrent}>
					{item.label}
				</NavLink>
			)}
			renderToggle={({ count }) => <>{count}</>}
			classList={staticClassList(styles, 'MainNav')}
		>
			<Flex
				tag="nav"
				direction="row"
				justify="start"
				stretch="full"
				align="center"
				gap="m"
				aria-label="Main navigation"
			>
				<OverflowItemsContent />
				<OverflowItemsToggle />
			</Flex>
		</OverflowItems>
	);
};
