import { PopoverContextProvider } from '@no-comply/solid-composables';
import { type ClosedTagProps, type RenderProp, combineProps } from '@no-comply/solid-primitives';
import ChevronRightIcon from 'lucide-solid/icons/chevron-right';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';
import { Popover } from '../../../popover';
import { AlignFirstLine, Label, Text } from '../../../typography';

import { MENU_ITEM_SUB_MENU_PROPS } from './constants';
import { createMenuItemSubMenu } from './createMenuItemSubMenu';
import type { MenuItemSubMenuAPI, MenuItemSubMenuProps } from './types';

type ChildrenProps = {
	subMenu: MenuItemSubMenuAPI['_subMenu'];
};

type Props = ClosedTagProps &
	MenuItemSubMenuProps & {
		children: RenderProp<ChildrenProps>;
	};

export const MenuItemSubMenu: Component<Props> = props => {
	const [locals, $others] = splitProps(props, [...MENU_ITEM_SUB_MENU_PROPS, 'children']);

	const menuItem = createMenuItemSubMenu(locals);
	const {
		$root,
		$iconSlot,
		$descriptionSlot,
		$labelSlot,
		$expandSlot,
		_icon,
		_label,
		_textDescription,
		hasIcon,
		groupHasIcons,
		$popover,
		_subMenu: subMenuProps,
		contextValue,
	} = menuItem;
	const $ = combineProps($others, $root);

	return (
		<PopoverContextProvider context={contextValue}>
			<Dynamic {...$}>
				<AlignFirstLine height={'xs'} type="action" variant={_label.variant}>
					<Show when={groupHasIcons()}>
						<span {...$iconSlot}>{hasIcon() ? <Icon {..._icon} /> : undefined}</span>
					</Show>
					<span {...$labelSlot}>
						<Label {..._label} />
						<Show when={_textDescription.children}>
							<span {...$descriptionSlot}>
								<Text {..._textDescription} />
							</span>
						</Show>
					</span>
					<span {...$expandSlot}>
						<Icon icon={ChevronRightIcon} />
					</span>
				</AlignFirstLine>
			</Dynamic>
			<Popover {...$popover}>{locals.children({ subMenu: subMenuProps })}</Popover>
		</PopoverContextProvider>
	);
};
