import { MenuItemAction, MenuItemGroup, MenuItemSubMenu } from '@no-comply/standard-ui';
import { Menu, PencilIcon, TrashIcon } from 'lucide-solid';
import { type Component, Show } from 'solid-js';

type ExamplePopoverContentsProps = {
	withSubMenu?: boolean;
};

export const ExampleExampleMenuItemContents: Component<ExamplePopoverContentsProps> = props => {
	return (
		<>
			<MenuItemGroup>
				<MenuItemAction label="Open..." />
				<MenuItemAction label="Close" />
				<MenuItemAction label="Close all" />
			</MenuItemGroup>
			<MenuItemGroup>
				<MenuItemAction icon={PencilIcon} label="Rename" />
				<MenuItemAction disabled label="Publish" />
				<MenuItemAction icon={TrashIcon} intent="negative" label="Delete" />
			</MenuItemGroup>
			<MenuItemGroup label="Grouped">
				<MenuItemAction label="Undo" />
				<MenuItemAction label="Redo" />
				<Show when={props.withSubMenu}>
					<MenuItemSubMenu label="More options">
						{({ subMenu }) => (
							<Menu {...subMenu}>
								<MenuItemAction label="Long option that opens a dialog..." />
								<MenuItemAction label="Short option" />
							</Menu>
						)}
					</MenuItemSubMenu>
				</Show>
			</MenuItemGroup>
		</>
	);
};
